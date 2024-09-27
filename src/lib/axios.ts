import axios from "axios";

export const apiProfile = axios.create({
    baseURL: 'https://api.github.com/users'
})

export const apiIssues = axios.create({
    baseURL: 'https://api.github.com/search/'
})