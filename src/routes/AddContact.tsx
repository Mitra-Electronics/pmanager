import Navbar from "../navigation/Navbar"
import { useNavigate } from 'react-router-dom';
import { useRef } from "react"
import { Person } from "../essentials/Types"
import { addContact, uploadFile } from "../essentials/Requests"
import PeopleFormField from "../components/People/PeopleFormField";
import PeopleForm from "../components/People/PeopleForm";
import useDocumentTitle from "../hooks/Title";
import Modal from "../components/Modal";


const AddContact = () => {
    useDocumentTitle("Add Contact")

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
    const modal = useRef("") as unknown as React.MutableRefObject<HTMLDialogElement>
    const url = useRef("")

    const history = useNavigate()
    /*
        const handler = (s: React.SetStateAction<any>) => {
            return (e: React.ChangeEvent<HTMLInputElement>) => {
                s(e.target.value);
            }
        }
    */

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        const file: any = e.target?.files[0]
        if (file)
            uploadFile(file, (e) => url.current = e)
    }

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
            github: github.current.value != "" ? github.current.value : null,
            img: url.current != "" ? url.current : null
        }
        console.log(person)
        addContact(person, () => modal.current.showModal())
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
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-lg">Upload Photo</span>
                    </label>
                    <input
                        type="file"
                        className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                        accept=".gif,.jpg,.jpeg,.png,.webp"
                        onChange={(e) => handleUpload(e)}
                    />
                </div>
                <PeopleFormField label="Email" type="email" placeholder="Enter email" ref_form={email} />
                <PeopleFormField label="Phone" type="text" placeholder="Enter phone number" ref_form={phone} />
                <PeopleFormField label="Country" type="text" placeholder="Enter country" ref_form={country} />
                <PeopleFormField label="Birthday" type="date" placeholder="Enter birthday" ref_form={birthday} />
                <PeopleFormField label="Label" type="text" placeholder="Enter label" ref_form={label} />
                <PeopleFormField label="Twitter" type="text" placeholder="Enter twitter" ref_form={twitter} />
                <PeopleFormField label="Instagram" type="text" placeholder="Enter instagram" ref_form={instagram} />
                <PeopleFormField label="Github" type="text" placeholder="Enter github" ref_form={github} />
            </PeopleForm>
            <Modal handleSubmit={(e) => modalHandler(e)} heading="Contact Created!" refModal={modal}/>
        </>
    )
}

export default AddContact