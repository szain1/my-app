import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function About(props) {


    const[myStyle, setMystyle]= useState({
        color: 'black',
        backgroundColor: props.coli

       
    })

const [btntext, setBtntext] = useState("Enable Dark Mode")

     const toggle = () => {
        if (myStyle.color === 'black') {
            setMystyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setBtntext("Enable Light Mode")
        } 
        else {
            setMystyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtntext("Enable Dark Mode")
        }
};

          
    

  return (
    <div className="container my-3"  style={{backgroundColor: props.coli , color: props.coli === "white" ? "black":"white" }} >
      <div class="accordion" id="accordionExample">
  <div class="accordion-item" style={{backgroundColor: props.coli , color: props.coli === "white" ? "black":"white" }}  >
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"  style={{backgroundColor: props.coli , color: props.coli === "white" ? "black":"white" }} >
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={{backgroundColor: props.coli , color: props.coli === "white" ? "black":"white" }} >
      <div class="accordion-body" style={{backgroundColor: props.coli , color: props.coli === "white" ? "black":"white" }}  >
        <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item" style={{backgroundColor: props.coli , color: props.coli === "white" ? "black":"white" }} >
    <h2 class="accordion-header" style={{backgroundColor: props.coli , color: props.coli === "white" ? "black":"white" }} >
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={{backgroundColor: props.coli , color: props.coli === "white" ? "black":"white" }} >
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor: props.coli , color: props.coli === "white" ? "black":"white" }} >
      <div class="accordion-body" style={{backgroundColor: props.coli , color: props.coli === "white" ? "black":"white" }} >
        <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item" style={{backgroundColor: props.coli , color: props.coli === "white" ? "black":"white" }} >
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style={{backgroundColor: props.coli , color: props.coli === "white" ? "black":"white" }} >
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{backgroundColor: props.coli , color: props.coli === "white" ? "black":"white" }} >
        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<br />

    </div>
  )
}
   


