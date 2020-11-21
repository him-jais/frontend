import Axios from 'axios';
import React from 'react'
import './stylees.css'
 class Contact extends React.Component{

           constructor(props) {
             super(props);
            this.state = {
                fields:{
              firstName:'',
              lastName:'',
              email:'',
              message:''
                },
                errors: {}
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  
      };
  
      handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }
  
      submituserRegistrationForm(e) {
        e.preventDefault();

        let formData = {
            firstName: this.state.fields.firstName,
            lastName: this.state.fields.lastName,
            email:this.state.fields.email,
            message: this.state.fields.message,      
               }
               if (this.validateForm()) {
                  Axios.post('http://localhost:5000/contact',formData)// this will work when you put this project in frontend in algo-assign project 
                  .then(resp =>{
                      console.log(resp.data)
                  })
                  .catch(err =>{
                      console.log(err)
                  })
             
                }
                console.log(formData)
          }
          validateForm() {
  
            let fields = this.state.fields;
            let errors = {};
            let formIsValid = true;
    
            if (!fields["email"]) {
              formIsValid = false;
              errors["email"] = "Please enter your email-ID.";
            }
      
            if (typeof fields["email"] !== "undefined") {
              //regular expression for email validation
              var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
              if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "Please enter valid email-ID.";
              }
            }
      
            this.setState({
              errors: errors
            });
            return formIsValid;
          }
      
  
  
    render() {
      return (
      <div id="main-registration-container">
       <div id="register">
          <h1 className='head'>Contact Us Form</h1>
          <form method="post"  className="main"  name="userRegistrationForm" onSubmit= {this.submituserRegistrationForm} >
          <label className="labels">First Name</label><br/>
          <input type="text" name="firstName" className="inputs" value={this.state.fields.firstName} onChange={this.handleChange} /><br/>
          <label  className="labels">Last Name</label><br/>
          <input type="text" name="lastName" className="inputs" value={this.state.fields.lastName} onChange={this.handleChange}/><br/>
          <label  className="labels">Email</label><br/>
          <div className="errorMsg">{this.state.errors.email}</div>
          <input type="email" name="email" className="inputs" value={this.state.fields.email} onChange={this.handleChange}/><br/>
          <label  className="labels">Message</label><br/>
          <textarea name="message" value={this.state.fields.message} className="inputs" onChange={this.handleChange}/><br/>
          <input type="submit" className="buttons"  value="Submit"/>
          </form>
      </div>
  </div>
  
        );
    }
  
}   

export default Contact