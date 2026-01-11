import React from "react";
import Icon from "../../Icon";

export default function GoogleDriveLinear({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="none"
      className={className}
      {...props}
    >
  
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.471 2.86 12 8.5m3.471 -5.64a2 2 0 0 0 -1.143 -0.36H9.672a2 2 0 0 0 -1.143 0.36m6.942 0a2 2 0 0 1 0.602 0.663l5.91 10.553c0.16 0.287 0.245 0.604 0.254 0.924M12 8.5 8 15m4 -6.5L8.529 2.86M12 8.5l4 6.5m-8 0 -3.452 5.61M8 15H1.763M8 15h8M4.548 20.61c0.338 0.248 0.752 0.39 1.188 0.39h12.528c0.436 0 0.85 -0.142 1.188 -0.39m-14.904 0a1.998 1.998 0 0 1 -0.6 -0.716l-1.974 -3.947a1.999 1.999 0 0 1 -0.21 -0.947M8.528 2.86a2 2 0 0 0 -0.602 0.663l-5.91 10.553c-0.16 0.287 -0.245 0.604 -0.254 0.924M16 15l3.452 5.61M16 15h6.237m-2.785 5.61a1.99 1.99 0 0 0 0.6 -0.716l1.974 -3.947c0.15 -0.298 0.22 -0.623 0.21 -0.947"

        ></path>
    </Icon>
  );
}
