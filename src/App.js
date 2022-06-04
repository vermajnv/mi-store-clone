import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StartProducts from './components/StarProducts';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessoriesRoute from './components/HotAccessoriesRoute';
import ProductReview from './components/ProductReview';
import data from './data/data.json'; 
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
    return (
        <Router>
            <PreNavbar />
            <Navbar />
            <Slider start={data.banner.start} />
            <Offers offers={data.offer}/>
            <Heading txt={'START PRODUCTS'}></Heading>
            <StartProducts products={data.starProduct}></StartProducts>
            <Heading txt={'HOT ACCESSORIES'}></Heading>
            <HotAccessoriesMenu></HotAccessoriesMenu>
            <HotAccessoriesRoute></HotAccessoriesRoute>
            <Heading txt={'PRODUCT REVIEWS'}></Heading>
            <ProductReview reviews={data.productReviews}></ProductReview>
        </Router>
    );
}

export default App;
