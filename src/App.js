import "./App.css";
// import Introduction from "./components/Introduction";
import Navbar from "./components/navbar";
import LandingPage from "./components/landingPacge";
import AboutPage from "./components/about";

function App() {
  return (
    <div>
      <div className="Landing-page">
        <div className="for-bg">
          <Navbar />
          <LandingPage />
        </div>
      </div>
      <AboutPage />
    </div>
  );
}

export default App;
