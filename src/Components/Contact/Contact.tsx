import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact: React.FC = () => {
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '', phone: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '', phone: '' });
  const [result, setResult] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);

  const validate = () => {
    let tempErrors = { name: '', email: '', message: '', phone: '' };
    let isValid = true;

    if (!formValues.name) {
      tempErrors.name = "Name is required";
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(formValues.name)) {
      tempErrors.name = "Name can only contain letters";
      isValid = false;
    }

    if (!formValues.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formValues.phone) {
      tempErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formValues.phone)) {
      tempErrors.phone = "Phone number is invalid";
      isValid = false;
    }

    if (!formValues.message) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "name" && !/^[A-Za-z\s]*$/.test(value)) {
      return; // Prevent invalid characters from being entered
    }
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      setSubmitting(true);
      setResult("Sending....");
      const formData = new FormData(event.currentTarget);

      formData.append("access_key", "84123d34-98eb-4b60-b730-d1adc61da3fd");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        alert("Form Submitted Successfully");
        event.currentTarget.reset();
        setFormValues({ name: '', email: '', message: '', phone: '' });
      } else {
        console.log("Error", data);
        setResult(data.message);
        alert(`Error: ${data.message}`);
      }
      setSubmitting(false);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently interested to take new projects, so feel free to contact me for assistance</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>rnagatarun@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>1234567890</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Banglore, India</p>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" placeholder='Enter your name' value={formValues.name} onChange={handleChange} required />
            {errors.name && <p className="error">{errors.name}</p>}
            <label htmlFor="email">Your Email</label>
            <input type="email" name="email" placeholder='Enter your email' value={formValues.email} onChange={handleChange} required />
            {errors.email && <p className="error">{errors.email}</p>}
            <label htmlFor="phone">Your Phone</label>
            <input type="text" name="phone" placeholder='Enter your phone number' value={formValues.phone} onChange={handleChange} required />
            {errors.phone && <p className="error">{errors.phone}</p>}
            <label htmlFor="message">Write your message here</label>
            <textarea name="message" rows={6} placeholder='Enter Your Message' value={formValues.message} onChange={handleChange} required />
            {errors.message && <p className="error">{errors.message}</p>}
            <button type="submit" className='contact-submit' disabled={submitting}>Submit Now</button>
          </form>
          {result && <p>{result}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;