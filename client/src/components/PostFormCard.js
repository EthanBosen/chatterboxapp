import React, { useState } from 'react';
import Card from './Card';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_MEMORY } from '../utils/mutations';
import { ALL_MEMORIES } from '../utils/queries';

const PostFormCard = () => {
    const [formState, setFormState] = useState({
        memory: '',
    });
    const [addMemory] = useMutation(ADD_MEMORY, {
        update(cache, { data: { addMemory } }) {
            try {
                const { memory: memories } = cache.readQuery({ query: ALL_MEMORIES });

                cache.writeQuery({
                    query: ALL_MEMORIES,
                    data: { memory: [addMemory, ...memories] },
                });
            } catch (e) {
                console.error(e);
            }
        },
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addMemory({
                variables: { ...formState },
            });

            setFormState({
                memory: '',
            });
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'memory') {
            setFormState({ ...formState, [name]: value });
        } else if (name !== 'memory') {
            setFormState({ ...formState, [name]: value });
        }
    };

    return (
        <Card>
            <div className="flex gap-3">
                <div>
                    <Link to={'Profile'}>
                        <span className="cursor-pointer">
                            <Avatar />
                        </span>
                    </Link>
                </div>
                <div>
                </div>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <textarea onChange={handleChange} className="grow p-3 h-14" placeholder="What is happening?!" value={formState.memory} name="memory"></textarea>
                        <div className="flex gap-4 items-center mt-2">
                            <div>
                                <button className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        People</svg>
                                </button>
                            </div>
                            <div>
                                <button className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>

                                </button>
                            </div>
                            <div>
                                <button className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="grow text-right">
                            <button className="bg-accentBlue text-white py-1.5 px-7 rounded-lg" type="submit">
                                Share
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Card>
    )
}

export default PostFormCard;