import Footer from "../components/Footer"
import Nav from "../components/Nav"

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
        <Nav currentPage="O mnie" lang="PL"/>
        <main className="max-w-[700px] px-2.5 py-5 mx-auto">{children}</main>
        <Footer lang="PL" />
        </>
    )
  }