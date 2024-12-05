import{_ as H,a as M,f as V}from"./format-VSbp8lJM.js";import{B as z,i as E,s as U,o as s,c as f,r as K,m as J,u as q,a as Q,b,d as h,w,e as i,f as W,g as O,h as C,j as X,k as Y,l as Z,n as tt,p as n,t as g,q as u,v as L,F as et,x as nt,y as ot,z as v,A as S}from"./index-DX4UmDNc.js";import{_ as rt,s as st}from"./GroupDialog-snXl-TWy.js";import{s as at}from"./index-CLmEgjDY.js";import{s as pt,a as it}from"./index-BVqgPIqZ.js";import"./CustomFileUpload-nmJplHsg.js";var ut=function(r){var t=r.dt;return`
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background: `.concat(t("inputgroup.addon.background"),`;
    color: `).concat(t("inputgroup.addon.color"),`;
    border-top: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
    border-left: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
    border-bottom: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
    padding: 0.5rem 0.75rem;
    min-width: 2.5rem;
}

.p-inputgroup .p-floatlabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup-fluid .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-inputgroup-fluid .p-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon:last-child {
    border-right: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-inputtext,
.p-inputgroup > .p-floatlabel > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroup > .p-component + .p-inputgroupaddon,
.p-inputgroup > .p-inputwrapper > .p-inputtext + .p-inputgroupaddon,
.p-inputgroup > .p-floatlabel > .p-component + .p-inputgroupaddon {
    border-left: 0 none;
}

.p-inputgroup > .p-component:focus,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus,
.p-inputgroup > .p-floatlabel > .p-component:focus {
    z-index: 1;
}

.p-inputgroup > .p-component:focus ~ label,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus~label,
.p-inputgroup > .p-floatlabel > .p-component:focus~label {
    z-index: 1;
}

.p-inputgroupaddon:first-child,
.p-inputgroup button:first-child,
.p-inputgroup input:first-child,
.p-inputgroup > .p-inputwrapper:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-inputtext {
    border-top-left-radius: `).concat(t("inputgroup.addon.border.radius"),`;
    border-bottom-left-radius: `).concat(t("inputgroup.addon.border.radius"),`;
}

.p-inputgroup .p-floatlabel:first-child input {
    border-top-left-radius: `).concat(t("inputgroup.addon.border.radius"),`;
    border-bottom-left-radius: `).concat(t("inputgroup.addon.border.radius"),`;
}

.p-inputgroupaddon:last-child,
.p-inputgroup button:last-child,
.p-inputgroup input:last-child,
.p-inputgroup > .p-inputwrapper:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-inputtext {
    border-top-right-radius: `).concat(t("inputgroup.addon.border.radius"),`;
    border-bottom-right-radius: `).concat(t("inputgroup.addon.border.radius"),`;
}

.p-inputgroup .p-floatlabel:last-child input {
    border-top-right-radius: `).concat(t("inputgroup.addon.border.radius"),`;
    border-bottom-right-radius: `).concat(t("inputgroup.addon.border.radius"),`;
}

.p-inputgroup-fluid .p-button {
    width: auto;
}

.p-inputgroup-fluid .p-button.p-button-icon-only {
    width: 2.5rem;
}
`)},dt={root:function(r){var t=r.instance;return["p-inputgroup",{"p-inputgroup-fluid":t.hasFluid}]}},lt=z.extend({name:"inputgroup",theme:ut,classes:dt}),ct={name:"BaseInputGroup",extends:U,props:{fluid:{type:Boolean,default:null}},style:lt,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},R={name:"InputGroup",extends:ct,inheritAttrs:!1,inject:{$pcFluid:{default:null}},computed:{hasFluid:function(){return E(this.fluid)?!!this.$pcFluid:this.fluid}}};function mt(d,r,t,p,_,o){return s(),f("div",J({class:d.cx("root")},d.ptmi("root")),[K(d.$slots,"default")],16)}R.render=mt;const gt={__name:"Search",setup(d){const r=q(),t=Q(),p=b(),_=()=>{const o={...r.query};p.value==""?delete o.search:o.search=p.value,t.replace({query:o})};return(o,m)=>{const c=O,$=C,k=R;return s(),h(k,{class:"!w-1/3 !h-1/6"},{default:w(()=>[i(c,{modelValue:p.value,"onUpdate:modelValue":m[0]||(m[0]=B=>p.value=B),placeholder:"Keyword",class:"!p-1",onKeydown:W(_,["enter"])},null,8,["modelValue"]),i($,{icon:"pi pi-search",class:"text-sm",severity:"secondary",onClick:_})]),_:1})}}},ft={key:0,class:"absolute-center text-2xl"},_t={key:1},ht={class:"mb-5"},vt={class:"flex mb-5 justify-between items-center"},bt={class:"flex items-center gap-3"},yt={class:"text-xl font-bold"},xt={class:"bg-rose-50 rounded px-3 pt-4 pb-5"},wt={class:"flex gap-5"},$t={class:"font"},kt={class:"ql-container ql-snow",style:{"border-width":"0"}},Bt=["innerHTML"],It={class:"mt-10 flex justify-between items-center"},Gt=n("div",{class:"text-xl font-bold"},"Threads",-1),Lt={key:0,class:"text-center my-10 font-medium text-xl"},St={key:1,class:"mt-10"},Vt=ot('<div class="flex w-full"><div class="w-9/12 font-medium">Title</div><div class="w-2/12 font-medium">Created By</div><div class="w-1/12 text-center font-medium">Count</div><div class="w-2/12 text-end font-medium">Last Replied</div></div>',1),qt={class:"flex w-full"},Ct={class:"w-9/12 line-clamp-1 pr-5"},Rt={class:"w-2/12 line-clamp-1"},jt={class:"w-1/12 text-center"},Nt={class:"w-2/12 text-end"},Tt={class:"flex justify-between items-center mt-5"},zt={__name:"GroupView",setup(d){const r=q(),t=X(),p=Y(),_=b(!0),o=b({}),m=b({}),c=b(!0),$=e=>{const a=new URLSearchParams;return e.id&&a.append("id",e.id),e.page&&a.append("page",e.page),e.search&&a.append("search",e.search),a.toString()},k=async e=>{try{const a=$(e);if(t.isLogin){const x=await v.get(`group/isUserIn?id=${r.params.id}&userId=${t.user.id}`);c.value=x.data}else c.value=!1;const[I,y]=await Promise.all([v.get(`group/getById?id=${r.params.id}`),v.get(`thread/getByGroupId?${a}`)]);o.value=I.data,m.value=y.data}catch(a){console.log(a),p.error(a)}finally{_.value=!1}},B=async()=>{try{const e=await v.post("group/join",{groupId:r.params.id});c.value=e.data.result,p.success(e.data.message)}catch(e){console.log(e),p.error(e)}},j=async()=>{try{const e=await v.delete("group/exit",{params:{groupId:r.params.id}});c.value=!e.data.result,p.success(e.data.message)}catch(e){console.log(e),p.error(e)}};return Z(()=>({id:r.params.id,search:r.query.search,page:r.query.page}),k,{immediate:!0}),(e,a)=>{const I=it,y=pt,x=C,N=rt,G=at,T=st,A=H,F=tt("RouterLink"),P=gt,D=M;return _.value?(s(),f("div",ft,[i(I,{style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"transparent",animationDuration:".5s"})])):(s(),f("div",_t,[n("div",ht,[n("div",vt,[n("div",bt,[n("div",null,[o.value.avatar?(s(),h(y,{key:0,class:"p-overlay-badge !w-15 !h-15 border",image:o.value.avatar,size:"xlarge"},null,8,["image"])):(s(),h(y,{key:1,class:"p-overlay-badge !w-15 !h-15",icon:"pi pi-objects-column",size:"xlarge"}))]),n("div",yt,g(o.value.name),1)]),n("div",null,[!c.value&&u(t).isLogin&&u(t).user.id!==o.value.createdBy?(s(),h(x,{key:0,onClick:B,class:"font-thin ml-1"},{default:w(()=>[S("Join Group")]),_:1})):L("",!0),c.value&&u(t).isLogin&&u(t).user.id!==o.value.createdBy?(s(),h(x,{key:1,onClick:j,class:"font-thin ml-1"},{default:w(()=>[S("Exit Group")]),_:1})):L("",!0),u(t).isLogin&&u(t).user.id===o.value.createdBy?(s(),h(N,{key:2,isNew:!1,modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=l=>o.value=l)},null,8,["modelValue"])):L("",!0)])]),n("div",xt,[n("div",wt,[n("div",$t," Created At: "+g(o.value.createdAt?u(V)(o.value.createdAt,"MM-dd HH:mm"):""),1),n("div",null," Created By: "+g(o.value.username),1)]),i(G,{type:"dotted"}),n("div",kt,[n("div",{class:"ql-editor",innerHTML:o.value.intro},null,8,Bt)]),i(T,{style:{display:"none"}})])]),n("div",It,[Gt,i(A,{isNew:!0,groupId:u(r).params.id},null,8,["groupId"])]),m.value.count===0?(s(),f("div",Lt," No threads found! ")):(s(),f("div",St,[Vt,i(G,{type:"dotted",class:"!my-2"}),(s(!0),f(et,null,nt(m.value.threads,l=>(s(),f("div",{key:l.id},[n("div",qt,[n("div",Ct,[i(F,{to:{name:"post",params:{id:l.id}}},{default:w(()=>[S(g(l.title),1)]),_:2},1032,["to"])]),n("div",Rt,g(l.createdBy),1),n("div",jt,g(l.count),1),n("div",Nt,g(l.lastReplied?u(V)(l.lastReplied,"MM-dd HH:mm"):""),1)]),i(G,{type:"dotted",class:"!my-2"})]))),128))])),n("div",Tt,[i(P),i(D,{count:m.value.count||0,page:parseInt(u(r).query.page)||1},null,8,["count","page"])])]))}}};export{zt as default};
