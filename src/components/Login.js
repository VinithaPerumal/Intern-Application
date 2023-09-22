import React from "react";
class Login extends React.Component {
  render() {
    return (
     
        <body>
        <div className="navbar">
        <nav className="icon">
          <img src="./App_icon.png" alt="App Logo" className="logo"/>
        </nav>
        </div>

      <div className="center-box">
        <div className="image-container">
          <img src="./internimage.png" alt="Image" />
      <div className="footer">
              <center>
                <h2>LOGIN</h2>
                <p>Enter your details to login</p>
                <br />
              </center>
              <div className="back"></div>
  
              <input type="email" name="email" placeholder="Enter your email" required />
              <br /><br />
              <input type="password" name="password" placeholder="Enter your password" required />
              <br /><br />
              <select type="role" name="role" placeholder="Select your role" required >
              <option value ="Select your role">Select your role</option>
              <option value="user">user</option>
              <option value="Organizer">Organizer</option>
             </select>
             <br/> <br/>

              <button type="submit">LOGIN</button>
            </div>
          </div>
      </div>
    </body>
    );
  }
}

export default Login;
