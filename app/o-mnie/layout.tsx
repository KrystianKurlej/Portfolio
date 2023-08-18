import Nav from "../components/Nav"

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
        <Nav currentPage="O mnie" />
        <main className="max-w-[700px] px-2.5 py-5 mx-auto">{children}</main>
        </>
    )
  }