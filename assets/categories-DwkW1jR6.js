import{_ as P}from"./YunCard.vue_vue_type_script_setup_true_lang-d1aYG0Ja.js";import{_ as U}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-D5tFmn02.js";import{d as B,u as V,a as j,h as $,U as A,m as R,J as E,i as S,o as t,e as i,g as f,t as b,f as l,F as _,k as K,ao as N,c as g,w as p,j as q,q as m,x as T,K as x,ap as D,aj as F,al as W,am as H,r as J,an as M,ak as O}from"./app-CCwOMQ8g.js";import{u as G}from"./helper-BR3m_8G9.js";import{_ as Q}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-D0CxYhle.js";const X={class:"category-list-item inline-flex items-center cursor-pointer"},Z={key:0,"i-ri-folder-add-line":""},I={key:1,style:{color:"var(--va-c-primary)"},"i-ri-folder-reduce-line":""},ee={key:0},te={m:"l-1",font:"serif black"},oe=B({__name:"YunCategory",props:{parentKey:{},category:{},level:{},collapsable:{type:Boolean,default:!0}},setup(Y){const u=Y,y=V(),n=j(),v=$(()=>{const e=n.query.category||"";return Array.isArray(e)?[e]:e.split("/")}),o=A(u.collapsable),{t:c}=R(),{locale:k}=R();function z(e){const s=k.value==="zh-CN"?"zh":k.value;return e[`title_${s}`]?e[`title_${s}`]:e.title}const d=A(),{show:r}=G(d);function C(e){y.push({query:{category:e}}),r()}return E(()=>{const e=document.querySelector(".post-collapse-container");e&&(d.value=e)}),(e,s)=>{const h=S("YunCategory",!0),w=S("RouterLink");return t(),i(_,null,[f("li",X,[f("span",{class:"folder-action inline-flex",onClick:s[0]||(s[0]=a=>o.value=!o.value)},[o.value?(t(),i("div",Z)):(t(),i("div",I))]),f("span",{class:"category-name",m:"l-1",onClick:s[1]||(s[1]=a=>C(e.parentKey))},b(e.category.name==="Uncategorized"?l(c)("category.uncategorized"):e.category.name)+" ["+b(e.category.total)+"] ",1)]),o.value?q("v-if",!0):(t(),i("ul",ee,[(t(!0),i(_,null,K(e.category.children.values(),(a,L)=>(t(),i("li",{key:L,class:"post-list-item",m:"l-4"},[l(N)(a)?(t(),g(h,{key:0,"parent-key":e.parentKey?`${e.parentKey}/${a.name}`:a.name,category:a,collapsable:!v.value.includes(a.name)},null,8,["parent-key","category","collapsable"])):(t(),i(_,{key:1},[a.title?(t(),g(w,{key:0,to:a.path||"",class:"inline-flex items-center"},{default:p(()=>[s[2]||(s[2]=f("div",{"i-ri-file-text-line":""},null,-1)),f("span",te,b(z(a)),1)]),_:2},1032,["to"])):q("v-if",!0)],64))]))),128))]))],64)}}}),ne=B({__name:"YunCategories",props:{categories:{},level:{default:0},collapsable:{type:Boolean,default:!0}},setup(Y){const u=j(),y=$(()=>{const n=u.query.category||"";return Array.isArray(n)?[n]:n.split("/")});return(n,v)=>{const o=oe;return t(!0),i(_,null,K(n.categories.values(),c=>(t(),i("ul",{key:c.name,class:"category-list",m:"l-4"},[m(o,{"parent-key":c.name,category:c,level:n.level+1,collapsable:!y.value.includes(c.name)},null,8,["parent-key","category","level","collapsable"])]))),128)}}}),ae={text:"center",class:"yun-text-light",p:"2"},ue=B({__name:"categories",setup(Y){const{t:u}=R(),y=T(),n=x(),v=j(),o=$(()=>v.query.category||""),c=D(),k=$(()=>y.postList.filter(r=>r.categories&&o.value!=="Uncategorized"?typeof r.categories=="string"?r.categories===o.value:r.categories.join("/").startsWith(o.value)&&r.categories[0]===o.value.split("/")[0]:!r.categories&&o.value==="Uncategorized"?r.categories===void 0:!1)),z=F(n);return W([H({"@type":"CollectionPage"})]),(d,r)=>{const C=O,e=Q,s=ne,h=S("RouterView"),w=U,a=P;return t(),i(_,null,[d.$slots["sidebar-child"]?(t(),g(C,{key:0},{default:p(()=>[J(d.$slots,"sidebar-child")]),_:3})):(t(),g(C,{key:1})),m(h,null,{default:p(({Component:L})=>[(t(),g(M(L),null,{"main-header":p(()=>[m(e,{title:l(z)||l(u)("menu.categories"),icon:l(n).icon||"i-ri-folder-2-line",color:l(n).color,"page-title-class":l(n).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":p(()=>[f("div",ae,b(l(u)("counter.categories",Array.from(l(c).children).length)),1),m(s,{categories:l(c).children},null,8,["categories"]),m(h)]),"main-nav-before":p(()=>[o.value?(t(),g(a,{key:0,class:"post-collapse-container",m:"t-4",w:"full"},{default:p(()=>[m(e,{title:o.value==="Uncategorized"?l(u)("category.uncategorized"):o.value.split("/").join(" / "),icon:"i-ri-folder-open-line"},null,8,["title"]),m(w,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:k.value},null,8,["posts"])]),_:1})):q("v-if",!0)]),_:2},1024))]),_:1})],64)}}});export{ue as default};
