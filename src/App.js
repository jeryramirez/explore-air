import React from 'react';

import Header from './components/header/header.component';
import Product from './components/product/product.component';
import Description from './components/description/description.component';
import Offer from './components/offer/offer.component';
import Off from './components/off/off.component';

import StepOne from './components/stepOne/stepOne.component';

function App() {
  return (
    <div className="App">
          <Header />
          <Product />
          <Description />
          <Offer />
          <Off />

          <StepOne />
          
    </div>
  );
}

export default App;
