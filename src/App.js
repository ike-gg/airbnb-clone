import React from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Card from './components/Card.js';

import data from './data.js';

const App = () => {
  let cards = data.map((item) => {
    return (
      <Card 
        key={item.id}
        {...item}
        // title={item.title}
        // coverImg={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // price={item.price}
        // openSpots={item.openSpots}
      />
    )
  })

  return (
    <div className='container'>
      <Navbar />
      <section className='mainContent'>
        {/* <Hero /> */}
        <section className='cards-list'>
          {cards}
        </section>
      </section>
    </div>
  )
}

export default App;