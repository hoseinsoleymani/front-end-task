import { Link } from "react-router-dom";
import { Button } from "../shared";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { logout } from "@/app/authenticationSlice";

export function Authentication() {
    const dispatch = useDispatch()
    const authentication = useSelector((store: RootState) => store.authentication)
    return <div>
        {
            authentication.isAuthenticated && !!authentication.user ? (
                <Button className="w-16" onClick={() => {
                    dispatch(logout())
                }}>
                    {authentication.user.username}
                </Button>
            ) : (
                <Button asChild className="w-16">
                    <Link to="/auth/login">
                        Login
                    </Link>
                </Button>
            )
        }
    </div>
}