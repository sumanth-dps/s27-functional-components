import logo from "./logo.svg";
import "./App.css";
import Movie from "./components1/Movie";

function App() {
  return (
    <div>
      <Movie
        name="Kalki 2898 AD"
        mp4="https://www.youtube.com/embed/y1-w1kUGuz8?si=-gygiK7TYbrZIqXC"
        music1="./audio/kalki/Theme_of_Kalki.mp3"
        music2="./audio/kalki/Bujji_Theme.mp3"
        music3="./audio/kalki/Ta_Takkara.mp3"
        pic="./images/kalki2898AD.jpg"
      ></Movie>
      <Movie
        name="HanuMan"
        mp4="https://www.youtube.com/embed/Oqvly3MvlXA?si=XotWAd22sKC6y95Q"
        music1="./audio/hanuman/Hanuman_Chalisa.mp3"
        music2="./audio/hanuman/Poolamme_Pilla.mp3"
        music3="./audio/hanuman/Raghunandana.mp3"
        pic="./images/hanuman.jpg"
      ></Movie>
      <Movie
        name="Hi Nanna"
        mp4="https://www.youtube.com/embed/tdKdozGeIeE?si=BQ8PhFK7A8HgwVhV"
        music1="./audio/hinanna/Samayama.mp3"
        music2="./audio/hinanna/Odiyamma.mp3"
        music3="./audio/hinanna/Needhe_Needhe.mp3"
        pic="./images/hi_nanna.jpg"
      ></Movie>
      <Movie
        name="Guntur Kaaram"
        mp4="https://www.youtube.com/embed/DYLG65xz55U?si=X3eG43EWAUcFji_Y"
        music1="./audio/gk/Dum_Masala.mp3"
        music2="./audio/gk/Ramana_Aei.mp3"
        music3="./audio/gk/Mawaa_Enthaina.mp3"
        pic="./images/gunturkaram.jpg"
      ></Movie>
    </div>
  );
}

export default App;
