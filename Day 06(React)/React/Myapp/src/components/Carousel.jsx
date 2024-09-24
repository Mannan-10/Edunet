import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Carousel = () => {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="d-flex justify-content-center">
                        <img src="https://www.thespruceeats.com/thmb/LRHVkNnPFRGjN5LixQWD1C9Pnjw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rasgulla-indian-dessert-1957839-hero-01-7c3528a2d34a4f1b9248c7483a73d0a6.jpg" className="d-block w-50" alt="..."/>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-flex justify-content-center">
                        <img src="https://i4.fnp.com//images/cat/m/Rasgulla.jpg" className="d-block w-50" alt="..."/>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-flex justify-content-center">
                        <img src="https://www.rajbhog.com/wp-content/uploads/2023/02/The-significance-of-sweets-in-Indian-Tradition-870x635.jpg" className="d-block w-50" alt="..."/>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev" fdprocessedid="w15jxi">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next" fdprocessedid="rykdmj">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;