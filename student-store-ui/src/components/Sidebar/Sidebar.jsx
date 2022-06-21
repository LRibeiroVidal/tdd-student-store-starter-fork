import * as React from "react"
import "./Sidebar.css"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function Sidebar({isOpen = false, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle = () => {}}) {
  return ( 
    <section className={isOpen ? "sidebar" : "sidebar closed"}>
      <button className="toggle-button" onClick={handleOnToggle}>
        <ArrowRightIcon style={{color: "black",   backgroundColor: "white"}}/>
      </button>
    </section>
  )
}
