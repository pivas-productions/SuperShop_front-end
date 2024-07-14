import { Rate } from "antd";
import React from "react";
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const RateUI = React.forwardRef(({ className, disabled, defaultValue,  ...props }, ref) => {

    return (
        <Rate tooltips={disabled ? '' : desc} className={className} disabled={disabled} defaultValue={defaultValue} ref={ref} {...props} />);
});
RateUI.displayName = "RateUI";
export { RateUI };