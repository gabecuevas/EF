import{j as _,o as u,d,I as n,K as a,k as c,E as r,J as s,aU as m,aV as y,_ as f}from"./permission.js";import{B as v}from"./styleChecker.js";const h={class:"privacy-wrap"},g={class:"btn-wrap"},k=_({__name:"Privacy",emits:["accept","cancel"],setup($,{emit:i}){const o=i;function l(){o("cancel")}function p(){m.set({[y.AcceptPrivacyPolicy]:!0}).then(()=>{o("accept")}).catch(e=>{console.log(e)})}return(e,C)=>{const t=v;return u(),d("div",h,[n("h2",null,a(e.$i18n("your_privacy")),1),n("div",null,[n("p",null,a(e.$i18n("personalized_experience")),1),n("p",null,a(e.$i18n("store_your_personal")),1),n("p",null,a(e.$i18n("more_information")),1),n("p",null,[n("a",{target:"_blank",ref:"noopener noreferrer",href:"https://linkedcrm.ai/Privacy-policy-&-terms-of-service"},a(e.$i18n("learn_more")),513)])]),n("div",g,[c(t,{size:"large",class:"btn-cancel",onClick:l},{default:r(()=>[s(a(e.$i18n("decline")),1)]),_:1}),c(t,{type:"primary",size:"large",onClick:p},{default:r(()=>[s(a(e.$i18n("accept")),1)]),_:1})])])}}});const b=f(k,[["__scopeId","data-v-aca3fd92"]]);export{b as _};