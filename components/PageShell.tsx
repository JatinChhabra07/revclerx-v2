import Header from './Header'
import Footer from './Footer'

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  )
}
