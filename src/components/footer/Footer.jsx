import React, { useContext } from 'react';
import './Footer.css';
import ScreenContext from '../reusableComponent/screenContext/screenContext';
import { Container, Typography, Box } from '@mui/material';


const Footer = () => {

    const {isMobile} = useContext(ScreenContext)

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