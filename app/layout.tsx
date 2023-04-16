import './globals.css'
import Navbar from "@/app/components/Navbat";
import MyProfilePic from "@/app/components/MyProfilePic";

export const metadata = {
    title: 'Tomasz Steć: Blog',
    description: 'Stworzone przez Tomasza Steća',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="pl">
        <body className={"dark:bg-gray-900"}>
        <Navbar/>
        <MyProfilePic/>
        {children}
        </body>
        </html>
    )
}
