function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"+D1H":function(t,e,i){"use strict";i.d(e,"a",function(){return r});var r=function(){function t(t){var e=this;this.router=t,this.selectedTabIndex=0,this._tabs=[],t.events.subscribe(function(t){t.url&&(e.myTabSelection?e.myTabSelection=!1:e.checkAndSet())})}var e=t.prototype;return e.ngOnInit=function(){this.checkAndSet()},e.checkAndSet=function(){this.selectedTabIndex=this.getSelectedIndex(this.tabs,this.router)},e.getSelectedIndex=function(t,e){return t.findIndex(function(t){return t.url===e.url||t.subTabs&&t.subTabs.indexOf(e.url)>-1})},e.show=function(){this.isDropVisible=!this.isDropVisible},e.onclick=function(t){t.currentTarget.focus()},e.hide=function(){this.isDropVisible=!1},e.onTabSelection=function(t,e){t.stopPropagation(),this.router.navigateByUrl(this.tabs[e].url),this.selectedTabIndex=e,this.myTabSelection=!0},e.ngOnChanges=function(t){t.tabs&&t.tabs.currentValue&&this.checkAndSet()},_createClass(t,[{key:"tabs",get:function(){return this._tabs},set:function(t){this._tabs=t,this.checkAndSet()}}]),t}()},"935Q":function(t,e,i){"use strict";i.r(e);var r=i("8Y7J"),a=function(){},n=i("pMnS"),s=i("N31F"),o=i("+D1H"),l=i("iInd"),p=function(){function t(){this.tabs=[{title:"Acceptance Pending",url:"/approval"},{title:"Approval Pending",url:"/approval/cp"}]}return t.prototype.ngOnInit=function(){},t}(),c=r["\u0275crt"]({encapsulation:0,styles:[[".approval-container[_ngcontent-%COMP%]{padding-left:32px;padding-right:32px;padding-top:3rem;background-color:#fff}"]],data:{}});function u(t){return r["\u0275vid"](0,[(t()(),r["\u0275eld"](0,0,null,null,4,"div",[["class","approval-container"]],null,null,null,null,null)),(t()(),r["\u0275eld"](1,0,null,null,3,"app-e4-tabs",[],null,null,null,s.b,s.a)),r["\u0275did"](2,638976,null,0,o.a,[l.o],{tabs:[0,"tabs"]},null),(t()(),r["\u0275eld"](3,16777216,null,0,1,"router-outlet",[],null,null,null,null,null)),r["\u0275did"](4,212992,null,0,l.t,[l.b,r.ViewContainerRef,r.ComponentFactoryResolver,[8,null],r.ChangeDetectorRef],null,null)],function(t,e){t(e,2,0,e.component.tabs),t(e,4,0)},null)}var d=r["\u0275ccf"]("app-approval",p,function(t){return r["\u0275vid"](0,[(t()(),r["\u0275eld"](0,0,null,null,1,"app-approval",[],null,null,null,u,c)),r["\u0275did"](1,114688,null,0,p,[],null,null)],function(t,e){t(e,1,0)},null)},{},{},[]),m=i("NpSD"),f=i("cbbC"),h=i("Gv0t"),S=i("cN2v"),b=i("URSK"),g=i("SVse"),E=i("mEpm"),_=i("ZHEK"),I=i("RJDq"),v=i("U6oK"),y=i("uvqg"),A=i("f8KH"),P=i("PJ54"),R=i("s7LF"),C=i("+Kk7"),D=i("pQSL"),T=i("MqE1"),N=i("Z3BZ"),O=i("wE4S"),L=i("H6Gp"),F=i("Myuu"),w=i("fMlX"),M=function(){},x=i("Vd/R"),H=i("h6sn"),U=i("niTG"),q=i("ctAq"),G=i("+IpF"),k=i("jQIA"),B=i("cbyg"),V=i("7di+");i.d(e,"ApprovalModuleNgFactory",function(){return K});var K=r["\u0275cmf"](a,[],function(t){return r["\u0275mod"]([r["\u0275mpd"](512,r.ComponentFactoryResolver,r["\u0275CodegenComponentFactoryResolver"],[[8,[n.a,d,m.a,f.a,h.a,S.a,b.a]],[3,r.ComponentFactoryResolver],r.NgModuleRef]),r["\u0275mpd"](4608,g.NgLocalization,g.NgLocaleLocalization,[r.LOCALE_ID,[2,g["\u0275angular_packages_common_common_a"]]]),r["\u0275mpd"](5120,E.a,_.a,[[3,E.a]]),r["\u0275mpd"](5120,I.a,v.a,[[3,I.a]]),r["\u0275mpd"](5120,y.a,A.a,[[3,y.a]]),r["\u0275mpd"](4608,P.a,P.a,[r.ComponentFactoryResolver,I.a]),r["\u0275mpd"](4608,R.C,R.C,[]),r["\u0275mpd"](4608,R.f,R.f,[]),r["\u0275mpd"](4608,C.a,C.a,[D.a]),r["\u0275mpd"](4608,T.a,T.a,[D.a]),r["\u0275mpd"](4608,N.a,N.a,[D.a]),r["\u0275mpd"](1073742336,g.CommonModule,g.CommonModule,[]),r["\u0275mpd"](1073742336,l.s,l.s,[[2,l.x],[2,l.o]]),r["\u0275mpd"](1073742336,O.b,O.b,[]),r["\u0275mpd"](1073742336,L.b,L.b,[]),r["\u0275mpd"](1073742336,F.b,F.b,[]),r["\u0275mpd"](1073742336,w.b,w.b,[]),r["\u0275mpd"](1073742336,M,M,[]),r["\u0275mpd"](1073742336,x.a,x.a,[]),r["\u0275mpd"](1073742336,H.a,H.a,[]),r["\u0275mpd"](1073742336,_.c,_.c,[]),r["\u0275mpd"](1073742336,v.b,v.b,[]),r["\u0275mpd"](1073742336,A.b,A.b,[]),r["\u0275mpd"](1073742336,U.c,U.c,[]),r["\u0275mpd"](1073742336,q.b,q.b,[]),r["\u0275mpd"](1073742336,R.B,R.B,[]),r["\u0275mpd"](1073742336,R.l,R.l,[]),r["\u0275mpd"](1073742336,G.c,G.c,[]),r["\u0275mpd"](1073742336,k.a,k.a,[]),r["\u0275mpd"](1073742336,R.x,R.x,[]),r["\u0275mpd"](1073742336,B.a,B.a,[]),r["\u0275mpd"](1073742336,V.a,V.a,[]),r["\u0275mpd"](1073742336,a,a,[]),r["\u0275mpd"](1024,l.m,function(){return[[{path:"",component:p,children:[{loadChildren:"app/approval/accept-self/accept-self.module#AcceptSelfModule",path:""},{loadChildren:"app/approval/approve-child/approve-child.module#ApproveChildModule",path:"cp"}]}]]},[])])})},H6Gp:function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"b",function(){return o});var r=i("8Y7J"),a=i("O9pe"),n=function(){function t(){this.focusable=!1}return t.decorators=[{type:r.Component,args:[{selector:"ibm-icon-arrow-down32",template:'\n    <svg\n      ibmIconArrowDown32\n      [ariaLabel]="ariaLabel"\n      [ariaLabelledby]="ariaLabelledby"\n      [ariaHidden]="ariaHidden"\n      [title]="title"\n      [isFocusable]="focusable"\n      [attr.class]="innerClass">\n    </svg>\n  '}]}],t.propDecorators={ariaLabel:[{type:r.Input}],ariaLabelledby:[{type:r.Input}],ariaHidden:[{type:r.Input}],title:[{type:r.Input}],focusable:[{type:r.Input}],innerClass:[{type:r.Input}]},t}(),s=function(){function t(t){this.elementRef=t,this.isFocusable=!1}return t.prototype.ngAfterViewInit=function(){var e=this.elementRef.nativeElement;e.setAttribute("xmlns","http://www.w3.org/2000/svg");for(var i=(new DOMParser).parseFromString('<svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path d="M24.59 16.59L17 24.17V2h-2v22.17l-7.59-7.58L6 18l10 10 10-10-1.41-1.41z"></path></svg>',"image/svg+xml").documentElement.firstChild;i;)e.appendChild(e.ownerDocument.importNode(i,!0)),i=i.nextSibling;for(var r=Object(a.a)({width:32,height:32,viewBox:"0 0 32 32",title:this.title,"aria-label":this.ariaLabel,"aria-labelledby":this.ariaLabelledby,"aria-hidden":this.ariaHidden,focusable:this.isFocusable.toString()}),n=Object.keys(r),s=0;s<n.length;s++){var o=n[s],l=r[o];"title"!==o&&l&&e.setAttribute(o,l)}if(r.title){var p=document.createElement("title");p.textContent=r.title,p.setAttribute("id","arrow-down32-"+ ++t.titleIdCounter),e.appendChild(p),e.setAttribute("aria-labelledby","arrow-down32-"+t.titleIdCounter)}},t.titleIdCounter=0,t.decorators=[{type:r.Directive,args:[{selector:"[ibmIconArrowDown32]"}]}],t.ctorParameters=function(){return[{type:r.ElementRef}]},t.propDecorators={ariaLabel:[{type:r.Input}],ariaLabelledby:[{type:r.Input}],ariaHidden:[{type:r.Input}],title:[{type:r.Input}],isFocusable:[{type:r.Input}]},t}(),o=function(){function t(){}return t.decorators=[{type:r.NgModule,args:[{declarations:[n,s],exports:[n,s]}]}],t}()},HTWL:function(t,e,i){"use strict";i.d(e,"a",function(){return r});var r={KPI_UOM_FORM_FIELD_UOM_NOT_MATCHING:"The Unit of Measurement for this KPI/Objective does not match the Unit of Measurement of the chosen form field.",KPI_UOM_PARENT_UOM_NOT_MATCHING:"The Unit of Measurement for this KPI does not match the Unit of Measurement of the chosen MP/Parent",KPI_ACCEPTANCE_ERROR:"KPI acceptance failed",KPI_ACCEPTED_SUCCESS:"KPI accepted successfully",KPI_ACCEPTANCE_ERROR_NOT_ENOUGH_WEIGHTAGE:"KPI can not be accepted because Primary owner does not has enough weightage",KPI_APPROVAL_SUCCESS:"KPI approved successfully",KPI_APPROVAL_ERROR:"KPI approval failed",KPI_APPROVAL_ERROR_NOT_ENOUGH_WEIGHTAGE:"KPI can not be approved because Primary owner does not has enough weightage",CURRENT_FY_KPI_RECOMPUTATION_SUCCESS:"Data for all KPIs belonging to current financial year will be recomputed. This operation will take a while to complete",CURRENT_FY_KPI_RECOMPUTATION_ERROR:"Error while recomputing data for current financial year KPI",FORM_RECORD_FETCH_ERROR:"Error fetching form information",FORM_APPROVAL_REQUIRED:"Approver is required",FORM_SUBMITTED_SUCCESS:"Form submitted successfully",FORM_EDITED_SUCCESS:"Form edited successfully",EXPORT_FORM_DELETED_SUCCESS:"Export form deleted successfully",EXPORT_CONFIG_SAVED_SUCCESS:"Configuration saved successfully",EXPORT_CONFIG_COLUMN_SELECTION_WARNING:"Please select at least one column from all the selected forms",FORM_APPROVAL_SUCCESS:"Form approved successfully",FORM_DATA_SAVED_SUCCESS:"Form data saved successfully",FORM_DATA_UPDATED_SUCCESS:"Form data updated successfully",FORM_DATA_REQUEST_INVALID:"Form data request is not valid",FORM_SUBMISSION_LINK_WARNING:"Please select submission to link",FORM_DATA_DELETED_SUCESS:"Form data deleted successfully",FORM_RECOMPUTATION_REQUEST_SENT_SUCCESS:"Data recomputation request has been successfully sent for this form. It will take some time to re-compute data for all KPIs associated with this form.",FORM_RECOMPUTATION_REQUEST_SENT_ERROR:"Error while sending data recomputation request for this form",MIN_ONE_REPORT_NEEDED:"At least one report is needed",MAX_THREE_REPORTS_ALLOWED:"More than 3 report not allowed",SCATTER_PLOT_2_KPI_SELECTION_WARNING:"Select exact 2 KPIs to see data in scatter plot",SELECT_KPIS_WITH_SAME_UOM_WARNING:"Select KPIs with same unit of measurement",GROUP_CREATED_SUCCESS:"Group created successfully",GROUP_UPDATED_SUCCESS:"Group updated successfully",METRIC_APPROVAL_SUCCESS:"Metric approved successfully",EMPTY_MESSAGE_WARNING:"Please write something to discuss about",DISCUSSION_RAISED_SUCCESS:"Discussion raised successfully",PLEASE_SELECT_DATE:"Please select date",NO_DATA_SAMPLE_SELECTED:"No data sample selected",MISSING_ABNORMALITY_DESCRIPTION_WARNING:"Please enter abnormality description",MISSING_ABNORMALITY_TYPE_WARNING:"Please select abnormality type",MISSING_DEPARTMENT_WARNING:"Please select department",MISSING_LOCATION_WARNING:"Please enter location",MISSING_ABNORMALITY_DATE_WARNING:"Please select date observed on",MISSING_ABNORMALITY_REPORTEE_WARNING:"Please select reported user",MISSING_ANALYSIS_DESCRIPTION_WARNING:"Please enter analysis description",MISSING_ABNORMALITY_CAUSE_WARNING:"Please select abnormality cause",MISSING_ACTION_DESCRIPTION_WARNING:"Please enter description for containment action",MISSING_ACTION_ASSIGNEE_WARNING:"Please select assigned to for action",MISSING_ACTION_DATE_WARNING:"Please select action date for containment action",MISSING_ACTION_PROGRESS_WARNING:"Please select progress for containment action",MIN_ONE_ACTION_REQUIRED_WARNING:"Please add atleast one action",ABNORMALITY_ADDED_SUCCESS:"Abnormality added successfully",ABNORMALITY_UPDATED_SUCCESS:"Abnormality updated successfully",SAP_CONFIG_APPROVAL_SUCCESS:"Configuration approved successfully",SAP_CONFIG_RECORD_NOT_FOUND_ERROR:"SAP Configuration record was not found",SAP_DATA_SYNC_MESSAGE:"Request submitted. It will take some time to bring the data.",SAP_MISSING_SERVICE_QUERY_NAME_WARNING:"Please input service query parameter name",SAP_MISSING_SERVICE_QUERY_VALUE_WARNING:"Please input service query parameter value",SAP_MISSING_SERVICE_QUERY_DATA_TYPE_WARNING:"Please select service query parameter data type",SAP_SERVICE_RESPONSE_MAP_MISSING_LABEL_WARNING:"Please enter label",SAP_SERVICE_RESPONSE_MAP_MISSING_DATA_TYPE_WARNING:"Please select data type",SAP_SERVICE_RESPONSE_MAP_MISSING_KEY_WARNING:"Please enter SAP key name",SAP_SERVICE_RESPONSE_MAP_UNIT_WARNING:"Please select unit of measurement",SAP_SERVICE_RESPONSE_MORE_THAN_ONE_SAMPLE_DATE_TIME:"Can not have more than one data sample date & time",CHART_COLOUR_ADDED_SUCCESS:"Chart colours added",CHART_COLOUR_UPDATED_SUCCESS:"Chart colours updated",CHART_COLOUR_DELETED_SUCCESS:"Colour deleted successfully",HOLIDAY_ADDED_SUCCESS:"Holiday added",HOLIDAY_UPDATED_SUCCESS:"Holiday updated",HOLIDAY_DELETED_SUCCESS:"Holiday deleted",MISSING_HOLIDAY_DETAILS_WARNING:"Please fill holiday details",UNEXPECTED_ERROR:"Unexpected error occured",PLEASE_TRY_AGAIN:"Something went wrong. Please try again later",RDBMS_SERVICE_RESPONSE_MAP_MISSING_COLUMN_NAME_WARNING:"Please enter column name",APPROVAL_EXEMPTION_RECORD_ADD_SUCCESS:"Approval exemption record added successfully",APPROVAL_EXEMPTION_RECORD_UPDATE_SUCCESS:"Approval exemption record updated successfully",APPROVAL_EXEMPTION_RECORD_DELETE_SUCCESS:"Approval exemption record deleted successfully",APPROVAL_EXEMPTION_RECORD_ADD_FAILURE:"Error while adding a new approval exemption record",APPROVAL_EXEMPTION_RECORD_UPDATE_FAILURE:"Error while updating the approval exemption record",APPROVAL_EXEMPTION_RECORD_DELETE_FAILURE:"Error while deleting the approval exemption record",FORM_FILTERS_FETCH_ERROR:"Error fetching filters for the selected form"}},MqE1:function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i("pQSL");var r=i("IheW"),a=function(){function t(t){this.tqmiHttpService=t,this.apiPath={forms:"api/forms",getFormDetails:"api/form",approveForm:"api/approve-form/",raiseDiscussion:"api/need-discussion",approverFormList:"api/get-pending-approval-forms-list",enableDisableForm:"/api/enable-disable-form",raiseEnableDisableRequest:"api/form-enable-disable-request",enableDisable:"api/enable-disable-form",getEmployeeForms:"api/form-listing-with-dependent-of",formsDataListingIntersection:"api/form-data-listing-with-intersection",getFormDataEntry:"api/get-form-data-by-id",formsDataListingDownloadIntersection:"api/download-form-data-listing-with-intersection",performRecomputations:"api/perform-recomputation",getLatestFormData:"api/get-latest-form-data",addExport:"api/form-list-config",updateExportConfig:"api/form-list-config",getForms:"api/form-list-by-individuals-departments",getExportTableData:"api/form-list-given-config",exportToExcel:"api/download-form-list-given-config",downloadFormTemplate:"api/download-form-template",masterformdata:"api/master-data-map",masterdataforform:"api/get-master-data-for-form",masterdataDuplicacyCheck:"api/find-existing-master-data-by-name",getDropdownDataforColumns:"api/get-form-field-unique-values",formFilters:"api/form-filter",applyFilter:"api/apply-filter"}}var e=t.prototype;return e.getForms=function(t,e,i,a,n){var s=(new r.h).set("formDataSource","INTERNAL").set("sortBy",n||"createdDate").set("sort",a||"desc").set("startFrom",e.toString()).set("limit",i.toString());return t&&t.trim().length&&(s=s.set("searchQuery",t)),this.tqmiHttpService.get(this.apiPath.forms,{apiType:"forms",params:s})},e.getFormListing=function(t,e,i,a){var n=(new r.h).set("sortBy","createdDate").set("sort","desc").set("startFrom",e.toString()).set("isApproved",a.toString()).set("limit",i.toString());return t&&t.trim().length&&(n=n.set("searchQuery",t)),this.tqmiHttpService.get(this.apiPath.forms,{apiType:"forms",params:n})},e.getApproverFormListing=function(t,e,i){var a=(new r.h).set("sortBy","createdDate").set("sort","desc").set("startFrom",e.toString()).set("limit",i.toString());return t&&t.trim().length&&(a=a.set("searchQuery",t)),this.tqmiHttpService.get(this.apiPath.approverFormList,{apiType:"forms",params:a})},e.getFormDetail=function(t){return this.tqmiHttpService.get(this.apiPath.getFormDetails+"/"+t,{apiType:"forms"})},e.addForms=function(t){return this.tqmiHttpService.post(this.apiPath.forms,t,{apiType:"forms"})},e.updateForms=function(t){return this.tqmiHttpService.patch(this.apiPath.forms,t,{apiType:"forms"})},e.approveForm=function(t){return this.tqmiHttpService.post(this.apiPath.approveForm+t,{},{apiType:"forms"})},e.raiseDiscussionForm=function(t){return this.tqmiHttpService.post(this.apiPath.raiseDiscussion,t,{apiType:"forms"})},e.raiseEnableDisableRequest=function(t,e){return this.tqmiHttpService.post(this.apiPath.raiseEnableDisableRequest+"/"+t,{action:e?"ENABLE":"DISABLE"},{apiType:"forms"})},e.enableDisable=function(t,e){return this.tqmiHttpService.post(this.apiPath.enableDisable+"/"+t,{action:e?"ENABLE":"DISABLE"},{apiType:"forms"})},e.getEmployeeForm=function(t,e){var i=(new r.h).set("formId",e);return this.tqmiHttpService.get(this.apiPath.getEmployeeForms+"/"+t,{apiType:"forms",params:i})},e.getEmployeeFormDetails=function(t,e,i,a,n,s,o,l){var p=(new r.h).set("limit",i.toString()).set("formId1",a).set("skip",s);return o&&(p=p.set("sortOnKey",o).set("sort",l)),""!=n&&(p=p.set("formId2",n)),t&&t.trim().length&&(p=p.set("searchQuery",t)),this.tqmiHttpService.get(this.apiPath.formsDataListingIntersection,{apiType:"forms",params:p})},e.downloadFormData=function(t,e,i,a,n,s){var o=(new r.h).set("formId1",i);return o=o.set("employeeId",s),""!=a&&(o=o.set("formId2",a)),e&&(o=o.set("limit",e.toString())),n&&(o=o.set("skip",n)),t&&t.trim().length&&(o=o.set("searchQuery",t)),this.tqmiHttpService.get(this.apiPath.formsDataListingDownloadIntersection,{apiType:"forms",params:o})},e.performRecomputations=function(t){return this.tqmiHttpService.get(this.apiPath.performRecomputations+"/"+t,{apiType:"forms"})},e.getFormDataById=function(t){return this.tqmiHttpService.get(this.apiPath.getFormDataEntry+"/"+t,{apiType:"forms"})},e.getLatestFormData=function(t,e){return this.tqmiHttpService.get(this.apiPath.getLatestFormData+"?formId="+t+"&fieldId="+e,{apiType:"forms"})},e.getFormsExportTabs=function(){return this.tqmiHttpService.get(this.apiPath.addExport,{apiType:"forms"})},e.addFormsExport=function(t){return this.tqmiHttpService.post(this.apiPath.addExport,t,{apiType:"forms"})},e.getExportFormDetails=function(t,e,i,a){var n=new r.h;return e&&(n=n.set("employeeIdList",e)),a.length&&(n=n.set("groupIdList",a)),i.length&&(n=n.set("departmentIdList",i)),t&&t.trim().length&&(n=n.set("searchparam",t)),this.tqmiHttpService.get(this.apiPath.getForms,{apiType:"forms",params:n})},e.updateExportForms=function(t){return this.tqmiHttpService.patch(this.apiPath.addExport,t,{apiType:"forms"})},e.getFormDetailExport=function(t){return this.tqmiHttpService.get(this.apiPath.addExport+"/"+t,{apiType:"forms"})},e.getFormExportTableData=function(t,e,i,a){var n=(new r.h).set("limit",i.toString()).set("skip",a);return t&&(n=n.set("searchparam",t)),this.tqmiHttpService.get(this.apiPath.getExportTableData+"/"+e,{apiType:"forms",params:n})},e.getFormExportUrl=function(t){return this.tqmiHttpService.get(this.apiPath.exportToExcel+"/"+t,{apiType:"forms"})},e.getSAPForms=function(t,e,i,a,n){var s=(new r.h).set("formDataSource","SAP").set("sortBy",n||"createdDate").set("sort",a||"desc").set("startFrom",e.toString()).set("limit",i.toString());return t&&t.trim().length&&(s=s.set("searchQuery",t)),this.tqmiHttpService.get(this.apiPath.forms,{apiType:"forms",params:s})},e.getRDBMSForms=function(t,e,i){var a=(new r.h).set("formDataSource","EXTERNAL_DATABASE").set("sortBy","createdDate").set("sort","desc").set("startFrom",e.toString()).set("limit",i.toString());return t&&t.trim().length&&(a=a.set("searchQuery",t)),this.tqmiHttpService.get(this.apiPath.forms,{apiType:"forms",params:a})},e.getAllForms=function(t,e,i){var a=(new r.h).set("sortBy","createdDate").set("sort","desc").set("startFrom",e.toString()).set("limit",i.toString());return t&&t.trim().length&&(a=a.set("searchQuery",t)),this.tqmiHttpService.get(this.apiPath.forms,{apiType:"forms",params:a})},e.deleteExportTab=function(t){return this.tqmiHttpService.delete(this.apiPath.updateExportConfig+"/"+t,{apiType:"forms"})},e.downloadFormTemplate=function(t){return this.tqmiHttpService.get(this.apiPath.downloadFormTemplate+"/"+t,{apiType:"forms"})},e.getFormMasterData=function(t,e,i){var a=(new r.h).set("limit",e.toString()).set("formId1",t).set("skip",i);return this.tqmiHttpService.get(this.apiPath.formsDataListingIntersection,{apiType:"forms",params:a})},e.setFormMasterData=function(t){return this.tqmiHttpService.post(this.apiPath.masterformdata,t,{apiType:"forms"})},e.getMasterDataSpecified=function(t){return this.tqmiHttpService.get(this.apiPath.masterdataforform+"/"+t,{apiType:"forms"})},e.deleteMasterData=function(t){return this.tqmiHttpService.delete(this.apiPath.masterformdata+"/"+t,{apiType:"forms"})},e.editMasterData=function(t){return this.tqmiHttpService.post(this.apiPath.masterdataDuplicacyCheck,t,{apiType:"forms"})},e.updateMasterDataSpecified=function(t,e){return this.tqmiHttpService.patch(this.apiPath.masterformdata+"/"+e,t,{apiType:"forms"})},e.getFormDropdownValues=function(t,e,i){var a=(new r.h).set("formId",t).set("fieldId",e).set("fieldType",i);return this.tqmiHttpService.get(this.apiPath.getDropdownDataforColumns,{apiType:"forms",params:a})},e.getFormFilterRecord=function(t){return this.tqmiHttpService.get(this.apiPath.formFilters+"/"+t,{apiType:"forms"})},e.saveFormFilters=function(t,e){return this.tqmiHttpService.post(this.apiPath.formFilters,t,{apiType:"forms"})},e.updateFormFilters=function(t,e){return this.tqmiHttpService.patch(this.apiPath.formFilters+"/"+e,t,{apiType:"forms"})},e.getFormFilterList=function(t,e,i){var a=new r.h;return t&&(a=a.set("formId",t)),e&&""!=e&&(a=a.set("searchQuery",e)),i&&(a=a.set("formDataSource",(i="external"===i?"sap":i).toUpperCase())),this.tqmiHttpService.get(this.apiPath.formFilters,{apiType:"forms",params:a})},e.deleteFormFilter=function(t){return this.tqmiHttpService.delete(this.apiPath.formFilters+"/"+t,{apiType:"forms"})},e.getFilteredFormData=function(t,e,i,a){var n=new r.h;return a>=0&&i>=0&&(n=n.set("limit",a.toString()).set("skip",i.toString())),this.tqmiHttpService.post(this.apiPath.applyFilter,{formId:t,filter:e},{apiType:"forms",params:n})},e.getFilterDetails=function(t){return this.tqmiHttpService.get(this.apiPath.formFilters+"/"+t,{apiType:"forms"})},t}()},Myuu:function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"b",function(){return o});var r=i("8Y7J"),a=i("O9pe"),n=function(){function t(){this.focusable=!1}return t.decorators=[{type:r.Component,args:[{selector:"ibm-icon-chevron-up32",template:'\n    <svg\n      ibmIconChevronUp32\n      [ariaLabel]="ariaLabel"\n      [ariaLabelledby]="ariaLabelledby"\n      [ariaHidden]="ariaHidden"\n      [title]="title"\n      [isFocusable]="focusable"\n      [attr.class]="innerClass">\n    </svg>\n  '}]}],t.propDecorators={ariaLabel:[{type:r.Input}],ariaLabelledby:[{type:r.Input}],ariaHidden:[{type:r.Input}],title:[{type:r.Input}],focusable:[{type:r.Input}],innerClass:[{type:r.Input}]},t}(),s=function(){function t(t){this.elementRef=t,this.isFocusable=!1}return t.prototype.ngAfterViewInit=function(){var e=this.elementRef.nativeElement;e.setAttribute("xmlns","http://www.w3.org/2000/svg");for(var i=(new DOMParser).parseFromString('<svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 10l10 10-1.4 1.4-8.6-8.6-8.6 8.6L6 20z"></path></svg>',"image/svg+xml").documentElement.firstChild;i;)e.appendChild(e.ownerDocument.importNode(i,!0)),i=i.nextSibling;for(var r=Object(a.a)({width:32,height:32,viewBox:"0 0 32 32",title:this.title,"aria-label":this.ariaLabel,"aria-labelledby":this.ariaLabelledby,"aria-hidden":this.ariaHidden,focusable:this.isFocusable.toString()}),n=Object.keys(r),s=0;s<n.length;s++){var o=n[s],l=r[o];"title"!==o&&l&&e.setAttribute(o,l)}if(r.title){var p=document.createElement("title");p.textContent=r.title,p.setAttribute("id","chevron-up32-"+ ++t.titleIdCounter),e.appendChild(p),e.setAttribute("aria-labelledby","chevron-up32-"+t.titleIdCounter)}},t.titleIdCounter=0,t.decorators=[{type:r.Directive,args:[{selector:"[ibmIconChevronUp32]"}]}],t.ctorParameters=function(){return[{type:r.ElementRef}]},t.propDecorators={ariaLabel:[{type:r.Input}],ariaLabelledby:[{type:r.Input}],ariaHidden:[{type:r.Input}],title:[{type:r.Input}],isFocusable:[{type:r.Input}]},t}(),o=function(){function t(){}return t.decorators=[{type:r.NgModule,args:[{declarations:[n,s],exports:[n,s]}]}],t}()},N31F:function(t,e,i){"use strict";var r=i("8Y7J"),a=i("SVse");i("+D1H"),i("iInd"),i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o});var n=r["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function s(t){return r["\u0275vid"](0,[(t()(),r["\u0275eld"](0,0,null,null,5,"li",[["aria-selected","true"],["class","bx--tabs__nav-item"],["data-target",".tab-1-default"],["role","tab"]],null,[[null,"click"]],function(t,e,i){var r=!0;return"click"===e&&(r=!1!==t.component.onTabSelection(i,t.context.index)&&r),r},null,null)),r["\u0275prd"](512,null,a["\u0275NgClassImpl"],a["\u0275NgClassR2Impl"],[r.IterableDiffers,r.KeyValueDiffers,r.ElementRef,r.Renderer2]),r["\u0275did"](2,278528,null,0,a.NgClass,[a["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),r["\u0275pod"](3,{"bx--tabs__nav-item--selected":0}),(t()(),r["\u0275eld"](4,0,null,null,1,"a",[["aria-controls","tab-panel-1-default"],["class","bx--tabs__nav-link"],["href","javascript:void(0)"],["role","tab"]],null,[[null,"click"]],function(t,e,i){var r=!0;return"click"===e&&(r=!1!==t.component.onTabSelection(i,t.context.index)&&r),r},null,null)),(t()(),r["\u0275ted"](5,null,["",""]))],function(t,e){var i=t(e,3,0,e.component.selectedTabIndex===e.context.index);t(e,2,0,"bx--tabs__nav-item",i)},function(t,e){t(e,5,0,e.context.$implicit.title)})}function o(t){return r["\u0275vid"](0,[(t()(),r["\u0275eld"](0,0,null,null,15,"div",[["class","tab-list-container"]],null,null,null,null,null)),(t()(),r["\u0275eld"](1,0,null,null,11,"div",[["class","bx--tabs"],["data-tabs",""]],null,null,null,null,null)),(t()(),r["\u0275eld"](2,0,null,null,4,"div",[["class","bx--tabs-trigger"],["focusable","true"],["tabindex","0"]],null,[[null,"click"],[null,"focus"],[null,"blur"]],function(t,e,i){var r=!0,a=t.component;return"click"===e&&(r=!1!==a.onclick(i)&&r),"focus"===e&&(r=!1!==a.show()&&r),"blur"===e&&(r=!1!==a.hide()&&r),r},null,null)),(t()(),r["\u0275eld"](3,0,null,null,1,"a",[["class","bx--tabs-trigger-text"],["focusable","true"],["href","javascript:void(0)"],["tabindex","-1"]],null,null,null,null,null)),(t()(),r["\u0275ted"](4,null,["",""])),(t()(),r["\u0275eld"](5,0,null,null,1,":svg:svg",[["aria-hidden","true"],["focusable","true"],["height","6"],["preserveAspectRatio","xMidYMid meet"],["style","will-change: transform;"],["viewBox","0 0 10 6"],["width","10"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(t()(),r["\u0275eld"](6,0,null,null,0,":svg:path",[["d","M5 6L0 1 0.7 0.3 5 4.6 9.3 0.3 10 1z"]],null,null,null,null,null)),(t()(),r["\u0275eld"](7,0,null,null,5,"ul",[["class","bx--tabs__nav"],["role","tablist"]],null,null,null,null,null)),r["\u0275prd"](512,null,a["\u0275NgClassImpl"],a["\u0275NgClassR2Impl"],[r.IterableDiffers,r.KeyValueDiffers,r.ElementRef,r.Renderer2]),r["\u0275did"](9,278528,null,0,a.NgClass,[a["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),r["\u0275pod"](10,{"bx--tabs__nav--hidden":0}),(t()(),r["\u0275and"](16777216,null,null,1,null,s)),r["\u0275did"](12,278528,null,0,a.NgForOf,[r.ViewContainerRef,r.TemplateRef,r.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(t()(),r["\u0275eld"](13,0,null,null,2,"div",[["class","bx--tab-content"]],null,null,null,null,null)),(t()(),r["\u0275eld"](14,0,null,null,1,"div",[["aria-hidden","false"],["aria-labelledby","tab-link-1-default"],["class","tab-1-default"],["id","tab-panel-1-default"],["role","tabpanel"]],null,null,null,null,null)),r["\u0275ncd"](null,0)],function(t,e){var i=e.component,r=t(e,10,0,!i.isDropVisible);t(e,9,0,"bx--tabs__nav",r),t(e,12,0,i.tabs)},function(t,e){var i=e.component;t(e,4,0,null==i.tabs[i.selectedTabIndex]?null:i.tabs[i.selectedTabIndex].title)})}},"Vd/R":function(t,e,i){"use strict";i.d(e,"a",function(){return r});var r=function(){}},Z3BZ:function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i("pQSL");var r=function(){function t(t){this.tqmiHttpService=t,this.apiPath={metric:"api/metric",metricList:"api/metric/list",formsList:"api/forms",metricFieldsList:"api/get-form-metric-enabled-fields",getMetricByMetricId:"api/metric",approve:"api/metric/approve",raiseDiscussion:"api/raiseDiscussion"}}var e=t.prototype;return e.getForms=function(t,e){var i="";return t?i+="?searchQuery="+t+"&sortBy=createdDate&sort=desc&startFrom=0&limit=400":i="?sortBy=createdDate&sort=desc&startFrom=0&limit=400",i+=e&&"ALL"===e?"&isApproved=true":"&isApproved=true&formDataSource="+(e=e||"INTERNAL"),this.tqmiHttpService.get(this.apiPath.formsList+i,{apiType:"forms"})},e.getMetricRecord=function(t){return this.tqmiHttpService.get(this.apiPath.metric+"/"+t,{apiType:"metrics"})},e.getAllMetricsList=function(t){var e="";return e+=t?"?name="+t+"&limit=400&skip=0":"?limit=400&skip=0",e+="&isApproved=true",this.tqmiHttpService.get(this.apiPath.metricList+(e+="&isActive=true"),{apiType:"metrics"})},e.getMetricFieldsForSelectedForm=function(t){return this.tqmiHttpService.get(this.apiPath.metricFieldsList+"/"+t,{apiType:"forms"})},e.saveMetrics=function(t,e){return"ADD"===e?this.tqmiHttpService.post(this.apiPath.metric,t,{apiType:"metrics"}):this.tqmiHttpService.patch(this.apiPath.metric,t,{apiType:"metrics"})},e.getMetricsListForKPI=function(t,e,i,r,a,n,s,o){var l="";return t?(l+="?name="+t,l+="&type="+e):l+="?type="+e,a&&(l+="&isApproved="+a),n&&(l+="&isActive="+n),l+="&limit="+i,l+="&skip="+r,s&&(l+="&sort="+s,l+="&sortOnKey="+o),this.tqmiHttpService.get(this.apiPath.metricList+l,{apiType:"metrics"})},e.getMetricByMetricId=function(t){return this.tqmiHttpService.get(this.apiPath.getMetricByMetricId+"/"+t,{apiType:"metrics"})},e.approveMetric=function(t){return this.tqmiHttpService.post(this.apiPath.approve+"/"+t,{},{apiType:"metrics"})},e.raiseDiscussion=function(t){return this.tqmiHttpService.post(this.apiPath.raiseDiscussion,t,{apiType:"metrics"})},e.getMetricsListInApproval=function(t,e,i,r){var a="";return t?(a+="?name="+t,a+="&isApproved=false"):a+="?isApproved=false",r&&(a+="&supervisedBy="+r),a+="&limit="+i,this.tqmiHttpService.get(this.apiPath.metricList+(a+="&skip="+e),{apiType:"metrics"})},e.getSapForms=function(t){var e="";return t?e+="?searchQuery="+t+"&sortBy=createdDate&sort=desc&startFrom=0&limit=400":e="?sortBy=createdDate&sort=desc&startFrom=0&limit=400",this.tqmiHttpService.get(this.apiPath.formsList+(e+="&isApproved=true&formDataSource=SAP"),{apiType:"forms"})},e.getAllForms=function(t){var e="";return t?e+="?searchQuery="+t+"&sortBy=createdDate&sort=desc&startFrom=0&limit=400":e="?sortBy=createdDate&sort=desc&startFrom=0&limit=400",this.tqmiHttpService.get(this.apiPath.formsList+(e+="&isApproved=true"),{apiType:"forms"})},t}()},fMlX:function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"b",function(){return o});var r=i("8Y7J"),a=i("O9pe"),n=function(){function t(){this.focusable=!1}return t.decorators=[{type:r.Component,args:[{selector:"ibm-icon-chevron-down32",template:'\n    <svg\n      ibmIconChevronDown32\n      [ariaLabel]="ariaLabel"\n      [ariaLabelledby]="ariaLabelledby"\n      [ariaHidden]="ariaHidden"\n      [title]="title"\n      [isFocusable]="focusable"\n      [attr.class]="innerClass">\n    </svg>\n  '}]}],t.propDecorators={ariaLabel:[{type:r.Input}],ariaLabelledby:[{type:r.Input}],ariaHidden:[{type:r.Input}],title:[{type:r.Input}],focusable:[{type:r.Input}],innerClass:[{type:r.Input}]},t}(),s=function(){function t(t){this.elementRef=t,this.isFocusable=!1}return t.prototype.ngAfterViewInit=function(){var e=this.elementRef.nativeElement;e.setAttribute("xmlns","http://www.w3.org/2000/svg");for(var i=(new DOMParser).parseFromString('<svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 22L6 12l1.4-1.4 8.6 8.6 8.6-8.6L26 12z"></path></svg>',"image/svg+xml").documentElement.firstChild;i;)e.appendChild(e.ownerDocument.importNode(i,!0)),i=i.nextSibling;for(var r=Object(a.a)({width:32,height:32,viewBox:"0 0 32 32",title:this.title,"aria-label":this.ariaLabel,"aria-labelledby":this.ariaLabelledby,"aria-hidden":this.ariaHidden,focusable:this.isFocusable.toString()}),n=Object.keys(r),s=0;s<n.length;s++){var o=n[s],l=r[o];"title"!==o&&l&&e.setAttribute(o,l)}if(r.title){var p=document.createElement("title");p.textContent=r.title,p.setAttribute("id","chevron-down32-"+ ++t.titleIdCounter),e.appendChild(p),e.setAttribute("aria-labelledby","chevron-down32-"+t.titleIdCounter)}},t.titleIdCounter=0,t.decorators=[{type:r.Directive,args:[{selector:"[ibmIconChevronDown32]"}]}],t.ctorParameters=function(){return[{type:r.ElementRef}]},t.propDecorators={ariaLabel:[{type:r.Input}],ariaLabelledby:[{type:r.Input}],ariaHidden:[{type:r.Input}],title:[{type:r.Input}],isFocusable:[{type:r.Input}]},t}(),o=function(){function t(){}return t.decorators=[{type:r.NgModule,args:[{declarations:[n,s],exports:[n,s]}]}],t}()},vYI3:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var r=i("ciZX"),a=(i("+Kk7"),i("MqE1"),i("Z3BZ"),i("HTWL")),n=function(t){function e(e,i,r,a,n,s){var o;return(o=t.call(this)||this)._modelService=e,o.toastService=i,o.injector=r,o.kpiService=a,o.formsService=n,o.metricService=s,o.needDiscussionText="",o.id=r.get("id"),o.attrName=r.get("attrName"),o}_inheritsLoose(e,t);var i=e.prototype;return i.ngOnInit=function(){},i.onCancel=function(){this._modelService.destroy()},i.onSubmit=function(){var t=this;if(this.needDiscussionText.trim()){this.isInProgress=!0;var e={};e[this.attrName]=this.id,e.comment=this.needDiscussionText,this.sub=null,"goalId"===this.attrName?this.sub=this.kpiService.raiseDiscussion(e):"formId"===this.attrName?this.sub=this.formsService.raiseDiscussionForm(e):"formId"===this.attrName&&(this.sub=this.metricService.raiseDiscussion(e)),this.sub&&this.sub.subscribe(function(e){t.isInProgress=!1,e.success?(t._modelService.destroy(),t.toastService.success(a.a.DISCUSSION_RAISED_SUCCESS)):t.toastService.error(e.message)},function(e){t.isInProgress=!1,t.toastService.error(a.a.PLEASE_TRY_AGAIN)})}else this.toastService.error(a.a.EMPTY_MESSAGE_WARNING)},i.ngOnDestroy=function(){this.sub&&this.sub.unsubscribe()},e}(r.a)},wE4S:function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"b",function(){return o});var r=i("8Y7J"),a=i("O9pe"),n=function(){function t(){this.focusable=!1}return t.decorators=[{type:r.Component,args:[{selector:"ibm-icon-arrow-up32",template:'\n    <svg\n      ibmIconArrowUp32\n      [ariaLabel]="ariaLabel"\n      [ariaLabelledby]="ariaLabelledby"\n      [ariaHidden]="ariaHidden"\n      [title]="title"\n      [isFocusable]="focusable"\n      [attr.class]="innerClass">\n    </svg>\n  '}]}],t.propDecorators={ariaLabel:[{type:r.Input}],ariaLabelledby:[{type:r.Input}],ariaHidden:[{type:r.Input}],title:[{type:r.Input}],focusable:[{type:r.Input}],innerClass:[{type:r.Input}]},t}(),s=function(){function t(t){this.elementRef=t,this.isFocusable=!1}return t.prototype.ngAfterViewInit=function(){var e=this.elementRef.nativeElement;e.setAttribute("xmlns","http://www.w3.org/2000/svg");for(var i=(new DOMParser).parseFromString('<svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4L6 14l1.41 1.41L15 7.83V30h2V7.83l7.59 7.58L26 14 16 4z"></path></svg>',"image/svg+xml").documentElement.firstChild;i;)e.appendChild(e.ownerDocument.importNode(i,!0)),i=i.nextSibling;for(var r=Object(a.a)({width:32,height:32,viewBox:"0 0 32 32",title:this.title,"aria-label":this.ariaLabel,"aria-labelledby":this.ariaLabelledby,"aria-hidden":this.ariaHidden,focusable:this.isFocusable.toString()}),n=Object.keys(r),s=0;s<n.length;s++){var o=n[s],l=r[o];"title"!==o&&l&&e.setAttribute(o,l)}if(r.title){var p=document.createElement("title");p.textContent=r.title,p.setAttribute("id","arrow-up32-"+ ++t.titleIdCounter),e.appendChild(p),e.setAttribute("aria-labelledby","arrow-up32-"+t.titleIdCounter)}},t.titleIdCounter=0,t.decorators=[{type:r.Directive,args:[{selector:"[ibmIconArrowUp32]"}]}],t.ctorParameters=function(){return[{type:r.ElementRef}]},t.propDecorators={ariaLabel:[{type:r.Input}],ariaLabelledby:[{type:r.Input}],ariaHidden:[{type:r.Input}],title:[{type:r.Input}],isFocusable:[{type:r.Input}]},t}(),o=function(){function t(){}return t.decorators=[{type:r.NgModule,args:[{declarations:[n,s],exports:[n,s]}]}],t}()}}]);