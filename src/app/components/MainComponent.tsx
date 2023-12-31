import React from "react";

import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { IoStatsChart, IoShareOutline } from "react-icons/io5";

const MainComponent = () => {
  return (
    <main className="w-[60%] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
      <h1 className="text-xl font-bold my-4 p-6 backdrop-blur bg-black/10 sticky top-0">
        Home
      </h1>
      <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch space-x-2 py-6 border-gray-600 relative">
        <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
        <div className="flex flex-col w-full h-full">
          <input
            type="text"
            className=" w-full h-full placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none"
            placeholder="What's happening.. "
          />
          <div className="w-full justify-between items-center flex">
            <div></div>
            <div className="w-full max-w-[100px]">
              <button className="rounded-full bg-primary px-4 py-2 w-full text-lg text-center hover:bg-opacity-70 transition duration-200 font-bold">
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col">
        {Array.from({ length: 5 }).map((_, i) => {
          return (
            <div
              key={i}
              className="border-t-[0.5px] border-gray-600 p-4 flex space-x-4"
            >
              <div>
                <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
              </div>
              <div className=" flex flex-col">
                <div className="flex items-center w-full justify-between">
                  <div className="flex items-center space-x-1 w-full">
                    <div className=" font-bold">Club of Coders</div>
                    <div className="text-gray-500">@tigrillow</div>
                    <div className="text-gray-500">
                      <BsDot />
                    </div>
                    <div className="text-gray-500">1 hour ago</div>
                  </div>
                  <div>
                    <BsThreeDots />
                  </div>
                </div>
                <div className=" text-white text-base  my-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima ex hic nihil possimus odio, alias mollitia earum
                  cupiditate natus blanditiis incidunt ut quasi ipsum voluptas
                  officia facilis impedit. Est corrupti quia voluptatum
                  repellendus debitis earum blanditiis minus eligendi quod et
                  alias libero ullam impedit provident, dolores totam voluptate
                  fuga officia saepe perspiciatis quo rerum nam itaque! Itaque,
                  sunt! Architecto eligendi, cupiditate fuga sapiente deleniti
                  dolorum similique cum numquam laudantium alias nesciunt
                  repellat doloribus quasi quod impedit recusandae sequi fugit.
                  Exercitationem ipsam officiis cumque dolorum iusto adipisci
                  labore accusamus, quibusdam quam aperiam dolor ut optio
                  impedit nostrum enim non voluptatum ducimus.
                </div>
                <div className=" bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2"></div>
                <div className=" flex items-center justify-start space-x-20 mt-4 w-full">
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                    <BsChat />
                  </div>
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                    <AiOutlineRetweet />
                  </div>
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                    <AiOutlineHeart />
                  </div>
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                    <IoStatsChart />
                  </div>
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                    <IoShareOutline />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default MainComponent;
