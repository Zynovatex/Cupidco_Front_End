import PrivacyPolicySection01 from "../_page-components/privacy-policy/PrivacyPolicySection01";
import PrivacyPolicySection02 from "../_page-components/privacy-policy/PrivacyPolicySection02";

export default function PrivacyPolicy() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat h-screen flex flex-col gap-5 justify-center items-center py-28 px-10 "
        style={{ backgroundImage: "url(/images/PrivacyPolicySection1Bg.png)" }}
      >
        <PrivacyPolicySection01 />
      </div>

      <PrivacyPolicySection02 />
    </>
  );
}
