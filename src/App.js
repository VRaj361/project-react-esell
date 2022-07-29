import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
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
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Review } from './Review';
import { Cart } from './Cart';
import { Checkout } from './Checkout';
import { ManageAccount } from './components/account/ManageAccount';
import { Myprofile } from './components/account/Myprofile';
import { AddressBook } from './components/account/AddressBook';
import { TrackOrder } from './components/account/TrackOrder';
import { MyOrder } from './components/account/MyOrder';
import { MyPayment } from './components/account/MyPayment';
import { Cancellation } from './components/account/Cancellation';
import { EditProfile } from './components/account/EditProfile';
import { EditAddress } from './components/account/EditAddress';
import { ManageOrder } from './components/account/ManageOrder';
import { Signout } from './Signout';
import { ChangePassword } from './ChangePassword';
import { NewPassword } from './NewPassword';
import {AddProduct} from './AddProduct';
import { EmptyCart } from './EmptyCart';
import { OrderConfirm } from './OrderConfirm';
import {SetToast} from './components/SetToast'
import { AuctionHome } from './AuctionHome';
import { OtpEnter } from './OtpEnter';
import PreLoading from './components/PreLoading';
import { AlreadyLogin } from './AlreadyLogin';


function App() {
  
  const [toast, settoast] = useState(null)//for toast 
  const toastClick=(mess)=>{
    //console.log("in toast Click");
    settoast(mess)
  }
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

        <SetToast setToast={toast}></SetToast>
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
          <Route exact path="/faq" element={<FAQ />} />
          <Route exact path="/review" element={<Review />} />
          <Route exact path="/productdetails/:id" element={<ProductDetail />} />
          <Route exact path="/viewcart" element={<Cart toastClick={toastClick}/>} />
          <Route exact path="/viewcart/:id" element={<Cart toastClick={toastClick}/>} />
          <Route exact path="/checkout" element={<Checkout toastClick={toastClick}/>} />
          <Route exact path="/signup" element={<Signup toastClick={toastClick}/>} />
          <Route exact path="/login" element={<Login toastClick={toastClick}/>  } />
          <Route exact path="/forgetpassword" element={<ForgetPassword />} />
          <Route exact path="/newarrival" element={<ShopList />} />
          <Route exact path="/newarrival/:searchKey" element={<ShopList />} />
          <Route exact path="/logout" element={<Signout />} />
          <Route exact path='/changepassword' element={<ChangePassword />} />
          <Route exact path='/newpassword' element={<NewPassword toastClick={toastClick}/>} />
          <Route exact path='/addproduct' element={<AddProduct />} />
          <Route exact path='/emptycart' element={<EmptyCart />} />
          <Route exact path='/billconfirm' element={<OrderConfirm />} />
          <Route exact path='/auctionhome' element={<AuctionHome />} />
          <Route exact path='/otpresetpass' element={<OtpEnter toastClick={toastClick}/>} />
          <Route exact path='/preload' element={<PreLoading />} />
          <Route exact path='/alreadyloggedin' element={<AlreadyLogin />} />
          



          {/* account all pages */}
          <Route exact path='/myaccount' element={<MyAccout toastClick={toastClick}/>} />
          <Route exact path='/myaccount/myprofile' element={<MyAccout toastClick={toastClick}/>} />
          <Route exact path='/myaccount/addressbook' element={<MyAccout />} />
          <Route exact path='/myaccount/trackorder' element={<MyAccout />} />
          <Route exact path='/myaccount/myorder' element={<MyAccout />} />
          <Route exact path='/myaccount/mypayment' element={<MyAccout />} />
          <Route exact path='/myaccount/cancellation' element={<MyAccout />} />
          <Route exact path='/myaccount/editprofile' element={<MyAccout toastClick={toastClick}/> } />
          <Route exact path='/myaccount/editaddress' element={<MyAccout />} />
          <Route exact path='/myaccount/manageorder' element={<MyAccout toastClick={toastClick}/>} />
          <Route exact path='/myaccount/addaddress' element={<MyAccout />} />
         
          {/* any worng route can redirect on 404 page */}
          <Route path="*" element={<Error404 />} />
          {/* <Route path="*" element={user? <Login/> : <Signup/>}  /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
