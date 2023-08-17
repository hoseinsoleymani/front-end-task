import { Routes, Route } from "react-router-dom"
import { lazy } from "react"
import { Layout } from "./components/layout/Layout"
const Login = lazy(() => import("./pages/Login"))
const Tasks = lazy(() => import("./pages/Tasks"))
const CreateTask = lazy(() => import("./pages/CreateTask"))

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </Layout>
  )
}