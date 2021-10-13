(this["webpackJsonpteste-react"]=this["webpackJsonpteste-react"]||[]).push([[0],{24:function(e,n,t){"use strict";t.r(n);var a,c,r,i,s=t(1),o=t.n(s),d=t(9),l=t.n(d),j=t(4),h=t(2),u=t(3),b="#233a6c",x="black",f=u.b.table(a||(a=Object(h.a)(["\n   max-width: 70vw;\n   height: 70vh;\n   margin: 0 auto;\n\n   text-align: center;\n\n   border-spacing: 0px;\n   border: 1px solid ",";\n   border-collapse: collapse;\n"])),x),p=u.b.tr(c||(c=Object(h.a)(["\n   > th {\n      padding: 20px;\n\n      color: white;\n      background-color: ",";\n\n      font-weight: 400;\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n\n      border: 1px solid ",";\n   }\n"])),b,x),O=u.b.tr(r||(r=Object(h.a)(["\n   > th {\n      padding: 10px;\n\n      background-color: #32539A;\n      color: white;\n\n      font-weight: 300;\n\n      border-collapse: collapse;\n      border-right: 1px solid ",";\n\n      &:first-child {\n         width: 15%;\n      }\n   }\n"])),x),g=u.b.tr(i||(i=Object(h.a)(["\n   > td {\n      border-right: 1px solid ",";\n   }\n\n   &:nth-child(2n) {\n      background-color: #DDD;\n   }\n\n  &:hover {\n      background-color: ",";\n      color: white;\n   }\n\n"])),x,b),m=t(0);function v(e,n){var t=e.faixas.findIndex((function(e){return e.faixa===n}));return-1!==t?e.faixas[t].count:0}var w,S=function(e){var n=e.data;if(!n||0===n.length)return Object(m.jsx)("p",{children:"No data, try again later"});var t=function(e){var n=[];return e.results.forEach((function(e){var t=n.findIndex((function(n){return n.tipoesc===e.tipoesc}));if(-1!==t)n[t].faixas.push({faixa:e.faixa,count:e.count}),n[t].totalCount+=e.count;else{var a={tipoesc:e.tipoesc,faixas:[{faixa:e.faixa,count:e.count}],totalCount:e.count};n.push(a)}})),n}(n);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(f,{children:[Object(m.jsxs)("thead",{children:[Object(m.jsxs)(p,{children:[Object(m.jsx)("th",{colSpan:9,children:"Escolas por tipo e quantidade de alunos"}),Object(m.jsx)("th",{rowSpan:2,children:"Total de unidades escolares por tipo"})]}),Object(m.jsxs)(O,{children:[Object(m.jsx)("th",{children:"Tipo de escola"}),Object(m.jsx)("th",{children:"Sem estudantes cadastrados"}),Object(m.jsx)("th",{children:"1 a 250 estudantes"}),Object(m.jsx)("th",{children:"251 a 500 estudantes"}),Object(m.jsx)("th",{children:"501 a 1000 estudantes"}),Object(m.jsx)("th",{children:"1001 a 1500 estudantes"}),Object(m.jsx)("th",{children:"1501 a 2000 estudantes"}),Object(m.jsx)("th",{children:"2001 a 2500 estudantes"}),Object(m.jsx)("th",{children:"Mais de 2500 estudantes"})]})]}),Object(m.jsx)("tbody",{children:t.map((function(e,n){return Object(m.jsxs)(g,{children:[Object(m.jsx)("td",{children:e.tipoesc}),Object(m.jsx)("td",{children:v(e,"Sem estudantes cadastrados")}),Object(m.jsx)("td",{children:v(e,"1 a 250 estudantes")}),Object(m.jsx)("td",{children:v(e,"251 a 500 estudantes")}),Object(m.jsx)("td",{children:v(e,"501 a 1000 estudantes")}),Object(m.jsx)("td",{children:v(e,"1001 a 1500 estudantes")}),Object(m.jsx)("td",{children:v(e,"1501 a 2000 estudantes")}),Object(m.jsx)("td",{children:v(e,"2001 a 2500 estudantes")}),Object(m.jsx)("td",{children:v(e,"Mais de 2500 estudantes")}),Object(m.jsx)("td",{children:e.totalCount})]},n)}))})]})})},y=u.b.div(w||(w=Object(h.a)(["\n   height: 14vh;\n   width: 70vw;\n   margin: 0 auto;\n   \n   display: flex;\n   align-items: center;\n\n   > label {\n      margin-right: 20px;\n      font-size: 1.6rem;\n      font-weight: 500;\n   }\n\n   > select {\n      width: 50%;\n      height: 40%;\n      font-size: 1.1rem;\n\n      border: 2px solid #233a6c;\n\n      > option {\n         font-size: 1.1rem;\n      }\n   }\n"])));function E(e){var n=e.directorship,t=e.changeDirectorship;if(!n||0===n.length)return Object(m.jsx)("p",{children:"N\xe3o conseguimos obter os dados, tente novamente mais tarde"});return Object(m.jsxs)(y,{children:[Object(m.jsx)("label",{children:"Selecione uma diretoria: "}),Object(m.jsxs)("select",{onChange:function(e){t(e.target.value)},children:[Object(m.jsx)("option",{value:"todasDiretorias",children:"TODAS DIRETORIAS"}),n.results.map((function(e){return Object(m.jsx)("option",{value:e.dre,children:e.diretoria},e.dre)}))]})]})}var k,D=t(13),z=t(14),M=u.b.div(k||(k=Object(h.a)(["\n   height: 70vh;\n\n   display: flex;\n   align-items: center;\n   justify-content: center;\n\n   font-size: 3rem;\n"]))),A=["isLoading"];var C,I=function(e){return function(n){var t=n.isLoading,a=Object(z.a)(n,A);return t?Object(m.jsx)(M,{children:Object(m.jsx)("p",{children:" Carregando os dados..."})}):Object(m.jsx)(e,Object(D.a)({},a))}},T=u.b.h1(C||(C=Object(h.a)(["\n  height: 7vh;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background-color: #233a6c;\n  color: #fff;\n\n  font-weight: 400;\n  font-size: 1.5rem;\n"])));var R,J=function(){return Object(m.jsx)(T,{children:"Teste de ReactJS - AMcomE"})},L=u.b.p(R||(R=Object(h.a)(["\n   height: 5vh;\n   margin-top: 4vh;\n\n   display: flex;\n   align-items: center;\n   justify-content: center;\n\n   background-color: #444;\n   color: white;\n"])));var N,q=function(e){return Object(m.jsx)(L,{children:"Secretaria Municipal de Educa\xe7\xe3o - SME"})},B=Object(u.a)(N||(N=Object(h.a)(["\n  * {\n    font-family: 'Roboto';\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n"])));function F(){var e=I(S),n=Object(s.useState)({loading:!1,data:null}),t=Object(j.a)(n,2),a=t[0],c=t[1],r=Object(s.useState)({loading:!1,data:null}),i=Object(j.a)(r,2),o=i[0],d=i[1],l=Object(s.useState)(""),h=Object(j.a)(l,2),u=h[0],b=h[1];function x(){c({loading:!0});fetch("https://hom-escolaaberta.sme.prefeitura.sp.gov.br/api/smeescolas/").then((function(e){return e.json()})).then((function(e){c({loading:!1,data:e})}))}return Object(s.useEffect)((function(){x()}),[c]),Object(s.useEffect)((function(){c({loading:!0});fetch("https://hom-escolaaberta.sme.prefeitura.sp.gov.br/api/diretorias/").then((function(e){return e.json()})).then((function(e){d({loading:!1,data:e})}))}),[d]),Object(s.useEffect)((function(){"todasDiretorias"===u&&x(),c({loading:!0});var e="https://hom-escolaaberta.sme.prefeitura.sp.gov.br/api/smeescolas/".concat(u);fetch(e).then((function(e){return e.json()})).then((function(e){c({loading:!1,data:e})}))}),[u]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(B,{}),Object(m.jsx)(J,{}),Object(m.jsx)(E,{directorship:o.data,changeDirectorship:b}),Object(m.jsx)(e,{isLoading:a.loading,data:a.data}),Object(m.jsx)(q,{})]})}function G(){return Object(m.jsx)(F,{})}l.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(G,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.bf3f1f74.chunk.js.map