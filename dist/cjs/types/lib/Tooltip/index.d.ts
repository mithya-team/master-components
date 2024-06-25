import React, { type PropsWithChildren } from 'react';
import "./index.css";
import { TooltipProps as PrimitiveTooltipProps, TooltipContentProps, TooltipArrowProps } from '@radix-ui/react-tooltip';
type IPlacement = "top" | "bottom" | "left" | "right";
interface TooltipProps extends PrimitiveTooltipProps {
    content: string;
    placement?: IPlacement;
    contentProps?: TooltipContentProps;
    hasArrow?: boolean;
    arrowProps?: TooltipArrowProps;
}
declare const Tooltip: React.FC<PropsWithChildren<TooltipProps>>;
export type { IPlacement, TooltipProps };
export { Tooltip };
