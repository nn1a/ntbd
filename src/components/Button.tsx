import React from "react";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "font-sans font-bold text-white bg-[#1ea7fd] border-0 rounded-full cursor-pointer inline-block leading-none"
    : "font-sans font-bold text-[#333] bg-transparent border-0 rounded-full cursor-pointer inline-block leading-none shadow-inner shadow-[rgba(0,0,0,0.15)]";
  const sizeCss =
    {
      small: "text-xs px-4 py-2",
      medium: "text-sm px-5 py-3",
      large: "text-base px-6 py-3",
    }[size] || "";

  return (
    <button
      className={`${sizeCss} ${mode} `}
      style={{ backgroundColor }}
      type="button"
      {...props}
    >
      {label}
    </button>
  );
};
