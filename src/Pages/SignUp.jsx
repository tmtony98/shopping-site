import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function SignUp() {
    const [formData, setFormData] = useState({ });

    const [success, setSuccess] = useState(false);

    const postData = async () => {
        try {

            setSuccess(true)
          const response = await axios.post("https://dummyjson.com/docs/users",formData);

        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };    
    
   
    //js
  return (
    <div>
<>
<div className="div">
    <div style={{width:"600px"}} className="container ">
        <div  className="row d-flex justify-content-center mt-5 pt-4">
          <h2 className='text-primary fw-bold text-center'>User Sign Up form</h2>
{success?
          <div class="alert alert-success" role="alert">
User created succesffully
</div>:""}
        <form>
                {/*name of student */}
                <div className="mb-2">
                  <label for="name" class="form-label">
                  first Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
               {/* astName */}
                <div className="mb-2">
                  <label for=" Mobile" class="form-label">
                    {" "}
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    class="form-control"
                    id="exampleInputaddress"
                  />
                </div>
                {/*addresss field */}
                <div className="mb-2">
                  <label for=" Address" class="form-label">
                    {" "}
                    age
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    class="form-control"
                    id="exampleInputaddress"
                  />
                </div>
                {/*gender field */}
                <div className="mb-2">
                  <label for="  gender" class="form-label">
                    {" "}
                    Gender
                  </label>
                  <select
                    class="form-select"
                    id="floatingSelect"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    aria-label="Floating label select example"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {/*date of birth  field */}
                 {/*username */}
                 <div className="mb-2">
                  <label for=" Mobile" class="form-label">
                    {" "}
                    Username
                  </label>
                  <input
                    type="text"
                    name="usename"
                    value={formData.username}
                    onChange={handleChange}
                    class="form-control"
                    id="exampleInpujrnfrenetaddress"
                  />
                </div>

                <div className="mb-2">
                  <label for=" Mobile" class="form-label">
                    {" "}
                    password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    class="form-control"
                    id="exampleInpujrnfrenetaddress"
                  />
                </div>
                 {/* astName */}
                 <div className="mb-2">
                  <label for=" Mobile" class="form-label">
                    {" "}
                    Phone number
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    class="form-control"
                    id="exampleInpus"
                  />
                </div>
              
                <div className="buttons pt-4">
                  <button type="button" 
                  onClick={()=>postData()} 
                  class="btn btn-primary">
                    {" "}
                    Register
                  </button>
                  <button
                    type="button"
                    // onClick={handleCancel}
                    class="btn btn-danger mx-3 "
                  >
                    Cancel
                  </button>
                </div>
              </form>
        </div>
    </div>
</div>

</>    </div>
  )
}

export default SignUp
