import React, { useState } from 'react';
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
    contentClass?: string
};

const Accordion: React.FC<AccordionProps> = ({ items, openIcon, closeIcon, className = "", style = {} }) => {
    const [openItem, setOpenItem] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index));
    };

    return (
        <div className={`accordion ${className}`} style={style}>
            {items?.map(({ openIcon: _openIcon, closeIcon: _closeIcon, className = "", content, contentClass = "", header, headerClass = "" }, index) => {
                const isOpen = openItem === index;
                const itemOpenIcon = _openIcon || openIcon;
                const itemCloseIcon = _closeIcon || closeIcon;

                return (
                    <div key={index} className={`accordion-item ${isOpen ? 'open' : ''} ${className}`}>
                        <button
                            className={`accordion-header ${headerClass}`}
                            aria-expanded={isOpen}
                            onClick={() => toggleItem(index)}
                        >
                            <span>{header}</span>
                            <span className="accordion-icon">
                                {isOpen ? itemOpenIcon : itemCloseIcon}
                            </span>
                        </button>
                        <div className={`accordion-content ${contentClass}`}>
                            <div className="accordion-content-inner">
                                {content}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export { Accordion }
export type { AccordionItem, AccordionProps }
