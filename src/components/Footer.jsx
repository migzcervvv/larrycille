import { Footer } from "flowbite-react";
import {
  BsLinkedin,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsFillTelephoneFill,
  BsPinMapFill,
} from "react-icons/bs";

export function MyFooter() {
  return (
    <Footer container className="bg-amber-200">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex flex-col gap-8 mb-8 md:mb-0">
            <Footer.Brand
              href="/"
              src="/logo.png"
              alt="Logo"
              name="Larrycille's Garden"
            />
            <div className="flex flex-row gap-4">
              <BsPinMapFill />
              <p>KM 84. Kaytitinga-Magallanes Rd.</p>
            </div>
            <div className="flex flex-row gap-4">
              <BsFillTelephoneFill />
              <p>0915 112 7261</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Services" className="text-amber-950" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-amber-950">
                  Pricing
                </Footer.Link>
                <Footer.Link href="#" className="text-amber-950">
                  Book Now
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="text-amber-950" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-amber-950">
                  Facebook
                </Footer.Link>
                <Footer.Link href="#" className="text-amber-950">
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-amber-950" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-amber-950">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" className="text-amber-950">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="border-amber-950" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Larrycille's Garden"
            year={2024}
            className="text-amber-950"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
              className="text-amber-950"
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className="text-amber-950"
            />
            <Footer.Icon href="#" icon={BsTwitter} className="text-amber-950" />
            <Footer.Icon href="#" icon={BsGithub} className="text-amber-950" />
            <Footer.Icon
              href="#"
              icon={BsLinkedin}
              className="text-amber-950"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
