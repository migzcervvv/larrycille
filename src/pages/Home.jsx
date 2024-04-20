import { Carousel, Card, Datepicker, Button } from "flowbite-react";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <div className="pt-20 min-h-screen flex flex-col bg-amber-100">
      <div className="h-96 md:h-screen">
        <Carousel indicators={false}>
          <img src="/carouselOne.jpg" alt="..." className="h-full" />
          <img src="/carouselTwo.jpg" alt="..." className="h-full" />
          <img src="/carouselThree.jpg" alt="..." className="h-full" />
          <img src="/carouselFour.jpg" alt="..." className="h-full" />
          <img src="/carouselFive.jpg" alt="..." className="h-full" />
        </Carousel>
      </div>
      <div className="w-full self-center my-10 flex flex-col md:flex-row justify-around">
        <div className="p-4 md:p-0">
          <Card
            className="max-w-md bg-amber-50 shadow-lg text-center"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/about-pic.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              About Us!
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              A Home Vacation Rental nestled in the heart of nature. Family &
              Pet Friendly.
            </p>
          </Card>
        </div>
        <div className="flex flex-col gap-4 p-4 md:p-0">
          <Card className=" rounded-s-3xl bg-amber-50">
            <h1 className="text-semibold text-2xl">Book Now!</h1>
            <p>From</p>
            <Datepicker title="Book Now at Larrycille!" />
            <p>To</p>
            <Datepicker title="Book Now at Larrycille!" />
            <Button outline gradientDuoTone="redToYellow">
              Book Now!
            </Button>
          </Card>
        </div>
      </div>
      <CallToAction />
    </div>
  );
}
