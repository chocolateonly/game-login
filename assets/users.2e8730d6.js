import{d as oe,r as c,u as te,a as N,o as de,E as se,e as ne,b as re,c as ie,Y as _e,Z as pe,f as me,g as ce,v as fe,k as p,l as S,m as A,n as a,w as u,p as m,q as ve,s as f,A as s,t as T,y as x,F as $,z as Fe,B as v,D as ge,G as be,H as De,I as ke,J as ze,K as Ce,L as ye}from"./index.6b9f1d7a.js";import{u as we}from"./page.670b10f8.js";/* empty css                 *//* empty css                   *//* empty css                          *//* empty css                 *//* empty css                  *//* empty css               *//* empty css                     */import{u as Be}from"./cid.5b3c30d0.js";import{h as Ee,i as Ve,j as he,k as Ae}from"./cid.dcc30f65.js";const xe={class:"container"},je=s("\u6DFB\u52A0\u5B50\u8D26\u53F7"),Ue=s("\u67E5\u8BE2"),Ie=s("\u91CD\u7F6E"),qe=s("\u6388\u6743"),Pe=s("\u5DF2\u6388\u6743"),Re=s("\u7F16\u8F91"),Le=s("\u5220\u9664"),Ne={class:"pagination"},Se={class:"dialog-footer"},Te=s("\u53D6\u6D88"),$e=s("\u786E\u8BA4"),Ge=s("\u5426"),Oe=s("\u662F"),Me={class:"dialog-footer"},He=s("\u53D6\u6D88"),Je=s("\u786E\u8BA4"),da=oe({__name:"users",setup(Ke){const b=c(),y=Be();te();const D=c(!1),g=c(!1),w=N({username:""}),n=c({id:"",is_main_user:!1});c("1");const e=c({nickname:"",username:"",password:"",taobao_adzone_id:"",jd_adzone_id:"",pdd_adzone_id:"",platform:["0"],goods_delete:""}),F=N({nickname:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BA2\u6237\u540D\u79F0",trigger:"blur"}],username:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7",trigger:"blur"}],password:[{required:!0,message:"\u8BF7\u586B\u5199\u81F3\u5C116\u4F4D\u5BC6\u7801",trigger:"blur",min:6}],platform:[{required:!0,message:"\u8BF7\u9009\u62E9\u5E73\u53F0",trigger:"blur"}],taobao_adzone_id:[{required:!0,message:"\u8BF7\u8F93\u5165\u6DD8\u5B9D\u63A8\u5E7F\u4F4DPID",trigger:"blur"}],jd_adzone_id:[],pdd_adzone_id:[]}),B=c(!1),E=c(!1),{query:r,goPage:G,goInit:k}=we(()=>I()),I=()=>{E.value=!0,Ee({username:w.username,page_index:r.page,page_size:r.page_size,nickname:r.keyword}).then(o=>{E.value=!1,r.list=o.data.lists,r.total=o.data.total_count}).catch(()=>{E.value=!1})};de(()=>{I()});const O=()=>{var o;e.value.platform.includes("0")?F.taobao_adzone_id=[{required:!0,message:"\u8BF7\u8F93\u5165\u6DD8\u5B9D\u63A8\u5E7F\u4F4DPID",trigger:"blur"}]:(F.taobao_adzone_id=[],e.value.taobao_adzone_id=""),e.value.platform.includes("1")?F.jd_adzone_id=[{required:!0,message:"\u8BF7\u8F93\u5165\u4EAC\u4E1C\u63A8\u5E7F\u4F4DPID",trigger:"blur"}]:(F.jd_adzone_id=[],e.value.jd_adzone_id=""),e.value.platform.includes("2")?F.pdd_adzone_id=[{required:!0,message:"\u8BF7\u8F93\u5165\u62FC\u591A\u591A\u63A8\u5E7F\u4F4DPID",trigger:"blur"}]:(F.pdd_adzone_id=[],e.value.pdd_adzone_id=""),(o=b.value)==null||o.clearValidate()},M=o=>{window.open(o.authorization_url,"_blank")},H=()=>{r.keyword="",w.username="",k()},V=()=>{var o;b&&((o=b.value)==null||o.resetFields()),D.value=!1,e.value.goods_delete="",e.value.nickname="",e.value.username="",e.value.password="",e.value.taobao_adzone_id="",e.value.jd_adzone_id="",e.value.pdd_adzone_id="",e.value.platform=["0"],n.value.id="",n.value.is_main_user=!1},J=async o=>{!o||await o.validate((t,_)=>{if(t){if(g.value)return;g.value=!0;const z={nickname:e.value.nickname,username:e.value.username,password:e.value.password,taobao_adzone_id:e.value.taobao_adzone_id,jd_adzone_id:e.value.jd_adzone_id,pdd_adzone_id:e.value.pdd_adzone_id,platform:e.value.platform.join(",")};n.value.id?Ve({id:n.value.id,...z}).then(d=>{V(),g.value=!1,d.status==200&&(v.success("\u7F16\u8F91\u6210\u529F"),k())}).catch(d=>{g.value=!1,v.error(d.message)}):he({...z}).then(d=>{g.value=!1,V(),d.status==200&&(v.success("\u6DFB\u52A0\u6210\u529F"),k())}).catch(d=>{g.value=!1,v.error(d.message)})}else v.error("\u8BF7\u5C06\u4FE1\u606F\u586B\u5199\u5B8C\u6574")})},K=()=>{D.value=!0,y.setOperation("")},Y=o=>{D.value=!0,y.setOperation("edit"),n.value={...o},e.value.nickname=o.nickname,e.value.username=o.username,e.value.password=o.password,e.value.taobao_adzone_id=o.taobao_adzone_id,e.value.jd_adzone_id=o.jd_adzone_id,e.value.pdd_adzone_id=o.pdd_adzone_id,e.value.platform=o.user_platform},Z=o=>{B.value=!0,n.value.id=o.id},j=()=>{B.value=!1,e.value.goods_delete="",n.value.id=""},Q=()=>{Ae({id:n.value.id,type:e.value.goods_delete?"1":"0"}).then(o=>{o.status==200?(j(),v.success("\u5220\u9664\u6210\u529F"),k()):v.error(o.message)}).catch(o=>{v.error(o.message)})};return(o,t)=>{const _=ge,z=be,d=De,i=ke,U=ze,q=Ce,C=se,P=ne,W=re,X=ie,ee=_e,ae=pe,R=ye,L=me,ue=ce,le=fe;return p(),S($,null,[A("div",xe,[a(q,{justify:"space-between",align:"middle",class:"top-search"},{default:u(()=>[a(z,{span:6},{default:u(()=>[a(_,{type:"primary",onClick:K},{default:u(()=>[je]),_:1})]),_:1}),a(z,{span:18},{default:u(()=>[a(q,{justify:"end"},{default:u(()=>[a(U,{class:"",inline:!0},{default:u(()=>[a(i,{label:"\u8D26\u53F7ID",style:{width:"200px"}},{default:u(()=>[a(d,{modelValue:w.username,"onUpdate:modelValue":t[0]||(t[0]=l=>w.username=l),placeholder:"\u8BF7\u8F93\u5165",clearable:""},null,8,["modelValue"])]),_:1}),a(i,{label:"\u8D26\u53F7\u540D\u79F0",style:{width:"200px"}},{default:u(()=>[a(d,{modelValue:m(r).keyword,"onUpdate:modelValue":t[1]||(t[1]=l=>m(r).keyword=l),placeholder:"\u8BF7\u8F93\u5165",clearable:""},null,8,["modelValue"])]),_:1}),a(i,null,{default:u(()=>[a(_,{type:"primary",onClick:m(k),icon:"Search"},{default:u(()=>[Ue]),_:1},8,["onClick"]),a(_,{type:"info",onClick:H,icon:"RefreshRight"},{default:u(()=>[Ie]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),ve((p(),f(W,{data:m(r).list,border:""},{default:u(()=>[a(C,{prop:"username",label:"\u8D26\u53F7ID",width:"",align:"center"}),a(C,{prop:"nickname",width:"",label:"\u8D26\u53F7\u540D\u79F0",align:"center"}),a(C,{prop:"",width:"",label:"\u8D26\u53F7\u6743\u9650",align:"center"},{default:u(l=>[s(T(l.row.is_main_user?"\u4E3B\u8D26\u53F7":"\u5B50\u8D26\u53F7"),1)]),_:1}),a(C,{prop:"",width:"",label:"\u8D26\u6237\u6388\u6743",align:"center"},{default:u(l=>[l.row.is_authorization?(p(),f(P,{key:1,type:"success",round:""},{default:u(()=>[Pe]),_:1})):(p(),f(P,{key:0,type:"",round:"",onClick:h=>M(l.row)},{default:u(()=>[qe]),_:2},1032,["onClick"]))]),_:1}),a(C,{label:"\u64CD\u4F5C",align:"center","min-width":"",fixed:"right"},{default:u(l=>[a(_,{type:"primary",link:"",onClick:h=>Y(l.row)},{default:u(()=>[Re]),_:2},1032,["onClick"]),l.row.is_main_user?x("",!0):(p(),f(_,{key:0,type:"warning",link:"",onClick:h=>Z(l.row)},{default:u(()=>[Le]),_:2},1032,["onClick"]))]),_:1})]),_:1},8,["data"])),[[le,E.value]]),A("div",Ne,[a(X,{background:"",layout:"total, prev, pager, next","current-page":m(r).page,"page-size":m(r).page_size,total:m(r).total,onCurrentChange:m(G)},null,8,["current-page","page-size","total","onCurrentChange"])])]),a(R,{modelValue:D.value,"onUpdate:modelValue":t[10]||(t[10]=l=>D.value=l),title:m(y).operation=="edit"?"\u7F16\u8F91":"\u65B0\u589E",onClosed:V},{footer:u(()=>[A("span",Se,[a(_,{type:"",onClick:V},{default:u(()=>[Te]),_:1}),a(_,{type:"primary",onClick:t[9]||(t[9]=l=>J(b.value))},{default:u(()=>[$e]),_:1})])]),default:u(()=>[a(U,{class:"common-form",ref_key:"ruleFormRef",ref:b,model:e.value,rules:F,"label-width":"200px"},{default:u(()=>[a(i,{label:"\u5BA2\u6237\u540D\u79F0",prop:"nickname"},{default:u(()=>[a(d,{type:"text",modelValue:e.value.nickname,"onUpdate:modelValue":t[2]||(t[2]=l=>e.value.nickname=l),placeholder:"\u8BF7\u8F93\u5165",disabled:n.value.is_main_user},null,8,["modelValue","disabled"])]),_:1}),a(i,{label:"\u8D26\u53F7",prop:"username"},{default:u(()=>[a(d,{type:"text",modelValue:e.value.username,"onUpdate:modelValue":t[3]||(t[3]=l=>e.value.username=l),placeholder:"\u8BF7\u8F93\u5165",disabled:n.value.is_main_user},null,8,["modelValue","disabled"])]),_:1}),a(i,{label:"\u5BC6\u7801",prop:"password"},{default:u(()=>[a(d,{type:"password",modelValue:e.value.password,"onUpdate:modelValue":t[4]||(t[4]=l=>e.value.password=l),placeholder:"\u8BF7\u8F93\u5165",autocomplete:"new-password"},null,8,["modelValue"])]),_:1}),a(i,{label:"\u63A8\u5E7F\u5E73\u53F0",prop:"platform"},{default:u(()=>[a(ae,{modelValue:e.value.platform,"onUpdate:modelValue":t[5]||(t[5]=l=>e.value.platform=l),class:"ml-4",onChange:O,disabled:n.value.is_main_user},{default:u(()=>[(p(!0),S($,null,Fe(m(y).platformOptions,(l,h)=>(p(),f(ee,{label:l.value,size:"large",key:h},{default:u(()=>[s(T(l.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1}),e.value.platform.includes("0")?(p(),f(i,{key:0,label:"\u6DD8\u5B9D\u63A8\u5E7F\u4F4DPID",prop:"taobao_adzone_id"},{default:u(()=>[a(d,{type:"text",modelValue:e.value.taobao_adzone_id,"onUpdate:modelValue":t[6]||(t[6]=l=>e.value.taobao_adzone_id=l),placeholder:"\u8BF7\u8F93\u5165",disabled:n.value.is_main_user},null,8,["modelValue","disabled"])]),_:1})):x("",!0),e.value.platform.includes("1")?(p(),f(i,{key:1,label:"\u4EAC\u4E1C\u63A8\u5E7F\u4F4DPID",prop:"jd_adzone_id"},{default:u(()=>[a(d,{type:"text",modelValue:e.value.jd_adzone_id,"onUpdate:modelValue":t[7]||(t[7]=l=>e.value.jd_adzone_id=l),placeholder:"\u8BF7\u8F93\u5165",disabled:n.value.is_main_user},null,8,["modelValue","disabled"])]),_:1})):x("",!0),e.value.platform.includes("2")?(p(),f(i,{key:2,label:"\u62FC\u591A\u591A\u63A8\u5E7F\u4F4DPID",prop:"pdd_adzone_id"},{default:u(()=>[a(d,{type:"text",modelValue:e.value.pdd_adzone_id,"onUpdate:modelValue":t[8]||(t[8]=l=>e.value.pdd_adzone_id=l),placeholder:"\u8BF7\u8F93\u5165",disabled:n.value.is_main_user},null,8,["modelValue","disabled"])]),_:1})):x("",!0)]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),a(R,{modelValue:B.value,"onUpdate:modelValue":t[12]||(t[12]=l=>B.value=l),title:"\u5220\u9664",onClosed:j},{footer:u(()=>[A("span",Me,[a(_,{type:"",onClick:j},{default:u(()=>[He]),_:1}),a(_,{type:"primary",onClick:Q},{default:u(()=>[Je]),_:1})])]),default:u(()=>[a(U,{class:"common-form","label-width":"200px"},{default:u(()=>[a(i,{label:"\u662F\u5426\u5220\u9664\u8D26\u53F7\u4E0B\u5F55\u5165\u7684\u5546\u54C1",prop:"platform"},{default:u(()=>[a(ue,{modelValue:e.value.goods_delete,"onUpdate:modelValue":t[11]||(t[11]=l=>e.value.goods_delete=l),class:"ml-4"},{default:u(()=>[a(L,{label:"",size:"large"},{default:u(()=>[Ge]),_:1}),a(L,{label:"1",size:"large"},{default:u(()=>[Oe]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});export{da as default};
