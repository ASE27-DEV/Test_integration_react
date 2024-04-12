import React from 'react';
import './Footer.css';
import { Container, Typography } from '@mui/material';


const Footer = () => {
    return (
        <>
            <Container maxWidth="100%">
                <div className="company_footer">
                    <Typography className='textSpeechMediumSize'>
                        <span >Solum ©2023 - Kaliop</span>             
                    </Typography>
                </div>
            </Container>
        </>
    )
};

export default Footer;