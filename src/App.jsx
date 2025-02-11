import { useState } from 'react';
import { sculptureList } from './data.jsx';
import './App.css'

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    
    setIndex((index + 1) % sculptureList.length);
  }

  function handleBackClick() {
    
    setIndex((index - 1 + sculptureList.length) % sculptureList.length);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <section className='main-container'>
      <h1> Kristenz Mingoy</h1>
      <button onClick={handleBackClick}>Back</button> 
      <button onClick={handleNextClick}>Next</button> 

      <h2><i>{sculpture.name}</i></h2>

      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>

      {showMore && <p>{sculpture.description}</p>}
      <h3>({index + 1} of {sculptureList.length})</h3>

      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </section>
  );
}
