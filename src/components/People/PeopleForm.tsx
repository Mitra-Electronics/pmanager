import { ReactNode } from "react"

interface PeopleFormProps {
    callback: (e: React.FormEvent) => void,
    children: ReactNode
}

const PeopleForm = ({callback, children}:PeopleFormProps) => {
    return (
        <div className="relative flex flex-col justify-center items-center overflow-hidden">
            <div className="w-full p-6 m-auto bg-base-100 rounded-md shadow-md max-w-xl">
                <form className="space-y-4" onSubmit={callback}>
                    { children }
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default PeopleForm