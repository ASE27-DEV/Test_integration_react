import React, { useContext } from 'react';
import ScreenContext from '../../reusableComponent/screenContext';
import { Box, Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import RightArrow from '../../../assets/svg/RightArrow';

const OfferCard = ({ image, title, description }) => {

  const { isMobile } = useContext(ScreenContext);

  return (
    <Card
      sx={{
        width: { xs: '250px', lg: '375px' },
        height: 330,
        backgroundColor: 'grey.200'
      }}
    >
      <CardMedia >
        {image}
      </CardMedia>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: { xs: -3, md: -7 },
          height: '120px'
        }}
      >
        <Box className='offerCard_title_box'>
          <Typography className={isMobile ? 'mobileTextBigSize' : 'destopTextMediumPlusSize'}>
            {title}
          </Typography>
        </Box>
        {description.map((desc, index) => (
          <Box sx={{ marginTop: '5%', textAlign: 'center' }}>
            <Typography key={index} className={isMobile ? 'mobileTextLowWeight' : 'destopTextLowWeight'}>
              {desc}
            </Typography>
          </Box>
        ))}
      </CardContent>
      <CardActions
        sx={{
          justifyContent: 'flex-end',
          marginTop: { xs: '7%', md: '15%', lg: '0%' }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            sx={{
              textTransform: 'none',
              color: '#3C4044',
              fontSize: { xs: '14px', md: '16px' },
              fontWeight: '600'
            }}
          >
            <Typography >
              En savoir plus
            </Typography>
            <RightArrow />
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default OfferCard;