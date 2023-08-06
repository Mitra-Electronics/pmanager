import Navbar from "../components/Navbar"
import { useNavigate } from 'react-router-dom';
import { useRef } from "react"
import { Person } from "../essentials/Types"
import { addContact } from "../essentials/Requests"
import PeopleFormField from "../components/People/PeopleFormField";
import PeopleForm from "../components/People/PeopleForm";


const AddContact = () => {
    const firstName = useRef("") as unknown as React.MutableRefObject<HTMLInputElement>
    const lastName = useRef("") as unknown as React.MutableRefObject<HTMLInputElement>
    const email = useRef("") as unknown as React.MutableRefObject<HTMLInputElement>
    const phone = useRef("") as unknown as React.MutableRefObject<HTMLInputElement>
    const country = useRef("") as unknown as React.MutableRefObject<HTMLInputElement>
    const birthday = useRef("") as unknown as React.MutableRefObject<HTMLInputElement>
    const label = useRef("") as unknown as React.MutableRefObject<HTMLInputElement>
    const twitter = useRef("") as unknown as React.MutableRefObject<HTMLInputElement>
    const instagram = useRef("") as unknown as React.MutableRefObject<HTMLInputElement>
    const github = useRef("") as unknown as React.MutableRefObject<HTMLInputElement>

    const history = useNavigate()
    /*
        const handler = (s: React.SetStateAction<any>) => {
            return (e: React.ChangeEvent<HTMLInputElement>) => {
                s(e.target.value);
            }
        }
    */
    const submitForm = (e: React.FormEvent): void => {
        e.preventDefault()
        const person: Person = {
            first_name: firstName.current.value,
            last_name: lastName.current.value,
            email: email.current.value != "" ? email.current.value : null,
            phone: phone.current.value != "" ? phone.current.value : null,
            country: country.current.value != "" ? country.current.value : null,
            birthday: birthday.current.value != "" ? birthday.current.value : null,
            label: label.current.value != "" ? label.current.value : null,
            twitter: twitter.current.value != "" ? twitter.current.value : null,
            instagram: instagram.current.value != "" ? instagram.current.value : null,
            github: github.current.value != "" ? github.current.value : null
        }
        console.log(person)
        addContact(person, () => (window as any).success_dialog.showModal())
    }

    const modalHandler = (e: React.FormEvent) => {
        e.preventDefault()
        history('/')
    }

    return (
        <>
            <Navbar />
            <PeopleForm callback={(e) => submitForm(e)}>
                <PeopleFormField label="First Name" type="text" placeholder="Enter first name" ref_form={firstName} />
                <PeopleFormField label="Last Name" type="text" placeholder="Enter last name" ref_form={lastName} />
                <PeopleFormField label="Email" type="email" placeholder="Enter email" ref_form={email} />
                <PeopleFormField label="Phone" type="text" placeholder="Enter phone number" ref_form={phone} />
                <PeopleFormField label="Country" type="text" placeholder="Enter country" ref_form={country} />
                <PeopleFormField label="Birthday" type="date" placeholder="Enter birthday" ref_form={birthday} />
                <PeopleFormField label="Label" type="text" placeholder="Enter label" ref_form={label} />
                <PeopleFormField label="Twitter" type="text" placeholder="Enter twitter" ref_form={twitter} />
                <PeopleFormField label="Instagram" type="text" placeholder="Enter instagram" ref_form={instagram} />
                <PeopleFormField label="Github" type="text" placeholder="Enter github" ref_form={github} />
            </PeopleForm>
            <dialog id="success_dialog" className="modal">
                <form method="dialog" className="modal-box" onSubmit={(e) => modalHandler(e)}>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Contact Created!</h3>
                    <p className="py-4">Click on ✕ button to continue</p>
                </form>
            </dialog>
        </>
    )
}

export default AddContact