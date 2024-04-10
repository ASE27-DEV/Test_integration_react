import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import RightArrow from '../../../assets/svg/RightArrow';

const OfferCard = ({ image, title, description }) => (
  <Card sx={{ maxWidth: 425, backgroundColor: 'grey.200' }}>
    <CardMedia>
      {image}
    </CardMedia>
    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: -5 }}>
      <Typography gutterBottom fontWeight="medium">
        {title}
      </Typography>
      {description.map((desc, index) => (
        <Typography key={index} variant="body2" color="red">
          {desc}
        </Typography>
      ))}
    </CardContent>
    <CardActions sx={{ justifyContent: 'flex-end' }}>
      <Button>
        En savoir plus <RightArrow />
      </Button>
    </CardActions>
  </Card>
);

export default OfferCard;