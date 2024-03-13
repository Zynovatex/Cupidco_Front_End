import { Metadata } from "next";
import ContactSection1 from "../_page-components/contact/contact-section1";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactUs() {
  return <ContactSection1 />;
}
