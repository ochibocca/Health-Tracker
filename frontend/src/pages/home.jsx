import Navbar from "../components/navbar";
function Home() {
  return (
    <header>
      <Navbar />
      <div className="goal">
        <p> Health Tracker Saves lives in Mathare</p>
      </div>
      <div className="info-expanded">
      <div className="Img-goal">
        <img src="https://food4education.org/wp-content/uploads/2024/08/parents-tap-960x960.jpg.webp"></img>
      </div>
      <div className="goal-info">
        <p> Do you know lots of people in Mathare die every year because of there health not being tracked. </p>
      </div>
      </div>
      <div className="track-btn">
        <button>Track Health</button>
      </div>
    </header>
  );
}

export default Home; 
