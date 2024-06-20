import Card from "./Card";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import Auth from '../utils/auth';

const PostCard = ({ memories }) => {
    if (!memories) {
        return <h3>No Posts Yet</h3>;
    }
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
                <div className="grow">
                    <div>
                        <p>
                            {Auth.loggedIn() ? (
                                <>
                                    <Link to={'Profile'}>
                                        <span className="font-semibold cursor-pointer text-accentBlue hover:underline">
                                            {Auth.getProfile().data.username}
                                        </span>
                                    </Link>
                                </>
                            ) : (
                                <Link to={'Profile'}>
                                    <span className="font-semibold cursor-pointer text-accentBlue hover:underline">
                                        {Auth.getProfile().data.username}
                                    </span>
                                </Link>
                            )}
                        </p>
                        <p className="text-gray-500 text-sm"> {memories.createdAt}</p>
                    </div>
                </div>
            </div>
            <div key={memories._id}>
                <p className="my-2 text-sm">
                    {memories.memory}
                </p>
                <div className="rounded-lg overflow-hidden">
                </div>
            </div>
            <div className="mt-5 flex gap-7">
                <button className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    30
                </button>
                <button className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                    </svg>
                    23
                </button>
                <button className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                    </svg>
                    11
                </button>
            </div>
            <div className="flex mt-4 gap-3">
                <div>
                    <Link to={'Profile'}>
                        <span className="cursor-pointer">
                            <Avatar />
                        </span>
                    </Link>
                </div>
                <textarea className="border grow p-2 px-4 h-12 rounded-full" placeholder={'Leave a comment.'} />
            </div>
        </Card>
    );
};

export default PostCard;