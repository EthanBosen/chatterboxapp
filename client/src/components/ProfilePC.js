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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                    Edit
                </button>
                <button className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    Delete
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