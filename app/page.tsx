import Posts from "@/app/components/Posts";
import {FaReact} from "react-icons/fa";

export default function Home() {
    return (
        <main className="px-6 mx-auto">
            <p className={'mt-12 text-3xl text-center dark:text-white'}>
                Witaj! 👋 &nbsp;
                <span className={'text-teal-700 dark:text-teal-400'}>nazywam się Tomasz</span>
            </p>
            <p className={'mb-12 text-2xl text-blue-700 dark:text-blue-400 justify-center flex flex-row gap-1 content-center h-full items-center'}>
                <span> Blog o nowościach wokół Reacta</span>
                <FaReact/>
            </p>
            <Posts/>
        </main>
    )
}
