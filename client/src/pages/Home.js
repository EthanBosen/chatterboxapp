import { useQuery } from '@apollo/client';
import PostFormCard from "../components/PostFormCard";
import PostCard from "../components/PostCard";
import Layout from "../components/Layout";
import { ALL_MEMORIES, TAG_SEARCH } from '../utils/queries';
import { useState } from 'react';


const Home = () => {
  const [tagSearch, setTagSearch] = useState()
  const { loading, data } = useQuery(ALL_MEMORIES);
  const { loader, datas } = useQuery(TAG_SEARCH, { variables: { tag: tagSearch } });
  const memories = data?.memory || [];
  const tags = datas?.tag || []
  console.log(tags)
  
  return (
    <>
      <Layout setTagSearch={setTagSearch}   >
        <PostFormCard
        />
        {memories && (
          memories.map((memory) => (
            <PostCard
              memories={memory}
              title="Recent Memories" />
          ))
        )}
        <PostCard
          memories={memories}
          title="Recent Memories" />
      </Layout>
    </>
  )
}

export default Home;