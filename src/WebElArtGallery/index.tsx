import React, {useState} from 'react'
import { Photo } from '../types'
import { MainPhoto } from './MainPhoto/MainPhoto';
import { PreviewGallery } from './PreviewGallery/PreviewGallery';
import {Navigation} from './Navigation/Navigation'

import style from './index.module.scss'

interface PhotoGalleryProps {
    photos: Photo[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({
    photos
}) => {

    if (!photos.length) {
        return null
    }

    const [indexActivePhoto, setIndexActivePhoto] = useState(0);
    const activePhoto = photos [indexActivePhoto];
    const prevPhoto = photos [indexActivePhoto - 1];
    const nextPhoto = photos [indexActivePhoto + 1];



    return (
        <div className={style.photoGallery}>
            <div className={style.photoGalleryContainer}>
                <MainPhoto 
                    prevPhoto={prevPhoto}
                    activePhoto={activePhoto}
                    nextPhoto={nextPhoto}
                />
                <Navigation 
                    className={style.photoGalleryNavigation}
                    disabledPrev={!prevPhoto}
                    disabledNext={!nextPhoto}
                    onPrevClick={() => {
                        setIndexActivePhoto(indexActivePhoto - 1);
                    }}
                    onNextClick={() => {
                        setIndexActivePhoto(indexActivePhoto + 1)
                    }}
                />
            </div>
                <PreviewGallery 
                    indexActivePhoto={indexActivePhoto}
                    photos={photos}
                    className={style.photoGalleryPreviewList}
                />

        </div>
    )
}

export default PhotoGallery