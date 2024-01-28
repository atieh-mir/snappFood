import style from "../components/content/css/content.module.css"
import { Fragment, useEffect, useState } from 'react';
import axios from "axios"
import FoodModalPizza from "../components/foodModal/FoodModalPizza"
import { Order } from "../components/content/addToOreder/Order"


export const Pizza =() => {

    const [data , setData] = useState(null)
    const [modalState , setModalState] = useState({
      show : false,
      itemId : 0,
    })
    useEffect(()=>{
      const getData = async ()=>{
          let data = await axios.get("https://snappfood-api.onrender.com/pizzas");
          console.log(data.data)
          setData(data.data)
      }
      getData()
    },[])
    return(
        <div className="mb-5">
            <h6 id="pizza" className={style.title}>پیتزا</h6>
            <div className="d-flex flex-wrap justify-content-center w-100 ">
            {
            data?.map(({id,img,name,rate,des,price})=>{
            return(
           <Fragment key={id} >
           {modalState.show &&  <FoodModalPizza itemId={modalState.itemId} show={modalState.show} setModalState={setModalState} />}
            <div  className={style.foodCart}>
                     <div className="d-flex" onClick={()=>{setModalState((state)=>({...state , show:true , itemId:id}))}} >
                         <img className={style.foodImg} src={img} />
                         <div className="d-flex text-end flex-column">
                           <h6 className="fw-bold">{name}</h6>
                           <p className={style.foodDes}>{des}</p>
                         </div>
                     </div>
                     <div className="d-flex w-100 justify-content-between align-items-center">
                         <Order name={name}  price={price} id={id}/>  
                         <h6 className="fw-bold fs-6">
                             {price}
                         </h6>
                     </div>
                 </div>
                 </Fragment>
             )})
           }
            </div>
        </div>
    )
}