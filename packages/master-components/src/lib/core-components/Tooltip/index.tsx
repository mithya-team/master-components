import { type FC, useState, type PropsWithChildren, type CSSProperties, useRef, useMemo } from 'react';
import "./index.css"

export type IPlacement = "top" | "bottom" | "left" | "right";

export interface TooltipProps extends PropsWithChildren {
    content: string;
    placement?: IPlacement;
    delay?: number;
    className?: string;
    tooltipStyle?: CSSProperties
}

const Tooltip: FC<TooltipProps> = (props) => {
    const { children, content, placement = "top", delay, className = {}, tooltipStyle = {} } = props
    let timeout: NodeJS.Timeout;

    const [isVisible, setIsVisible] = useState(false);
    const tooltipRef = useRef<HTMLDivElement>(null);

    const showTip = () => {
        timeout = setTimeout(() => {
            setIsVisible(true);
        }, delay || 400);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setIsVisible(false);
    };

    const calculatedPlacement = useMemo(() => {
        const tooltipElement = tooltipRef?.current;
        if (!tooltipElement) {
            return; // Tooltip not yet rendered
        }
        const tooltipRect = tooltipElement.getBoundingClientRect();
        return getAvailablePlacement(tooltipRect, placement);
    }, [placement, tooltipRef])

    return (
        <div
            className={`Tooltip-Wrapper ${className}`}
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
        >
            {children}
            <div ref={tooltipRef} className={`Tooltip-Tip ${calculatedPlacement}`}
                style={{ ...tooltipStyle, opacity: isVisible ? 1 : 0 }}>
                {content}
            </div>
        </div>
    );
};

export default Tooltip;

const getAvailablePlacement = (tooltipRect: DOMRect, placement: IPlacement) => {
    const { top, left, right, bottom, width, height } = tooltipRect;
    const { innerHeight, innerWidth } = window;
    const fitsTop = height <= top;
    const fitsBottom = height <= innerHeight - bottom;
    const fitsLeft = width <= left;
    const fitsRight = width <= innerWidth - right;
    switch (placement) {
        case 'top':
            if (fitsTop) return 'top';
            if (fitsBottom) return 'bottom';
            if (fitsLeft) return 'left';
            if (fitsRight) return 'right';
            break;
        case 'bottom':
            if (fitsBottom) return 'bottom';
            if (fitsTop) return 'top';
            if (fitsLeft) return 'left';
            if (fitsRight) return 'right';
            break;
        case 'left':
            if (fitsLeft) return 'left';
            if (fitsRight) return 'right';
            if (fitsTop) return 'top';
            if (fitsBottom) return 'bottom';
            break;
        case 'right':
            if (fitsRight) return 'right';
            if (fitsLeft) return 'left';
            if (fitsTop) return 'top';
            if (fitsBottom) return 'bottom';
            break;
        default:
            break;
    }

    return placement; // Default placement if no suitable fit is found
};
