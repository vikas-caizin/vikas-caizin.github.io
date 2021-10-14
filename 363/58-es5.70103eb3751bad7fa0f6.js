(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{gs0n:function(n,t,e){"use strict";e.r(t);var a=e("8Y7J"),o=e("Y7sv"),i=e("sspt");o.M.registerModules([i.a]);var l=function(){},r=e("pMnS"),d=e("cgCd"),s=e("9YYN"),c=e("g7AK"),u=e("fF59"),p=e("BJWQ"),m=e("PybA"),g=e("qHnB"),b=e("aQIf"),f=e("Z725"),h=(e("ciZX"),e("9XGM")),v=e("HXlw"),y=e("FQWp"),C=function(){function n(n,t,e,a,o){this._settingsService=n,this.dialog=t,this._toaster=e,this.confirmationService=a,this.modalService=o,this.sapIntegrations=null,this.defaultColDef={resizable:!0,sortable:!0,filter:!0,flex:1,minWidth:120},this.getRowStyle=function(n){if(n.node.rowIndex%2!=0)return{background:"#F8F8F8"}},this.columnDefs=[{headerName:"Endpoint Name",wrapText:!0,autoHeight:!0,field:"name",minWidth:300},{headerName:"Endpoint Username",wrapText:!0,field:"username",minWidth:300},{headerName:"Endpoint Url",wrapText:!0,field:"url",minWidth:300},{headerName:"Status",cellRendererSelector:function(n){return{component:"buttonRenderer",params:{value:n.data.isActive?"Enabled":"Disabled",imgUrl:n.data.isActive?"assets/img/checkmark.svg":"assets/img/error.svg"}}},cellRendererParams:{onClick:this.onBtnEnableDisableClick.bind(this)},maxWidth:200,sortable:!1},{headerName:"Edit",sortable:!1,filter:!1,cellRenderer:"buttonRenderer",cellRendererParams:{onClick:this.onBtnEditClick.bind(this),label:"",imgUrl:"assets/img/edit.svg"},maxWidth:160},{field:"Refresh",sortable:!1,filter:!1,headerTooltip:"Delete data & reload for current FY",cellRenderer:"buttonRenderer",cellRendererParams:{onClick:this.refreshFullData.bind(this),label:"",imgUrl:"assets/img/reset.svg"},maxWidth:160}],this.frameworkComponents={buttonRenderer:y.a}}var t=n.prototype;return t.onBtnEditClick=function(n){this.addMoreSAPEndpoint(n,!0,n.rowData)},t.onBtnEnableDisableClick=function(n){this.enableDisableEndpoint(n,n.rowData,!n.rowData.isActive)},t.onGridReady=function(n){this.gridApi=n.api,this.gridApi.ParentComponent=this,this.gridColumnApi=n.columnApi,this.gridApi.closeToolPanel(),this.getEndpoints(),window.addEventListener("resize",function(){setTimeout(function(){n.api.sizeColumnsToFit()})}),setTimeout(function(){n.api.sizeColumnsToFit()},2e3)},t.getEndpoints=function(){var n=this;this._settingsService.getAllIntegrations().subscribe(function(t){t&&t.success&&(n.sapIntegrations=t.response?t.response:[])},function(t){n.sapIntegrations=[]})},t.addMoreSAPEndpoint=function(n,t,e){var a=this,o={};t&&(o={name:e.name,id:e._id,url:e.url,username:e.username,password:e.password,isEdit:t,isActive:e.isActive}),this.dialog.open(b.a,{width:"40%",disableClose:!0,panelClass:"custom-modalbox",data:o}).afterClosed().subscribe(function(n){n&&a.getEndpoints()})},t.enableDisableEndpoint=function(n,t,e){var a=this;this.dialog.open(v.a,{width:"40%",disableClose:!0,panelClass:"custom-modalbox",data:{confirmationMessage:"Are you sure you want to "+(e?"enable":"disable")+" the endpoint?",cancelBtnText:"Cancel",onOkayText:"Confirm"}}).afterClosed().subscribe(function(n){n&&a._settingsService.modifyIntegration(t._id,{name:t.name,url:t.url,isActive:e}).subscribe(function(n){n&&n.success&&(a._toaster.success(e?"Endpoint enabled successfully.":"Endpoint disabled successfully."),a.getEndpoints())},function(n){a._toaster.error("Error occurred while performing operation.")})})},t.refreshFullData=function(n){var t=this,e=n.rowData._id;this.fetch=this.confirmationService.getData().subscribe(function(n){n?t._settingsService.refreshFullData(e).subscribe(function(n){t._toaster.success("Full data refresh in process. This will take some time"),t.confirmationService.setData(!1)}):t.fetch&&t.fetch.unsubscribe()}),this.modalService.create({component:h.a,inputs:{modalText:"Are you sure you want to full reload data? It will delete all existing data and load new data for current financial year only"}})},n}(),x=e("s6ns"),w=e("EApP"),_=e("PJ54"),P=a["\u0275crt"]({encapsulation:0,styles:[[".thirdparty-setings-container[_ngcontent-%COMP%]{padding-left:32px;padding-right:32px;padding-top:2rem;background-color:#fff;height:98%;width:100%;display:flex;flex-direction:column}.thirdparty-setings-container[_ngcontent-%COMP%]   .bx--btn--danger[_ngcontent-%COMP%]{padding-right:unset}.thirdparty-setings-container[_ngcontent-%COMP%]   .bx--btn--danger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px}.thirdparty-setings-container[_ngcontent-%COMP%]   .info-controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:5px}.thirdparty-setings-container[_ngcontent-%COMP%]   .info-controls[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]{margin-right:10px}.thirdparty-setings-container[_ngcontent-%COMP%]   .info-controls[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{height:48px;flex:auto;margin-right:10px}.thirdparty-setings-container[_ngcontent-%COMP%]   .info-controls[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   .bx--tile[_ngcontent-%COMP%]{background-color:#f3f3f3!important;font-size:17px;font-weight:600;min-height:unset}.thirdparty-setings-container[_ngcontent-%COMP%]   .c-ag-grid[_ngcontent-%COMP%]{padding-left:5px;padding-right:5px;width:100%;height:100%}"]],data:{}});function R(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,17,"div",[["class","thirdparty-setings-container"]],null,null,null,null,null)),(n()(),a["\u0275eld"](1,0,null,null,11,"div",[["class","info-controls"]],null,null,null,null,null)),(n()(),a["\u0275eld"](2,0,null,null,3,"div",[["class","label"]],null,null,null,null,null)),(n()(),a["\u0275eld"](3,0,null,null,2,"ibm-tile",[["class","bx--tile"]],[[2,"bx--tile",null]],null,null,d.b,d.a)),a["\u0275did"](4,49152,null,0,s.a,[],null,null),(n()(),a["\u0275ted"](-1,0,["SAP Endpoints"])),(n()(),a["\u0275eld"](6,0,null,null,6,"div",[["class","controls"]],null,null,null,null,null)),(n()(),a["\u0275eld"](7,0,null,null,5,"button",[["ibmButton","danger"]],[[2,"bx--btn",null],[2,"bx--btn--primary",null],[2,"bx--btn--secondary",null],[2,"bx--btn--tertiary",null],[2,"bx--btn--ghost",null],[2,"bx--btn--danger",null],[2,"bx--btn--danger--primary",null],[2,"bx--skeleton",null],[2,"bx--btn--sm",null],[2,"bx--toolbar-action",null],[2,"bx--overflow-menu",null]],[[null,"click"]],function(n,t,e){var a=!0;return"click"===t&&(a=!1!==n.component.addMoreSAPEndpoint(e,!1)&&a),a},null,null)),a["\u0275did"](8,16384,null,0,c.a,[],{ibmButton:[0,"ibmButton"]},null),(n()(),a["\u0275eld"](9,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),a["\u0275ted"](-1,null,["Add New"])),(n()(),a["\u0275eld"](11,0,null,null,1,":svg:svg",[["class","icon-white"],["ibmIconAdd20",""]],null,null,null,null,null)),a["\u0275did"](12,4210688,null,0,u.a,[a.ElementRef],null,null),(n()(),a["\u0275eld"](13,16777216,null,null,4,"ag-grid-angular",[["class","ag-theme-alpine c-ag-grid"]],null,[[null,"gridReady"]],function(n,t,e){var a=!0;return"gridReady"===t&&(a=!1!==n.component.onGridReady(e)&&a),a},p.b,p.a)),a["\u0275prd"](512,null,m.e,m.e,[a.NgZone]),a["\u0275prd"](512,null,m.d,m.d,[]),a["\u0275did"](16,4898816,[["agGrid",4]],1,m.a,[a.ElementRef,a.ViewContainerRef,m.e,m.d,a.ComponentFactoryResolver],{rowData:[0,"rowData"],columnDefs:[1,"columnDefs"],frameworkComponents:[2,"frameworkComponents"],defaultColDef:[3,"defaultColDef"],getRowStyle:[4,"getRowStyle"],pagination:[5,"pagination"],paginationAutoPageSize:[6,"paginationAutoPageSize"]},{gridReady:"gridReady"}),a["\u0275qud"](603979776,1,{columns:1})],function(n,t){var e=t.component;n(t,8,0,"danger"),n(t,16,0,e.sapIntegrations,e.columnDefs,e.frameworkComponents,e.defaultColDef,e.getRowStyle,!0,!0)},function(n,t){n(t,3,0,a["\u0275nov"](t,4).tileClass),n(t,7,1,[a["\u0275nov"](t,8).baseClass,a["\u0275nov"](t,8).primaryButton,a["\u0275nov"](t,8).secondaryButton,a["\u0275nov"](t,8).tertiaryButton,a["\u0275nov"](t,8).ghostButton,a["\u0275nov"](t,8).dangerButton,a["\u0275nov"](t,8).dangerPrimaryButton,a["\u0275nov"](t,8).skeleton,a["\u0275nov"](t,8).smallSize,a["\u0275nov"](t,8).toolbarAction,a["\u0275nov"](t,8).overflowMenu])})}var M=a["\u0275ccf"]("app-third-party-settings",C,function(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"app-third-party-settings",[],null,null,null,R,P)),a["\u0275did"](1,49152,null,0,C,[g.a,x.e,w.j,f.a,_.a],null,null)],null,null)},{},{},[]),E=e("NpSD"),A=e("cbbC"),D=e("Gv0t"),k=e("cN2v"),S=e("I0pH"),O=e("gKtx"),F=e("GRwY"),N=e("P08G"),z=e("t68o"),I=e("brgC"),B=e("W7UG"),T=e("GcOC"),U=e("9lol"),L=e("SVse"),j=e("s7LF"),G=e("mEpm"),H=e("ZHEK"),W=e("RJDq"),J=e("U6oK"),q=e("i3NF"),K=e("uvqg"),Y=e("f8KH"),Q=e("maoM"),V=e("QQfA"),X=e("IP0z"),Z=e("E4Uz"),$=e("iInd"),nn=function(){},tn=e("h6sn"),en=e("cbyg"),an=e("niTG"),on=e("XBWk"),ln=e("+IpF"),rn=e("4UMp"),dn=e("5F/F"),sn=e("+NSx"),cn=e("jPU2"),un=e("nXcq"),pn=e("P5T4"),mn=e("H+bR"),gn=e("nhzO"),bn=e("UDqP"),fn=e("GMRT"),hn=e("jQIA"),vn=e("FS8H"),yn=e("kdZC"),Cn=e("eUdb"),xn=e("SpJC"),wn=e("IxoR"),_n=e("0n+N"),Pn=e("Lb5T"),Rn=e("ctAq"),Mn=e("CX5l"),En=e("nw/W"),An=e("EJfY"),Dn=e("kEMu"),kn=e("3ezH"),Sn=e("vjI9"),On=e("yKc8"),Fn=e("ezSh"),Nn=e("pVHs"),zn=e("ixoK"),In=e("LuTi"),Bn=e("OSGs"),Tn=e("zMNK"),Un=e("/HVE"),Ln=e("hOhj"),jn=e("Xd0L"),Gn=e("cUpR"),Hn=e("4y4f"),Wn=e("Dg3h"),Jn=e("imf+"),qn=e("h5jA"),Kn=e("9Ntg"),Yn=e("wqUn"),Qn=e("Eaeu"),Vn=e("JKVJ"),Xn=e("Y/+N"),Zn=e("PqSs");e.d(t,"ThirdPartySettingsModuleNgFactory",function(){return $n});var $n=a["\u0275cmf"](l,[],function(n){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,M,E.a,A.a,D.a,k.a,S.a,O.a,F.a,N.a,z.a,I.a,B.a,T.a,U.a]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,L.NgLocalization,L.NgLocaleLocalization,[a.LOCALE_ID,[2,L["\u0275angular_packages_common_common_a"]]]),a["\u0275mpd"](4608,j.C,j.C,[]),a["\u0275mpd"](4608,j.f,j.f,[]),a["\u0275mpd"](5120,G.a,H.a,[[3,G.a]]),a["\u0275mpd"](5120,W.a,J.a,[[3,W.a]]),a["\u0275mpd"](4608,q.a,q.a,[W.a]),a["\u0275mpd"](5120,K.a,Y.a,[[3,K.a]]),a["\u0275mpd"](4608,_.a,_.a,[a.ComponentFactoryResolver,W.a]),a["\u0275mpd"](4608,f.a,f.a,[]),a["\u0275mpd"](4608,Q.a,Q.a,[a.ComponentFactoryResolver,a.Injector,W.a]),a["\u0275mpd"](4608,V.b,V.b,[V.h,V.d,a.ComponentFactoryResolver,V.g,V.e,a.Injector,a.NgZone,L.DOCUMENT,X.b,[2,L.Location]]),a["\u0275mpd"](5120,V.i,V.j,[V.b]),a["\u0275mpd"](5120,x.c,x.d,[V.b]),a["\u0275mpd"](135680,x.e,x.e,[V.b,a.Injector,[2,L.Location],[2,x.b],x.c,[3,x.e],V.d]),a["\u0275mpd"](4608,Z.d,Z.d,[]),a["\u0275mpd"](1073742336,L.CommonModule,L.CommonModule,[]),a["\u0275mpd"](1073742336,$.s,$.s,[[2,$.x],[2,$.o]]),a["\u0275mpd"](1073742336,nn,nn,[]),a["\u0275mpd"](1073742336,j.B,j.B,[]),a["\u0275mpd"](1073742336,j.l,j.l,[]),a["\u0275mpd"](1073742336,j.x,j.x,[]),a["\u0275mpd"](1073742336,tn.a,tn.a,[]),a["\u0275mpd"](1073742336,H.c,H.c,[]),a["\u0275mpd"](1073742336,en.a,en.a,[]),a["\u0275mpd"](1073742336,an.c,an.c,[]),a["\u0275mpd"](1073742336,on.c,on.c,[]),a["\u0275mpd"](1073742336,ln.c,ln.c,[]),a["\u0275mpd"](1073742336,rn.a,rn.a,[]),a["\u0275mpd"](1073742336,dn.a,dn.a,[]),a["\u0275mpd"](1073742336,u.b,u.b,[]),a["\u0275mpd"](1073742336,J.b,J.b,[]),a["\u0275mpd"](1073742336,sn.c,sn.c,[]),a["\u0275mpd"](1073742336,cn.a,cn.a,[]),a["\u0275mpd"](1073742336,un.a,un.a,[]),a["\u0275mpd"](1073742336,pn.a,pn.a,[]),a["\u0275mpd"](1073742336,mn.a,mn.a,[]),a["\u0275mpd"](1073742336,gn.a,gn.a,[]),a["\u0275mpd"](1073742336,bn.b,bn.b,[]),a["\u0275mpd"](1073742336,fn.b,fn.b,[]),a["\u0275mpd"](1073742336,hn.a,hn.a,[]),a["\u0275mpd"](1073742336,vn.b,vn.b,[]),a["\u0275mpd"](1073742336,yn.b,yn.b,[]),a["\u0275mpd"](1073742336,Cn.c,Cn.c,[]),a["\u0275mpd"](1073742336,xn.a,xn.a,[]),a["\u0275mpd"](1073742336,wn.a,wn.a,[]),a["\u0275mpd"](1073742336,_n.a,_n.a,[]),a["\u0275mpd"](1073742336,Pn.b,Pn.b,[]),a["\u0275mpd"](1073742336,Y.b,Y.b,[]),a["\u0275mpd"](1073742336,Rn.b,Rn.b,[]),a["\u0275mpd"](1073742336,Mn.a,Mn.a,[]),a["\u0275mpd"](1073742336,En.b,En.b,[]),a["\u0275mpd"](1073742336,An.a,An.a,[]),a["\u0275mpd"](1073742336,Dn.a,Dn.a,[]),a["\u0275mpd"](1073742336,kn.a,kn.a,[]),a["\u0275mpd"](1073742336,Sn.b,Sn.b,[]),a["\u0275mpd"](1073742336,On.a,On.a,[]),a["\u0275mpd"](1073742336,Fn.a,Fn.a,[]),a["\u0275mpd"](1073742336,Nn.a,Nn.a,[]),a["\u0275mpd"](1073742336,zn.c,zn.c,[]),a["\u0275mpd"](1073742336,In.d,In.d,[]),a["\u0275mpd"](1073742336,Bn.a,Bn.a,[]),a["\u0275mpd"](1073742336,X.a,X.a,[]),a["\u0275mpd"](1073742336,Tn.f,Tn.f,[]),a["\u0275mpd"](1073742336,Un.b,Un.b,[]),a["\u0275mpd"](1073742336,Ln.b,Ln.b,[]),a["\u0275mpd"](1073742336,V.f,V.f,[]),a["\u0275mpd"](1073742336,jn.e,jn.e,[[2,jn.b],[2,Gn.f]]),a["\u0275mpd"](1073742336,x.k,x.k,[]),a["\u0275mpd"](1073742336,Hn.b,Hn.b,[]),a["\u0275mpd"](1073742336,Wn.a,Wn.a,[]),a["\u0275mpd"](1073742336,Jn.a,Jn.a,[]),a["\u0275mpd"](1073742336,Z.c,Z.c,[]),a["\u0275mpd"](1073742336,qn.c,qn.c,[]),a["\u0275mpd"](1073742336,Kn.c,Kn.c,[]),a["\u0275mpd"](1073742336,Yn.b,Yn.b,[]),a["\u0275mpd"](1073742336,Qn.b,Qn.b,[]),a["\u0275mpd"](1073742336,Vn.b,Vn.b,[]),a["\u0275mpd"](1073742336,Xn.a,Xn.a,[]),a["\u0275mpd"](1073742336,Zn.a,Zn.a,[]),a["\u0275mpd"](1073742336,m.c,m.c,[]),a["\u0275mpd"](1073742336,l,l,[]),a["\u0275mpd"](1024,$.m,function(){return[[{path:"",component:C}]]},[])])})},t68o:function(n,t,e){"use strict";e.d(t,"a",function(){return u});var a=e("8Y7J"),o=e("s6ns"),i=e("SVse"),l=(e("QQfA"),e("IP0z"),e("zMNK")),r=(e("/HVE"),e("hOhj"),e("Xd0L"),e("cUpR"),e("5GAg")),d=a["\u0275crt"]({encapsulation:2,styles:[".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}@media (-ms-high-contrast:active){.mat-dialog-container{outline:solid 1px}}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base{margin-left:0;margin-right:8px}"],data:{animation:[{type:7,name:"dialogContainer",definitions:[{type:0,name:"void, exit",styles:{type:6,styles:{opacity:0,transform:"scale(0.7)"},offset:null},options:void 0},{type:0,name:"enter",styles:{type:6,styles:{transform:"none"},offset:null},options:void 0},{type:1,expr:"* => enter",animation:{type:4,styles:{type:6,styles:{transform:"none",opacity:1},offset:null},timings:"150ms cubic-bezier(0, 0, 0.2, 1)"},options:null},{type:1,expr:"* => void, * => exit",animation:{type:4,styles:{type:6,styles:{opacity:0},offset:null},timings:"75ms cubic-bezier(0.4, 0.0, 0.2, 1)"},options:null}],options:{}}]}});function s(n){return a["\u0275vid"](0,[(n()(),a["\u0275and"](0,null,null,0))],null,null)}function c(n){return a["\u0275vid"](0,[a["\u0275qud"](402653184,1,{_portalOutlet:0}),(n()(),a["\u0275and"](16777216,null,null,1,null,s)),a["\u0275did"](2,212992,[[1,4]],0,l.b,[a.ComponentFactoryResolver,a.ViewContainerRef],{portal:[0,"portal"]},null)],function(n,t){n(t,2,0,"")},null)}var u=a["\u0275ccf"]("mat-dialog-container",o.i,function(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"mat-dialog-container",[["aria-modal","true"],["class","mat-dialog-container"],["tabindex","-1"]],[[1,"id",0],[1,"role",0],[1,"aria-labelledby",0],[1,"aria-label",0],[1,"aria-describedby",0],[40,"@dialogContainer",0]],[["component","@dialogContainer.start"],["component","@dialogContainer.done"]],function(n,t,e){var o=!0;return"component:@dialogContainer.start"===t&&(o=!1!==a["\u0275nov"](n,1)._onAnimationStart(e)&&o),"component:@dialogContainer.done"===t&&(o=!1!==a["\u0275nov"](n,1)._onAnimationDone(e)&&o),o},c,d)),a["\u0275did"](1,49152,null,0,o.i,[a.ElementRef,r.f,a.ChangeDetectorRef,[2,i.DOCUMENT],o.h],null,null)],null,function(n,t){n(t,0,0,a["\u0275nov"](t,1)._id,a["\u0275nov"](t,1)._config.role,a["\u0275nov"](t,1)._config.ariaLabel?null:a["\u0275nov"](t,1)._ariaLabelledBy,a["\u0275nov"](t,1)._config.ariaLabel,a["\u0275nov"](t,1)._config.ariaDescribedBy||null,a["\u0275nov"](t,1)._state)})},{},{},[])}}]);