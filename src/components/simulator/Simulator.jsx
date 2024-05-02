import React from 'react';
import './Simulator.css';
import SimulatorImage from '../../assets/images/SimulatorImage.png';
import SeparationLine from '../../assets/svg/SeparationLine';

import { Box, Grid, Container, Typography } from '@mui/material';

const Simulator = () => {
    return (
        <>
            <Container spacing={0} maxWidth="90%" sx={{marginTop:'2%', marginBottom:'5%'}}>
                <Grid
                    container
                    direction="row-reverse"
                    justifyContent="space-around"
                    sx={{maxWidth:'90%', margin:'auto'}}
                >
                    <Grid 
                        container 
                        xs={12}
                        sm={6}
                        item 
                        justifyContent="center" 
                        sx={{}}
                    >
                        <img src={SimulatorImage} className="image" alt="" />
                    </Grid>
                    <Grid 
                        container
                        xs 
                        item 
                        direction="column" 
                        justifyContent="center" 
                        alignItems="flex-start"
                        sx={{marginLeft:'5%'}}

                    >
                        <Box className=''>
                            <Typography className="textSpeechMediumSize">
                                Le Simulateur
                            </Typography>
                        </Box>

                        <Box>
                            <SeparationLine width={450}/>
                        </Box>

                        <Box className='simulator_text'>
                            <Typography className="textSpeechBigSize">
                            Pensé par nous, fait pour vous. Prêts à découvrir votre nouveau rêve ?
                            </Typography>
                        </Box>
                        <Box className='simulator_text'>
                            <Typography className="textSpeechLowWeight">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut nobis tempore adipisci laboriosam quidem dignissimos repellat totam repellendus nostrum.
                            </Typography>
                        </Box>

                        <Box className='simulator_information_button_div'>
                            <button className='simulator_information_button'> Accéder au simulateur </button>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
};

export default Simulator;