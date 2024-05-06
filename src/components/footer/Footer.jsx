import React from 'react';
import './Footer.css';
import { Container, Typography, Box } from '@mui/material';


const Footer = () => {

    const isMobile = window.innerWidth <= 900; // Détecte si l'appareil est mobile

    return (
        <>
            <Container maxWidth="100%">
                <Box className="company_footer">
                    <Typography className={isMobile ? 'mobileTextMediumSize' : 'destopTextMediumSize'}>
                        <span >Solum ©2023 - Kaliop</span>             
                    </Typography>
                </Box>
            </Container>
        </>
    )
};

export default Footer;