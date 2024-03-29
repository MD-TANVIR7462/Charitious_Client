import { useAddDonationMutation } from "@/redux/api/api";
import toast from "react-hot-toast";

/* eslint-disable @typescript-eslint/no-explicit-any */
const AddSupply = () => {

   const [addDonation] = useAddDonationMutation();

  const handleAddSuppy = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.img.value;
    const Category = form.category.value;
    const description = form.description.value;
    const Amount = form.amount.value;

    const newData = {
      title,
      image,
      Category,
      description,
      Amount,
    };


try{
   addDonation(newData);
   toast.success("New Supply Created Successfully")

}
catch(err){
   toast.error("Facing some Error While Processing")
}

  };
  return (
    <form onSubmit={handleAddSuppy}>
      <div className=" md:px-20 pt-2  xl:pt-6">
        <div className=" bg-purple-200 rounded-md px-6 py-10 max-w-2xl mx-auto">
          <h1 className="text-center text-2xl font-bold text-purple-500 mb-10">
            ADD SUPPLY
          </h1>
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="text-lx font-serif">
                Title:
              </label>
              <input
                type="text"
                name="title"
                required
                placeholder="title"
                id="title"
                className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block mb-2 text-lg font-serif"
              >
                Description:
              </label>
              <textarea
                id="description"
                required
                cols={30}
                name="description"
                rows={10}
                placeholder="whrite here.."
                className="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"
              ></textarea>
            </div>
            <div>
              <label htmlFor="Category" className="text-lx font-serif">
                Category:
              </label>
              <input
                type="text"
                required
                placeholder="Category"
                id="Category"
                name="category"
                className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-lx font-serif mr-1">
                Amount:
              </label>
              <input
                type="number"
                required
                placeholder="Amount"
                id="amount"
                name="amount"
                className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="Image Link" className="text-lx font-serif">
                Img Link:
              </label>
              <input
                type="text"
                required
                placeholder="Please Provide Img Link"
                id="img"
                name="img"
                className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
              />
            </div>
            <button
              type="submit"
              className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-purple-500 border border-purple-500 bg-purple-100   "
            >
              ADD SUPPLY
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddSupply;
