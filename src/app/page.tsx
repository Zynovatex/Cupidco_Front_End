"use client";

import UserContainer from "@/components/common/tab-container/userContainer";
import HomeSection1 from "./(pages)/_page-components/home/HomeSection1";
import HomeSection2 from "./(pages)/_page-components/home/HomeSection2";
import Usertab from "@/components/common/user account/Usertab";
import UserProfile from "./(pages)/user-profile/UserProfile";
import InteractionIcons from "@/components/common/buttons/IconButtons";
import InteractionButton from "@/components/common/buttons/InteractionButton";
import { FaHeart } from "react-icons/fa";
import Usertab2 from "@/components/common/user account/UserTab2";
import ProfilePicture from "./(pages)/profile/ProfilePicture";

export default function Home() {
  return (
    <>
      <main>
        {/* Landing page sections  */}
        {/* <HomeSection1 />
        <HomeSection2 /> */}
        {/* <UserContainer />
        <Usertab /> */}
        {/* <UserProfile /> */}
        {/* <InteractionIcons width="50px" height="50px" spacing={4}>
          <img src="/images/ProfileIcon1.png" alt="Icon 1" />
          <img src="/images/ProfileIcon2.png" alt="Icon 2" />
          <img src="/images/ProfileIcon3.png" alt="Icon 2" />
          <img src="/images/ProfileIcon4.png" alt="Icon 2" />
          <img src="/images/ProfileIcon5.png" alt="Icon 2" />
        </InteractionIcons>
        // <InteractionButton
        //   text="Like"
        //   icon={<img src="/images/ProfileIcon5.png" alt="Icon 2" />}
        //   label="10"
        //   width="320px"
        //   height="60px"
        //   buttonColor="#ff0000"
        // /> */}
        <Usertab2 />
      </main>
    </>
  );
}
