import { useContext } from "react";
import Navbar from "../../Component/Shared/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddReview = () => {
  const { users } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleClientReview = async(e) => {
    e.preventDefault();
    const from = e.target;
    const shortReview = from.shortReview.value;
    const passion = from.passion.value;
    const review = from.review.value;
    const name = users?.displayName
    const photo = users.photoURL
    const reviewData = {
        shortReview,
        passion,
        review,
        name,
        photo
        
    }
    try {
      const res = await axios.post("https://career-peak-server.vercel.app/reviews", reviewData);
      console.log(res.data);
      if(res.data.insertedId){
        Swal.fire({
          position: "bottom",
          icon: "success",
          title: "Thanks For FeedBack !",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/')
      }
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <img
          className=""
          src="https://i.ibb.co/vx9z4Ky/SHO-BLOG-EEFGuideance-210908-01-1.jpg"
          alt=""
        />
      </div>
      <div className="my-8 max-w-[1440px] mx-auto">
        <h1 className="text-6xl font-semibold text-center text-blue-300">
          Give a Feedback
        </h1>
        <div className="my-5 gap-3 flex">
          <div className="w-1/2 mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Submit Your Review
            </h2>
            <form onSubmit={handleClientReview}>
              <div className="mb-4">
                <label htmlFor="shortReview" className="block text-gray-700 mb-2">
                  Short Review
                </label>
                <select
                  name="shortReview"
                  required
                  className="select select-bordered w-full"
                >
                  <option disabled selected>
                    Select short review
                  </option>
                  <option>Perfect Design</option>
                  <option>Very Useful</option>
                  <option>Not Bad</option>
                  <option>Some Issue</option>
                  <option>Very Bad</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="passion" className="block text-gray-700 mb-2">
                  What is your passion?
                </label>
                <input
                  type="text"
                  id="passion"
                  name="passion"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="review" className="block text-gray-700 mb-2">
                  Review
                </label>
                <textarea
                  id="review"
                  name="review"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit Review
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://i.ibb.co/qyZzFV5/undraw-Personal-file-re-5joy.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
