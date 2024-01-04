import 'react-toastify/dist/ReactToastify.css';

import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ProtectedRoute } from './components/Auth';
import { Layout } from './components/layout/Layout';

const Login = lazy(() => import('./pages/Login'));
const Tasks = lazy(() => import('./pages/tasks/Tasks'));
const CreateTask = lazy(() => import('./pages/CreateTask'));
const TaskDetails = lazy(() => import('./pages/TaskDetails'));

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
          <Route path="/" element={<Tasks />} />
        </Route>

        <Route path="/auth/login" element={<Login />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </Layout>
  );
};
