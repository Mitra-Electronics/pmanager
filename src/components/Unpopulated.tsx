import Navbar from "./Navbar"
import { UnpopProps } from "../essentials/Types"

const Unpopulated = ({ text }: UnpopProps) => {
    return (
        <>
            <Navbar />
            <h1 className="text-xl text-white">{text}</h1>
        </>
    )
}

export default Unpopulated