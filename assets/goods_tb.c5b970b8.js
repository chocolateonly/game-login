import{d as pe,r as v,u as ge,a as O,o as fe,E as ve,b as Fe,c as ye,e as Ce,f as be,g as he,h as Ee,i as Be,j as ke,v as we,k as g,l as q,m as s,n as l,w as u,p as n,q as De,s as y,t as w,x as j,y as z,F as P,z as Ae,A as c,B as _,C as Ve,D as xe,G as Ie,H as je,I as ze,J as Re,K as Ue,L as Se,M as qe,N as Ge,_ as $e}from"./index.6b9f1d7a.js";import{u as Me}from"./page.670b10f8.js";/* empty css                   *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css               *//* empty css                     */import{u as Le}from"./cid.5b3c30d0.js";import{e as Ne}from"./export2excel.b0094550.js";import{_ as T}from"./upload-image.vue_vue_type_script_setup_true_lang.5a3ca523.js";import{c as H,a as Oe,b as Pe,d as Te,e as He}from"./cid.dcc30f65.js";import{c as J}from"./common.72605700.js";const K=D=>(qe("data-v-a66abb01"),D=D(),Ge(),D),Je={class:"container"},Ke=c("\u6DFB\u52A0\u5546\u54C1"),Qe=c("\u5BFC\u51FA"),We=c("\u67E5\u8BE2"),Xe=c("\u91CD\u7F6E"),Ye=["title"],Ze=["title","onClick"],el=["onClick","title"],ll=c("\u7F16\u8F91"),ul=c("\u5220\u9664"),al={class:"pagination"},tl=c("\u5DE8\u91CF\u5F15\u64CE"),ol=c("\u68C0\u6D4B"),il={style:{display:"flex","flex-direction":"column"}},sl=c("\u5236\u4F5C\u843D\u5730\u9875"),nl={class:"dialog-footer"},dl=c("\u53D6\u6D88"),rl=c("\u786E\u8BA4"),_l={style:{width:"100px"}},ml={style:{width:"100px"}},cl={class:"preview-img-wrap"},pl=K(()=>s("div",{class:"img-title"},[s("h3",null,"\u6548\u679C\u9884\u89C8"),s("span",null,"\u63A8\u8350\u5C3A\u5BF8\uFF1A(750*1334)")],-1)),gl={class:"preview-img"},fl=K(()=>s("div",{class:"preview-img-footer"},[s("div",{class:"btn-title"},"\u5F15\u5BFC\u56FE\u70B9\u51FB\u533A\u57DF"),s("div",{class:"btn-title-size"},"\u5F15\u5BFC\u56FE\u63A8\u8350\u5C3A\u5BF8\uFF1A(400*100)")],-1)),vl={class:"dialog-footer"},Fl=c("\u53D6\u6D88"),yl=c("\u786E\u8BA4"),Cl=pe({__name:"goods_tb",setup(D){const h=v(),C=Le();ge();const E=v(!1),b=v(!1),A=v(!1),B=O({name:""}),V=v({id:""}),G=v("1"),e=v({commodity_id:"",commodity_name:"",seller_id:"",seller_name:"",details_page_url:"",commodity_platform:"0",jump:"0",back_img:[],btn_img:[]}),Q=O({commodity_id:[{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u54C1ID",trigger:"blur"}],commodity_name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0",trigger:"blur"}],seller_name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5E97\u94FA\u540D\u79F0",trigger:"blur"}]}),x=v(!1),{query:m,goPage:W,goInit:k}=Me(()=>$()),$=()=>{x.value=!0,H({page_index:m.page,page_size:m.page_size,keywords:m.keyword,seller_name:B.name}).then(a=>{x.value=!1,m.list=a.data.list,m.total=a.data.total_count}).catch(()=>{x.value=!1})};fe(()=>{$()});const X=a=>{e.value.back_img=a.file},Y=a=>{e.value.btn_img=a.file},Z=()=>{m.keyword="",B.name="",k()},ee=()=>{A.value=!0},le=()=>{if(!e.value.commodity_id)return _.error("\u8BF7\u8F93\u5165\u5546\u54C1\u7F16\u53F7");if(!e.value.commodity_name)return _.error("\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0");Oe({commodity_id:e.value.commodity_id,commodity_name:e.value.commodity_name}).then(a=>{a.status==200&&(e.value.commodity_name=a.data.commodity_name,e.value.seller_id=a.data.seller_id,e.value.seller_name=a.data.seller_name,e.value.details_page_url=a.data.details_page_url)}).catch(a=>{_.error(a.message)})},ue=()=>{H({page_index:m.page,page_size:1e4,keywords:m.keyword,seller_name:B.name}).then(a=>{if(a.status==200){const o=a.data.list.map(r=>({commodity_id:r.commodity_id,commodity_name:r.commodity_name,seller_id:r.seller_id,seller_name:r.seller_name,jump:(C.jumpOptions.find(i=>i.value==r.jump_type)||{}).label,url:j+"#/cid_goods_detail?commodity_id="+r.commodity_id,details_page_url:r.details_page_url})),d=["\u5546\u54C1ID","\u5546\u54C1\u540D\u79F0","\u5E97\u94FAID","\u5E97\u94FA\u540D\u79F0","\u8DF3\u8F6C\u7C7B\u578B","\u843D\u5730\u9875\u94FE\u63A5","\u8BE6\u60C5\u9875\u94FE\u63A5"];console.log(o),Ne(o,"\u5546\u54C1\u63A8\u5E7F",d,"\u5546\u54C1\u5217\u8868")}else _.error(a.message||"\u540E\u7AEFapi\u63A5\u53E3\u5F02\u5E38\uFF01")}).catch(a=>{_.error(a.message)})},R=()=>{A.value=!1,e.value.back_img=[],e.value.btn_img=[]},I=()=>{var a;h&&((a=h.value)==null||a.resetFields()),E.value=!1,e.value.commodity_id="",e.value.commodity_name="",e.value.details_page_url="",e.value.seller_id="",e.value.seller_name="",e.value.commodity_platform="0",e.value.jump="0",V.value.id="",R()},M=async a=>{!a||await a.validate((o,d)=>{if(o){if(e.value.jump=="1"&&e.value.back_img.length==0)return _.error("\u8BF7\u8BBE\u7F6E\u843D\u5730\u9875");if(e.value.jump=="1"&&e.value.btn_img.length==0)return _.error("\u8BF7\u8BBE\u7F6E\u5F15\u5BFC\u6309\u94AE");if(b.value)return;b.value=!0;const r={commodity_id:e.value.commodity_id,commodity_name:e.value.commodity_name,seller_id:e.value.seller_id,seller_name:e.value.seller_name,jump_type:e.value.jump,details_page_url:e.value.details_page_url,advertising_platform:"0",commodity_platform:e.value.commodity_platform,landing_page_background:e.value.back_img.map(i=>i.id).join(","),landing_page_button:e.value.btn_img.map(i=>i.id).join(",")};V.value.id?Pe({id:V.value.id,...r}).then(i=>{I(),b.value=!1,i.status==200&&(_.success("\u7F16\u8F91\u6210\u529F"),k())}).catch(i=>{b.value=!1,_.error(i.message)}):Te({...r}).then(i=>{b.value=!1,I(),i.status==200&&(_.success("\u6DFB\u52A0\u6210\u529F"),k())}).catch(i=>{b.value=!1,_.error(i.message)})}else _.error("\u8BF7\u5C06\u4FE1\u606F\u586B\u5199\u5B8C\u6574")})},ae=()=>{E.value=!0,C.setOperation("")},te=a=>{E.value=!0,C.setOperation("edit"),V.value={...a},e.value.commodity_id=a.commodity_id,e.value.commodity_name=a.commodity_name,e.value.seller_id=a.seller_id,e.value.seller_name=a.seller_name,e.value.details_page_url=a.details_page_url,e.value.commodity_platform=a.commodity_platform.toString(),e.value.jump=a.jump_type.toString(),e.value.back_img=a.landing_page.length>0?a.landing_page.slice(0,1):[],e.value.btn_img=a.landing_page.length>0?a.landing_page.slice(1):[]},oe=a=>{Ve.confirm("\u786E\u5B9A\u8981\u79FB\u9664\u5417\uFF1F","\u63D0\u793A",{type:"warning"}).then(()=>{He({id:a.id}).then(o=>{o.status==200?(_.success("\u79FB\u9664\u6210\u529F"),k()):_.error(o.message)}).catch(o=>{_.error(o.message)})}).catch(()=>{})};return(a,o)=>{const d=xe,r=Ie,i=je,p=ze,U=Re,S=Ue,f=ve,ie=Fe,se=ye,ne=Ce,de=be,re=he,L=Se,_e=Ee("Picture"),me=Be,N=ke,ce=we;return g(),q(P,null,[s("div",Je,[l(S,{justify:"space-between",align:"middle",class:"top-search"},{default:u(()=>[l(r,{span:6},{default:u(()=>[l(d,{type:"primary",onClick:ae},{default:u(()=>[Ke]),_:1}),l(d,{type:"success",onClick:ue},{default:u(()=>[Qe]),_:1})]),_:1}),l(r,{span:18},{default:u(()=>[l(S,{justify:"end"},{default:u(()=>[l(U,{class:"",inline:!0},{default:u(()=>[l(p,{label:"\u6DD8\u5B9D\u5E97\u94FA",style:{width:"200px"}},{default:u(()=>[l(i,{modelValue:n(m).keyword,"onUpdate:modelValue":o[0]||(o[0]=t=>n(m).keyword=t),placeholder:"\u8BF7\u8F93\u5165",clearable:""},null,8,["modelValue"])]),_:1}),l(p,{label:"\u5546\u54C1\u540D\u79F0/ID",style:{width:"200px"}},{default:u(()=>[l(i,{modelValue:B.name,"onUpdate:modelValue":o[1]||(o[1]=t=>B.name=t),placeholder:"\u8BF7\u8F93\u5165",clearable:""},null,8,["modelValue"])]),_:1}),l(p,null,{default:u(()=>[l(d,{type:"primary",onClick:n(k),icon:"Search"},{default:u(()=>[We]),_:1},8,["onClick"]),l(d,{type:"info",onClick:Z,icon:"RefreshRight"},{default:u(()=>[Xe]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),De((g(),y(ie,{data:n(m).list,border:""},{default:u(()=>[l(f,{prop:"commodity_id",label:"\u5546\u54C1ID",width:"200",align:"center"}),l(f,{prop:"",width:"200",label:"\u5546\u54C1\u540D\u79F0",align:"center"},{default:u(t=>[s("span",{title:t.row.commodity_name},w(t.row.commodity_name),9,Ye)]),_:1}),l(f,{prop:"seller_id",width:"200",label:"\u5E97\u94FAID",align:"center"}),l(f,{prop:"seller_name",width:"200",label:"\u5E97\u94FA\u540D\u79F0",align:"center"}),l(f,{prop:"",width:"100",label:"\u8DF3\u8F6C\u7C7B\u578B",align:"center"},{default:u(t=>[s("span",null,w((n(C).jumpOptions.find(F=>F.value==t.row.jump_type)||{}).label),1)]),_:1}),l(f,{prop:"",width:"200",label:"\u843D\u5730\u9875\u94FE\u63A5",align:"center","class-name":"line1"},{default:u(t=>[t.row.jump_type=="1"?(g(),q("span",{key:0,style:{cursor:"pointer",width:"200px"},title:n(j)+"#/cid_goods_detail?commodity_id="+t.row.commodity_id,onClick:F=>n(J)(n(j)+"#/cid_goods_detail?commodity_id="+t.row.commodity_id)},w(n(j)+"#/cid_goods_detail?commodity_id="+t.row.commodity_id),9,Ze)):z("",!0)]),_:1}),l(f,{prop:"",width:"200",label:"\u8BE6\u60C5\u9875\u94FE\u63A5",align:"center"},{default:u(t=>[s("span",{style:{cursor:"pointer",width:"200px"},onClick:F=>n(J)(t.row.details_page_url),title:t.row.details_page_url},w(t.row.details_page_url),9,el)]),_:1}),l(f,{label:"\u64CD\u4F5C",align:"center","min-width":"200",fixed:"right"},{default:u(t=>[l(d,{type:"primary",link:"",onClick:F=>te(t.row)},{default:u(()=>[ll]),_:2},1032,["onClick"]),l(d,{type:"warning",link:"",onClick:F=>oe(t.row)},{default:u(()=>[ul]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[ce,x.value]]),s("div",al,[l(se,{background:"",layout:"total, prev, pager, next","current-page":n(m).page,"page-size":n(m).page_size,total:n(m).total,onCurrentChange:n(W)},null,8,["current-page","page-size","total","onCurrentChange"])])]),l(L,{modelValue:E.value,"onUpdate:modelValue":o[9]||(o[9]=t=>E.value=t),title:n(C).operation=="edit"?"\u7F16\u8F91":"\u65B0\u589E",onClosed:I},{footer:u(()=>[s("span",nl,[l(d,{type:"",onClick:I},{default:u(()=>[dl]),_:1}),l(d,{type:"primary",onClick:o[8]||(o[8]=t=>M(h.value))},{default:u(()=>[rl]),_:1})])]),default:u(()=>[l(U,{class:"common-form",ref_key:"ruleFormRef",ref:h,model:e.value,rules:Q,"label-width":"200px"},{default:u(()=>[l(p,{label:"\u5E7F\u544A\u5E73\u53F0"},{default:u(()=>[l(ne,{effect:"plain",size:"large"},{default:u(()=>[tl]),_:1})]),_:1}),l(p,{label:"\u5546\u54C1ID",prop:"commodity_id"},{default:u(()=>[l(i,{type:"text",modelValue:e.value.commodity_id,"onUpdate:modelValue":o[2]||(o[2]=t=>e.value.commodity_id=t),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"]),l(d,{type:"primary",onClick:le,style:{"margin-left":"10px"}},{default:u(()=>[ol]),_:1})]),_:1}),l(p,{label:"\u5546\u54C1\u540D\u79F0",prop:"commodity_name"},{default:u(()=>[l(i,{type:"text",modelValue:e.value.commodity_name,"onUpdate:modelValue":o[3]||(o[3]=t=>e.value.commodity_name=t),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1}),l(p,{label:"\u5E97\u94FAID",prop:"seller_id"},{default:u(()=>[l(i,{type:"text",modelValue:e.value.seller_id,"onUpdate:modelValue":o[4]||(o[4]=t=>e.value.seller_id=t),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1}),l(p,{label:"\u5E97\u94FA\u540D\u79F0",prop:"seller_name"},{default:u(()=>[l(i,{type:"text",modelValue:e.value.seller_name,"onUpdate:modelValue":o[5]||(o[5]=t=>e.value.seller_name=t),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1}),l(p,{label:"\u8BE6\u60C5\u9875\u94FE\u63A5",prop:"details_page_url"},{default:u(()=>[l(i,{type:"text",modelValue:e.value.details_page_url,"onUpdate:modelValue":o[6]||(o[6]=t=>e.value.details_page_url=t),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1}),l(p,{label:"\u8DF3\u8F6C\u7C7B\u578B",prop:"jump",required:""},{default:u(()=>[s("div",il,[l(re,{modelValue:e.value.jump,"onUpdate:modelValue":o[7]||(o[7]=t=>e.value.jump=t),class:"ml-4"},{default:u(()=>[(g(!0),q(P,null,Ae(n(C).jumpOptions,(t,F)=>(g(),y(de,{label:t.value,size:"large",key:F},{default:u(()=>[c(w(t.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"]),e.value.jump=="1"?(g(),y(d,{key:0,type:"primary",onClick:ee},{default:u(()=>[sl]),_:1})):z("",!0)])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),l(L,{modelValue:A.value,"onUpdate:modelValue":o[11]||(o[11]=t=>A.value=t),title:"\u5236\u4F5C\u843D\u5730\u9875",onClosed:R},{footer:u(()=>[s("span",vl,[l(d,{type:"",onClick:R},{default:u(()=>[Fl]),_:1}),l(d,{type:"primary",onClick:o[10]||(o[10]=t=>M(h.value))},{default:u(()=>[yl]),_:1})])]),default:u(()=>[l(S,null,{default:u(()=>[l(r,{span:8},{default:u(()=>[l(U,{class:"common-form","label-width":"100px"},{default:u(()=>[l(p,{label:"\u843D\u5730\u9875\u4E3B\u56FE",required:""},{default:u(()=>[s("div",_l,[(g(),y(T,{key:G.value,files:e.value.back_img,onRefreshImage:X},null,8,["files"]))])]),_:1}),l(p,{label:"\u5F15\u5BFC\u6309\u94AE\u56FE",required:""},{default:u(()=>[s("div",ml,[(g(),y(T,{key:G.value,files:e.value.btn_img,onRefreshImage:Y},null,8,["files"]))])]),_:1})]),_:1})]),_:1}),l(r,{span:16,align:"center"},{default:u(()=>[s("div",cl,[pl,s("div",gl,[l(me,{class:"preview-img-icon",size:60,color:"#666"},{default:u(()=>[l(_e)]),_:1}),fl,e.value.back_img.length>0?(g(),y(N,{key:0,class:"preview-bg",src:e.value.back_img[0].url},null,8,["src"])):z("",!0),e.value.btn_img.length>0?(g(),y(N,{key:1,class:"preview-btn",src:e.value.btn_img[0].url},null,8,["src"])):z("",!0)])])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});const Rl=$e(Cl,[["__scopeId","data-v-a66abb01"]]);export{Rl as default};
