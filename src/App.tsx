import Header from './components/Header/Header.tsx';
import Hero from './components/Hero/Hero.tsx';
import CollectionIntro from './components/CollectionIntro/CollectionIntro.tsx';
import ProductShowcase from './components/ProductShowcase/ProductShowcase.tsx';
import Campaigns from './components/Campaigns/Campaigns.tsx';
import SizeShowcase from './components/SizeShowcase/SizeShowcase.tsx';
import TheyUseCorello from './components/TheyUseCorello/TheyUseCorello.tsx';
import InsideCorello from './components/InsideCorello/InsideCorello.tsx';
import AppPromotion from './components/AppPromotion/AppPromotion.tsx';
import SeoContent from './components/SeoContent/SeoContent.tsx';
import Register from './components/Register/Register.tsx';
import Footer from './components/Footer/Footer.tsx';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CollectionIntro />
      <ProductShowcase />
      <Campaigns />
      <SizeShowcase />
      <TheyUseCorello />
      <InsideCorello />
      <AppPromotion />
      <SeoContent />
      <Register />
      <Footer />
    </>
  );
}

export default App;
