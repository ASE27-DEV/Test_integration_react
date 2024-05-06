import React from 'react';
import './Newsletter.css';
import SeparationLine from '../../assets/svg/SeparationLine';

import { Box, Grid, Button, Typography, Stack, InputBase } from '@mui/material';

const Newsletter = () => {

    const isMobile = window.innerWidth <= 900; // Détecte si l'appareil est mobile

    return (
        <>          
            <Grid className='newsletterBackground'>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        height: { xs: '475px', md: '675px' },
                        gap: 4,
                        minWidth: { xs: '100%', sm: '60%' },
                    }}
                >
                    <Box 
                        sx={{ 
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            position: 'relative',
                            top: { xs:'90px' ,md:'-50px'},
                            backgroundColor: 'white',
                            width: { xs: '95%', sm:'85%', lg: '45%' },
                            height: { xs: '295px', lg: '380px' },
                            borderRadius: '40px',
                            boxShadow: '0px 5px 5px #F9FAFB',
                        }}
                    >
                        <Typography className={isMobile ? 'mobileTextMediumSize' : 'destopTextMediumSize'} sx={{marginTop:'4%'}}>
                            Notre newsletter
                        </Typography>
                        <Box className='newsletter_separationLine_box'>
                            <SeparationLine width={499}/>
                        </Box>
                        <Typography className={isMobile ? 'mobileTextBigSize' : 'destopTextBigSize'} sx={{maxWidth:'75%', textAlign:'center'}}>
                            Pour suivre notre lancement et profiter des meilleurs tarifs pour votre future maison
                        </Typography>
                        <Stack spacing={1}
                            sx={{
                                flexDirection:{xs:'column', md:'row'}, 
                                border:'1px solid #3C4044',
                                borderRadius: '5px',
                                padding: '5px',
                                width:{ xs:'90%' ,md:'70%'},
                                marginBottom:'4%' 
                            }}
                        >
                            <InputBase                     
                                fullWidth
                                aria-label="Entrez votre adresse mail"
                                placeholder="Votre email"
                                inputProps={{
                                    autoComplete: 'off',
                                }}                               
                            />
                            <Button 
                            variant="contained"
                            className={isMobile ? 'mobileTextMediumSize' : 'destopTextMediumSize'}
                            sx={{ 
                                flexShrink: 0,
                                textTransform:'none',
                                backgroundColor:'#3C4044',
                                width:{ xs:'100%' ,md:'170px'},
                                height:'43px'
                                }}
                            >
                                Je m'inscris
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </Grid>
        </>
    )
};

export default Newsletter;
