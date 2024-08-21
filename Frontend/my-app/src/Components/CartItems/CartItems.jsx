import React, { useContext} from "react";
import "./CartItems.css";
import cross_icon from '../Asserts/cart_cross_icon.png';
import { ShopContext } from "../../Context/ShopContext";
import { useNavigate } from "react-router-dom";


  


const CartItems = () => {
  
  const {cartItems,removeFromCart,all_product} = useContext(ShopContext);
  const {getTotalCartAmount} = useContext(ShopContext);

  //Navigation to tax-invoice page
  const navigate = useNavigate()
  const handleProceedToCheckout = () => {
     
      const cartItemCount = Object.values(cartItems).reduce((total, count) => total + count, 0);
    
      if (cartItemCount === 0) {
        alert('Kindly add any items to continue');
      } else {
        navigate('/taxinvoice');
      }
    

  }
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p> 
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{

        if(cartItems[e.id]>0)
        {
          return  <div key={e.id}>
                    <div className="cartitems-format-main cartitems-format">
                      <img className="cartitems-product-icon" src={e.image} alt="" />
                      <p>{e.name}</p>
                      <p>₹{e.new_price}</p>
                      <button className="cartitems-quantity">{cartItems[e.id]}</button>
                      <p>₹{e.new_price*cartItems[e.id]}</p>
                      <img onClick={()=>{removeFromCart(e.id)}} className="cartitems-remove-icon" src={cross_icon} alt="" />
                    </div>
                     <hr />
                  </div>;
        }
        return null;
      })}
      
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>₹{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button
           onClick={handleProceedToCheckout}
          >PROCEED TO CHECKOUT</button>


        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;