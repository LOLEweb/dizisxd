import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Tooltip } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#102333] via-[#335881] to-[#102333] min-h-screen flex flex-col">
        <Header />
        <div className="text-white flex flex-grow py-5">
          <div className="main px-4">
            <h1 className=" text-4xl font-bold">About me💻</h1>
            <div className=" backdrop-blur-3xl bg-[#141414]/50 rounded-[10px] md:flex-row flex-col p-4 flex w-full max-w-[880px] mt-5 items-center">
              <div className=" w-full max-w-52 md:mb-0 mb-2">
                  <img
                    src={
                      "https://avatars.githubusercontent.com/u/125983594?v=4"
                    }
                    alt="avatar"
                    className={` rounded-full`}
                  />
              </div>
              <p className="p-3 text-lg">
                Hello, my name is Dmitry, I'm from Russia and a website
                developer. I'm 17 years old and have 1 year of experience in
                development. I am from a small town and my goal is to become a Senior Developer in some large IT company. This site is completely about me and here you can
                learn a little more about me and my skills. You can learn more
                about my skills here{" "}
                <Link href={"./skills"} legacyBehavior>
                  <a className=" font-semibold cursor-pointer">/skills</a>
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
