import "../pages-css/home.css"
import Navbar from "../components/navbar";
function Home() {
  return (
    <>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hospital Tracker</title>
  <link rel="stylesheet" href="../styles/home.css" />
  {/* <link rel="stylesheet" href=""> */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div className="container">
    <header>
      <div className="main">
        <div className="title">
          <h3>
            {" "}
            <img className="logo" src="../assets/logo.png" /> Hospital Tracker
          </h3>
        </div>
        <nav className="navelements">
          <ul className="list">
            <div className="navbar">
              <li className="active">
                <a href="home.html">Home </a>
              </li>
              <li>
                <a href="about.html">About </a>
              </li>
              <li>
                <a href="services.html"> Contacts </a>{" "}
              </li>
              <li className="loginFormDisplay">
                <a href="loginhompage.html">Login</a>
              </li>
              <li className="loginFormDisplay">
                <a href="signup.html">Signup </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
    <section className="about">
      <h3> Mathare hospital Tracker Is Here For You. </h3>
      We simplify health records tracking to make it easier for doctors and
      reduce confusion when managing your health. <br />
      Say goodbye to confusion
    </section>
    <section className="section1">
      <div className="skills">
        <a href="track.html" className="btn">
          TRACK HEALTH
        </a>
        <a href="../pages/chatbot.html" className="btn">
          ASK AI
        </a>
        <a href="#" className="btn">
          LEARN MORE
        </a>
      </div>
    </section>
  </div>
  <div className="container-lg">
    <h3> Play GAMES </h3>
    <div className="services">
      <div className="diseases">
        <img src="../assets/malaria game.jpg" alt="" height="200px" />
        <a href="game.html" className="btn">
          MALARIA <br />{" "}
          <span style={{ fontSize: "smaller", color: "rgb(65, 62, 62)" }}>
            {" "}
            malaria is transmitted through the bites of <br /> infected
            mosquitoes, predominantly <br />
            affecting tropical regions, but preventable and <br />
            treatable with timely interventions. <br />
            <br /> <button className="button"> Play games</button>{" "}
          </span>
        </a>
      </div>
      <div className="diseases">
        <img
          src="../assets/typhoid game 2.jfif"
          alt=""
          height="200px"
          width="200px"
        />
        <a href="#" className="btn">
          TYPHOID
          <br />{" "}
          <span style={{ fontSize: "smaller", color: "rgb(65, 62, 62)" }}>
            {" "}
            Typhoid is caused by a bacterium called <br /> Salmonella typhi,
            which is related to the <br />
            bacteria that cause salmonella food poisoning. <br /> <br />{" "}
            <button className="button"> Play games</button>
          </span>
        </a>
      </div>
      <div className="diseases">
        <img
          src="../assets/hiv game.jfif"
          alt=""
          height="200px"
          width="300px"
        />
        <a href="#" className="btn">
          {" "}
          HIV/AIDS
          <br />{" "}
          <span style={{ fontSize: "smaller", color: "rgb(65, 62, 62)" }}>
            {" "}
            Find out some exciting facts about <br /> HIV/AIDS, misconceptions
            and positive <br /> living for people living with HIV. <br /> <br />{" "}
            <button className="button"> Play game</button>
          </span>
        </a>
      </div>
      <div className="diseases">
        <img
          src="../assets/ctyphoid game.webp"
          alt=""
          height="200px"
          width="200px"
        />
        <a href="#" className="btn">
          CHOLERA
          <br />{" "}
          <span style={{ fontSize: "smaller", color: "rgb(65, 62, 62)" }}>
            {" "}
            Cholera is a bacterial disease spread <br /> through contaminated
            water and food. <br />
            Cholera can cause severe diarrhea, <br /> dehydration, and even
            death if the disease goes untreated <br /> <br />{" "}
            <button className="button">Play games</button>
          </span>
        </a>
      </div>
      {/* <div class="diseases"> <a href="#" class="btn">TUBERCULOSIS</a> </div>
<div class="diseases"> <a href="#" class="btn">LEARN MORE</a> </div> */}
    </div>
  </div>
  <div className="container-lg">
    <h3> DISCOVER COMMON DISEASES</h3>
    <div className="services">
      <div className="diseases">
        <img src="../assets/malaria 2.jpg" alt="" height="200px" />
        <a href="#" className="btn">
          MALARIA <br />{" "}
          <span style={{ fontSize: "smaller", color: "rgb(65, 62, 62)" }}>
            {" "}
            malaria is transmitted through the bites of <br /> infected
            mosquitoes, predominantly <br />
            affecting tropical regions, but preventable and <br />
            treatable with timely interventions. <br />
            <br /> <button className="button"> Learn more</button>{" "}
          </span>
        </a>
      </div>
      <div className="diseases">
        <img src="../assets/typhoid 3.jpg" alt="" height="200px" />
        <a href="#" className="btn">
          TYPHOID
          <br />{" "}
          <span style={{ fontSize: "smaller", color: "rgb(65, 62, 62)" }}>
            {" "}
            Typhoid is caused by a bacterium called <br /> Salmonella typhi,
            which is related to the <br />
            bacteria that cause salmonella food poisoning. <br /> <br />{" "}
            <button className="button"> Learn more</button>
          </span>
        </a>
      </div>
      <div className="diseases">
        <img src="../assets/hiv.jpg" alt="" height="200px" />
        <a href="#" className="btn">
          {" "}
          HIV/AIDS
          <br />{" "}
          <span style={{ fontSize: "smaller", color: "rgb(65, 62, 62)" }}>
            {" "}
            Find out some exciting facts about <br /> HIV/AIDS, misconceptions
            and positive <br /> living for people living with HIV. <br /> <br />{" "}
            <button className="button"> Learn more</button>
          </span>
        </a>
      </div>
      <div className="diseases">
        <img src="../assets/cholera.jpg" alt="" height="200px" />
        <a href="#" className="btn">
          CHOLERA
          <br />{" "}
          <span style={{ fontSize: "smaller", color: "rgb(65, 62, 62)" }}>
            {" "}
            Cholera is a bacterial disease spread <br /> through contaminated
            water and food. <br />
            Cholera can cause severe diarrhea, <br /> dehydration, and even
            death if the disease goes untreated <br /> <br />{" "}
            <button className="button">Learn more</button>
          </span>
        </a>
      </div>
      {/* <div class="diseases"> <a href="#" class="btn">TUBERCULOSIS</a> </div>
<div class="diseases"> <a href="#" class="btn">LEARN MORE</a> </div> */}
    </div>
  </div>
  <footer className="footer">
    <div className="icon">
      <a href="#">
        {" "}
        <i className="fa fa-facebook" style={{ fontSize: 30 }}>
          {" "}
        </i>
      </a>
      <a href="#">
        {" "}
        <i className="fa fa-whatsapp" style={{ fontSize: 30 }}></i>{" "}
      </a>
      <a href="#">
        {" "}
        <i className="fa fa-twitter" style={{ fontSize: 30 }}>
          {" "}
        </i>{" "}
      </a>
    </div>
    <div className="copyright">
      <i className="fa fa-copyright"> </i>{" "}
      <span> 2024 Hospital Tracker All Rights Reserved </span>
    </div>
  </footer>
  {/* <footer>
 <section class="data">
    <div class="health">
    <a href="#" class="btn"> Your Data</a> 
    <a href="#" class="btn"> Patterns </a> 
    <a href="#" class="btn"> Improvement</a> 
    </div>
</section> 
</footer> */}
</>

  );
}

export default Home; 
