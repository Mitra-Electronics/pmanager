import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query"
import getContact from "../essentials/Requests"

const Contact = () => {
    const { peopleId } = useParams()

    const { data, status } = useQuery({
        queryKey: ['test'],
        queryFn: () => getContact((peopleId as unknown as number)),
    })

    if (status === "loading") {
        return (
            <>
                <Navbar />
                <h1 className="text-xl text-white">Loading...</h1>
            </>
        )
    }

    else if (status === "error" || data === undefined) {
        return (
            <>
                <Navbar />
                <h1 className="text-xl text-white">Error</h1>
            </>
        )
    }

    return (
        <>
            <Navbar />
            <div className="card lg:card-side bg-base-100 shadow-xl mx-5 lg:mx-40 rounded-3xl">
                <figure className="p-10">
                    <img className="rounded-full" src="https://lh3.googleusercontent.com/ogw/AGvuzYYndjzvnqcnojHTE1WBhsy9TaZbuMxZR9hpRv5ZZQ=s320-c-mo" alt="Photo" />
                </figure>
                <div className="card-body">
                    <div>
                        <h2 className="card-title">{data.first_name} {data.last_name}</h2>
                        <p>{data.email}</p>
                        <p>{"https://github.com/" + data.github}</p>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 p-6 max-md:hidden">
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Edit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact