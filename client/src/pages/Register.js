import { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { CREATE_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Register = (props) => {
    const [formState, setFormState] = useState({ email: '', username: '', password: '' });
    const [createUser, { error, data }] = useMutation(CREATE_USER);

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
            const { data } = await createUser({
                variables: { ...formState },
            });
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
            console.log(data)
        }
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
                <p> Success! You may now head back to the {' '} <Link to="/home">HOMEPAGE.</Link> </p>
            ) : (
                <form onSubmit={handleFormSubmit} className="w-72 mx-auto mb-12">
                    <h1 className="text-6xl mb-4 text-gray-300"> Register</h1>
                    <input value={formState.email} onChange={handleChange} name="email" type="email" placeholder="email" className="block w-full rounded-sm p-2 mb-2 border" />
                    <input value={formState.name} onChange={handleChange} name="username" type="text" placeholder="username" className="block w-full rounded-sm p-2 mb-2 border" />
                    <input value={formState.password} onChange={handleChange} name="password" type="text" placeholder="password" className="block w-full rounded-sm p-2 mb-2 border" />
                    <button className="bg-blue-500 text-white block w-full rounded-sm p-2" type="Submit"> Register </button>
                    <Link to="/login">
                        <div className="mt-2">
                            <button className="bg-blue-500 text-white block w-full rounded-sm p-2"> Login </button>
                        </div>
                    </Link>
                </form>
            )}
        </div>
        </>
    );
};

export default Register;