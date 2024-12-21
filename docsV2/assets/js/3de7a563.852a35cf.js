"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92185],{89763:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"api/cspell-lib/interfaces/DictionaryDefinitionBase","title":"Interface: DictionaryDefinitionBase","description":"Extended by","source":"@site/docs/api/cspell-lib/interfaces/DictionaryDefinitionBase.md","sourceDirName":"api/cspell-lib/interfaces","slug":"/api/cspell-lib/interfaces/DictionaryDefinitionBase","permalink":"/docsV2/docs/api/cspell-lib/interfaces/DictionaryDefinitionBase","draft":false,"unlisted":false,"editUrl":"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/api/cspell-lib/interfaces/DictionaryDefinitionBase.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Interface: DictionaryDefinitionAugmented","permalink":"/docsV2/docs/api/cspell-lib/interfaces/DictionaryDefinitionAugmented"},"next":{"title":"Interface: DictionaryDefinitionCustom","permalink":"/docsV2/docs/api/cspell-lib/interfaces/DictionaryDefinitionCustom"}}');var d=n(86106),l=n(72300);const t={},c="Interface: DictionaryDefinitionBase",r={},o=[{value:"Extended by",id:"extended-by",level:2},{value:"Properties",id:"properties",level:2},{value:"description?",id:"description",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"noSuggest?",id:"nosuggest",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"repMap?",id:"repmap",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"type?",id:"type",level:3},{value:"Default",id:"default",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"useCompounds?",id:"usecompounds",level:3},{value:"Defined in",id:"defined-in-5",level:4}];function a(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.header,{children:(0,d.jsx)(i.h1,{id:"interface-dictionarydefinitionbase",children:"Interface: DictionaryDefinitionBase"})}),"\n",(0,d.jsx)(i.h2,{id:"extended-by",children:"Extended by"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:(0,d.jsx)(i.a,{href:"/docsV2/docs/api/cspell-lib/interfaces/DictionaryDefinitionAlternate",children:(0,d.jsx)(i.code,{children:"DictionaryDefinitionAlternate"})})}),"\n",(0,d.jsx)(i.li,{children:(0,d.jsx)(i.a,{href:"/docsV2/docs/api/cspell-lib/interfaces/DictionaryDefinitionPreferred",children:(0,d.jsx)(i.code,{children:"DictionaryDefinitionPreferred"})})}),"\n"]}),"\n",(0,d.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,d.jsx)(i.h3,{id:"description",children:"description?"}),"\n",(0,d.jsxs)(i.blockquote,{children:["\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"optional"})," ",(0,d.jsx)(i.strong,{children:"description"}),": ",(0,d.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsx)(i.p,{children:"Optional description of the contents / purpose of the dictionary."}),"\n",(0,d.jsx)(i.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,d.jsx)(i.p,{children:"packages/cspell-types/dist/DictionaryDefinition.d.ts:20"}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.h3,{id:"name",children:"name"}),"\n",(0,d.jsxs)(i.blockquote,{children:["\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.strong,{children:"name"}),": ",(0,d.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsx)(i.p,{children:"This is the name of a dictionary."}),"\n",(0,d.jsx)(i.p,{children:"Name Format:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:"Must contain at least 1 number or letter."}),"\n",(0,d.jsx)(i.li,{children:"Spaces are allowed."}),"\n",(0,d.jsx)(i.li,{children:"Leading and trailing space will be removed."}),"\n",(0,d.jsx)(i.li,{children:"Names ARE case-sensitive."}),"\n",(0,d.jsxs)(i.li,{children:["Must not contain ",(0,d.jsx)(i.code,{children:"*"}),", ",(0,d.jsx)(i.code,{children:"!"}),", ",(0,d.jsx)(i.code,{children:";"}),", ",(0,d.jsx)(i.code,{children:","}),", ",(0,d.jsx)(i.code,{children:"{"}),", ",(0,d.jsx)(i.code,{children:"}"}),", ",(0,d.jsx)(i.code,{children:"["}),", ",(0,d.jsx)(i.code,{children:"]"}),", ",(0,d.jsx)(i.code,{children:"~"}),"."]}),"\n"]}),"\n",(0,d.jsx)(i.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,d.jsx)(i.p,{children:"packages/cspell-types/dist/DictionaryDefinition.d.ts:16"}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.h3,{id:"nosuggest",children:"noSuggest?"}),"\n",(0,d.jsxs)(i.blockquote,{children:["\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"optional"})," ",(0,d.jsx)(i.strong,{children:"noSuggest"}),": ",(0,d.jsx)(i.code,{children:"boolean"})]}),"\n"]}),"\n",(0,d.jsx)(i.p,{children:"Indicate that suggestions should not come from this dictionary.\nWords in this dictionary are considered correct, but will not be\nused when making spell correction suggestions."}),"\n",(0,d.jsx)(i.p,{children:"Note: if a word is suggested by another dictionary, but found in\nthis dictionary, it will be removed from the set of\npossible suggestions."}),"\n",(0,d.jsx)(i.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,d.jsx)(i.p,{children:"packages/cspell-types/dist/DictionaryDefinition.d.ts:34"}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.h3,{id:"repmap",children:"repMap?"}),"\n",(0,d.jsxs)(i.blockquote,{children:["\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"optional"})," ",(0,d.jsx)(i.strong,{children:"repMap"}),": ",(0,d.jsx)(i.a,{href:"/docsV2/docs/api/cspell-lib/type-aliases/ReplaceMap",children:(0,d.jsx)(i.code,{children:"ReplaceMap"})})]}),"\n"]}),"\n",(0,d.jsx)(i.p,{children:"Replacement pairs."}),"\n",(0,d.jsx)(i.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,d.jsx)(i.p,{children:"packages/cspell-types/dist/DictionaryDefinition.d.ts:22"}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.h3,{id:"type",children:"type?"}),"\n",(0,d.jsxs)(i.blockquote,{children:["\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"optional"})," ",(0,d.jsx)(i.strong,{children:"type"}),": ",(0,d.jsx)(i.a,{href:"/docsV2/docs/api/cspell-lib/type-aliases/DictionaryFileTypes",children:(0,d.jsx)(i.code,{children:"DictionaryFileTypes"})})]}),"\n"]}),"\n",(0,d.jsx)(i.p,{children:"Type of file:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:"S - single word per line,"}),"\n",(0,d.jsx)(i.li,{children:"W - each line can contain one or more words separated by space,"}),"\n",(0,d.jsx)(i.li,{children:"C - each line is treated like code (Camel Case is allowed)."}),"\n"]}),"\n",(0,d.jsx)(i.p,{children:"Default is S."}),"\n",(0,d.jsx)(i.p,{children:"C is the slowest to load due to the need to split each line based upon code splitting rules."}),"\n",(0,d.jsxs)(i.p,{children:["Note: this settings does not apply to inline dictionaries or ",(0,d.jsx)(i.code,{children:".trie"})," files."]}),"\n",(0,d.jsx)(i.h4,{id:"default",children:"Default"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-ts",children:'"S"\n'})}),"\n",(0,d.jsx)(i.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,d.jsx)(i.p,{children:"packages/cspell-types/dist/DictionaryDefinition.d.ts:49"}),"\n",(0,d.jsx)(i.hr,{}),"\n",(0,d.jsx)(i.h3,{id:"usecompounds",children:"useCompounds?"}),"\n",(0,d.jsxs)(i.blockquote,{children:["\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.code,{children:"optional"})," ",(0,d.jsx)(i.strong,{children:"useCompounds"}),": ",(0,d.jsx)(i.code,{children:"boolean"})]}),"\n"]}),"\n",(0,d.jsx)(i.p,{children:"Use Compounds."}),"\n",(0,d.jsx)(i.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,d.jsx)(i.p,{children:"packages/cspell-types/dist/DictionaryDefinition.d.ts:24"})]})}function h(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},72300:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>c});var s=n(7378);const d={},l=s.createContext(d);function t(e){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);