import './contact.css'

import React from 'react'

import msg_icon from '../../assets/msg-icon.png'

import mail_icon from '../../assets/mail-icon.png'

import phone_icon from '../../assets/phone-icon.png'

import location_icon from '../../assets/location-icon.png'

import white_arrow from '../../assets/white-arrow.png'



const Contact = () => {

  const [result, setResult] = React.useState("");

 

  const onSubmit = async (event) => {

    event.preventDefault();

    setResult("Sending....");

    const formData = new FormData(event.target);

   

    // Use VITE_ prefix

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

   

    try {

      const response = await fetch("https://api.web3forms.com/submit", {

        method: "POST",

        body: formData

      });

      const data = await response.json();

     

      if (data.success) {

        setResult("Form Submitted Successfully");

        event.target.reset();

      } else {

        console.error("Error", data);

        setResult(`Submission failed: ${data.message || 'Unknown error'}`);

      }

    } catch (error) {

      console.error("Submission error", error);

      setResult("An error occurred");

    }

  };



  return (

    <div className='contact'>

        <div className="contact-col">

            <h3>Send us a message <img src={msg_icon} alt="" /> </h3>

            <p>We truly value your input and are always here to listen. Whether you have specific questions about our programs, need guidance on your application, or simply want to share feedback on your experience, we want to hear from you. Don't hesitate to reach out to us—our dedicated team is ready to provide prompt, helpful responses to ensure you receive the support you need. Feel free to leave your comments, suggestions, or any concerns you might have. Your voice matters, and we're committed to taking action to improve and enhance your experience with us.</p>

            <ul>

                <li><img src={mail_icon} alt="" />Contact@milesTech117.com</li>

                <li><img src={phone_icon} alt="" />+123 456 7891</li>

                <li><img src={location_icon} alt="" />117 HQ<br/> HQ, TZ</li>

            </ul>

        </div>

        <div className="contact-col">

            <form onSubmit={onSubmit}>

                <label htmlFor="">Your Name</label>

                <input type="text" name='name' placeholder='Enter your Name' required/>

                <label htmlFor="">Phone Number</label>

                <input type="tel" name='phone' placeholder='Enter your Mobile' required />

                <label htmlFor="">Write your message here</label>

                <textarea name="message" rows="6" id="" placeholder='Enter your message' required></textarea>

                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>

            </form>

            <span>{result}</span>

        </div>

    </div>

  )

}



export default Contact