import axios from "axios"

export const getUsers = async() => {
    return await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/users`)
}