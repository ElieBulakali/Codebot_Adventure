import React, { useEffect } from 'react';
import useReveal from '../utils/scrollReveal';

export default function Services() {
  useEffect(() => { document.title = 'Kazi-Spot - Services'; }, []);
  useReveal();
  return (
    <section className='page reveal'>
      <h2>Nos Services</h2>
      <ul className='services-list'>
        <li><strong>Développement Web</strong> — Sites vitrines, e-commerce, maintenance.</li>
        <li><strong>Design & Branding</strong> — Logo, flyers, identité visuelle.</li>
        <li><strong>Marketing Digital</strong> — Community management, pubs payantes.</li>
        <li><strong>Consulting & RH</strong> — Audits, formation, staffing sur contrat.</li>
        <li><strong>Impression & Support IT</strong> — CV, documents, assistance.</li>
      </ul>
    </section>
  );
}
