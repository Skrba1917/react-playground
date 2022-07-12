import React from "react";
import "./../css/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1234"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41Ag4WE7uyL._SX324_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="12345"
            title="Funko Pop! Marvel: Beyond Amazing - Spider-Woman Mattie Franklin"
            price={12.99}
            image="https://m.media-amazon.com/images/I/51tEcwzlSVL._AC_UL320_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="123456"
            title="Roku Express | HD Streaming Media Player with High Speed HDMI Cable and Simple Remote"
            price={17.99}
            image="https://m.media-amazon.com/images/I/717dWfmxXVL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="1234567"
            title="essence | Lash Princess False Lash Effect Mascara | Gluten & Cruelty Free"
            price={4.99}
            image="https://m.media-amazon.com/images/I/61K6cQhw4EL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="12345678"
            title="Neutrogena Makeup Remover Cleansing Face Wipes"
            price={9.78}
            image="https://m.media-amazon.com/images/I/71V9rJ7roDL._AC_UL320_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="123456789"
            title="All-New Hisense U6 Series 50-Inch 4K Quantum Dot QLED Smart Fire TV with Dolby Vision"
            price={499.99}
            image="https://m.media-amazon.com/images/I/61hbJmB1IxL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
