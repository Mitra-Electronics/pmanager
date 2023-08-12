const defaultProfileGen = (first_name: string, last_name: string) =>{
    return "https://ui-avatars.com/api/?background=random&name="+first_name.replace(" ", "+")+"+"+last_name.replace(" ", "+")
}

export default defaultProfileGen