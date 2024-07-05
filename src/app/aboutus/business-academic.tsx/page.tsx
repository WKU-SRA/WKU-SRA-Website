'use client'
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatarImg from './_datas/avatar.jpg';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import { Boxes } from '@/components/ui/background-box';
import { Box } from 'lucide-react';

export default function Page() {
    return (

        <main className="min-h-screen z-0 relative w-full overflow-hidden bg-slate-800 flex flex-col items-center rounded-lg ">
            <Boxes />
            <div className="flex flex-col md:items-baseline items-center md:flex-row  justify-around mx-auto px-10 py-12">
                <BackgroundGradient className="rounded-[22px]  max-w-sm p-2 md:p-1 sm:p-5 bg-white dark:bg-zinc-900">
                    <Card className="bg-slate-100  shadow-lg rounded-lg overflow-hidden">
                        <CardHeader className="flex items-center space-x-4 p-5 border-b">
                            <Avatar>
                                <AvatarImage src={avatarImg.src} alt="Ethan" className="w-12 h-12 rounded-full" />
                                <AvatarFallback>马</AvatarFallback>
                            </Avatar>
                            <span className="font-semibold text-lg"></span>
                        </CardHeader>
                        <CardContent className="p-5">
                            <CardTitle className="text-xl font-bold">马文轩（Ethan） 26级 应用数学</CardTitle>
                            <CardDescription>
                                <p className="mt-2">研究项目：</p>
                                <ul className="list-disc pl-5">
                                    <li>使用NLP大模型分析市场情绪</li>
                                    <li>机器学习股票预测</li>
                                </ul>
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="p-5 border-t">
                            <a href="https://blog.csdn.net/weixin_74241638?spm=1000.2115.3001.5343" target="CSDN" rel="noopener noreferrer">
                                <img className="w-12 h-6" src='/CSDN_Logo.svg.png'></img></a>
                        </CardFooter>
                    </Card>
                </BackgroundGradient >
                <div className="flex items-center justify-center">
                    <TextRevealCard
                        revealText="Starts Here"
                        text="Future of business innovation "
                    >
                        <TextRevealCardTitle>
                        加入商科学术部，开启你的数据之旅！
                        </TextRevealCardTitle>
                        <TextRevealCardDescription>
       <p>📊 量化学习，让数据为你说话！在商科学术部，我们不仅仅是学习数字，我们是在玩转数字！我们提供最前沿的量化分析工具和数据可视化技巧，让你的商业洞察力飙升，为未来的职场竞争加分！</p> 

       <p>🔍 提升能力，为梦想加码！ 想要在商界大展拳脚？来这里就对了！我们不仅教授你如何分析数据，更教你如何运用这些数据来制定战略，让你在商科领域如鱼得水。</p>

       <p>👥 寻找学习伙伴，一起成长！ 在这里，你不仅能学到知识，还能找到志同道合的伙伴。一起头脑风暴，一起参加商科比赛，一起建模，一起走向成功！</p> 

       <p>🏆 参加比赛，展现你的才华！ 商科学术部是展示你才华的舞台。无论是校内的商科竞赛还是国际建模大赛，我们都将为你提供支持，让你的才能得到认可。</p> 

       <p>🌟 加入我们，让未来不再遥远！ 别让你的潜力只停留在想象中。加入商科学术部，让我们一起将梦想变为现实，让未来触手可及！</p> 
    </TextRevealCardDescription>
                    </TextRevealCard>

                </div>
            </div>

        </main>
    );
}