import { Metadata } from "next";
import AboutSection1 from "../_page-components/about/AboutSection1";
import AboutSection2 from "../_page-components/about/AboutSection2";
import AboutSection3 from "../_page-components/about/AboutSection3";

export const metadata: Metadata = {
  title: "About us",
};

export default function About() {
  return (
    <>
      {/* about section 01  */}
      <div
        className="bg-cover bg-center bg-no-repeat h-screen flex flex-col gap-5 justify-center items-center py-28 px-10 "
        style={{ backgroundImage: "url(/images/AboutBackground.png)" }}
      >
        <AboutSection1 />
      </div>

      {/* about section 02  */}
      <div className="  ">
       <AboutSection2 />
      </div>
 
      {/* about section 03  */}
      <div className=" bg-[#f8e7e7]">
        <div className="mx-auto max-w-screen-2xl">
          <AboutSection3 />
        </div>
      </div>
    </>
  );
}
