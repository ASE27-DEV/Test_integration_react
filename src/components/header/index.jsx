import React, { useContext, useState } from 'react';
import './Header.css';
import ScreenContext from '../reusableComponent/screenContext';
import NavigationMenu from '../reusableComponent/navigationMenu';
import { Stack, Box, Typography } from '@mui/material';
import CloseBurgerMenuIcon from '../../assets/svg/CloseBurgerMenuIcon.svg'
import CompanyLogo from '../../assets/svg/CompanyLogo.svg';
import IconBurgerMenu from '../../assets/svg/IconBurgerMenu.svg';
import RightArrow from '../../assets/svg/RightArrow';
import SeparationLine from '../../assets/svg/SeparationLine';
import HeaderBackground from '../../assets/images/HeaderBackground.png'

// All my links for my navbar
const links = [
  { href: '#concept_section', text: 'Le concept' },
  { href: '#offer_section', text: 'Les offres' },
  { href: '#simulator_section', text: 'Le simulateur' },
  { href: '#faq_section', text: 'FAQ' },
  { href: '#newsletter_section', text: 'Inscription' },
];

const Header = () => {

  const { isMobile } = useContext(ScreenContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Status for menu visibility

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen); // toggles the menu visibility status
  };

  return (
    <>
      <Box className="header_box" aria-label="">
        <Box className="header_background_layout">
          <Box
            className="header_background_image"
            component="img"
            src={HeaderBackground}
            alt="Maison posé dans un arbre afin de montre le coté éco-responsable."
          />
        </Box>
        {/* All my navbar */}
        <Stack
          justifyContent="space-between"
          id="myTopnav"
          className=""
          sx={{
            display: "flex",
            flexDirection: { xs: 'row-reverse', md: 'row' },
            marginTop: '-1%'
          }}
        >
          <Box
            component="img"
            src={CompanyLogo}
            alt="Logo de l'entreprise"
            sx={{
              marginLeft: '9%',
              marginRight: { xs: '3%' },
              width: { xs: '85px' }
            }}
          />
          {/* Navbar for destop and tablet */}
          <Box
            sx={{
              width: '100%',
              marginRight: { md: '7%', xl: '12%' },
              marginTop: { md: '0%', xl: '1%' },
              display: { xs: 'none', md: 'block' },
            }}
          >
            <NavigationMenu
              links={links}
              direction={'row'}
              justifyContent={'flex-end'}
              alignItems={'center'}
              color={'#e7effe'}
            />
          </Box>

          {/* This is the burger menu for phone */}
          <Box className='mobileBurgerMenuOverlay' sx={{ display: isMenuOpen ? 'block' : 'none' }}>
            <Box className='mobileBurgerMenu'>
              <Box
                component="img"
                src={CloseBurgerMenuIcon}
                alt="Croix pour fermer le menu mobile"
                className='CloseBurgerMenuIcon'
                onClick={toggleNavbar}
              />
              <NavigationMenu
                links={links}
                direction={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                color={'black'}
                height={'50%'}
              />
            </Box>
          </Box>
          <Box
            sx={{
              margin: '3%',
              display: { xs: 'block', md: 'none' },
            }}
            onClick={toggleNavbar}
          >
            <Box
              component="img"
              src={IconBurgerMenu}
              alt="Icone pour afficher le menu mobile"
            />
          </Box>
        </Stack>
        {/* WARNING Typo className are in style.css */}
        <Box className="header_hero_container">
          <Box className="header_title">
            <Typography className={isMobile ? 'mobileHeaderBigSize' : 'destopHeaderBigSize'}>
              Votre maison éco-responsable et sur mesure
            </Typography>
          </Box>
          <Box className="header_content">
            <Typography component="h1" className={isMobile ? 'mobileHeaderTextLowWeight' : 'destopHeaderTextLowWeight'}>
              Solum est une solution de construction éco-responsable à bas coût, sans compromis sur la qualité. Fondée sur un système de containers connectables et connectés, votre maison rapidement disponible, à tous les coûts.
            </Typography>
            <Box className="header_concept_link">
              <RightArrow size={15} color="#E7EFFE" />
              <Box className="concept_section_link">
                <Typography className={isMobile ? 'mobileHeaderTextLowWeight' : 'destopHeaderTextLowWeight'}>
                  <a href="#concept_section">Le concept</a>
                </Typography>
              </Box>
            </Box>
            <Box className="header_separationLine_box">
              <SeparationLine width={600} color="#E7EFFE" opacity={0.2} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
