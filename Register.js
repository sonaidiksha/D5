import '../css/Register.css'

export default function Register(){
    return(
        <div class="container">
            <from action="/sign" method="POST">
                <h2>REGISTER FORM</h2>
                <label for="firstname"> FirstName : 
                    <input type="text" name="firstname" required></input>
                    </label>
                    <br></br>
                    <label for="lastname"> LastName : 
                    <input type="text" name="lastname" required></input>
                    </label>
                    <br></br> 
                    <label for="email"> Email : 
                    <input type="email" name="email" required></input>
                    </label>
                    <br></br>
                    <label for="phno"> Contact No. : 
                    <input type="number" name="phno" required></input>
                    </label>
                    <br></br> <br></br>

                    <button type="submit">SIGN UP</button>
            </from>
        </div>
    )
}