import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query"

interface Person {
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    birthday: string,
    label: string,
    twitter: string,
    instagram: string,
    github: string
}

interface Result {
    success: boolean,
    result: Person
}

const getContact = async (id: number):Promise<Person|undefined> => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/get/id",
        {
            params: {
                id: id
            }
        });
        console.log(response);
        const data:Result =  response.data
        return data.result
    } catch (error) {
        console.error(error);
    }
}

const Contact = () => {
    const { peopleId } = useParams()

    const { data, status } = useQuery({
        //    ^? const data: number | undefined
        queryKey: ['test'],
        queryFn: () => getContact((peopleId as unknown as number)),
    })

    if (status === "loading"){
        return(
            <>
            <Navbar/>
            <h1 className="text-xl text-white">Loading...</h1>
            </>
        )
    }

    else if (status === "error" || data === undefined){
        return(
            <>
            <Navbar/>
            <h1 className="text-xl text-white">Error</h1>
            </>
        )
    }

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center">
                <div className="avatar">
                    <div className="mask rounded-full w-45 h-45">
                        <img src="https://lh3.googleusercontent.com/ogw/AGvuzYYndjzvnqcnojHTE1WBhsy9TaZbuMxZR9hpRv5ZZQ=s320-c-mo" alt="Avatar Tailwind CSS Component" />
                    </div>
                    <h1 className="text-3xl text-white">{data.first_name} {data.last_name}</h1>
                    <h1 className="text-xl">{data.email}</h1>
                    <a href={"https://github.com/" + data.github}>hjk</a>
                </div>
            </div>
        </>
    )
}

export default Contact