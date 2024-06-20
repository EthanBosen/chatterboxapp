import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        setFormState({
            username: '',
            password: '',
        });
    };


    return (
        <>
            {error && (
                <div className="bg-blue-500 text-white block w-full rounded-sm p-2">
                    {error.message}
                </div>
            )}

            <div className="bg-blue-50 h-screen flex justify-center items-center">
                {data ? (
                    <p> Success! You may now head back to the {' '} <Link to="/">HOMEPAGE.</Link> </p>
                ) : (
                    <form onSubmit={handleFormSubmit} className="w-72 mx-auto mb-12">
                        <h1 className="text-6xl mb-4 text-gray-300"> Login</h1>
                        <input value={formState.username} onChange={handleChange} name="username" type="text" placeholder="username" className="block w-full rounded-sm p-2 mb-2 border" />
                        <input value={formState.password} onChange={handleChange} name="password" type="text" placeholder="password" className="block w-full rounded-sm p-2 mb-2 border" />
                        <button className="bg-blue-500 text-white block w-full rounded-sm p-2" type="sumbit"> Login </button>
                        <Link to="/register">
                            <div className="mt-2">
                                <button className="bg-blue-500 text-white block w-full rounded-sm p-2" type="submit"> Register </button>
                            </div>
                        </Link>
                    </form>
                )}
            </div>

        </>
    );
};

export default Login;