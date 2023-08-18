import { Link } from "react-router-dom";
import { Button } from "../shared";

export function Authentication() {
    const isAuthenticated = false;

    return <div>
        {
            isAuthenticated ? (
                <Link to="/">Hosein Soleymani</Link>
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