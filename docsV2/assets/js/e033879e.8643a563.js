"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16415],{32935:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"git","title":"Working with Git","description":"CSpell can be used to spell check files that have been changed as well as spell checking the commit message.","source":"@site/docs/git.md","sourceDirName":".","slug":"/git","permalink":"/docsV2/docs/git","draft":false,"unlisted":false,"editUrl":"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/git.md","tags":[],"version":"current","frontMatter":{"layout":"default","title":"Working with Git","categories":"docs","parent":"Docs","nav_order":4,"published":false},"sidebar":"tutorialSidebar","previous":{"title":"How to Forbid Words","permalink":"/docsV2/docs/forbidden-words"},"next":{"title":"Globs","permalink":"/docsV2/docs/globs"}}');var i=s(86106),o=s(72300);const r={layout:"default",title:"Working with Git",categories:"docs",parent:"Docs",nav_order:4,published:!1},c="Tips for Working with Git",l={},d=[{value:"pre-commit",id:"pre-commit",level:2},{value:"commit-msg",id:"commit-msg",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"tips-for-working-with-git",children:"Tips for Working with Git"})}),"\n",(0,i.jsx)(t.p,{children:"CSpell can be used to spell check files that have been changed as well as spell checking the commit message."}),"\n",(0,i.jsx)(t.h1,{id:"git-commit-hooks",children:"Git commit-hooks"}),"\n",(0,i.jsx)(t.h2,{id:"pre-commit",children:"pre-commit"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:".git/hooks/pre-commit"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"#!/bin/sh\n\nexec git diff --cached --name-only | npx cspell --no-summary --no-progress --no-must-find-files --file-list stdin\n"})}),"\n",(0,i.jsx)(t.h2,{id:"commit-msg",children:"commit-msg"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:".git/hooks/commit-msg"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"#!/bin/sh\n\nexec npx cspell --no-summary --no-progress --language-id commit-msg $1\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},72300:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>c});var n=s(7378);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);