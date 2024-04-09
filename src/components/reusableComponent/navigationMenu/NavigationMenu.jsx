import React from 'react';
import { Grid } from '@mui/material';

const links = [
  { href: '#concept_section', text: 'Le concept' },
  { href: '#offer_section', text: 'Les offres' },
  { href: '#simulator_section', text: 'Le simulateur' },
  { href: '#faq_section', text: 'FAQ' },
  { href: '#newsletter_section', text: 'Inscription' },
];

const NavigationMenu = () => (
  <Grid
    container
    direction="row"
    justifyContent="flex-end"
    alignItems="center"
  >
    {links.map((link, index) => (
      <Grid sx={{ margin: '2%', marginLeft:'3%', color:'#FFFFFF'}} key={index}>
        <p><a href={link.href}>{link.text}</a></p>
      </Grid>
    ))}
  </Grid>
);

export default NavigationMenu;
