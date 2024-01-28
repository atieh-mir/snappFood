import axios from "axios"
import { useEffect, useState } from "react"
import Modal from 'react-bootstrap/Modal';
import clsx from "clsx"
import style from "./css/foodModal.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faStar,faClock,faChevronLeft} from "@fortawesome/free-solid-svg-icons"
import { Order } from "../content/addToOreder/Order"


export default function FoodModal({setModalState,show, itemId}){
    const [data , setData] = useState(null)
    useEffect(()=>{
        const getData = async ()=>{
            let data = await axios.get("https://snappfood-api.onrender.com/drinks/"+itemId);
            console.log(data.data)
            setData(data.data)
        }
        getData()
      },[])

      return(
        <>
        <Modal size="lg" show={show} onHide={()=>{setModalState((state)=>({...state , show:false}))}} >
                  
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    <div className={clsx('container-fluid p-2', style.modalBody)} >
                      <div className={clsx(style.foodSec , 'row d-flex justify-content-end')} >
                        <div className='col-12 col-lg-7 d-flex flex-column justify-content-center mt-2 '>
                          <div className='d-flex mb-3 justify-content-between w-100'>
                            <div >
                              <span className=" px-1 border-opacity-10 border rounded-1">
                              {data?.rate}<FontAwesomeIcon className="text-warning  ms-1" icon={faStar} />
                              </span>
                            </div> 
                            <h4 className={clsx("fw-bold text-dark")}>{data?.name}</h4>
                          </div>
                          <p className='text-end text-black-50'>{data?.des}</p>
                          <div className='w-100 mt-3'></div>
                          <div className='d-flex w-100 my-3 justify-content-between'>
                          <Order name={data?.name}  price={data?.price} id={itemId}/> 
                          <div>
                            <div className="d-flex mt-2 align-items-center">
                              <div className='d-flex flex-column'>
                                <span className='fw-bold'>{data?.price}</span>
                              </div>
                              
                            </div>
                          </div>
                          </div>
                        </div>
                        <div className='col-12 col-lg-5 d-flex'>
                        <img className="w-100 rounded my-3" alt="food" src={data?.img} />
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
        </>
    )
}