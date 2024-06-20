import Layout from "../components/Layout";
import Card from "../components/Card"
import Avatar from "../components/Avatar"
import { Link } from "react-router-dom"

export default function Notifications() {
    return(
        <Layout>
            <h1 className="text-6xl mb-4 text-gray-300"> Notifications</h1>
            <Card noPadding={true}>
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
                            liked your post
                            </Link>
                        </p>
                        <p className="text-gray-500 text-sm">1 minute ago</p>
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
                                    Jane Doe 
                                </span>
                            liked your post
                            </Link>
                        </p>
                        <p className="text-gray-500 text-sm">1 minute ago</p>
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
                                    Jane Doe 
                                </span>
                            liked your photo
                            </Link>
                        </p>
                        <p className="text-gray-500 text-sm">1 minute ago</p>
                    </div>
                </div>
            </Card>
        </Layout>
    )
}