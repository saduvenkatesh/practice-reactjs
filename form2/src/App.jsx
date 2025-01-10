
export default function App (){

    function signUp(event){
        
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        console.log(email)
        console.log(password)
    }
    
    return (
        <>
             <h1>Signup Form</h1>

             <form onSubmit={signUp}>

                <label htmlFor="email">Name :
                    <input type="text" name="email" id="email" placeholder="venky@gmail.com"required />
                </label>

                <br /><br />

                <label htmlFor="password">Password : 
                    <input type="password" name="password" id="password" required />
                </label>

                <br /><br />

                <button>Submit</button>
             </form>
        </>
    )
}