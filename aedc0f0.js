(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{509:function(t,e,n){"use strict";n.r(e);n(237),n(14),n(37);var o={props:{startSystem:{type:String,default:null},destinations:{type:Array,default:function(){return[]}},jumpRange:{type:Number,default:function(){return 50}},loopRoute:{type:Boolean,default:function(){return!1}},buttonText:{type:String,default:function(){return"System"}}},computed:{routeUrl:function(){var t=this,e="[";return this.destinations.forEach((function(n,i){e+='"'.concat(n.system_name,'"'),i!==t.destinations.length-1&&(e+=",")})),e+="]","".concat("https://spansh.co.uk/tourist/results/SUPPORT_KRAIT","?destination=").concat(encodeURIComponent(e),"&range=").concat(encodeURIComponent(this.jumpRange),"&source=").concat(encodeURIComponent(this.startSystem),"&loop=").concat(encodeURIComponent(Number(this.loopRoute)))}}},r=n(91),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-button",{attrs:{type:"submit",variant:"info",href:t.routeUrl,target:"_blank",disabled:0==t.destinations.length||!t.startSystem}},[t._v(t._s(t.destinations.length>0?t.startSystem?"Get Route":"Select Start System":"Select "+t.buttonText+" first"))])}),[],!1,null,null,null);e.default=component.exports}}]);