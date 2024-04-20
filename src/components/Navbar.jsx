import { Button, Navbar } from "flowbite-react";

export function MyNavbar() {
  return (
    <Navbar fluid rounded className="bg-amber-200 fixed w-full z-20">
      <Navbar.Brand
        href="https://www.facebook.com/larrycillesgarden"
        className="mb-5 lg:mb-0"
      >
        <img
          src="/logo.png"
          className="mr-3 h-14 sm:h-16 rounded-full"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-amber-950 hover:text-amber-800">
          Larrycille's Garden
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button color="warning" pill>
          Book Now!
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#">
          <span className="text-amber-800 hover:text-amber-950">Home</span>
        </Navbar.Link>
        <Navbar.Link href="#">
          <span className="text-amber-800 hover:text-amber-950">About</span>
        </Navbar.Link>
        <Navbar.Link href="#">
          <span className="text-amber-800 hover:text-amber-950">Services</span>
        </Navbar.Link>
        <Navbar.Link href="#">
          <span className="text-amber-800 hover:text-amber-950">Pricing</span>
        </Navbar.Link>
        <Navbar.Link href="#">
          <span className="text-amber-800 hover:text-amber-950">Contact</span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
