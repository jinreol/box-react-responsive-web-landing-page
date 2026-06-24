import logo from "@assets/images/logo.svg";
import menu from "@assets/images/ic_menu.svg";
import OutlineButton from "@components/OutlineButton";
import TextButton from "@components/TextButton";

function Navigation() {
  return (
    <div className="flex h-48 justify-between">
      <img src={logo} alt="logo" />
      <div className="hidden h-full items-center gap-24 lg:flex">
        <TextButton title="About Us" />
        <TextButton title="Services" />
        <TextButton title="How We Work" />
        <TextButton title="Testimonials" />
        <TextButton title="FAQ" />
      </div>
      <div className="flex items-center gap-28">
        <div className="hidden md:block">
          <OutlineButton title="Get In Touch" />
        </div>

        <img className="lg:hidden" src={menu} />
      </div>
    </div>
  );
}

export default Navigation;
