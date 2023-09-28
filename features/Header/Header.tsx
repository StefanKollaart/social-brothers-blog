import Logo from "@/ui/Logo/Logo";
import Menu from "../Menu/Menu";
import HeaderTitle from "./HeaderTitle";

function Header() {
  return (
    <div>
      <div className=" w-full max-w-header m-auto h-header py-8 bg-header px-40">
        <div className="flex justify-between">
          <Logo />
          <Menu />
        </div>
        <div className="mt-6 flex justify-center">
          <HeaderTitle />
        </div>
      </div>
    </div>
  );
}

export default Header;
