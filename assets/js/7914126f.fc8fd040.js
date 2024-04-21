"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4065],{786:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>a,frontMatter:()=>u,metadata:()=>l,toc:()=>o});var i=s(4848),r=s(8453);const u={},d="League API",l={id:"Endpoints/league",title:"League API",description:"The League API allows retrieval of league-related information.",source:"@site/docs/Endpoints/league.md",sourceDirName:"Endpoints",slug:"/Endpoints/league",permalink:"/poro-docs/Endpoints/league",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Endpoints/league.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LoL Status API",permalink:"/poro-docs/Endpoints/league-status"},next:{title:"Match API",permalink:"/poro-docs/Endpoints/match"}},t={},o=[{value:"Methods",id:"methods",level:2},{value:"<code>chall_queue(queue)</code>",id:"chall_queuequeue",level:3},{value:"<code>summoner(summoner_id)</code>",id:"summonersummoner_id",level:3},{value:"<code>league_entries(queue, tier, division, page)</code>",id:"league_entriesqueue-tier-division-page",level:3},{value:"<code>gm_queue(queue)</code>",id:"gm_queuequeue",level:3},{value:"<code>league_id(league_uuid)</code>",id:"league_idleague_uuid",level:3},{value:"<code>master_queue(queue)</code>",id:"master_queuequeue",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"league-api",children:"League API"}),"\n",(0,i.jsx)(n.p,{children:"The League API allows retrieval of league-related information."}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"chall_queuequeue",children:(0,i.jsx)(n.code,{children:"chall_queue(queue)"})}),"\n",(0,i.jsx)(n.p,{children:"This method retrieves challenger league by queue."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"queue"}),": The type of game queue (e.g., RANKED_SOLO_5x5, RANKED_FLEX_SR, etc.)."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"summonersummoner_id",children:(0,i.jsx)(n.code,{children:"summoner(summoner_id)"})}),"\n",(0,i.jsx)(n.p,{children:"This method retrieves league entries by summoner ID."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"summoner_id"}),": The unique identifier for the summoner."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"league_entriesqueue-tier-division-page",children:(0,i.jsx)(n.code,{children:"league_entries(queue, tier, division, page)"})}),"\n",(0,i.jsx)(n.p,{children:"This method retrieves league entries by queue, tier, division, and page."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"queue"}),": The type of game queue (e.g., RANKED_SOLO_5x5, RANKED_FLEX_SR, etc.)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tier"}),": The tier of the league (e.g., IRON, BRONZE, SILVER, etc.)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"division"}),": The division of the league (e.g., I, II, III, IV)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"page"}),": The page number for the league entries."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"gm_queuequeue",children:(0,i.jsx)(n.code,{children:"gm_queue(queue)"})}),"\n",(0,i.jsx)(n.p,{children:"This method retrieves grandmaster league by queue."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"queue"}),": The type of game queue (e.g., RANKED_SOLO_5x5, RANKED_FLEX_SR, etc.)."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"league_idleague_uuid",children:(0,i.jsx)(n.code,{children:"league_id(league_uuid)"})}),"\n",(0,i.jsx)(n.p,{children:"This method retrieves league by UUID."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"league_uuid"}),": The unique identifier for the league."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"master_queuequeue",children:(0,i.jsx)(n.code,{children:"master_queue(queue)"})}),"\n",(0,i.jsx)(n.p,{children:"This method retrieves master league by queue."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"queue"}),": The type of game queue (e.g., RANKED_SOLO_5x5, RANKED_FLEX_SR, etc.)."]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var i=s(6540);const r={},u=i.createContext(r);function d(e){const n=i.useContext(u);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(u.Provider,{value:n},e.children)}}}]);