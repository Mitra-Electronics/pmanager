import { ReactNode } from "react"

export interface PersonProps{
    id: number, 
    name: string,
    country: string| null,
    email: string| null,
    birthday: string| null,
    github: string| null,
    img: string
}

export interface FileResponse {
    success: boolean,
    url: string
}

export interface ConditionalProps {
    children: ReactNode,
    condition: boolean
}

export interface Person {
    first_name: string,
    last_name: string,
    email: string|null,
    phone: string|null,
    country: string|null,
    birthday: string|null,
    label: string|null,
    twitter: string|null,
    instagram: string|null,
    github: string|null,
    img: string|null
}

export interface PersonInDb extends Person{
    id: number
}

export interface GetPersonResult {
    success: boolean,
    result: PersonInDb
}

export interface GetAllPeopleResult {
    success: boolean,
    result: PersonInDb[]
}

export interface AddPersonResult {
    success: boolean,
    result: number
}

export interface UnpopProps {
    text: string
}
