import React from 'react';
import './Newsletter.css';
import SeparationLine from '../../assets/svg/SeparationLine';

import { Box, Grid, Button, Typography, Stack, InputBase } from '@mui/material';

const Newsletter = () => {
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
                            top: '-50px',
                            backgroundColor: 'white',
                            width: { xs: '95%', sm:'85%', lg: '45%' },
                            height: { xs: '295px', lg: '380px' },
                            borderRadius: '40px',
                            boxShadow: '0px 5px 5px #F9FAFB',
                        }}
                    >
                        <Typography className='textSpeechMediumSize' sx={{marginTop:'4%'}}>
                            Notre newsletter
                        </Typography>
                            <SeparationLine width={499}/>
                        <Typography className='textSpeechBigSize' sx={{maxWidth:'75%', textAlign:'center'}}>
                            Pour suivre notre lancement et profiter des meilleurs tarifs pour votre future maison
                        </Typography>
                        <Stack direction="row" spacing={1} useFlexGap
                            sx={{ 
                                border:'1px solid #3C4044',
                                borderRadius: '5px',
                                padding: '5px',
                                width:'70%',
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
                            <Button variant="contained" className='textSpeechMediumSize' sx={{ flexShrink: 0, textTransform:'none', backgroundColor:'#3C4044', width:'170px', height:'43px'}}>
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
