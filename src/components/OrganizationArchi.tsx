import { HoverEffect } from "./ui/card-hover";

export function Organization() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "理科学术部",
    description:
      "推动科学研究的发展，组织各类学术活动促进会员间的学术交流与合作。",
    link: "/",
  },
  {
    title: "商科学术部",
    description:
      "🚀 加入商科学术部，开启你的数据之旅！",
    link: "/aboutus/business-academic.tsx",
  },
  {
    title: "宣传部",
    description:
      "负责协会的对外宣传和品牌建设，通过各种渠道传播协会的活动和成果",
    link: "/",
  },
  {
    title: "秘书部",
    description:
      "管理协会的日常行政事务，包括会议组织、文件管理和内部沟通",
    link: "/",
  },
  {
    title: "公关部",
    description:
      "维护与外界各方面的良好关系，策划公关活动以支持协会的发展",
    link: "/",
  },
  {
    title: "策划部",
    description:
      "策划组织科协活动",
    link: "/",
  },
];
