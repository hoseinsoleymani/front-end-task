import { Routes, Route } from "react-router-dom"
import { lazy } from "react"
import { Layout } from "./components/layout/Layout"
const Login = lazy(() => import("./pages/Login"))
const Home = lazy(() => import("./pages/Home"))

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </Layout>
  )
}