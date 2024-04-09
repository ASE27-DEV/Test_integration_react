import React from 'react';
import './Newsletter.css';
import SeparationLine from '../../assets/svg/SeparationLine.svg';

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
                        <Typography variant="body2" fontWeight={600} gutterBottom>
                            Notre newsletter
                        </Typography>
                        <img src={SeparationLine} width="80%" alt="" />
                        <Typography variant="body2" color="text.secondary" mb={2}>
                            Pour suivre notre lancement et profiter des meilleurs tarifs pour votre future maison
                        </Typography>
                        <Stack direction="row" spacing={1} useFlexGap
                            sx={{ 
                                border:'1px solid #3C4044',
                                borderRadius: '5px',
                                padding: '5px',
                            }}
                        >
                            <InputBase
                                hiddenLabel
                                fullWidth
                                aria-label="Entrez votre adresse mail"
                                placeholder="Votre email"
                                inputProps={{
                                    autocomplete: 'off',
                                    ariaLabel: 'Entrez votre adresse mail',
                                }}
                            />
                            <Button variant="contained" color="primary" sx={{ flexShrink: 0 }}>
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
