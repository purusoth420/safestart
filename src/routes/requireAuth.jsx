import { useSelector } from "react-redux"
import { useLocation, Navigate, Outlet } from "react-router-dom"
import { checkLogin } from "../redux/auth"
import App from "../App"

const RequireAuth = () => {
    const token = useSelector(checkLogin)
    const location = useLocation()

    console.log('token', token)

    return (
        token ?
            <Outlet /> :
            <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default RequireAuth