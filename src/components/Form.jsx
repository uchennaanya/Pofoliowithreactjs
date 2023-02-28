import './formstyle.scss'

import React from 'react'

const Form = () => {
    return (
        <>
        <div className="form">
            <form>
                <label htmlFor="name">
                    Your Name
                </label>
                <input type="text" id='name' placeholder='Name' name='name' />

                <label htmlFor="email">
                    Your email
                </label>
                <input type="text" id='email' placeholder='Email' name='email' />

                <label htmlFor="subject">
                    Subject
                </label>
                    
                <input type="text" id='subject' placeholder='Subject' name='subject'/>

                <label htmlFor="msg">
                    Message
                </label>
                <textarea id='msg' rows="6" placeholder='Talk to me' name='msg'></textarea>
                <button>Submit</button>
            </form>
        </div>

        </>
    )
}

export default Form

