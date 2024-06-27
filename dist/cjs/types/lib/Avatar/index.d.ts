import React, { ReactNode } from 'react';
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
declare const Avatar: React.FC<AvatarProps>;
export type { ImageLoadingStatus, AvatarProps };
export { Avatar };
