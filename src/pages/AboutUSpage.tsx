import { Mail } from "lucide-react";

const AboutUSpage = () => {
  const VolunTeerData = [
    {
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "+1234567890",
      image:
        "https://img.freepik.com/free-photo/businesspeople-office-meeting_23-2148908969.jpg",
    },
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "+1987654321",
      image: "https://source.unsplash.com/random/800x600/?woman",
    },
    {
      name: "Michael Brown",
      email: "michael.brown@example.com",
      phone: "+1122334455",
      image: "https://source.unsplash.com/random/800x600/?man",
    },
    {
      name: "Emily Wilson",
      email: "emily.wilson@example.com",
      phone: "+1567890123",
      image: "https://source.unsplash.com/random/800x600/?woman",
    },
    {
      name: "David Martinez",
      email: "david.martinez@example.com",
      phone: "+1432567890",
      image: "https://source.unsplash.com/random/800x600/?man",
    },
    {
      name: "Olivia Garcia",
      email: "olivia.garcia@example.com",
      phone: "+1654321897",
      image: "https://source.unsplash.com/random/800x600/?woman",
    },
    {
      name: "William Taylor",
      email: "william.taylor@example.com",
      phone: "+1789456123",
      image: "https://source.unsplash.com/random/800x600/?man",
    },
    {
      name: "Sophia Clark",
      email: "sophia.clark@example.com",
      phone: "+1876543219",
      image: "https://source.unsplash.com/random/800x600/?woman",
    },
    {
      name: "Sophia Clark",
      email: "sophia.clark@example.com",
      phone: "+1876543219",
      image: "https://source.unsplash.com/random/800x600/?woman",
    },
  ];

  return (
    <div>
      <div className=" py-4 sm:py-6 md:py-10 px-5 ">
        <div className="mx-auto max-w-full  ">
          <div className="mx-auto w-full lg:mx-0">
            <h2 className="text-3xl  tracking-tight text-white sm:text-4xl ">
              THE VOLUNTEER TEAM
            </h2>
            <div className="mt-2">
              <span className="inline-block w-40 h-1 rounded-full bg-purple-500 "></span>
              <span className="inline-block w-5 h-1 ml-1 rounded-full bg-purple-500 "></span>
              <span className="inline-block w-2 h-1 ml-1 rounded-full bg-purple-500 "></span>
            </div>
          </div>

          <p>
            <ul
              role="list"
              className="mt-3 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  mx-auto"
            >
              {VolunTeerData?.map((volunteer, index) => (
                <div key={index}>
                  <div className="group relative m-0 flex h-72  rounded-xl ring-gray-900/5 sm:mx-auto  ">
                    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-purple-500  opacity-80 transition duration-300 ease-in-out group-hover:opacity-100  dark:opacity-70">
                      <img
                        src={volunteer.image}
                        className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                        alt=""
                      />
                    </div>
                    <div
                      style={{ backgroundColor: "Gray", width: "70%" }}
                      className="p-2 rounded-xl opacity-60 absolute bottom-0 z-20 m-0  border transition duration-300 ease-in-out group-hover:-translate-y-1  group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100"
                    >
                      <h1 className="text-md font-bold text-white ">
                        {volunteer.name}
                      </h1>
                      <h2 className="text-sm  font-light text-white overflow-x-hidden">
                        {volunteer.email}
                      </h2>
                      <h2 className="text-sm font-light text-white ">
                        {volunteer.phone}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUSpage;
