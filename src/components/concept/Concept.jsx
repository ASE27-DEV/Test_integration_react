import React from 'react';
import './Concept.css';
import ConceptImage from '../../assets/images/ConceptImage.png';
import SeparationLine from '../../assets/svg/SeparationLine';

import { Box, Grid, Typography } from '@mui/material';

const Concept = () => {
    return (
        <>
            <Box margin={0} spacing={0} >
                <Grid
                    container
                    className='concept_section_container'
                    sx={{}}
                >
                    <Grid 
                        container 
                        xs={12}
                        lg={6}
                        item 
                        justifyContent="center" 
                        sx={{ }}
                    >   
                        <Box className='concept_image'>
                            <img src={ConceptImage} className="image" alt="" />
                        </Box>
                    </Grid>
                    <Grid 
                        container
                        item 
                        className='concept_text_container'
                        direction="column" 
                        justifyContent="center" 
                        alignItems="flex-start"
                        sx={{ width: {xs: '100%', lg: '31%'}, alignItems: {xs: 'center', lg: 'flex-start'}}}
                    >
                        {/* WARNING Typo className are in style.css */}
                        <Box className=''>
                            <Typography className="textSpeechMediumSize">
                                Le concept
                            </Typography>
                        </Box>

                        <Box className=''>
                            <SeparationLine width={450}/>
                        </Box>

                        <Box className='concept_text'>
                            <Typography className="textSpeechBigSize">
                                Trois gammes avec une myriade d'options pour construire la maison de vos rêves, éco-friendly et à un tarif abordable
                            </Typography>
                        </Box>
                        <Box className='concept_text'>
                            <Typography className="textSpeechLowWeight">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat assumenda sapiente repellendus ullam ipsam maiores.
                            </Typography>
                        </Box>

                        <Box className='concept_information_button_div'>
                            <button className='concept_information_button'> Plus d'informations </button>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </>
    )
};

export default Concept;