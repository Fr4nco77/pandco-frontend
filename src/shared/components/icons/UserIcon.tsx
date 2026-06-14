import IconProps from "@/shared/types/IconProps";

export function UserIcon({ size = 24, className, ...props }: IconProps) {
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
      <path d="M16 15H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4ZM12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    </svg>
  );
}
