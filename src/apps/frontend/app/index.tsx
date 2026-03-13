import { Layout } from 'antd';
import Navbar from '../Navbar/index';
import { placeData } from "../content/data";
import PlaceCard from '../content/index';
import FooterIndex from '../footer/Footer';
import HeroBannerOne from '../hero-banner/BannerOne';

function Index() {
  return (
    <Layout>
     <Navbar/>
     <HeroBannerOne/>
     <PlaceCard place={placeData} />
     <FooterIndex/>
    </Layout>
  );
}

export default Index;
