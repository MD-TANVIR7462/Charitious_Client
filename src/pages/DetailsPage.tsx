/* eslint-disable @typescript-eslint/no-explicit-any */
import LoaderComponent from "@/component/Ui/Loader";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DetailsPage = () => {
  type TData = {
    image: string;
    title: string;
    Category: string;
    Amount: string;
    description?: string;
  };
  const data = useLoaderData() as TData;

  const { description, Amount } = data;
  const [dis, setDis] = useState("");
  const [more, setMore] = useState(true);

  useEffect(() => {
    if (description?.length && description.length > 200) {
      setDis(description.slice(0, 200));
    } else {
      setDis(description as any);
      setMore(false);
    }
  }, [description]);

  const handleMore = () => {
    setDis(description as any);
    setMore(false);
  };

  if (!data) {
    return <LoaderComponent></LoaderComponent>;
  }

  return (
    <>
      <div className="min-w-screen min-h-[80dvh]  flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                <img
                  src={data?.image}
                  className="w-full relative z-10"
                  alt=""
                />
                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold uppercase text-xl mb-5">
                  {data?.title}
                </h1>
                <p className="text-sm font-serif">
                  {dis}
                  <a className="opacity-80 text-gray-900 hover:opacity-100 inline-block text-xs  border-gray-900">
                    {more && (
                      <i
                        className="ml-1 cursor-pointer text-purple-700"
                        onClick={handleMore}
                      >
                        ....MORE{" "}
                      </i>
                    )}
                  </a>
                </p>
              </div>
              <div>
                <div className="inline-block align-bottom mr-5">
                  <p className="font-bold">
                    Category : <span className="text-md">{data?.Category}</span>
                  </p>
                  <span className="text-2xl leading-none align-baseline text-green-600">
                    $
                  </span>

                  <span className="text-2xl leading-none align-baseline">
                    {Amount}
                  </span>
                </div>
                <div className="inline-block align-bottom ">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                        <i className="mdi mdi-cart -ml-2 mr-2"></i> Donate NOW
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md bg-purple-200 ">
                      <DialogHeader>
                        <DialogTitle className="mb-2 text-purple-500">
                          {data?.title}
                        </DialogTitle>
                        <DialogDescription>{description}</DialogDescription>
                      </DialogHeader>
                      <div className="flex items-center space-x-8 ">
                        <p className="text-purple-500 font-semibold ">
                          Category :{" "}
                          <span className="text-black font-normal">
                            {data?.Category}
                          </span>
                        </p>
                        <p className="text-purple-500 font-semibold">
                          Amount :{" "}
                          <span className="text-black font-normal">
                            {" "}
                            {Amount}
                          </span>
                        </p>
                      </div>
                      <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                          <Link to={"/dashboard"}>
                            {" "}
                            <Button
                              type="button"
                              variant="secondary"
                              className="text-purple-500 border border-purple-500 "
                            >
                              Confirm
                            </Button>
                          </Link>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
