import React, { useEffect } from 'react';
import { useState } from 'react';
import './Reviews.css'


const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://obscure-reaches-95115.herokuapp.com/showReview')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <h3 className='fw-bold mt-5 mb-4 pt-5'>Review of Our User</h3>
            <div className='d-flex container justify-content-center mb-5 user-review'>
                {
                    reviews.map((review, i) => <div key={i}>
                        <div className="card text-dark mb-2 ms-3" style={{ width: '18rem', height: '200px' }}>

                            <div className="card-header fs-5">{review.reviewerName}</div>

                            <div className="card-body review-text">
                                <h5 className="card-title fs-5">{review.topicName} <span className='text-danger rounded ps-1 pe-1'> ★</span>{review.rating}</h5>
                                {
                                    review.rating <= 0 ?
                                        <div className='text-warning fs-3'>☆☆☆☆☆</div> :
                                        review.rating > 0 && review.rating <= 1 ? <div className='text-warning fs-3'>★☆☆☆☆</div> :
                                            review.rating > 1 && review.rating <= 1.5 ? <div className='text-warning fs-3'>★⯪☆☆☆</div> :
                                                review.rating > 1.5 && review.rating <= 2 ? <div className='text-warning fs-3'>★★☆☆☆</div> :
                                                    review.rating > 2 && review.rating <= 2.5 ? <div className='text-warning fs-3'>★★⯪☆☆</div> :
                                                        review.rating > 2.5 && review.rating <= 3 ? <div className='text-warning fs-3'>★★★☆☆</div> :
                                                            review.rating > 3 && review.rating <= 3.5 ? <div className='text-warning fs-3'>★★★⯪☆</div> :
                                                                review.rating > 3.5 && review.rating <= 4 ? <div className='text-warning fs-3'>★★★★☆</div> :
                                                                    review.rating > 4 && review.rating <= 4.5 ? <div className='text-warning fs-3'>★★★⯪☆</div> :
                                                                        <div className='text-warning fs-3'>★★★★★</div>
                                }
                                <p className="card-text">{review.comment}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;