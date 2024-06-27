import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import "./index.css";

type ImageLoadingStatus = 'idle' | 'loading' | 'loaded' | 'error';

type AvatarProps = {
    fallback: string;
    src?: string;
    alt?: string;
    className?: string;
    icon?: ReactNode;
    style?: React.CSSProperties;
    onImageLoadingStatusChange?: (status: ImageLoadingStatus) => void;
    imageClassName?: string;
    fallbackClassName?: string;
    fallbackCharactersToShow?: number;
};

const Avatar: React.FC<AvatarProps> = ({
    fallback,
    src,
    className,
    style,
    icon,
    onImageLoadingStatusChange,
    alt,
    imageClassName,
    fallbackClassName,
    fallbackCharactersToShow = 1,
}) => {
    const [imageLoadingStatus, setImageLoadingStatus] = useState<ImageLoadingStatus>('idle');

    useEffect(() => {
        if (src) {
            setImageLoadingStatus('loading');
            const img = new Image();
            img.onload = () => {
                setImageLoadingStatus('loaded');
                onImageLoadingStatusChange?.('loaded');
            };
            img.onerror = () => {
                setImageLoadingStatus('error');
                onImageLoadingStatusChange?.('error');
            };
            img.src = src;
        }
    }, [src, onImageLoadingStatusChange]);

    const displayedFallback = useMemo(() => fallback.substring(0, fallbackCharactersToShow), [fallbackCharactersToShow, fallback]);

    return (
        <div className={`avatar-container ${className}`} style={style}>
            {src && imageLoadingStatus === 'loaded' ? (
                <img src={src} alt={alt} className={`avatar-image ${imageClassName}`} />
            ) : icon ?
                icon
                : (
                    <div className={`avatar-fallback ${fallbackClassName}`}>{displayedFallback}</div>
                )}
        </div>
    );
};

export type { ImageLoadingStatus, AvatarProps }

export { Avatar };
