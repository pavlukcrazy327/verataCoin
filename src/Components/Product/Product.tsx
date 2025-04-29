import React from 'react';
import './product.scss';
import Image from 'next/image';

const Product = (props: any) => {
  return (
    <div className='product'>
      <div className='product-img'>
        <Image src={'/images/newproduct/product1.png'} alt='product' width={100} height={100}/>
      </div>
      <div className='prodcut-info'>
        <div>Alfa Mist</div>
        <div>$ALFA</div>
      </div>
      <div className='product-price'>
        <div>$1.44k</div>
        <div>+33%</div>
      </div>
    </div>
  )
}
export default Product;