import IconProps from "@/shared/types/IconProps";

export function BookmarkIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 20"
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
      <path d="M4.885 5.385c0-.85.689-1.539 1.538-1.539h6.154c.85 0 1.539.689 1.539 1.539v11.538L9.5 12.308l-4.615 4.615V5.385Z" />
    </svg>
  );
}
