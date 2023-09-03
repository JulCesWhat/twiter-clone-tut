import { BsSearch } from "react-icons/bs";

import LeftSideBar from "./components/LeftSideBar";
import MainComponent from "./components/MainComponent";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <div className="max-w-[70vw] w-full h-full flex relative">
        <LeftSideBar />
        <MainComponent />
        <section className="sticky top-0 w-[25%] flex-col items-stretch h-screen px-6">
          <div>
            <div className="relative w-full h-full">
              <label
                htmlFor="searchBox"
                className="absolute top-0 left-0 h-full flex items-center justify-center"
              >
                <BsSearch className="w-5 h-5 test-gray-500" />
              </label>
              <input
                id="searchBox"
                type="text"
                placeholder="Search twitter.."
                className="outline-none bg-transparent bg-neutral-800 border-none w-full h-full rounded-xl py-4 px-8"
              />
            </div>
          </div>
          <div></div>
          <div></div>
        </section>
      </div>
    </div>
  );
}
