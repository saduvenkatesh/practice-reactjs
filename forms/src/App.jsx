import "./App.css"
import React from "react"

export default function App (){

 function signUp(formData){

    const email = formData.get("email")

    const password = formData.get("password")

    console.log(email)
    console.log(password)

 }
  return (
      
      <>    
            <h1>Signup Form</h1>
            <form action={signUp} >

              <label htmlFor="email">Email : 
                <input type="email" name="email" id="email" placeholder="venky@gmail.com" required />
              </label>

              <br /><br />

              <label htmlFor="password">Password : 
                <input type="password" name="password" id="password" required />
              </label>
              
              <br /><br />

              <fieldset>
                <legend>Employment Status</legend>

              <label>
                  <input type="radio" name="employmentStatus" required/>
                  Unemployment
              </label>

              <label>
                <input type="radio" name="employmentStatus" required/>
                partTime
              </label>

              <label>
                <input type="radio" name="employmentStatus" required/>
                fullTime
              </label>

              </fieldset>

              <button >submit</button>

            </form>
      </>
  )
}