import React from 'react';
import './Footer.css';
import { Container, Typography } from '@mui/material';


const Footer = () => {
    return (
        <>
            <Container maxWidth="100%">
                <Typography>
                    <div class="company_footer">
                        <span >Solum ©2023 - Kaliop</span>             
                    </div>
                </Typography>
            </Container>
        </>
    )
}

export default Footer;