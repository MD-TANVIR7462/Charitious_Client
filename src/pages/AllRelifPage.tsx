import LoaderComponent from "@/component/Ui/Loader";
import { useGetDonationQuery } from "@/redux/api/api";
import { Link } from "react-router-dom";
type TDonation = {
  _id: string;
  name: string;
  title: string;
  Category: string;
  Amount: string;
  image: string;
};

const AllRelifPage = () => {
  const { data } = useGetDonationQuery(undefined);

  if (!data) {
    return <LoaderComponent></LoaderComponent>;
  }
  return (
    <section className="my-16 ">
   
      <div className="w-[90%] mx-auto">
      <div className="mx-auto w-full lg:mx-0 mb-2">
        <h2 className="text-3xl  tracking-tight text-white sm:text-4xl ">
          Meet Our Relief Goods
        </h2>
        <div className="mt-2">
          <span className="inline-block w-40 h-1 rounded-full bg-purple-500 "></span>
          <span className="inline-block w-5 h-1 ml-1 rounded-full bg-purple-500 "></span>
          <span className="inline-block w-2 h-1 ml-1 rounded-full bg-purple-500 "></span>
        </div>
      </div>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8  p-4 ">
          {data?.map((SingleDonation: TDonation) => (
            <div key={SingleDonation._id} className="w-full  shadow-lg ">
              <div className=" rounded-lg overflow-hidden mb-10">
                <img
                  src={SingleDonation?.image}
                  alt="image"
                  className="w-full"
                />
                <div className="p-4 sm:p-4 md:p-4 xl:p-4 text-center  ">
                  <h3>
                    <p
                      className="
                      font-semibold
                      text-dark text-xl
                      sm:text-[22px]
                      md:text-xl
                      lg:text-[22px]
                      xl:text-xl
                      2xl:text-[22px]
                      mb-4
                      block
                      text-white
                     
                      "
                    >
                      {SingleDonation?.title}
                    </p>
                  </h3>
                  <p className="font-semibold  text-gray-300 leading-relaxed mb-7">
                    Category : {SingleDonation?.Category}
                    <p>Price :{SingleDonation?.Amount} </p>
                  </p>
                  <Link
                    to={`/relief-goods/${SingleDonation?._id}`}
                    className="
                   inline-block
                   py-2
                   px-7
                   border border-[#E5E7EB]
                   rounded-full
                   text-base text-body-color
                   font-medium
                   hover:border-primary hover:bg-primary text-white
                   transition
                   cursor-pointer
                   "
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllRelifPage;
