import React  from 'react'
import axios from 'axios';


export class Contact extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            mailSent: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    } 

       resetForm = function(){
        this.setState({name: '', email: '', message: ''});
    } 

    async handleSubmit(e) {
        e.preventDefault()
        const { name, email, message } = this.state
        const form = await axios.post('/api/form', {
            name,
            email,
            message
        })
        .then(res => {
            if(res.data.success){
                this.setState({
                    mailSent: true
                })
            } else{
                this.setState({
                    mailSent: false
                });
            }
        })
        .catch(err => {
            this.setState({
                mailSent: false
            })
        })
        this.resetForm()
    }

    render() {
        return (
            <div className="contact" id="Contact">
                <div className="header-space"></div>
                <h1>I'd love to hear from you</h1>
                <div className="form-container">
                    <form method="POST" className="contact-form" onSubmit={this.handleSubmit}>
                        <div className="contact-row-top">
                            <div className="contact-col-1">
                                <label htmlFor="name">Enter Your Name *</label>
                                <input type="text" placeholder="Name" name="name"  id="name" onChange={this.handleChange}></input>
                            </div>
                            <div className="contact-col-2">
                                <label htmlFor="email">Enter Your Email *</label>
                                <input type="email" placeholder="Email"  name="email" id="email" onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="contact-row-bottom" >
                            <label htmlFor="message">Type Your Message Here *</label>
                            <textarea rows="5" placeholder="Message" name="message" id="message" onChange={this.handleChange}></textarea>
                        </div>
                        <input type="Submit" name="submit" className="submit-form" value="Send" ></input>
                        <div>
                            {this.state.mailSent === true &&
                                <div>Thank you for contcting me.</div>
                            }
                            {this.state.mailSent === false &&
                            <div>Could not sent email</div>
                            }
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact