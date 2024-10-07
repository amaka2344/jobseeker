import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Notice } from "../Components/Notify";
import axios from "axios";
import { config } from "../Components/GeneralFunction";
import cookies from 'js-cookies'


const Signin = ()=> {
  const [isLoading, setIsLoading] = useState(false)
const [user, setUser] = useState({
email:'',
password:''
})

const handleChange = (event) => {
  let {name, value} = event.target
    setUser({...user, [name]:value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);

    const fd = new FormData();
    fd.append('email_address', user.email);
    fd.append('password', user.password);

    let url = 'http://solidrockschool.com.ng/api/people/applicant/login' 
    axios.post(url, fd, config).then(response =>{
      if(response.data.status === 200){

        cookies.setItem('token', response.data.token);
        
        Notice({
          title:'saved',
          message:response.data.message,
          type:'success'
        })

        setIsLoading(false)
        window.location.href="/profile"
       
        console.log("Data saved successfully")
      }else{

        Notice({
          title:'error',
          message:response.data.message,
          type:'danger'
        })
        setIsLoading(false)
        console.log("unable to save data")
      }
    })
  }

    

  return (
    <div>
      <div>
        <Header page={"signin"} />
      <section className="clearfix job-bg user-page">
        <div className="container text-center">
          <div className="user-account-content">
            <div className="user-account">
              <h2>User Login</h2>

              <form action="#">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" href="#" className="btn" onClick={handleSubmit}>
                {isLoading ? "Loading..." : "Login"}
                </button>
              </form>

              <div className="user-option">
                <div className="checkbox pull-left">
                  <label for="logged">
                    <input type="checkbox" name="logged" id="logged" /> Keep me
                    logged in{" "}
                  </label>
                </div>
                <div className="pull-right forgot-password">
                  <a href="#">Forgot password</a>
                </div>
              </div>
            </div>
            <a href="#" className="btn-primary">
              Create a New Account
            </a>
          </div>
        </div>
      </section>
      <Footer />
      </div>
      <div>
      
      </div>
      
    </div>
  );
}

export default Signin;
