"use client";
import * as React from "react";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";



const PasswordInput = React.forwardRef(({ className, type = "password", ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const InputClassName = 'flex h-9 w-full rounded-md border border-input bg-white/70 px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm shadow-mega-shadow ' +
                        'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ';
    return (<div className="relative">
        <input type={showPassword ? "text" : "password"} className={InputClassName + ( className ? className : "" )} ref={ref} {...props}/>
        <span className={`absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer`} onClick={togglePasswordVisibility}>
          {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
        </span>
      </div>);
});
PasswordInput.displayName = "PasswordInput";
export { PasswordInput };
