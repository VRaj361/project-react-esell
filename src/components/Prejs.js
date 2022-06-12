import React from 'react'

export const Prejs = () => {
    const fun=()=> {
        const scrip=document.createElement("script")
        scrip.src="../js/vendor.js";
        scrip.async=true
        document.body.appendChild(scrip)
    }
    const fun1=()=> {
        const scrip=document.createElement("script")
        scrip.src="../js/jquery.shopnav.js";
        scrip.async=true
        document.body.appendChild(scrip)
    }
    
    const fun2=()=> {
        const scrip=document.createElement("script")
        scrip.src="../js/app.js";
        scrip.async=true
        document.body.appendChild(scrip)
    }
    
 
  return (
      
    <div>
        {fun()}
        {fun1()}
        {fun2()}
        
    </div>
  )
}
