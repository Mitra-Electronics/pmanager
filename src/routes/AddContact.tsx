import Navbar from "../components/Navbar"
import { useNavigate } from 'react-router-dom';
import { useState } from "react"
import { Person } from "../essentials/Types"
import { addContact } from "../essentials/Requests"

interface FieldProps {
    label: string,
    type: string,
    placeholder: string,
    value: string,
    changeHandler: any
}

const FormField = ({ label, type, placeholder, value, changeHandler }: FieldProps) => {
    return (
        <div>
            <label className="label">
                <span className="text-lg label-text">{label}</span>
            </label>
            <input value={value} onChange={changeHandler} type={type} placeholder={placeholder} className="input input-bordered input-primary w-full max-w-xs lg:max-w-full" />
        </div>
    )
}

const AddContact = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [birthday, setBirthday] = useState("");
    const [label, setLabel] = useState("");
    const [twitter, setTwitter] = useState("");
    const [instagram, setInstagram] = useState("");
    const [github, setGithub] = useState("");

    const history = useNavigate()

    const handler = (s: React.SetStateAction<any>) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            s(e.target.value);
        }
    }

    const submitForm = (e: React.FormEvent):void => {
        e.preventDefault()
        const person: Person = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            country: country,
            birthday: birthday,
            label: label,
            twitter: twitter,
            instagram: instagram,
            github: github
        }
        addContact(person, () => history('/'))
    }

    return (
        <>
            <Navbar />
            <div className="relative flex flex-col justify-center items-center overflow-hidden">
                <div className="w-full p-6 m-auto bg-base-100 rounded-md shadow-md max-w-xl">
                    <form className="space-y-4" onSubmit={(e) => submitForm(e)}>
                        <FormField label="First Name" type="text" placeholder="Enter first name" value={firstName} changeHandler={handler(setFirstName)} />
                        <FormField label="Last Name" type="text" placeholder="Enter last name" value={lastName} changeHandler={handler(setLastName)} />
                        <FormField label="Email" type="email" placeholder="Enter email" value={email} changeHandler={handler(setEmail)} />
                        <FormField label="Phone" type="text" placeholder="Enter phone number" value={phone} changeHandler={handler(setPhone)} />
                        <FormField label="Country" type="text" placeholder="Enter country" value={country} changeHandler={handler(setCountry)} />
                        <FormField label="Birthday" type="text" placeholder="Enter birthday" value={birthday} changeHandler={handler(setBirthday)} />
                        <FormField label="Label" type="text" placeholder="Enter label" value={label} changeHandler={handler(setLabel)} />
                        <FormField label="Twitter" type="text" placeholder="Enter twitter" value={twitter} changeHandler={handler(setTwitter)} />
                        <FormField label="Instagram" type="text" placeholder="Enter instagram" value={instagram} changeHandler={handler(setInstagram)} />
                        <FormField label="Github" type="text" placeholder="Enter github" value={github} changeHandler={handler(setGithub)} />
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddContact