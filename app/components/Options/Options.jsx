import clsx from "clsx"
import style from "../restaurantsCard.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"


export const  Options = () =>{


   
    return(
        <>
        <div className={clsx("container-fluid d-flex flex-column align-items-end my-5 ", style.container)}>
          <div className="d-flex mb-4 justify-content-between px-4 w-100">
          <Link href="*" className='text-success fw-bold h5 text-decoration-none'> <FontAwesomeIcon className='me-2' icon={faChevronLeft}/>مشاهده همه</Link>
          <h3 className="fw-bold text-dark-emphasis">دارای تخفیف</h3>
          </div>
          <div className="d-flex mb-4 justify-content-between px-4 w-100">
          <Link href="*" className='text-success fw-bold h5 text-decoration-none'> <FontAwesomeIcon className='me-2' icon={faChevronLeft}/>مشاهده همه</Link>
          <h3 className="fw-bold text-dark-emphasis">ارسال رایگان</h3>
          </div>
          <div className="d-flex mb-4 justify-content-between px-4 w-100">
          <Link href="*" className='text-success fw-bold h5 text-decoration-none'> <FontAwesomeIcon className='me-2' icon={faChevronLeft}/>مشاهده همه</Link>
          <h3 className="fw-bold text-dark-emphasis">یک تجربه جدید</h3>
          </div>
          <div className="d-flex mb-4 justify-content-between px-4 w-100">
          <Link href="*" className='text-success fw-bold h5 text-decoration-none'> <FontAwesomeIcon className='me-2' icon={faChevronLeft}/>مشاهده همه</Link>
          <h3 className="fw-bold text-dark-emphasis">دارای کوپن</h3>
          </div>
          <div className="d-flex mb-4 justify-content-between px-4 w-100">
          <Link href="*" className='text-success fw-bold h5 text-decoration-none'> <FontAwesomeIcon className='me-2' icon={faChevronLeft}/>مشاهده همه</Link>
          <h3 className="fw-bold text-dark-emphasis">کوپن سفارش اول</h3>
          </div>
          <div className="d-flex justify-content-between px-4 w-100">
          <Link href="*" className='text-success fw-bold h5 text-decoration-none'> <FontAwesomeIcon className='me-2' icon={faChevronLeft}/>مشاهده همه</Link>
          <h3 className="fw-bold text-dark-emphasis">فقط در اسنپ فود</h3>
          </div>
          
        </div>
        </>
    )
}