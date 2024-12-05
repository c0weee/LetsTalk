import{B as i,s as p,o as e,c as s,r as d,m as t,t as g,d as v,ag as u,af as f,v as m,p as h}from"./index-DX4UmDNc.js";var y=function(r){var a=r.dt;return`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: `.concat(a("avatar.width"),`;
    height: `).concat(a("avatar.height"),`;
    font-size: `).concat(a("avatar.font.size"),`;
    background: `).concat(a("avatar.background"),`;
    border-radius: `).concat(a("avatar.border.radius"),`;
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: `).concat(a("avatar.font.size"),`;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: `).concat(a("avatar.lg.width"),`;
    height: `).concat(a("avatar.lg.width"),`;
    font-size: `).concat(a("avatar.lg.font.size"),`;
}

.p-avatar-lg .p-avatar-icon {
    font-size: `).concat(a("avatar.lg.font.size"),`;
}

.p-avatar-xl {
    width: `).concat(a("avatar.xl.width"),`;
    height: `).concat(a("avatar.xl.width"),`;
    font-size: `).concat(a("avatar.xl.font.size"),`;
}

.p-avatar-xl .p-avatar-icon {
    font-size: `).concat(a("avatar.xl.font.size"),`;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-left: `).concat(a("avatar.group.offset"),`;
}

.p-avatar-group .p-avatar {
    border: 2px solid `).concat(a("avatar.group.border.color"),`;
}
`)},b={root:function(r){var a=r.props;return["p-avatar p-component",{"p-avatar-image":a.image!=null,"p-avatar-circle":a.shape==="circle","p-avatar-lg":a.size==="large","p-avatar-xl":a.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},k=i.extend({name:"avatar",theme:y,classes:b}),S={name:"BaseAvatar",extends:p,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:k,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},$={name:"Avatar",extends:S,inheritAttrs:!1,emits:["error"],methods:{onError:function(r){this.$emit("error",r)}}},z=["aria-labelledby","aria-label"],w=["src","alt"];function B(n,r,a,l,c,o){return e(),s("div",t({class:n.cx("root"),"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel},n.ptmi("root")),[d(n.$slots,"default",{},function(){return[n.label?(e(),s("span",t({key:0,class:n.cx("label")},n.ptm("label")),g(n.label),17)):n.$slots.icon?(e(),v(f(n.$slots.icon),{key:1,class:u(n.cx("icon"))},null,8,["class"])):n.icon?(e(),s("span",t({key:2,class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16)):n.image?(e(),s("img",t({key:3,src:n.image,alt:n.ariaLabel,onError:r[0]||(r[0]=function(){return o.onError&&o.onError.apply(o,arguments)})},n.ptm("image")),null,16,w)):m("",!0)]})],16,z)}$.render=B;var A=function(r){var a=r.dt;return`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: `.concat(a("progressspinner.color.1"),`;
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: `).concat(a("progressspinner.color.1"),`;
    }
    40% {
        stroke: `).concat(a("progressspinner.color.2"),`;
    }
    66% {
        stroke: `).concat(a("progressspinner.color.3"),`;
    }
    80%,
    90% {
        stroke: `).concat(a("progressspinner.color.4"),`;
    }
}
`)},E={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},x=i.extend({name:"progressspinner",theme:A,classes:E}),L={name:"BaseProgressSpinner",extends:p,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:x,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},P={name:"ProgressSpinner",extends:L,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},D=["fill","stroke-width"];function C(n,r,a,l,c,o){return e(),s("div",t({class:n.cx("root"),role:"progressbar"},n.ptmi("root")),[(e(),s("svg",t({class:n.cx("spin"),viewBox:"25 25 50 50",style:o.svgStyle},n.ptm("spin")),[h("circle",t({class:n.cx("circle"),cx:"50",cy:"50",r:"20",fill:n.fill,"stroke-width":n.strokeWidth,strokeMiterlimit:"10"},n.ptm("circle")),null,16,D)],16))],16)}P.render=C;export{P as a,$ as s};
