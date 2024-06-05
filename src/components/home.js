import "./HomeStyles.css";
import MyPicture from "../images/MyPicture.png"
function Home() {
  return (
    <>
      <div id="home">
        <div id="image">
        <img src={MyPicture} alt="pic" width="250" height="300"></img>
        </div>

        <div id="about">
          <p>Hello, I'm</p>
          <h1>Miguel Jose Magsaysay</h1>
          <h3>Computer Engineer | Software Developer</h3>
          <span id="socials">
  <a href="https://www.linkedin.com/in/miguelmagsaysay/"><i class="fab fa-linkedin"></i></a>
  <a href="https://github.com/miguelmagsaysay"><i class="fab fa-github"></i></a>
          </span>
        </div>
      </div>
    </>
  );
}

export default Home;
