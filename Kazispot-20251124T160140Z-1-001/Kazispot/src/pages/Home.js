import React, { useEffect } from 'react';
import useReveal from '../utils/scrollReveal';

export default function Home() {
  useEffect(() => { document.title = 'Kazi-Spot - Home'; }, []);
  useReveal();
  return (
    <section className='home'>
      <div className='hero reveal'>
        <h1>Kazi-Spot</h1>
        <p className='lead'>Snack • Web Development • Digital Marketing • Consulting & HR</p>
        <p>Un espace hybride pour manger, travailler et faire croître votre entreprise.</p>
      </div>

      <div className='grid reveal'>
        <div className='card'>
          <h3>Snack & Café</h3>
          <p>Menu rapide, boissons fraîches et espace convivial pour travailler.</p>
        </div>
        <div className='card'>
          <h3>Web & Digital</h3>
          <p>Sites React, branding, visuels et campagnes performantes.</p>
        </div>
        <div className='card'>
          <h3>Consulting & RH</h3>
          <p>Audit, formation, mise à disposition et placement du personnel.</p>
        </div>
      </div>
    </section>
  );
}
