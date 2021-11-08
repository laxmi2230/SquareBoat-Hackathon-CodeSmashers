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
                          src="https://economictimes.indiatimes.com/thumb/msid-81970886,width-1000,height-500,resizemode-4,imgsize-1042692/nft-non-fungible-token_istock.jpg?from=mdr"
                          alt="First slide"
                      />
                    
                  </Carousel.Item>

                  <Carousel.Item>
                      <img
                          className="rounded mx-auto d-block img-fluid"   
                          src="https://d3e3ue3zkv25c8.cloudfront.net/wp-content/uploads/2020/11/non-fungible-tokens-nft-beginners-guide.png"
                          alt="Second slide"
                      />

                      
                  </Carousel.Item>

                  <Carousel.Item>
                      <img
                          className="rounded mx-auto d-block img-fluid"
                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--f_S6VZei--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/avdx6bz02s73p4tf9u2i.jpg"
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