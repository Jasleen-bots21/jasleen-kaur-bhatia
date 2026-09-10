"use client";
import {useEffect,useRef,useState} from "react";
import {experience} from "@/data/experience";

export function JourneyStory(){
 const [active,setActive]=useState(0);const root=useRef<HTMLDivElement>(null);
 useEffect(()=>{const nodes=root.current?.querySelectorAll("[data-step]");if(!nodes)return;const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)setActive(Number((e.target as HTMLElement).dataset.step))}),{rootMargin:"-35% 0px -45%",threshold:.1});nodes.forEach(n=>observer.observe(n));return()=>observer.disconnect()},[]);
 return <div className="journey-story" ref={root} style={{"--progress":`${(active/(experience.length-1))*100}%`} as React.CSSProperties}>
  <div className="journey-rail" aria-hidden="true"><div className="rail-base"/><div className="rail-progress"/>{experience.map((item,i)=><button key={item.period} className={i<=active?"passed":""} style={{top:`${(i/(experience.length-1))*100}%`}} onClick={()=>document.querySelector(`[data-step='${i}']`)?.scrollIntoView({behavior:"smooth",block:"center"})} tabIndex={-1}><span>{String(i+1).padStart(2,"0")}</span></button>)}</div>
  <div className="journey-chapters">{experience.map((item,i)=><article data-step={i} key={`${item.organization}-${item.period}`} className={i===active?"is-active":""}>
   <div className="chapter-meta"><span>{item.period}</span><span>{item.location}</span></div><div className="chapter-copy"><p className="chapter-label">CHAPTER {String(i+1).padStart(2,"0")} · {item.stage}</p><h3>{item.chapter}</h3><h4>{item.organization}</h4><p className="chapter-role">{item.role} · {item.theme}</p><p>{item.highlight}</p></div>
   {i===1&&<div className="transition-card"><span>2014–2021</span><strong>6+ years building with data in India</strong><b>INDIA</b></div>}
   {i===2&&<div className="transition-card move"><span>THE PIVOT</span><strong>Professional experience → Master’s in Data Science</strong><div className="travel-line"><b>INDIA</b><i/><b>CHICAGO</b></div></div>}
   {i===3&&<div className="parallel-card"><span>MASTER’S</span><i>+</i><span>INTERNSHIP</span><strong>Learning and applying, in parallel</strong></div>}
  </article>)}</div>
  <aside className="journey-now"><span>NOW TRACKING</span><strong>{experience[active].stage}</strong><small>{experience[active].period}</small></aside>
 </div>
}
