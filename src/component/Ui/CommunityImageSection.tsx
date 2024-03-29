const CommunityImageSection = () => {
  return (
    <div>
      <section className="">
        <div className="max-w-7xl px-6 py-16 mx-auto ">
          <div className="mx-auto w-full lg:mx-0">
            <h2 className="text-3xl  tracking-tight text-white  sm:text-4xl ">
              OUR COMMUNITY
            </h2>
            <div className="mt-2">
              <span className="inline-block w-40 h-1 rounded-full bg-purple-500 "></span>
              <span className="inline-block w-5 h-1 ml-1 rounded-full bg-purple-500 "></span>
              <span className="inline-block w-2 h-1 ml-1 rounded-full bg-purple-500 "></span>
            </div>
          </div>

          <img
            className="object-cover object-center w-full mt-16 rounded-md shadow h-80"
            src="https://images.unsplash.com/photo-1600069226367-412873fb0637?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
        </div>
      </section>

      <section className="border border-dashed border-purple-500 rounded-sm bg-gray-300 bg-opacity-20 backdrop-blur-xl">
        <div className="max-w-5xl px-6 py-16 mx-auto space-y-8 md:flex md:items-center md:space-y-0">
          <div className="md:w-2/3">
            <div className="hidden md:flex md:items-center md:space-x-10">
              <img
                className="object-cover object-center rounded-md shadow w-72 h-72"
                src="https://i.ibb.co/WBgRBT3/seth-doyle-zf9-yi-Aek-Js-unsplash.jpg"
              />
              <img
                className="object-cover object-center w-64 rounded-md shadow h-96"
                src="https://i.ibb.co/X5rTx55/masjid-pogung-dalangan-c-My-Evxr7-Uzg-unsplash.jpg"
              />
            </div>
            <h2 className="text-3xl font-semibold text-white md:mt-6">
              Our Donation Process
            </h2>
            <p className="max-w-lg mt-4 text-gray-200">
              Our platform offers a seamless donation process, making it easy
              for you to support causes that matter to you. With just a few
              clicks, you can make a difference in the lives of those in need.
            </p>
          </div>
          <div className="md:w-1/3">
            <img
              className="object-cover object-center  md:h-[650px] w-full rounded-md shadow"
              src="https://i.ibb.co/JRBJHWp/andrea-buccelli-9b87lr-Cpd-OQ-unsplash.jpg"
            />
          </div>
        </div>
      </section>

      <section className="">
        <div className="max-w-5xl px-6 py-16 mx-auto text-center">
          <div className="mx-auto w-full lg:mx-0">
            <h2 className="text-3xl  tracking-tight text-white sm:text-4xl ">
              OUR LEADERSHIP
            </h2>
            <div className="mt-2">
              <span className="inline-block w-40 h-1 rounded-full bg-purple-500 "></span>
              <span className="inline-block w-5 h-1 ml-1 rounded-full bg-purple-500 "></span>
              <span className="inline-block w-2 h-1 ml-1 rounded-full bg-purple-500 "></span>
            </div>
          </div>

          <div className="grid gap-8 mt-6 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-md shadow"
                src="https://i.ibb.co/frP7PNF/IMG-20230623-WA0068.jpg"
              />
              <h3 className="mt-2 font-medium text-white">John Doe</h3>
              <p className="text-sm text-purple-500">CEO</p>
            </div>

            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-md shadow"
                src="https://i.ibb.co/S3BhqcL/Picture-9.png"
              />
              <h3 className="mt-2 font-medium text-white">John Doe</h3>
              <p className="text-sm text-purple-500">COO</p>
            </div>

            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-md shadow"
                src="https://i.ibb.co/tKd2PfC/Picture-8.png"
              />
              <h3 className="mt-2 font-medium text-white">John Doe</h3>
              <p className="text-sm text-purple-500">CEO</p>
            </div>

            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-md shadow"
                src="https://images.unsplash.com/photo-1614030126544-b79b92e29e98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              />
              <h3 className="mt-2 font-medium text-white">John Doe</h3>
              <p className="text-sm text-purple-500">COO</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityImageSection;
