"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65726],{10183:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"api/cspell-lib/functions/determineFinalDocumentSettings","title":"Function: determineFinalDocumentSettings()","description":"determineFinalDocumentSettings(document, settings): Promise\\\\","source":"@site/docs/api/cspell-lib/functions/determineFinalDocumentSettings.md","sourceDirName":"api/cspell-lib/functions","slug":"/api/cspell-lib/functions/determineFinalDocumentSettings","permalink":"/docsV2/docs/api/cspell-lib/functions/determineFinalDocumentSettings","draft":false,"unlisted":false,"editUrl":"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/api/cspell-lib/functions/determineFinalDocumentSettings.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Function: defineConfig()","permalink":"/docsV2/docs/api/cspell-lib/functions/defineConfig"},"next":{"title":"Function: extractDependencies()","permalink":"/docsV2/docs/api/cspell-lib/functions/extractDependencies"}}');var s=t(86106),l=t(72300);const c={},o="Function: determineFinalDocumentSettings()",r={},d=[{value:"Parameters",id:"parameters",level:2},{value:"document",id:"document",level:3},{value:"settings",id:"settings",level:3},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"function-determinefinaldocumentsettings",children:"Function: determineFinalDocumentSettings()"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"determineFinalDocumentSettings"}),"(",(0,s.jsx)(n.code,{children:"document"}),", ",(0,s.jsx)(n.code,{children:"settings"}),"): ",(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.a,{href:"/docsV2/docs/api/cspell-lib/interfaces/DetermineFinalDocumentSettingsResult",children:(0,s.jsx)(n.code,{children:"DetermineFinalDocumentSettingsResult"})}),">"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Combines all relevant setting values into a final configuration to be used for spell checking.\nIt applies any overrides and appropriate language settings by taking into account the document type (languageId)\nthe locale (natural language) and any in document settings."}),"\n",(0,s.jsxs)(n.p,{children:["Note: this method will not search for configuration files. Configuration files should already be merged into ",(0,s.jsx)(n.code,{children:"settings"}),".\nIt is NOT necessary to include the cspell defaultSettings or globalSettings. They will be applied within this function."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.h3,{id:"document",children:"document"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"DocumentWithText"})}),"\n",(0,s.jsxs)(n.p,{children:["The document to be spell checked. Note: if the URI doesn't have a path, overrides cannot be applied.\n",(0,s.jsx)(n.code,{children:"locale"})," - if defined will be used unless it is overridden by an in-document setting.\n",(0,s.jsx)(n.code,{children:"languageId"})," - if defined will be used to select appropriate file type dictionaries."]}),"\n",(0,s.jsx)(n.h3,{id:"settings",children:"settings"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docsV2/docs/api/cspell-lib/interfaces/CSpellSettings",children:(0,s.jsx)(n.code,{children:"CSpellSettings"})})}),"\n",(0,s.jsx)(n.p,{children:"The near final settings. Should already be the combination of all configuration files."}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.a,{href:"/docsV2/docs/api/cspell-lib/interfaces/DetermineFinalDocumentSettingsResult",children:(0,s.jsx)(n.code,{children:"DetermineFinalDocumentSettingsResult"})}),">"]}),"\n",(0,s.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/JoshuaKGoldberg/cspell/blob/01416eb8a8e14e317995129079ed3ec4c6a3f1c3/packages/cspell-lib/src/lib/spellCheckFile.ts#L217",children:"packages/cspell-lib/src/lib/spellCheckFile.ts:217"})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},72300:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var i=t(7378);const s={},l=i.createContext(s);function c(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);