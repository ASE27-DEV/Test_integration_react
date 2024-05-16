import { Box } from '@mui/material';
import { ScreenProvider } from './components/reusableComponent/screenContext';
import Header from "./components/header";
import Concept from "./components/concept";
import Offers from "./components/offers";
import Simulator from "./components/simulator"
import Faq from './components/faq'
import Newsletter from "./components/newsletter";
import Footer from './components/footer';

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