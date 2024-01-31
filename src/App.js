import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import packageInfo from './data/data.json';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar'
import NavOptions from './components/NavOptions.js';
import Slider from "./components/Slider.js"
import Offers from './components/Offers.js';
import Heading from './components/Heading.js';
import StarProduct from './components/StarProducts.js';
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js';
import HotAccessories from './components/HotAccessories.js';
import Productreviews from './components/Productreviews.js';
import Videos from './components/Videos.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';

let banner = packageInfo.banner;

function App() {
  return (
     <Router>
        <PreNavbar />
        <Navbar />
        <Routes>
         <Route exact path="/miphones" element={<NavOptions miPhones = {packageInfo.miPhones} />}></Route>
         <Route exact path="/redmiphones" element={<NavOptions redmiPhones = {packageInfo.redmiPhones} />}></Route>
         <Route exact path="/tv" element={<NavOptions tv = {packageInfo.tv} />}></Route>
         <Route exact path="/laptops" element={<NavOptions laptop = {packageInfo.laptop} />}></Route>
         <Route exact path="/lifestyle" element={<NavOptions fitnessAndLifestyl = {packageInfo.fitnessAndLifeStyle} />}></Route>
         <Route exact path="/home" element={<NavOptions home = {packageInfo.home} />}></Route>
         <Route exact path="/audio" element={<NavOptions audio = {packageInfo.audio} />}></Route>
         <Route exact path="/accessories" element={<NavOptions accessories = {packageInfo.accessories} />}></Route>
        </Routes>
        <Slider start={banner.start}/> 
        <Offers offer={packageInfo.offer}/>
        <Heading text="STAR PRODUCT"/>
        <StarProduct starProduct={packageInfo.starProduct}/>
        <Heading text="HOT ACCESSORIES"/>
        <HotAccessoriesMenu />
        <Routes>
         <Route exact path="/music" element={<HotAccessories music={packageInfo.hotAccessories.music} musicCover={packageInfo.hotAccessoriesCover.music}/>} />
         <Route exact path="/smartDevice" element={<HotAccessories smartDevice={packageInfo.hotAccessories.smartDevice} smartDeviceCover={packageInfo.hotAccessoriesCover.smartDevice}/>} />
         <Route exact path="/home" element={<HotAccessories home={packageInfo.hotAccessories.home} homeCover={packageInfo.hotAccessoriesCover.home}/>} />
         <Route exact path="/lifestyle" element={<HotAccessories lifestyle={packageInfo.hotAccessories.lifeStyle} lifestyleCover={packageInfo.hotAccessoriesCover.lifeStyle}/>} />
         <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={packageInfo.hotAccessories.mobileAccessories} mobileAccessoriesCover={packageInfo.hotAccessoriesCover.mobileAccessories}/>} />
        </Routes>
        <Heading text="PRODUCT REVIEWS"/>
        <Productreviews Productreviews={packageInfo.productReviews}/>
        <Heading text="VIDEOS"/>
        <Videos Videos={packageInfo.videos}/>
        <Heading text="IN THE PRESS"/>
        <Banner Banner={banner.end}/>
        <Footer footer={packageInfo.footer} contact={packageInfo.footer.contactUs}/>
     </Router>
  );
}

export default App;
