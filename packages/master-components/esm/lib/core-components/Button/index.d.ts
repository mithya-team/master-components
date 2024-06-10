import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';
import type { TooltipProps } from '../Tooltip';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    classNames?: {
        root?: string;
        leftIcon?: string;
        label?: string;
        rightIcon?: string;
    };
    rightIcon?: ReactNode;
    leftIcon?: ReactNode;
    label?: ReactNode;
    href?: string;
    isExternalLink?: boolean;
    tooltipProps?: TooltipProps;
    component?: React.ElementType<any>;
}
declare const Button: React.FC<ButtonProps>;
export { type ButtonProps };
export { Button };
//# sourceMappingURL=index.d.ts.map