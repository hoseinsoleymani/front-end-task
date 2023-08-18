import { Routes, Route } from "react-router-dom"
import { lazy } from "react"
import { Layout } from "./components/layout/Layout"
import { ProtectedRoute } from "./components/Auth"

const Login = lazy(() => import("./pages/Login"))
const Tasks = lazy(() => import("./pages/Tasks"))
const CreateTask = lazy(() => import("./pages/CreateTask"))
const TaskDetails = lazy(() => import("./pages/TaskDetails"))
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer position="bottom-right"/>
    </Layout>
  )
}