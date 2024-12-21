"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59770],{65252:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"api/cspell-types/interfaces/WorkspaceTrustSettings","title":"Interface: WorkspaceTrustSettings","description":"To prevent the unwanted execution of untrusted code, WorkspaceTrustSettings","source":"@site/docs/api/cspell-types/interfaces/WorkspaceTrustSettings.md","sourceDirName":"api/cspell-types/interfaces","slug":"/api/cspell-types/interfaces/WorkspaceTrustSettings","permalink":"/docsV2/docs/api/cspell-types/interfaces/WorkspaceTrustSettings","draft":false,"unlisted":false,"editUrl":"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/api/cspell-types/interfaces/WorkspaceTrustSettings.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Interface: TextOffset","permalink":"/docsV2/docs/api/cspell-types/interfaces/TextOffset"},"next":{"title":"Type Alias: CSpellPackageSettings","permalink":"/docsV2/docs/api/cspell-types/type-aliases/CSpellPackageSettings"}}');var l=t(86106),i=t(72300);const r={},c="Interface: WorkspaceTrustSettings",d={},o=[{value:"Properties",id:"properties",level:2},{value:"trustedFiles?",id:"trustedfiles",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"trustLevel?",id:"trustlevel",level:3},{value:"Default",id:"default",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"untrustedFiles?",id:"untrustedfiles",level:3},{value:"Defined in",id:"defined-in-2",level:4}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.header,{children:(0,l.jsx)(s.h1,{id:"interface-workspacetrustsettings",children:"Interface: WorkspaceTrustSettings"})}),"\n",(0,l.jsx)(s.p,{children:"To prevent the unwanted execution of untrusted code, WorkspaceTrustSettings\nare use to set the trust levels."}),"\n",(0,l.jsxs)(s.p,{children:["Trust setting have an impact on both ",(0,l.jsx)(s.code,{children:"cspell.config.js"})," files and on ",(0,l.jsx)(s.code,{children:".pnp.js"})," files.\nIn an untrusted location, these files will NOT be used."]}),"\n",(0,l.jsx)(s.p,{children:"This will also prevent any associated plugins from being loaded."}),"\n",(0,l.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsx)(s.h3,{id:"trustedfiles",children:"trustedFiles?"}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"optional"})," ",(0,l.jsx)(s.strong,{children:"trustedFiles"}),": ",(0,l.jsx)(s.a,{href:"/docsV2/docs/api/cspell-types/type-aliases/Glob",children:(0,l.jsx)(s.code,{children:"Glob"})}),"[]"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"Glob patterns of locations that contain ALWAYS trusted files."}),"\n",(0,l.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"https://github.com/JoshuaKGoldberg/cspell/blob/01416eb8a8e14e317995129079ed3ec4c6a3f1c3/packages/cspell-types/src/CSpellSettingsDef.ts#L407",children:"CSpellSettingsDef.ts:407"})}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"trustlevel",children:"trustLevel?"}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"optional"})," ",(0,l.jsx)(s.strong,{children:"trustLevel"}),": ",(0,l.jsx)(s.a,{href:"/docsV2/docs/api/cspell-types/type-aliases/TrustLevel",children:(0,l.jsx)(s.code,{children:"TrustLevel"})})]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"Sets the default trust level."}),"\n",(0,l.jsx)(s.h4,{id:"default",children:"Default"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",children:'"trusted"\n'})}),"\n",(0,l.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"https://github.com/JoshuaKGoldberg/cspell/blob/01416eb8a8e14e317995129079ed3ec4c6a3f1c3/packages/cspell-types/src/CSpellSettingsDef.ts#L418",children:"CSpellSettingsDef.ts:418"})}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"untrustedfiles",children:"untrustedFiles?"}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"optional"})," ",(0,l.jsx)(s.strong,{children:"untrustedFiles"}),": ",(0,l.jsx)(s.a,{href:"/docsV2/docs/api/cspell-types/type-aliases/Glob",children:(0,l.jsx)(s.code,{children:"Glob"})}),"[]"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"Glob patterns of locations that contain NEVER trusted files."}),"\n",(0,l.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"https://github.com/JoshuaKGoldberg/cspell/blob/01416eb8a8e14e317995129079ed3ec4c6a3f1c3/packages/cspell-types/src/CSpellSettingsDef.ts#L412",children:"CSpellSettingsDef.ts:412"})})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},72300:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>c});var n=t(7378);const l={},i=n.createContext(l);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);