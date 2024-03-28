interface TProfile {
  name: string;
  profileImage: string;
  donationsLastYear: number;
  totalDonation: number;
  month: number;
}

const LeaderCard = ({ singlProile }: { singlProile: TProfile }) => {
  const { name, profileImage, donationsLastYear, totalDonation, month } =
    singlProile;

  return (
    <div className=" font-sans leading-normal tracking-normal shadow-lg">
      <div className="flex justify-center pt-10">
        <div className=" rounded-lg profile-card w-80   md:w-96 p-6">
          <div className="flex justify-center mb-4">
            <div className="border-b-2 border-gray-200 w-full">
              <ul className="flex justify-around"></ul>
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-full border-2 border-purple-500 w-20 h-20   p-1"
            />
          </div>
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold text-white">{name}</h2>
            <p className="text-white">
              {donationsLastYear} donations in the last year
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 ">
            <div className="text-center p-4  rounded-lg border border-dashed border-stone-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-auto text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 9l-5 5-5-5"
                />
              </svg>
              <p className="text-lg text-white font-semibold mt-2">
                ${totalDonation}
              </p>
              <p className="text-xs md:text-sm text-white">Total Donation</p>
            </div>
            <div className="text-center p-4 border border-dashed border-stone-200 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-auto text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M12 6h.01M12 14h.01"
                />
              </svg>
              <p className="text-lg text-white font-semibold mt-2">
                {month}-month
              </p>
              <p className="text-xs md:text-sm text-white ">Donation Streak</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
