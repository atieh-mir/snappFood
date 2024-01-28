'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper.css';
import clsx from "clsx"
import style from "./css/foodparty.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faStar,faClock,faChevronLeft} from "@fortawesome/free-solid-svg-icons"
import { Navigation, A11y } from 'swiper/modules';
import '../../../node_modules/swiper/modules/navigation.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import FoodpartyModal from "../Modals/FoodpartyModal"
import axios from "axios"



export default function SwiperContainer(){


  const [data , setData] = useState(null)
  const [modalState , setModalState] = useState({
    show : false,
    itemId : 0,
  })

//  const dispath = useDispatch();
 useEffect(()=>{
  const getData = async ()=>{
      let data = await axios.get("https://snappfood-api.onrender.com/foodparty");
      setData(data.data)
  }
  getData()
},[])
 

    return (
      <Swiper
      breakpoints={{
        480: {
          width: 480,
          slidesPerView: 1,
        },
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 3,
        },
        1024: {
          width: 970,
          slidesPerView: 3,
        },
      }}
        
        modules={[Navigation, A11y]}
        navigation
        spaceBetween={-10}
       /*  onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)} */
      >
        {
          data?.map(({id , title  , img , restaurant , deliveryPrice , price , deal , rate , count})=>{
            return(
             <>
              <SwiperSlide >
                {modalState.show &&  <FoodpartyModal itemId={modalState.itemId} show={modalState.show} setModalState={setModalState} />}
              <div
              key={id} 
              onClick={()=>{setModalState((state)=>({...state , show:true , itemId:id}))}} 
              className={clsx("bg-white  text-dark rounded-4 d-flex flex-column  p-5 align-items-center " , style.cards)}>

              <p className={clsx("m-0" , style.cardInfo)}>{restaurant}</p>
              <p className={clsx("m-0" , style.cardInfo)}>پیک فروشنده {deliveryPrice}</p>
              <img className="w-75 rounded my-3" alt="food" src={img} />
              <h4 className={clsx("h5 mb-5" , style.cardFoodTitle)}>{title}</h4>
              <div className="w-100 d-flex justify-content-between">
                  <div>
                      <div className="d-flex">
                      <p className={clsx("badge me-2 mb-2" , style.badge)}>{deal}</p>
                      <span className={style.dealText}>{price}</span>
                      </div>
                      <div>
                          <span className='fw-bold'>{price}</span>
                      </div>
                  </div>
                  <div className="d-flex flex-column align-items-end">
                  <div >
                      <span className="mb-2">
                      <FontAwesomeIcon className="text-warning me-1" icon={faStar} />
                      {rate}
                      </span>
                  </div>
                  <div className='d-flex align-items-end'>
                    <span className={style.countText}>عدد باقی مانده</span>
                    <p className='m-0 ms-1 fw-bold'>{count} </p>
                  </div>
                  </div>
              </div>
          </div>
          </SwiperSlide>
          </>
          )
          })
        }
      </Swiper>
    );
  };