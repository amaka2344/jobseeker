import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import { Notice } from "../Components/Notify";
// import React from 'react';
import cookies from 'js-cookies'

const Signup = () => {

  const [selectedOption, setSelectedOption]=useState
  (null);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    // city: "",
    telephone: ""
  })


  const Alert = ()=>{

  cookies.setItem('username', 'Johndoe');
    Notice({
      title:"Successful",
      message: 'Good Job',
      type: 'success'
    });

    // Swal.fire({
    //   title:'The Internet?',
    //   text:'That thing is still around?',
    //   icon:'question'
    // })

  }
   
  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' },
  // ];
  
  const config = {
    header: {'content-type': 'multipart/form-data', 'Authorization': 'bearer'}
  }

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    // city: "",
    telephone: ""
  })
  const handleChange = (event) => {
  let {name, value} = event.target
    setUser({...user, [name]:value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let is_valid = true;
    let err = error;
  
    if (user.password.length < 8){
      is_valid = false;
      err.password = 'Please enter minimum password of 8 characters';
  }

  if (user.password !== user.confirm_password){
    is_valid = false;
    err.confirm_password = 'Password not match';
}
  setError(err);

  if(is_valid){
    const fd = new FormData();
    fd.append('fullname', user.name);
    fd.append('email_address', user.email);
    fd.append('telephone', user.telephone);
    // fd.append('city', user.city);
    fd.append('password', user.password);

    let url = 'http://solidrockschool.com.ng/api/people/application/create' 
    axios.post(url, fd, config).then(response =>{
      if(response.data.status === 200){
        
        Notice({
          title:'saved',
          message:response.data.message,
          type:'success'
        })
       
        console.log("Data saved successfully")
      }else{
        Notice({
          title:'error',
          message:response.data.message,
          type:'danger'
        })
        console.log("unable to save data")
      }
    })
  }
  }



  return (
    <div>
      <Header page={"signup"} />
      <section className="job-bg user-page">
        <div className="container  text-center">
          <div className="user-account-content">
            <div className="user-account job-user-account">
              <h2>Create An Account</h2>
              <ul className="nav nav-tabs text-center" role="tablist">
                <li role="presentation">
                  <a
                    className="active"
                    href="#find-job"
                    aria-controls="find-job"
                    role="tab"
                    data-toggle="tab"
                  >
                    Find A Job
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  role="tabpanel"
                  className="tab-pane active show"
                  id="find-job"
                >
                  <form action="#">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        value={user.name}
                        onChange={handleChange} required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Id"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
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
                      />

                      {error.password?
                       <span>{error.password}</span> : []}
                     
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        name="confirm_password"
                        value={user.confirm_password}
                        onChange={handleChange}
                      />

                      {error.confirm_password?
                       <span>{error.confirm_password}</span> : []}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile Number"
                        name="telephone"
                        value={user.telephone}
                        onChange={handleChange}
                      />
                    </div>
                    {/* <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      /> */}

                    {/* <select className="form-control">
                      <option value="#">Select City</option>
                      <option value="#">London UK</option>
                      <option value="#">Newyork, USA</option>
                      <option value="#">Seoul, Korea</option>
                      <option value="#">Beijing, China</option>
                    </select> */}
                    <div className="checkbox">
                      <label className="pull-left checked" for="signing">
                        <input type="checkbox" name="signing" id="signing" /> By
                        signing up for an account you agree to our Terms and
                        Conditions{" "}
                      </label>
                    </div>
                    

                    <button className="btn" type="button" onClick={Alert}>
                      Alert
                    </button>
                    <button type="button" className="btn" onClick={handleSubmit}>
                      Registrations
                    </button>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Signup;