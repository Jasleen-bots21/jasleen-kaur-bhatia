import type { Metadata } from "next";
import { Geist,Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans=Geist({variable:"--font-geist-sans",subsets:["latin"]}); const geistMono=Geist_Mono({variable:"--font-geist-mono",subsets:["latin"]});
const siteUrl=process.env.NEXT_PUBLIC_SITE_URL??"https://jasleen-kaur-bhatia.perky-dell-4939.chatgpt.site";
export const metadata:Metadata={
 metadataBase:new URL(siteUrl),
 title:"Jasleen Kaur Bhatia | Data Scientist & Applied ML Engineer",
 description:"Data Scientist specializing in Machine Learning, NLP, Generative AI, LLM evaluation, experimentation, and enterprise AI systems.",
 alternates:{canonical:"/"},
 openGraph:{title:"Jasleen Kaur Bhatia | Data Scientist & Applied ML Engineer",description:"Machine Learning, NLP, Generative AI, evaluation, and enterprise AI systems.",type:"website",url:"/",images:[{url:"/og.png",width:1792,height:1024,alt:"Jasleen Kaur Bhatia — Data Scientist and Applied ML Engineer"}]},
 twitter:{card:"summary_large_image",title:"Jasleen Kaur Bhatia | Data Scientist & Applied ML Engineer",description:"Machine Learning, NLP, Generative AI, evaluation, and enterprise AI systems.",images:["/og.png"]},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>}
