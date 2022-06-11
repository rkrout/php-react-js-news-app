import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import ChangeEmailOTPPage from "./pages/ChangeEmail/ChangeEmailOTPPage"
import ChangeEmailPage from "./pages/ChangeEmail/ChangeEmailPage"
import ChangePasswordPage from "./pages/ChangePassword/ChangePasswordPage"
import HomePage from "./pages/Home/HomePage"
import SearchPage from "./pages/Search/SearchPage"
import SignUpOTPPage from "./pages/SignUp/SignUpOTPPage"

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/change-password" element={<ChangePasswordPage/>}/>
                <Route path="/change-email-otp" element={<ChangeEmailOTPPage/>}/>
                <Route path="/change-email" element={<ChangeEmailPage/>}/>
            </Route>
            <Route path="/sign-up-otp" element={<SignUpOTPPage/>}/>
        </Routes>
    )
}