import LeaderCard from "@/component/Ui/LeaderCard";
import LoaderComponent from "@/component/Ui/Loader";
import { useGetLeaderboardQuery } from "@/redux/api/api";

const LeaderBoardPage = () => {
  const {data}=useGetLeaderboardQuery(undefined)
  const leaderboard = data

if(!data){
  return <LoaderComponent/>
}

  return (
    <>
      <div className="flex flex-wrap -mx-3  my-3 md:my-5">
        <div className="w-full max-w-full px-3 mb-6  mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem]    m-5">
            <div className="flex-auto block py-8 px-9">
              <div>
                <div className="mb-4 md:mb-9 text-center">
                  <div className="mx-auto w-full lg:mx-0 mb-2">
                    <h2 className="text-3xl  tracking-tight text-white sm:text-4xl ">
                      Our Leader Board
                    </h2>
                    <div className="mt-2">
                      <span className="inline-block w-40 h-1 rounded-full bg-purple-500 "></span>
                      <span className="inline-block w-5 h-1 ml-1 rounded-full bg-purple-500 "></span>
                      <span className="inline-block w-2 h-1 ml-1 rounded-full bg-purple-500 "></span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-5 flex-wrap w-full">
                  {leaderboard?.map((singlProile  , index) => (
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
