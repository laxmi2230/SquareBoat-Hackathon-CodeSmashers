import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import "bootstrap/dist/css/bootstrap.min.css";

const Banner = () => {
    return (
      <div>
      <div className='container-fluid' >
     
      <div className="row">
          <div className="col-12">
              <Carousel>

                  <Carousel.Item>
                      <img
                          className="rounded mx-auto d-block img-fluid"
                          src="https://solwincdn-79e1.kxcdn.com/wp-content/uploads/2019/08/The-Anatomy-of-a-Great-Ecommerce-Call-To-Action.png"
                          alt="First slide"
                      />
                    
                  </Carousel.Item>

                  <Carousel.Item>
                      <img
                          className="rounded mx-auto d-block img-fluid"
                          src="https://www.subhe.com/blog/wp-content/uploads/2019/10/Ecommerce-Photo-Editing.jpg"
                          alt="Second slide"
                      />

                      
                  </Carousel.Item>

                  <Carousel.Item>
                      <img
                          className="rounded mx-auto d-block img-fluid"
                          src="https://bizsoltech.com/wp-content/uploads/2021/07/Build-and-ecomerce-store-bizsol-technologies-1000x500.jpg"
                          alt="Third slide"
                      />
                  </Carousel.Item>

              </Carousel>
          </div>
      </div>
  </div>
</div>
    )
}

export default Banner