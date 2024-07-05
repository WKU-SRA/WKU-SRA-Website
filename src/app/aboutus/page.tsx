"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function AboutUs() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {content.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const content = [
  {
    title: "科技科研协会",
    description: (
      <>
        <p>

          科技科研协会是以营造学术氛围，培养科研能力为主要目标的多元化学生组织。本学年，学生科技科研协会按照既定规划组织和参与了多个和学术有关的讲座和活动，同时也积极响应了学校，学生事务部组织以及科研办的日常活动。
          新学年，科协的小伙伴们可以参与到以下活动中。
          首先是科研方面，我们会开展每周一次或每月两次的科研讲座活动，由学长学姐带领大家学习科研基本知识和技能，如CNN-LSTM模型等。同时，我们预计建立属于科协的科研平台，让大家提出想进行的科研课题，找到志同道合的同学，有经验的学长学姐将根据提出较多的1-2个主题进行指导。
          其次是活动组织方面，科协作为举办单位之一将负责每年一度的国际文化节。往年项目组同学与各个受邀教授和社团进行有效沟通并保持密切联系，也积极参与到策划和布景等活动中，保证了文化节活动的趣味性和同学参与度。
          第三在讲座举办方面，科协多次邀请来自商学院和理工学院的教授分享科研学术成果或为同学们答疑解惑，如法翔教授的讨论会等。秉持着对学术的热爱，科协多次邀请优秀学长学姐为同学们提供升学指导和语言学习指南，如吴哲学长分享会和孙学姐雅思分享会等。
          最后在协调学校工作方面，科协多次协助科研办举行科研日和青年科学家峰会等活动，迎接嘉宾并招募志愿者维持科研讲座秩序。
          科协在接下来的日子里会站在成员的角度多举办科研相关的活动，争取为同学们学习和参与科研提供更便利有用的知识和方法，期待大家与我们一起在科协将科研精神发扬光大。
        </p>

      </>
    ),
    badge: " SCIENCE AND RESEARCH ASSOCIATION",
    image: "/activity-research-hometown.jpg"
  },
  {
    title: "招新",
    description: (
      <>
        <p>
          温州肯恩大学科学研究协会（科协）近日在温州山根小镇轰趴馆成功举办了一场别开生面的破冰活动。这次活动旨在为新老会员提供一个轻松愉快的交流平台，增进彼此之间的了解和友谊。
        </p>
        <p>在温馨且活力四射的轰趴馆中，科协会员们通过参与各种互动游戏和团队建设活动，迅速拉近了距离。现场欢声笑语不断，大家不仅享受了美味的餐点和饮品，还通过互动游戏和团队挑战，增强了团队合作精神和凝聚力。
          本次活动的成功举办不仅加强了会员之间的联系，也为科协注入了新的活力。我们相信，通过这样的活动，科协将继续在科学研究和学术交流领域发挥重要作用。
          科协感谢所有支持和参与此次活动的朋友们，并期待在未来的活动中与更多热爱科学和研究的朋友们相聚，共同推动学术进步和创新发展。
        </p>
      </>
    ),
    badge: "2022 9 月 21 日",
    image:
      "/first-day-at-rsa.jpg"
  },

];
