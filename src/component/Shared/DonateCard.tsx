import { Link } from "react-router-dom";
import { useGetDonationQuery } from "@/redux/api/api";
import LoaderComponent from "../Ui/Loader";
type TDonation = {
  _id: string;
  name: string;
  title: string;
  Category: string;
  Amount: string;
  image: string;
};

const DonateCard = () => {
  const { data } = useGetDonationQuery(undefined);
  const donationData = data;
  const displayedDonations = donationData?.slice(0, 6);
  if (!data) {
    return <LoaderComponent/>;
  }

  return (
    <section className="my-16">
      <h1 className="text-2xl md:text-4xl font-semibold leading-9 text-center text-gray-300 dark:text-gray-50  mb-4 md:mb-8">
        Meet Our Relief Goods
      </h1>
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 p-2  md:p-4 ">
          {displayedDonations?.map((SingleDonation: TDonation) => (
            <div key={SingleDonation._id} className="w-full  shadow-2xl">
              <div className=" rounded-lg overflow-hidden mb-10">
                <img
                  src={SingleDonation?.image}
                  alt="image"
                  className="w-full"
                />
                <div className="p-4 sm:p-4 md:p-4 xl:p-4 text-center  ">
                  <h3>
                    <a
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
                    </a>
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
                   hover:border-primary hover:bg-primary hover:text-white
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
      <div className="flex justify-center">
        <Link to="/relief-goods">
          <a className="relative inline-block px-4 py-2 font-medium group cursor-pointer">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
              View ALl
            </span>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default DonateCard;
