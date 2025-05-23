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
  const [loading, setLoading] = useState(false); // State to manage loader visibility
  const [notification, setNotification] = useState(""); // State for success notification

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

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log("User:", result.user);  // Log user details for debugging
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setLoading(true); // Show loader when the review is being submitted
    setNotification(""); // Clear previous notification

    const newReview = {
      name: user.displayName,
      photo: user.photoURL || "https://example.com/default-avatar.jpg",  // Fallback if photoURL is missing
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
      setNotification("Review submitted successfully!"); // Show success notification
    } catch (error) {
      console.error("Error adding review:", error.message);
      setNotification("Failed to submit review. Please try again."); // Show error notification
    } finally {
      setLoading(false); // Hide loader after submission
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 min-h-screen">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-3xl font-bold text-indigo-800">Product Reviews</h2>
          {user ? (
            <div className="flex items-center gap-4">
              <img src={user.photoURL || "https://example.com/default-avatar.jpg"} alt="User" className="w-12 h-12 rounded-full" />
              <button onClick={handleLogout} className="text-sm text-red-500 hover:underline font-semibold">
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-emerald-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-emerald-600 text-sm sm:text-base"
            >
              Sign in with Google
            </button>
          )}
        </div>

        {user && (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
            <div>
              <label className="block text-lg font-medium text-gray-700">Rating</label>
              <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-emerald-500"
              >
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r} value={r}>
                    {r} Star{r > 1 && "s"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Comment</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-emerald-500"
                placeholder="Write your review..."
                required
              />
            </div>

            <button
              type="submit"
              className="bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-emerald-600"
              disabled={loading}  // Disable the button when loading
            >
              {loading ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        )}

        {notification && (
          <div className="mt-6 p-4 text-white bg-green-500 rounded-lg text-center">
            {notification}
          </div>
        )}

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-indigo-800 mb-6">All Reviews</h3>
          {reviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet.</p>
          ) : (
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 shadow-lg bg-white hover:bg-gray-50">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-4">
                    <img
                      src={review.photo || "https://example.com/default-avatar.jpg"}  // Fallback image for missing profile photo
                      alt="User"
                      className="w-14 h-14 rounded-full"
                    />
                    <div>
                      <p className="text-lg font-semibold">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="text-yellow-500 text-lg">
                    {"★".repeat(review.rating)}{" "}
                    <span className="text-gray-300">
                      {"★".repeat(5 - review.rating)}
                    </span>
                  </div>
                  <p className="mt-3 text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReviewPage;
