import{B as y,U as E,s as T,o as r,c as b,r as f,m as i,a5 as U,F as V,ak as C,at as st,d as g,w as v,af as L,v as S,ag as D,K as F,p as l,M as w,O as N,au as ot,av as x,a0 as rt,N as it,a8 as H,ae as W,aw as k,R as lt,j as ct,k as ut,b as _,G as dt,n as bt,e as d,z as B,A as I,x as pt,t as vt,u as ht,g as ft,h as mt}from"./index-DX4UmDNc.js";import{a as gt,s as $t}from"./index-BVqgPIqZ.js";import{_ as yt}from"./CustomFileUpload-nmJplHsg.js";var Tt=function(t){var a=t.dt;return`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: `.concat(a("tabs.tablist.background"),`;
    border-style: solid;
    border-color: `).concat(a("tabs.tablist.border.color"),`;
    border-width: `).concat(a("tabs.tablist.border.width"),`;
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: `).concat(a("tabs.nav.button.background"),`;
    color: `).concat(a("tabs.nav.button.color"),`;
    width: `).concat(a("tabs.nav.button.width"),`;
    transition: color `).concat(a("tabs.transition.duration"),", outline-color ").concat(a("tabs.transition.duration"),", box-shadow ").concat(a("tabs.transition.duration"),`;
    box-shadow: `).concat(a("tabs.nav.button.shadow"),`;
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: `).concat(a("tabs.nav.button.focus.ring.shadow"),`;
    outline: `).concat(a("tabs.nav.button.focus.ring.width")," ").concat(a("tabs.nav.button.focus.ring.style")," ").concat(a("tabs.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(a("tabs.nav.button.focus.ring.offset"),`;
}

.p-tablist-nav-button:hover {
    color: `).concat(a("tabs.nav.button.hover.color"),`;
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
    right: 0;
}

.p-tab {
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    background: `).concat(a("tabs.tab.background"),`;
    border-width: `).concat(a("tabs.tab.border.width"),`;
    border-color: `).concat(a("tabs.tab.border.color"),`;
    color: `).concat(a("tabs.tab.color"),`;
    padding: `).concat(a("tabs.tab.padding"),`;
    font-weight: `).concat(a("tabs.tab.font.weight"),`;
    transition: background `).concat(a("tabs.transition.duration"),", border-color ").concat(a("tabs.transition.duration"),", color ").concat(a("tabs.transition.duration"),", outline-color ").concat(a("tabs.transition.duration"),", box-shadow ").concat(a("tabs.transition.duration"),`;
    margin: `).concat(a("tabs.tab.margin"),`;
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: `).concat(a("tabs.tab.focus.ring.shadow"),`;
    outline: `).concat(a("tabs.tab.focus.ring.width")," ").concat(a("tabs.tab.focus.ring.style")," ").concat(a("tabs.tab.focus.ring.color"),`;
    outline-offset: `).concat(a("tabs.tab.focus.ring.offset"),`;
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: `).concat(a("tabs.tab.hover.background"),`;
    border-color: `).concat(a("tabs.tab.hover.border.color"),`;
    color: `).concat(a("tabs.tab.hover.color"),`;
}

.p-tab-active {
    background: `).concat(a("tabs.tab.active.background"),`;
    border-color: `).concat(a("tabs.tab.active.border.color"),`;
    color: `).concat(a("tabs.tab.active.color"),`;
}

.p-tabpanels {
    background: `).concat(a("tabs.tabpanel.background"),`;
    color: `).concat(a("tabs.tabpanel.color"),`;
    padding: `).concat(a("tabs.tabpanel.padding"),`;
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: `).concat(a("tabs.tabpanel.focus.ring.shadow"),`;
    outline: `).concat(a("tabs.tabpanel.focus.ring.width")," ").concat(a("tabs.tabpanel.focus.ring.style")," ").concat(a("tabs.tabpanel.focus.ring.color"),`;
    outline-offset: `).concat(a("tabs.tabpanel.focus.ring.offset"),`;
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: `).concat(a("tabs.active.bar.bottom"),`;
    height: `).concat(a("tabs.active.bar.height"),`;
    background: `).concat(a("tabs.active.bar.background"),`;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`)},wt={root:function(t){var a=t.props;return["p-tabs p-component",{"p-tabs-scrollable":a.scrollable}]}},xt=y.extend({name:"tabs",theme:Tt,classes:wt}),kt={name:"BaseTabs",extends:T,props:{value:{type:String,default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:xt,provide:function(){return{$pcTabs:this,$parentInstance:this}}},j={name:"Tabs",extends:kt,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(t){this.id=t||E()},value:function(t){this.d_value=t}},mounted:function(){this.id=this.id||E()},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function _t(e,t,a,s,o,n){return r(),b("div",i({class:e.cx("root")},e.ptmi("root")),[f(e.$slots,"default")],16)}j.render=_t;var Bt={root:"p-tabpanels"},Ct=y.extend({name:"tabpanels",classes:Bt}),Lt={name:"BaseTabPanels",extends:T,props:{},style:Ct,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},M={name:"TabPanels",extends:Lt,inheritAttrs:!1};function Pt(e,t,a,s,o,n){return r(),b("div",i({class:e.cx("root"),role:"presentation"},e.ptmi("root")),[f(e.$slots,"default")],16)}M.render=Pt;var At={root:function(t){var a=t.instance;return["p-tabpanel",{"p-tabpanel-active":a.active}]}},It=y.extend({name:"tabpanel",classes:At}),Vt={name:"BaseTabPanel",extends:T,props:{value:{type:String,default:void 0},as:{type:String,default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:It,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},q={name:"TabPanel",extends:Vt,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var t;return U((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},attrs:function(){return i(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var t;return{id:this.id,tabindex:(t=this.$pcTabs)===null||t===void 0?void 0:t.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function St(e,t,a,s,o,n){var c,m;return n.$pcTabs?(r(),b(V,{key:1},[e.asChild?f(e.$slots,"default",{key:1,class:D(e.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs}):(r(),b(V,{key:0},[!((c=n.$pcTabs)!==null&&c!==void 0&&c.lazy)||n.active?C((r(),g(L(e.as),i({key:0,class:e.cx("root")},n.attrs),{default:v(function(){return[f(e.$slots,"default")]}),_:3},16,["class"])),[[st,(m=n.$pcTabs)!==null&&m!==void 0&&m.lazy?!0:n.active]]):S("",!0)],64))],64)):f(e.$slots,"default",{key:0})}q.render=St;var G={name:"ChevronLeftIcon",extends:F},Nt=l("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1),zt=[Nt];function Kt(e,t,a,s,o,n){return r(),b("svg",i({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),zt,16)}G.render=Kt;var Z={name:"ChevronRightIcon",extends:F},Rt=l("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"},null,-1),Ot=[Rt];function Et(e,t,a,s,o,n){return r(),b("svg",i({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),Ot,16)}Z.render=Et;var Ut={root:"p-tablist",content:function(t){var a=t.instance;return["p-tablist-content",{"p-tablist-viewport":a.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Dt=y.extend({name:"tablist",classes:Ut}),Ft={name:"BaseTabList",extends:T,props:{},style:Dt,provide:function(){return{$pcTabList:this,$parentInstance:this}}},J={name:"TabList",extends:Ft,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var t=this;this.$nextTick(function(){t.updateInkBar()}),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,a=w(t),s=t.scrollLeft-a;t.scrollLeft=s<=0?0:s},onNextButtonClick:function(){var t=this.$refs.content,a=w(t)-this.getVisibleButtonWidths(),s=t.scrollLeft+a,o=t.scrollWidth-a;t.scrollLeft=s>=o?o:s},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,a=t.content,s=t.inkbar,o=t.tabs,n=N(a,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(s.style.height=ot(n)+"px",s.style.top=x(n).top-x(o).top+"px"):(s.style.width=rt(n)+"px",s.style.left=x(n).left-x(o).left+"px")},updateButtonState:function(){var t=this.$refs,a=t.list,s=t.content,o=s.scrollLeft,n=s.scrollTop,c=s.scrollWidth,m=s.scrollHeight,P=s.offsetWidth,A=s.offsetHeight,u=[w(s),it(s)],h=u[0],$=u[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=n!==0,this.isNextButtonEnabled=a.offsetHeight>=A&&parseInt(n)!==m-$):(this.isPrevButtonEnabled=o!==0,this.isNextButtonEnabled=a.offsetWidth>=P&&parseInt(o)!==c-h)},getVisibleButtonWidths:function(){var t=this.$refs,a=t.prevBtn,s=t.nextBtn;return[a,s].reduce(function(o,n){return n?o+w(n):o},0)}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},components:{ChevronLeftIcon:G,ChevronRightIcon:Z},directives:{ripple:H}},Ht=["aria-label","tabindex"],Wt=["aria-orientation"],jt=["aria-label","tabindex"];function Mt(e,t,a,s,o,n){var c=W("ripple");return r(),b("div",i({ref:"list",class:e.cx("root")},e.ptmi("root")),[n.showNavigators&&o.isPrevButtonEnabled?C((r(),b("button",i({key:0,ref:"prevButton",class:e.cx("prevButton"),"aria-label":n.prevButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return n.onPrevButtonClick&&n.onPrevButtonClick.apply(n,arguments)})},e.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(r(),g(L(n.templates.previcon||"ChevronLeftIcon"),i({"aria-hidden":"true"},e.ptm("prevIcon")),null,16))],16,Ht)),[[c]]):S("",!0),l("div",i({ref:"content",class:e.cx("content"),onScroll:t[1]||(t[1]=function(){return n.onScroll&&n.onScroll.apply(n,arguments)})},e.ptm("content")),[l("div",i({ref:"tabs",class:e.cx("tabList"),role:"tablist","aria-orientation":n.$pcTabs.orientation||"horizontal"},e.ptm("tabList")),[f(e.$slots,"default"),l("span",i({ref:"inkbar",class:e.cx("activeBar"),role:"presentation","aria-hidden":"true"},e.ptm("activeBar")),null,16)],16,Wt)],16),n.showNavigators&&o.isNextButtonEnabled?C((r(),b("button",i({key:1,ref:"nextButton",class:e.cx("nextButton"),"aria-label":n.nextButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return n.onNextButtonClick&&n.onNextButtonClick.apply(n,arguments)})},e.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(r(),g(L(n.templates.nexticon||"ChevronRightIcon"),i({"aria-hidden":"true"},e.ptm("nextIcon")),null,16))],16,jt)),[[c]]):S("",!0)],16)}J.render=Mt;var qt={root:function(t){var a=t.instance,s=t.props;return["p-tab",{"p-tab-active":a.active,"p-disabled":s.disabled}]}},Gt=y.extend({name:"tab",classes:qt}),Zt={name:"BaseTab",extends:T,props:{value:{type:String,default:void 0},disabled:{type:Boolean,default:!1},as:{type:String,default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Gt,provide:function(){return{$pcTab:this,$parentInstance:this}}},Q={name:"Tab",extends:Zt,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var a=this.findNextTab(t.currentTarget);a?this.changeFocusedTab(t,a):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var a=this.findPrevTab(t.currentTarget);a?this.changeFocusedTab(t,a):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var a=this.findFirstTab();this.changeFocusedTab(t,a),t.preventDefault()},onEndKey:function(t){var a=this.findLastTab();this.changeFocusedTab(t,a),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findNextTab:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=a?t:t.nextElementSibling;return s?k(s,"data-p-disabled")||k(s,"data-pc-section")==="inkbar"?this.findNextTab(s):N(s,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=a?t:t.previousElementSibling;return s?k(s,"data-p-disabled")||k(s,"data-pc-section")==="inkbar"?this.findPrevTab(s):N(s,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.content.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.content.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,a){lt(a),this.scrollInView(a)},scrollInView:function(t){var a;t==null||(a=t.scrollIntoView)===null||a===void 0||a.call(t,{block:"nearest"})}},computed:{active:function(){var t;return U((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},attrs:function(){return i(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}}},directives:{ripple:H}};function Jt(e,t,a,s,o,n){var c=W("ripple");return e.asChild?f(e.$slots,"default",{key:1,class:D(e.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs,onClick:n.onClick}):C((r(),g(L(e.as),i({key:0,class:e.cx("root"),onClick:n.onClick},n.attrs),{default:v(function(){return[f(e.$slots,"default")]}),_:3},16,["class","onClick"])),[[c]])}Q.render=Jt;const Qt={key:0,class:"absolute-center text-2xl"},Xt={class:"flex flex-col gap-2 mt-3 mb-5"},Yt=l("label",{for:"email"},"Email",-1),te={class:"flex flex-col gap-2 mb-5"},ee=l("label",{for:"username"},"Username",-1),ae={class:"flex flex-col gap-2 mb-5"},ne=l("label",{for:"avatar"},"Avatar",-1),se={class:"flex"},oe={class:"flex flex-wrap mt-3 items-center justify-start"},re={class:"line-clamp-1"},ue={__name:"UserView",setup(e){const t=ht(),a=ct(),s=ut(),o=_(!0),n=_({username:"",avatar:"",email:""}),c=_([]),m=_([]),P=async()=>{try{if(a.isLogin){const[u,h,$]=await Promise.all([B.get(`user/getById?id=${t.params.id}`),B.get("group/getByUserId"),B.get("thread/getByUserId")]);n.value=u.data,c.value=h.data,m.value=$.data}}catch(u){console.log(u),s.error(u)}finally{o.value=!1}},A=async()=>{try{const u=await B.post("user/updateById",{...n.value});a.updateUsername(n.value.username),s.success(u.data.message)}catch(u){console.log(u),s.error(u)}};return dt(P),(u,h)=>{const $=gt,z=Q,X=J,K=ft,Y=yt,tt=mt,R=q,O=$t,et=bt("RouterLink"),at=M,nt=j;return o.value?(r(),b("div",Qt,[d($,{style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"transparent",animationDuration:".5s"})])):(r(),g(nt,{key:1,value:"0"},{default:v(()=>[d(X,null,{default:v(()=>[d(z,{value:"0"},{default:v(()=>[I("User Info")]),_:1}),d(z,{value:"1"},{default:v(()=>[I("My Group")]),_:1})]),_:1}),d(at,null,{default:v(()=>[d(R,{value:"0"},{default:v(()=>[l("div",Xt,[Yt,d(K,{id:"email",placeholder:"email",modelValue:n.value.email,"onUpdate:modelValue":h[0]||(h[0]=p=>n.value.email=p),disabled:""},null,8,["modelValue"])]),l("div",te,[ee,d(K,{id:"username",placeholder:"username",modelValue:n.value.username,"onUpdate:modelValue":h[1]||(h[1]=p=>n.value.username=p)},null,8,["modelValue"])]),l("div",ae,[ne,d(Y,{avatar:n.value.avatar,"onUpdate:avatar":h[2]||(h[2]=p=>n.value.avatar=p)},null,8,["avatar"])]),l("div",se,[d(tt,{onClick:A},{default:v(()=>[I("Update")]),_:1})])]),_:1}),d(R,{value:"1"},{default:v(()=>[l("div",oe,[(r(!0),b(V,null,pt(c.value,p=>(r(),b("div",{key:p.id,class:"lg:w-1/6 w-1/5 mx-1 mb-8 text-center"},[d(et,{to:{name:"thread",params:{id:p.groupId}}},{default:v(()=>[l("div",null,[p.avatar?(r(),g(O,{key:0,class:"p-overlay-badge !w-24 !h-24 border",image:p.avatar,size:"xlarge"},null,8,["image"])):(r(),g(O,{key:1,class:"p-overlay-badge !w-24 !h-24 border",icon:"pi pi-objects-column",size:"xlarge"}))]),l("div",re,vt(p.name),1)]),_:2},1032,["to"])]))),128))])]),_:1})]),_:1})]),_:1}))}}};export{ue as default};
