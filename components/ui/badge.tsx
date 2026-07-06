import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "outline";
}

export const Badge: React.FC<BadgeProps> = ({
  className = "",
  variant = "primary",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-200";

  const variants = {
    primary: "bg-blue-50 text-blue-700 border border-blue-100/60",
    secondary: "bg-slate-100 text-slate-700 border border-slate-200/50",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-100/60",
    outline: "bg-transparent text-slate-600 border border-slate-200",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};
