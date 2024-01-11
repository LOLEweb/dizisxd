import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#102333] via-[#335881] to-[#102333] min-h-screen flex flex-col">
        <Header />
        <div className="text-white flex flex-grow py-5">
          <div className="main">
            <h1>ABOUT</h1>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
