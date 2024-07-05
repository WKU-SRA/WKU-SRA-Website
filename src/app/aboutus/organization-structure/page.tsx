"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-box";
import { cn } from "@/lib/utils";
import { Highlight } from "@/components/ui/hero-hilght";
import { Organization } from "@/components/OrganizationArchi";

export default function OrganizationStructure() {
    return (
        <div className="min-h-screen z-0 relative w-full overflow-hidden bg-slate-800 flex flex-col items-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />

            <h1 className={cn("md:text-4xl text-xl m-4 text-white relative z-20")}>
                组织架构
            </h1>

            <p className={cn("md:text-2xl  text-xl m-4 text-white relative z-20")}>
                温肯科协是一个致力于促进科学研究与学术探索的组织。协会的组织架构设计旨在有效管理和推动各项活动，确保会员和外界对我们使命的理解和认同。
            </p>

            <h1 className={cn("md:text-4xl text-xl m-4 text-white relative z-20")}>
                领导团队与决策机构
            </h1>

            <p className={cn("md:text-2xl  text-xl m-4 text-white relative z-20")}>
                温肯科协是一个致力于<Highlight delay={0} duration={0.5}>促进科学研究与学术探索</Highlight>的组织。协会的组织架构设计旨在有效管理和推动各项活动，确保会员和外界对我们使命的理解和认同。
                协会的领导团队由理事会和主席团组成，负责制定和执行战略方向。理事会汇集了来自不同领域和专业背景的成员，提供战略指导和决策支持。主席团则负责日常管理和协调各部门的运作，确保各项工作顺利进行。
            </p>

            <h1 className={cn("md:text-4xl text-xl m-4 text-white relative z-20")}>
                部门和职能
            </h1>

            <Organization />
        </div>
    );
}
