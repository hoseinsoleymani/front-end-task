// import { RootState } from "@/app/store"
import { Navigate } from 'react-router-dom';

import { Form } from '@/components/pages/Login';
import { FormContainer, FormOverview } from '@/components/shared';
import { useAuthenticationStore } from '@/store';

const Login = () => {
  const isAuthenticated = useAuthenticationStore(
    (store) => store.isUserAuthenticated,
  );

  if (isAuthenticated) return <Navigate to="/" replace />;

  return (
    <section className="mb-10">
      <FormContainer>
        <div className="mb-10">
          <FormOverview
            title="Sign In"
            extraText="Please Fill Your Information"
          />
        </div>

        <Form />
      </FormContainer>
    </section>
  );
};

export default Login;
