function _defineProperties(l,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"+D1H":function(l,n,e){"use strict";e.d(n,"a",function(){return t});var t=function(){function l(l){var n=this;this.router=l,this.selectedTabIndex=0,this._tabs=[],l.events.subscribe(function(l){l.url&&(n.myTabSelection?n.myTabSelection=!1:n.checkAndSet())})}var n=l.prototype;return n.ngOnInit=function(){this.checkAndSet()},n.checkAndSet=function(){this.selectedTabIndex=this.getSelectedIndex(this.tabs,this.router)},n.getSelectedIndex=function(l,n){return l.findIndex(function(l){return l.url===n.url||l.subTabs&&l.subTabs.indexOf(n.url)>-1})},n.show=function(){this.isDropVisible=!this.isDropVisible},n.onclick=function(l){l.currentTarget.focus()},n.hide=function(){this.isDropVisible=!1},n.onTabSelection=function(l,n){l.stopPropagation(),this.router.navigateByUrl(this.tabs[n].url),this.selectedTabIndex=n,this.myTabSelection=!0},n.ngOnChanges=function(l){l.tabs&&l.tabs.currentValue&&this.checkAndSet()},_createClass(l,[{key:"tabs",get:function(){return this._tabs},set:function(l){this._tabs=l,this.checkAndSet()}}]),l}()},"6eNE":function(l,n,e){"use strict";var t=e("8Y7J"),u=e("N31F"),o=e("+D1H"),r=e("iInd"),i=e("tKJU"),a=e("uUZD"),s=e("s7LF"),c=e("SVse"),d=e("g7AK"),p=e("fF59"),b=e("S5y4"),f=e("yf7A"),h=e("L10H"),g=e("s6ns"),v=e("EApP");e.d(n,"b",function(){return m}),e.d(n,"c",function(){return S}),e.d(n,"a",function(){return k});var m=t["\u0275crt"]({encapsulation:0,styles:[[".custom-dashboard-container[_ngcontent-%COMP%]{padding-left:32px;padding-right:32px;padding-top:3rem;background-color:#fff}.reportSelection[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:16px}.reportsDropdown[_ngcontent-%COMP%]{position:absolute;z-index:99999999;right:8px;width:300px;top:50px;background-color:#f3f3f3}.reportsDropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{max-height:350px;overflow-y:auto;overflow-x:hidden}.reportsDropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:12px;display:flex;align-items:center;color:#5a5a5a;font-family:'IBM Plex Sans';font-size:14px;letter-spacing:0;line-height:39px}.reportControls[_ngcontent-%COMP%]{display:flex}.reportSelect[_ngcontent-%COMP%]{margin-right:10px;padding:9px 10px!important}.bx--btn--secondary[_ngcontent-%COMP%]{background-color:#393939;padding-right:12px}.bx--btn--secondary[_ngcontent-%COMP%]:hover{background-color:#161616}"]],data:{}});function x(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-e4-tabs",[],null,null,null,u.b,u.a)),t["\u0275did"](1,638976,null,0,o.a,[r.o],{tabs:[0,"tabs"]},null)],function(l,n){l(n,1,0,n.component.tabs)},null)}function y(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,7,"li",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,6,"ibm-checkbox",[],[[2,"bx--checkbox-wrapper",null],[2,"bx--form-item",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"ngModelChange"]],function(l,n,e){var t=!0;return"change"===n&&(t=!1!==l.component.onReportSelectionChange(e,l.context.$implicit)&&t),"ngModelChange"===n&&(t=!1!==(l.context.$implicit.showReport=e)&&t),t},i.b,i.a)),t["\u0275did"](2,4243456,null,0,a.a,[t.ChangeDetectorRef],null,{change:"change"}),t["\u0275prd"](1024,null,s.p,function(l){return[l]},[a.a]),t["\u0275did"](4,671744,null,0,s.u,[[8,null],[8,null],[8,null],[6,s.p]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,s.q,null,[s.u]),t["\u0275did"](6,16384,null,0,s.r,[[4,s.q]],null,null),(l()(),t["\u0275ted"](7,0,[" ",""]))],function(l,n){l(n,4,0,n.context.$implicit.showReport)},function(l,n){l(n,1,0,t["\u0275nov"](n,2).checkboxWrapperClass,t["\u0275nov"](n,2).formItemClass,t["\u0275nov"](n,6).ngClassUntouched,t["\u0275nov"](n,6).ngClassTouched,t["\u0275nov"](n,6).ngClassPristine,t["\u0275nov"](n,6).ngClassDirty,t["\u0275nov"](n,6).ngClassValid,t["\u0275nov"](n,6).ngClassInvalid,t["\u0275nov"](n,6).ngClassPending),l(n,7,0,n.context.$implicit.label)})}function w(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" No results found. "]))],null,null)}function C(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,15,"div",[["class","reportsDropdown"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,9,"div",[["class","bx--row reset-padding-margin common-search-bar-1 flex-1"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,8,"div",[["class","bx--search"],["data-search",""],["role","search"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,5,"input",[["class","bx--search-input"],["id","search__input-1"],["placeholder","Search report"],["style","height: 40px;"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,e){var u=!0,o=l.component;return"input"===n&&(u=!1!==t["\u0275nov"](l,4)._handleInput(e.target.value)&&u),"blur"===n&&(u=!1!==t["\u0275nov"](l,4).onTouched()&&u),"compositionstart"===n&&(u=!1!==t["\u0275nov"](l,4)._compositionStart()&&u),"compositionend"===n&&(u=!1!==t["\u0275nov"](l,4)._compositionEnd(e.target.value)&&u),"ngModelChange"===n&&(u=!1!==(o.searchQueryText=e)&&u),"ngModelChange"===n&&(u=!1!==o.searchModelChanged.next(e)&&u),u},null,null)),t["\u0275did"](4,16384,null,0,s.c,[t.Renderer2,t.ElementRef,[2,s.a]],null,null),t["\u0275prd"](1024,null,s.p,function(l){return[l]},[s.c]),t["\u0275did"](6,671744,null,0,s.u,[[8,null],[8,null],[8,null],[6,s.p]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,s.q,null,[s.u]),t["\u0275did"](8,16384,null,0,s.r,[[4,s.q]],null,null),(l()(),t["\u0275eld"](9,0,null,null,1,":svg:svg",[["aria-hidden","true"],["class","bx--search-magnifier"],["focusable","false"],["height","20"],["preserveAspectRatio","xMidYMid meet"],["style","will-change: transform;"],["viewBox","0 0 16 16"],["width","20"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),t["\u0275eld"](10,0,null,null,0,":svg:path",[["d","M15 14.3L10.7 10c1.9-2.3 1.6-5.8-.7-7.7S4.2.7 2.3 3 .7 8.8 3 10.7c2 1.7 5 1.7 7 0l4.3 4.3.7-.7zM2 6.5C2 4 4 2 6.5 2S11 4 11 6.5 9 11 6.5 11 2 9 2 6.5z"]],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,4,"ul",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,y)),t["\u0275did"](13,278528,null,0,c.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,w)),t["\u0275did"](15,16384,null,0,c.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,6,0,e.searchQueryText),l(n,13,0,e.reportsForDropdown),l(n,15,0,!e.reportsForDropdown.length)},function(l,n){l(n,3,0,t["\u0275nov"](n,8).ngClassUntouched,t["\u0275nov"](n,8).ngClassTouched,t["\u0275nov"](n,8).ngClassPristine,t["\u0275nov"](n,8).ngClassDirty,t["\u0275nov"](n,8).ngClassValid,t["\u0275nov"](n,8).ngClassInvalid,t["\u0275nov"](n,8).ngClassPending)})}function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"button",[["class","addReport button-goal"],["ibmButton","danger"],["style","width: 145px;"]],[[2,"bx--btn",null],[2,"bx--btn--primary",null],[2,"bx--btn--secondary",null],[2,"bx--btn--tertiary",null],[2,"bx--btn--ghost",null],[2,"bx--btn--danger",null],[2,"bx--btn--danger--primary",null],[2,"bx--skeleton",null],[2,"bx--btn--sm",null],[2,"bx--toolbar-action",null],[2,"bx--overflow-menu",null]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.onGenerateReport(e)&&t),t},null,null)),t["\u0275did"](1,16384,null,0,d.a,[],{ibmButton:[0,"ibmButton"]},null),(l()(),t["\u0275eld"](2,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["New Report"])),(l()(),t["\u0275eld"](4,0,null,null,1,":svg:svg",[["class","icon-white"],["ibmIconAdd20",""]],null,null,null,null,null)),t["\u0275did"](5,4210688,null,0,p.a,[t.ElementRef],null,null)],function(l,n){l(n,1,0,"danger")},function(l,n){l(n,0,1,[t["\u0275nov"](n,1).baseClass,t["\u0275nov"](n,1).primaryButton,t["\u0275nov"](n,1).secondaryButton,t["\u0275nov"](n,1).tertiaryButton,t["\u0275nov"](n,1).ghostButton,t["\u0275nov"](n,1).dangerButton,t["\u0275nov"](n,1).dangerPrimaryButton,t["\u0275nov"](n,1).skeleton,t["\u0275nov"](n,1).smallSize,t["\u0275nov"](n,1).toolbarAction,t["\u0275nov"](n,1).overflowMenu])})}function I(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,16,"div",[["class","reportControls"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,13,"div",[["style","position: relative;"]],null,[[null,"clickOutside"]],function(l,n,e){var t=!0;return"clickOutside"===n&&(t=!1!==l.component.onClickedOutside(e)&&t),t},null,null)),t["\u0275did"](2,737280,null,0,b.ClickOutsideDirective,[t.ElementRef,t.NgZone,t.PLATFORM_ID],null,{clickOutside:"clickOutside"}),(l()(),t["\u0275eld"](3,0,null,null,9,"button",[["class","reportSelect"]],[[2,"bx--btn",null],[2,"bx--btn--primary",null],[2,"bx--btn--secondary",null],[2,"bx--btn--tertiary",null],[2,"bx--btn--ghost",null],[2,"bx--btn--danger",null],[2,"bx--btn--danger--primary",null],[2,"bx--skeleton",null],[2,"bx--btn--sm",null],[2,"bx--toolbar-action",null],[2,"bx--overflow-menu",null]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.onSelectReport(e)&&t),t},null,null)),t["\u0275did"](4,16384,null,0,d.a,[],{ibmButton:[0,"ibmButton"]},null),(l()(),t["\u0275eld"](5,0,null,null,7,":svg:svg",[["class","icon-white"],["enable-background","new 0 0 24 24"],["height","24px"],["viewBox","0 0 24 24"],["width","24px"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,1,":svg:g",[],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,0,":svg:rect",[["fill","none"],["height","24"],["width","24"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,4,":svg:g",[],null,null,null,null,null)),(l()(),t["\u0275eld"](9,0,null,null,0,":svg:g",[],null,null,null,null,null)),(l()(),t["\u0275eld"](10,0,null,null,2,":svg:g",[],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,0,":svg:path",[["d","M22,8l-4-4v3H3v2h15v3L22,8z"]],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,null,0,":svg:path",[["d","M2,16l4,4v-3h15v-2H6v-3L2,16z"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,C)),t["\u0275did"](14,16384,null,0,c.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,R)),t["\u0275did"](16,16384,null,0,c.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,2,0),l(n,4,0,e.getReportSelectIbmButtonTheme()),l(n,14,0,e.showSelectReport),l(n,16,0,!e.myFocusArea)},function(l,n){l(n,3,1,[t["\u0275nov"](n,4).baseClass,t["\u0275nov"](n,4).primaryButton,t["\u0275nov"](n,4).secondaryButton,t["\u0275nov"](n,4).tertiaryButton,t["\u0275nov"](n,4).ghostButton,t["\u0275nov"](n,4).dangerButton,t["\u0275nov"](n,4).dangerPrimaryButton,t["\u0275nov"](n,4).skeleton,t["\u0275nov"](n,4).smallSize,t["\u0275nov"](n,4).toolbarAction,t["\u0275nov"](n,4).overflowMenu])})}function S(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,11,"div",[["class","custom-dashboard-container"]],null,null,null,null,null)),t["\u0275prd"](512,null,c["\u0275NgStyleImpl"],c["\u0275NgStyleR2Impl"],[t.ElementRef,t.KeyValueDiffers,t.Renderer2]),t["\u0275did"](2,278528,null,0,c.NgStyle,[c["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),t["\u0275pod"](3,{padding:0}),(l()(),t["\u0275eld"](4,0,null,null,5,"div",[["class","reportSelection"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,x)),t["\u0275did"](6,16384,null,0,c.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](7,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,I)),t["\u0275did"](9,16384,null,0,c.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](10,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](11,212992,null,0,r.t,[r.b,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null],t.ChangeDetectorRef],null,null)],function(l,n){var e=n.component,t=l(n,3,0,e.myFocusArea?0:null);l(n,2,0,t),l(n,6,0,e.tabs&&e.tabs.length&&!e.myFocusArea),l(n,9,0,!e.myFocusArea),l(n,11,0)},null)}var k=t["\u0275ccf"]("app-custom-dashboard",f.a,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-custom-dashboard",[],null,null,null,S,m)),t["\u0275did"](1,245760,null,0,f.a,[h.a,g.e,r.o,v.j,r.a],null,null)],function(l,n){l(n,1,0)},null)},{myFocusArea:"myFocusArea"},{},[])},DOUa:function(l,n,e){"use strict";e.d(n,"a",function(){return i});var t=e("8Y7J"),u=e("O9pe"),o=function(){function l(){this.focusable=!1}return l.decorators=[{type:t.Component,args:[{selector:"ibm-icon-data-share20",template:'\n    <svg\n      ibmIconDataShare20\n      [ariaLabel]="ariaLabel"\n      [ariaLabelledby]="ariaLabelledby"\n      [ariaHidden]="ariaHidden"\n      [title]="title"\n      [isFocusable]="focusable"\n      [attr.class]="innerClass">\n    </svg>\n  '}]}],l.propDecorators={ariaLabel:[{type:t.Input}],ariaLabelledby:[{type:t.Input}],ariaHidden:[{type:t.Input}],title:[{type:t.Input}],focusable:[{type:t.Input}],innerClass:[{type:t.Input}]},l}(),r=function(){function l(l){this.elementRef=l,this.isFocusable=!1}return l.prototype.ngAfterViewInit=function(){var n=this.elementRef.nativeElement;n.setAttribute("xmlns","http://www.w3.org/2000/svg");for(var e=(new DOMParser).parseFromString('<svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M5 25v-9.172l-3.586 3.586L0 18l6-6 6 6-1.414 1.414L7 15.828V25h12v2H7a2.002 2.002 0 0 1-2-2zm19-3h4a2.002 2.002 0 0 1 2 2v4a2.002 2.002 0 0 1-2 2h-4a2.002 2.002 0 0 1-2-2v-4a2.002 2.002 0 0 1 2-2zm4 6v-4h-4.002L24 28zM27 6v9.172l3.586-3.586L32 13l-6 6-6-6 1.414-1.414L25 15.172V6H13V4h12a2.002 2.002 0 0 1 2 2zM2 6h6v2H2zm0-4h8v2H2z"></path></svg>',"image/svg+xml").documentElement.firstChild;e;)n.appendChild(n.ownerDocument.importNode(e,!0)),e=e.nextSibling;for(var t=Object(u.a)({width:20,height:20,viewBox:"0 0 32 32",title:this.title,"aria-label":this.ariaLabel,"aria-labelledby":this.ariaLabelledby,"aria-hidden":this.ariaHidden,focusable:this.isFocusable.toString()}),o=Object.keys(t),r=0;r<o.length;r++){var i=o[r],a=t[i];"title"!==i&&a&&n.setAttribute(i,a)}if(t.title){var s=document.createElement("title");s.textContent=t.title,s.setAttribute("id","data-share20-"+ ++l.titleIdCounter),n.appendChild(s),n.setAttribute("aria-labelledby","data-share20-"+l.titleIdCounter)}},l.titleIdCounter=0,l.decorators=[{type:t.Directive,args:[{selector:"[ibmIconDataShare20]"}]}],l.ctorParameters=function(){return[{type:t.ElementRef}]},l.propDecorators={ariaLabel:[{type:t.Input}],ariaLabelledby:[{type:t.Input}],ariaHidden:[{type:t.Input}],title:[{type:t.Input}],isFocusable:[{type:t.Input}]},l}(),i=function(){function l(){}return l.decorators=[{type:t.NgModule,args:[{declarations:[o,r],exports:[o,r]}]}],l}()},GzH4:function(l,n,e){"use strict";e.d(n,"a",function(){return t});var t=function(){}},J1zZ:function(l,n,e){"use strict";var t=e("8Y7J"),u=e("FS8H"),o=e("Amkq"),r=e("WeWU"),i=e("oljc"),a=e("g7AK"),s=e("SVse"),c=e("fF59"),d=e("YB+d"),p=e("s6ns");e.d(n,"a",function(){return v});var b=t["\u0275crt"]({encapsulation:0,styles:[[".add-custom-report-container[_ngcontent-%COMP%]{background-color:#fff;padding:32px;min-width:600px}.add-custom-report-input[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.generate-button[_ngcontent-%COMP%]{width:90px;font-size:16px}.generate-button-container[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse;margin-top:32px}.close[_ngcontent-%COMP%]{cursor:pointer;width:16px;height:16px;opacity:.3}.close[_ngcontent-%COMP%]:hover{opacity:1}.close[_ngcontent-%COMP%]:after, .close[_ngcontent-%COMP%]:before{position:absolute;left:15px;content:' ';height:16px;width:2px;background-color:#333}.close[_ngcontent-%COMP%]:before{transform:rotate(45deg)}.close[_ngcontent-%COMP%]:after{transform:rotate(-45deg)}.icon-close[_ngcontent-%COMP%]{cursor:pointer;fill:#da1e28}"]],data:{}});function f(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Save"]))],null,null)}function h(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Add"]))],null,null)}function g(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,19,"div",[["class","add-custom-report-container"],["style","position: relative;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,4,"div",[["style","display: flex;align-items: center;justify-content: space-between;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"span",[["style","font-size: 18px;font-weight: 600;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Report Name"])),(l()(),t["\u0275eld"](4,0,null,null,1,":svg:svg",[["class","icon-close"],["ibmIconClose20",""]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.cancel()&&t),t},null,null)),t["\u0275did"](5,4210688,null,0,u.a,[t.ElementRef],null,null),(l()(),t["\u0275eld"](6,0,null,null,4,"div",[["class","add-custom-report-input"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,3,"ibm-label",[],[[2,"bx--form-item",null]],null,null,o.b,o.a)),t["\u0275did"](8,1097728,null,0,r.a,[],null,null),(l()(),t["\u0275eld"](9,0,null,1,1,"input",[["ibmText",""],["theme","light"],["type","text"]],[[2,"bx--text-input",null],[2,"bx--text-input--invalid",null],[2,"bx--skeleton",null],[2,"bx--text-input--light",null]],[[null,"keydown"],[null,"keyup"]],function(l,n,e){var t=!0,u=l.component;return"keydown"===n&&(t=!1!==u.onKey(e)&&t),"keyup"===n&&(t=!1!==u.onKey(e)&&t),t},null,null)),t["\u0275did"](10,16384,null,0,i.a,[],{theme:[0,"theme"]},null),(l()(),t["\u0275eld"](11,0,null,null,8,"div",[["class","generate-button-container"]],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,null,7,"button",[["class","generate-button button-goal"],["ibmButton","danger"]],[[8,"disabled",0],[2,"bx--btn",null],[2,"bx--btn--primary",null],[2,"bx--btn--secondary",null],[2,"bx--btn--tertiary",null],[2,"bx--btn--ghost",null],[2,"bx--btn--danger",null],[2,"bx--btn--danger--primary",null],[2,"bx--skeleton",null],[2,"bx--btn--sm",null],[2,"bx--toolbar-action",null],[2,"bx--overflow-menu",null]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.onGenerateReport(e)&&t),t},null,null)),t["\u0275did"](13,16384,null,0,a.a,[],{ibmButton:[0,"ibmButton"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,f)),t["\u0275did"](15,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,h)),t["\u0275did"](17,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](18,0,null,null,1,":svg:svg",[["class","icon-white"],["ibmIconAdd20",""]],null,null,null,null,null)),t["\u0275did"](19,4210688,null,0,c.a,[t.ElementRef],null,null)],function(l,n){var e=n.component;l(n,10,0,"light"),l(n,13,0,"danger"),l(n,15,0,e.editMode),l(n,17,0,!e.editMode)},function(l,n){var e=n.component;l(n,7,0,t["\u0275nov"](n,8).labelClass),l(n,9,0,t["\u0275nov"](n,10).inputClass,t["\u0275nov"](n,10).invalid,t["\u0275nov"](n,10).skeleton,t["\u0275nov"](n,10).isLightTheme),l(n,12,1,[!e.reportLabel,t["\u0275nov"](n,13).baseClass,t["\u0275nov"](n,13).primaryButton,t["\u0275nov"](n,13).secondaryButton,t["\u0275nov"](n,13).tertiaryButton,t["\u0275nov"](n,13).ghostButton,t["\u0275nov"](n,13).dangerButton,t["\u0275nov"](n,13).dangerPrimaryButton,t["\u0275nov"](n,13).skeleton,t["\u0275nov"](n,13).smallSize,t["\u0275nov"](n,13).toolbarAction,t["\u0275nov"](n,13).overflowMenu])})}var v=t["\u0275ccf"]("app-add-custom-report",d.a,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-add-custom-report",[],null,null,null,g,b)),t["\u0275did"](1,114688,null,0,d.a,[p.l,p.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[])},N31F:function(l,n,e){"use strict";var t=e("8Y7J"),u=e("SVse");e("+D1H"),e("iInd"),e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i});var o=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function r(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"li",[["aria-selected","true"],["class","bx--tabs__nav-item"],["data-target",".tab-1-default"],["role","tab"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.onTabSelection(e,l.context.index)&&t),t},null,null)),t["\u0275prd"](512,null,u["\u0275NgClassImpl"],u["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](2,278528,null,0,u.NgClass,[u["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](3,{"bx--tabs__nav-item--selected":0}),(l()(),t["\u0275eld"](4,0,null,null,1,"a",[["aria-controls","tab-panel-1-default"],["class","bx--tabs__nav-link"],["href","javascript:void(0)"],["role","tab"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.onTabSelection(e,l.context.index)&&t),t},null,null)),(l()(),t["\u0275ted"](5,null,["",""]))],function(l,n){var e=l(n,3,0,n.component.selectedTabIndex===n.context.index);l(n,2,0,"bx--tabs__nav-item",e)},function(l,n){l(n,5,0,n.context.$implicit.title)})}function i(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,15,"div",[["class","tab-list-container"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,11,"div",[["class","bx--tabs"],["data-tabs",""]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,4,"div",[["class","bx--tabs-trigger"],["focusable","true"],["tabindex","0"]],null,[[null,"click"],[null,"focus"],[null,"blur"]],function(l,n,e){var t=!0,u=l.component;return"click"===n&&(t=!1!==u.onclick(e)&&t),"focus"===n&&(t=!1!==u.show()&&t),"blur"===n&&(t=!1!==u.hide()&&t),t},null,null)),(l()(),t["\u0275eld"](3,0,null,null,1,"a",[["class","bx--tabs-trigger-text"],["focusable","true"],["href","javascript:void(0)"],["tabindex","-1"]],null,null,null,null,null)),(l()(),t["\u0275ted"](4,null,["",""])),(l()(),t["\u0275eld"](5,0,null,null,1,":svg:svg",[["aria-hidden","true"],["focusable","true"],["height","6"],["preserveAspectRatio","xMidYMid meet"],["style","will-change: transform;"],["viewBox","0 0 10 6"],["width","10"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,0,":svg:path",[["d","M5 6L0 1 0.7 0.3 5 4.6 9.3 0.3 10 1z"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,5,"ul",[["class","bx--tabs__nav"],["role","tablist"]],null,null,null,null,null)),t["\u0275prd"](512,null,u["\u0275NgClassImpl"],u["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](9,278528,null,0,u.NgClass,[u["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](10,{"bx--tabs__nav--hidden":0}),(l()(),t["\u0275and"](16777216,null,null,1,null,r)),t["\u0275did"](12,278528,null,0,u.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](13,0,null,null,2,"div",[["class","bx--tab-content"]],null,null,null,null,null)),(l()(),t["\u0275eld"](14,0,null,null,1,"div",[["aria-hidden","false"],["aria-labelledby","tab-link-1-default"],["class","tab-1-default"],["id","tab-panel-1-default"],["role","tabpanel"]],null,null,null,null,null)),t["\u0275ncd"](null,0)],function(l,n){var e=n.component,t=l(n,10,0,!e.isDropVisible);l(n,9,0,"bx--tabs__nav",t),l(n,12,0,e.tabs)},function(l,n){var e=n.component;l(n,4,0,null==e.tabs[e.selectedTabIndex]?null:e.tabs[e.selectedTabIndex].title)})}},"Vd/R":function(l,n,e){"use strict";e.d(n,"a",function(){return t});var t=function(){}},"YB+d":function(l,n,e){"use strict";e.d(n,"a",function(){return t});var t=function(){function l(l,n){this.dialogRef=l,this.data=n,this.reportLabel="",this.editMode=!!n.editMode,this.editMode&&n.reportLabel&&(this.reportLabel=n.reportLabel)}var n=l.prototype;return n.ngOnInit=function(){},n.onKey=function(l){this.reportLabel=l.target.value},n.onGenerateReport=function(l){this.dialogRef.close({label:this.reportLabel})},n.cancel=function(){this.dialogRef.close()},l}()},e5uG:function(l,n,e){"use strict";e.d(n,"a",function(){return t}),e("yf7A");var t=function(){}},yf7A:function(l,n,e){"use strict";e.d(n,"a",function(){return a});var t=e("mrSG"),u=(e("L10H"),e("YB+d")),o=e("XNiG"),r=e("Kj3r"),i=e("HTWL"),a=function(){function l(l,n,e,t,u){this.customReportService=l,this.dialog=n,this._router=e,this.toasterService=t,this.activatedRoute=u,this.tabs=[],this.reports=[],this.reportsForDropdown=[],this.searchModelChanged=new o.a,this.searchQueryText="",this.showSelectReport=!1}var n=l.prototype;return n.getReportSelectIbmButtonTheme=function(){return this.showSelectReport?"danger":"secondary"},n.onGenerateReport=function(l){var n=this,e=this;this.reportDialogRef=this.dialog.open(u.a,{data:{reportLabel:""}}),this.reportDialogRef.afterClosed().subscribe(function(l){l&&l.label&&""!=l.label.trim()&&(n.tabs.length<3?(e.isAddNewReportDocked=!0,e.customReportService.generateReport(l.label,!0)):e.customReportService.generateReport(l.label,!1))})},n.onSelectReport=function(l){this.showSelectReport=!this.showSelectReport},n.ngOnDestroy=function(){this.searchModelChangeSubscription&&this.searchModelChangeSubscription.unsubscribe(),this.reportsSub&&this.reportsSub.unsubscribe(),this.navigationSub&&this.navigationSub.unsubscribe(),this.routeSub&&this.routeSub.unsubscribe(),this.reportDialogRef&&this.reportDialogRef.close()},n.ngOnInit=function(){return Object(t.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark(function l(){var n=this;return regeneratorRuntime.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:this.searchModelChangeSubscription=this.searchModelChanged.pipe(Object(r.a)(600)).subscribe(function(l){n.searchQueryText=l,n.reportsForDropdown=n.reports.filter(function(l){return l.label.toLowerCase().indexOf(n.searchQueryText.trim().toLowerCase())>-1})}),this.navigationSub=this.customReportService.getSeportNavigationSubject().subscribe(function(l){l&&l.reportId&&n._router.navigateByUrl(n.myFocusArea?"/home/my-focus-area/"+l.reportId:"/dashboard/"+l.reportId)}),this.reportsSub=this.customReportService.getReportListing(this.myFocusArea).subscribe(function(l){n.calculateTabs(l)});case 1:case"end":return l.stop()}},l,this)}))},n.calculateTabs=function(l){var n=this;this.tabs=[],this.reports=[],this.reportsForDropdown=[],l.sort(function(l,n){return l.addedTimestamp-n.addedTimestamp}),l.forEach(function(l){l.content=l.label,l.selected=l.showReport,n.reports.push(l),n.reportsForDropdown.push(l),l.showReport&&n.tabs.push({title:l.label,url:n.myFocusArea?"/home/my-focus-area/"+l.id:"/dashboard/"+l.id})}),this.checkTabs()},n.checkTabs=function(){if(0==this.tabs.length)this.tabs.push({title:"Custom Report",url:this.myFocusArea?"/home/my-focus-area/custom":"/dashboard/custom"}),this._router.navigateByUrl(this.myFocusArea?"/home/my-focus-area/custom":"/dashboard/custom");else if(this.isAddNewReportDocked)this._router.navigateByUrl(this.tabs[this.tabs.length-1].url),this.isAddNewReportDocked=!1;else{var l=window.location.href.split("/")[window.location.href.split("/").length-1];if(l){var n=this.tabs.find(function(n){return n.url.indexOf(l)>-1})||this.tabs[0];this._router.navigateByUrl(n.url)}}},n.onClickedOutside=function(l){this.showSelectReport=!1},n.onReportSelectionChange=function(l,n){var e=this;n.selected=l.checked,n.showReport=l.checked;var t=this.findReportItem(n.id);t.selected=l.checked,t.showReport=l.checked;var u=this.reports.filter(function(l){return l.selected}).map(function(l){return l.reportId});u.length<1?setTimeout(function(){n.selected=!0,n.showReport=!0,t.selected=!0,t.showReport=!0,e.toasterService.error(i.a.MIN_ONE_REPORT_NEEDED)},100):u.length>3?setTimeout(function(){n.selected=!1,n.showReport=!1,t.selected=!1,t.showReport=!1,e.toasterService.error(i.a.MAX_THREE_REPORTS_ALLOWED)},100):this.customReportService.markReportForShow(u).subscribe(function(l){l.success&&(e.tabs=[],e.tabs=e.reports.filter(function(l){return l.selected}).map(function(l){return{title:l.label,url:e.myFocusArea?"/home/my-focus-area/"+l.id:"/dashboard/"+l.id}}),e.checkTabs())},function(l){console.log(l)})},n.findReportItem=function(l){for(var n=0;n<this.reports.length;n++)if(this.reports[n].id===l)return this.reports[n];return null},l}()}}]);