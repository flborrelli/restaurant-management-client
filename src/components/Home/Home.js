import React, { useState, useEffect } from 'react';
import './home.css';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className="home">
    <div className='d-flex flex-column align-items-center mt-3 mb-5'>
      <h1>WORC</h1>
      <h2>Restaurant Chain Management</h2>
    </div>
      <div className="container">
  <div className="row justify-content-center">
    <div className="col-sm-3 d-flex justify-content-center">
    <Link to={'/all-chains'}>
      <Button primary>Chains</Button>
    </Link>
    </div>
    <div className="col-sm-3 d-flex justify-content-center">
    <Link to={'/all-restaurants'}>
      <Button secondary>All Restaurants</Button>
    </Link>
    </div>
  </div>
      </div>
    </div>
  );
}

export default Home;