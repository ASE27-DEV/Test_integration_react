import React from 'react';
import { Grid } from '@mui/material';

const links = [
  { href: '#concept_section', text: 'Le concept' },
  { href: '#offer_section', text: 'Les offres' },
  { href: '#simulator_section', text: 'Le simulateur' },
  { href: '#faq_section', text: 'FAQ' },
  { href: '#newsletter_section', text: 'Inscription' },
];

const NavigationMenu = ({ direction, justifyContent, alignItems, height, color }) => (
  <Grid
    container
    direction={direction}
    justifyContent={justifyContent}
    alignItems={alignItems}
    height={height}
  >
    {links.map((link, index) => (
      <Grid sx={{ margin: '2%', marginLeft:'3%', color:{color}}} key={index}>
        <p><a href={link.href}>{link.text}</a></p>
      </Grid>
    ))}
  </Grid>
);

export default NavigationMenu;
