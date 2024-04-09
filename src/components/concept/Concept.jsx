import React from 'react';
import './Concept.css';
import ConceptImage from '../../assets/images/ConceptImage.png';
import SeparationLine from '../../assets/svg/SeparationLine.svg';

import { Box, Grid, Button } from '@mui/material';

const Concept = () => {
    return (
        <>
            <Box margin={1} spacing={0}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    sx={{}}
                >
                    <Grid 
                        container 
                        xs={12}
                        sm={6}
                        item 
                        justifyContent="center" 
                        sx={{}}
                    >
                        <img src={ConceptImage} className="image" alt="" />
                    </Grid>
                    <Grid 
                        container
                        xs 
                        item 
                        direction="column" 
                        justifyContent="center" 
                        alignItems="flex-start"
                        sx={{}}

                    >
                        <div class="title_box">
                            <h2 class="title_text">Le concept</h2>
                        </div>

                        <div class="concept_separation_line">
                            <img src={SeparationLine} width="80%" alt="" />
                        </div>

                        <div class="concept_box_textarea">
                            <p class="box_text1">Trois gammes avec une myriade d'options pour construire la maison de vos rêves, éco-friendly et à un tarif abordable</p>
                            <p class="box_text2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat assumenda sapiente repellendus ullam ipsam maiores.</p>


                            <div class="concept_box_button">
                                <Button class="information_button"> Plus d'informations </Button>
                            </div>
                        </div>
                    </Grid>

                </Grid>
            </Box>
        </>
    )
};

export default Concept;