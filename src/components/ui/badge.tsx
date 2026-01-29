import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "outline" | "secondary" | "accent";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                {
                    "bg-primary text-primary-foreground hover:bg-primary/80": variant === "default",
                    "text-foreground border border-input hover:bg-accent hover:text-accent-foreground": variant === "outline",
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
                    "bg-accent text-accent-foreground hover:bg-accent/80": variant === "accent",
                },
                className
            )}
            {...props}
        />
    );
}
