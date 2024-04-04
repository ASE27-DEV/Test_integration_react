import React from "react";
import './Header.css';
import { Stack, Box, Typography, Container } from '@mui/material';
import CompanyLogo from '../../assets/svg/CompanyLogo.svg';
import IconBurgerMenu from '../../assets/svg/IconBurgerMenu.svg';
import NavigationMenu from '../reusableComponent/navigationMenu/NavigationMenu';
import RightArrow from '../../assets/svg/RightArrow.svg';
import SeparationLine from '../../assets/svg/SeparationLine.svg';
import HeaderBackground from '../../assets/images/HeaderBackground.png'


const Header = () => {
  // Fonction de gestion du clic pour le menu burger
  const toggleNavbar = () => {
    // Logique de switch du menu 
  };

  return (
    <Box className="header_box" aria-label="">
      <Stack 
        justifyContent="space-between" 
        id="myTopnav"
        sx={{
          display:"flex",
          flexDirection: {xs:'row-reverse', md:'row'}
        }}
      >
        <Box 
          component="img" 
          src={CompanyLogo} 
          alt="Company Logo" 
          sx={{ marginLeft: '5%', marginRight: {xs:'3%'}}}
        />
        <Box 
          sx={{ 
            marginRight: '5%',
            width: '100%',
            display: {xs:'none', md:'block'},
          }}
        >
          <NavigationMenu />
        </Box>
        <Box 
          sx={{
            margin: '3%',
            display: {xs:'block', md:'none'},
          }} 
          onClick={toggleNavbar}>
          <Box component="img" src={IconBurgerMenu} alt="Menu" />
        </Box>
      </Stack>

      <Box sx={{ marginLeft: '5%' }}> 
          <Typography variant="h3" className="">
            Votre maison éco-responsable et sur mesure
          </Typography>
          <Box className="">
            <Typography variant="body1" className="">
              Solum est une solution de construction éco-responsable à bas coût, sans compromis sur la qualité. Fondée sur un système de containers connectables et connectés, votre maison rapidement disponible, à tous les coûts.
            </Typography>
            <Box sx={{ display:'flex', flexDirection:'row'}}>
              <Box 
                component="img" 
                src={RightArrow} 
                alt="" 
                sx={{ width: '15px', color:'white'}}
              />
              <Typography variant="body1" className="">
                <a href="#concept_section">Le concept</a>
              </Typography>
            </Box>
          </Box>
          <Box component="img" src={SeparationLine} alt="Company Logo" />        
      </Box>
          <div class="header_background_layout">
            <Box 
                component="img" 
                src={HeaderBackground} 
                alt="" 
                sx={{ width:'100%',  objectFit:'cover', position:'absolute', zIndex:'-2', top:'-19%', transform: 'scale(1)'}}
              />       
          </div>
    </Box>
  );
};

export default Header;
