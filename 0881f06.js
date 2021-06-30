(window.webpackJsonp=window.webpackJsonp||[]).push([[13,7,9,10],{509:function(t,e,r){"use strict";r.r(e);r(237),r(14),r(37);var n={props:{startSystem:{type:String,default:null},destinations:{type:Array,default:function(){return[]}},jumpRange:{type:Number,default:function(){return 50}},loopRoute:{type:Boolean,default:function(){return!1}},buttonText:{type:String,default:function(){return"System"}}},computed:{routeUrl:function(){var t=this,e="[";return this.destinations.forEach((function(r,i){e+='"'.concat(r.system_name,'"'),i!==t.destinations.length-1&&(e+=",")})),e+="]","".concat("https://spansh.co.uk/tourist/results/SUPPORT_KRAIT","?destination=").concat(encodeURIComponent(e),"&range=").concat(encodeURIComponent(this.jumpRange),"&source=").concat(encodeURIComponent(this.startSystem),"&loop=").concat(encodeURIComponent(Number(this.loopRoute)))}}},o=r(91),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-button",{attrs:{type:"submit",variant:"info",href:t.routeUrl,target:"_blank",disabled:0==t.destinations.length||!t.startSystem}},[t._v(t._s(t.destinations.length>0?t.startSystem?"Get Route":"Select Start System":"Select "+t.buttonText+" first"))])}),[],!1,null,null,null);e.default=component.exports},510:function(t,e,r){"use strict";r.r(e);var n={props:{buttonText:{type:String,default:function(){return"System"}},destinations:{type:Array,default:function(){return[]}}},computed:{startSystem:{get:function(){return this.$store.state.utils.spansh.startSystem},set:function(t){this.$store.commit("utils/spansh/setStartSystem",t)}},jumpRange:{get:function(){return this.$store.state.utils.spansh.jumpRange},set:function(t){this.$store.commit("utils/spansh/setJumpRange",t)}},loopRoute:{get:function(){return this.$store.state.utils.spansh.loopRoute},set:function(t){this.$store.commit("utils/spansh/setLoopRoute",t)}}}},o=r(91),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-form",{attrs:{"bg-dark":""},on:{submit:function(t){t.preventDefault()}}},[r("b-form-group",{attrs:{id:"input-group-startSystem",label:"Start System:","label-for":"input-startSystem",description:"System to start the Journey. Leave emtpy to select over at spansh!"}},[r("b-form-select",{attrs:{id:"input-startSystem",options:t.destinations,"value-field":"system_name","text-field":"system_name"},model:{value:t.startSystem,callback:function(e){t.startSystem=e},expression:"startSystem"}})],1),t._v(" "),r("b-form-group",{attrs:{id:"input-group-jumpRange",label:"Jump range:","label-for":"input-jumpRange",description:"Jump range of your current ship."}},[r("b-form-input",{attrs:{id:"input-jumpRange",type:"number",placeholder:"Jump range",required:""},model:{value:t.jumpRange,callback:function(e){t.jumpRange=e},expression:"jumpRange"}})],1),t._v(" "),r("b-form-group",{attrs:{id:"input-group-loopRoute","label-for":"input-loopRoute",description:"End the trip in the starting system."}},[r("b-form-checkbox",{attrs:{id:"input-loopRoute"},model:{value:t.loopRoute,callback:function(e){t.loopRoute=e},expression:"loopRoute"}},[t._v("Loop Route")])],1),t._v(" "),r("UtilsSpanshRouteButton",{attrs:{"start-system":t.startSystem,destinations:t.destinations,"jump-range":t.jumpRange,"loop-route":t.loopRoute,"button-text":t.buttonText}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UtilsSpanshRouteButton:r(509).default})},515:function(t,e,r){"use strict";r.r(e);r(17),r(16),r(12),r(18),r(14),r(19);var n=r(2),o=r(121);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:function(){return{limitResultsOptions:["1","2","3","6","12","24","48","72","96","All"]}},computed:c({materialCategories:function(){return this.$store.state.engineering.materialFinder.materialCategories},materialGrades:function(){return this.$store.state.engineering.materialFinder.materialGrades},selectedMaterialCategory:{get:function(){return this.$store.state.engineering.materialFinder.selectedMaterialCategory},set:function(t){this.$store.commit("engineering/materialFinder/setSelectedMaterialCategory",t)}},selectedMaterialGrade:{get:function(){return this.$store.state.engineering.materialFinder.selectedMaterialGrade},set:function(t){this.$store.commit("engineering/materialFinder/setSelectedMaterialGrade",t)}},selectedMaterial:{get:function(){return this.$store.state.engineering.materialFinder.selectedMaterial},set:function(t){this.$store.commit("engineering/materialFinder/setSelectedMaterial",t)}},limitResults:{get:function(){return this.$store.state.engineering.materialFinder.limitResults},set:function(t){this.$store.commit("engineering/materialFinder/setLimitResults",t)}}},Object(o.c)({getMaterialsOptions:"engineering/materialFinder/getMaterialsOptions"})),methods:c({},Object(o.b)({getSystemsWithDrops:"engineering/materialFinder/getSystemsWithDrops"}))},d=r(91),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-form",{on:{submit:function(t){t.preventDefault()}}},[r("b-form-group",{attrs:{id:"input-group-material-category",label:"Type","label-for":"input-material-category"}},[r("b-form-select",{attrs:{id:"input-material-category",options:t.materialCategories},model:{value:t.selectedMaterialCategory,callback:function(e){t.selectedMaterialCategory=e},expression:"selectedMaterialCategory"}})],1),t._v(" "),r("b-form-group",{attrs:{id:"input-group-material-grade",label:"Grade","label-for":"input-material-grade"}},[r("b-form-select",{attrs:{id:"input-material-grade",options:t.materialGrades},model:{value:t.selectedMaterialGrade,callback:function(e){t.selectedMaterialGrade=e},expression:"selectedMaterialGrade"}})],1),t._v(" "),r("b-form-group",{attrs:{id:"input-group-material",label:"Material","label-for":"input-material"}},[r("b-form-select",{attrs:{id:"input-material",options:t.getMaterialsOptions},model:{value:t.selectedMaterial,callback:function(e){t.selectedMaterial=e},expression:"selectedMaterial"}})],1),t._v(" "),r("b-form-group",{attrs:{id:"input-group-limit-results",label:"Limit Range (Hours)","label-for":"input-limit-results"}},[r("b-form-select",{attrs:{id:"input-limit-results",options:t.limitResultsOptions},model:{value:t.limitResults,callback:function(e){t.limitResults=e},expression:"limitResults"}})],1),t._v(" "),r("b-button",{attrs:{disabled:null==t.selectedMaterial,type:"submit",variant:"info"},on:{click:t.getSystemsWithDrops}},[t._v("Search")])],1)}),[],!1,null,null,null);e.default=component.exports},520:function(t,e,r){"use strict";r.r(e);r(17),r(16),r(12),r(18),r(14),r(19);var n=r(2),o=r(121);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={components:{EngineeringMaterialFinderMaterialSelectionForm:r(515).default},data:function(){return{systemListFields:[{key:"system_name",label:"System - click to copy"},"count"]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)({getSystems:"engineering/materialFinder/getSystems"})),methods:{copySystemName:function(t){var e=document.createElement("input");e.value=t.system_name,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}}},m=r(91),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-row",[r("b-col",[r("h1",[t._v("Material Finder (BETA)")])])],1),t._v(" "),r("b-row",[r("b-col",[r("p",[t._v("\n        Get a list of systems where a specific material has been collected\n        recently.\n      ")])])],1),t._v(" "),r("b-row",[r("b-col",{attrs:{lg:"3"}},[r("b-card",{staticClass:"my-2",attrs:{"bg-variant":"secondary"}},[r("h2",[t._v("Material")]),t._v(" "),r("EngineeringMaterialFinderMaterialSelectionForm"),t._v(" "),r("hr"),t._v(" "),r("UtilsSpanshRouteForm",{attrs:{"button-text":"Material",destinations:t.getSystems}})],1)],1),t._v(" "),r("b-col",[r("b-table",{attrs:{items:t.getSystems,fields:t.systemListFields,responsive:"sm",striped:"",borderless:"",dark:"","primary-key":"id"},on:{"row-clicked":t.copySystemName}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UtilsSpanshRouteForm:r(510).default})}}]);