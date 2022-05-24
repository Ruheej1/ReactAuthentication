import { useContext } from "react";
// import { Redirect } from "react-router-dom";

// import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { BaseContext } from "../contexts/Firebase/BaseContext";


const Header = () => {
  // const user = useContext(AuthContext);
  const firebase = useContext(BaseContext);

    async function signIn(){
        await firebase.signUserIn();
    }
    
    return (  
      <header>
      {/* <Nav/> */}
        <div className="head">
            <h1>We Design< br/> We Create</h1>
            <div>
              <p>Integer posuere leo non erat ornare dictum id vitae magna. Proin consectetur iaculis nisi, ut convallis tortor tempor congue. Curabitur sit amet tempus felis. Duis tellus eros, pellentesque at rhoncus eu, maximus ut diam.</p>
              <div>
              <button className= "contact" onClick={signIn}>Sign in with Twitter</button></div>
            </div>
        </div>
       
      </header>
      
    );
  }


export default Header;
