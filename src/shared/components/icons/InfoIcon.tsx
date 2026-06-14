import IconProps from "@/shared/types/IconProps";

export function InfoIcon({ size = 24, className, ...props }: IconProps) {
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
      <>
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </>
    </svg>
  );
}
