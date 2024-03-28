const Banner = () => {
  return (
    <div className="relative flex flex-col-reverse  md:py-5 lg:py-16 lg:pt-0 lg:flex-col lg:pb-0  mt-12">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://i.ibb.co/Kmh3xhj/Donate-Banner.png"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-300  sm:text-4xl md:text-5xl sm:leading-none  ">
            Everything you
            <br className="hidden md:block " />
            can imagine{" "}
            <span className="inline-block text-deep-purple-accent-400">
              is real
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-300  md:text-lg">
            Support our cause! Donate now to make a difference. Every
            contribution counts
          </p>
          <div className="flex items-center">
            <a className="relative inline-block px-4 py-2 font-medium group cursor-pointer">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-[#2f0554] group-hover:text-white">
                Donate Now
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
