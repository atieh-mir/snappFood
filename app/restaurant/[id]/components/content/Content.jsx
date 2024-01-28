import style from "./css/content.module.css"
import { Burger,Pizza , HotDog, Steak,Appetizer,Drinks} from "../../index"
import clsx from "clsx"

export default function Content(){
    return(
        <>
        <div data-spy="scroll" data-target="#list-example" data-offset="0"  className={clsx(style.container,"scrollspy-example")}>
             <Pizza />
             <Burger/>
             <HotDog/>
             <Steak/>
             <Appetizer/>
             <Drinks/>
        </div>

        </>
    )
}