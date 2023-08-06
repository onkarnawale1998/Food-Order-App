import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/Components/Header';
import Body from './src/Components/Body';
import Footer from './src/Components/Footer';

const Applayout = () => {
  return(
    <>
      <Header/>
      <Body/>
      <Footer/>     
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout/>)

