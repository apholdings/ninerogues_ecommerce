import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarEmpty } from '@fortawesome/fontawesome-free-regular';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import '../../styles/rating_stars.css';

const Stars = ({ rating }) => {
    const getStars = () => {
        if (
            rating &&
            rating !== null &&
            rating !== undefined
        ) {
            return (
                <div>
                    {
                        rating >= 1 || rating >= 1.0 ? (
                            <FontAwesomeIcon
                                className='rating_stars'
                                icon={faStar}
                            />
                        ) : (
                            rating === 0.5 ? (
                                <FontAwesomeIcon
                                    className='rating_stars'
                                    icon={faStarHalfAlt}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    className='rating_stars'
                                    icon={faStarEmpty}
                                />
                            )
                        )
                    }

                    {
                        rating >= 2 || rating >= 2.0 ? (
                            <FontAwesomeIcon
                                className='rating_stars'
                                icon={faStar}
                            />
                        ) : (
                            rating === 1.5 ? (
                                <FontAwesomeIcon
                                    className='rating_stars'
                                    icon={faStarHalfAlt}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    className='rating_stars'
                                    icon={faStarEmpty}
                                />
                            )
                        )
                    }

                    {
                        rating >= 3 || rating >= 3.0 ? (
                            <FontAwesomeIcon
                                className='rating_stars'
                                icon={faStar}
                            />
                        ) : (
                            rating === 2.5 ? (
                                <FontAwesomeIcon
                                    className='rating_stars'
                                    icon={faStarHalfAlt}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    className='rating_stars'
                                    icon={faStarEmpty}
                                />
                            )
                        )
                    }

                    {
                        rating >= 4 || rating >= 4.0 ? (
                            <FontAwesomeIcon
                                className='rating_stars'
                                icon={faStar}
                            />
                        ) : (
                            rating === 3.5 ? (
                                <FontAwesomeIcon
                                    className='rating_stars'
                                    icon={faStarHalfAlt}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    className='rating_stars'
                                    icon={faStarEmpty}
                                />
                            )
                        )
                    }

                    {
                        rating >= 5 || rating >= 5.0 ? (
                            <FontAwesomeIcon
                                className='rating_stars'
                                icon={faStar}
                            />
                        ) : (
                            rating === 4.5 ? (
                                <FontAwesomeIcon
                                    className='rating_stars'
                                    icon={faStarHalfAlt}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    className='rating_stars'
                                    icon={faStarEmpty}
                                />
                            )
                        )
                    }
                </div>
            )
        }
    }

    return (
        <Fragment>
            {getStars()}
        </Fragment>
    )
}

export default Stars