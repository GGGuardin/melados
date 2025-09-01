import { useEffect, useState, createContext } from "react"
import { Flavors } from "./FlavorList";
import { FlavorCard } from "./FlavorCard";
import { Feedbacks } from "./Feedbacks";
import Aos from "aos"
import "aos/dist/aos.css"

const FlavorContext = createContext()

export function FlavorContextProvider(props){
    const [flavorsList, setFlavorsList] = useState([]);
    const [feedbacksList, setFeedbacksList] = useState([])
    const [heartCounter, setHeartCounter] = useState(0)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        setFlavorsList(Flavors);
        setFeedbacksList(Feedbacks)
        setHeartCounter(0)
        setMenuOpen(true)
        Aos.init({duration: 1500})
    }, []);

    return <>
        <FlavorContext.Provider value={{
            flavorsList,
            feedbacksList,
            heartCounter,
            setHeartCounter,
            menuOpen,
            setMenuOpen,
        }}>
        {props.children}
        </FlavorContext.Provider>
    </>
}

export default FlavorContext