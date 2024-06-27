import React, { ReactNode, useMemo, useState } from 'react';
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

    const handleImageLoaded = () => {
        setImageLoadingStatus('loaded');
        onImageLoadingStatusChange?.("loaded");
    };

    const handleImageError = () => {
        setImageLoadingStatus('error');
        onImageLoadingStatusChange?.("error");
    };

    const displayedFallback = useMemo(() => fallback.substring(0, fallbackCharactersToShow), [fallbackCharactersToShow, fallback]);

    return (
        <div className={`avatar-container ${className}`} style={style}>
            {src && imageLoadingStatus === 'loaded' ? (
                <img
                    src={src}
                    alt={alt}
                    className={`avatar-image ${imageClassName}`}
                    onLoad={handleImageLoaded}
                    onError={handleImageError}
                />
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
