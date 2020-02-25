import React from 'react';
import { shallow } from 'enzyme';
import { VendorMarketSearch } from './VendorMarketSearch';

const mockState = {
  selectedVendor: {name: 'Rolling in the dough', description: 'just a little bakery rolling in some dough', image_link: 'rollthatdough.png'},
  zipCode: '80401',
  markets: [{name: 'Friendly Famrs', address: '1234 Hillsbury Lane', schedule: 'M-F ALL DAY', google_link: 'google.com', id:'1923782'}]
}

jest.mock("react-redux", () => ({
  useSelector: () => mockState,
  useDispatch: () => jest.fn()
}));

describe('VendorMarketSearch', () => {

  let wrapper;
  let mockAddZipCode = jest.fn();
  let mockAddMarkets = jest.fn();
  let mockMarketsLinked;
  let mockSetMarketsLinked = jest.fn();

  it('should match the snapshot', () => {
    mockMarketsLinked = [{name: 'Friendly Famrs', address: '1234 Hillsbury Lane', schedule: 'M-F ALL DAY', google_link: 'google.com', id:'1923782'}, {name: 'farm farm', address: '1234 Hillsbury Lane', schedule: 'M-F ALL DAY', google_link: 'google.com', id:'1923782'}];
    wrapper = shallow(<VendorMarketSearch
      addZipCode={mockAddZipCode}
      addMarkets={mockAddMarkets}
      marketsLinked={mockMarketsLinked}
      setMarketsLinked={mockSetMarketsLinked}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with no match', () => {
    mockMarketsLinked = [];
    wrapper = shallow(<VendorMarketSearch
      addZipCode={mockAddZipCode}
      addMarkets={mockAddMarkets}
      marketsLinked={mockMarketsLinked}
      setMarketsLinked={mockSetMarketsLinked}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
