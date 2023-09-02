import LeftSideBar from "./components/LeftSideBar";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSideBar />
        <main className="ml-[275px] p-5 flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-xl font-bold">Home</h1>
          <div className="border-t-[0.5px] border-b-[0.5px] border-gray-600 h-32 relative">
            <div className="w-10 h-10 bg-slate-400 rounded-full"></div>
            <div className="flex flex-col">
              <div className="border-b-[0.5px]">
                <input type="text" placeholder="What's happening.. " />
              </div>
              <div className="w-full justify-between items-center flex"></div>
              <div></div>
              <div>
                <button className="rounded-full m-4 bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </main>
        {/* <section>right sidebar</section> */}
      </div>
    </div>
  );
}
