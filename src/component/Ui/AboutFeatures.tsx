const AboutFeatures = () => {
  return (
    <section className=" body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="mb-4 md:mb-9 ">
          <div className="mx-auto w-full lg:mx-0 mb-2">
            <h2 className="text-3xl  tracking-tight text-white sm:text-4xl ">
              Last One Years
            </h2>
            <div className="mt-2">
              <span className="inline-block w-40 h-1 rounded-full bg-purple-500 "></span>
              <span className="inline-block w-5 h-1 ml-1 rounded-full bg-purple-500 "></span>
              <span className="inline-block w-2 h-1 ml-1 rounded-full bg-purple-500 "></span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border shadow-lg shadow-border shadow-lg shadow-rose-950 border-purple-500 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-purple-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M8 17l4 4 4-4m-4-5v9"></path>
                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-white">
                27K
              </h2>
              <p className="leading-relaxed text-white ">Donations</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border shadow-lg shadow-rose-950 border-purple-500 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-purple-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-white">
                1.3K
              </h2>
              <p className="leading-relaxed text-white ">Users</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border shadow-lg shadow-rose-950 border-purple-500 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-purple-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-white">74</h2>
              <p className="leading-relaxed text-white ">Projects</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border shadow-lg shadow-rose-950 border-purple-500 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-purple-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-white">46</h2>
              <p className="leading-relaxed text-white ">Places</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;
