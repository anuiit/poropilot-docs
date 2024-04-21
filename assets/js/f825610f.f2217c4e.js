"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1387],{5967:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var r=t(4848),i=t(8453);const s={},o="Summoner",d={id:"Endpoints/summoner",title:"Summoner",description:"The Summoner API is a part of the PoroPilot library that provides methods to retrieve information about a summoner in the game League of Legends.",source:"@site/docs/Endpoints/summoner.md",sourceDirName:"Endpoints",slug:"/Endpoints/summoner",permalink:"/poro-docs/Endpoints/summoner",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Endpoints/summoner.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Spectator API",permalink:"/poro-docs/Endpoints/spectator"},next:{title:"initialization",permalink:"/poro-docs/initialization"}},c={},a=[{value:"Methods",id:"methods",level:2},{value:"<code>by_account(encrypted_account_id)</code>",id:"by_accountencrypted_account_id",level:3},{value:"<code>by_name(summoner_name)</code>",id:"by_namesummoner_name",level:3},{value:"<code>by_puuid(encrypted_puuid)</code>",id:"by_puuidencrypted_puuid",level:3},{value:"<code>by_id(encrypted_summoner_id)</code>",id:"by_idencrypted_summoner_id",level:3}];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"summoner",children:"Summoner"}),"\n",(0,r.jsx)(n.p,{children:"The Summoner API is a part of the PoroPilot library that provides methods to retrieve information about a summoner in the game League of Legends."}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"by_accountencrypted_account_id",children:(0,r.jsx)(n.code,{children:"by_account(encrypted_account_id)"})}),"\n",(0,r.jsx)(n.p,{children:"This method retrieves summoner information using the encrypted account ID."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"encrypted_account_id"}),": The encrypted account ID is a unique identifier associated with each player's account."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"by_namesummoner_name",children:(0,r.jsx)(n.code,{children:"by_name(summoner_name)"})}),"\n",(0,r.jsx)(n.p,{children:"This method retrieves summoner information using the summoner's name."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"summoner_name"}),": This is the name that players choose for themselves when creating an account."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"by_puuidencrypted_puuid",children:(0,r.jsx)(n.code,{children:"by_puuid(encrypted_puuid)"})}),"\n",(0,r.jsx)(n.p,{children:"This method retrieves summoner information using the encrypted PUUID."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"encrypted_puuid"}),": The PUUID is a platform-agnostic identifier that is unique to each player across all Riot Games."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"by_idencrypted_summoner_id",children:(0,r.jsx)(n.code,{children:"by_id(encrypted_summoner_id)"})}),"\n",(0,r.jsx)(n.p,{children:"This method retrieves summoner information using the encrypted summoner ID."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"encrypted_summoner_id"}),": The summoner ID is a unique identifier associated with each player's summoner, which is the in-game avatar that represents the player in the game."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"All these methods require the encrypted versions of the identifiers, which are used to ensure the security and privacy of the players' data."})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var r=t(6540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);