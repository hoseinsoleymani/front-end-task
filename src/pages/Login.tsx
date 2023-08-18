import { Form } from "@/components/pages/Login"
import { FormContainer, FormOverview } from "@/components/shared"

const Login = () => {
    return (
        <main>
            <FormContainer>
                <div className="mb-10">
                    <FormOverview title="Sign In" extraText="Please Fill Your Information" />
                </div>
                <Form />
            </FormContainer>
        </main>
    )
}

export default Login