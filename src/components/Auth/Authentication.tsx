import { Link, useNavigate } from "react-router-dom";
import { Button } from "../shared";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { logout } from "@/app/authenticationSlice";

export function Authentication() {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const authentication = useSelector((store: RootState) => store.authentication)

    const logoutHandler = () => {
        dispatch(logout())
        navigate("/auth/login")
    }

    return <div>
        {
            authentication.isAuthenticated && !!authentication.user ? (
                <Button className="w-16" onClick={logoutHandler}>
                    {authentication.user.username}
                </Button>
            ) : (
                <Button asChild className="mt-8 md:mt-0 w-16">
                    <Link to="/auth/login">
                        Login
                    </Link>
                </Button>
            )
        }
    </div>
}