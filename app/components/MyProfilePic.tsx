import React from 'react'
import Image from "next/image";

const MyProfilePic = () => {
    return (
        <section className={'w-full mx-auto'}>
            <Image
                src={'/images/profile.jpg'}
                alt={'profil'}
                width={300}
                height={100}
                priority={true}
                className={'border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8 scale-75'}
            />
        </section>
    )
}
export default MyProfilePic
