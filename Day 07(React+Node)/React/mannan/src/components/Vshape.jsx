import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Vshape() {
    return (
        <>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src="https://www.theindustry.fashion/wp-content/uploads/2024/09/CNY_3495.jpg" class="d-block w-100" alt="..." />

                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://cdn-wp.thesportsrush.com/2024/03/d449a9dc-untitled-design-43.jpg?format=auto&w=3840&q=75" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://cdn.sanity.io/images/dm4o0ui7/production/ab8622774dfd8bc6b2107656cc1d648ff48279b3-1200x600.png?w=900&h=450&auto=format" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Vshape