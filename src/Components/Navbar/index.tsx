import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import "./style.css";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <NextUINavbar>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="logo font-bold text-inherit">CUMPLEAÑOS</p>
      </NavbarBrand>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link
            color="foreground"
            href="#quien"
            onClick={() => scrollToSection("quien")}
          >
            ¿Quién?
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Deseos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Carta
          </Link>
        </NavbarItem>
      </NavbarContent> */}
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </NextUINavbar>
  );
};

export default Navbar;
