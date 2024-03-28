import LeaderCard from "@/component/Ui/LeaderCard";

const LeaderBoardPage = () => {
  const leaderboard = [
    {
      name: "John Doe",
      profileImage: "https://source.unsplash.com/random/800x600/?person",
      donationsLastYear: 25,
      totalDonation: 1500,
      month: 15,
    },
    {
      name: "Jane Smith",
      profileImage: "https://source.unsplash.com/random/800x600/?portrait",
      donationsLastYear: 13,
      totalDonation: 750,
      month: 12,
    },
    {
      name: "Alice Johnson",
      profileImage: "https://source.unsplash.com/random/800x600/?woman",
      donationsLastYear: 40,
      totalDonation: 2000,
      month: 17,
    },
    {
      name: "Bob Brown",
      profileImage: "https://source.unsplash.com/random/800x600/?man",
      donationsLastYear: 30,
      totalDonation: 1800,
      month: 7,
    },
    {
      name: "Emily Wilson",
      profileImage: "https://source.unsplash.com/random/800x600/?girl",
      donationsLastYear: 20,
      totalDonation: 1200,
      month: 11,
    },
    {
      name: "Michael Lee",
      profileImage: "https://source.unsplash.com/random/800x600/?boy",
      donationsLastYear: 35,
      totalDonation: 2100,
      month: 17,
    },
    {
      name: "Sarah Clark",
      profileImage: "https://source.unsplash.com/random/800x600/?people",
      donationsLastYear: 18,
      totalDonation: 900,
      month: 13,
    },
    {
      name: "David Garcia",
      profileImage: "https://source.unsplash.com/random/800x600/?face",
      donationsLastYear: 28,
      totalDonation: 1600,
      month: 9,
    },
    {
      name: "Olivia Martinez",
      profileImage: "https://source.unsplash.com/random/800x600/?profile",
      donationsLastYear: 15,
      totalDonation: 1000,
      month: 15,
    },
  ];

  return (
    <>
      <div className="flex flex-wrap -mx-3  my-3 md:my-5">
        <div className="w-full max-w-full px-3 mb-6  mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] md:border border-dashed border-stone-200  m-5">
            <div className="flex-auto block py-8 px-9">
              <div>
                <div className="mb-4 md:mb-9">
                  <h1 className="mb-2 text-2xl sm:text-3xl font-semibold text-white text-center">
                    Our Leader Board
                  </h1>
                </div>
                <div className="flex justify-center gap-0  md:gap-5 flex-wrap w-full">
                  {leaderboard?.map((singlProile, index) => (
                    <LeaderCard
                      singlProile={singlProile}
                      key={index}
                    ></LeaderCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderBoardPage;
