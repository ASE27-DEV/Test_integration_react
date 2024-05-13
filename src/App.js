import { Box } from '@mui/material';
import { ScreenProvider } from './components/reusableComponent/screenContext/screenContext';
import Header from "./components/header/Header";
import Concept from "./components/concept/Concept";
import Offers from "./components/offers/Offers";
import Simulator from "./components/simulator/Simulator"
import Faq from './components/faq/Faq'
import Newsletter from "./components/newsletter/Newsletter";
import Footer from './components/footer/Footer';


const SolumWebSite = () => (
  <>
    <Box sx={{maxWidth:'100%', overflow:'hidden'}}>
      <ScreenProvider>
        <Header />
        <Concept />
        <Offers />
        <Simulator />
        <Faq />
        <Newsletter />
        <Footer />
      </ScreenProvider>
    </Box>
  </>
);

export default SolumWebSite;