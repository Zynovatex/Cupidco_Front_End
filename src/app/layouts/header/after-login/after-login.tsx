import Logo from "@/components/common/logo/Logo";
import Link from "next/link";

export default function AfterLogin() {
  return (
    <nav className="fixed w-full h-20 bg-transparent backdrop-blur-md z-50">
      <div className="flex justify-between items-center h-full w-full p-10">
        <Link href="/">
          <Logo />
        </Link>
        <div>After Login</div>
      </div>
    </nav>
  );
}
