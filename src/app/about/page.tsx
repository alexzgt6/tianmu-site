const team = [
  { name: "张明远", role: "创始人 & CEO", bio: "前Google AI研究员，计算机视觉博士" },
  { name: "李思雨", role: "CTO", bio: "前阿里巴巴高级技术专家，10年AI架构经验" },
  { name: "王浩然", role: "首席科学家", bio: "IEEE Fellow，顶级视觉会议CVPR 常任评委" },
  { name: "陈晓彤", role: "产品副总裁", bio: "前字节跳动产品总监，主导过亿级用户产品" },
];

const timeline = [
  { year: "2019", event: "天幕科技成立，获得天使轮融资" },
  { year: "2020", event: "发布天幕1.0，首批50家企业客户" },
  { year: "2021", event: "完成A轮融资，客户突破500家" },
  { year: "2022", event: "天幕2.0发布，获等保三级认证" },
  { year: "2023", event: "B轮融资，海外业务正式启动" },
  { year: "2024", event: "日API调用量突破10亿，服务2000+企业" },
];

export default function About() {
  return (
    <>
      <section className="border-b border-zinc-200 bg-zinc-50 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">关于天幕</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
            让视觉智能赋能每一个行业
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">我们的使命</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              天幕科技成立于2019年，是一家专注于计算机视觉与人工智能的高科技企业。我们致力于将前沿的视觉智能技术转化为易用、可靠的产品，帮助企业实现智能化升级。
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              &ldquo;天幕&rdquo;二字寓意着如天空般广阔的视野和无微不至的守护。我们相信，科技的温度在于它能在不经意间守护每个人的生活。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">发展历程</h2>
          </div>
          <div className="mx-auto max-w-3xl">
            {timeline.map((item, i) => (
              <div key={item.year} className="relative flex gap-8 pb-12 last:pb-0">
                {i < timeline.length - 1 && (
                  <div className="absolute left-[19px] top-10 h-full w-px bg-zinc-200" />
                )}
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-sm font-semibold text-blue-600">
                  {item.year.slice(2)}
                </div>
                <div className="pt-1.5">
                  <div className="text-sm font-semibold text-zinc-900">{item.year}</div>
                  <p className="mt-1 text-zinc-600">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">核心团队</h2>
            <p className="mt-4 text-lg text-zinc-600">汇聚顶尖AI人才，驱动技术创新</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl border border-zinc-200 bg-white p-6 text-center transition-all hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 text-2xl font-bold text-blue-600">
                  {member.name[0]}
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-blue-600">{member.role}</p>
                <p className="mt-2 text-sm text-zinc-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
