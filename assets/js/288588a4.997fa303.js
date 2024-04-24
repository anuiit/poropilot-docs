"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[479],{1459:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var n=i(4848),r=i(8453);const s={},c="Match",o={id:"APIs/match",title:"Match",description:"The Match API allows retrieval of match-related information.",source:"@site/docs/APIs/match.md",sourceDirName:"APIs",slug:"/APIs/match",permalink:"/poropilot-docs/APIs/match",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/APIs/match.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"League",permalink:"/poropilot-docs/APIs/league"},next:{title:"Spectator",permalink:"/poropilot-docs/APIs/spectator"}},a={},h=[{value:"Methods",id:"methods",level:2},{value:"<code>by_match_id(match_id)</code>",id:"by_match_idmatch_id",level:3},{value:"<code>by_match_id_timeline(match_id)</code>",id:"by_match_id_timelinematch_id",level:3},{value:"<code>by_puuid_matchlist(puuid, startTime, endTime, queue, typeGame, start, count)</code>",id:"by_puuid_matchlistpuuid-starttime-endtime-queue-typegame-start-count",level:3}];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"match",children:"Match"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Match API"})," allows retrieval of match-related information."]}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.h3,{id:"by_match_idmatch_id",children:(0,n.jsx)(t.code,{children:"by_match_id(match_id)"})}),"\n",(0,n.jsx)(t.p,{children:"This method retrieves match information using the match ID."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Parameters:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"match_id"}),": The unique identifier for the match."]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"by_match_id_timelinematch_id",children:(0,n.jsx)(t.code,{children:"by_match_id_timeline(match_id)"})}),"\n",(0,n.jsx)(t.p,{children:"This method retrieves the timeline of events for a match using the match ID."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Parameters:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"match_id"}),": The unique identifier for the match."]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"by_puuid_matchlistpuuid-starttime-endtime-queue-typegame-start-count",children:(0,n.jsx)(t.code,{children:"by_puuid_matchlist(puuid, startTime, endTime, queue, typeGame, start, count)"})}),"\n",(0,n.jsx)(t.p,{children:"This method retrieves a list of matches for a player using their PUUID, with optional filters."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Parameters:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"puuid"}),": The platform-agnostic identifier that is unique to each player across all Riot Games."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"startTime"}),": (Optional) The start time for the range of matches to retrieve."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"endTime"}),": (Optional) The end time for the range of matches to retrieve."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"queue"}),": (Optional) The queue type for the matches to retrieve."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"typeGame"}),": (Optional) The game type for the matches to retrieve."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"start"}),": (Optional) The starting index for the list of matches to retrieve."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"count"}),": (Optional) The number of matches to retrieve."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"puuid"})," parameter is required, while the other parameters are optional and can be used to filter the list of matches."]})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>o});var n=i(6540);const r={},s=n.createContext(r);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);