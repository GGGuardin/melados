import { Canvas, useFrame } from "@react-three/fiber";
import { Model } from "./Model";
import { OrbitControls } from "@react-three/drei";
import { FlavorCard } from "/src/FlavorCard";
import { useContext, useEffect, useState } from "react";
import FlavorContext from "./FlavorContext";
import FeedbackCard from "./FeedbackCard";
import { MdDehaze } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { elastic as Menu } from "react-burger-menu";

function M() {
  return (
    <Canvas
      id="icecream-model"
      style={{
        height: "80vh",
        width: "100vw",
        display: "flex",
      }}
    >
      <ambientLight intensity={3} />
      <OrbitControls autoRotate autoRotateSpeed={3} enableZoom={false} />
      <Model />
    </Canvas>
  );
}

//Not ready(code and styles)
function Header() {
  const { menuOpen, setMenuOpen } = useContext(FlavorContext);

  const navi = document.getElementById("navbar");

  const moveNavbar = () => {
    console.log("trying");

    if (menuOpen) {
      console.log("closing");
      navi.style.transform = "translateX(0vw)";
      navi.style.transition = "transform 1s ease";

      setMenuOpen(false);
    } else {
      console.log("opening");
      navi.style.transform = "translateX(100vw)";
      navi.style.transition = "transform 1s ease";
      setMenuOpen(true);
    }
  };

  return (
    <>
      <header className="max-w-screen h-32 grid grid-cols-2">
        <img
          className="h-25 pb-5 inline ml-15 mt-5"
          src="/src/title.webp"
          data-aos="fade-down"
          id="img-title"
        />
        <MdDehaze
          id="open"
          onClick={menuOpen ? moveNavbar : console.log("Forbitten")}
          data-aos="fade-down"
        />
        <div id="navbar" className="inline-block h-28">
          <MdClose id="close" onClick={moveNavbar} func={moveNavbar} />
          <Navlink link="#Home" name="Menú" func={moveNavbar} />
          <Navlink link="#Flavors" name="Sabores" func={moveNavbar} />
          <Navlink link="#WhyUs" name="¿Por qué nosotros?" func={moveNavbar} />
          <Navlink link="#Feedback" name="Opiniones" func={moveNavbar} />
        </div>
        <div id="navbar-pc" className="inline-block h-28">
          <MdClose id="close" onClick={moveNavbar} />
          <Navlink link="#Home" name="Menú" />
          <Navlink link="#Flavors" name="Sabores" />
          <Navlink link="#WhyUs" name="¿Por qué nosotros?" />
          <Navlink link="#Feedback" name="Opiniones" />
        </div>
      </header>
    </>
  );
}

//Not ready(code and styles)
function Hero() {
  const [chismeWord, setChismeWord] = useState(1);
  const [chismeChamo, setChismeChamo] = useState("chisme 💅");
  const [chismeColor, setChismeColor] = useState("#FF4E88");

  useEffect(() => {
    const interval = setInterval(() => {
      chisme();
    }, 5000);

    return () => clearInterval(interval);
  }, [chismeWord]);

  const chisme = () => {
    setChismeWord(chismeWord + 1);
    switch (chismeWord) {
      case 0:
        setChismeChamo("chisme 💅");
        setChismeColor("#FF4E88");
        break;
      case 1:
        setChismeChamo("servicio 🛎️");
        setChismeColor("#42A5F5");
        break;
      case 2:
        setChismeChamo("antojo 🤤");
        setChismeColor("#FFA726");
        break;
      case 3:
        setChismeChamo("sabor 😋");
        setChismeColor("#BA68C8");
        break;
      case 4:
        setChismeChamo("recuerdo 📸");
        setChismeColor("#81C784");
        break;
      case 5:
        setChismeChamo("cariño ❤️");
        setChismeColor("#E53935");
        break;
      case 6:
        setChismeChamo("capricho 🍫");
        setChismeColor("#8B4513");
        break;
      default:
        setChismeWord(0);
        setChismeChamo("TODO!");
        setChismeColor("black");
    }
  };

  return (
    <>
      <div id="all-hero">
        <img
          src="/src/line.webp"
          id="point-line"
          data-aos="fade-up"
          className="w-full"
        />
        <div
          className="w-full"
          style={{ fontFamily: "Quicksand", overflow: "hidden" }}
          id="Hero-h1"
          data-aos="fade-up"
        >
          <h1>
            Ven por el helado, <br /> quédate por el <br />{" "}
          </h1>{" "}
          <h2
            className="font-s"
            style={{ color: chismeColor }}
            id="chisme"
            key={chismeWord}
            data-aos="fade-up"
            data-aos-duration={2000}
          >
            {chismeChamo}{" "}
          </h2>
          <div className="grid grid-cols-2">
            <img src="/src/smallicecream.webp" id="i1" />
            <img src="/src/cone.webp" id="i2" />
          </div>
        </div>
      </div>
    </>
  );
}

//Not ready(code and styles)
function Flavors({ fl }) {
  return (
    <>
      <div id="Flavors">
        <h1 id="Flavors-h1" data-aos="fade-right" className="mx-auto">
          Sabores que hacen{" "}
          <h2 className="inline" id="serio">
            sonreir
          </h2>{" "}
          hasta el paladar más serio.
        </h1>
        <div
          id="flavors-div"
          className="grid grid-cols-2 mx-auto overflow-hidden"
        >
          {fl.map((flavor, i) => {
            return (
              <FlavorCard key={i} name={flavor.name} imgsrc={flavor.imgsrc} />
            );
          })}
          <p
            className="inline my-auto"
            id="y-muchos"
            data-aos="zoom-in"
            data-aos-duration={2000}
          >
            Y muchos más!!!
          </p>
        </div>
      </div>
    </>
  );
}

//Not ready(code and styles)
function WhyUs() {
  return (
    <>
      <div id="WhyUs">
        <h1
          className="mx-auto"
          id="whyus"
          data-aos="fade-left"
          data-aos-duration={5000}
        >
          Por qué nuestro helado es El Mejor de <h2 id="TODOS">TODOS!?</h2>
        </h1>
        <p className="mejor-tags" data-aos="zoom-up" data-aos-duration={2000}>
          💲 Precios que enamoran
        </p>
        <p className="mejor-tags" data-aos="zoom-up" data-aos-duration={2000}>
          {" "}
          🌟 Servidos exactamente como tú quieres
        </p>
        <p className="mejor-tags" data-aos="zoom-up" data-aos-duration={2000}>
          🌎 Amor por el planeta = 100% Eco-Friendly{" "}
        </p>
        <p className="mejor-tags" data-aos="zoom-up" data-aos-duration={2000}>
          {" "}
          💘 100% Casero, 100% Corazón{" "}
        </p>
      </div>
    </>
  );
}

//Not ready(code and styles)
function Feedback({ feli, heartCounter, setHeartCounter }) {
  const addHeart = () => {
    setHeartCounter(heartCounter + 1);
  };

  return (
    <div id="Feedback">
      <h1
        className="mx-auto"
        id="Feedback-h1"
        data-aos="flip-up"
        data-aos-easing="linear"
        data-aos-delay="300"
        data-aos-duration={4000}
      >
        Tu aprobación es nuestro <br /> <h2 id="SABOR">sabor</h2> favorito ✨
      </h1>
      <div id="amor" data-aos="zoom-out">
        <p id="dar-amor">Dar amor</p>
        <button
          className="hover:bg-red-500 rounded-3xl"
          onClick={() => setHeartCounter(addHeart)}
          id="button-of-love"
        >
          ❤
        </button>{" "}
        <p id="heart-counter">{heartCounter} corazones</p>
      </div>
      <div id="feedback-div">
        {feli.map((feed) => {
          return (
            <FeedbackCard
              key={feed.id}
              proimg={feed.proimg}
              name={feed.name}
              feedback={feed.feedbackdata}
            />
          );
        })}
      </div>
    </div>
  );
}

//Not ready(code and styles)
function Footer() {
  return (
    <div id="Footer">
      <h1 id="nuestros-servicios" data-aos="fade-up">
        {" "}
        📎 Nuestros servicios
      </h1>
      <p className="service-tags" data-aos="fade-up">
        📶 Wifi
      </p>
      <p className="service-tags" data-aos="fade-up">
        🧃 Bebidas frias
      </p>
      <p className="service-tags" data-aos="fade-up">
        🍬Chucherias y dulces
      </p>{" "}
      <p className="service-tags" data-aos="fade-up">
        📲 Recargas telefonicas(todas las compañias)
      </p>
      <p className="service-tags" data-aos="fade-up">
        📳 Aceptamos PagoMovil y PIX
      </p>{" "}
      <p className="service-tags" data-aos="fade-up">
        💰 Precios claros, sin sorpresas
      </p>
      <h2 id="Visitanos" data-aos="zoom-out">
        📍 Visitanos en persona
      </h2>
      <p id="siguenos" className="mx-auto" data-aos="zoom-out">
        {" "}
        Siguenos en @melados.seu y cuéntanos tu experiencia! 💭
      </p>
      <p id="dir-a" className="mx-auto" data-aos="zoom-out">
        Melado's, Troncal 10
      </p>
      <p id="dir-b" className="mx-auto" data-aos="zoom-out">
        El Salto, Santa Elena de Uairén
      </p>
      <p id="contact" className="mx-auto" data-aos="zoom-out">
        {" "}
        📞 +58 0416-1016471
      </p>
      <p id="data" className="mx-auto" data-aos="zoom-out">
        🕜 Abierto todos los días de 11AM a 10PM{" "}
      </p>
      <p id="stop" className="mx-auto" data-aos="zoom-out">
        {" "}
        🚘 Estacionamiento gratuito
      </p>
      <footer
        className="max-w-screen h-32 grid grid-cols-2"
        id="footie"
        data-aos="fade-up"
      >
        <p id="copyright" className="my-auto">
          {" "}
          © 2025
        </p>
        <img
          className="pb-5 inline my-auto"
          src="/src/title.png"
          id="footer-title"
        />
      </footer>
    </div>
  );
}

//Ready!
function Navlink({ link, name, func }) {
  const { menuOpen, setMenuOpen } = useContext(FlavorContext);

  return (
    <a
      href={link}
      className="hover:bg-gray-300 h-22 inline-block mx-auto gap-2 pt-8 mt-4 text-2xl font-bold mr-9 bb"
      data-aos="fade-down"
      data-aos-duration={500}
      onClick={func}
    >
      {name}
    </a>
  );
}

//Not ready(code and styles) final verification
function App() {
  const { flavorsList, feedbacksList, heartCounter, setHeartCounter } =
    useContext(FlavorContext);

  return (
    <>
      {/* Project architecture */}
      <Header />
      <Hero />
      <M />
      <Flavors fl={flavorsList} />
      <WhyUs />
      <Feedback
        feli={feedbacksList}
        heartCounter={heartCounter}
        setHeartCounter={setHeartCounter}
      />
      <Footer />
    </>
  );
}

export default App;
