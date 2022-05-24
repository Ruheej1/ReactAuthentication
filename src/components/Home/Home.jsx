
import Header from "../header";
import Main from "../main";
import Footer from "../footer";
import Nav from "../nav";

const Home = () => {
return(
        <div>
            {/* {
                user
                ? <Redirect to="/private" />
                : <div>
                    <h1>Home page</h1>
                    <button onClick={signIn}>Sign in with Twitter</button>
                </div>
            } */}
             <div className="container">
        <Nav/>
        <Header />
        <Main />
        <Footer />
      </div>

        </div>
    )
}

export default Home;

