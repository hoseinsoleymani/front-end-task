import { Form } from "@/components/pages/Login"
import { FormContainer, FormOverview } from "@/components/shared"

const Login = () => {
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