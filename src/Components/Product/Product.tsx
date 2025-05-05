import React from 'react';
import './product.scss';
import Image from 'next/image';

const Product = (props: any) => {
  return (
    <div className='product'>
      <div className='product-img flex justify-center'>
        <Image src={props.img ? props.img : '/images/newproduct/product1.png'} alt='product' width={100} height={100}/>
      </div>
      <div className='prodcut-info flex flex-col justify-center items-center'>
        <div>{props.info1? props.info1 : 'Alfa Mist'}</div>
        <div>{props.info2? props.info2 : '$ALFA'}</div>
      </div>
      <div className='product-price'>
        <div>{props.price1? props.price1 : '$1.44k'}</div>
        <div>{props.price2? props.price2 : '+33%'}</div>
      </div>
    </div>
  )
}
export default Product;