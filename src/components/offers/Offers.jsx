import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Offers.css';
import OfferCard from '../reusableComponent/offerCard/OfferCard';
import OfferImage1 from '../../assets/images/OfferImage1.png';
import OfferImage2 from '../../assets/images/OfferImage2.png';
import OfferImage3 from '../../assets/images/OfferImage3.png';
import SeparationLine from '../../assets/svg/SeparationLine'
import { Box, Grid, Button, Typography } from '@mui/material';
import { ReactComponent as MyArrow } from '../../assets/svg/MobileArrow.svg';

const offers = [
    {
        image: <img src={OfferImage1} className='OfferImage' alt="" /> ,
        title: 'Essentiel',
        description: ['Un trois pièces classique tout confort avec cuisine, salle de bain, et dressings.'],
    },
    {
        image: <img src={OfferImage2} className='OfferImage' alt="" />,
        title: 'Intemporel',
        description: ['Le cinq pièces avec garage, cuisine, living room, dinning room, petite terrasse. Options possibles avec ou sans surcoût.'],
    },
    {
        image: <img src={OfferImage3} className='OfferImage' alt="" />,
        title: 'Abondance',
        description: ['Une offre sur mesure. Jardin, grand garage, piscine, bowling, cinéma... Vous choisissez la maison de vos rêves.'],
    },
];

// Make movement on my offers view to the right

function offerMovemenRight() {

  const elements = document.querySelectorAll("#offer_option_box .offer_option"); // We select all the box that need to move
  const maxMoveRight = -(window.innerWidth + 100); // Maximal limitation movement to the left depending on the screen size

  // Calculate move value based on screen width
  const moveValue = window.innerWidth < 600 ? 250 : 550;

  elements.forEach(function (element) {
    const currentTransform = getComputedStyle(element).transform;
    const actualMove =
      currentTransform === "none"
        ? 0
        : new WebKitCSSMatrix(currentTransform).m41;

    // Potential move calculation
    const newMove = actualMove - moveValue; // We subtract to go left

    // Apply movement without exceeding the maximum to the left
    if (newMove >= maxMoveRight) {
      element.style.transform = `translateX(${newMove}px)`;
    } else {
      // If potential displacement exceeds limit, displacement is set to the maximum limit
      element.style.transform = `translateX(${maxMoveRight}px)`;
    }
  });
}


// Make movement on my offers view to the left

function offerMovemenLeft() {
  const elements = document.querySelectorAll(".offer_option");
  const maxMoveLeft = 0; // Maximal limitation movement to the right

  // Calculate move value based on screen width
  const moveValue = window.innerWidth < 600 ? 250 : 500;

  elements.forEach(function (element) {
    const currentTransform = getComputedStyle(element).transform;
    const actualMove =
      currentTransform === "none"
        ? 0
        : new WebKitCSSMatrix(currentTransform).m41;

    // Potential move calculation
    const newMove = actualMove + moveValue; // We add to go right

    // Apply movement without exceeding the maximum to the right
    if (newMove <= maxMoveLeft) {
      element.style.transform = `translateX(${newMove}px)`;
    } else {
      // If potential displacement exceeds limit, displacement is set to the maximum limit
      element.style.transform = `translateX(${maxMoveLeft}px)`;
    }
  });
}

  


const Offers = () => {

  const isMobile = window.innerWidth <= 900; // Détecte si l'appareil est mobile

  return (
    <Box className='offer_container'>

      <Box className='offer_content_container'>
        <Typography className={isMobile ? 'mobileTextMediumSize' : 'destopTextMediumSize'}>
          Les offres
        </Typography>
        <Box className='offer_separationLine_box'>
          <SeparationLine width={450}/>
        </Box>
        <Box className='text_box_container'>
          <Typography className={isMobile ? 'mobileTextBigSize' : 'destopTextBigSize'}>
            Trois gammes avec une myriade d'options pour construire la maison de vos rêves.
          </Typography>
        </Box>
      </Box>

      <Grid 
        container 
        direction="column" 
        justifyContent="center" 
        alignItems='center' 
        sx={{ 
          overflow: 'hidden', 
          marginTop:'2%', 
          marginBottom:'5%' 
          }}
      >
        <Grid 
          container 
          id="offer_option_box"
          item 
          spacing={2} 
          sx={{ 
            justifyContent: { xs:'flex-start',md:'space-around'}, 
            width: '90%', 
            margin: 'auto', 
            maxWidth: '1440px', 
            minWidth:{ xs:'950px',md:'1405px'},
            }}
        >
          {offers.map((offer, index) => (
            <Grid item key={index}>
              <OfferCard {...offer}  class="offer_option" id="offer_option"/>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid 
          container
          item
          justifyContent="center"
          className='arrowContainer'
          sx={{ display: { lg: 'none' }}}
      >
          <Button id="left_navigation_arrow" onClick={offerMovemenLeft}>
              <MyArrow className='leftArrow' />
          </Button>
          <Button id="right_navigation_arrow" onClick={offerMovemenRight}>
              <MyArrow className='rightArrow' />
          </Button>
      </Grid>
    </Box>
  );
};

export default Offers;