import '../css/login.css'

export default function Login(){
    return(
        <div class="container">
            <h1>LOGIN PAGE</h1>
            <form action="/login" method="POST">
                <label for="username"> Username : 
                <input type="text" name="username" required></input>
                </label>
                <br></br>
                <label for="password"> Password : 
                <input type="password" name="passsword" required></input>
                </label>
                <br></br> <br></br>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}