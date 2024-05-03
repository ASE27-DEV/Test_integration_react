import React from 'react';
import './Simulator.css';
import SimulatorImage from '../../assets/images/SimulatorImage.png';
import SeparationLine from '../../assets/svg/SeparationLine';

import { Box, Grid, Container, Typography } from '@mui/material';

const Simulator = () => {

    const isMobile = window.innerWidth <= 900; // Détecte si l'appareil est mobile

    return (
        <>
            <Box margin={0} spacing={0} maxWidth="100%">
                <Grid
                    container
                    className='simulator_section_container'
                >
                    <Grid 
                        container 
                        xs={12}
                        lg={6}
                        item 
                        justifyContent="center"
                    >
                        <Box className='simulator_image_box'>
                            <img src={SimulatorImage} className="simulator_image" alt="" />
                        </Box>
                    </Grid>
                    <Grid 
                        container
                        xs 
                        item 
                        direction="column" 
                        justifyContent="center" 
                        sx={{alignItems: {xs: 'center', lg: 'flex-start'}, marginLeft: {xs: '0%', lg: '5%'}}}

                    >
                        <Box className=''>
                            <Typography className={isMobile ? 'mobileTextMediumSize' : 'destopTextMediumSize'}>
                                Le Simulateur
                            </Typography>
                        </Box>

                        <Box className='simulator_separationLine_box'>
                            <SeparationLine width={450}/>
                        </Box>

                        <Box className='simulator_text'>
                            <Typography className={isMobile ? 'mobileTextBigSize' : 'destopTextBigSize'}>
                                Pensé par nous, fait pour vous. Prêts à découvrir votre nouveau rêve ?
                            </Typography>
                        </Box>
                        <Box className='simulator_text'>
                            <Typography className={isMobile ? 'mobileTextLowWeight' : 'destopTextLowWeight'}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut nobis tempore adipisci laboriosam quidem dignissimos repellat totam repellendus nostrum.
                            </Typography>
                        </Box>

                        <Box className='simulator_information_button_div'>
                            <button className='simulator_information_button'> Accéder au simulateur </button>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </>
    )
};

export default Simulator;