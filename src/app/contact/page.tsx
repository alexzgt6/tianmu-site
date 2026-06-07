"use client";

import { motion, useReducedMotion } from "motion/react";
import { Section } from "@/components/Motion";

const offices = [
  { city: "北京", address: "北京市海淀区中关村科技园 A座 12层" },
  { city: "上海", address: "上海市浦东新区张江高科技园区 B座 8层" },
  { city: "深圳", address: "深圳市南山区科技园南区 C座 15层" },
  { city: "杭州", address: "杭州市余杭区未来科技城 D座 6层" },
];

export default function Contact() {
  const reduce = useReducedMotion();

  return (
    <>
      <section className="border-b border-border bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">联系我们</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            期待与您的合作，请随时与我们取得联系
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-2xl font-bold text-foreground">发送消息</h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                填写表单，我们的团队将在 24 小时内与您联系
              </p>
              <form className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground">姓名</label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                      placeholder="请输入姓名"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">邮箱</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                      placeholder="请输入邮箱"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground">公司名称</label>
                  <input
                    type="text"
                    id="company"
                    className="mt-1 block w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                    placeholder="请输入公司名称"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">留言</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                    placeholder="请描述您的需求"
                  />
                </div>
                <button
                  type="button"
                  className="w-full rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:opacity-80"
                >
                  提交留言
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-2xl font-bold text-foreground">办公地点</h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">我们在全国多个城市设有办公室</p>
              <div className="mt-8 space-y-4">
                {offices.map((office, i) => (
                  <motion.div
                    key={office.city}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-2xl border border-border bg-background p-6"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{office.city}</h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">{office.address}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 rounded-2xl border border-border bg-background p-6"
              >
                <h3 className="font-semibold text-foreground">其他联系方式</h3>
                <div className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contact@tianmu.dev
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +86 400-888-8888
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}
