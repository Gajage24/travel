
import '../styles/contact.css'
function Contact(){

    const handleSubmit = () => {
    alert("Submitted successfully ✅");
    };
return (
    <div className="contact-wrapper">
<div className="contact-page">
    <div><h2>Contact Us</h2></div>

<div className="form">
<input placeholder="Your Name" />
<input placeholder="Email" />
<textarea placeholder="Message"></textarea>


</div>
<div className="btn"><button className='send-btn'  onClick={handleSubmit}>Send</button></div>
</div>
</div>

)
}
export default Contact;