import Navbar from "../navigation/Navbar"
import { useNavigate, useParams } from 'react-router-dom';
import { useRef } from "react"
import { Person } from "../essentials/Types"
import { editContact, getContact } from "../essentials/Requests"
import PeopleFormField from "../components/People/PeopleFormField";
import PeopleForm from "../components/People/PeopleForm";
import { useQuery } from "@tanstack/react-query";
import Unpopulated from "../components/Unpopulated";
import Modal from "../components/Modal";


const EditContact = () => {
    const { peopleId } = useParams()

    const { data, status } = useQuery({
        queryKey: ["test"],
        queryFn: () => getContact((peopleId as unknown as number)),
    })

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
            github: github.current.value != "" ? github.current.value : null,
            // @ts-ignore
            img: data.img != null || data.img != undefined ? data.img : ""
        }
        console.log(person)
        editContact((peopleId as unknown as number), person, () => (window as any).success_dialog.showModal())
    }

    const modalHandler = (e: React.FormEvent) => {
        e.preventDefault()
        history('/')
    }

    if (status === "loading")
        return <Unpopulated text="Loading" />

    else if (status === "error" || data === undefined)
        return <Unpopulated text="Error" />

    else if (data === null)
        return <Unpopulated text="404 Contact does not exist" />

    return (
        <>
            <Navbar />
            <PeopleForm callback={(e) => submitForm(e)}>
                <PeopleFormField label="First Name" type="text" placeholder="Enter first name" ref_form={firstName} value={data.first_name} />
                <PeopleFormField label="Last Name" type="text" placeholder="Enter last name" ref_form={lastName} value={data.last_name} />
                <PeopleFormField label="Email" type="email" placeholder="Enter email" ref_form={email} value={data.email} />
                <PeopleFormField label="Phone" type="text" placeholder="Enter phone number" ref_form={phone} value={data.phone} />
                <PeopleFormField label="Country" type="text" placeholder="Enter country" ref_form={country} value={data.country} />
                <PeopleFormField label="Birthday" type="date" placeholder="Enter birthday" ref_form={birthday} value={data.birthday} />
                <PeopleFormField label="Label" type="text" placeholder="Enter label" ref_form={label} value={data.label} />
                <PeopleFormField label="Twitter" type="text" placeholder="Enter twitter" ref_form={twitter} value={data.twitter} />
                <PeopleFormField label="Instagram" type="text" placeholder="Enter instagram" ref_form={instagram} value={data.instagram} />
                <PeopleFormField label="Github" type="text" placeholder="Enter github" ref_form={github} value={data.github} />
            </PeopleForm>
            <Modal handleSubmit={(e) => modalHandler(e)} heading="Contact Edited!"/>
        </>
    )
}

export default EditContact