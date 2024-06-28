import React from 'react';
import "./index.css";
type AccordionProps = {
    items: AccordionItem[];
    openIcon?: React.ReactNode;
    closeIcon?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};
type AccordionItem = {
    header: React.ReactNode;
    content: React.ReactNode;
    openIcon?: React.ReactNode;
    closeIcon?: React.ReactNode;
    className?: string;
    headerClass?: string;
    contentClass?: string;
};
declare const Accordion: React.FC<AccordionProps>;
export { Accordion };
export type { AccordionItem, AccordionProps };
