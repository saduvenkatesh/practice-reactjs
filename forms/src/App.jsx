import "./App.css"

export default function App (){

 function signUp(event){q

  event.preventDefault()
    
  const formData = new FormData(event.currentTarget)

    const email = formData.get("email")

    const password = formData.get("password")

    console.log(email)
    console.log(password)

 }
  return (
      
      <>    
            <h1>Signup Form</h1>
            <form onSubmit={signUp} >

              <label htmlFor="email">Email : 
                <input type="email" name="email" id="email" placeholder="venky@gmail.com" required />
              </label>

              <br /><br />

              <label htmlFor="password">Password : 
                <input type="password" name="password" id="password" required />
              </label><br /><br />

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
              <button type="submit" >submit</button>
            </form>
      </>
  )
}