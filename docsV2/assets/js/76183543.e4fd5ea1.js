"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35668],{29352:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"how-it-works","title":"How it Works","description":"How CSpell checks a document.","source":"@site/docs/how-it-works.md","sourceDirName":".","slug":"/how-it-works","permalink":"/docsV2/docs/how-it-works","draft":false,"unlisted":false,"editUrl":"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/how-it-works.md","tags":[],"version":"current","frontMatter":{"title":"How it Works","description":"How CSpell checks a document.","nav_order":4},"sidebar":"tutorialSidebar","previous":{"title":"Globs","permalink":"/docsV2/docs/globs"}}');var c=n(86106),r=n(72300);const o={title:"How it Works",description:"How CSpell checks a document.",nav_order:4},t="How it works",d={},l=[{value:"Special cases",id:"special-cases",level:2},{value:"Things to note",id:"things-to-note",level:2},{value:"Dictionaries",id:"dictionaries",level:2}];function a(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.header,{children:(0,c.jsx)(s.h1,{id:"how-it-works",children:"How it works"})}),"\n",(0,c.jsx)(s.p,{children:"The concept is simple, split camelCase and snake_case words before checking them against a list of known words."}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"camelCase"})," -> ",(0,c.jsx)(s.code,{children:"camel case"})]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"HTMLInput"})," -> ",(0,c.jsx)(s.code,{children:"html input"})]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"srcCode"})," -> ",(0,c.jsx)(s.code,{children:"src code"})]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"snake_case_words"})," -> ",(0,c.jsx)(s.code,{children:"snake case words"})]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"camel2snake"})," -> ",(0,c.jsx)(s.code,{children:"camel snake"})," -- (the 2 is ignored)"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"function parseJson(text: string)"})," -> ",(0,c.jsx)(s.code,{children:"function parse json text string"})]}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"special-cases",children:"Special cases"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["Escape characters like ",(0,c.jsx)(s.code,{children:"\\n"}),", ",(0,c.jsx)(s.code,{children:"\\t"})," are removed if the word does not match:","\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"\\narrow"})," -> ",(0,c.jsx)(s.code,{children:"narrow"})," - because ",(0,c.jsx)(s.code,{children:"narrow"})," is a word"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"\\ncode"})," -> ",(0,c.jsx)(s.code,{children:"code"})," - because ",(0,c.jsx)(s.code,{children:"ncode"})," is not a word."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"\\network"})," -> ",(0,c.jsx)(s.code,{children:"network"})," - but it might be hiding a spelling error, if ",(0,c.jsx)(s.code,{children:"\\n"})," was an escape character."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"things-to-note",children:"Things to note"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["This spellchecker is case insensitive. It will not catch errors like ",(0,c.jsx)(s.code,{children:"english"})," which should be ",(0,c.jsx)(s.code,{children:"English"}),"."]}),"\n",(0,c.jsx)(s.li,{children:"The spellchecker uses dictionaries stored locally. It does not send anything outside your machine."}),"\n",(0,c.jsx)(s.li,{children:"The words in the dictionaries can and do contain errors."}),"\n",(0,c.jsx)(s.li,{children:"There are missing words."}),"\n",(0,c.jsx)(s.li,{children:'Only words longer than 3 characters are checked. "jsj" is ok, while "jsja" is not.'}),"\n",(0,c.jsx)(s.li,{children:"All symbols and punctuation are ignored."}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"dictionaries",children:"Dictionaries"}),"\n",(0,c.jsxs)(s.p,{children:["See also: ",(0,c.jsx)(s.a,{href:"./dictionaries",children:"Dictionaries"})," and ",(0,c.jsx)(s.a,{href:"./dictionaries/custom-dictionaries",children:"Custom Dictionaries"})]}),"\n",(0,c.jsxs)(s.p,{children:["The ",(0,c.jsx)(s.em,{children:"dictionaries"})," list allows you to specify dictionaries to use for the file."]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-javascript",children:"// cSpell:dictionaries lorem-ipsum\nconst companyName = 'Lorem ipsum dolor sit amet';\n"})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"Note:"})," dictionaries specified with ",(0,c.jsx)(s.code,{children:"dictionaries"})," will be used for the entire file."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},72300:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>t});var i=n(7378);const c={},r=i.createContext(c);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);