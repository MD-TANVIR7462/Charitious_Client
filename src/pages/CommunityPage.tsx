/* eslint-disable @typescript-eslint/no-explicit-any */
import CommunityCard from "@/component/Ui/CommunityCard";
import CommunityImageSection from "@/component/Ui/CommunityImageSection";
import LoaderComponent from "@/component/Ui/Loader";
import { useAddFeedbackMutation, useGetFeedbackQuery } from "@/redux/api/api";
import toast from "react-hot-toast";

const CommunityPage = () => {
  const [addFeedback] = useAddFeedbackMutation();
  const { data } = useGetFeedbackQuery(undefined);

  type Tfeedback = {
    _id: string;
    message: string;
  };

  const handleFeedback = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    const feedbackData = { message };
    try {
      addFeedback(feedbackData);
      toast.success("Feedback added");
      form.reset();
    } catch (err) {
      toast.error("Action failed");
      form.reset();
    }
  };


if(!data){
  return <LoaderComponent/>
}

  return (
    <div className="w-[95%] mx-auto">
      <CommunityImageSection></CommunityImageSection>
      <div className="mx-auto w-full lg:mx-0">
        <h2 className="text-3xl  tracking-tight text-white  sm:text-4xl ">
          What our users say!
        </h2>
        <div className="mt-2 ">
          <span className="inline-block w-40 h-1 rounded-full bg-purple-500  "></span>
          <span className="inline-block w-5 h-1 ml-1 rounded-full bg-purple-500  "></span>
          <span className="inline-block w-2 h-1 ml-1 rounded-full bg-purple-500  "></span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  gap-6 ">
        {data?.map((sigleFeedback: Tfeedback) => (
          <CommunityCard
            sigleFeedback={sigleFeedback}
            key={sigleFeedback._id}
          ></CommunityCard>
        ))}
      </div>
      <div className="my-20">
        <div className="mx-auto w-full lg:mx-0  ">
          <h2 className="text-3xl  tracking-tight text-white  sm:text-4xl ">
            Any Feedback?
          </h2>
          <div className="mt-2 ">
            <span className="inline-block w-40 h-1 rounded-full bg-purple-500  "></span>
            <span className="inline-block w-5 h-1 ml-1 rounded-full bg-purple-500  "></span>
            <span className="inline-block w-2 h-1 ml-1 rounded-full bg-purple-500  "></span>
          </div>
        </div>

        <form className="mt-4 sm:mt-4 md:mt-6" onSubmit={handleFeedback}>
          <div className="relative z-0 col-span-2">
            <textarea
              name="message"
              minLength={52}
              required
              rows={4}
              className="peer block w-full appearance-none border-0 border-b border-purple-500  bg-transparent py-2.5 px-0 text-sm text-white  focus:outline-none focus:ring-0"
              placeholder=" "
            ></textarea>
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 text-purple-300">
              Your message
            </label>
          </div>

          <button
            type="submit"
            className="mt-5 rounded-md border border-purple-500 btn  px-10 py-2 text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommunityPage;
