import axios from "axios"

const {REACT_APP_API_URL} = process.env;

const instance = axios.create({
    baseURL: REACT_APP_API_URL
})

export const getBooks = async () => {
    const {data} = await instance.get("/books");

    return data;
}