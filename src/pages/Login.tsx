import { Form } from "@/components/pages/Login"
import { FormContainer, FormOverview } from "@/components/shared"

const Login = () => {
    return (
        <FormContainer>
            <FormOverview title="Sign In" extraText="Please Fill Your Information" />
            <Form />
        </FormContainer>
    )
}

export default Login