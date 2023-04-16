import {getSortedPostsData} from "@/lib/posts";
import ListItem from "@/app/components/ListItem";

const Posts = () => {

    const posts = getSortedPostsData()

    return (
        <section className={'mt-6 mx-auto max-w-2xl'}>
            <h2 className={'text-4xl font-bold dark:text-white/90'}>Blog</h2>
            <ul className={'w-full'}>
                {posts.map((post) => (
                    <ListItem post={post} key={post.id}/>
                ))}
            </ul>

        </section>
    )
}
export default Posts
