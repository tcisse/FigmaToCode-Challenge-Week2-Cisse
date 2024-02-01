import { BestSellers, Newsletter, PartnersSection, PopularStyles, ZaraSection } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <PartnersSection />
      <PopularStyles />
      {/* <ZaraSection /> */}
      <BestSellers />
      <Newsletter />
    </div>
  );
}
