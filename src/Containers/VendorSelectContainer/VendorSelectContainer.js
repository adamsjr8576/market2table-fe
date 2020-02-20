import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './VendorSelectContainer.scss';
import VendorSelectCard from '../VendorSelectCard/VendorSelectCard';

export const VendorSelectContainer = () => {
  const allVendors = useSelector(state => state.vendors);
  const vendorSelectCards = allVendors.map(vendor => {
    return (
      <VendorSelectCard name={vendor.name} />
    )
  });

  return (
    <div className='vendor-select-container'>
      <section className='vendor-list-section'>
        <h2 className='vendor-select-header'>Vendors</h2>
        <form className='search-vendors-form'>
          <input type='text' className='search-vendors-input' placeholder='Search Vendors...'/>
          <div className='search-vendors-button-container'>
            <button type='button' className='search-vendors-button'>Search</button>
            <button type='button' className='search-vendors-button'>Clear</button>
          </div>
        </form>
        <section className='vendor-cards-section'>
          {vendorSelectCards}
        </section>
      </section>
      <button className='create-vendor-button'>Create New Vendor</button>
    </div>
  )
}

export default VendorSelectContainer
