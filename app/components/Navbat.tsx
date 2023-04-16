import React from 'react'
import Link from "next/link";
import {FaGithub, FaGitlab, FaLaptop, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className={'bg-slate-700 p-4 sticky top-0 drop-shadow-xl z-10'}>
            <div className={'prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'}>
                <h1 className={'text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'}>
                    <Link href={'/'} className={'text-white/90 no-underline hover:text-white'}>
                        Tomasz Steć
                    </Link>
                </h1>
                <div
                    className={'flex flex-row justify-center sm:justify-evenly align-middle gap-5 text-white text-2xl lg:text-3xl'}>
                    <Link aria-label={'link do strony autora'} className={'text-white/90 hover:text-white href'}
                          href={"https://www.tomaszstec.me/"}>
                        <FaLaptop/>
                    </Link>
                    <Link aria-label={'link do LinkedIn'} className={'text-white/90 hover:text-white href'}
                          href={"https://www.linkedin.com/in/tomasz-ste%C4%87-748726180/"}>
                        <FaLinkedin/>
                    </Link>
                    <Link aria-label={'link do Gitlab'} className={'text-white/90 hover:text-white href'}
                          href={"https://gitlab.com/tomeczekstecc"}>
                        <FaGitlab/>
                    </Link>
                    <Link aria-label={'link do Github'} className={'text-white/90 hover:text-white href'}
                          href={"https://github.com/tomeczekstecc"}>
                        <FaGithub/>
                    </Link>
                    <Link aria-label={'link do Twittera'} className={'text-white/90 hover:text-white href'}
                          href={"https://twitter.com/tomeczekstecc"}>
                        <FaTwitter/>
                    </Link>

                </div>
            </div>
        </nav>
    )
}
export default Navbar
