import React, { ReactNode } from 'react';
import "./index.css";
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
declare const Avatar: React.FC<AvatarProps>;
export type { ImageLoadingStatus, AvatarProps };
export { Avatar };
