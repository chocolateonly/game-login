import{d as x,r as i,u as I,a as z,o as R,E as G,b as L,c as A,v as M,k as y,l as N,n as e,w as o,p as a,q as P,s as S,m as h,t as T,A as w,H as j,I as q,D as U,J as H,K as J,G as K}from"./index.6b9f1d7a.js";import{u as O}from"./page.670b10f8.js";/* empty css                 *//* empty css                  *//* empty css               *//* empty css                     */import{f as Q}from"./cid.dcc30f65.js";const W={class:"container"},X=w("\u67E5\u8BE2"),Y=w("\u91CD\u7F6E"),Z=["title"],$={class:"pagination"},ue=x({__name:"goods_data",setup(ee){i();const b=I();i(!1);const u=z({commodity_name:""});i({id:""}),i("1");const r=i(!1),{query:t,goPage:C,goInit:_}=O(()=>m()),m=()=>{r.value=!0,Q({commodity_name:u.commodity_name,page_index:t.page,page_size:t.page_size,commodity_id:t.keyword}).then(s=>{r.value=!1,t.list=s.data.list,t.total=s.data.total_count}).catch(()=>{r.value=!1})};R(()=>{m()});const E=()=>{t.keyword="",u.commodity_name="",_()},v=s=>{b.push("/cid_goods_order?commodity_id="+s.commodity_id)};return(s,c)=>{const p=j,d=q,g=U,k=H,f=J,B=K,l=G,D=L,F=A,V=M;return y(),N("div",W,[e(f,{justify:"space-between",align:"middle",class:"top-search"},{default:o(()=>[e(B,{span:24},{default:o(()=>[e(f,{justify:"end"},{default:o(()=>[e(k,{class:"",inline:!0},{default:o(()=>[e(d,{label:"\u5546\u54C1\u540D\u79F0",style:{width:"200px"}},{default:o(()=>[e(p,{modelValue:u.commodity_name,"onUpdate:modelValue":c[0]||(c[0]=n=>u.commodity_name=n),placeholder:"\u8BF7\u8F93\u5165",clearable:""},null,8,["modelValue"])]),_:1}),e(d,{label:"\u5546\u54C1ID",style:{width:"200px"}},{default:o(()=>[e(p,{modelValue:a(t).keyword,"onUpdate:modelValue":c[1]||(c[1]=n=>a(t).keyword=n),placeholder:"\u8BF7\u8F93\u5165",clearable:""},null,8,["modelValue"])]),_:1}),e(d,null,{default:o(()=>[e(g,{type:"primary",onClick:a(_),icon:"Search"},{default:o(()=>[X]),_:1},8,["onClick"]),e(g,{type:"info",onClick:E,icon:"RefreshRight"},{default:o(()=>[Y]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),P((y(),S(D,{data:a(t).list,border:"",onRowClick:v},{default:o(()=>[e(l,{prop:"commodity_id",label:"\u5546\u54C1ID",width:"",align:"center"}),e(l,{prop:"",width:"",label:"\u5546\u54C1\u540D\u79F0",align:"center"},{default:o(n=>[h("span",{title:n.row.commodity_name},T(n.row.commodity_name),9,Z)]),_:1}),e(l,{prop:"order_count",width:"",label:"\u8BA2\u5355\u6570\u91CF",align:"center"}),e(l,{prop:"pay_count",width:"",label:"\u4ED8\u6B3E\u5355\u6570",align:"center"}),e(l,{prop:"order_gmv",width:"",label:"\u7535\u5546\u8BA2\u5355GMV",align:"center"}),e(l,{prop:"pay_gmv",width:"",label:"\u7535\u5546\u652F\u4ED8GMV",align:"center"})]),_:1},8,["data"])),[[V,r.value]]),h("div",$,[e(F,{background:"",layout:"total, prev, pager, next","current-page":a(t).page,"page-size":a(t).page_size,total:a(t).total,onCurrentChange:a(C)},null,8,["current-page","page-size","total","onCurrentChange"])])])}}});export{ue as default};
