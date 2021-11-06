import React from 'react'
import $ from "jquery"

export const IndividualProduct = ({individualProduct, addToCart}) => {
    // console.log(individualProduct);
    const handleAddToCart=()=>{
        addToCart(individualProduct);
    }   
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={individualProduct.url} alt="product-img"/>
            </div>
            <div className='product-text title'>{individualProduct.title}</div>
            <div className='product-text description'>{individualProduct.description}</div>
            <div className='product-text price'>Rupees {individualProduct.price}</div>
            <div className='btn btn-danger btn-md cart-btn' onClick={handleAddToCart}>ADD TO CART</div>
            {/* <div className="product-view">
            <div className="close-btn">X</div>
              <div className='product-big-img'>
                <img src={individualProduct.url} alt="product-img"/>
            </div>
            <div className='product-big-description'>
            <h2>{individualProduct.title}</h2>
            {individualProduct.description}
               <div className='product-big-price'>Rupees {individualProduct.price}</div>
            </div>
            <div className='btn btn-danger btn-md cart-btn buybutton'  onClick={handleAddToCart}>ADD TO CART</div>
            <p><b>Warranty :</b>1 day seller replacement warranty against manufacturing defects</p>
            <p><b>Shipping :</b>Dispatched within 2-3 working days</p>
            </div> */
             
            }
        </div> 
    )
}
