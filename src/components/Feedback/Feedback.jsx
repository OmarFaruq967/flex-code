import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import Swal from "sweetalert2";
import reviewImg1 from "../../../public/20230810_120154.png";
import { AuthContext } from "../../providers/AuthProvider";
// import useAxiosNormal from "../../hooks/useAxiosNormal";
import PageBannerTitle from "../BannerTitle/PageBannerTitle";
import useAxiosNormal from "../../Hooks/useAxiosNormal";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [exp, setExp] = useState("");
  const [details, setDetails] = useState("");
  const { user } = useContext(AuthContext);
  const [axiosNormal] = useAxiosNormal();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const feedbackDetails = {
      ...data,
      rating,
      image: user?.photoURL,
      userName: user?.displayName,
    };
    axiosNormal.post("/feedback", feedbackDetails).then((data) => {
      if (data.message === "success") {
        Swal.fire({
          title: "Wow! You Leave a feedback!",
          text: "Submit you feedback successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
        reset();
      }
    });
  };
  return (
    <>
      {user && (
        <>
          <PageBannerTitle
            title={"Leave Feedback"}
            shortDesc={"Share your opinion with others."}
          />
          <div className="md:flex gap-10 items-start relative my-5 md:my-16">
            <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2">
              <div className="w-full mb-5">
                <label htmlFor="" className="font-medium p-1">
                  Your name
                </label>
                <input
                  defaultValue={user?.displayName}
                  readOnly
                  type="text"
                  className="w-full px-6 bg-secondary-color py-3 rounded-xl border-2 border-slate-500 outline-none"
                  placeholder="John doe"
                />
              </div>
              <div className="w-full mb-5">
                <label htmlFor="thumbExp" className="font-medium p-1">
                  Your thumb expression
                </label>
                <input
                  onKeyUp={(e) => setExp(e.target.value)}
                  type="text"
                  id="thumbExp"
                  className="w-full px-6 bg-secondary-color py-3 rounded-xl border-2 border-slate-500 hover:border-[#0fcda156] focus:border-[#0fcda156] outline-none"
                  placeholder="Awesome experience"
                  {...register("thumbExpression", { required: true })}
                />
              </div>
              <div className="w-full mb-5">
                <label htmlFor="details" className="text-sm font-semibold px-1">
                  Give your full expression
                </label>
                <textarea
                  onKeyUp={(e) => setDetails(e.target.value)}
                  rows={5}
                  id="details"
                  className="w-full px-6 bg-secondary-color py-3 rounded-xl border-2 border-slate-500 hover:border-[#0fcda156] focus:border-[#0fcda156] outline-none"
                  placeholder="Write details about your experience"
                  {...register("details", { required: true })}
                />
              </div>
              <div className="flex items-center gap-5 mb-8 md:mb-12">
                <span className="text-xl font-semibold px-1">
                  Rate Us.
                </span>
                <div className="flex">
                  <Rating
                    onClick={(value) => setRating(value)}
                    emptySymbol={
                      <FaRegStar className="text-3xl mr-2 text-amber-500" />
                    }
                    fullSymbol={
                      <FaStar className="text-3xl mr-2 text-amber-500" />
                    }
                  />
                </div>
              </div>
              <div className="text-center w-full">
                <button
                  type="submit"
                  className="flexcode-button px-20 md:px-28 py-2 md:py-3"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="md:w-1/2 min-h-[400px] flex flex-col justify-between relative flexcode-banner-bg px-5 md:px-10 py-10 mt-10 md:mt-6 rounded-2xl text-white border border-slate-500 hover:border-[#0fcda156] transition-all duration-300 cursor-pointer">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-5">
                  {exp === "" ? "Your Expression" : exp}
                </h2>
                <p className="min-h-16 text-slate-300">
                  {details === "" ? "Write your experience here..." : details}
                </p>
              </div>
              <div className="">
                <div className="flex flex-col-reverse md:flex-row mt-8 md:items-center justify-between mb-3">
                  <h3 className="text-md md:text-xl font-semibold mt-5 md:mt-0">
                    ~ {user?.displayName || "Your Name"}
                  </h3>
                  <Rating
                    initialRating={rating}
                    readonly
                    className="flex items-center justify-center"
                    emptySymbol={
                      <FaRegStar className="text-xl md:text-2xl ml-3 text-amber-500" />
                    }
                    fullSymbol={
                      <FaStar className="text-xl md:text-2xl ml-3 text-amber-500" />
                    }
                  />
                </div>
                <div className="w-20 h-20 object-cover rounded-full border border-[#0fcda156] p-1 bg-secondary-color absolute">
                  <img
                    src={user?.photoURL || reviewImg1}
                    className="rounded-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Feedback;
