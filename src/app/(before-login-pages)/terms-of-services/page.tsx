import { Metadata } from "next";
import Section1 from "../_page-components/terms-of-services/Section1";
import Section2 from "../_page-components/terms-of-services/Section2";


export const metadata: Metadata = {
  title: "Terms of Services ",
};

export default function TermsOfServices() {
return (
    <>
      {/* section 01  */}
      <div
        className="bg-cover bg-center bg-no-repeat h-screen flex flex-col gap-5 justify-center items-center py-28 px-10 "
        style={{ backgroundImage: "url(/images/TermsAndConditions1.jpg)" }}
      >
        <Section1 />
      </div>


      {/* section 02  */}
      <Section2 />

      
    </>
  );
}
