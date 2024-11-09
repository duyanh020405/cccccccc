
import axios from "axios"

const apiInsntance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json"
    }
})

export default apiInsntance
