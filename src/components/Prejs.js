import React from 'react';


// export class Prejs extends React.Component{
//     constructor(){
//         const scrip=document.createElement("script")
//                 scrip.src="../js/vendor.js";
//                 scrip.async=true
//                 document.body.appendChild(scrip)
//                         const scrip1=document.createElement("script")
//         scrip1.src="../js/jquery.shopnav.js";
//         scrip1.async=true
//         document.body.appendChild(scrip1)
//                 const scrip2=document.createElement("script")
//         scrip2.src="../js/app.js";
//         scrip2.async=true
//         document.body.appendChild(scrip2)
//     }
//     componentDidMount() {
//         window.addEventListener('load', this.handleLoad);
//      }
    
//      componentWillUnmount() { 
//        window.removeEventListener('load', this.handleLoad)  
//      }
    
//      handleLoad() {
//         const scrip=document.createElement("script")
//                 scrip.src="../js/vendor.js";
//                 scrip.async=true
//                 document.body.appendChild(scrip)
//                         const scrip1=document.createElement("script")
//         scrip1.src="../js/jquery.shopnav.js";
//         scrip1.async=true
//         document.body.appendChild(scrip1)
//                 const scrip2=document.createElement("script")
//         scrip2.src="../js/app.js";
//         scrip2.async=true
//         document.body.appendChild(scrip2)
//      }
     
// }

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
