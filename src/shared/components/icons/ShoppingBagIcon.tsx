import IconProps from "@/shared/types/IconProps";

export function ShoppingBagIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      fill="none"
      className={className}
      {...props}
    >
      <path d="M8 11.01V11m8 .01V11M8 8V7a4 4 0 1 1 8 0v1M8 8H6.84a2 2 0 0 0-1.992 1.834l-.667 8A2 2 0 0 0 6.174 20h11.653a2 2 0 0 0 1.993-2.166l-.667-8A2 2 0 0 0 17.16 8H16M8 8h8" />
    </svg>
  );
}
