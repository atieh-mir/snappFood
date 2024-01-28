import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot ,faMagnifyingGlass,faChevronDown,faStore} from "@fortawesome/free-solid-svg-icons"
import {faFileLines,faUser} from "@fortawesome/free-regular-svg-icons"
import style from "./css/navbar.module.css"
import clsx from "clsx"
import MediaQuery from 'react-responsive'
import Link from "next/link";



export default function Navbar(){
    return(
        <header className={style.container}>

            {/* //desktop features */}
            <MediaQuery minWidth={1024}>
            <div className="d-flex align-items-center">
            <Link className="text-decoration-none text-dark" href='/order'>
            <div className="d-flex align-items-center" >
                <a className={clsx("btn p-2 ",style.order)}> سفارش ها </a>
                <FontAwesomeIcon icon={faFileLines} style={{color: "#121212",}} className="ms-1 fs-6" />
            </div>
            </Link>
            <FontAwesomeIcon icon={faUser} className="ms-5 fs-6" />
            </div>
            <form className={clsx(style.inputContainer)}>
                <input type="search" className={clsx( style.searchInput)} placeholder="جست و جو در اسنپ فود" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" className={clsx("btn")} data-mdb-ripple-init>
                <FontAwesomeIcon className={clsx(style.icons, style.elementGray )} icon={faMagnifyingGlass} />
                </button>
            </form>
            </MediaQuery>
            {/* //end of desktop features    */}

            {/* //mobile features */}
            <MediaQuery maxWidth={1023}> 
                <div>
                <Link className="text-decoration-none" href='/order'>
                 <FontAwesomeIcon icon={faFileLines} style={{color: "#121212",}} className=" fs-6" />
               </Link>
                    <FontAwesomeIcon icon={faUser} className="mx-3 fs-6" />
                    <FontAwesomeIcon className={clsx(style.icons, style.elementGray )} icon={faMagnifyingGlass} />
                </div>
            </MediaQuery>       
            {/* //end of mobile features     */}
                
            <div className={clsx("d-flex align-items-center")}>
                <div className={clsx("ms-md-5 me-2 text-end" , style.lineHeight)}>
                    <h5 className={clsx("m-0 fw-bold")}>آدرس انتخابی</h5>
                    <div className="d-flex align-items-center">
                    <FontAwesomeIcon className={clsx(style.icons,style.elementGray,style.iconTiny, style.colorPink,"mx-2 ")} icon={faChevronDown} />
                    <p className={clsx("m-0 ",style.textTiny , style.elementGray)}>... استان، شهر، منطقه، خیابان، پلاک</p>
                    
                    </div>
                </div>
                <FontAwesomeIcon className={clsx(style.icons , style.elementGray ,"me-0 me-md-4")} icon={faLocationDot} />
                <div>
                <Link href= '/'><img className={clsx(style.logoImg)} src="https://i.ibb.co/FhQJQDd/snappfood-logo.png"/></Link>
                </div>
            </div>
        </header>
    )
}