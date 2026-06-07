import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2 text-lg font-bold text-zinc-900">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-xs text-white">
                幕
              </span>
              天幕
            </div>
            <p className="text-sm leading-relaxed text-zinc-500">
              让科技守护每一次仰望
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-zinc-900">产品</h3>
            <ul className="space-y-2">
              <li><Link href="/product" className="text-sm text-zinc-500 hover:text-zinc-900">天幕系统</Link></li>
              <li><Link href="/product" className="text-sm text-zinc-500 hover:text-zinc-900">功能特性</Link></li>
              <li><Link href="/product" className="text-sm text-zinc-500 hover:text-zinc-900">价格方案</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-zinc-900">公司</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-zinc-500 hover:text-zinc-900">关于我们</Link></li>
              <li><Link href="/contact" className="text-sm text-zinc-500 hover:text-zinc-900">联系我们</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-zinc-900">联系</h3>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>contact@tianmu.dev</li>
              <li>+86 400-888-8888</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-400">
          &copy; {new Date().getFullYear()} 天幕科技 版权所有
        </div>
      </div>
    </footer>
  );
}
