import { useState } from 'react';
import { data } from './data';
import './App.css';
import Catalog from './Catalog';
import Buttons from './Buttons';

function Home() {
  const [cosmetics, setCosmetics] = useState(data);

  const filteredCosmetics = (searchTerm) => {
    const newCosmetics = data.filter(element => element.searchTerm === searchTerm);
    setCosmetics(newCosmetics);
  }
  return (
    <div className='main-container'>
      <Buttons filteredButtons = {filteredCosmetics}/>
      <Catalog catalogCosmetics = {cosmetics} />
    </div>
  )
}

export default Home;
