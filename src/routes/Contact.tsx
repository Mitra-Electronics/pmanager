import Navbar from "../components/Navbar"
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query"
import { getContact } from "../essentials/Requests";
import Unpopulated from "../components/Unpopulated";
import { ReactNode } from "react";
import { Github, Twitter, Instagram } from "lucide-react";

interface SocialCardsProps {
    href: string,
    dataTip: string,
    children: ReactNode
}

const SocialCards = ({href, dataTip, children}:SocialCardsProps) => {
    return (
        <th className="pr-1.5 tooltip" data-tip={dataTip}>
            <a href={href}>
                {children}
            </a>
        </th>
    )
}

const Conditional = (render: ReactNode, condition: boolean) => {
    if (condition) {
        return render
    }
    else {
        return <></>
    }
}

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
                        className="rounded-full"
                        src="https://lh3.googleusercontent.com/ogw/AGvuzYYndjzvnqcnojHTE1WBhsy9TaZbuMxZR9hpRv5ZZQ=s320-c-mo"
                        alt="Photo"
                    />
                </figure>
                <div className="card-body">
                    <div>
                        <h2 className="card-title my-5">{data.first_name} {data.last_name}
                            {
                                Conditional(
                                    <div className="badge badge-lg badge-primary">{data.label}</div>,
                                    data.label != null
                                )
                            }
                        </h2>
                        {
                            Conditional(
                                <p className="my-2">Email: {data.email}</p>,
                                data.email != null
                            )
                        }
                        {
                            Conditional(
                                <p className="my-2">Phone: {data.phone}</p>,
                                data.phone != null
                            )
                        }
                        {
                            Conditional(
                                <p className="my-2">Birthday: {data.birthday}</p>,
                                data.birthday != null
                            )
                        }
                        {
                            Conditional(
                                <p className="my-2">Country: {data.country}</p>,
                                data.country != null
                            )
                        }
                        <table className="table-auto">
                            <thead>
                                <tr>
                                    {
                                        Conditional(
                                            <SocialCards dataTip="Github" href={"https://github.com/"+data.github}>
                                                <Github className="contact-socials" />
                                            </SocialCards>
                                                ,
                                            data.github != null
                                        )
                                    }
                                    {
                                        Conditional(
                                            <SocialCards dataTip="Twitter" href={"https://twitter.com/"+data.twitter}>
                                                <Twitter className="contact-socials" />
                                            </SocialCards>,
                                            data.twitter != null
                                        )
                                    }
                                    {
                                        Conditional(
                                            <SocialCards dataTip="Instagram" href={"https://instagram.com/"+data.instagram}>
                                                <Instagram className="contact-socials" />
                                            </SocialCards>,
                                            data.instagram != null
                                        )
                                    }
                                </tr>
                            </thead>
                        </table>
                        <button className="btn btn-primary md:hidden my-5">Edit</button>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 p-6 max-md:hidden">
                    <div className="card-actions justify-end">
                        <Link to={'/people/edit/'+data.id}><button className="btn btn-primary">Edit</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact