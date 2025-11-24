import React from 'react';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container footer-inner'>
        <div>© {new Date().getFullYear()} Kazi-Spot</div>
        <div>Contact: info@kazi-spot.com | +250 700 000 000</div>
      </div>
    </footer>
  );
}
