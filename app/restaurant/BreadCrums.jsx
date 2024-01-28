import { Children } from "react"
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const  BreadCrums = ({children}) =>{
    const back = <FontAwesomeIcon  icon={"arrow-left"}/>
    const childArray = Children.toArray(children)

    return(
        <div  className="d-flex flex-row-reverse  list-unstyled">
            {
                children.map((childArray,(child, index)=>{
                    const isLastItem = index === childArray.length-1;
                    return(
                        <div key={index} className="d-flex align-items-center flex-row-reverse">
                            {child}
                            {!isLastItem && <span className="mx-2"><FontAwesomeIcon color="#A6AAAD"  fontSize={12} icon={faChevronLeft}/></span>}
                       </div>
                    )
                }))
                            }     
        </div>
    )
}