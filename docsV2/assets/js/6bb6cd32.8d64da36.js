"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37057],{56656:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api/cspell-types/index","title":"Cspell Types","description":"Contains cspell types and json-schema.","source":"@site/docs/api/cspell-types/index.md","sourceDirName":"api/cspell-types","slug":"/api/cspell-types/","permalink":"/docsV2/docs/api/cspell-types/","draft":false,"unlisted":false,"editUrl":"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/api/cspell-types/index.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Variable: sectionCSpell","permalink":"/docsV2/docs/api/cspell-lib/variables/sectionCSpell"},"next":{"title":"Enumeration: IssueType","permalink":"/docsV2/docs/api/cspell-types/enumerations/IssueType"}}');var l=t(86106),i=t(72300);const r={},o="Cspell Types",a={},c=[{value:"Support Future Development",id:"support-future-development",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2},{value:"CSpell for Enterprise",id:"cspell-for-enterprise",level:2}];function p(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.header,{children:(0,l.jsx)(s.h1,{id:"cspell-types",children:"Cspell Types"})}),"\n",(0,l.jsx)(s.p,{children:"Contains cspell types and json-schema."}),"\n",(0,l.jsx)(s.p,{children:"This package contains no dependencies to avoid any security issues."}),"\n",(0,l.jsx)(s.h2,{id:"support-future-development",children:"Support Future Development"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"https://github.com/sponsors/streetsidesoftware",children:(0,l.jsx)(s.img,{src:"https://img.shields.io/badge/-black?style=social&logo=githubsponsors&label=GitHub%20Sponsor%3A%20Street%20Side%20Software",alt:"GitHub Sponsors"})})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"https://patreon.com/streetsidesoftware",children:(0,l.jsx)(s.img,{src:"https://img.shields.io/badge/-black?style=social&logo=patreon&label=Patreon%3A%20Street%20Side%20Software",alt:"Patreon"})})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"https://www.paypal.com/donate/?hosted_button_id=26LNBP2Q6MKCY",children:(0,l.jsx)(s.img,{src:"https://img.shields.io/badge/-black?style=social&logo=paypal&label=PayPal%20Donate%3A%20Street%20Side%20Software",alt:"PayPal"})})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"https://opencollective.com/cspell",children:(0,l.jsx)(s.img,{src:"https://img.shields.io/badge/-black?style=social&logo=opencollective&label=Open%20Collective%3A%20CSpell",alt:"Open Collective"})})}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"npm i -S @cspell/cspell-types\n"})}),"\n",(0,l.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsxs)(s.p,{children:["Can be use to make writing ",(0,l.jsx)(s.code,{children:"cspell.config.js"})," files easier."]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-js",children:"'use strict';\n\n/** @type { import(\"@cspell/cspell-types\").CSpellUserSettings } */\nconst cspell = {\n  description: 'cspell.config.js file in samples/js-config',\n  languageSettings: [\n    {\n      languageId: 'cpp',\n      allowCompoundWords: false,\n      patterns: [\n        {\n          name: 'pound-includes',\n          pattern: /^\\s*#include.*/g\n        }\n      ],\n      ignoreRegExpList: ['pound-includes']\n    }\n  ],\n  dictionaryDefinitions: [\n    {\n      name: 'custom-words',\n      path: './custom-words.txt'\n    }\n  ],\n  dictionaries: ['custom-words']\n};\n\nmodule.exports = cspell;\n"})}),"\n",(0,l.jsx)(s.h2,{id:"api",children:"API"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"CSpellSettings"})," alias ",(0,l.jsx)(s.code,{children:"CSpellUserSettings"})," is the formal definition of the configuration that controls the spell checker."]}),"\n",(0,l.jsx)(s.h2,{id:"cspell-for-enterprise",children:"CSpell for Enterprise"}),"\n",(0,l.jsx)(s.p,{children:"Available as part of the Tidelift Subscription."}),"\n",(0,l.jsxs)(s.p,{children:["The maintainers of cspell and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source packages you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact packages you use. ",(0,l.jsx)(s.a,{href:"https://tidelift.com/subscription/pkg/npm-cspell?utm_source=npm-cspell&utm_medium=referral&utm_campaign=enterprise&utm_term=repo",children:"Learn more."})]}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsxs)("p",{align:"center",children:["Brought to you by",(0,l.jsxs)("a",{href:"https://streetsidesoftware.com",title:"Street Side Software",children:[(0,l.jsx)("img",{width:"16",alt:"Street Side Software Logo",src:"https://i.imgur.com/CyduuVY.png"})," Street Side Software"]})]})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},72300:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>o});var n=t(7378);const l={},i=n.createContext(l);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);