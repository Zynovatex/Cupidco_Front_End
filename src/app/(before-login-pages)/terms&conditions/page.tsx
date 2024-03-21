import TermsAndConditionsSection01 from "../_page-components/terms&conditions/T&CSection01";
import TermsAndConditionsSection02 from "../_page-components/terms&conditions/T&CSection02";

export default function TermsAndConditions() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat h-screen flex flex-col gap-5 justify-center items-center py-28 px-10 "
        style={{ backgroundImage: "url(/images/TermsAndConditionsSection1Bg.png)" }}
      >
        <TermsAndConditionsSection01 />
      </div>

      <TermsAndConditionsSection02 />
    </>
  );
}
