import React, {useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import LoginForm from "../LoginForm/LoginForm";

interface ILogin {
    login: string;
    password: string;
    rememberPassword: boolean;
}

const Profile: React.FC  = () => {
    const { handleSubmit, register, formState: { errors } } = useForm<ILogin>();

    const adminUser = {
        email: "admin@admin.com",
        password: "admin123",
    };

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = (details: any) => {
        console.log(details);
    };

    const Logout = () => {
        console.log("Logout")
    };

    return (
        <LoginForm />
    )

}

export default Profile

