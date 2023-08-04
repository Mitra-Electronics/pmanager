export interface PersonProps{
    id: number, 
    name: string,
    country: string,
    email: string,
    birthday: string,
    github: string,
    img: string
}

export interface Person {
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    country: string,
    birthday: string,
    label: string,
    twitter: string,
    instagram: string,
    github: string
}

export interface PersonInDb extends Person{
    id: number
}

export interface GetPersonResult {
    success: boolean,
    result: Person
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
