
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../redux/cartSlice";


import style from "./css/order.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBagShopping,faTrashCan,faMinus,faPlus} from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx";

export default function Order(){
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const { cartTotalQuantity } = useSelector((state) => state.cart);


    useEffect(() => {
        dispatch(getTotals());
      }, [cart, dispatch]);

      const handleAddToCart = (cartItem) => {
        dispatch(addToCart(cartItem));
      };
      const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem));
      };
      const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
      };
      const handleClearCart = () => {
        dispatch(clearCart());
      };
    return(
       
         <div className={clsx(style.cartContainer)}>
           
            {
               cart.cartItems.length === 0 ? (
                    <div className={style.emptyCart}>
                        <FontAwesomeIcon icon={faBagShopping} className="mb-3"/>
                        <p className="fs-6">!سبد خرید شما خالی است</p>
                    </div>    
                ) :
                (
                    <div className="w-100">
                         <div className={clsx("d-flex flex-row-reverse w-100 justify-content-between",style.cartQuantity)}>
                         <p className="mb-0"><span>({cartTotalQuantity})</span>سبد خرید</p>
                         <button onClick={() => handleClearCart()}><FontAwesomeIcon icon={faTrashCan} /></button>
                         </div>
                       {
                        cart.cartItems &&
                        cart.cartItems.map( cartItem => (
                            <div key={cartItem.id} className="w-100 mt-3 d-flex flex-column align-items-end">
                                <div>
                                   <p className={clsx("mb-0 fw-bold" , style.cartItemName)}> {cartItem.name} </p>
                                 </div>
                                <div className="d-flex flex-row-reverse justify-content-between w-100 border-bottom mb-1">
                                    <div className={clsx("d-flex flex-row-reverse align-items-center",style.price)}>
                                    <p className="mb-0 ms-1 fw-bold">{cartItem.price}</p>
                                    <span >تومان</span>
                                    </div>
                                    <div className="d-flex my-3 align-items-center ">
                                        <button className={style.quantityBtn} onClick={() => handleAddToCart(cartItem) }>
                                        <FontAwesomeIcon className={style.icon} icon={faPlus} />
                                        </button>
                                        <div className="mx-3">{cartItem.cartQuantity} </div>
                                        <button className={style.quantityBtn} onClick={() => handleDecreaseCart(cartItem) } >
                                        <FontAwesomeIcon className={style.icon} icon={faMinus} />
                                        </button>
                                    </div> 
                                </div>  
 
                             </div>   
                        ))
                       }
                       <div className="d-flex flex-row-reverse justify-content-between align-items-center py-3">
                        <span className={clsx(style.cartItemName , "fw-bold")}>
                        قابل پرداخت
                        </span>
                       <div className={clsx(style.price,"fw-bold d-flex flex-row-reverse align-items-center")}>
                       <span >
                            {cart.cartTotalAmount}
                        </span>
                        <span className="fw-lighter me-1" >تومان</span>
                       </div>
                       </div>

                       <textarea className="w-100  h-100 rounded p-3 border-secondary-subtle text-secondary mt-1 text-end " style={{minHeight : '100px'}}  placeholder="...توضیحات سفارش" /> 
                       <button type="submite" className={style.submitBtn}>ثبت سفارش</button>
                       
                          
                    </div>    
                )
            }
         </div>
    )
}