import { useEffect, useState } from "react";

type Tfeedback = {
  _id: string;
  message: string;
};

const CommunityCard = ({ sigleFeedback }: { sigleFeedback: Tfeedback }) => {
  const [message, setmessage] = useState("");
  const [more, setMore] = useState(false);

  useEffect(() => {
    if (sigleFeedback.message.length > 100) {
      setmessage(sigleFeedback.message.slice(0, 99));
      setMore(true);
    } else {
      setmessage(sigleFeedback.message);
      setMore(false);
    }
  }, [sigleFeedback]);
  return (
    <div className="flex w-full justify-center relative top-1/3 h-[150px]">
      <div className="relative border-purple-500 shadow-lg grid grid-cols-1 gap-4 p-4 border rounded-lg  shadow-rose-950">
        <div className="relative flex ">
          <img
            src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
            className="relative rounded-lg -top-8 -mb-4  border  bg-rose-950 bg-opacity-20 backdrop-blur-2xl h-20 w-20"
            alt=""
            loading="lazy"
          />
        </div>
        <p className="-mt-6 text-white  text-xs md:text-sm  overflow-y-auto overflow-ellipsis">
          {message}
          {more && (
            <span
              className="font-bold cursor-pointer text-purple-400"
              onClick={() => {
                setmessage(sigleFeedback?.message);
                setMore(false);
              }}
            >
              ...more
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default CommunityCard;
