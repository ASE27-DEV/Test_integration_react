import React from 'react';
import './Simulator.css';
import SimulatorImage from '../../assets/images/SimulatorImage.png';
import SeparationLine from '../../assets/svg/SeparationLine.svg';

import { Box, Grid, Button, Container } from '@mui/material';

const Simulator = () => {
    return (
        <>
            <Container margin={0} spacing={0} maxWidth="80%">
                <Grid
                    container
                    direction="row-reverse"
                    justifyContent="space-around"
                    sx={{ border: '2px solid blue' }}
                >
                    <Grid 
                        container 
                        xs={12}
                        sm={6}
                        item 
                        justifyContent="center" 
                        sx={{ border: '1px solid red' }}
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
                        sx={{ border: '1px solid grey' }}

                    >
                        <div>
                            <h2>Le Simulateur</h2>
                        </div>

                        <div>
                            <img src={SeparationLine} width="80%" alt="" />
                        </div>

                        <div>
                            <p>Pensé par nous, fait pour vous. Prêt à découvrir votre nouveau rêve ?</p>
                            <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut nobis tempore adipisci laboriosam quidem dignissimos repellat totam repellendus nostrum.</p>


                            <div >
                                <Button class="information_button"> Accéder au simulateur </Button>
                            </div>
                        </div>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
};

export default Simulator;