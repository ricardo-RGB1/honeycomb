import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

/**
 * Renders a phone component with an overlaying image.
 *
 * @param {Object} props - The component props.
 * @param {string} props.imgSrc - The source URL of the overlaying image.
 * @param {string} props.className - The additional CSS class name for the component.
 */
const Phone = ({ imgSrc, className }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
    >
      <img
        src="/phone-template-white-edges.png"
        alt="a phone case"
        className="pointer-events-none z-50 select-none"
      />
      <div className="absolute -z-10 inset-0">
        <img
          src={imgSrc}
          className="object-cover h-full"
          alt="overlaying phone image"
        />
      </div>
    </div>
  );
};

export default Phone;