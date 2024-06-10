import { type FC, type PropsWithChildren, type CSSProperties } from 'react';
import "./index.css";
type IPlacement = "top" | "bottom" | "left" | "right";
interface TooltipProps extends PropsWithChildren {
    content: string;
    placement?: IPlacement;
    delay?: number;
    className?: string;
    tooltipStyle?: CSSProperties;
}
declare const Tooltip: FC<TooltipProps>;
export type { IPlacement, TooltipProps };
export { Tooltip };
//# sourceMappingURL=index.d.ts.map