import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent)] text-xs text-white">
                幕
              </span>
              天幕
            </div>
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              让科技守护每一次仰望
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">产品</h3>
            <ul className="space-y-2">
              <li><Link href="/product" className="text-sm text-zinc-500 transition-colors hover:text-foreground dark:text-zinc-400">天幕系统</Link></li>
              <li><Link href="/product" className="text-sm text-zinc-500 transition-colors hover:text-foreground dark:text-zinc-400">功能特性</Link></li>
              <li><Link href="/product" className="text-sm text-zinc-500 transition-colors hover:text-foreground dark:text-zinc-400">价格方案</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">公司</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-zinc-500 transition-colors hover:text-foreground dark:text-zinc-400">关于我们</Link></li>
              <li><Link href="/contact" className="text-sm text-zinc-500 transition-colors hover:text-foreground dark:text-zinc-400">联系我们</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">联系</h3>
            <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
              <li>contact@tianmu.dev</li>
              <li>+86 400-888-8888</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-zinc-400 dark:text-zinc-600">
          &copy; {new Date().getFullYear()} 天幕科技 版权所有
        </div>
      </div>
    </footer>
  );
}
