(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{ce4R:function(e,t,n){"use strict";n.r(t);var l=n("8Y7J"),a=function(){},i=n("pMnS"),o=n("N31F"),r=n("+D1H"),s=n("iInd"),d=n("SVse"),c=n("/4G1"),u=function(){function e(e){this.reportsApiService=e,this.tabs=[]}return e.prototype.ngOnInit=function(){var e=this;this.loadingTabs=!0,this.reportsApiService.getReports(!0).subscribe(function(t){e.loadingTabs=!1,t&&t.success&&(t.response||[]).forEach(function(t){e.tabs.push({title:t.name,url:"/home/my-focus-area/"+t._id})}),e.tabs.push({title:"Organisation Adoption",url:"/home"}),e.tabs.push({title:"Deployment Tree",url:"/home/dep-tree",subTabs:["/home/dep-tree","/home/dep-tree/details"]})},function(t){e.tabs.push({title:"Organisation Adoption",url:"/home"}),e.tabs.push({title:"Deployment Tree",url:"/home/dep-tree",subTabs:["/home/dep-tree","/home/dep-tree/details"]}),e.loadingTabs=!1})},e}(),p=l["\u0275crt"]({encapsulation:0,styles:[[".kpi-struct-list-container[_ngcontent-%COMP%]{padding-left:32px;padding-right:32px;padding-top:3rem;background-color:#fff}"]],data:{}});function m(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,3,"app-e4-tabs",[],null,null,null,o.b,o.a)),l["\u0275did"](1,638976,null,0,r.a,[s.l],{tabs:[0,"tabs"]},null),(e()(),l["\u0275eld"](2,16777216,null,0,1,"router-outlet",[],null,null,null,null,null)),l["\u0275did"](3,212992,null,0,s.q,[s.b,l.ViewContainerRef,l.ComponentFactoryResolver,[8,null],l.ChangeDetectorRef],null,null)],function(e,t){e(t,1,0,t.component.tabs),e(t,3,0)},null)}function g(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(e()(),l["\u0275ted"](-1,null,[" Loading... "]))],null,null)}function f(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,4,"div",[["class","kpi-struct-list-container"]],null,null,null,null,null)),(e()(),l["\u0275and"](16777216,null,null,1,null,m)),l["\u0275did"](2,16384,null,0,d.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),l["\u0275and"](16777216,null,null,1,null,g)),l["\u0275did"](4,16384,null,0,d.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(e,t){var n=t.component;e(t,2,0,!n.loadingTabs),e(t,4,0,n.loadingTabs)},null)}var h=l["\u0275ccf"]("app-org-dep-tree",u,function(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,1,"app-org-dep-tree",[],null,null,null,f,p)),l["\u0275did"](1,114688,null,0,u,[c.a],null,null)],function(e,t){e(t,1,0)},null)},{},{},[]),b=n("6eNE"),x=n("yf7A"),v=n("L10H"),y=n("s6ns"),C=n("EApP"),w=function(){function e(){this.myFocusArea=!0}return e.prototype.ngOnInit=function(){},e}(),M=l["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function k(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,1,"app-custom-dashboard",[],null,null,null,b.c,b.b)),l["\u0275did"](1,245760,null,0,x.a,[v.a,y.e,s.l,C.j,s.a],{myFocusArea:[0,"myFocusArea"]},null)],function(e,t){e(t,1,0,t.component.myFocusArea)},null)}var T=l["\u0275ccf"]("app-my-focus-area",w,function(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,1,"app-my-focus-area",[],null,null,null,k,M)),l["\u0275did"](1,114688,null,0,w,[],null,null)],function(e,t){e(t,1,0)},null)},{},{},[]),L=n("1ptD"),P=n("9AwH"),O=n("6p64"),I=n("dov7"),R=n("noyz"),_=n("mrSG"),S=n("+Kk7"),D=n("qDrF"),N=n("XX5M"),F=n("5RHE"),E=n("wOnQ"),Y=n.n(E),A=n("wd/R"),H=n("qHnB"),z=n("PsxR"),G=n("HTWL"),U=function(){function e(e,t,n,l,a,i,o,r){this.kpiService=e,this.analysisService=t,this.router=n,this.calenderService=l,this.toastrService=a,this._settingsService=i,this.activeRoute=o,this.goalService=r,this.financialYearList=[],this.logoDetails={},this.showFooter=!1,window.html2canvas=Y.a,this.type=this.activeRoute.snapshot.params.type,this.tab=this.activeRoute.snapshot.params.tab,this.printtype=this.activeRoute.snapshot.params.printType,this.level=this.activeRoute.snapshot.params.level,this.apiLevel=this.activeRoute.snapshot.params.apiLevel,this.selectedItem=this.activeRoute.snapshot.params.selectedItem}var t=e.prototype;return t.ngAfterViewInit=function(){},t.blobToDataURL=function(e){return new Promise(function(t){var n=new FileReader;n.onload=function(e){t(e.target.result)},n.readAsDataURL(e)})},t.ngOnInit=function(){return Object(_.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.isMpListLoading=!0,this._settingsService.getApplicationSettings().subscribe(function(e){t.logoDetails=e.response[0],t.clientLogo=t.logoDetails.emailCompanyLogoImg}),this.id=localStorage.getItem("E_Id"),this.calenderService.getfinancialYearList().subscribe(function(e){return Object(_.__awaiter)(t,void 0,void 0,regeneratorRuntime.mark(function t(){var n,l,a,i,o=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e||!e.success){t.next=62;break}if(this.financialYearList=e.response.map(function(e){var t=e.isCurrentFY,n=e.start,l=e.end,a=e.startUnix,i=e.endUnix;return{content:"FY "+n.split("-")[0]+"-"+l.split("-")[0],isCurrentFY:t,start:n,end:l,startUnix:a,endUnix:i,selected:!!t}}),this.getSelectedFyStartEnd(),"objectives"==this.tab||"viewers-kpi"==this.tab){t.next=21;break}return t.next=4,this.getKPIs(this.id);case 4:if(t.t1=n=t.sent,!t.t1){t.next=7;break}t.t1=n.success;case 7:if(t.t0=t.t1,!t.t0){t.next=10;break}t.t0=(this.kpiList=n.response,this.kpiList&&this.kpiList.length);case 10:if(!t.t0){t.next=19;break}l=0;case 12:if(!(l<this.kpiList.length)){t.next=19;break}return this.kpiList[l].isExpanded=!0,t.next=16,this.getDeploymentTree(this.kpiList[l]);case 16:l++,t.next=12;break;case 19:t.next=61;break;case 21:if("objectives"!=this.tab){t.next=41;break}return t.next=24,this.getGoals("","","","","","","","","",this.selectedFYStart,this.selectedFYEnd);case 24:if(t.t3=n=t.sent,!t.t3){t.next=27;break}t.t3=n.success;case 27:if(t.t2=t.t3,!t.t2){t.next=30;break}t.t2=(this.kpiList=n.response,this.kpiList&&this.kpiList.length);case 30:if(!t.t2){t.next=39;break}a=0;case 32:if(!(a<this.kpiList.length)){t.next=39;break}return this.kpiList[a].isExpanded=!0,t.next=36,this.getDeploymentTree(this.kpiList[a]);case 36:a++,t.next=32;break;case 39:t.next=61;break;case 41:if(t.t6="viewers-kpi"==this.tab,!t.t6){t.next=46;break}return t.next=45,this.kpiAsViewers("","","","","","","","","","","","","",this.selectedFYStart,this.selectedFYEnd);case 45:t.t6=n=t.sent;case 46:if(t.t5=t.t6,!t.t5){t.next=49;break}t.t5=n.success;case 49:if(t.t4=t.t5,!t.t4){t.next=52;break}t.t4=(this.kpiList=n.response,this.kpiList&&this.kpiList.length);case 52:if(!t.t4){t.next=61;break}i=0;case 54:if(!(i<this.kpiList.length)){t.next=61;break}return this.kpiList[i].isExpanded=!0,t.next=58,this.getDeploymentTree(this.kpiList[i]);case 58:i++,t.next=54;break;case 61:setTimeout(function(){"pdf"===o.printtype?o.printDetailsTrees(o.type):(o.showFooter=!0,o.generateImage())},2e3),this.isMpListLoading=!1;case 62:case"end":return t.stop()}},t,this)}))});case 1:case"end":return e.stop()}},e,this)}))},t.getKPIs=function(e){return Object(_.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.kpiService.getUserMpList(e,this.selectedFYStart,this.selectedFYEnd,this.tab).toPromise());case 1:case"end":return t.stop()}},t,this)}))},t.getSelectedFyStartEnd=function(){for(var e=0;e<this.financialYearList.length;e++)this.financialYearList[e].selected&&(this.selectedFYStart=this.financialYearList[e].startUnix,this.selectedFYEnd=this.financialYearList[e].endUnix)},t.getName=function(e){return"viewers-kpi"==this.tab?e.goalTag+"-"+e.title+" ("+e.firstname+" "+e.lastname+")":e.goalTag+"-"+e.title},t.onAccordianSelected=function(e){e.isExpanded?(e.deploymentTreeConfig=null,e.isExpanded=!1):(e.isExpanded=!0,this.kpiList.forEach(function(t){e._id!==t._id&&(t.isExpanded=!1)}),this.selectedItem=e,this.parentId=this.selectedItem.parentId,this.getDeploymentTree(this.selectedItem))},t.getDeploymentTree=function(e,t,n){var l=this;if(!t||n)return new Promise(function(a){l.gettingDeploymentTree=!0,l.kpiService.getDeployementTree(t?n:e._id,"",e._id===l.selectedItem?l.apiLevel:3).subscribe(function(n){return Object(_.__awaiter)(l,void 0,void 0,regeneratorRuntime.mark(function l(){var i;return regeneratorRuntime.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!n||!n.success){l.next=5;break}return l.next=3,this.check(n);case 3:i=n=l.sent,this.parentId=n[0].text.parentId,"summary"==this.type?(this.sanitize(n[0]),this.sanitizeDataSummary(n[0])):(this.sanitize(n[0]),this.sanitizeData(n[0])),e.deploymentTreeConfig={connectorType:"step",orientation:"WEST",nodes:i[0]},t&&(e.loadedOnce=!0);case 5:a(),this.gettingDeploymentTree=!1;case 6:case"end":return l.stop()}},l,this)}))},function(e){console.log(e),l.toastrService.error(G.a.PLEASE_TRY_AGAIN),l.gettingDeploymentTree=!1})})},t.sanitize=function(e){e&&e.text&&(e.text.parentId||delete e.text.parentId)},t.sanitizeData=function(e){e&&e.text&&(e.text.isParent?e.HTMLclass="parent-node":e.text.isMP?e.HTMLclass="mp-node":e.text.isSibling?e.HTMLclass="sibling-node":e.text.isCp&&(e.HTMLclass="cp-node")),e&&e.text&&("RED"===e.text.stage?e.HTMLclass+=" summary-node-red":"GREEN"===e.text.stage?e.HTMLclass+=" summary-node-green":"YELLOW"===e.text.stage?e.HTMLclass+=" summary-node-yellow":"GREY"===e.text.stage&&(e.HTMLclass+=" summary-node-grey"),e.text.kpiCumulativeTarget||(e.text.kpiCumulativeTarget="-"),e.text.cumulativeActual||(e.text.cumulativeActual="-"),e.text.kpiCumulativeTarget1=e.text.kpiCumulativeTarget,e.text.cumulativeActual1=e.text.cumulativeGap,this.gettingAnalysis||(e.text.vcs=e.text.vcs+" - "+e.text.primaryOwnerName,delete e.text.primaryOwnerName),delete e.text.cumulativeGap,delete e.text.ytdActual,delete e.text.ytdTarget,e.text.kpiCumulativeTargetTitle1="YTD",e.text.cumulativeActualTitle1="Last Cycle");for(var t=0;t<e.children.length;t++)this.sanitizeData(e.children[t])},t.onClickNode=function(e){var t=this;this.highlightNode(e),this.selectedNodeInformation={},this.selectedNodeInformation.analysisList=[],this.selectedNodeInformation=e.text,this.gettingAnalysis=!0,this.analysisService.getAnalysis(e.text.id,"").subscribe(function(e){t.gettingAnalysis=!1,e.success&&e.response&&e.response.length&&(t.selectedNodeInformation.analysisList=e.response)},function(e){t.gettingAnalysis=!1,t.selectedNodeInformation={}})},t.getGap=function(e,t){return t&&"-"!==t?Math.abs(e-t).toFixed(2):"-"},t.highlightNode=function(e){$(".kpi-node").removeClass("selected"),$(e.nodeDOM).addClass("selected")},t.goToPerformanceIndicator=function(e){this.router.navigateByUrl("/org-kpi/performance-indicator/"+e)},t.getUniOfMeasurement=function(e){return"Percentage"===e?"%":""},t.selectFYDropDown=function(e,t,n){var l=this;this.financialYearList.forEach(function(t){t.content===e.item.content?(t.selected=!0,l.selectedFYStart=t.startUnix,l.selectedFYEnd=t.endUnix,l.getKPIs(l.id)):t.selected=!1})},t.onLoadParent=function(){this.parentId&&!this.loadedOnce&&this.getDeploymentTree(this.selectedItem,!0,this.parentId)},t.printDetailsTrees=function(e){return Object(_.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t,n,l,a,i,o,r,s,d,c,u,p,m,g,f=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=$(".chart-cont"),n=0,l=$(".dep-tree-main-grid").width(),a=$(".dep-tree-main-grid").height(),o=1.5*(i=l+30)+30,r=Math.ceil(a/o),s=new F("p","pt",[i,o]),e.next=5,this.loadXHR(window.location.protocol+"//"+window.location.host+"/assets/img/4e-logo.png");case 5:return u=e.sent,e.next=8,this.blobToDataURL(u);case 8:if(p=e.sent,e.t0=this.clientLogo,!e.t0){e.next=17;break}return e.next=13,this.loadXHR(this.clientLogo);case 13:return d=e.sent,e.next=16,this.blobToDataURL(d);case 16:c=e.sent;case 17:for(m=function(e){var l=$(t[e]),a=$(t[e]).find(".tree-container")[0];Y()(a,{allowTaint:!0}).then(function(a){a.getContext("2d");var i=a.width,d=a.height,u=a.toDataURL("image/jpeg",1);s.setFontSize(14),s.setTextColor("black"),s.text(f.getName(f.kpiList[e]),50,30,{align:"left"}),s.setFontSize(12),s.text("Report generated by 4E System",140,s.internal.pageSize.height-35,{align:"left"}),s.setFontSize(10),s.text("Powered by TQMI",140,s.internal.pageSize.height-20,{align:"left"}),s.addImage(p,20,s.internal.pageSize.height-60),c&&s.addImage(c,s.internal.pageSize.width-250,s.internal.pageSize.height-50),n++,s.addImage(u,"JPG",55,45,i-60,d);for(var m=1;m<=r;m++)l.height()>500&&s.addImage(u,"JPG",55,-o*m+60,i-60,d);s.addPage(),n==t.length&&(s.save("deployment-tree-"+f.type+".pdf"),f.closeWindow())})},g=0;g<t.length;g++)m(g);case 19:case"end":return e.stop()}},e,this)}))},t.generateImage=function(){return Object(_.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t,n,l,a,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=$(".chart-cont"),l=0,e.next=4,this.loadXHR(window.location.protocol+"//"+window.location.host+"/assets/img/4e-logo.png");case 4:return a=e.sent,e.next=7,this.blobToDataURL(a);case 7:if(this.applicationLogo=e.sent,e.t0=this.clientLogo,!e.t0){e.next=16;break}return e.next=12,this.loadXHR(this.clientLogo);case 12:return n=e.sent,e.next=15,this.blobToDataURL(n);case 15:this.clientlogoData=e.sent;case 16:setTimeout(function(){return Object(_.__awaiter)(i,void 0,void 0,regeneratorRuntime.mark(function e(){var n,a,i,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<t.length)){e.next=11;break}return l++,a=$(t[n]).find(".print-container")[0],i=this.getName(this.kpiList[n]),e.next=6,Y()(a);case 6:o=e.sent.toDataURL("image/png",1),this.download(o,i+".png"),l==t.length&&(this.closeWindow(),this.showFooter=!1);case 8:n++,e.next=1;break;case 11:case"end":return e.stop()}},e,this)}))},500);case 17:case"end":return e.stop()}},e,this)}))},t.download=function(e,t){var n=document.createElement("a");n.href=e,n.target="_blank",n.setAttribute("download",t),n.click()},t.closeWindow=function(){setTimeout(function(){window.close()},3e3)},t.check=function(e){var t=this;return new Promise(function(n){var l=e.response.deploymentTree;if(0==t.level){for(var a=0;a<l.length;a++)l[a].children=[];n(l)}else if(1==t.level){for(var i=0;i<l.length;i++)for(var o=0;o<l[i].children.length;o++)l[i].children[o].children=[];n(l)}else if(2==t.level){for(var r=0;r<l.length;r++)for(var s=0;s<l[r].children.length;s++)for(var d=0;d<l[r].children[s].children.length;d++)l[r].children[s].children[d].children=[];n(l)}else if(3==t.level){for(var c=0;c<l.length;c++)for(var u=0;u<l[c].children.length;u++)for(var p=0;p<l[c].children[u].children.length;p++)for(var m=0;m<l[c].children[u].children[p].children.length;m++)l[c].children[u].children[p].children[m].children=[];n(l)}else n(l)})},t.kpiAsViewers=function(e,t,n,l,a,i,o,r,s,d,c,u,p,m,g){return Object(_.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark(function l(){return regeneratorRuntime.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",this.kpiService.getKPIAsViewer(e,t,n,"","",i,o,r,"",e,c,"","",1e3*A(m,"YYYY-MM-DDTHH:mm:ss").unix(),1e3*A(g+"T23:59:59","YYYY-MM-DDTHH:mm:ss").unix()).toPromise());case 1:case"end":return l.stop()}},l,this)}))},t.getGoals=function(e,t,n,l,a,i,o,r,s,d,c){return this.goalService.getAllGoals(e,t,n,l,a,i,o,r,s,1e3*A(d,"YYYY-MM-DDTHH:mm:ss").unix(),1e3*A(c+"T23:59:59","YYYY-MM-DDTHH:mm:ss").unix()).toPromise()},t.sanitizeDataSummary=function(e){e&&e.text&&(e.text.isParent?e.HTMLclass="parent-node":e.text.isMP?e.HTMLclass="mp-node":e.text.isSibling?e.HTMLclass="sibling-node":e.text.isCp&&(e.HTMLclass="cp-node")),e&&e.text&&("RED"===e.text.stage?e.HTMLclass+=" node-danger":"YELLOW"===e.text.stage?e.HTMLclass+=" node-warn":"GREEN"===e.text.stage?e.HTMLclass+=" node-good":"GREY"===e.text.stage&&(e.HTMLclass+=" node-actual-undef"),delete e.text.cumulativeGap,delete e.text.ytdActual,delete e.text.ytdTarget,delete e.text.kpiCumulativeTarget1,delete e.text.cumulativeGap1,delete e.text.cumulativeActual1,delete e.text.kpiCumulativeTargetTitle1,delete e.text.cumulativeActualTitle1,delete e.text.cumulativeGapTitle1,e.stackChildren=!0,e.text.initials=e.text.primaryOwnerName.split(" ").map(function(e){return e.charAt(0)}).join("").substring(0,2));for(var t=0;t<e.children.length;t++)this.sanitizeDataSummary(e.children[t])},t.loadXHR=function(e){return new Promise(function(t,n){try{var l=new XMLHttpRequest;l.open("GET",e),l.responseType="blob",l.onerror=function(){n("Network error.")},l.onload=function(){200===l.status?t(l.response):n("Loading error:"+l.statusText)},l.send()}catch(a){n(a.message)}})},e}(),j=l["\u0275crt"]({encapsulation:0,styles:[[".delivery-schedule-ad[_ngcontent-%COMP%]{color:#fff;font-family:'IBM Plex Sans';font-size:14px;font-weight:600;line-height:18px;margin-bottom:8px}.goal-tag[_ngcontent-%COMP%]{color:#ffffffa6;font-family:'IBM Plex Sans';font-size:12px;font-weight:300;line-height:15px;margin-bottom:8px}.primary-owner[_ngcontent-%COMP%]{color:#ffffffa6;font-family:'IBM Plex Sans';font-size:12px;font-weight:300;line-height:15px;margin-bottom:20px;display:flex;align-items:center}.primary-owner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-right:5px;fill:#ffffffa6}.per-text[_ngcontent-%COMP%]{color:#fff;font-family:'IBM Plex Sans';font-size:18px;font-weight:600;line-height:25px}.ytd-100-target[_ngcontent-%COMP%]{color:#9f9f9f;font-family:'IBM Plex Sans';font-size:12px;line-height:15px}.rectangle-1[_ngcontent-%COMP%]{border:1px solid #2e2e2e;background-color:#222;padding:32px}.analysis-action-pl[_ngcontent-%COMP%]{color:#fff;font-family:'IBM Plex Sans';font-size:14px;font-weight:600;line-height:18px;margin-bottom:8px;margin-top:8px}.action-planned[_ngcontent-%COMP%]{color:rgba(255,255,255,.85);font-family:'IBM Plex Sans';font-size:12px;font-weight:500;line-height:15px;margin-bottom:8px}.price-difference-re[_ngcontent-%COMP%]{color:rgba(201,201,201,.85);font-family:'IBM Plex Sans';font-size:12px;line-height:15px;margin-bottom:8px}.customer-meet-to-all[_ngcontent-%COMP%]{color:rgba(201,201,201,.85);font-family:'IBM Plex Sans';font-size:12px;line-height:15px}.rectangle[_ngcontent-%COMP%]{border:1px solid #2e2e2e;background-color:#262626}.dep-sub-container[_ngcontent-%COMP%]{background-color:#1e1d1d;border:1px solid #000}.center-loader-text[_ngcontent-%COMP%]{display:inline-flex;align-items:center}.loader-and-msg-container[_ngcontent-%COMP%]{color:#fff;height:100%;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center}.no-analysis-found-msg[_ngcontent-%COMP%]{color:#fff;display:flex;align-items:center;margin-top:16px}.analysis-item[_ngcontent-%COMP%]:not(:nth-last-child(1)){margin-bottom:16px;border-bottom:1px solid #ffffff14}.customer-meet-to-all[_ngcontent-%COMP%]:nth-last-child(1){margin-bottom:8px}.kpi-details-container[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:space-between}.view-details[_ngcontent-%COMP%]{display:flex;align-items:center;color:#fff;justify-content:space-between;padding:16px;cursor:pointer;background-color:#da1e28}.view-details[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fff}.dep-tree-main-grid[_ngcontent-%COMP%]{margin-top:16px;margin-bottom:16px}.dep-tree-main-grid[_ngcontent-%COMP%]   .dep-tree-summary-accord[_ngcontent-%COMP%]{margin-top:50px}.direction-of-goodness-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fff;border-radius:50%}.direction-of-goodness-arrow[_ngcontent-%COMP%]   .dir-arrow-fill-green[_ngcontent-%COMP%]{background-color:green}.direction-of-goodness-arrow[_ngcontent-%COMP%]   .dir-arrow-fill-red[_ngcontent-%COMP%]{background-color:red}.hasDepInSummaryTree[_ngcontent-%COMP%]{height:500px}body[_ngcontent-%COMP%]{overflow:auto!important}.dep-tree-accordian[_ngcontent-%COMP%]{height:100%}.dep-tree-accordian[_ngcontent-%COMP%]   .chart-cont[_ngcontent-%COMP%]{width:100%;margin:40px 0}.tree-container[_ngcontent-%COMP%]{padding:15px 0}.abnormalities-container[_ngcontent-%COMP%]{color:#fff;display:flex;flex-direction:row;height:120px}.abnormalities-container[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%]{font-weight:600}.abnormalities-container[_ngcontent-%COMP%]   .padding-16[_ngcontent-%COMP%]{padding:16px}.abnormalities-container[_ngcontent-%COMP%]   .gray[_ngcontent-%COMP%]{color:gray}.height200[_ngcontent-%COMP%]{height:200px}  .dep-summary-container .dep-tree-header{display:none!important}  .dep-tree-header{display:none!important}"]],data:{}});function X(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,1,"app-dep-tree-summary-renderer",[["class","tree-container"]],null,[[null,"gettingDeploymentTreeChange"],[null,"onLoadParent"],[null,"onClickNode"]],function(e,t,n){var l=!0,a=e.component;return"gettingDeploymentTreeChange"===t&&(l=!1!==(a.gettingDeploymentTree=n)&&l),"onLoadParent"===t&&(l=!1!==a.onLoadParent(n)&&l),"onClickNode"===t&&(l=!1!==a.onClickNode(n)&&l),l},L.b,L.a)),l["\u0275did"](1,4964352,null,0,P.a,[],{graphConfig:[0,"graphConfig"],gettingDeploymentTree:[1,"gettingDeploymentTree"],loadedOnce:[2,"loadedOnce"]},{onClickNode:"onClickNode",onLoadParent:"onLoadParent"})],function(e,t){e(t,1,0,t.parent.context.$implicit.deploymentTreeConfig,t.component.gettingDeploymentTree,t.parent.context.$implicit.loadedOnce)},null)}function K(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,1,"app-deployment-tree",[["class","tree-container"]],null,[[null,"onClickNode"]],function(e,t,n){var l=!0;return"onClickNode"===t&&(l=!1!==e.component.onClickNode(n)&&l),l},O.b,O.a)),l["\u0275did"](1,4964352,null,0,I.a,[],{graphConfig:[0,"graphConfig"],loadedOnce:[1,"loadedOnce"]},{onClickNode:"onClickNode"})],function(e,t){e(t,1,0,t.parent.context.$implicit.deploymentTreeConfig,t.parent.context.$implicit.loadedOnce)},null)}function q(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,7,"div",[["class","footer"],["style","width: 100%;display: inline-flex;"]],null,null,null,null,null)),(e()(),l["\u0275eld"](1,0,null,null,0,"img",[["width","120"]],[[8,"id",0],[8,"src",4]],null,null,null,null)),(e()(),l["\u0275eld"](2,0,null,null,4,"div",[["style","width: 80%;text-align: left;display: block;padding-left: 10px;"]],null,null,null,null,null)),(e()(),l["\u0275eld"](3,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),l["\u0275ted"](-1,null,["Report generated by 4E System"])),(e()(),l["\u0275eld"](5,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),l["\u0275ted"](-1,null,["Powered by TQMI"])),(e()(),l["\u0275eld"](7,0,null,null,0,"img",[],[[8,"id",0],[8,"src",4]],null,null,null,null))],null,function(e,t){var n=t.component;e(t,1,0,l["\u0275inlineInterpolate"](1,"img-",t.parent.context.index,""),n.applicationLogo),e(t,7,0,l["\u0275inlineInterpolate"](1,"imgg-",t.parent.context.index,""),n.clientlogoData)})}function B(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,9,"div",[["class","chart-cont"]],[[8,"id",0]],null,null,null,null)),(e()(),l["\u0275eld"](1,0,null,null,8,"div",[["class","print-container"]],null,null,null,null,null)),(e()(),l["\u0275eld"](2,0,null,null,1,"p",[],[[8,"id",0]],null,null,null,null)),(e()(),l["\u0275ted"](3,null,["",""])),(e()(),l["\u0275and"](16777216,null,null,1,null,X)),l["\u0275did"](5,16384,null,0,d.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),l["\u0275and"](16777216,null,null,1,null,K)),l["\u0275did"](7,16384,null,0,d.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),l["\u0275and"](16777216,null,null,1,null,q)),l["\u0275did"](9,16384,null,0,d.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(e,t){var n=t.component;e(t,5,0,"summary"==n.type),e(t,7,0,"details"==n.type),e(t,9,0,n.showFooter)},function(e,t){var n=t.component;e(t,0,0,l["\u0275inlineInterpolate"](1,"id-",t.context.index,"")),e(t,2,0,l["\u0275inlineInterpolate"](1,"title-",t.context.index,"")),e(t,3,0,n.getName(t.context.$implicit))})}function V(e){return l["\u0275vid"](0,[l["\u0275qud"](671088640,1,{content:0}),(e()(),l["\u0275eld"](1,0,null,null,8,"div",[["class","dep-tree-main-grid"],["ibmGrid",""]],[[2,"bx--grid",null]],null,null,null,null)),l["\u0275did"](2,16384,null,0,R.b,[],null,null),(e()(),l["\u0275eld"](3,0,null,null,6,"div",[["class","dep-tree-summary-accord"],["ibmRow",""]],[[2,"bx--row",null]],null,null,null,null)),l["\u0275did"](4,16384,null,0,R.c,[],null,null),(e()(),l["\u0275eld"](5,0,[[1,0],["content",1]],null,4,"div",[["class","dep-tree-accordian"],["ibmCol",""]],[[8,"className",0]],null,null,null,null)),l["\u0275did"](6,81920,null,0,R.a,[],{class:[0,"class"],columnNumbers:[1,"columnNumbers"]},null),l["\u0275pod"](7,{lg:0,md:1,sm:2}),(e()(),l["\u0275and"](16777216,null,null,1,null,B)),l["\u0275did"](9,278528,null,0,d.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(e,t){var n=t.component,l=e(t,7,0,12,12,12);e(t,6,0,"dep-tree-accordian",l),e(t,9,0,n.kpiList)},function(e,t){e(t,1,0,l["\u0275nov"](t,2).baseClass),e(t,3,0,l["\u0275nov"](t,4).baseClass),e(t,5,0,l["\u0275nov"](t,6).columnClasses)})}var J=l["\u0275ccf"]("app-print-tree",U,function(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,1,"app-print-tree",[],null,null,null,V,j)),l["\u0275did"](1,4308992,null,0,U,[S.a,D.a,s.l,N.a,C.j,H.a,s.a,z.a],null,null)],function(e,t){e(t,1,0)},null)},{},{},[]),W=n("t68o"),Q=n("NpSD"),Z=n("cbbC"),ee=n("Gv0t"),te=n("cN2v"),ne=n("gKtx"),le=n("GRwY"),ae=n("P08G"),ie=n("t0WL"),oe=n("No7X"),re=n("bIR2"),se=n("Mt6X"),de=n("cXbK"),ce=n("N2qt"),ue=n("I0pH"),pe=n("brgC"),me=n("XePT"),ge=n("TDjw"),fe=n("FKhW"),he=n("yybR"),be=n("ITpg"),xe=n("pMyo"),ve=n("J1zZ"),ye=n("rP3o"),Ce=n("PJ54"),we=n("tU3X"),Me=n("mEpm"),ke=n("uvqg"),Te=n("/7Vj"),Le=n("s7LF"),Pe=n("eNer"),Oe=n("5OVe"),Ie=n("JACh"),Re=n("J83G"),_e=n("mZr5"),Se=l["\u0275crt"]({encapsulation:0,styles:[[".radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0}.radio-button[_ngcontent-%COMP%]{margin:5px}.report-option-container[_ngcontent-%COMP%]{background-color:#fff;padding:16px}  .bx--modal.is-visible .bx--modal-container{width:35%!important}.margin0[_ngcontent-%COMP%]{margin:0}h1[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:400;line-height:1.625rem;font-family:'IBM Plex Sans'}.modal-msg[_ngcontent-%COMP%]{font-size:16px}.mat-dialog-actions[_ngcontent-%COMP%]{margin-bottom:0!important}"]],data:{}});function De(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,24,"ibm-modal",[["class","full"],["size","xl"]],null,[[null,"overlaySelected"],[null,"keydown"]],function(e,t,n){var a=!0,i=e.component;return"keydown"===t&&(a=!1!==l["\u0275nov"](e,1).handleKeyboardEvent(n)&&a),"overlaySelected"===t&&(a=!1!==i.closeModal()&&a),a},Z.c,Z.b)),l["\u0275did"](1,4440064,null,0,ye.a,[Ce.a],{size:[0,"size"]},{overlaySelected:"overlaySelected"}),(e()(),l["\u0275eld"](2,0,null,0,3,"ibm-modal-header",[],null,[[null,"closeSelect"]],function(e,t,n){var l=!0;return"closeSelect"===t&&(l=!1!==e.component.closeModal()&&l),l},te.c,te.b)),l["\u0275did"](3,49152,null,0,we.a,[Me.a,ke.a],null,{closeSelect:"closeSelect"}),(e()(),l["\u0275eld"](4,0,null,0,1,"h1",[],null,null,null,null,null)),(e()(),l["\u0275ted"](5,null,["",""])),(e()(),l["\u0275eld"](6,0,null,0,12,"section",[["class","bx--modal-content"]],null,null,null,null,null)),(e()(),l["\u0275eld"](7,0,null,null,11,"ibm-radio-group",[["aria-label","radiogroup"]],[[2,"bx--form-item",null]],[[null,"change"]],function(e,t,n){var l=!0;return"change"===t&&(l=!1!==e.component.onRadioChange(n)&&l),l},Te.b,Te.a)),l["\u0275prd"](5120,null,Le.p,function(e){return[e]},[Pe.a]),l["\u0275did"](9,5292032,null,1,Pe.a,[],null,{change:"change"}),l["\u0275qud"](603979776,1,{radios:1}),(e()(),l["\u0275eld"](11,0,null,0,3,"ibm-radio",[["checked","true"],["value","pdf"]],[[1,"role",0],[2,"bx--radio-button-wrapper",null],[2,"bx--radio-button-wrapper--label-left",null]],null,null,Oe.b,Oe.a)),l["\u0275prd"](5120,null,Le.p,function(e){return[e]},[Ie.a]),l["\u0275did"](13,49152,[[1,4]],0,Ie.a,[],{checked:[0,"checked"],value:[1,"value"]},null),(e()(),l["\u0275ted"](-1,0,[" Pdf "])),(e()(),l["\u0275eld"](15,0,null,0,3,"ibm-radio",[["value","image"]],[[1,"role",0],[2,"bx--radio-button-wrapper",null],[2,"bx--radio-button-wrapper--label-left",null]],null,null,Oe.b,Oe.a)),l["\u0275prd"](5120,null,Le.p,function(e){return[e]},[Ie.a]),l["\u0275did"](17,49152,[[1,4]],0,Ie.a,[],{value:[0,"value"]},null),(e()(),l["\u0275ted"](-1,0,[" Image "])),(e()(),l["\u0275eld"](19,0,null,0,5,"ibm-modal-footer",[],null,null,null,ee.c,ee.b)),l["\u0275did"](20,49152,null,0,Re.a,[],null,null),(e()(),l["\u0275eld"](21,0,null,0,1,"button",[["class","bx--btn bx--btn--primary"]],null,[[null,"click"]],function(e,t,n){var l=!0;return"click"===t&&(l=!1!==e.component.onSubmit()&&l),l},null,null)),(e()(),l["\u0275ted"](-1,null,[" OK "])),(e()(),l["\u0275eld"](23,0,null,0,1,"button",[["class","bx--btn bx--btn--danger"]],null,[[null,"click"]],function(e,t,n){var l=!0;return"click"===t&&(l=!1!==e.component.closeModal()&&l),l},null,null)),(e()(),l["\u0275ted"](-1,null,[" Cancel "]))],function(e,t){e(t,1,0,"xl"),e(t,13,0,"true","pdf"),e(t,17,0,"image")},function(e,t){e(t,5,0,t.component.title),e(t,7,0,l["\u0275nov"](t,9).radioButtonGroupClass),e(t,11,0,l["\u0275nov"](t,13).role,l["\u0275nov"](t,13).hostClass,l["\u0275nov"](t,13).labelLeft),e(t,15,0,l["\u0275nov"](t,17).role,l["\u0275nov"](t,17).hostClass,l["\u0275nov"](t,17).labelLeft)})}var Ne=l["\u0275ccf"]("app-print-options-dialog",_e.a,function(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,1,"app-print-options-dialog",[],null,null,null,De,Se)),l["\u0275did"](1,114688,null,0,_e.a,[y.l,y.a],null,null)],function(e,t){e(t,1,0)},null)},{},{},[]),Fe=n("ZHEK"),Ee=n("RJDq"),Ye=n("U6oK"),Ae=n("i3NF"),He=n("QQfA"),ze=n("IP0z"),Ge=n("f8KH"),Ue=n("maoM"),je=n("POq0"),Xe=n("Tq4R"),Ke=n("rAFq"),qe=n("4D9t"),Be=n("bMPK"),Ve=n("UiI2"),Je=n("/HVE"),We=n("X/pD"),$e=n("pQSL"),Qe=n("Z725"),Ze=n("szKh"),et=n("eJBW"),tt=n("R3lN"),nt=n("Z3BZ"),lt=n("MqE1"),at={myFocusArea:!0},it={myFocusArea:!0},ot=function(){},rt=n("Vd/R"),st=n("imf+"),dt=n("5F/F"),ct=n("ixoK"),ut=n("qNNx"),pt=n("Nkwq"),mt=n("itAz"),gt=n("niTG"),ft=n("UTXO"),ht=n("K1/W"),bt=n("cbyg"),xt=n("C7u+"),vt=n("E5GT"),yt=n("Ng1k"),Ct=n("QGxr"),wt=n("gx6X"),Mt=n("Eaeu"),kt=n("JKVJ"),Tt=n("+NSx"),Lt=n("jPU2"),Pt=n("h6sn"),Ot=n("zopQ"),It=n("zMNK"),Rt=n("hOhj"),_t=n("Xd0L"),St=n("cUpR"),Dt=n("ctAq"),Nt=n("yKc8"),Ft=n("Y/+N"),Et=n("PqSs"),Yt=n("3ezH"),At=n("e5uG"),Ht=n("F2kP"),zt=n("UCDL"),Gt=n("lZcW"),Ut=n("O/TZ"),jt=n("OZcg"),Xt=n("eUdb"),Kt=n("SpJC"),qt=n("IxoR"),Bt=n("fF59"),Vt=n("DOUa"),Jt=n("+IpF"),Wt=n("jQIA"),$t=n("5GAg"),Qt=n("jRYl"),Zt=n("KL2N"),en=n("QX+E"),tn=n("Lb5T"),nn=n("hmap"),ln=n("+5LG"),an=n("wE4S"),on=n("H6Gp"),rn=n("Myuu"),sn=n("fMlX"),dn=n("FS8H"),cn=n("nw/W"),un=n("EJfY"),pn=n("nXcq"),mn=n("yztW"),gn=n("CX5l"),fn=n("fUnB"),hn=n("Yb6w"),bn=n("5SKc"),xn=n("VE+g"),vn=n("bLn9"),yn=n("jMuS"),Cn=n("kEMu"),wn=n("XBWk"),Mn=n("4UMp"),kn=n("FXG2"),Tn=n("DoOu"),Ln=n("22Na"),Pn=n("h5jA"),On=n("9Ntg"),In=n("wqUn"),Rn=n("L2d0"),_n=n("Dg3h"),Sn=n("4y4f"),Dn=n("2Fj0"),Nn=n("VXjn"),Fn=n("qYds"),En=n("nS/7"),Yn=n("GzH4"),An=n("+91U"),Hn=n("ExNA"),zn=n("GDFe"),Gn=n("EFU/");n.d(t,"OrgDepTreeModuleNgFactory",function(){return Un});var Un=l["\u0275cmf"](a,[],function(e){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,h,T,J,W.a,Q.a,Z.a,ee.a,te.a,ne.a,le.a,ae.a,b.a,ie.a,oe.a,re.a,se.a,de.a,ce.a,ue.a,pe.a,me.a,ge.a,fe.a,he.a,be.a,xe.a,ve.a,Ne]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[l.LOCALE_ID,[2,d["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](5120,Me.a,Fe.a,[[3,Me.a]]),l["\u0275mpd"](4608,Le.C,Le.C,[]),l["\u0275mpd"](5120,Ee.a,Ye.a,[[3,Ee.a]]),l["\u0275mpd"](4608,Ae.a,Ae.a,[Ee.a]),l["\u0275mpd"](4608,He.b,He.b,[He.h,He.d,l.ComponentFactoryResolver,He.g,He.e,l.Injector,l.NgZone,d.DOCUMENT,ze.b,[2,d.Location]]),l["\u0275mpd"](5120,He.i,He.j,[He.b]),l["\u0275mpd"](5120,y.c,y.d,[He.b]),l["\u0275mpd"](135680,y.e,y.e,[He.b,l.Injector,[2,d.Location],[2,y.b],y.c,[3,y.e],He.d]),l["\u0275mpd"](5120,ke.a,Ge.a,[[3,ke.a]]),l["\u0275mpd"](4608,Ce.a,Ce.a,[l.ComponentFactoryResolver,Ee.a]),l["\u0275mpd"](4608,Ue.a,Ue.a,[l.ComponentFactoryResolver,l.Injector,Ee.a]),l["\u0275mpd"](4608,je.a,je.a,[]),l["\u0275mpd"](5120,Xe.b,Xe.d,[He.b]),l["\u0275mpd"](4608,Xe.e,Xe.e,[He.b,l.Injector,[2,d.Location],Xe.b,[2,Xe.a],[3,Xe.e],He.d]),l["\u0275mpd"](4608,Ke.a,Ke.a,[]),l["\u0275mpd"](5120,qe.a,qe.c,[He.b]),l["\u0275mpd"](4608,Be.a,Ve.a,[[2,Be.b],Je.a]),l["\u0275mpd"](4608,Le.f,Le.f,[]),l["\u0275mpd"](4608,We.a,We.a,[$e.a]),l["\u0275mpd"](4608,Qe.a,Qe.a,[]),l["\u0275mpd"](4608,H.a,H.a,[$e.a]),l["\u0275mpd"](4608,Ze.a,Ze.a,[H.a]),l["\u0275mpd"](4608,et.a,et.a,[]),l["\u0275mpd"](4608,tt.a,tt.a,[H.a,z.a]),l["\u0275mpd"](4608,S.a,S.a,[$e.a]),l["\u0275mpd"](4608,nt.a,nt.a,[$e.a]),l["\u0275mpd"](4608,lt.a,lt.a,[$e.a]),l["\u0275mpd"](4608,c.a,c.a,[$e.a]),l["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),l["\u0275mpd"](1073742336,s.p,s.p,[[2,s.u],[2,s.l]]),l["\u0275mpd"](1073742336,ot,ot,[]),l["\u0275mpd"](1073742336,rt.a,rt.a,[]),l["\u0275mpd"](1073742336,st.a,st.a,[]),l["\u0275mpd"](1073742336,dt.a,dt.a,[]),l["\u0275mpd"](1073742336,ct.c,ct.c,[]),l["\u0275mpd"](1073742336,ut.a,ut.a,[]),l["\u0275mpd"](1073742336,pt.b,pt.b,[]),l["\u0275mpd"](1073742336,mt.b,mt.b,[]),l["\u0275mpd"](1073742336,gt.c,gt.c,[]),l["\u0275mpd"](1073742336,ft.a,ft.a,[]),l["\u0275mpd"](1073742336,ht.b,ht.b,[]),l["\u0275mpd"](1073742336,Fe.c,Fe.c,[]),l["\u0275mpd"](1073742336,bt.a,bt.a,[]),l["\u0275mpd"](1073742336,xt.b,xt.b,[]),l["\u0275mpd"](1073742336,vt.b,vt.b,[]),l["\u0275mpd"](1073742336,yt.a,yt.a,[]),l["\u0275mpd"](1073742336,Ct.b,Ct.b,[]),l["\u0275mpd"](1073742336,wt.b,wt.b,[]),l["\u0275mpd"](1073742336,Mt.b,Mt.b,[]),l["\u0275mpd"](1073742336,kt.b,kt.b,[]),l["\u0275mpd"](1073742336,Le.B,Le.B,[]),l["\u0275mpd"](1073742336,Le.l,Le.l,[]),l["\u0275mpd"](1073742336,Ye.b,Ye.b,[]),l["\u0275mpd"](1073742336,Tt.c,Tt.c,[]),l["\u0275mpd"](1073742336,Lt.a,Lt.a,[]),l["\u0275mpd"](1073742336,Pt.a,Pt.a,[]),l["\u0275mpd"](1073742336,Ot.a,Ot.a,[]),l["\u0275mpd"](1073742336,ze.a,ze.a,[]),l["\u0275mpd"](1073742336,It.f,It.f,[]),l["\u0275mpd"](1073742336,Je.b,Je.b,[]),l["\u0275mpd"](1073742336,Rt.b,Rt.b,[]),l["\u0275mpd"](1073742336,He.f,He.f,[]),l["\u0275mpd"](1073742336,_t.e,_t.e,[[2,_t.b],[2,St.f]]),l["\u0275mpd"](1073742336,y.k,y.k,[]),l["\u0275mpd"](1073742336,Ge.b,Ge.b,[]),l["\u0275mpd"](1073742336,Dt.b,Dt.b,[]),l["\u0275mpd"](1073742336,Nt.a,Nt.a,[]),l["\u0275mpd"](1073742336,Ft.a,Ft.a,[]),l["\u0275mpd"](1073742336,Et.a,Et.a,[]),l["\u0275mpd"](1073742336,Yt.a,Yt.a,[]),l["\u0275mpd"](1073742336,At.a,At.a,[]),l["\u0275mpd"](1073742336,Ht.a,Ht.a,[]),l["\u0275mpd"](1073742336,zt.b,zt.b,[]),l["\u0275mpd"](1073742336,Gt.b,Gt.b,[]),l["\u0275mpd"](1073742336,Ut.a,Ut.a,[]),l["\u0275mpd"](1073742336,jt.a,jt.a,[]),l["\u0275mpd"](1073742336,Xt.c,Xt.c,[]),l["\u0275mpd"](1073742336,Kt.a,Kt.a,[]),l["\u0275mpd"](1073742336,qt.a,qt.a,[]),l["\u0275mpd"](1073742336,Bt.b,Bt.b,[]),l["\u0275mpd"](1073742336,Vt.a,Vt.a,[]),l["\u0275mpd"](1073742336,Jt.c,Jt.c,[]),l["\u0275mpd"](1073742336,Wt.a,Wt.a,[]),l["\u0275mpd"](1073742336,je.b,je.b,[]),l["\u0275mpd"](1073742336,$t.a,$t.a,[]),l["\u0275mpd"](1073742336,Qt.a,Qt.a,[]),l["\u0275mpd"](1073742336,Zt.a,Zt.a,[]),l["\u0275mpd"](1073742336,en.a,en.a,[]),l["\u0275mpd"](1073742336,en.b,en.b,[]),l["\u0275mpd"](1073742336,tn.b,tn.b,[]),l["\u0275mpd"](1073742336,nn.a,nn.a,[]),l["\u0275mpd"](1073742336,ln.a,ln.a,[]),l["\u0275mpd"](1073742336,an.b,an.b,[]),l["\u0275mpd"](1073742336,on.b,on.b,[]),l["\u0275mpd"](1073742336,rn.b,rn.b,[]),l["\u0275mpd"](1073742336,sn.b,sn.b,[]),l["\u0275mpd"](1073742336,dn.b,dn.b,[]),l["\u0275mpd"](1073742336,Le.x,Le.x,[]),l["\u0275mpd"](1073742336,cn.b,cn.b,[]),l["\u0275mpd"](1073742336,un.a,un.a,[]),l["\u0275mpd"](1073742336,pn.a,pn.a,[]),l["\u0275mpd"](1073742336,mn.a,mn.a,[]),l["\u0275mpd"](1073742336,gn.a,gn.a,[]),l["\u0275mpd"](1073742336,fn.a,fn.a,[]),l["\u0275mpd"](1073742336,hn.b,hn.b,[]),l["\u0275mpd"](1073742336,bn.b,bn.b,[]),l["\u0275mpd"](1073742336,xn.a,xn.a,[]),l["\u0275mpd"](1073742336,vn.a,vn.a,[]),l["\u0275mpd"](1073742336,yn.a,yn.a,[]),l["\u0275mpd"](1073742336,Cn.a,Cn.a,[]),l["\u0275mpd"](1073742336,wn.c,wn.c,[]),l["\u0275mpd"](1073742336,Mn.a,Mn.a,[]),l["\u0275mpd"](1073742336,kn.a,kn.a,[]),l["\u0275mpd"](1073742336,et.b,et.b,[]),l["\u0275mpd"](1073742336,Tn.b,Tn.b,[]),l["\u0275mpd"](1073742336,Ln.ClickOutsideModule,Ln.ClickOutsideModule,[]),l["\u0275mpd"](1073742336,Pn.c,Pn.c,[]),l["\u0275mpd"](1073742336,On.c,On.c,[]),l["\u0275mpd"](1073742336,In.b,In.b,[]),l["\u0275mpd"](1073742336,Rn.b,Rn.b,[]),l["\u0275mpd"](1073742336,tt.b,tt.b,[]),l["\u0275mpd"](1073742336,_n.a,_n.a,[]),l["\u0275mpd"](1073742336,Sn.b,Sn.b,[]),l["\u0275mpd"](1073742336,Dn.b,Dn.b,[]),l["\u0275mpd"](1073742336,C.i,C.i,[]),l["\u0275mpd"](1073742336,Nn.a,Nn.a,[]),l["\u0275mpd"](1073742336,Fn.a,Fn.a,[]),l["\u0275mpd"](1073742336,En.a,En.a,[]),l["\u0275mpd"](1073742336,Yn.a,Yn.a,[]),l["\u0275mpd"](1073742336,a,a,[]),l["\u0275mpd"](1024,s.j,function(){return[[{path:"",component:u,children:[{loadChildren:"app/org-tree/org-tree.module#OrgTreeModule",path:""},{loadChildren:"app/org-dep-tree/dep-tree/dep-tree-container/dep-tree-container.module#DepTreeContainerModule",path:"dep-tree"},{component:w,path:"my-focus-area",data:at,children:[{loadChildren:"app/custom-dashboard/custom-dashboard/customise-dashboard/customise-dashboard.module#CustomiseDashboardModule",path:":id",data:it}]}]},{path:"print-tree/:type/:tab/:printType/:level/:apiLevel/:selectedItem",component:U}],[{path:"",component:x.a,children:[{path:"",redirectTo:"custom",pathMatch:"full"},{loadChildren:"app/custom-dashboard/custom-dashboard/customise-dashboard/customise-dashboard.module#CustomiseDashboardModule",path:":id"}]}],[{path:"add",component:An.a},{path:"edit/:id",component:Hn.a},{path:"edit/:id/:extend",component:Hn.a},{path:"performance-indicator/:id",component:zn.a}]]},[]),l["\u0275mpd"](256,Gn.a,en.c,[])])})}}]);