import React, { useEffect } from 'react';
import useReveal from '../utils/scrollReveal';

export default function HR() {
  useEffect(() => { document.title = 'Kazi-Spot - HR & Consulting'; }, []);
  useReveal();
  return (
    <section className='page reveal'>
      <h2>Consulting & RH</h2>
      <p>Collecte de CV, formation express, mise à disposition de personnel qualifié sur contrat.</p>
      <ol>
        <li>Collecte et présélection des candidats</li>
        <li>Formation et tests pratiques</li>
        <li>Mise à disposition et accompagnement sur mission</li>
      </ol>
    </section>
  );
}
