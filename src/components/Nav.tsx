"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "关于我们",
    href: "/aboutus",
    description:
      "科协介绍",
  },
  {
    title: "组织架构",
    href: "/aboutus/organization-structure",
    description:
      "科协组织架构",
  },
  {
    title: "开展活动",
    href: "/aboutus/activities",
    description:
      "科协举办承办活动",
  },
]

export function NavigationBar() {
  return (
    <div className="flex  w-full justify-center">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>所属机构</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="https://www.wku.edu.cn/zh-hans"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      温州肯恩大学
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    温州肯恩大学是中美高等教育合作交流的杰出典范。作为促进中美文化交流的中心，学校的使命基于两大原则：广纳学子，追求卓越。
                    使命中的广纳学子，意味着提供机会，让来自中国各地的学子在全英文大学接受国际化的高等教育。广纳学子也意味着，来自世界各地尤其是美国的优秀学子有机会在华学习国际化课程，同时满足认证机构对美国肯恩大学及其温州项目的认证要求。
                    使命中的追求卓越，意味着在中国温州依托世界级的专业、世界级的师资、世界级的设施，提供世界级的教育。
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="https://www.wku.edu.cn/zh-hans/jgsz/orsp" title="温肯科研办">
              为来自全球范围的卓越学术和科研力量提供更专业的服务，努力探索更高效的科研合作机制，为温州肯恩大学成为地区问题解决方案的领跑者做出贡献。
              </ListItem>
              <ListItem href="https://www.wku.edu.cn/zh-hans/jgsz/xssw/clubs-and-organizations" title="温州肯恩大学学生组织">
              学生社团和组织是校园生活的重要组成部分
              </ListItem>
             
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>关于我们</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/future" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            未来规划
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contactus" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            联系我们
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
