import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverGlow?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", children, hoverGlow = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-sm transition-all duration-300 ${
          hoverGlow
            ? "hover:border-slate-300/80 dark:hover:border-slate-700/80 hover:shadow-md hover:-translate-y-[2px]"
            : ""
        } ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
