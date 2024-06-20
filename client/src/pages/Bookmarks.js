import Layout from "../components/Layout";
import PostCard from "../components/PostCard";

export default function Bookmarks() {
    return(
        <Layout>
            <h1 className="text-6xl mb-4 text-gray-300"> Saved posts</h1>
            <PostCard/>
        </Layout>
    )
}