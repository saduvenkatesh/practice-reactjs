
export default function App (){

    function signUp(event){
        
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
        const graduationYear = formData.get('graduationYear')
        const hobies = formData.getAll('hobies')
        const favMovie = formData.get('favMovie')

        console.log(email)
        console.log(password)
        console.log(graduationYear)
        console.log(hobies)
        console.log(favMovie)
        
        event.target.reset()
    }
    
    return (
        <>
             <h1>Signup Form</h1>

             <form onSubmit={signUp}>

                <label htmlFor="email">Name :
                    <input type="email" name="email" id="email" placeholder="venky@gmail.com"required />
                </label>

                <br /><br />

                <label htmlFor="password">Password : 
                    <input type="password" name="password" id="password" defaultValue="12345" required />
                </label>
                <br /><br />

                <fieldset>
                    <legend>Graduation Year</legend>

                    <label htmlFor="2025">
                        <input type="radio" name="graduationYear" value="2025" required />
                        2025
                    </label>
                    <br />

                    <label htmlFor="2026">
                        <input type="radio" name="graduationYear" value="2026"  />
                        2026
                    </label>
                    <br />
     
                    <label htmlFor="2027">
                        <input type="radio" name="graduationYear" value="2027" defaultChecked={true} />
                        2027
                    </label>

                </fieldset>
                <fieldset>
                    <legend> Hobies</legend>

                    <label htmlFor="music">
                        <input type="checkbox" name="hobies" value="music"  />
                        Music
                    </label>
                    <br />

                    <label htmlFor="cricket">
                        <input type="checkbox" name="hobies" value="cricket"  />
                        Cricket
                    </label>
                    <br />
     
                    <label htmlFor="football">
                        <input type="checkbox" name="hobies" value="football" defaultChecked={true} />
                        Football
                    </label>
                    
                    <br />

                    <label htmlFor="readingBooks">
                        <input type="checkbox" name="hobies" value="reading books"  />
                        Reading Books
                    </label>

                </fieldset>

                <label htmlFor="favMovie">what is your favourite movie ?</label>
                <select name="favMovie" id="favMovie" defaultValue="" required>
                    <option value="" disabled>--Select your favourite movie--</option>
                    <option value="Bahubali - 2">Bahubali - 2</option>
                    <option value="RRR">RRR</option>
                    <option value="Devara">Devara</option>
                    <option value="Puspa - 2">Pushpa - 2</option>
                </select>
                 
                 <br /><br />
                <button>Submit</button>
             </form>
        </>
    )
}