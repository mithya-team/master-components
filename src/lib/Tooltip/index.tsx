
import React, { useState, type PropsWithChildren, type CSSProperties, useRef, useLayoutEffect } from 'react';
import "./index.css"

type IPlacement = "top" | "bottom" | "left" | "right";

interface TooltipProps extends PropsWithChildren {
    content: string;
    placement?: IPlacement;
    delay?: number;
    className?: string;
    tooltipStyle?: CSSProperties
}

const Tooltip: React.FC<TooltipProps> = (props) => {
    const { children, content, placement = "top", delay, className = {}, tooltipStyle = {} } = props
    let timeout: number;

    const [isVisible, setIsVisible] = useState(false);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const [calculatedPlacement, setCalculatedPlacement] = useState(placement);

    const showTip = () => {
        timeout = setTimeout(() => {
            setIsVisible(true);
        }, delay || 400) as unknown as number;
    };

    const hideTip = () => {
        clearInterval(timeout);
        setIsVisible(false);
    };

    useLayoutEffect(() => {
        const tooltipElement = tooltipRef?.current;
        if (!tooltipElement) {
            return; // Tooltip not yet rendered
        }
        const tooltipRect = tooltipElement.getBoundingClientRect();
        const newPlacement = getAvailablePlacement(tooltipRect, placement);
        if (newPlacement !== placement) setCalculatedPlacement(newPlacement);
    }, [placement])

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

export type { IPlacement, TooltipProps };
export { Tooltip };



const getAvailablePlacement = (tooltipRect: DOMRect, placement: IPlacement) => {
    const { top, left, right, bottom, width, height } = tooltipRect;
    const { innerHeight, innerWidth } = window;
    const fitsTop = top >= height;
    const fitsBottom = (innerHeight - bottom) >= height;
    const fitsLeft = left >= width;
    const fitsRight = (innerWidth - right) >= width;
    // If all sides fit, return the provided placement
    if (fitsTop && fitsBottom && fitsLeft && fitsRight) {
        return placement;
    }

    return checkPlacement(fitsTop, fitsBottom, fitsLeft, fitsRight) ?? placement;

};

const checkPlacement = (fitsTop: boolean, fitsBottom: boolean, fitsLeft: boolean, fitsRight: boolean): IPlacement | undefined => {
    if (fitsBottom && fitsLeft && fitsRight) return 'bottom';
    if (fitsTop && fitsBottom && fitsLeft) return 'left';
    if (fitsTop && fitsBottom && fitsRight) return 'right';
    if (fitsTop && fitsLeft && fitsRight) return 'top';
    if (fitsBottom && fitsLeft && fitsRight) return 'bottom';
    if (fitsTop && fitsLeft) return 'top';
    if (fitsTop && fitsRight) return 'top';
    if (fitsBottom && fitsLeft) return 'bottom';
    if (fitsBottom && fitsRight) return 'right';
    if (fitsLeft) return 'left';
    if (fitsRight) return 'right';
    if (fitsTop) return 'top';
    if (fitsBottom) return 'bottom';
};