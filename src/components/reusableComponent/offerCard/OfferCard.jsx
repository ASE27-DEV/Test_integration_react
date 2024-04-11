import { Box, Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import RightArrow from '../../../assets/svg/RightArrow';

const OfferCard = ({ image, title, description }) => (
  <Card sx={{ width: 375, height: 330, backgroundColor: 'grey.200' }}>
    <CardMedia>
      {image}
    </CardMedia>
    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: -7, height:'120px' }}>
      <Box className='offerCard_title_box'>
        <Typography className='textSpeechMediumPlusSize'>
          {title}
        </Typography>
      </Box>
      {description.map((desc, index) => (
        <Box sx={{ marginTop:'5%', textAlign:'center'}}>
          <Typography key={index} className='textSpeechLowWeight '>
            {desc}
          </Typography>
        </Box>
      ))}
    </CardContent>
    <CardActions sx={{ justifyContent: 'flex-end'}}>
      <Button sx={{ textTransform:'none', color:'#3C4044', fontSize:'16px', fontWeight:'600' }}>
        En savoir plus <RightArrow />
      </Button>
    </CardActions>
  </Card>
);

export default OfferCard;