import Layout from "../components/Layout";
import Card from "../components/Card";
import Avatar from "../components/Avatar"
import { Link, useLocation } from "react-router-dom";
import Auth from '../utils/auth';

export default function Comments() {
    const { pathname } = useLocation();
    const getPosts = pathname.includes("posts") || pathname === "/profile";
    const getComments = pathname.includes("comments");
    const getLikes = pathname.includes("likes");
    const selectedTab = "border-accentBlue text-accentBlue border-b-4 px-5 py-2 font-bold";
    const unselectedTab = "flex items-center";

    return (
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
                            <div className="p-4 pb-0">
                                <div className="ml-32">
                                    <h1 className="text-2xl font-bold leading-5">
                                        {Auth.getProfile().data.username}
                                    </h1>
                                    <div className="text-gray-500 leading-5">Atlanta, Ga</div>
                                </div>
                                <div className="mt-8 flex justify-around" >
                                    <Link to="/profile" className={getPosts ? selectedTab : unselectedTab}>
                                        Posts
                                    </Link>
                                    <Link to="/profile/comments" className={getComments ? selectedTab : unselectedTab}>
                                        Comments
                                    </Link>
                                    <Link to="/profile/likes" className={getLikes ? selectedTab : unselectedTab}>
                                        Likes
                                    </Link>
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
                        <div className="p-4 pb-0">
                            <div className="ml-32">
                                <h1 className="text-2xl font-bold leading-5">
                                    {Auth.getProfile().data.username}
                                </h1>
                                <div className="text-gray-500 leading-5">Atlanta, Ga</div>
                            </div>
                            <div className="mt-8 flex justify-around" >
                                <Link to="/profile" className={getPosts ? selectedTab : unselectedTab}>
                                    Posts
                                </Link>
                                <Link to="/profile/comments" className={getComments ? selectedTab : unselectedTab}>
                                    Comments
                                </Link>
                                <Link to="/profile/likes" className={getLikes ? selectedTab : unselectedTab}>
                                    Likes
                                </Link>
                            </div>
                        </div>
                    </div>
                </Card>
            )}
        </Layout>
    )
}
