"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9587],{9136:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var s=i(4848),r=i(8453);const o={},d="Champion Mastery",c={id:"Endpoints/champion-mastery",title:"Champion Mastery",description:"The Champion Mastery API allows retrieval of champion mastery information.",source:"@site/docs/Endpoints/champion-mastery.md",sourceDirName:"Endpoints",slug:"/Endpoints/champion-mastery",permalink:"/poro-docs/Endpoints/champion-mastery",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Endpoints/champion-mastery.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Account API",permalink:"/poro-docs/Endpoints/account"},next:{title:"Champion",permalink:"/poro-docs/Endpoints/champion"}},t={},h=[{value:"Methods",id:"methods",level:2},{value:"<code>by_puuid(puuid)</code>",id:"by_puuidpuuid",level:3},{value:"<code>by_puuid_champion(puuid, champion_id)</code>",id:"by_puuid_championpuuid-champion_id",level:3},{value:"<code>by_summoner(summoner_id)</code>",id:"by_summonersummoner_id",level:3},{value:"<code>champ_mastery(summoner_id, champion_id)</code>",id:"champ_masterysummoner_id-champion_id",level:3},{value:"<code>top_champs(summoner_id, count)</code>",id:"top_champssummoner_id-count",level:3},{value:"<code>total_score(summoner_id)</code>",id:"total_scoresummoner_id",level:3}];function m(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"champion-mastery",children:"Champion Mastery"}),"\n",(0,s.jsx)(n.p,{children:"The Champion Mastery API allows retrieval of champion mastery information."}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"by_puuidpuuid",children:(0,s.jsx)(n.code,{children:"by_puuid(puuid)"})}),"\n",(0,s.jsx)(n.p,{children:"This method retrieves champion mastery by PUUID."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"puuid"}),": The platform-agnostic identifier that is unique to each player across all Riot Games."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"by_puuid_championpuuid-champion_id",children:(0,s.jsx)(n.code,{children:"by_puuid_champion(puuid, champion_id)"})}),"\n",(0,s.jsx)(n.p,{children:"This method retrieves champion mastery by PUUID and champion ID."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"puuid"}),": The platform-agnostic identifier that is unique to each player across all Riot Games."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"champion_id"}),": The unique identifier for the champion."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"by_summonersummoner_id",children:(0,s.jsx)(n.code,{children:"by_summoner(summoner_id)"})}),"\n",(0,s.jsx)(n.p,{children:"This method retrieves champion mastery by summoner ID."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"summoner_id"}),": The unique identifier for the summoner."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"champ_masterysummoner_id-champion_id",children:(0,s.jsx)(n.code,{children:"champ_mastery(summoner_id, champion_id)"})}),"\n",(0,s.jsx)(n.p,{children:"This method retrieves champion mastery by summoner ID and champion ID."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"summoner_id"}),": The unique identifier for the summoner."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"champion_id"}),": The unique identifier for the champion."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"top_champssummoner_id-count",children:(0,s.jsx)(n.code,{children:"top_champs(summoner_id, count)"})}),"\n",(0,s.jsx)(n.p,{children:"This method retrieves top champion masteries by summoner ID."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"summoner_id"}),": The unique identifier for the summoner."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"count"}),": The number of top champion masteries to retrieve."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"total_scoresummoner_id",children:(0,s.jsx)(n.code,{children:"total_score(summoner_id)"})}),"\n",(0,s.jsx)(n.p,{children:"This method retrieves total champion mastery score by summoner ID."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"summoner_id"}),": The unique identifier for the summoner."]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>c});var s=i(6540);const r={},o=s.createContext(r);function d(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);