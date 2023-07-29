import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom";

const Contact = () =>{
    const { peopleId } = useParams()
    return (
        <>
        <Navbar/>
        <div className="flex items-center justify-center">
        <div className="avatar">
            <div className="mask rounded-full w-45 h-45">
              <img src="https://lh3.googleusercontent.com/ogw/AGvuzYYndjzvnqcnojHTE1WBhsy9TaZbuMxZR9hpRv5ZZQ=s320-c-mo" alt="Avatar Tailwind CSS Component" />
            </div>
            <h1 className="text-xl">{peopleId}</h1>
        </div>
        </div>
        </>
    )
}

export default Contact