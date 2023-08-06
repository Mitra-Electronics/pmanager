import axios from "axios";
import { Person, GetPersonResult, GetAllPeopleResult, PersonInDb } from "../essentials/Types";

export const getAllContacts = async (): Promise<PersonInDb[] | null | undefined> => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/get");
        console.log(response);
        const data: GetAllPeopleResult = response.data
        return data.result
    } catch (error) {
        console.error(error);
    }
}

export const getContact = async (id: number): Promise<PersonInDb | null | undefined> => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/get/id",
            {
                params: {
                    id: id
                }
            });
        console.log(response);
        const data: GetPersonResult = response.data
        return data.result
    } catch (error) {
        console.error(error);
    }
}

export const addContact = async (obj: Person, callback: () => void) => {
    try {
        const response = await axios.post("http://127.0.0.1:8000/add",
            JSON.stringify(obj),
            {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        console.log(response)
        callback()
    }
    catch (error) {
        console.error(error);
    }
}

export const editContact = async (id: number, obj: Person, callback: () => void) => {
    try {
        const response = await axios.post("http://127.0.0.1:8000/edit",
            JSON.stringify(obj),
            {
                params: {
                    id: id
                },
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        console.log(response)
        callback()
    }
    catch (error) {
        console.error(error);
    }
}