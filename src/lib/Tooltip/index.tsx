
import React, { type PropsWithChildren } from 'react';
import "./index.css"
import { Provider, Root, Trigger, Portal, Content, Arrow, TooltipProps as PrimitiveTooltipProps, TooltipContentProps, TooltipArrowProps } from '@radix-ui/react-tooltip';

type IPlacement = "top" | "bottom" | "left" | "right";

interface TooltipProps extends PrimitiveTooltipProps {
    content: string;
    placement?: IPlacement;
    contentProps?: TooltipContentProps;
    hasArrow?: boolean;
    arrowProps?: TooltipArrowProps;

}

const Tooltip: React.FC<PropsWithChildren<TooltipProps>> = (props) => {
    const { children, content, placement = "top", contentProps, hasArrow = false, arrowProps, ...restProps } = props



    return (
        <Provider>
            <Root {...restProps}>
                <Trigger asChild>
                    {children}
                </Trigger>
                <Portal>
                    <Content side={placement} className="TooltipContent" {...contentProps}>
                        {content}
                        {hasArrow && <Arrow className="TooltipArrow" {...arrowProps} />}
                    </Content>
                </Portal>
            </Root>
        </Provider>
    );
};

export type { IPlacement, TooltipProps };
export { Tooltip };
