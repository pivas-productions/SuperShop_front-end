import * as React from "react";
import { cva } from "class-variance-authority";

const rateProgressVariants = cva("box-border grid grid-cols-10", {
    variants: {
        variant: {
            default: "text-black/85",
        },
        size: {
            default: "w-full text-sm leading-6 my-4",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
const RateProgress = React.forwardRef(({ className, variant, size, rateAll, rateThis, ...props }, ref) => {
    return (
        <div
            className={rateProgressVariants({variant, size, className})}
            role="progressbar"
            ref={ref}
            {...props}
        >
                <div className="col-span-9 overflow-hidden align-middle bg-white/50 rounded-full box-border">
                    <div className=" bg-yellow-600/70 h-4 min-w-max overflow-hidden rounded-full box-border" style={{ width: `calc(${rateThis} / ${rateAll} * 100%)` }}></div>
                </div>
                <span className=" ms-2 leading-none whitespace-nowrap text-start align-middle box-border">
                    {rateThis}
                </span>
        </div>
    );
});
RateProgress.displayName = "RateProgress";
export { RateProgress, rateProgressVariants };