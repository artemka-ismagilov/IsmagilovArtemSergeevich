// import {} from "./Header.css";
import { MdWatchLater } from "react-icons/md";
import { IoMdStopwatch } from "react-icons/io";
import { IoIosTimer } from "react-icons/io";

export default function Header() {
  return (
    <div>
      <header className="flex  text-2xl  border-b-2 p-4 w-full">
        <div className=" flex indent-16 items-center ml-96">
          <MdWatchLater className="absolute flex ml-8 h-6" />
          <a className=" text-blue-500 no-underline  font-semibold" href="/">
            Время сейчас
          </a>
          <IoMdStopwatch className="absolute flex ml-64 h-6" />
          <a
            className=" text-blue-500 no-underline font-semibold"
            href="/stopwatch"
          >
            Секундомер
          </a>
          <div>
            <IoIosTimer className=" absolute ml-10 mt-1.5 h-6" />
            <a
              className=" text-blue-500 no-underline font-semibold"
              href="/timer"
            >
              Таймер
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
