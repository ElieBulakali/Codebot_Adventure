import React, { useEffect } from 'react';
import useReveal from '../utils/scrollReveal';

export default function Contact() {
  useEffect(() => { document.title = 'Kazi-Spot - Contact'; }, []);
  useReveal();
  return (
    <section className='page reveal'>
      <h2>Contact</h2>
      <p>Adresse: Lubumbashi / Kigali (à confirmer)</p>
      <p>Email: info@kazi-spot.com</p>
      <p>Téléphone / WhatsApp: +250 700 000 000</p>
      <p>Pour les entreprises : envoyez-nous vos demandes à partners@kazi-spot.com</p>
    </section>
  );
}
