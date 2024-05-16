import React, { useContext } from 'react';
import './Concept.css';
import ScreenContext from '../reusableComponent/screenContext';
import ConceptImage from '../../assets/images/ConceptImage.png';
import SeparationLine from '../../assets/svg/SeparationLine';

import { Box, Grid, Typography } from '@mui/material';

const Concept = () => {

    const { isMobile } = useContext(ScreenContext)

    return (
        <>
            <Box margin={0} spacing={0} >
                <Grid
                    container
                    className='concept_section_container'
                >
                    <Grid
                        container
                        xs={12}
                        lg={6}
                        item
                        justifyContent="center"
                    >
                        <Box className='concept_image'>
                            <Box
                                component="img"
                                src={ConceptImage}
                                className="image" alt="Vue en coupe d'une élégante maquette de maison sur plusieurs niveaux, présentée sur un arrière-plan stylisé avec des plans architecturaux."
                            />
                        </Box>
                    </Grid>
                    <Grid
                        container
                        item
                        direction="column"
                        justifyContent="center"
                        sx={{
                            width: { xs: '100%', lg: '31%' },
                            alignItems: { xs: 'center', lg: 'flex-start' }
                        }}
                    >
                        {/* WARNING Typo className are in style.css */}
                        <Box className=''>
                            <Typography className={isMobile ? 'mobileTextMediumSize' : 'destopTextMediumSize'}>
                                Le concept
                            </Typography>
                        </Box>

                        <Box className='concept_separationLine_box'>
                            <SeparationLine width={450} />
                        </Box>

                        <Box className='concept_text'>
                            <Typography className={isMobile ? 'mobileTextBigSize' : 'destopTextBigSize'}>
                                Trois gammes avec une myriade d'options pour construire la maison de vos rêves, éco-friendly et à un tarif abordable
                            </Typography>
                        </Box>
                        <Box className='concept_text'>
                            <Typography className={isMobile ? 'mobileTextLowWeight' : 'destopTextLowWeight'}>
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