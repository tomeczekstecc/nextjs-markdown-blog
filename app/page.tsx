import Posts from "@/app/components/Posts";

export default function Home() {
    return (
        <main className="px-6 mx-auto">
            <p className={'mt-12 mb-12 text-3xl text-center dark:text-white'}>
                Hello and Welcome 👋 &nbsp;
                <span className={'text-teal-700 dark:text-teal-400'}>I&aposm Tomasz</span>
            </p>
            <Posts/>
        </main>
    )
}
