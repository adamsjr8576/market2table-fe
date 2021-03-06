import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './VendorProductForm.scss';

export const VendorProductForm = ({ products, setProducts }) => {

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [hasError, setHasError] = useState(false);

  const handleProductSubmit = () => {
    const product = {
      name: productName,
      price: productPrice,
      description: productDescription,
      id: Date.now()
    }
    setProducts([...products, product]);
    setProductName('');
    setProductPrice('');
    setProductDescription('');
  }

  return (
    <form className='vendor-product-form'>
      <section className='vendor-product-from-section'>
        <input value={productName} onChange={(event) => setProductName(event.target.value)} type='text' placeholder='Product Name...' className='product-name-input' maxlength='20'/>
        <input value={productPrice} onChange={(event) => setProductPrice(event.target.value)}type='text' placeholder='$/qty...' className='product-price-input' maxlength='10'/>
      </section>
      <textarea value={productDescription} onChange={(event) => setProductDescription(event.target.value)}
        form='vendor-form-info' name='vendor-description-textarea'
        className='product-description-textarea' placeholder='Product Description...'
        rows='3' columns='25' maxlength='65'>
      </textarea>
      <button onClick={handleProductSubmit} type='button' className='submit-new-product-button'>Create Product</button>
    </form>
  )
}

export default VendorProductForm;
