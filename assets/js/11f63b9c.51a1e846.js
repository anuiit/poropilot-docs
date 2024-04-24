"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[458],{5321:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>a,frontMatter:()=>u,metadata:()=>d,toc:()=>o});var r=s(4848),i=s(8453);const u={},l="League",d={id:"APIs/league",title:"League",description:"The League API allows retrieval of league-related information.",source:"@site/docs/APIs/league.md",sourceDirName:"APIs",slug:"/APIs/league",permalink:"/poropilot-docs/APIs/league",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/APIs/league.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Status",permalink:"/poropilot-docs/APIs/league-status"},next:{title:"Match",permalink:"/poropilot-docs/APIs/match"}},t={},o=[{value:"Methods",id:"methods",level:2},{value:"<code>chall_queue(queue)</code>",id:"chall_queuequeue",level:3},{value:"<code>summoner(summoner_id)</code>",id:"summonersummoner_id",level:3},{value:"<code>league_entries(queue, tier, division, page)</code>",id:"league_entriesqueue-tier-division-page",level:3},{value:"<code>gm_queue(queue)</code>",id:"gm_queuequeue",level:3},{value:"<code>league_id(league_uuid)</code>",id:"league_idleague_uuid",level:3},{value:"<code>master_queue(queue)</code>",id:"master_queuequeue",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"league",children:"League"}),"\n",(0,r.jsx)(n.p,{children:"The League API allows retrieval of league-related information."}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"chall_queuequeue",children:(0,r.jsx)(n.code,{children:"chall_queue(queue)"})}),"\n",(0,r.jsx)(n.p,{children:"This method retrieves challenger league by queue."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"queue"}),": The type of game queue (e.g., RANKED_SOLO_5x5, RANKED_FLEX_SR, etc.)."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"summonersummoner_id",children:(0,r.jsx)(n.code,{children:"summoner(summoner_id)"})}),"\n",(0,r.jsx)(n.p,{children:"This method retrieves league entries by summoner ID."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"summoner_id"}),": The unique identifier for the summoner."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"league_entriesqueue-tier-division-page",children:(0,r.jsx)(n.code,{children:"league_entries(queue, tier, division, page)"})}),"\n",(0,r.jsx)(n.p,{children:"This method retrieves league entries by queue, tier, division, and page."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"queue"}),": The type of game queue (e.g., RANKED_SOLO_5x5, RANKED_FLEX_SR, etc.)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"tier"}),": The tier of the league (e.g., IRON, BRONZE, SILVER, etc.)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"division"}),": The division of the league (e.g., I, II, III, IV)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"page"}),": The page number for the league entries."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"gm_queuequeue",children:(0,r.jsx)(n.code,{children:"gm_queue(queue)"})}),"\n",(0,r.jsx)(n.p,{children:"This method retrieves grandmaster league by queue."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"queue"}),": The type of game queue (e.g., RANKED_SOLO_5x5, RANKED_FLEX_SR, etc.)."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"league_idleague_uuid",children:(0,r.jsx)(n.code,{children:"league_id(league_uuid)"})}),"\n",(0,r.jsx)(n.p,{children:"This method retrieves league by UUID."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"league_uuid"}),": The unique identifier for the league."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"master_queuequeue",children:(0,r.jsx)(n.code,{children:"master_queue(queue)"})}),"\n",(0,r.jsx)(n.p,{children:"This method retrieves master league by queue."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"queue"}),": The type of game queue (e.g., RANKED_SOLO_5x5, RANKED_FLEX_SR, etc.)."]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var r=s(6540);const i={},u=r.createContext(i);function l(e){const n=r.useContext(u);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(u.Provider,{value:n},e.children)}}}]);