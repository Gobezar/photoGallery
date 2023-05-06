import React from 'react'
import { CommonClassProps } from '../../types'
import cl from 'classnames'
import style from './Navigation.module.scss'



interface NavigationProps extends CommonClassProps {
    disabledPrev: boolean;
    disabledNext: boolean;
    onPrevClick: () => void;
    onNextClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
    disabledPrev,
    disabledNext,
    onPrevClick,
    onNextClick,
    className
}) => {
    return (
        <div className={cl(style.navigation, className)}>
            <button
                disabled={disabledPrev}
                className={cl(
                    style.navigationBtn,
                    style.navigationBtnLeft,
                )}
                onClick={onPrevClick}
            >
                Show previous photo
            </button>

            <button
                disabled={disabledNext}
                className={cl(
                    style.navigationBtn,
                    style.navigationBtnRight,
                )}
                onClick={onNextClick}
            >
                Show next photo
            </button>

        </div>
    )
};
