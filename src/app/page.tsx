import Link from "next/link";

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "智能视觉识别",
    desc: "基于深度学习算法，毫秒级精准识别，覆盖人脸、物体、场景等多维分析。",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "数据分析看板",
    desc: "实时数据可视化，多维度业务洞察，让决策有据可依。",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "安全合规",
    desc: "企业级数据加密与隐私保护，通过等保三级认证。",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "极速部署",
    desc: "支持公有云/私有化部署，最快30分钟完成接入。",
  },
];

const stats = [
  { label: "企业客户", value: "2000+" },
  { label: "日均API调用", value: "10亿+" },
  { label: "识别准确率", value: "99.7%" },
  { label: "覆盖城市", value: "300+" },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white pb-32 pt-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
              全新 3.0 版本正式发布
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              让科技守护
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">每一次仰望</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              天幕智能视觉平台，以先进的计算机视觉与大数据技术，为企业提供实时、精准、安全的视觉智能解决方案。
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/product"
                className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-900/20 transition-all hover:bg-zinc-700 hover:shadow-xl"
              >
                了解更多
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-zinc-300 px-8 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100"
              >
                预约演示
              </Link>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-zinc-200 bg-white p-6 text-center">
                <div className="text-2xl font-bold text-zinc-900 sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              核心功能
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              四大核心模块，全面覆盖企业视觉智能需求
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            准备好开启智能视觉之旅了吗？
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
            立即联系我们的团队，获取专属定制方案
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-200"
            >
              联系我们
            </Link>
            <Link
              href="/product"
              className="rounded-full border border-zinc-600 px-8 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
            >
              查看产品
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
