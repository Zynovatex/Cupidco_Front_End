import { Metadata } from "next";
import ServicesSection1 from "../_page-components/services/ServicesSection1";

export const metadata: Metadata = {
  title: "Services",
};

export default function Services() {
  return <ServicesSection1 />;
}
