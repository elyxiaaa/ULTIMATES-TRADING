import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom"; 
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

    const newReview = {
      name: user.displayName,
      photo: user.photoURL,
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
    } catch (error) {
      console.error("Error adding review:", error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 min-h-screen">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Product Reviews</h2>
          {user ? (
            <div className="flex items-center gap-4">
              <img src={user.photoURL} alt="User" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
              <button onClick={handleLogout} className="text-sm text-red-500 hover:underline">
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600 text-sm sm:text-base"
            >
              Sign in with Google
            </button>
          )}
        </div>

        {user && (
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 sm:p-6 rounded shadow">
            <div>
              <label className="block text-sm font-medium">Rating</label>
              <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-emerald-500"
              >
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r} value={r}>
                    {r} Star{r > 1 && "s"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Comment</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows="4"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-emerald-500"
                placeholder="Write your review..."
                required
              />
            </div>

            <button
              type="submit"
              className="bg-emerald-500 text-white px-6 py-2 rounded hover:bg-emerald-600"
            >
              Submit Review
            </button>
          </form>
        )}

        <div className="mt-10">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">All Reviews</h3>
          {reviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet.</p>
          ) : (
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="border border-gray-200 p-4 sm:p-5 rounded shadow-sm bg-white"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-2">
                    <img
                      src={review.photo}
                      alt="User"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="text-yellow-500 text-sm sm:text-base">
                    {"★".repeat(review.rating)}{" "}
                    <span className="text-gray-300">
                      {"★".repeat(5 - review.rating)}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-700 text-sm sm:text-base">{review.comment}</p>
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
