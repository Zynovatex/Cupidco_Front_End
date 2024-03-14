"use client";

import HomeSection1 from "./(pages)/_page-components/home/HomeSection1";
import HomeSection2 from "./(pages)/_page-components/home/HomeSection2";

export default function Home() {
  return (
    <>
      <main>
        {/* Landing page sections  */}
        <HomeSection1 />
        <HomeSection2 />
      </main>
    </>
  );
}
