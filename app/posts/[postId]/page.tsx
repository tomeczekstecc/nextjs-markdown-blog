import {getPostData, getSortedPostsData} from "@/lib/posts";
import {notFound} from "next/navigation";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import {FaArrowLeft} from "react-icons/fa";

type Props = {
    params: {
        postId: string
    }
};

export function generateStaticParams() {
    const posts = getSortedPostsData(); //@deduped
    return posts.map(post => ({
        postId: post.id
    }))
}


export function generateMetadata({params}: Props) {
    const posts = getSortedPostsData(); //@deduped
    const {postId} = params;
    const post = posts.find(post => post.id === postId)
    if (!post) {
        return {
            title: 'post not found',
        }
    }
    return {
        title: post.title
    }
}

export default async function Post({params}: Props) {
    const {postId} = params;
    const posts = getSortedPostsData(); //@deduped

    if (!posts.find(post => post.id === postId)) {
        return notFound();
    }

    const {title, date, contentHtml} = await getPostData(postId)

    const pubDate = getFormattedDate(date)

    return (
        <main className={'px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'}>
            <h1 className={'text-4xl font-bold dark:text-white/90'}>{title}</h1>
            <p className={'text-sm'}>{pubDate}</p>
            <article>
                <section dangerouslySetInnerHTML={{__html: contentHtml}}/>
                <p>
                    <Link href={'/'} className={'flex items-center gap-2'}> {<FaArrowLeft/>} Back to home</Link>
                </p>
            </article>
        </main>
    );
};
