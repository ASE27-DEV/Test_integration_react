import React from 'react';
import './Offers.css';
import OfferCard from '../../assets/components/offerCard/OfferCard'; // Importez le nouveau composant
import OfferImage1 from '../../assets/images/OfferImage1.png';
import OfferImage2 from '../../assets/images/OfferImage2.png';
import OfferImage3 from '../../assets/images/OfferImage3.png';
import { Box, Grid, Button } from '@mui/material';
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
        description: ['Le cinq pièces avec garage, cuisine, living room, dinning room, petite terrasse.'],
    },
    {
        image: <img src={OfferImage3} className='OfferImage' alt="" />,
        title: 'Abondance',
        description: ['Une offre sur mesure. Jardin, grand garage, piscine, bowling, cinéma... Vous choisissez la maison de vos rêves.'],
    },
];

const Offers = () => {
  return (
    <Box container margin={1}>
      <Grid container direction="column" justifyContent="center" sx={{ overflow: 'hidden' }}>
        <Grid container item spacing={1} sx={{ justifyContent: 'space-between', width: '75%', margin: 'auto', minWidth: '1800px' }}>
          {offers.map((offer, index) => (
            <Grid item key={index}>
              <OfferCard {...offer} />
            </Grid>
          ))}
        </Grid>
        <Grid 
            container
            item
            justifyContent="center"
            sx={{ display: { xl: 'none' }}}
        >
            <Button>
                <MyArrow className='leftArrow'/>
            </Button>
            <Button>
                <MyArrow className='rightArrow'/>
            </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Offers;