import Navbar from "../navigation/Navbar"
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query"
import { getContact } from "../essentials/Requests";
import Unpopulated from "../components/Unpopulated";
import { Github, Twitter, Instagram } from "lucide-react";
import SocialCards from "../components/SocialCards";
import Conditional from "../components/Conditional";

const Contact = () => {
    const { peopleId } = useParams()

    const { data, status } = useQuery({
        queryKey: ["test"],
        queryFn: () => getContact((peopleId as unknown as number)),
    })

    if (status === "loading")
        return <Unpopulated text="Loading" />

    else if (status === "error" || data === undefined)
        return <Unpopulated text="Error" />

    else if (data === null)
        return <Unpopulated text="404 Contact does not exist" />

    return (
        <>
            <Navbar />
            <div className="card lg:card-side bg-base-100 shadow-xl mx-5 lg:mx-40 rounded-3xl">
                <figure className="p-10">
                    <img
                        className="rounded-full aspect-square w-72 h-72"
                        src={data.img ? data.img : "https://lh3.googleusercontent.com/ogw/AGvuzYYndjzvnqcnojHTE1WBhsy9TaZbuMxZR9hpRv5ZZQ=s320-c-mo"}
                        alt="Photo"
                    />
                </figure>
                <div className="card-body">
                    <div>
                        <h2 className="card-title my-5">{data.first_name} {data.last_name}
                            <Conditional condition={data.label != null}>
                                <div className="badge badge-lg badge-primary">{data.label}</div>
                            </Conditional>
                        </h2>
                        <Conditional condition={data.email != null}>
                            <p className="my-2">Email: {data.email}</p>
                        </Conditional>
                        <Conditional condition={data.phone != null}>
                            <p className="my-2">Phone: {data.phone}</p>
                        </Conditional>
                        <Conditional condition={data.birthday != null}>
                            <p className="my-2">Birthday: {data.birthday}</p>
                        </Conditional>
                        <Conditional condition={data.country != null}>
                            <p className="my-2">Country: {data.country}</p>
                        </Conditional>
                        <table className="table-auto">
                            <thead>
                                <tr>
                                    <Conditional condition={data.github != null}>
                                        <SocialCards dataTip="Github" href={"https://github.com/" + data.github}>
                                            <Github className="contact-socials" />
                                        </SocialCards>
                                    </Conditional>
                                    <Conditional condition={data.twitter != null}>
                                        <SocialCards dataTip="Twitter" href={"https://twitter.com/" + data.twitter}>
                                            <Twitter className="contact-socials" />
                                        </SocialCards>
                                    </Conditional>
                                    <Conditional condition={data.instagram != null}>
                                        <SocialCards dataTip="Instagram" href={"https://instagram.com/" + data.instagram}>
                                            <Instagram className="contact-socials" />
                                        </SocialCards>
                                    </Conditional>
                                </tr>
                            </thead>
                        </table>
                        <button className="btn btn-primary md:hidden my-5">Edit</button>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 p-6 max-md:hidden">
                    <div className="card-actions justify-end">
                        <Link to={'/people/edit/' + data.id}><button className="btn btn-primary">Edit</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact