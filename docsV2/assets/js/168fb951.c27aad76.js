"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61389],{30429:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"api/cspell-lib/interfaces/SuggestionCollector","title":"Interface: SuggestionCollector","description":"Properties","source":"@site/docs/api/cspell-lib/interfaces/SuggestionCollector.md","sourceDirName":"api/cspell-lib/interfaces","slug":"/api/cspell-lib/interfaces/SuggestionCollector","permalink":"/docsV2/docs/api/cspell-lib/interfaces/SuggestionCollector","draft":false,"unlisted":false,"editUrl":"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/api/cspell-lib/interfaces/SuggestionCollector.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Interface: SuggestedWord","permalink":"/docsV2/docs/api/cspell-lib/interfaces/SuggestedWord"},"next":{"title":"Interface: SuggestionOptions","permalink":"/docsV2/docs/api/cspell-lib/interfaces/SuggestionOptions"}}');var l=s(86106),d=s(72300);const r={},t="Interface: SuggestionCollector",o={},c=[{value:"Properties",id:"properties",level:2},{value:"add()",id:"add",level:3},{value:"Parameters",id:"parameters",level:4},{value:"suggestion",id:"suggestion",level:5},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"changeLimit",id:"changelimit",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"collect()",id:"collect",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"src",id:"src",level:5},{value:"timeout?",id:"timeout",level:5},{value:"filter?",id:"filter",level:5},{value:"Returns",id:"returns-1",level:4},{value:"Example",id:"example",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"genSuggestionOptions",id:"gensuggestionoptions",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"ignoreCase",id:"ignorecase",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"includesTies",id:"includesties",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"maxCost",id:"maxcost",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"maxNumSuggestions",id:"maxnumsuggestions",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"suggestions",id:"suggestions",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"symbolStopProcessing",id:"symbolstopprocessing",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"word",id:"word",level:3},{value:"Defined in",id:"defined-in-10",level:4}];function g(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"interface-suggestioncollector",children:"Interface: SuggestionCollector"})}),"\n",(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsx)(n.h3,{id:"add",children:"add()"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"add"}),": (",(0,l.jsx)(n.code,{children:"suggestion"}),") => ",(0,l.jsx)(n.a,{href:"/docsV2/docs/api/cspell-lib/interfaces/SuggestionCollector",children:(0,l.jsx)(n.code,{children:"SuggestionCollector"})})]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsx)(n.h5,{id:"suggestion",children:"suggestion"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"SuggestionResultBase"})}),"\n",(0,l.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docsV2/docs/api/cspell-lib/interfaces/SuggestionCollector",children:(0,l.jsx)(n.code,{children:"SuggestionCollector"})})}),"\n",(0,l.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:"packages/cspell-trie-lib/dist/lib/suggestions/suggestCollector.d.ts:19"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"changelimit",children:"changeLimit"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"readonly"})," ",(0,l.jsx)(n.strong,{children:"changeLimit"}),": ",(0,l.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:"packages/cspell-trie-lib/dist/lib/suggestions/suggestCollector.d.ts:21"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"collect",children:"collect()"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"collect"}),": (",(0,l.jsx)(n.code,{children:"src"}),", ",(0,l.jsx)(n.code,{children:"timeout"}),"?, ",(0,l.jsx)(n.code,{children:"filter"}),"?) => ",(0,l.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Collection suggestions from a SuggestionIterator"}),"\n",(0,l.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,l.jsx)(n.h5,{id:"src",children:"src"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"SuggestionGenerator"})}),"\n",(0,l.jsx)(n.p,{children:"the SuggestionIterator used to generate suggestions."}),"\n",(0,l.jsx)(n.h5,{id:"timeout",children:"timeout?"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"number"})}),"\n",(0,l.jsxs)(n.p,{children:["the amount of time in milliseconds to allow for suggestions.\nbefore sending ",(0,l.jsx)(n.code,{children:"symbolStopProcessing"}),"\nIterator implementation:"]}),"\n",(0,l.jsx)(n.h5,{id:"filter",children:"filter?"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"FilterWordFn"})}),"\n",(0,l.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"void"})}),"\n",(0,l.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"r = yield(suggestion);\nif (r === collector.symbolStopProcessing) // ...stop generating suggestions.\n"})}),"\n",(0,l.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:"packages/cspell-trie-lib/dist/lib/suggestions/suggestCollector.d.ts:18"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"gensuggestionoptions",children:"genSuggestionOptions"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"readonly"})," ",(0,l.jsx)(n.strong,{children:"genSuggestionOptions"}),": ",(0,l.jsx)(n.code,{children:"Partial"}),"<",(0,l.jsx)(n.code,{children:"GenSuggestionOptionsStrict"}),">"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:"packages/cspell-trie-lib/dist/lib/suggestions/suggestCollector.d.ts:27"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"ignorecase",children:"ignoreCase"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"readonly"})," ",(0,l.jsx)(n.strong,{children:"ignoreCase"}),": ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:"packages/cspell-trie-lib/dist/lib/suggestions/suggestCollector.d.ts:26"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"includesties",children:"includesTies"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"readonly"})," ",(0,l.jsx)(n.strong,{children:"includesTies"}),": ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:"packages/cspell-trie-lib/dist/lib/suggestions/suggestCollector.d.ts:25"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"maxcost",children:"maxCost"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"readonly"})," ",(0,l.jsx)(n.strong,{children:"maxCost"}),": ",(0,l.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:"packages/cspell-trie-lib/dist/lib/suggestions/suggestCollector.d.ts:22"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"maxnumsuggestions",children:"maxNumSuggestions"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"readonly"})," ",(0,l.jsx)(n.strong,{children:"maxNumSuggestions"}),": ",(0,l.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:"packages/cspell-trie-lib/dist/lib/suggestions/suggestCollector.d.ts:24"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"suggestions",children:"suggestions"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"readonly"})," ",(0,l.jsx)(n.strong,{children:"suggestions"}),": ",(0,l.jsx)(n.a,{href:"/docsV2/docs/api/cspell-lib/interfaces/SuggestionResult",children:(0,l.jsx)(n.code,{children:"SuggestionResult"})}),"[]"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:"packages/cspell-trie-lib/dist/lib/suggestions/suggestCollector.d.ts:20"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"symbolstopprocessing",children:"symbolStopProcessing"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"readonly"})," ",(0,l.jsx)(n.strong,{children:"symbolStopProcessing"}),": ",(0,l.jsx)(n.code,{children:"symbol"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Possible value sent to the SuggestionIterator telling it to stop processing."}),"\n",(0,l.jsx)(n.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:"packages/cspell-trie-lib/dist/lib/suggestions/suggestCollector.d.ts:31"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"word",children:"word"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"readonly"})," ",(0,l.jsx)(n.strong,{children:"word"}),": ",(0,l.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:"packages/cspell-trie-lib/dist/lib/suggestions/suggestCollector.d.ts:23"})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(g,{...e})}):g(e)}},72300:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>t});var i=s(7378);const l={},d=i.createContext(l);function r(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);