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
      <AboutSection1 />

      {/* about section 02  */}
      <AboutSection2 />

      {/* about section 03  */}
      <AboutSection3 />
    </>
  );
}
