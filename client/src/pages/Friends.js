import Layout from "../components/Layout";
import Card from "../components/Card";
import Avatar from "../components/Avatar"
import { Link } from "react-router-dom"
import Auth from '../utils/auth';

export default function Friends() {
    return(
        <Layout>
            {Auth.loggedIn() ? (
                <>
                    <Card noPadding={true}> 
                        <div className="relative overflow-hidden rounded-md">
                            <div className="h-36 overflow-hidden flex justify-center items-center">
                                <img src="https://images.unsplash.com/photo-1578223166860-86396c1a0408?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="green-ocean"></img>
                            </div>

                            <div className="absolute top-14 left-3">
                                <Avatar size={'big'} />
                            </div>
                            <div className="p-0 pb-14 mt-4">
                                <div className="ml-36">
                                    <h1 className="text-2xl font-bold leading-5">
                                    {Auth.getProfile().data.username}
                                    </h1>
                                    <div className="text-gray-500 leading-5">Atlanta, Ga</div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </>
            ) : (
                <Card noPadding={true}> 
                        <div className="relative overflow-hidden rounded-md">
                            <div className="h-36 overflow-hidden flex justify-center items-center">
                                <img src="https://images.unsplash.com/photo-1578223166860-86396c1a0408?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="green-ocean"></img>
                            </div>

                            <div className="absolute top-14 left-3">
                                <Avatar size={'big'} />
                            </div>
                            <div className="p-2 pb-14">
                                <div className="ml-36">
                                    <h1 className="text-2xl font-bold leading-5">
                                    {Auth.getProfile().data.username}
                                    </h1>
                                    <div className="text-gray-500 leading-5">Atlanta, Ga</div>
                                </div>
                            </div>
                        </div>
                    </Card>
            )}
            <h2 className="text-3xl mb-3"> Friends</h2>
            <Card>
                <div className="flex gap-3 items-center border-b border-b-gray-200 p-2">
                    <Link to={'Profile'}>
                        <span className="cursor-pointer">
                            <Avatar/>
                        </span>
                    </Link>
                    <div className="grow ">
                        <p className="flex">
                            <Link to={'Profile'}>
                                <span className="mr-1 font-semibold cursor-pointer text-accentBlue hover:underline"> 
                                    Jane Doe 
                                </span>
                            </Link>
                        </p>
                        <p className="text-gray-500 text-sm">5 mutual friends</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center border-b border-b-gray-200 p-2">
                    <Link to={'Profile'}>
                        <span className="cursor-pointer">
                            <Avatar/>
                        </span>
                    </Link>
                    <div className="grow ">
                        <p className="flex">
                            <Link to={'Profile'}>
                                <span className="mr-1 font-semibold cursor-pointer text-accentBlue hover:underline"> 
                                    John Smalls 
                                </span>
                            </Link>
                        </p>
                        <p className="text-gray-500 text-sm">2 mutual friends</p>
                    </div>
                </div>
            </Card>
        </Layout>
    )
}


