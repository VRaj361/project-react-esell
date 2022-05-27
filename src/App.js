import logo from './logo.svg';
import './App.css';

import { Home } from './Home';
import { Login } from './Login';
import { Signup } from './Signup';
import { Wishlist } from './Wishlist';
import { MyAccout } from './MyAccout';
import { ForgetPassword } from './ForgetPassword';
import { Error404 } from './Error404';
import { About } from './About';
import { Contact } from './Contact';
import { FAQ } from './FAQ';
import { ProductDetail } from './ProductDetail';
import { ShopList } from './ShopList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Review } from './Review';
import { Cart } from './Cart';
import { Checkout } from './Checkout';

function App() {
  return (
    <div className="App " >
      <BrowserRouter>
        {/* <Home /> */}
        {/* <Login/> */}
        {/* <Signup/> */}
        {/* <Wishlist/> */}
        {/* <MyAccout/> */}
        {/* <ForgetPassword/> */}
        {/* <Error404/> */}
        {/* <About/> */}
        {/* about not working properly */}
        {/* <Contact/> */}
        {/* <FAQ/> */}
        {/* <ProductDetail/> */}
        {/* <ShopList/> */}
        {/* <Review/> */}
        {/* <Cart/> */}


        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/wishlist" element={<Wishlist/>}/>
          <Route exact path="/faq" element={<FAQ/>}/>
          <Route exact path="/review" element={<Review/>}/>
          <Route exact path="/productdetails" element={<ProductDetail/>}/>
          <Route exact path="/viewcart" element={<Cart/>}/>
          <Route exact path="/checkout" element={<Checkout/>}/>

          {/* any worng route can redirect on 404 page */}
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
