import React, { useContext, useState } from 'react';
import './Header.css';
import ScreenContext from '../reusableComponent/screenContext/screenContext';
import { Stack, Box, Typography } from '@mui/material';
import CloseBurgerMenuIcon from '../../assets/svg/CloseBurgerMenuIcon.svg'
import CompanyLogo from '../../assets/svg/CompanyLogo.svg';
import IconBurgerMenu from '../../assets/svg/IconBurgerMenu.svg';
import NavigationMenu from '../reusableComponent/navigationMenu/NavigationMenu';
import RightArrow from '../../assets/svg/RightArrow';
import SeparationLine from '../../assets/svg/SeparationLine';
import HeaderBackground from '../../assets/images/HeaderBackground.png'


const Header = () => {

  const {isMobile} = useContext(ScreenContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour la visibilité du menu

  // Fonction de gestion du clic pour le menu burger
  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen); // bascule l'état de visibilité du menu
  };

  return (
    <Box className="header_box" aria-label="">
        <Box className="header_background_layout">
          <Box 
            className="header_background_image"
            component="img" 
            src={HeaderBackground} 
            alt="" 
          />       
        </Box>
      <Stack 
        justifyContent="space-between" 
        id="myTopnav"
        className=""
        sx={{
          display:"flex",
          flexDirection: {xs:'row-reverse', md:'row'},
          marginTop:'-1%'
        }}
      >
        <Box 
          component="img" 
          src={CompanyLogo} 
          alt="Company Logo" 
          sx={{ marginLeft: '9%', marginRight: {xs:'3%'}, width: {xs: '85px'}}}
        />
        <Box 
          sx={{ 
            marginRight: '10%',
            width: '100%',
            display: {xs:'none', md:'block'},
          }}
        >
          <NavigationMenu direction={'row'} justifyContent={'flex-end'} alignItems={'center'} color={'#e7effe'}/>
        </Box>
        <Box className='mobileBurgerMenu' sx={{ display: isMenuOpen ? 'block' : 'none'}}>
          <Box className='mobileBurgerMenuOverlay'>
            <Box component="img" src={CloseBurgerMenuIcon} alt="Menu" className='CloseBurgerMenuIcon' onClick={toggleNavbar}></Box>
            <NavigationMenu direction={'column'} justifyContent={'center'} alignItems={'center'} color={'black'} height={'50%'}/>
          </Box>
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

      <Box className="header_hero_container">
        <Box className="header_title">
          <Typography variant="" className={isMobile ? 'mobileHeaderBigSize' : 'destopHeaderBigSize'}>
            Votre maison éco-responsable et sur mesure
          </Typography>
        </Box>
        <Box className="header_content">
          <Typography variant="" className={isMobile ? 'mobileHeaderTextLowWeight' : 'destopHeaderTextLowWeight'}>
            Solum est une solution de construction éco-responsable à bas coût, sans compromis sur la qualité. Fondée sur un système de containers connectables et connectés, votre maison rapidement disponible, à tous les coûts.
          </Typography>
          <Box className="header_concept_link">
            <RightArrow size={15} color="#E7EFFE"/>
            <Box className="concept_section_link">
              <Typography variant="" className={isMobile ? 'mobileHeaderTextLowWeight' : 'destopHeaderTextLowWeight'}>
                <a href="#concept_section">Le concept</a>
              </Typography>
            </Box>
          </Box>
          <Box className="header_separationLine_box">
            <SeparationLine width = {600} color="#E7EFFE" opacity={0.2}/>
          </Box>    
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
