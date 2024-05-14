"use client";

import { HTMLAttributes, useEffect, useRef, useState } from "react";
import MainHeader from "./main-header";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import Phone from "./phone";

const PHONES = [
  "/testimonial-1.jpg",
  "/testimonial-2.jpg",
  "/testimonial-3.jpg",
  "/testimonial-4.jpg",
  "/testimonial-5.jpg",
  "/mainPhoneCover.jpg",
];

/**
 * Splits an array into multiple subarrays.
 * @param array - The array to split.
 * @param numParts - The number of parts to split the array into.
 * @returns An array of subarrays.
 */
function splitArray<T>(array: Array<T>, numParts: number) {
  // Initialize an empty array to store the subarrays.
  const result: Array<Array<T>> = [];

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts; // Calculate the index of the subarray.
    if (!result[index]) {
      result[index] = []; // Initialize the subarray if it does not exist.
    }
    result[index].push(array[i]); // Add the element to the subarray.
  }

  return result;
}

/**
 * Renders a column of reviews.
 * @param reviews - The reviews to be displayed.
 * @param className - The class name of the column.
 * @param reviewClassName - The class name of each review.
 * @param msPerPixel - The number of milliseconds per pixel for the marquee animation.
 * @returns The ReviewColumn component.
 */
function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: string[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string; // A function that returns the class name of each review.
  msPerPixel?: number;
}) {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`; // Calculate the duration of the marquee animation.

  //   This useEffect hook observes changes in the height of a DOM element referred to by columnRef and updates the columnHeight state accordingly, disconnecting the observer when the component unmounts.
  useEffect(() => {
    // This effect runs after the component is mounted.
    if (!columnRef.current) return; // If the column ref is not set, return early.

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0); // Set the column height to the offset height of the column.
    });

    resizeObserver.observe(columnRef.current); // Observe the column ref.

    return () => {
      resizeObserver.disconnect(); // Disconnect the resize observer.
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((imgSrc, reviewIndex) => (
        <Review
          key={reviewIndex}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          imgSrc={imgSrc}
        />
      ))}
    </div>
  );
}

// Define the props for the Review component.
// The Review component accepts an image source and additional props.
interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

// Renders a Review component with an image source and additional props.
function Review({ imgSrc, className, ...props }: ReviewProps) {
  // Define the possible animation delays for the review component.
  const POSSIBLE_ANIMATION_DELAY = [
    "0s",
    "0.1s",
    "0.2s",
    "0.3s",
    "0.4s",
    "0.5s",
  ];

  // Generate a random delay from the possible animation delays.
  const animationDelay =
    POSSIBLE_ANIMATION_DELAY[
      Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAY.length)
    ];

  return (
    <div
      className={cn(
        "animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5",
        className
      )}
      style={{ animationDelay }} // Set the animation delay inline.
      {...props}
    >
      <Phone imgSrc={imgSrc} />
    </div>
  );
}

/**
 * Renders a grid of reviews.
 * @returns The ReviewGrid component.
 */
function ReviewGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  const columns = splitArray(PHONES, 3);
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2); // Split the third column into two subcolumns.

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView ? (
        <>
          <ReviewColumn
            // Combine the first, third, and second columns into a single array.
            reviews={[...column1, ...column3.flat(), ...column2]}
            // Define the class name of each review based on the review index.
            reviewClassName={(reviewIndex) =>
              cn({
                "md:hidden": reviewIndex >= column1.length + column3[0].length,
                "lg:hidden": reviewIndex >= column1.length,
              })
            }
            msPerPixel={10} // Set the number of milliseconds per pixel for the marquee animation.
          />
          <ReviewColumn
            // Combine the second and third columns into a single array.
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? "lg:hidden" : ""
            } // Hide the reviews in the third column on large screens.
            msPerPixel={15}
          />
          <ReviewColumn
            // Combine the third column into a single array.
            reviews={column3.flat()}
            className="hidden md:block"
            msPerPixel={10}
          />
        </>
      ) : null}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100" />
    </div>
  );
}

export const Reviews = () => {
  return (
    <MainHeader className="relative max-w-5xl">
      <ReviewGrid />
    </MainHeader>
  );
};
