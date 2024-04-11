import React from 'react';
import './Concept.css';
import ConceptImage from '../../assets/images/ConceptImage.png';
import SeparationLine from '../../assets/svg/SeparationLine';

import { Box, Grid, Typography } from '@mui/material';

const Concept = () => {
    return (
        <>
            <Box margin={1} spacing={0} >
                <Grid
                    container
                    className='concept_section_container'
                    sx={{}}
                >
                    <Grid 
                        container 
                        xs={12}
                        sm={6}
                        item 
                        justifyContent="center" 
                        sx={{ }}
                    >   
                        <div className='concept_image'>
                            <img src={ConceptImage} className="image" alt="" />
                        </div>
                    </Grid>
                    <Grid 
                        container
                        item 
                        direction="column" 
                        justifyContent="center" 
                        alignItems="flex-start"
                        sx={{ width:'31%'}}
                    >
                        {/* WARNING Typo className are in style.css */}
                        <div className=''>
                            <Typography className="textSpeechMediumSize">
                                Le concept
                            </Typography>
                        </div>

                        <div className=''>
                            <SeparationLine width={450}/>
                        </div>

                        <div className='concept_text'>
                            <Typography className="textSpeechBigSize">
                                Trois gammes avec une myriade d'options pour construire la maison de vos rêves, éco-friendly et à un tarif abordable
                            </Typography>
                        </div>
                        <div className='concept_text'>
                            <Typography className="textSpeechLowWeight">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat assumenda sapiente repellendus ullam ipsam maiores.
                            </Typography>
                        </div>

                        <div className='concept_information_button_div'>
                            <button className='concept_information_button'> Plus d'informations </button>
                        </div>
                    </Grid>

                </Grid>
            </Box>
        </>
    )
};

export default Concept;