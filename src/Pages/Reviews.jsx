import { useState, useEffect } from 'react';
import { auth, db, provider, signInWithPopup, signOut } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp
} from "firebase/firestore";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ReviewPage = () => {
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState("");
  const [progress, setProgress] = useState(0); // Progress bar state
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  const fetchReviews = async () => {
    try {
      const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const loadedReviews = querySnapshot.docs.map(doc => doc.data());
      setReviews(loadedReviews);
    } catch (err) {
      console.error("Failed to fetch reviews:", err.message);
    }
  };

  useEffect(() => {
    fetchReviews();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Calculate the distribution of ratings
  const calculateRatingDistribution = () => {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach((review) => {
      distribution[review.rating] += 1;
    });
    return distribution;
  };

  const calculateOverallRating = () => {
    const totalStars = reviews.reduce((acc, review) => acc + review.rating, 0);
    return totalStars / reviews.length || 0;
  };

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
  };

  useEffect(() => {
    let timer;
    if (notification) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 20;
        });
      }, 1000);

      setTimeout(() => {
        setNotification('');
        setProgress(0);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [notification]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setLoading(true);
    setNotification("");

    const newReview = {
      name: user.displayName,
      photo: user.photoURL || "https://example.com/default-avatar.jpg",
      rating,
      comment,
      date: new Date().toLocaleDateString(),
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "reviews"), newReview);
      setComment("");
      setRating(5);
      fetchReviews();
      setNotification("Review submitted!");
    } catch (error) {
      console.error("Error adding review:", error.message);
      setNotification("Failed to submit review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle Pagination
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const ratingDistribution = calculateRatingDistribution();
  const totalReviews = reviews.length;

  return (
    <>
      <Navbar />
      <div className="w-full">
        {/* Header with background */}
        <div className="bg-BGHeader bg-no-repeat bg-cover bg-center">
          <div className="max-w-6xl w-full mx-auto px-8 sm:px-10 lg:px-12 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <h2 className="text-6xl font-bold text-indigo-950">Product Reviews</h2>
              {user ? (
                <div className="flex items-center gap-4">
                  <img src={user.photoURL || "https://example.com/default-avatar.jpg"} alt="User" className="w-16 h-16 rounded-full" />
                  <button onClick={handleLogout} className="text-lg text-red-500 hover:underline font-semibold">
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleLogin}
                  className="bg-emerald-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-emerald-600 text-base sm:text-lg"
                >
                  Sign in with Google
                </button>
              )}
            </div>
          </div>
        </div>

      <div className="max-w-6xl w-full mx-auto px-8 sm:px-10 lg:px-12 py-6 min-h-screen">


        {/* Toast Notification */}
        {notification && (
          <div
            className={`fixed top-32 right-4 p-4 text-white rounded-md shadow-lg transition-all duration-300 ${
              notification.includes('successfully') ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            <div className="flex flex-col items-start">
              <span>{notification}</span>
              {/* Progress Bar */}
              <div className="w-full h-1 bg-white mt-2 rounded-full">
                <div
                  className="h-1 bg-yellow-500 rounded-full"
                  style={{
                    width: `${progress}%`,
                    transition: 'width 1s linear',
                  }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* Display Overall Rating */}
        <div className="mt-8 mb-8">
          <h3 className="text-3xl font-semibold text-indigo-800 mb-4">Overall Rating</h3>
          <div className="flex items-center gap-2 text-yellow-500 text-4xl">
            {"★".repeat(Math.round(calculateOverallRating()))}
            {"★".repeat(5 - Math.round(calculateOverallRating()))}
          </div>
          <p className="text-lg text-gray-500 mt-2">Based on {totalReviews} review{totalReviews > 1 ? 's' : ''}</p>
        </div>

        {/* Display Rating Distribution */}
        <div className="mt-8 mb-8">
          <h3 className="text-3xl font-semibold text-indigo-800 mb-4">Rating Distribution</h3>
          <div className="flex flex-col gap-4">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center gap-2">
                <div className="flex text-yellow-500 text-2xl">
                  {"★".repeat(stars)}{" "}
                  <span className="text-gray-300">{"★".repeat(5 - stars)}</span>
                </div>
                <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-yellow-500 h-2"
                    style={{
                      width: `${(ratingDistribution[stars] / totalReviews) * 100}%`,
                    }}
                  />
                </div>
                <span className="ml-2">{ratingDistribution[stars]}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-500 mt-2">Based on {totalReviews} review{totalReviews > 1 ? 's' : ''}</p>
        </div>

        {/* Review Submission Form */}
        {user && (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <div>
              <label className="block text-xl font-medium text-gray-700">Rating</label>
              <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-6 py-3 focus:ring-emerald-500 text-lg"
              >
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r} value={r}>
                    {r} Star{r > 1 && "s"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xl font-medium text-gray-700">Comment</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-6 py-3 focus:ring-emerald-500 text-lg"
                placeholder="Write your review..."
                required
              />
            </div>

            <button
              type="submit"
              className="bg-emerald-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-emerald-600 text-lg"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <span className="loading loading-bars loading-xs"></span>
                  <span className="ml-2">Submitting...</span>
                </span>
              ) : (
                "Submit Review"
              )}
            </button>
          </form>
        )}

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-indigo-800 mb-6">All Reviews</h3>
          {reviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet.</p>
          ) : (
            <div className="space-y-6">
              {currentReviews.map((review, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-8 shadow-lg bg-white hover:bg-gray-50">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-4">
                    <img
                      src={review.photo || "https://example.com/default-avatar.jpg"}
                      alt="User"
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <p className="text-xl font-semibold">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="text-yellow-500 text-xl">
                    {"★".repeat(review.rating)}{" "}
                    <span className="text-gray-300">
                      {"★".repeat(5 - review.rating)}
                    </span>
                  </div>
                  <p className="mt-4 text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: Math.ceil(reviews.length / reviewsPerPage) }, (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-6 py-3 rounded-lg text-lg ${currentPage === index + 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default ReviewPage;
