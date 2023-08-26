import Link from "next/link";
import { BiHomeCircle, BiUserCircle } from "react-icons/bi";
import { BsBell, BsBookmark, BsThreeDots, BsTwitter } from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";

const NAVIGATION_ITEMS = [
  {
    title: "",
    icon: BsTwitter,
  },
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Explore",
    icon: HiOutlineHashtag,
  },
  {
    title: "Notifications",
    icon: BsBell,
  },
  {
    title: "Messages",
    icon: HiOutlineEnvelope,
  },
  {
    title: "Bookmarks",
    icon: BsBookmark,
  },
  {
    title: "Profile",
    icon: BiUserCircle,
  },
];

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <section className="fixed w-[275px] flex flex-col items-stretch h-screen">
          <div className="w-full flex flex-col items-stretch h-full space-y-4 mt-4">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                className=" hover:bg-white/10 transition duration-200 text-2xl flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6"
                key={item.title}
                href={`/${item.title.toLocaleLowerCase()}`}
              >
                <item.icon />
                {item.title && <div>{item.title}</div>}
              </Link>
            ))}
            <button className="rounded-full m-4 bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
              Tweet
            </button>
          </div>
          <button className="rounded-full m-4 flex items-center space-x-2 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between">
            <div className=" flex items-center space-x-2">
              <div className="rounded-full bg-slate-400 w-12 h-12"></div>
              <div className="text-left text-sm">
                <div className="font-semibold">Club Of Coders</div>
                <div>@Sashi</div>
              </div>
            </div>
            <div>
              <BsThreeDots />
            </div>
          </button>
        </section>
        {/* <main>main</main>
        <section>right sidebar</section> */}
      </div>
    </div>
  );
}
