import React, { useState, useContext } from 'react';
import './Offers.css';
import ScreenContext from '../reusableComponent/screenContext/screenContext';
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

const Offers = () => {

  const [offset, setOffset] = useState(0); // défini une position de départ pour "offer_option_box"

  const {isMobile} = useContext(ScreenContext)

  const offerMovemenRight = () => {
    if (offset <= -500) return; // Désactive le bouton si l'utilisateur arrive au bout de l'élement
    setOffset(currentOffset => currentOffset - 250); // Déplace les cartes vers la droite
  };

  const offerMovemenLeft = () => {
    if (offset >= 0) return; // Désactive le bouton si l'utilisateur revient au départ de l'élément
    setOffset(currentOffset => currentOffset + 250); // Déplace les cartes vers la gauche
  };

  return (
    <>
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
                transform: `translateX(${offset}px)`, // applique le décalage
                transition: 'transform 0.3s ease-in-out' //animation douce
                }}
            >
              {offers.map((offer, index) => (
                <Grid item key={index}>
                  <OfferCard {...offer} class="offer_option" id={`offer_option_${index}`}/>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid 
              container
              justifyContent="center"
              className='arrowContainer'
          >
              <Button id="left_navigation_arrow" onClick={offerMovemenLeft}>
                  <MyArrow className='leftArrow' />
              </Button>
              <Button id="right_navigation_arrow" onClick={offerMovemenRight}>
                  <MyArrow className='rightArrow' />
              </Button>
          </Grid>
        </Box>
    </>
  );
};

export default Offers;