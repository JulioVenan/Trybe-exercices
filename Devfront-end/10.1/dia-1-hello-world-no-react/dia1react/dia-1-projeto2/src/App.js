import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { render } from '@testing-library/react';

function App() {
  render(); {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }

}

export default App;
