(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{6117:function(s,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return a(2792)}])},3784:function(s,e,a){"use strict";var t=a(5893),n=a(7294);let i=s=>{let{slot:e,format:a,responsive:i,style:l={display:"block"}}=s;return(0,n.useEffect)(()=>{var s;window.adsbygoogle=window.adsbygoogle||[],null===(s=window.adsbygoogle)||void 0===s||s.push({})},[]),(0,t.jsx)("ins",{className:"adsbygoogle",style:l,"data-ad-client":"ca-pub-5836961899645264","data-ad-slot":e,"data-ad-format":a,"data-full-width-responsive":i})};e.Z=i},195:function(s,e,a){"use strict";a.d(e,{Z:function(){return x}});var t=a(5893),n=a(2962),i=a(5675),l=a.n(i),r=a(6855),d=a(1664),c=a.n(d),o=a(6893),h=a(9352);function m(){return(0,t.jsxs)("div",{className:"fixed z-10 float-left grid h-[100dvh] w-16 grid-rows-[min-content_1fr_min-content] border-r-2 border-zinc-600 bg-primary",children:[(0,t.jsx)("div",{className:"flex h-20",children:(0,t.jsx)(c(),{href:"/",className:"btn-ghost no-animation btn-circle btn m-auto",children:(0,t.jsx)(l(),{src:"/assets/logos/small/logowhite.svg",width:32,height:32,alt:"logo"})})}),(0,t.jsx)("div",{className:"min-h-0 overflow-y-auto",children:(0,t.jsx)("div",{className:"flex flex-col items-center gap-1.5",children:[{path:"/dashboard",icon:o.m6D},{path:"/dashboard/settings",icon:o.nbt},{path:"/dashboard/aria",icon:h.fw0}].map(s=>(0,t.jsx)(c(),{href:s.path,className:"btn-ghost no-animation btn-circle btn",children:s.icon&&(0,t.jsx)(s.icon,{className:"h-[1.8rem] w-[1.8rem]"})},s.path))})}),(0,t.jsx)("div",{className:"flex h-20",children:(0,t.jsx)("div",{className:"m-auto text-white",children:(0,t.jsx)(r.UserButton,{})})})]})}function x(s){let{children:e}=s;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.PB,{description:"Prank.GG's Dashboard page is the ultimate tool for pranksters! With our easy-to-use interface and customizable options, you'll be able to plan, execute, and track your pranks like a pro. Whether you're a seasoned prankster or just starting out, our dashboard has everything you need to take your pranking game to the next level. So why wait? Sign up today and start pranking like a boss!",noindex:!0,nofollow:!0}),(0,t.jsx)(m,{}),(0,t.jsx)("div",{className:"flex min-h-[100dvh] w-full pl-[4.5rem] lg:pl-16",children:(0,t.jsx)("div",{className:"min-h-[100dvh] w-full p-8 lg:p-16",children:e})})]})}},2792:function(s,e,a){"use strict";a.r(e),a.d(e,{default:function(){return j}});var t=a(5893),n=a(6855),i=a(195);function l(){return(0,t.jsxs)("div",{className:"mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4",children:[(0,t.jsx)("div",{className:"stats",children:(0,t.jsxs)("div",{className:"stat bg-primary",children:[(0,t.jsx)("div",{className:"stat-title",children:"Total Page Views"}),(0,t.jsx)("div",{className:"stat-value",children:"89,400"}),(0,t.jsx)("div",{className:"stat-desc",children:"21% more than last month"})]})}),(0,t.jsx)("div",{className:"stats",children:(0,t.jsxs)("div",{className:"stat bg-primary",children:[(0,t.jsx)("div",{className:"stat-title",children:"Total Page Views"}),(0,t.jsx)("div",{className:"stat-value",children:"89,400"}),(0,t.jsx)("div",{className:"stat-desc",children:"21% more than last month"})]})}),(0,t.jsx)("div",{className:"stats",children:(0,t.jsxs)("div",{className:"stat bg-primary",children:[(0,t.jsx)("div",{className:"stat-title",children:"Total Page Views"}),(0,t.jsx)("div",{className:"stat-value",children:"89,400"}),(0,t.jsx)("div",{className:"stat-desc",children:"21% more than last month"})]})}),(0,t.jsx)("div",{className:"stats",children:(0,t.jsxs)("div",{className:"stat bg-primary",children:[(0,t.jsx)("div",{className:"stat-title",children:"Total Page Views"}),(0,t.jsx)("div",{className:"stat-value",children:"89,400"}),(0,t.jsx)("div",{className:"stat-desc",children:"21% more than last month"})]})})]})}var r=a(9583);function d(s){let{links:e}=s;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"rounded-xl bg-primary p-6",children:(0,t.jsx)("div",{className:"flex flex-wrap gap-4",children:e.map(s=>(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[s.type.includes("DISCORD")&&(0,t.jsx)(r.j2d,{size:32}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"text-sm",children:[s.domain,"/",s.id]}),(0,t.jsxs)("p",{className:"text-xs",children:[s.createdAt.toDateString(),", ",s.type]})]})]},s.id))})})})}var c=a(6976),o=a(8193);function h(){return(0,t.jsx)("div",{className:"rounded-xl bg-primary p-6",children:(0,t.jsx)("div",{className:"flex items-center justify-center",children:(0,t.jsx)(o.Z7b,{size:32,className:"animate-spin"})})})}var m=a(3784),x=a(2962);let u=()=>{let{isLoaded:s,isSignedIn:e,user:a}=(0,n.useUser)(),{data:i}=c.h.pranks.getAll.useQuery();return s&&e?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x.PB,{title:"Home - Dashboard - Prank.GG"}),(0,t.jsxs)("h1",{className:"text-3xl font-semibold",children:[function(){let s=new Date().getHours();return s<5?"Night":s<12?"Morning":s<18?"Afternoon":"Evening"}(),", ",a.username]}),(0,t.jsx)("div",{className:"my-8",children:(0,t.jsx)(m.Z,{slot:"2168699811",format:"auto",responsive:!0})}),(0,t.jsx)(l,{}),(0,t.jsx)("p",{className:"mt-8 mb-2 text-2xl font-semibold",children:"Your Links"}),i?(0,t.jsx)(d,{links:[...i]}):(0,t.jsx)(h,{})]}):null};var j=u;u.getLayout=function(s){return(0,t.jsx)(i.Z,{children:s})}}},function(s){s.O(0,[937,445,617,61,893,774,888,179],function(){return s(s.s=6117)}),_N_E=s.O()}]);