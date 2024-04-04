import Header from "./components/header/Header";
import Concept from "./components/concept/Concept";
import Offers from "./components/offers/Offers";
import Simulator from "./components/simulator/Simulator"
import Faq from './components/faq/Faq'
import Newsletter from "./components/newsletter/Newsletter";
import Footer from './components/footer/Footer';


const SolumWebSite = () => (
  <>
    <div>
      <Header />
      <Concept />
      <Offers />
      <Simulator />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  </>
);

export default SolumWebSite;