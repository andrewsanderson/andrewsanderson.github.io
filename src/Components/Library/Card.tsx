import { forwardRef, LegacyRef } from "react";

interface CardProps {
  children?: JSX.Element[] | string;
  [key: string]: any;
}

const Card = forwardRef(
  (
    { children, className = "", ...otherProps }: CardProps,
    ref: LegacyRef<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        {...otherProps}
        className={`shadow-2xl m-6 p-4 bg-white  ${className}`}
      >
        {children}
      </div>
    );
  }
);

export default Card;
