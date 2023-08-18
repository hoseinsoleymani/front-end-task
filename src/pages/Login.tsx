import { RootState } from "@/app/store"
import { Form } from "@/components/pages/Login"
import { FormContainer, FormOverview } from "@/components/shared"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const Login = () => {
    const isAuthenticated = useSelector((store: RootState) => store.authentication.isAuthenticated)

    if (isAuthenticated) return <Navigate to="/" replace />


    return (
        <section className="mb-10">
            <FormContainer>
                <div className="mb-10">
                    <FormOverview title="Sign In" extraText="Please Fill Your Information" />
                </div>
                <Form />
            </FormContainer>
        </section>
    )
}

export default Login