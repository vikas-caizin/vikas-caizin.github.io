(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"9XGM":function(t,e,a){"use strict";a.d(e,"a",function(){return r});var i=a("ciZX");a("Z725");class r extends i.a{constructor(t,e,a){super(),this.modalService=t,this.injector=e,this.confirmationService=a,this.modalText=this.injector.get("modalText"),this.confirmText=this.injector.get("confirmText"," Continue"),this.cancelText=this.injector.get("cancelText"," Cancel"),this.titleText=this.injector.get("titleText","Confirmation"),this.overlayClose=this.injector.get("overlayClose",!0),this.confirmationSubject=e.get("confirmationSubject",!1),this.modalSubText=e.get("modalSubText",!1)}ngOnInit(){}closeModal(){this.confirmationSubject?(this.confirmationSubject.next(!1),this.modalService.destroy()):(this.modalService.destroy(),this.confirmationService.setData(!1))}continueClick(){this.confirmationSubject?(this.confirmationSubject.next(!0),this.modalService.destroy()):(this.confirmationService.setData(!0),this.modalService.destroy())}}},EJfY:function(t,e,a){"use strict";a.d(e,"a",function(){return i});class i{}},MqE1:function(t,e,a){"use strict";a.d(e,"a",function(){return r}),a("pQSL");var i=a("IheW");class r{constructor(t){this.tqmiHttpService=t,this.apiPath={forms:"api/forms",getFormDetails:"api/form",approveForm:"api/approve-form/",raiseDiscussion:"api/need-discussion",approverFormList:"api/get-pending-approval-forms-list",enableDisableForm:"/api/enable-disable-form",raiseEnableDisableRequest:"api/form-enable-disable-request",enableDisable:"api/enable-disable-form",getEmployeeForms:"api/form-listing-with-dependent-of",formsDataListingIntersection:"api/form-data-listing-with-intersection",getFormDataEntry:"api/get-form-data-by-id",formsDataListingDownloadIntersection:"api/download-form-data-listing-with-intersection",performRecomputations:"api/perform-recomputation",getLatestFormData:"api/get-latest-form-data",addExport:"api/form-list-config",updateExportConfig:"api/form-list-config",getForms:"api/form-list-by-individuals-departments",getExportTableData:"api/form-list-given-config",exportToExcel:"api/download-form-list-given-config",downloadFormTemplate:"api/download-form-template",masterformdata:"api/master-data-map",masterdataforform:"api/get-master-data-for-form",masterdataDuplicacyCheck:"api/find-existing-master-data-by-name",getDropdownDataforColumns:"api/get-form-field-unique-values",formFilters:"api/form-filter",applyFilter:"api/apply-filter"}}getForms(t,e,a,r,n){let o=(new i.h).set("formDataSource","INTERNAL").set("sortBy",n||"createdDate").set("sort",r||"desc").set("startFrom",e.toString()).set("limit",a.toString());return t&&t.trim().length&&(o=o.set("searchQuery",t)),this.tqmiHttpService.get(this.apiPath.forms,{apiType:"forms",params:o})}getFormListing(t,e,a,r){let n=(new i.h).set("sortBy","createdDate").set("sort","desc").set("startFrom",e.toString()).set("isApproved",r.toString()).set("limit",a.toString());return t&&t.trim().length&&(n=n.set("searchQuery",t)),this.tqmiHttpService.get(this.apiPath.forms,{apiType:"forms",params:n})}getApproverFormListing(t,e,a){let r=(new i.h).set("sortBy","createdDate").set("sort","desc").set("startFrom",e.toString()).set("limit",a.toString());return t&&t.trim().length&&(r=r.set("searchQuery",t)),this.tqmiHttpService.get(this.apiPath.approverFormList,{apiType:"forms",params:r})}getFormDetail(t){return this.tqmiHttpService.get(this.apiPath.getFormDetails+"/"+t,{apiType:"forms"})}addForms(t){return this.tqmiHttpService.post(this.apiPath.forms,t,{apiType:"forms"})}updateForms(t){return this.tqmiHttpService.patch(this.apiPath.forms,t,{apiType:"forms"})}approveForm(t){return this.tqmiHttpService.post(this.apiPath.approveForm+t,{},{apiType:"forms"})}raiseDiscussionForm(t){return this.tqmiHttpService.post(this.apiPath.raiseDiscussion,t,{apiType:"forms"})}raiseEnableDisableRequest(t,e){return this.tqmiHttpService.post(this.apiPath.raiseEnableDisableRequest+"/"+t,{action:e?"ENABLE":"DISABLE"},{apiType:"forms"})}enableDisable(t,e){return this.tqmiHttpService.post(this.apiPath.enableDisable+"/"+t,{action:e?"ENABLE":"DISABLE"},{apiType:"forms"})}getEmployeeForm(t,e){let a=(new i.h).set("formId",e);return this.tqmiHttpService.get(this.apiPath.getEmployeeForms+"/"+t,{apiType:"forms",params:a})}getEmployeeFormDetails(t,e,a,r,n,o,s,l){let p=(new i.h).set("limit",a.toString()).set("formId1",r).set("skip",o);return s&&(p=p.set("sortOnKey",s).set("sort",l)),""!=n&&(p=p.set("formId2",n)),t&&t.trim().length&&(p=p.set("searchQuery",t)),this.tqmiHttpService.get(this.apiPath.formsDataListingIntersection,{apiType:"forms",params:p})}downloadFormData(t,e,a,r,n,o){let s=(new i.h).set("formId1",a);return s=s.set("employeeId",o),""!=r&&(s=s.set("formId2",r)),e&&(s=s.set("limit",e.toString())),n&&(s=s.set("skip",n)),t&&t.trim().length&&(s=s.set("searchQuery",t)),this.tqmiHttpService.get(this.apiPath.formsDataListingDownloadIntersection,{apiType:"forms",params:s})}performRecomputations(t){return this.tqmiHttpService.get(this.apiPath.performRecomputations+"/"+t,{apiType:"forms"})}getFormDataById(t){return this.tqmiHttpService.get(this.apiPath.getFormDataEntry+"/"+t,{apiType:"forms"})}getLatestFormData(t,e){return this.tqmiHttpService.get(this.apiPath.getLatestFormData+"?formId="+t+"&fieldId="+e,{apiType:"forms"})}getFormsExportTabs(){return this.tqmiHttpService.get(this.apiPath.addExport,{apiType:"forms"})}addFormsExport(t){return this.tqmiHttpService.post(this.apiPath.addExport,t,{apiType:"forms"})}getExportFormDetails(t,e,a,r){let n=new i.h;return e&&(n=n.set("employeeIdList",e)),r.length&&(n=n.set("groupIdList",r)),a.length&&(n=n.set("departmentIdList",a)),t&&t.trim().length&&(n=n.set("searchparam",t)),this.tqmiHttpService.get(this.apiPath.getForms,{apiType:"forms",params:n})}updateExportForms(t){return this.tqmiHttpService.patch(this.apiPath.addExport,t,{apiType:"forms"})}getFormDetailExport(t){return this.tqmiHttpService.get(this.apiPath.addExport+"/"+t,{apiType:"forms"})}getFormExportTableData(t,e,a,r){let n=(new i.h).set("limit",a.toString()).set("skip",r);return t&&(n=n.set("searchparam",t)),this.tqmiHttpService.get(this.apiPath.getExportTableData+"/"+e,{apiType:"forms",params:n})}getFormExportUrl(t){return this.tqmiHttpService.get(this.apiPath.exportToExcel+"/"+t,{apiType:"forms"})}getSAPForms(t,e,a,r,n){let o=(new i.h).set("formDataSource","SAP").set("sortBy",n||"createdDate").set("sort",r||"desc").set("startFrom",e.toString()).set("limit",a.toString());return t&&t.trim().length&&(o=o.set("searchQuery",t)),this.tqmiHttpService.get(this.apiPath.forms,{apiType:"forms",params:o})}getRDBMSForms(t,e,a){let r=(new i.h).set("formDataSource","EXTERNAL_DATABASE").set("sortBy","createdDate").set("sort","desc").set("startFrom",e.toString()).set("limit",a.toString());return t&&t.trim().length&&(r=r.set("searchQuery",t)),this.tqmiHttpService.get(this.apiPath.forms,{apiType:"forms",params:r})}getAllForms(t,e,a){let r=(new i.h).set("sortBy","createdDate").set("sort","desc").set("startFrom",e.toString()).set("limit",a.toString());return t&&t.trim().length&&(r=r.set("searchQuery",t)),this.tqmiHttpService.get(this.apiPath.forms,{apiType:"forms",params:r})}deleteExportTab(t){return this.tqmiHttpService.delete(this.apiPath.updateExportConfig+"/"+t,{apiType:"forms"})}downloadFormTemplate(t){return this.tqmiHttpService.get(this.apiPath.downloadFormTemplate+"/"+t,{apiType:"forms"})}getFormMasterData(t,e,a){let r=(new i.h).set("limit",e.toString()).set("formId1",t).set("skip",a);return this.tqmiHttpService.get(this.apiPath.formsDataListingIntersection,{apiType:"forms",params:r})}setFormMasterData(t){return this.tqmiHttpService.post(this.apiPath.masterformdata,t,{apiType:"forms"})}getMasterDataSpecified(t){return this.tqmiHttpService.get(this.apiPath.masterdataforform+"/"+t,{apiType:"forms"})}deleteMasterData(t){return this.tqmiHttpService.delete(this.apiPath.masterformdata+"/"+t,{apiType:"forms"})}editMasterData(t){return this.tqmiHttpService.post(this.apiPath.masterdataDuplicacyCheck,t,{apiType:"forms"})}updateMasterDataSpecified(t,e){return this.tqmiHttpService.patch(this.apiPath.masterformdata+"/"+e,t,{apiType:"forms"})}getFormDropdownValues(t,e,a){let r=(new i.h).set("formId",t).set("fieldId",e).set("fieldType",a);return this.tqmiHttpService.get(this.apiPath.getDropdownDataforColumns,{apiType:"forms",params:r})}getFormFilterRecord(t){return this.tqmiHttpService.get(this.apiPath.formFilters+"/"+t,{apiType:"forms"})}saveFormFilters(t,e){return this.tqmiHttpService.post(this.apiPath.formFilters,t,{apiType:"forms"})}updateFormFilters(t,e){return this.tqmiHttpService.patch(this.apiPath.formFilters+"/"+e,t,{apiType:"forms"})}getFormFilterList(t,e,a){let r=new i.h;return t&&(r=r.set("formId",t)),e&&""!=e&&(r=r.set("searchQuery",e)),a&&(r=r.set("formDataSource",(a="external"===a?"sap":a).toUpperCase())),this.tqmiHttpService.get(this.apiPath.formFilters,{apiType:"forms",params:r})}deleteFormFilter(t){return this.tqmiHttpService.delete(this.apiPath.formFilters+"/"+t,{apiType:"forms"})}getFilteredFormData(t,e,a,r){let n=new i.h;return r>=0&&a>=0&&(n=n.set("limit",r.toString()).set("skip",a.toString())),this.tqmiHttpService.post(this.apiPath.applyFilter,{formId:t,filter:e},{apiType:"forms",params:n})}getFilterDetails(t){return this.tqmiHttpService.get(this.apiPath.formFilters+"/"+t,{apiType:"forms"})}}},XvC9:function(t,e,a){"use strict";var i=a("8Y7J"),r=a("+NSx"),n=a("nw/W"),o=a("SVse"),s=a("s7LF");a("kqF4"),a.d(e,"a",function(){return l}),a.d(e,"b",function(){return c});var l=i["\u0275crt"]({encapsulation:0,styles:[[".my-custom-combo[_ngcontent-%COMP%]{max-height:180px;height:auto}"]],data:{}});function p(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,1,":svg:svg",[["class","bx--list-box__menu-icon"],["ibmIconChevronDown16",""]],null,null,null,null,null)),i["\u0275did"](1,4210688,null,0,r.b,[i.ElementRef],null,null)],null,null)}function m(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,1,":svg:svg",[["class","bx--list-box__menu-icon"],["ibmIconChevronUp16",""]],null,null,null,null,null)),i["\u0275did"](1,4210688,null,0,n.a,[i.ElementRef],null,null)],null,null)}function d(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,2,"li",[["class","bx--list-box__menu-item"],["ng-reflect-klass","bx--list-box__menu-item"],["ng-reflect-ng-class","[object Object]"],["role","option"]],null,[[null,"click"]],function(t,e,a){var i=!0;return"click"===e&&(i=!1!==t.component.onSelectItem(a,t.context.$implicit)&&i),i},null,null)),(t()(),i["\u0275eld"](1,0,null,null,1,"div",[["class","bx--list-box__menu-item__option"],["tabindex","-1"]],null,null,null,null,null)),(t()(),i["\u0275ted"](2,null,[" "," "]))],null,function(t,e){t(e,2,0,e.context.$implicit.content)})}function u(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,2,"ul",[["aria-label","Listbox"],["class","bx--list-box__menu bx--multi-select my-custom-combo"],["role","listbox"]],null,null,null,null,null)),(t()(),i["\u0275and"](16777216,null,null,1,null,d)),i["\u0275did"](2,278528,null,0,o.NgForOf,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(t,e){t(e,2,0,e.component.items)},null)}function c(t){return i["\u0275vid"](0,[i["\u0275qud"](402653184,1,{input:0}),(t()(),i["\u0275eld"](1,0,null,null,13,"div",[["class","bx--combo-box bx--list-box"],["style","margin-top: 8px;"]],null,[[null,"click"]],function(t,e,a){var i=!0,r=t.component;return"click"===e&&(i=!1!==(!r.isDisable&&r.toggleDropdown())&&i),i},null,null)),(t()(),i["\u0275eld"](2,0,null,null,10,"div",[["aria-expanded","true"],["aria-haspopup","true"],["aria-label","close menu"],["class","bx--list-box__field"],["role","button"],["tabindex","0"],["type","button"]],null,null,null,null,null)),(t()(),i["\u0275eld"](3,0,[[1,0],["input",1]],null,5,"input",[["aria-label","ListBox input field"],["autocomplete","off"],["class","bx--text-input"],["id","dropdown-1"],["role","combobox"]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(t,e,a){var r=!0,n=t.component;return"input"===e&&(r=!1!==i["\u0275nov"](t,4)._handleInput(a.target.value)&&r),"blur"===e&&(r=!1!==i["\u0275nov"](t,4).onTouched()&&r),"compositionstart"===e&&(r=!1!==i["\u0275nov"](t,4)._compositionStart()&&r),"compositionend"===e&&(r=!1!==i["\u0275nov"](t,4)._compositionEnd(a.target.value)&&r),"ngModelChange"===e&&(r=!1!==n.searchModelChanged.next(a)&&r),r},null,null)),i["\u0275did"](4,16384,null,0,s.c,[i.Renderer2,i.ElementRef,[2,s.a]],null,null),i["\u0275prd"](1024,null,s.p,function(t){return[t]},[s.c]),i["\u0275did"](6,671744,null,0,s.u,[[8,null],[8,null],[8,null],[6,s.p]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),i["\u0275prd"](2048,null,s.q,null,[s.u]),i["\u0275did"](8,16384,null,0,s.r,[[4,s.q]],null,null),(t()(),i["\u0275and"](16777216,null,null,1,null,p)),i["\u0275did"](10,16384,null,0,o.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),i["\u0275and"](16777216,null,null,1,null,m)),i["\u0275did"](12,16384,null,0,o.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),i["\u0275and"](16777216,null,null,1,null,u)),i["\u0275did"](14,16384,null,0,o.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(t,e){var a=e.component;t(e,6,0,a.isDisable,a.searchQuery),t(e,10,0,!a.open),t(e,12,0,a.open),t(e,14,0,a.open)},function(t,e){t(e,3,0,e.component.placeholder,i["\u0275nov"](e,8).ngClassUntouched,i["\u0275nov"](e,8).ngClassTouched,i["\u0275nov"](e,8).ngClassPristine,i["\u0275nov"](e,8).ngClassDirty,i["\u0275nov"](e,8).ngClassValid,i["\u0275nov"](e,8).ngClassInvalid,i["\u0275nov"](e,8).ngClassPending)})}},Z725:function(t,e,a){"use strict";a.d(e,"a",function(){return r});var i=a("2Vo4");class r{constructor(){this.confirmState=new i.a(!1)}setData(t){this.confirmState.next(t)}getData(){return this.confirmState.asObservable()}}},fF59:function(t,e,a){"use strict";a.d(e,"a",function(){return o}),a.d(e,"b",function(){return s});var i=a("8Y7J"),r=a("O9pe"),n=function(){function t(){this.focusable=!1}return t.decorators=[{type:i.Component,args:[{selector:"ibm-icon-add20",template:'\n    <svg\n      ibmIconAdd20\n      [ariaLabel]="ariaLabel"\n      [ariaLabelledby]="ariaLabelledby"\n      [ariaHidden]="ariaHidden"\n      [title]="title"\n      [isFocusable]="focusable"\n      [attr.class]="innerClass">\n    </svg>\n  '}]}],t.propDecorators={ariaLabel:[{type:i.Input}],ariaLabelledby:[{type:i.Input}],ariaHidden:[{type:i.Input}],title:[{type:i.Input}],focusable:[{type:i.Input}],innerClass:[{type:i.Input}]},t}(),o=function(){function t(t){this.elementRef=t,this.isFocusable=!1}return t.prototype.ngAfterViewInit=function(){var e=this.elementRef.nativeElement;e.setAttribute("xmlns","http://www.w3.org/2000/svg");for(var a=(new DOMParser).parseFromString('<svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M17 15V7h-2v8H7v2h8v8h2v-8h8v-2h-8z"></path></svg>',"image/svg+xml").documentElement.firstChild;a;)e.appendChild(e.ownerDocument.importNode(a,!0)),a=a.nextSibling;for(var i=Object(r.a)({width:20,height:20,viewBox:"0 0 32 32",title:this.title,"aria-label":this.ariaLabel,"aria-labelledby":this.ariaLabelledby,"aria-hidden":this.ariaHidden,focusable:this.isFocusable.toString()}),n=Object.keys(i),o=0;o<n.length;o++){var s=n[o],l=i[s];"title"!==s&&l&&e.setAttribute(s,l)}if(i.title){var p=document.createElement("title");p.textContent=i.title,p.setAttribute("id","add20-"+ ++t.titleIdCounter),e.appendChild(p),e.setAttribute("aria-labelledby","add20-"+t.titleIdCounter)}},t.titleIdCounter=0,t.decorators=[{type:i.Directive,args:[{selector:"[ibmIconAdd20]"}]}],t.ctorParameters=function(){return[{type:i.ElementRef}]},t.propDecorators={ariaLabel:[{type:i.Input}],ariaLabelledby:[{type:i.Input}],ariaHidden:[{type:i.Input}],title:[{type:i.Input}],isFocusable:[{type:i.Input}]},t}(),s=function(){function t(){}return t.decorators=[{type:i.NgModule,args:[{declarations:[n,o],exports:[n,o]}]}],t}()},kqF4:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var i=a("8Y7J"),r=a("ds6q"),n=a("Kj3r");class o{constructor(t){this.elementRef=t,this.open=!1,this.searchModelChanged=new r.Subject,this.isDisable=!1,this.onSearch=new i.EventEmitter,this.onSelect=new i.EventEmitter,this.onOpen=new i.EventEmitter,this.placeholder="Search user",this.itemSlected=!1}ngOnInit(){this.searchModelChangeSubscription=this.searchModelChanged.pipe(Object(n.a)(600)).subscribe(t=>{this.onSearch.emit(t),this.open=!0})}ngAfterViewInit(){document.addEventListener("click",t=>{this.elementRef.nativeElement.contains(t.target)||this.open&&this.closeDropdown()})}closeDropdown(){this.open=!1}openDropdown(){this.onOpen.emit(),this.open=!0}toggleDropdown(){this.itemSlected?this.itemSlected=!1:this.open?this.closeDropdown():this.openDropdown()}ngOnDestroy(){this.searchModelChangeSubscription.unsubscribe()}onSelectItem(t,e){this.itemSlected=!0,t.stopPropagation(),t.stopImmediatePropagation(),this.closeDropdown(),this.isDependent||(this.searchQuery=e.content),this.onSelect.emit(e)}ngOnChanges(t){t.searchQuery&&t.searchQuery.currentValue!==t.searchQuery.previousValue&&(this.searchQuery=t.searchQuery.currentValue)}}},moEF:function(t,e,a){"use strict";a.r(e);var i=a("8Y7J");class r{}var n=a("pMnS"),o=a("1Txd"),s=a("yFBK"),l=a("MqE1"),p=a("s7LF"),m=a("PJ54"),d=a("Z3BZ"),u=a("EApP"),c=a("M+tS"),h=a("3yNS"),f=a("IcCv"),g=a("A+V5"),b=a("SVse"),v=a("K/Md"),S=a("7seC"),y=a("iInd"),F=a("hUUB"),D=a("s6ns"),I=a("u1gT"),x=a("TfA5"),E=a("Z725"),w=a("mrSG"),T=a("qHnB"),C=a("HTWL"),P=a("wd/R");class L{constructor(t,e,a,i,r,n){this.activatedRoute=t,this._router=e,this.formService=a,this.settingsService=i,this.formDataService=r,this.toasterService=n,this.formSchema=[],this.isFormFill=!0}ngOnInit(){this.logInEmployeeId=localStorage.getItem("E_Id"),this.activatedRoute.params.subscribe(t=>{this.currentid=t.id,this.dataEntryId=t.id1,this.currentid&&(this.loading=!0,this.formSchema=[],this.formService.getFormDetail(this.currentid).subscribe(t=>{t&&t.success?(this.logInEmployeeId===t.response.form.approverId&&(this.isApproverFilling=!0),this.formName=t.response.form.formName,this.formSchema=t.response.form.formElements,this.formId=t.response.form.formId,this.dataEntryId&&this.formService.getFormDataById(this.dataEntryId).subscribe(t=>{t&&t.response&&t.success&&(this.formDataValue=t.response.data,this.dataCaptureDate=t.response.dataCaptureDate)},t=>{this.formDataValue=[]})):(this.toasterService.error(C.a.PLEASE_TRY_AGAIN),this._router.navigate(["/forms"])),this.loading=!1},t=>{this.loading=!1,403===t.status?(this.toasterService.error(t.error.message),this._router.navigate(["/forms"])):this.toasterService.error(C.a.PLEASE_TRY_AGAIN)}))})}getFillPermissions(t){return t.fill}onFormSubmit(t){return Object(w.__awaiter)(this,void 0,void 0,function*(){let e,a=t.linkedData,i=t.fillAgain,r=(t=t.value).datePickerForForm;if(!r)return void this.toasterService.error(C.a.PLEASE_SELECT_DATE);e=P(r).format("YYYY-MM-DDTHH:mm:00");let n=[];try{if(this.formSchema.length)for(let t of this.formSchema)"heading"!==t.field&&"paragraph"!==t.field&&"section_break"!==t.field&&"submit_btn"!==t.field&&n.push({label:t.label,uuid:t.uuid,isMetricField:t.metricEnabled,unitOfMeasurement:t.metricEnabled?t.unitOfMeasurement:void 0,field:t.field});let a=Object.keys(t);for(let i=0;i<n.length;i++){let r,o;n[i].isMetricField&&(r=e,o=e);let s=t[a[i]];if("time"===n[i].field&&(s=P(s).format("hh:mm A")),n[i]={label:n[i].label,key:a[i],value:s,uuid:n[i].uuid,isMetricField:n[i].isMetricField,unitOfMeasurement:n[i].unitOfMeasurement,dataCaptureStart:r||void 0,dataCaptureEnd:o||void 0},n[i].value&&n[i].value instanceof File){const e=yield this.uploadFile(t[a[i]],this.currentid);if(!e||!e.success)throw"Error occurred while uploading file";n[i].value=e.response.fileURL}delete t[a[i]]}}catch(s){n=[]}let o=a;if(this.dataEntryId)this.formDataService.editFormData({formSubmissionUuid:this.dataEntryId,data:n,dataCaptureDate:e}).subscribe(t=>{t&&t.success&&(i?(this.toasterService.success(C.a.FORM_DATA_UPDATED_SUCCESS),window.location.reload()):(this.toasterService.success(C.a.FORM_DATA_UPDATED_SUCCESS),this._router.navigateByUrl("/forms/linked-data-listing")))},t=>{this.toasterService.error(400===t.status?C.a.FORM_DATA_REQUEST_INVALID:403===t.status||405===t.status||205===t.status?t.error.message:C.a.PLEASE_TRY_AGAIN)});else{const t={formId:this.formId,data:n,dataCaptureDate:e};o&&(t.linkedFormId=o.linkedFormId,t.linkedFormSubmissionId=o.linkedFormSubmissionId),this.formDataService.addFormData(t).subscribe(t=>{t&&t.success&&(i?(this.toasterService.success(C.a.FORM_DATA_SAVED_SUCCESS),window.location.reload()):(this.toasterService.success(C.a.FORM_DATA_SAVED_SUCCESS),this._router.navigateByUrl("/forms/linked-data-listing")))},t=>{this.toasterService.error(400===t.status?C.a.FORM_DATA_REQUEST_INVALID:403===t.status||205===t.status?t.error.message:C.a.PLEASE_TRY_AGAIN)})}})}getIndex(t,e){return t.findIndex(t=>t.key===e)}uploadFile(t,e){return Object(w.__awaiter)(this,void 0,void 0,function*(){return this.settingsService.uploadFile({file:t,parentId:e}).toPromise()})}}var A=i["\u0275crt"]({encapsulation:0,styles:[[".form-fill-container[_ngcontent-%COMP%]{padding-left:32px;padding-right:32px;padding-top:3rem}.form-name-cls[_ngcontent-%COMP%]{margin-top:16px;padding-left:16px;padding-bottom:16px;font-size:18px;font-weight:500}.forms-listing-container[_ngcontent-%COMP%]{padding-right:32px!important;background-color:#fff!important}"]],data:{}});function q(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,1,"app-form-renderer",[],null,[[null,"formSchemaChange"],[null,"onSubmit"]],function(t,e,a){var i=!0,r=t.component;return"formSchemaChange"===e&&(i=!1!==(r.formSchema=a)&&i),"onSubmit"===e&&(i=!1!==r.onFormSubmit(a)&&i),i},o.c,o.b)),i["\u0275did"](1,114688,null,0,s.a,[l.a,p.f,m.a,d.a,u.j],{formSchema:[0,"formSchema"],isFormFill:[1,"isFormFill"],formDataValue:[2,"formDataValue"],isApproverFilling:[3,"isApproverFilling"],dataCaptureDate:[4,"dataCaptureDate"]},{onSubmit:"onSubmit"})],function(t,e){var a=e.component;t(e,1,0,a.formSchema,a.isFormFill,a.formDataValue,a.isApproverFilling,a.dataCaptureDate)},null)}function H(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,14,"div",[["class","form-fill-container"]],null,null,null,null,null)),(t()(),i["\u0275eld"](1,0,null,null,13,"ibm-tabs",[],null,null,null,c.b,c.a)),i["\u0275did"](2,1097728,null,2,h.a,[],null,null),i["\u0275qud"](603979776,1,{tabs:1}),i["\u0275qud"](335544320,2,{tabHeaders:0}),(t()(),i["\u0275eld"](5,0,null,0,5,"ibm-tab",[["heading","Form"]],[[1,"id",0]],null,null,f.b,f.a)),i["\u0275did"](6,114688,[[1,4]],0,g.a,[],{heading:[0,"heading"]},null),(t()(),i["\u0275eld"](7,0,null,0,1,"div",[["class","form-name-cls"]],null,null,null,null,null)),(t()(),i["\u0275ted"](8,null,["",""])),(t()(),i["\u0275and"](16777216,null,0,1,null,q)),i["\u0275did"](10,16384,null,0,b.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),i["\u0275eld"](11,0,null,0,3,"ibm-tab",[["heading","Past Data"]],[[1,"id",0]],null,null,f.b,f.a)),i["\u0275did"](12,114688,[[1,4]],0,g.a,[],{heading:[0,"heading"]},null),(t()(),i["\u0275eld"](13,0,null,0,1,"app-linked-form-data-listing",[],null,null,null,v.c,v.b)),i["\u0275did"](14,114688,null,0,S.a,[y.l,l.a,y.a,F.a,u.j,D.e,I.a,x.a,E.a,m.a],{isFromFill:[0,"isFromFill"]},null)],function(t,e){var a=e.component;t(e,6,0,"Form"),t(e,10,0,a.formSchema&&a.formSchema.length&&(!a.dataEntryId||a.formDataValue&&a.formDataValue.length)&&!a.loading),t(e,12,0,"Past Data"),t(e,14,0,"true")},function(t,e){var a=e.component;t(e,5,0,i["\u0275nov"](e,6).attrClass),t(e,8,0,a.formName),t(e,11,0,i["\u0275nov"](e,12).attrClass)})}function _(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,1,"app-form-fill",[],null,null,null,H,A)),i["\u0275did"](1,114688,null,0,L,[y.a,y.l,l.a,T.a,F.a,u.j],null,null)],function(t,e){t(e,1,0)},null)}var M=i["\u0275ccf"]("app-form-fill",L,_,{},{},[]),R=a("+jrW"),O=a("NpSD"),j=a("cbbC"),k=a("Gv0t"),N=a("cN2v"),V=a("gKtx"),B=a("GRwY"),U=a("P08G"),Q=a("quVZ"),Y=a("t7MO"),G=a("I0pH"),J=a("sstc"),Z=a("t68o"),z=a("lQmW"),K=a("/5xB"),X=a("zTFV"),W=a("+GeB"),$=a("jcvr"),tt=a("mEpm"),et=a("ZHEK"),at=a("RJDq"),it=a("U6oK"),rt=a("i3NF"),nt=a("QQfA"),ot=a("IP0z"),st=a("POq0"),lt=a("BTng"),pt=a("/HVE"),mt=a("uvqg"),dt=a("f8KH"),ut=a("maoM"),ct=a("pQSL"),ht=a("PsxR"),ft=a("X/pD"),gt=a("XX5M");class bt{}var vt=a("nU9L"),St=a("+IpF"),yt=a("jQIA"),Ft=a("+NSx"),Dt=a("jPU2"),It=a("h6sn"),xt=a("nXcq"),Et=a("eUdb"),wt=a("SpJC"),Tt=a("IxoR"),Ct=a("P5T4"),Pt=a("H+bR"),Lt=a("nhzO"),At=a("cbyg"),qt=a("niTG"),Ht=a("XBWk"),_t=a("4UMp"),Mt=a("5F/F"),Rt=a("3ezH"),Ot=a("zMNK"),jt=a("hOhj"),kt=a("5GAg"),Nt=a("Lb5T"),Vt=a("FS8H"),Bt=a("ctAq"),Ut=a("kEMu"),Qt=a("vjI9"),Yt=a("yKc8"),Gt=a("ezSh"),Jt=a("pVHs"),Zt=a("ixoK"),zt=a("LuTi"),Kt=a("h5jA"),Xt=a("9Ntg"),Wt=a("wqUn"),$t=a("HSTZ"),te=a("OZcg"),ee=a("nw/W"),ae=a("EJfY"),ie=a("Tl03"),re=a("+5LG"),ne=a("HyvF"),oe=a("fF59"),se=a("GMRT"),le=a("UDqP"),pe=a("bzBv"),me=a("+Inj"),de=a("CX5l"),ue=a("aI0y"),ce=a("kdZC"),he=a("XdKZ"),fe=a("4vLU"),ge=a("Xd0L"),be=a("cUpR"),ve=a("Fwaw"),Se=a("Gi4r"),ye=a("/m4c"),Fe=a("0L0y"),De=a("Jbdn"),Ie=a("L5ej"),xe=a("6TIQ"),Ee=a("+nmx");a.d(e,"FormFillModuleNgFactory",function(){return we});var we=i["\u0275cmf"](r,[],function(t){return i["\u0275mod"]([i["\u0275mpd"](512,i.ComponentFactoryResolver,i["\u0275CodegenComponentFactoryResolver"],[[8,[n.a,M,o.a,R.c,R.d,O.a,j.a,k.a,N.a,V.a,B.a,U.a,Q.a,v.a,Y.a,G.a,J.a,Z.a,z.a,K.a,X.a,W.a,$.a]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["\u0275mpd"](4608,b.NgLocalization,b.NgLocaleLocalization,[i.LOCALE_ID,[2,b["\u0275angular_packages_common_common_a"]]]),i["\u0275mpd"](4608,p.C,p.C,[]),i["\u0275mpd"](4608,p.f,p.f,[]),i["\u0275mpd"](5120,tt.a,et.a,[[3,tt.a]]),i["\u0275mpd"](5120,at.a,it.a,[[3,at.a]]),i["\u0275mpd"](4608,rt.a,rt.a,[at.a]),i["\u0275mpd"](4608,nt.b,nt.b,[nt.h,nt.d,i.ComponentFactoryResolver,nt.g,nt.e,i.Injector,i.NgZone,b.DOCUMENT,ot.b,[2,b.Location]]),i["\u0275mpd"](5120,nt.i,nt.j,[nt.b]),i["\u0275mpd"](4608,st.a,st.a,[]),i["\u0275mpd"](5120,lt.s,lt.t,[nt.b]),i["\u0275mpd"](4608,lt.v,lt.v,[nt.b,i.Injector,[2,b.Location],lt.s,[2,lt.u],[3,lt.v],nt.d]),i["\u0275mpd"](4608,lt.f,lt.f,[]),i["\u0275mpd"](5120,lt.o,lt.p,[nt.b]),i["\u0275mpd"](4608,lt.a,lt.m,[[2,lt.c],pt.a]),i["\u0275mpd"](5120,mt.a,dt.a,[[3,mt.a]]),i["\u0275mpd"](4608,m.a,m.a,[i.ComponentFactoryResolver,at.a]),i["\u0275mpd"](4608,ut.a,ut.a,[i.ComponentFactoryResolver,i.Injector,at.a]),i["\u0275mpd"](4608,d.a,d.a,[ct.a]),i["\u0275mpd"](4608,ht.a,ht.a,[ct.a]),i["\u0275mpd"](4608,ft.a,ft.a,[ct.a]),i["\u0275mpd"](4608,gt.a,gt.a,[ct.a]),i["\u0275mpd"](4608,T.a,T.a,[ct.a]),i["\u0275mpd"](4608,E.a,E.a,[]),i["\u0275mpd"](5120,D.c,D.d,[nt.b]),i["\u0275mpd"](135680,D.e,D.e,[nt.b,i.Injector,[2,b.Location],[2,D.b],D.c,[3,D.e],nt.d]),i["\u0275mpd"](4608,l.a,l.a,[ct.a]),i["\u0275mpd"](4608,F.a,F.a,[ct.a]),i["\u0275mpd"](4608,I.a,I.a,[ct.a]),i["\u0275mpd"](1073742336,b.CommonModule,b.CommonModule,[]),i["\u0275mpd"](1073742336,y.p,y.p,[[2,y.u],[2,y.l]]),i["\u0275mpd"](1073742336,bt,bt,[]),i["\u0275mpd"](1073742336,vt.a,vt.a,[]),i["\u0275mpd"](1073742336,p.B,p.B,[]),i["\u0275mpd"](1073742336,p.l,p.l,[]),i["\u0275mpd"](1073742336,p.x,p.x,[]),i["\u0275mpd"](1073742336,St.c,St.c,[]),i["\u0275mpd"](1073742336,yt.a,yt.a,[]),i["\u0275mpd"](1073742336,et.c,et.c,[]),i["\u0275mpd"](1073742336,it.b,it.b,[]),i["\u0275mpd"](1073742336,Ft.c,Ft.c,[]),i["\u0275mpd"](1073742336,Dt.a,Dt.a,[]),i["\u0275mpd"](1073742336,It.a,It.a,[]),i["\u0275mpd"](1073742336,xt.a,xt.a,[]),i["\u0275mpd"](1073742336,Et.c,Et.c,[]),i["\u0275mpd"](1073742336,wt.a,wt.a,[]),i["\u0275mpd"](1073742336,Tt.a,Tt.a,[]),i["\u0275mpd"](1073742336,Ct.a,Ct.a,[]),i["\u0275mpd"](1073742336,Pt.a,Pt.a,[]),i["\u0275mpd"](1073742336,Lt.a,Lt.a,[]),i["\u0275mpd"](1073742336,At.a,At.a,[]),i["\u0275mpd"](1073742336,qt.c,qt.c,[]),i["\u0275mpd"](1073742336,Ht.c,Ht.c,[]),i["\u0275mpd"](1073742336,_t.a,_t.a,[]),i["\u0275mpd"](1073742336,Mt.a,Mt.a,[]),i["\u0275mpd"](1073742336,Rt.a,Rt.a,[]),i["\u0275mpd"](1073742336,ot.a,ot.a,[]),i["\u0275mpd"](1073742336,Ot.f,Ot.f,[]),i["\u0275mpd"](1073742336,pt.b,pt.b,[]),i["\u0275mpd"](1073742336,jt.b,jt.b,[]),i["\u0275mpd"](1073742336,nt.f,nt.f,[]),i["\u0275mpd"](1073742336,st.b,st.b,[]),i["\u0275mpd"](1073742336,kt.a,kt.a,[]),i["\u0275mpd"](1073742336,lt.q,lt.q,[]),i["\u0275mpd"](1073742336,lt.g,lt.g,[]),i["\u0275mpd"](1073742336,lt.i,lt.i,[]),i["\u0275mpd"](1073742336,lt.h,lt.h,[]),i["\u0275mpd"](1073742336,Nt.b,Nt.b,[]),i["\u0275mpd"](1073742336,Vt.b,Vt.b,[]),i["\u0275mpd"](1073742336,dt.b,dt.b,[]),i["\u0275mpd"](1073742336,Bt.b,Bt.b,[]),i["\u0275mpd"](1073742336,Ut.a,Ut.a,[]),i["\u0275mpd"](1073742336,Qt.b,Qt.b,[]),i["\u0275mpd"](1073742336,Yt.a,Yt.a,[]),i["\u0275mpd"](1073742336,Gt.a,Gt.a,[]),i["\u0275mpd"](1073742336,Jt.a,Jt.a,[]),i["\u0275mpd"](1073742336,Zt.c,Zt.c,[]),i["\u0275mpd"](1073742336,zt.d,zt.d,[]),i["\u0275mpd"](1073742336,Kt.c,Kt.c,[]),i["\u0275mpd"](1073742336,Xt.c,Xt.c,[]),i["\u0275mpd"](1073742336,Wt.b,Wt.b,[]),i["\u0275mpd"](1073742336,$t.a,$t.a,[]),i["\u0275mpd"](1073742336,te.a,te.a,[]),i["\u0275mpd"](1073742336,ee.b,ee.b,[]),i["\u0275mpd"](1073742336,ae.a,ae.a,[]),i["\u0275mpd"](1073742336,ie.a,ie.a,[]),i["\u0275mpd"](1073742336,re.a,re.a,[]),i["\u0275mpd"](1073742336,ne.a,ne.a,[]),i["\u0275mpd"](1073742336,oe.b,oe.b,[]),i["\u0275mpd"](1073742336,se.b,se.b,[]),i["\u0275mpd"](1073742336,le.b,le.b,[]),i["\u0275mpd"](1073742336,pe.b,pe.b,[]),i["\u0275mpd"](1073742336,me.a,me.a,[]),i["\u0275mpd"](1073742336,de.a,de.a,[]),i["\u0275mpd"](1073742336,ue.a,ue.a,[]),i["\u0275mpd"](1073742336,ce.b,ce.b,[]),i["\u0275mpd"](1073742336,he.b,he.b,[]),i["\u0275mpd"](1073742336,fe.b,fe.b,[]),i["\u0275mpd"](1073742336,ge.e,ge.e,[[2,ge.b],[2,be.f]]),i["\u0275mpd"](1073742336,D.k,D.k,[]),i["\u0275mpd"](1073742336,ge.g,ge.g,[]),i["\u0275mpd"](1073742336,ve.c,ve.c,[]),i["\u0275mpd"](1073742336,Se.a,Se.a,[]),i["\u0275mpd"](1073742336,ye.a,ye.a,[]),i["\u0275mpd"](1073742336,Fe.a,Fe.a,[]),i["\u0275mpd"](1073742336,De.a,De.a,[]),i["\u0275mpd"](1073742336,Ie.a,Ie.a,[]),i["\u0275mpd"](1073742336,xe.a,xe.a,[]),i["\u0275mpd"](1073742336,Ee.a,Ee.a,[]),i["\u0275mpd"](1073742336,r,r,[]),i["\u0275mpd"](1024,y.j,function(){return[[{path:"",component:L}],[{path:"",component:s.a}],[{path:"",component:S.a},{path:":source/filters",component:S.a}],[{path:"",component:s.a}]]},[]),i["\u0275mpd"](256,lt.b,lt.n,[])])})},"nw/W":function(t,e,a){"use strict";a.d(e,"a",function(){return o}),a.d(e,"b",function(){return s});var i=a("8Y7J"),r=a("O9pe"),n=function(){function t(){this.focusable=!1}return t.decorators=[{type:i.Component,args:[{selector:"ibm-icon-chevron-up16",template:'\n    <svg\n      ibmIconChevronUp16\n      [ariaLabel]="ariaLabel"\n      [ariaLabelledby]="ariaLabelledby"\n      [ariaHidden]="ariaHidden"\n      [title]="title"\n      [isFocusable]="focusable"\n      [attr.class]="innerClass">\n    </svg>\n  '}]}],t.propDecorators={ariaLabel:[{type:i.Input}],ariaLabelledby:[{type:i.Input}],ariaHidden:[{type:i.Input}],title:[{type:i.Input}],focusable:[{type:i.Input}],innerClass:[{type:i.Input}]},t}(),o=function(){function t(t){this.elementRef=t,this.isFocusable=!1}return t.prototype.ngAfterViewInit=function(){var e=this.elementRef.nativeElement;e.setAttribute("xmlns","http://www.w3.org/2000/svg");for(var a=(new DOMParser).parseFromString('<svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 5l5 5-.7.7L8 6.4l-4.3 4.3L3 10z"></path></svg>',"image/svg+xml").documentElement.firstChild;a;)e.appendChild(e.ownerDocument.importNode(a,!0)),a=a.nextSibling;for(var i=Object(r.a)({width:16,height:16,viewBox:"0 0 16 16",title:this.title,"aria-label":this.ariaLabel,"aria-labelledby":this.ariaLabelledby,"aria-hidden":this.ariaHidden,focusable:this.isFocusable.toString()}),n=Object.keys(i),o=0;o<n.length;o++){var s=n[o],l=i[s];"title"!==s&&l&&e.setAttribute(s,l)}if(i.title){var p=document.createElement("title");p.textContent=i.title,p.setAttribute("id","chevron-up16-"+ ++t.titleIdCounter),e.appendChild(p),e.setAttribute("aria-labelledby","chevron-up16-"+t.titleIdCounter)}},t.titleIdCounter=0,t.decorators=[{type:i.Directive,args:[{selector:"[ibmIconChevronUp16]"}]}],t.ctorParameters=function(){return[{type:i.ElementRef}]},t.propDecorators={ariaLabel:[{type:i.Input}],ariaLabelledby:[{type:i.Input}],ariaHidden:[{type:i.Input}],title:[{type:i.Input}],isFocusable:[{type:i.Input}]},t}(),s=function(){function t(){}return t.decorators=[{type:i.NgModule,args:[{declarations:[n,o],exports:[n,o]}]}],t}()}}]);