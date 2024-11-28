import React from "react";

type PillProps = {
  title: string;
  color?: PillColors;
  size?: "small";
  className?: string;
};

function Pill(props: PillProps) {
  const { title, color, size, className = "" } = props;
  let pillColor = "bg-";
  let pillSize = "py-1 px-5";

  switch (size) {
    case "small":
      pillSize = "py-1 px-2.5 w-16";
      break;
  }

  switch (color) {
    case "danger":
      pillColor += "red-500";
      break;
    case "success":
      pillColor += "green-500";
      break;
    case "warning":
      pillColor += "yellow-500";
      break;
    case "info":
      pillColor += "teal-500";
      break;
    case "default":
    default:
      pillColor += "blue-500";
  }

  return (
    <p
      className={`rounded-full text-center text-white text-xs font-medium ${pillSize} ${pillColor} ${className}`}
    >
      {title}
    </p>
  );
}

export default Pill;
