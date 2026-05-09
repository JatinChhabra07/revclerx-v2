import Header from './Header'
import Footer from './Footer'

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f7f3]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
