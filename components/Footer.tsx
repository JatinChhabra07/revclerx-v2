import Link from 'next/link'
import Brand from './Brand'
import { siteConfig } from '@/lib/site-config'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-200 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <Brand href={undefined} />
          <p className="mt-4 text-sm text-slate-500 leading-relaxed">
            Enterprise AI that delivers outcomes, not overhead. Assess, accelerate, sustain.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href={siteConfig.social.linkedin}
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-400 transition"
            >
              in
            </a>
            <a
              href={siteConfig.social.twitter}
              aria-label="X"
              className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-400 transition"
            >
              X
            </a>
            <a
              href={siteConfig.social.facebook}
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-400 transition"
            >
              f
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900 mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            {siteConfig.services.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-slate-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900 mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            {siteConfig.company.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-slate-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900 mb-4">Get in touch</h4>
          <p className="text-sm text-slate-500">{siteConfig.email}</p>
          <p className="text-sm text-slate-500 mt-1">{siteConfig.phone}</p>
          <Link
            href="/contact"
            className="inline-flex mt-4 items-center gap-2 rounded-full bg-[#1f4d3a] hover:bg-[#163829] px-5 py-2 text-sm font-medium text-[#faf6ef] transition-colors"
          >
            Start a Project →
          </Link>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© {year} RevClerx.ai · All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-900">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
