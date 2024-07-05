"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-hilght";
 
export default function Intro() {
  return (
    <HeroHighlight>
       <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className=" px-4 xxsm:text-xl xsm:text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-neutral-200 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto" >
      欢迎加入温州肯恩大学科学研究协会（WKU-SRA），一个充满激情和创新的学术社区！
      在这里，{" "}<Highlight className="text-black dark:text-white">
        我们致力于推动科学研究的发展，鼓励跨学科合作，培养下一代科研人才。
        </Highlight> 无论你是对前沿科技充满热情，
      还是希望在学术领域留下自己的印记，我们都为你提供平台与资源，<Highlight className="text-black dark:text-white">
      让你的科研梦想成为现实。
      加入我们，一起探索未知的科学领域，共同创造美好的未来！
        </Highlight>
        
      </motion.h1>
    </HeroHighlight>
  );
}
