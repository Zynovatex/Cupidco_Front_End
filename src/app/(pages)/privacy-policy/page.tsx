import { Metadata } from "next";
import PrivacyPolicySection from "../_page-components/privacy-policy/privacy-policy-section";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return <PrivacyPolicySection />;
}
