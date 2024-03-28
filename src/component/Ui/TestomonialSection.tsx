import Marquee from "react-fast-marquee";

const TestomonialSection = () => {
  const allTestimonial = [
    {
      id: 21,
      name: "Tajul islam",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80",
      review:
        "This is a  great platform for donation. I really like this doing. Lot of people are included .They are always try to work best and giving lot of",
      days: 2,
    },
    {
      id: 22,
      name: "Hridoy Ahmed",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80",
      review:
        "This is a  great platform for donation. I really like this doing. Lot of people are included .They are always try to work best and giving lot of",
      days: 4,
    },
    {
      id: 23,
      name: "Miftha Hossain",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80",
      review:
        "This is a  great platform for donation. I really like this doing. Lot of people are included .They are always try to work best and giving lot of",
      days: 3,
    },
    {
      id: 24,
      name: "Lucifer",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80",
      review:
        "This is a  great platform for donation. I really like this doing. Lot of people are included .They are always try to work best and giving lot of",
      days: 5,
    },
    {
      id: 25,
      name: "Sabeer alam",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80",
      review:
        "This is a  great platform for donation. I really like this doing. Lot of people are included .They are always try to work best and giving lot of",
      days: 8,
    },
    {
      id: 26,
      name: "Mr.Jonathan",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80",
      review:
        "This is a  great platform for donation. I really like this doing. Lot of people are included .They are always try to work best and giving lot of",
      days: 10,
    },
  ];
  return (
    <section className="mt-14">
      <h1 className="text-2xl md:text-4xl font-semibold leading-9 text-center   text-gray-300 ">
        Our Valuable Reviews
      </h1>

      <Marquee>
        {allTestimonial?.map((SigleTestimonial) => (
          <div
            key={SigleTestimonial.id}
            className=" flex shadow-xl my-6 md:my-12 flex-col w-[92%] max-w-lg p-6 mx-auto divide-y rounded-md  "
          >
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://source.unsplash.com/100x100/?portrait"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-200">
                    {SigleTestimonial?.name}
                  </h4>
                  <span className="text-xs  text-purple-200">
                    {SigleTestimonial?.days} days ago
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-yellow-200 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold text-green-500 ">4.5</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-gray-300 ">
              <p className="">
                Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
                finibus.
              </p>
              <p>{SigleTestimonial.review}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default TestomonialSection;
