import { Metadata } from "next";
import LearnMoreSection1 from "../_page-components/learn-more/LearnMoreSection1";

export const metadata: Metadata = {
  title: "Learn More",
};

export default function LearnMore() {
  return <LearnMoreSection1 />;
}
