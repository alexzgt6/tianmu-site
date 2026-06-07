"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { RevealStagger, Section } from "@/components/Motion";

const stats = [
  { label: "企业客户", value: "2000+" },
  { label: "日均API调用", value: "10亿+" },
  { label: "识别准确率", value: "99.7%" },
  { label: "覆盖城市", value: "300+" },
];

const features = [
  {
    title: "智能视觉识别",
    desc: "基于深度学习算法，毫秒级精准识别，覆盖人脸、物体、场景等多维分析。",
  },
  {
    title: "数据分析看板",
    desc: "实时数据可视化，多维度业务洞察，让决策有据可依。",
  },
  {
    title: "安全合规",
    desc: "企业级数据加密与隐私保护，通过等保三级认证。",
  },
  {
    title: "极速部署",
    desc: "支持公有云和私有化部署，最快30分钟完成接入。",
  },
];

const benefits = [
  {
    title: "精准识别",
    desc: "自研算法在多个公开数据集上刷新纪录，复杂场景下依然稳定。",
    image: "https://picsum.photos/seed/vision-ai/800/600",
  },
  {
    title: "实时响应",
    desc: "端到端延迟低于200ms，满足安防、金融等场景的严苛要求。",
    image: "https://picsum.photos/seed/real-time/800/600",
  },
];

export default function Home() {
  const reduce = useReducedMotion();

  return (
    <>
      <section className="relative overflow-hidden pb-32 pt-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                让科技守护
                <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] bg-clip-text text-transparent">每一次仰望</span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                天幕智能视觉平台，以先进的计算机视觉与大数据技术，为企业提供实时、精准、安全的视觉智能解决方案。
              </p>
              <div className="mt-10 flex items-center gap-4">
                <Link
                  href="/product"
                  className="rounded-full bg-foreground px-8 py-3 text-sm font-semibold text-background shadow-lg transition-all hover:opacity-80"
                >
                  了解更多
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-border px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
                >
                  预约演示
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="https://picsum.photos/seed/tianmu-hero/800/600"
                  alt="天幕智能视觉平台"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-background p-6 shadow-lg">
                <div className="text-3xl font-bold text-[var(--accent)]">99.7%</div>
                <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">识别准确率</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <RevealStagger className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-background p-6 text-center"
              >
                <div className="text-2xl font-bold text-foreground sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </RevealStagger>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">核心功能</h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              四大核心模块，全面覆盖企业视觉智能需求
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {features.slice(0, 2).map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-border bg-background p-8 transition-all hover:shadow-lg"
              >
                <h3 className="mb-3 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{feature.desc}</p>
              </motion.div>
            ))}
            <div className="grid gap-6 sm:col-span-2 sm:grid-cols-2">
              {features.slice(2).map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border border-border bg-background p-8 transition-all hover:shadow-lg"
                >
                  <h3 className="mb-3 text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {benefits.map((benefit, i) => (
        <Section key={benefit.title} className={i % 2 === 0 ? "border-t border-border" : "border-t border-border bg-surface"}>
          <div className="mx-auto max-w-6xl px-6">
            <div className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              <motion.div
                initial={reduce ? false : { opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={i % 2 === 1 ? "lg:col-start-2" : ""}
              >
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{benefit.title}</h2>
                <p className="mt-4 max-w-md text-lg text-zinc-600 dark:text-zinc-400">{benefit.desc}</p>
              </motion.div>
              <motion.div
                initial={reduce ? false : { opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img src={benefit.image} alt={benefit.title} className="h-full w-full object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </Section>
      ))}

      <Section className="border-t border-border bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            准备好开启智能视觉之旅了吗？
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
            立即联系我们的团队，获取专属定制方案
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-background px-8 py-3 text-sm font-semibold text-foreground transition-all hover:opacity-80"
            >
              联系我们
            </Link>
            <Link
              href="/product"
              className="rounded-full border border-zinc-600 px-8 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-400 hover:text-white"
            >
              查看产品
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
