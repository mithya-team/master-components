import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import "./index.css"

type ImageLoadingStatus = 'idle' | 'loading' | 'loaded' | 'error';

type AvatarProps = {
    fallback: ReactNode;
    src?: string;
    alt?: string;
    className?: string;
    style?: React.CSSProperties;
    onImageLoadingStatusChange?: (status: ImageLoadingStatus) => void;
    imageClassName?: string;
    fallbackClassName?: string;
    fallbackCharactersToShow?: number;
};

const Avatar: React.FC<AvatarProps> = ({
    fallback,
    src,
    className = "",
    style,
    onImageLoadingStatusChange,
    alt,
    imageClassName = "",
    fallbackClassName = "",
    fallbackCharactersToShow = 1,
}) => {
    const [imageLoadingStatus, setImageLoadingStatus] = useState<ImageLoadingStatus>('idle');

    const handleImageLoad = (status: ImageLoadingStatus) => {
        setImageLoadingStatus(status);
        onImageLoadingStatusChange?.(status);
    };

    useEffect(() => {
        handleImageLoad("loading");

        return (() => {
            handleImageLoad("idle");
        })
    }, [src])

    const displayedFallback = useMemo(() => {
        if (typeof fallback === 'string') {
            return fallback.substring(0, fallbackCharactersToShow);
        }
        return fallback;
    }, [fallbackCharactersToShow, fallback]);

    return (
        <div className={`avatar-container ${className}`} style={style}>
            <img
                src={src}
                alt={alt}
                className={`avatar-image ${imageLoadingStatus === "loaded" ? "loaded" : ""} ${imageClassName}`}
                onLoad={() => handleImageLoad("loaded")}
                onError={() => handleImageLoad("error")}
            />
            <div className={`avatar-fallback ${imageLoadingStatus === "loaded" ? "hide" : ""} ${fallbackClassName}`}>{displayedFallback}</div>
        </div>
    );
};

export type { ImageLoadingStatus, AvatarProps }

export { Avatar };
