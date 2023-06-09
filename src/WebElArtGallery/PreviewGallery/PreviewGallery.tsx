import React, { useRef, useEffect, useMemo } from 'react'
import cl from 'classnames';
import { Photo, CommonClassProps } from '../../types'
import style from './PreviewGallery.module.scss'

interface PreviewGalleryProps extends CommonClassProps {
    indexActivePhoto: number;
    photos: Photo[];
}

export const PreviewGallery: React.FC<PreviewGalleryProps> = ({
    indexActivePhoto,
    photos,
    className
}) => {

    if (!photos.length) {
        return null;
    }

    const previewContainer = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (!previewContainer.current) {
            return
        }
        previewContainer.current.style.transform = `translate3d(-${indexActivePhoto * 164}px, 0, 0)`;

    }, [indexActivePhoto])

    return (
        <div className={cl(style.previewGallery, className)}>
            {useMemo(() => (
                <ul className={style.previewGalleryTrack} ref={previewContainer}>
                {photos.map((photo) => (
                    <li key={photo.id} className={style.previewGalleryPreview}>
                        <img
                            src={photo.preview}
                            alt={photo.description}
                            className={style.previewGalleryImage}
                        />
                    </li>
                ))}
            </ul>
            ), [])}
            <div className={style.previewGalleryCover}>
                {indexActivePhoto + 1} / {photos.length}
            </div>
        </div>
    )
}
