import Link from "next/link";

const features = [
  {
    title: "实时视频分析",
    desc: "支持RTSP/RTMP/GB28181等多种协议接入，实时视频流智能分析，异常事件秒级告警。",
  },
  {
    title: "图像识别引擎",
    desc: "高精度图像分类、目标检测、OCR识别，支持自定义模型训练。",
  },
  {
    title: "数据可视化",
    desc: "丰富的可视化组件库，灵活配置数据看板，支持大屏展示。",
  },
  {
    title: "API开放平台",
    desc: "RESTful API接口，主流SDK支持，快速集成到现有系统。",
  },
  {
    title: "私有化部署",
    desc: "支持本地服务器/私有云部署，数据不出域，满足合规要求。",
  },
  {
    title: "智能运维",
    desc: "自动巡检、故障预测、性能监控，降低运维成本。",
  },
];

const plans = [
  {
    name: "基础版",
    price: "¥9,800",
    period: "/年",
    desc: "适合小型团队入门体验",
    features: ["每日 10,000 次 API 调用", "5 路视频流接入", "基础数据看板", "邮件告警通知", "5 人协作"],
  },
  {
    name: "专业版",
    price: "¥49,800",
    period: "/年",
    desc: "适合成长型企业核心业务",
    features: ["每日 100,000 次 API 调用", "50 路视频流接入", "高级数据看板", "多通道告警", "不限协作人数", "专属技术支持"],
    popular: true,
  },
  {
    name: "企业版",
    price: "定制报价",
    period: "",
    desc: "适合大型企业定制需求",
    features: ["不限 API 调用次数", "不限视频流接入", "私有化部署", "定制模型训练", "专属客户经理", "SLA 保障"],
  },
];

export default function Product() {
  return (
    <>
      <section className="border-b border-zinc-200 bg-zinc-50 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">产品与价格</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
            灵活的方案，满足不同规模企业的智能视觉需求
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">功能特性</h2>
            <p className="mt-4 text-lg text-zinc-600">全方位智能视觉解决方案</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg">
                <h3 className="mb-3 text-lg font-semibold text-zinc-900">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">选择适合你的方案</h2>
            <p className="mt-4 text-lg text-zinc-600">所有方案均包含 14 天免费试用</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border bg-white p-8 ${
                  plan.popular
                    ? "border-blue-500 shadow-xl shadow-blue-100/50 ring-1 ring-blue-500"
                    : "border-zinc-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
                    最热门
                  </div>
                )}
                <h3 className="text-xl font-semibold text-zinc-900">{plan.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">{plan.desc}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-zinc-900">{plan.price}</span>
                  {plan.period && <span className="text-sm text-zinc-500">{plan.period}</span>}
                </div>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-sm text-zinc-600">
                      <svg className="h-4 w-4 flex-shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-zinc-900 text-white hover:bg-zinc-700"
                      : "border border-zinc-300 text-zinc-700 hover:bg-zinc-100"
                  }`}
                >
                  立即咨询
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
