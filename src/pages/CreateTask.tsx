import { AddTask } from "@/components/pages/Tasks/AddTask";
import { FormContainer, FormOverview } from "@/components/shared";

const CreateTask = () => {
    return (
        <main>
            <section>
                <FormContainer>
                    <div className="mb-10">
                        <FormOverview title="Create Task" extraText="Fill Information" />
                    </div>

                    <AddTask />
                </FormContainer>
            </section>
        </main>
    );
};

export default CreateTask