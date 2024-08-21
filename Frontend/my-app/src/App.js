
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Asserts/banner_mens.png';
import women_banner from './Components/Asserts/banner_women.png';
import kids_banner from './Components/Asserts/banner_kids.png';
import TaxInvoicePage from './Pages/TaxInvoicePage';


function App() {
  return (
    <div>
       <BrowserRouter>
         <Navbar />
         <Routes>
            
            <Route path='/' element={<ShopCategory banner={men_banner} category="mens"/>}/>
            <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
            <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
            <Route path='product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<LoginSignUp/>}/>
            <Route path='/taxinvoice' element={<TaxInvoicePage/>}/>
           
         </Routes>
          <Footer/> 
          {/* footer Component is added here because it needs to show in all pages not only in shop page */} 
       </BrowserRouter>
    </div>
  );
}

export default App;
