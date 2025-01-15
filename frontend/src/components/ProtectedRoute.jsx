import { Navigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import api from "../api"
import { REFRESH_TOKEN } from "../constants"
import { useState , useEffect } from "react"


function ProtectedRoute({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    useEffect(() => {
        auth().catch(() => setIsAuthenticated(false))
    }, [])


    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)
        try{
            const response = await api.post("/api/token/refresh", {
                refresh: refreshToken
            });
            if (response.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                setIsAuthenticated(true)
            }
            else{
                setIsAuthenticated(false)
            }
        }
        catch (error) {
            console.log(error)
            setIsAuthenticated(false)
        }
    }

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if (!token) {
            setIsAuthenticated(false)
            return
        }
        const decoded = jwtDecode(token)
        const tokenExpiration = decoded.exp
        const now = Date.now() / 1000
        if (tokenExpiration < now) {
            await refreshToken()
        }
        setIsAuthenticated(true)
    }

    if (isAuthenticated === null) {
        return <div>Loading...</div>
    }
    return isAuthenticated ? children : <Navigate to="/login" />
}

export default ProtectedRoute