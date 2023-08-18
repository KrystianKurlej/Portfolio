import Link from "next/link"
import Nav from "../components/Nav"

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
        <Nav currentPage="Portfolio" />
        <main className="max-w-[700px] w-full px-2.5 py-5 mx-auto">{children}</main>
        <div className="max-w-[700px] w-full px-2.5 mx-auto my-12">
            <Link href='/' title="Portfolio" className="text-4xl flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                <path d="M12.1332 14.2333L23.0666 14.2333C23.4443 14.2333 23.7612 14.3613 24.0172 14.6173C24.2732 14.8733 24.4008 15.1898 24.3999 15.5667C24.3999 15.9444 24.2719 16.2613 24.0159 16.5173C23.7599 16.7733 23.4435 16.9009 23.0666 16.9L12.1332 16.9L15.9999 20.7667C16.2443 21.0111 16.3666 21.3222 16.3666 21.7C16.3666 22.0778 16.2443 22.3889 15.9999 22.6333C15.7555 22.8778 15.4443 23 15.0666 23C14.6888 23 14.3777 22.8778 14.1332 22.6333L7.9999 16.5C7.73323 16.2333 7.5999 15.9222 7.5999 15.5667C7.5999 15.2111 7.73323 14.9 7.9999 14.6333L14.1332 8.5C14.3777 8.25555 14.6888 8.13333 15.0666 8.13333C15.4443 8.13333 15.7555 8.25555 15.9999 8.5C16.2443 8.74444 16.3666 9.05555 16.3666 9.43333C16.3666 9.81111 16.2443 10.1222 15.9999 10.3667L12.1332 14.2333Z" fill="white"/>
            </svg>
            Inne projekty
            </Link>
        </div>
        </>
    )
  }