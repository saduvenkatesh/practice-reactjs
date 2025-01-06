import "./App.css"

export default function App (){

  function signUp(formData){
    
  
    const email = formData.get("email")
    
    console.log(email)
  
    // Gather the form info 
    // And submit it to the backend

    
  }

  return (
      
      <>    
            <h1>Signup Form</h1>
            <form onSubmit={signUp}>
              <label htmlFor="email">Email : 
                <input type="email" name="email" id="email" placeholder="venky@gmail.com" />
              </label>
              <br /><br />
              <label htmlFor="password">Password : 
                <input type="password" name="password" id="password" />
              </label><br /><br />
              
              <button >submit</button>
            </form>
      </>
  )
}