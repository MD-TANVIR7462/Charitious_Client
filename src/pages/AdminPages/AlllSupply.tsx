/* eslint-disable @typescript-eslint/no-explicit-any */
import { Eye, Pencil, Trash } from "lucide-react";
import {
  useDeleteDonationMutation,
  useGetDonationQuery,
  useUpdateDonationMutation,
} from "@/redux/api/api";
import LoaderComponent from "@/component/Ui/Loader";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const AlllSupply = () => {
  const { data, isLoading } = useGetDonationQuery("");

  const [deleteDonation] = useDeleteDonationMutation();
  const [updateDonation] = useUpdateDonationMutation();
  type TsingleData = {
    _id: string;
    title: string;
    Amount: string;
    Category: string;
    image: string;
  };

  const handleDelete = (id: string) => {
    toast((t) => (
      <span className="border-purple-500 bg-purple-100  rounded-lg flex justify-center items-center gap-4">
        <p className="text-red-600">Delete ?</p>
        <button
          className="text-red-500 border-red-500 border px-4 py-1 bg-red-200 rounded-lg"
          onClick={() => {
            deleteDonation(id);
            toast.dismiss(t.id);
          }}
        >
          Yes
        </button>
        <button
          className="text-green-500 border-green-500 border px-4 py-1 bg-green-200 rounded-lg"
          onClick={() => toast.dismiss(t.id)}
        >
          No
        </button>
      </span>
    ));
  };

  const handleEdit = async (e: any, id: string) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const Category = form.category.value;
    const Amount = form.amount.value;

    const updatedData = {
      title,
      Category,
      Amount,
    };



if(updatedData.Category.length>0 && updatedData.Amount.length>0 && updatedData.Amount.length>0) {
  try {

    await updateDonation({ body: updatedData, id });
    toast.success("Informations updated successfully");
  } catch (error) {
    toast.error("Error on  updating ");
    console.error("Error updating donation here:", error);
  }

}

else{
  toast.error("Please Provide Data on  The Form")
  
}

  };

  if (isLoading) {
    return <LoaderComponent />;
  }

  return (
    <div className="flex items-center justify-center min-h-fit">
      <div className="w-full   overflow-x-auto">
        <table className=" table  w-full text-gray-400">
          <thead className="bg-purple-200 text-gray-500">
            <tr>
              <th className="p-3  text-left">Title</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((SingleData: TsingleData) => (
              <tr
                key={SingleData?._id}
                className="border border-purple-500 overflow-x-auto w-full  "
              >
                <td className="p-3">
                  <div className="flex items-center">
                    <img
                      className="rounded-full h-12 w-12 object-cover sm:block hidden"
                      src={SingleData?.image}
                    />
                    <div className="text-xs md:text-sm   sm:ml-2 font-normal md:font-semibold ">
                      <div>{SingleData?.title}</div>
                    </div>
                  </div>
                </td>
                <td className="text-xs pl-5 md:text-sm font-normal md:font-semibold ">
                  {SingleData?.Category}
                </td>
                <td className="text-xs pl-3 md:text-sm font-normal md:font-semibold ">
                  {SingleData?.Amount}
                </td>
                <td className="text-xs md:text-sm ">
                  <div className="flex  gap-4">
                    <Link to={`/relief-goods/${SingleData?._id}`}>
                      <button className="text-gray-400   cursor-pointer hover:text-green-600">
                        <Eye className=" w-4 h-4 sm:w-5 sm:h-5  " />
                      </button>
                    </Link>

                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="text-gray-400  cursor-pointer hover:text-blue-600">
                          <Pencil className="w-4 h-4 sm:w-5 sm:h-5 " />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px] bg-purple-200">
                        <DialogHeader>
                          <DialogTitle>Edit {SingleData?.title}</DialogTitle>
                        </DialogHeader>
                        <form
                          onSubmit={(e)=>handleEdit(e,SingleData?._id)}
                          className="grid gap-4 py-4"
                        >
                          <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="name" className="">
                              Title
                            </label>
                            <Input
                              id="title"
                             
                              defaultValue={SingleData?.title}
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="username" className="">
                              Amount
                            </label>
                            <Input
                              id="amount"
                              defaultValue={SingleData?.Amount}
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="username" className="">
                              Category
                            </label>
                            <Input
                              id="category"
                              defaultValue={SingleData?.Category}
                              className="col-span-3"
                            />
                          </div>
                          {/* <DialogTrigger asChild> */}
                            <Button
                              type="submit"
                              className="flex justify-end border border-purple-500 w-fit text-purple-500 ml-auto"
                            >
                              Save changes
                            </Button>
                          {/* </DialogTrigger> */}
                        </form>
                      </DialogContent>
                    </Dialog>

                    <button className="text-gray-400   cursor-pointer hover:text-red-600">
                      <Trash
                        className="w-4 h-4 sm:w-5 sm:h-5 "
                        onClick={() => handleDelete(SingleData?._id)}
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlllSupply