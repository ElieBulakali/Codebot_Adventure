import React, { useEffect } from 'react';
import useReveal from '../utils/scrollReveal';

export default function Menu() {
  useEffect(() => { document.title = 'Kazi-Spot - Menu'; }, []);
  useReveal();
  const items = [
    {name: 'Brochette classique', price: '$2.5'},
    {name: 'Sandwich spécial', price: '$2.0'},
    {name: 'Jus naturel', price: '$1.0'},
    {name: 'Café Kazi', price: '$0.8'},
  ];
  return (
    <section className='page reveal'>
      <h2>Menu</h2>
      <div className='menu-list'>
        {items.map((it,i)=>(
          <div className='menu-item' key={i}><span>{it.name}</span><span>{it.price}</span></div>
        ))}
      </div>
    </section>
  );
}
