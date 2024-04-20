import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-amber-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col gap-2">
        <h2 className="text-2xl dark:text-lime-50 font-semibold">
          Are you in need of a relaxation?
        </h2>
        <p className="my-2 text-justify">
          Enjoy a home vacation rental nestled in the heart of nature! Our home
          is Family and Pet friendly, perfect for families with children and
          furry friends!
        </p>
        <a href="/">
          <Button
            gradientDuoTone="redToYellow"
            className="rounded-tl-xl rounded-bl-none w-full text-black"
          >
            Book Now!
          </Button>
        </a>
      </div>
      <div className="p-7 flex-1">
        <img src="/carouselTwo.jpg" alt="CTA image" className="rounded-xl" />
      </div>
    </div>
  );
}
