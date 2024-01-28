import axios from "axios"
import { useEffect, useState } from "react"
import Modal from 'react-bootstrap/Modal';
import clsx from "clsx"
import style from "./css/foodModal.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faStar,faClock,faChevronLeft} from "@fortawesome/free-solid-svg-icons"
import Api2 from "../../../api/foodParty/usersComment.json"
import { Order } from "@/app/restaurant/[id]/components/content/addToOreder/Order";
import Link from "next/link";


export default function FoodpartyModal({setModalState,show, itemId}){
    const [data , setData] = useState(null)
    useEffect(()=>{
        const getData = async ()=>{
            let data = await axios.get("https://snappfood-api.onrender.com/foodparty/"+itemId);
            setData(data.data)
        }
        getData()
      },[])

    return(
        <>
        <Modal size="lg" show={show} onHide={()=>{setModalState((state)=>({...state , show:false}))}} >
                  <div className={clsx('d-flex justify-content-between px-2 rounded-top-2',style.modalHead)} >
                    <h4 className="my-3 h6">
                        <FontAwesomeIcon className="me-2" icon={faClock} />
                        12 : 45 : 20
                    </h4>
                    <div className='d-flex align-items-center'>
                      <h5 className="">فود پارتی</h5>
                      <img className={style.sparkles} src="https://i.postimg.cc/kgj1ZwR7/sparkles-svgrepo-com.png" />
                    </div>
                  </div>
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    <div className={clsx('container-fluid p-2', style.modalBody)} >
                      <div className={clsx(style.foodSec , 'row d-flex justify-content-end')} >
                        <div className='col-12 col-lg-7 d-flex flex-column mt-2 '>
                          <div className='d-flex mb-3 justify-content-between w-100'>
                            <div >
                              <span className=" px-1 border-opacity-10 border rounded-1">
                              {data?.rate}<FontAwesomeIcon className="text-warning  ms-1" icon={faStar} />
                              </span>
                            </div> 
                            <h4 className={clsx("fw-bold")}>{data?.title}</h4>
                          </div>
                          <p className='text-end text-black-50'>{data?.des}</p>
                          <div className='d-flex w-100 justify-content-end align-items-end'>
                            <span className="text-secondary">عدد باقی مانده</span>
                            <p className='m-0 ms-1 h5 fw-bold'>{data?.count} </p>
                          </div>
                          <div className='w-100 border border-2 border-secondary-subtle mt-3'></div>
                          <div className='d-flex w-100 my-3 justify-content-between'>
                            <Order 
                            name ={ data?.title}
                            id={data?.id}
                            price={data?.price}
                            />
                          <div>
                            <div className="d-flex mt-2 align-items-center">
                              <div className='d-flex flex-column'>
                                <span className={style.dealText}>{data?.price}</span>
                                <span className='fw-bold'>{data?.price}</span>
                              </div>
                              <div><p className={clsx("badge p-2 ms-2 mb-2" , style.modalBadge)}>{data?.deal}</p></div>
                            </div>
                          </div>
                          </div>
                          <div className='d-flex justify-content-between mt-4'>
                            <Link href={`./restaurant/${data?.id}`} className='text-success fw-bold text-decoration-none'> <FontAwesomeIcon className='me-2' icon={faChevronLeft}/>{data?.restaurant} </Link>
                            <p className='h6'>ارسال اکسپرس</p>
                          </div>
                        </div>
                        <div className='col-12 col-lg-5 d-flex'>
                        <img className="w-100 rounded my-3" alt="food" src={data?.img} />
                        </div>
                      </div>
                      {/* بخش نظرات کاربران */}
                      <div className={clsx('w-100 mt-5 d-flex flex-column align-items-end',style.commentSec)}>
                              <p className={clsx(style.commentSecTitle)}>نظرات کاربران</p>
                              {
                                Api2.map(({names,rate,text,id})=>{
                                  return(
                                    <div className='w-100' key={id}>
                                      <div className=' border-bottom border-black-50 p-2 d-flex align-items-center'>
                                        <div className='text-end w-100 me-5'>
                                          <p>{text}</p>
                                        </div>
                                        <div className='d-flex flex-column text-end'>
                                          <h4 className='fw-bold h5'>{names}</h4>
                                          <div className='d-flex justify-content-end my-2'>
                                            <p className='m-0'> ۱۴۰۲ </p>
                                            <span className='mx-1'>آذر</span>
                                            <p className='m-0'> ۱۷ </p>
                                          </div>
                                          <span className="mb-2">
                                            {rate}
                                            <FontAwesomeIcon className="text-warning ms-1" icon={faStar} />
                                          </span>
                                        </div>                                
                                      </div>
                                    </div>
                                  )
                                })
                              }
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
        </>
    )
}