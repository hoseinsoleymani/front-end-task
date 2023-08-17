import { Form } from "@/components/pages/Tasks";
import { FormContainer, FormOverview } from "@/components/shared";

const CreateTask = () => {
    return (
        <FormContainer>
            <FormOverview title="Create Task" extraText="Fill Information" />
            <Form />
        </FormContainer>
    );
};

export default CreateTask