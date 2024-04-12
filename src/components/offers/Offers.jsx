import React from 'react';
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

const Offers = () => {
  return (
    <Box className='offer_container'>

      <Box className='offer_content_container'>
        <Typography className='textSpeechMediumSize'>
          Les offres
        </Typography>

        <SeparationLine width={699}/>

        <Box className='text_box_container'>
          <Typography className='textSpeechBigSize'>
            Trois gammes avec une myriade d'options pour construire la maison de vos rêves.
          </Typography>
        </Box>
      </Box>

      <Grid container direction="column" justifyContent="center" alignItems='center' sx={{ overflow: 'hidden', marginTop:'2%', marginBottom:'5%' }}>
        <Grid container item spacing={1} sx={{ justifyContent: 'space-around', width: '90%', margin: 'auto', maxWidth: '1440px', minWidth:'1405px' }}>
          {offers.map((offer, index) => (
            <Grid item key={index}>
              <OfferCard {...offer} />
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
          <Button>
              <MyArrow className='leftArrow'/>
          </Button>
          <Button>
              <MyArrow className='rightArrow'/>
          </Button>
      </Grid>
    </Box>
  );
};

export default Offers;