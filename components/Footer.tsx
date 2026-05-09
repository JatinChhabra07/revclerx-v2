import Link from 'next/link'
import Brand from './Brand'
import { siteConfig } from '@/lib/site-config'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#f9f7f3] border-t border-[#ebe6dd]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Brand size="lg" />
            <p className="mt-4 text-sm text-[#767069] max-w-xs leading-relaxed">
              A senior consulting team for enterprises shipping AI into production.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#1C1C1C] font-semibold">
              Solutions
            </h4>
            <ul className="mt-4 space-y-3">
              {siteConfig.solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#3a3a3a] hover:text-[#1C1C1C] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#1C1C1C] font-semibold">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {siteConfig.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#3a3a3a] hover:text-[#1C1C1C] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#1C1C1C] font-semibold">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[#3a3a3a] hover:text-[#ff5a1f] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-[#767069]">{siteConfig.phone}</li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#1C1C1C] font-medium hover:text-[#ff5a1f] transition-colors"
                >
                  Book a call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#ebe6dd] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-[#767069]">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-[#767069]">
            <Link href="#" className="hover:text-[#1C1C1C] transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-[#1C1C1C] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
