import React from 'react';
import { Grid } from '@mui/material';

const NavigationMenu = ({links, direction, justifyContent, alignItems, height='100%', color }) => (
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
