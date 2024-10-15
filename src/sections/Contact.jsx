import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name:'',
        email:'',
        message:''
    })

    const handleChange = ({target: {name, value}})=>{
        setForm ( {...form, [name]:value});
    }

    // service_nbtk8we

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true);

        try{
            await emailjs.send(
                'service_nbtk8we',
                'template_4nako9k', 
                {
                    from_name: form.name,
                    to_name: 'Rahul',
                    from_email: form.email,
                    to_email: 'rahul8700yadav@gmail.com',
                    message: form.message
                },
                'XFVAwOA-XvlXBR14U'
            )

            setLoading(false);
            alert('Your message has been sent!')

            setForm({
                name:'',
                email:'',
                message:''
            });

        } catch(err){
            setLoading(false);
            console.log(err);
            alert('Your Website just crashed Bro!')
        }

    }


  return (
    <section className='c-space m-20 pt-20' id='contact'>
        <div className='relative min-h-screen flex items-center justify-center flex-col'>
            <img src="/assets/terminal.png" alt="terminal background" className='absolute inset-0 min-h-screen' />
            <div className='contact-container'>
                <h3 className='head-text'>Let's talk</h3>
                <p className='text-lg text-white-600 mt-3'>Contact Me</p>

                <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                    <label className='space-y-3'>
                        <span className='field-label'>Full Name</span>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required className='field-input' placeholder='Your Name'/>
                    </label>

                    <label className='space-y-3'>
                        <span className='field-label'>Email</span>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required className='field-input' placeholder='Your Email'/>
                    </label>

                    <label className='space-y-3'>
                        <span className='field-label'>Message</span>
                        <textarea name="message" value={form.message} onChange={handleChange} required row={5} className='field-input' placeholder='Your Message'/>
                    </label>

                    <button className='field-btn' type='submit' disabled={loading}>
                        {loading? 'Sending...' : 'Send Message'}
                        <img src="/assets/arrow-up.png" alt="up-arrow" className='field-btn_arrow'/>
                    </button>
                </form>
            </div>

        </div>
      
    </section>
  )
}

export default Contact
