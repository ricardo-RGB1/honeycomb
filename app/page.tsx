import Phone from "@/components/phone";
import MainHeader from "@/components/main-header";
import { Check, Star } from "lucide-react";
import Image from "next/image";
import { Reviews } from "@/components/reviews";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MainHeader className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img src="/bee5.svg" alt="an image of a bee" />
              </div>
              <h1 className="relative w-fit traching-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your image on a{" "}
                <span className="bg-amber-400/80 px-2 text-white rounded-sm">
                  custom
                </span>{" "}
                phone case.
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Share your favorite memories on a phone case that's uniquely
                yours.
              </p>
              <ul className="mt-8 space-y-2 text-left font-light flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-amber-500" />
                    Durable long-lasting cases
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-amber-500" />5 year
                    print warranty
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-amber-500" />
                    Free shipping worldwide
                  </li>
                </div>
              </ul>

              {/* USER FEEDBACK */}
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/person1.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/person2.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/person3.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/person4.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/person5.png"
                    alt="user image"
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-5 w-5 shrink-0 text-amber-400 fill-amber-300" />
                    <Star className="h-5 w-5 shrink-0 text-amber-400 fill-amber-300" />
                    <Star className="h-5 w-5 shrink-0 text-amber-400 fill-amber-300" />
                    <Star className="h-5 w-5 shrink-0 text-amber-400 fill-amber-300" />
                    <Star className="h-5 w-5 shrink-0 text-amber-400 fill-amber-300" />
                  </div>
                  <p>
                    <span className="font-semibold">1k+</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              />
              <img
                src=""
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone imgSrc="mainPhoneCover.jpg" className="w-64" />
            </div>
          </div>
        </MainHeader>
      </section>
      {/* VALUE OF PROPOSITION */}
      <section className="bg-slate-100 py-24">
        <MainHeader className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our customers{" "}
              <span className="text-white px-2 rounded-sm bg-gradient-to-r from-amber-300 from-10% via-yellow-400 via-40% to-amber-400 to-100%">
                say
              </span>
            </h2>
            <img
              src="/bee2.svg"
              alt="an image of a cute little bee"
              className="w-24 order-0 lg:order-2"
            />
          </div>

          {/* REVIEW BLOCK */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            {/* START OF USER REVIEWS */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
                <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
                <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
                <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
                <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
              </div>
              <div className="text-lg leading-8">
                <p className="italic">
                  "I love my new phone case! It's so unique and the quality is
                  amazing. I've gotten so many compliments on it already."
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  src="/person4.png"
                  alt="a profile picture of a customer"
                  className="rounded-full h-12 w-12 object-cover ring-2 ring-yellow-200 ring-offset-2"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Ashley</p>
                  <div className="flex gap-1.5 items-center">
                    <Check className="h-4 w-4 text-zinc-400 stroke-[3px]" />
                    <p className="text-sm font-extralight">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* END OF REVIEW */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
                <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
                <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
                <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
                <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
              </div>
              <div className="text-lg leading-8">
                <p className="italic">
                  "What is really cool about this case is that it's not just a
                  case, it's a memory. I love it!"
                </p>
                <br />
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  src="/person5.png"
                  alt="a profile picture of a customer"
                  className="rounded-full h-12 w-12 object-cover ring-2 ring-yellow-200 ring-offset-2"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Pearl</p>
                  <div className="flex gap-1.5 items-center">
                    <Check className="h-4 w-4 text-zinc-400 stroke-[3px]" />
                    <p className="text-sm font-extralight">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* END OF REVIEW */}
          </div>
        </MainHeader>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      {/* UPLOAD YOUR OWN PHOTO SECTION */}
      <section>
        <MainHeader className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                Upload your own photo and get your own case today!
              </h2>
            </div>
          </div>

          {/* IMAGE-TO-PHONE */}
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img
                src="/arrow.png"
                alt="an arrow pointing to a phone case"
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
              />

              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <img
                  src="/testimonial-1.jpg"
                  alt=""
                  className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                />
              </div>



            <Phone className="w-60" imgSrc="/testimonial-1.jpg" />
            </div>
          </div>

          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit">
              <Check className="h-5 w-5 text-amber-500 inline mr-1.5" />
              High-quality silicone material 
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-amber-500 inline mr-1.5" />
              Scracth and fingerprint resistant
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-amber-500 inline mr-1.5" />
              Wireless charging compatible
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-amber-500 inline mr-1.5" />
              5 year print warranty
            </li>

            <div className="flex justify-center">
              <Button size='lg' className="mx-auto mt-8">
                 <Link href='/configure/upload'>Create your case now</Link>
              </Button>
            </div>
          </ul>
        </MainHeader>
      </section>
    </div>
  );
}
