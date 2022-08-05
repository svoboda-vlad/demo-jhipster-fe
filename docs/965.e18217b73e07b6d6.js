"use strict";(self.webpackChunkdemo_jhipster_fe=self.webpackChunkdemo_jhipster_fe||[]).push([[965],{9586:(y,U,i)=>{i.d(U,{_l:()=>l,aW:()=>r,cy:()=>d,jo:()=>_,s1:()=>f});const r="asc",_="desc",l="sort",f="deleted",d="defaultSort"},5929:(y,U,i)=>{i.d(U,{b:()=>_});var r=i(529);const _=l=>{let f=new r.LE;return l&&(Object.keys(l).forEach(d=>{"sort"!==d&&l[d]&&""!==l[d]&&(f=f.set(d,l[d]))}),l.sort&&l.sort.forEach(d=>{f=f.append("sort",d)})),f}},6037:(y,U,i)=>{function r(l){return null!=l}i.d(U,{E:()=>r,z:()=>_});const _=l=>isNaN(l)?0:l},3965:(y,U,i)=>{i.r(U),i.d(U,{DepartmentModule:()=>dt});var r=i(4985),_=i(8996),l=i(8059),f=i(9300),d=i(3900),A=i(9841),v=i(8505),m=i(9586),t=i(4650),a=i(8256),g=i(3414),s=i(4006),h=i(6895),Z=i(3868),T=i(1995),p=i(486);const I=function(n){return{id:n}};function E(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"form",1),t.NdJ("ngSubmit",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.confirmDelete(c.department.id))}),t._uU(1,"\n  "),t.TgZ(2,"div",2),t._uU(3,"\n    "),t.TgZ(4,"h4",3),t._uU(5,"Confirm delete operation"),t.qZA(),t._uU(6,"\n\n    "),t.TgZ(7,"button",4),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.cancel())}),t._uU(8,"\xd7"),t.qZA(),t._uU(9,"\n  "),t.qZA(),t._uU(10,"\n\n  "),t.TgZ(11,"div",5),t._uU(12,"\n    "),t._UZ(13,"jhi-alert-error"),t._uU(14,"\n    "),t.TgZ(15,"p",6),t._uU(16),t.qZA(),t._uU(17,"\n  "),t.qZA(),t._uU(18,"\n\n  "),t.TgZ(19,"div",7),t._uU(20,"\n    "),t.TgZ(21,"button",8),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.cancel())}),t._uU(22,"\n      "),t._UZ(23,"fa-icon",9),t._uU(24,"\xa0"),t.TgZ(25,"span",10),t._uU(26,"Cancel"),t.qZA(),t._uU(27,"\n    "),t.qZA(),t._uU(28,"\n\n    "),t.TgZ(29,"button",11),t._uU(30,"\n      "),t._UZ(31,"fa-icon",12),t._uU(32,"\xa0"),t.TgZ(33,"span",13),t._uU(34,"Delete"),t.qZA(),t._uU(35,"\n    "),t.qZA(),t._uU(36,"\n  "),t.qZA(),t._uU(37,"\n"),t.qZA()}if(2&n){const e=t.oxw();t.xp6(15),t.Q6J("translateValues",t.VKq(2,I,e.department.id)),t.xp6(1),t.hij("\n      Are you sure you want to delete Department ",e.department.id,"?\n    ")}}let S=(()=>{class n{constructor(e,o){this.departmentService=e,this.activeModal=o}cancel(){this.activeModal.dismiss()}confirmDelete(e){this.departmentService.delete(e).subscribe(()=>{this.activeModal.close(m.s1)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.n),t.Y36(g.Kz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:2,vars:1,consts:[["name","deleteForm",3,"ngSubmit",4,"ngIf"],["name","deleteForm",3,"ngSubmit"],[1,"modal-header"],["data-cy","departmentDeleteDialogHeading","jhiTranslate","entity.delete.title",1,"modal-title"],["type","button","data-dismiss","modal","aria-hidden","true",1,"btn-close",3,"click"],[1,"modal-body"],["id","jhi-delete-department-heading","jhiTranslate","demoJhipsterFeApp.department.delete.question",3,"translateValues"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["id","jhi-confirm-delete-department","data-cy","entityConfirmDeleteButton","type","submit",1,"btn","btn-danger"],["icon","times"],["jhiTranslate","entity.action.delete"]],template:function(e,o){1&e&&(t.YNc(0,E,38,4,"form",0),t._uU(1,"\n")),2&e&&t.Q6J("ngIf",o.department)},dependencies:[s._Y,s.JL,s.F,h.O5,Z.BN,T.P,p.A],encapsulation:2}),n})();var D=i(1805),b=i(9003),M=i(1408),x=i(1427);function q(n,u){1&n&&(t.TgZ(0,"div",11),t._uU(1,"\n    "),t.TgZ(2,"span",12),t._uU(3,"No Departments found"),t.qZA(),t._uU(4,"\n  "),t.qZA())}const R=function(n){return["/location",n,"view"]};function P(n,u){if(1&n&&(t.TgZ(0,"div"),t._uU(1,"\n              "),t.TgZ(2,"a",26),t._uU(3),t.qZA(),t._uU(4,"\n            "),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(2,R,e.location.id)),t.xp6(1),t.Oqu(null==e.location?null:e.location.id)}}const J=function(n){return["/department",n,"view"]},K=function(n){return["/department",n,"edit"]};function Q(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"tr",25),t._uU(1,"\n          "),t.TgZ(2,"td"),t._uU(3,"\n            "),t.TgZ(4,"a",26),t._uU(5),t.qZA(),t._uU(6,"\n          "),t.qZA(),t._uU(7,"\n          "),t.TgZ(8,"td"),t._uU(9),t.qZA(),t._uU(10,"\n          "),t.TgZ(11,"td"),t._uU(12,"\n            "),t.YNc(13,P,5,4,"div",27),t._uU(14,"\n          "),t.qZA(),t._uU(15,"\n          "),t.TgZ(16,"td",28),t._uU(17,"\n            "),t.TgZ(18,"div",29),t._uU(19,"\n              "),t.TgZ(20,"button",30),t._uU(21,"\n                "),t._UZ(22,"fa-icon",31),t._uU(23,"\n                "),t.TgZ(24,"span",32),t._uU(25,"View"),t.qZA(),t._uU(26,"\n              "),t.qZA(),t._uU(27,"\n\n              "),t.TgZ(28,"button",33),t._uU(29,"\n                "),t._UZ(30,"fa-icon",34),t._uU(31,"\n                "),t.TgZ(32,"span",35),t._uU(33,"Edit"),t.qZA(),t._uU(34,"\n              "),t.qZA(),t._uU(35,"\n\n              "),t.TgZ(36,"button",36),t.NdJ("click",function(){const C=t.CHM(e).$implicit,F=t.oxw(2);return t.KtG(F.delete(C))}),t._uU(37,"\n                "),t._UZ(38,"fa-icon",37),t._uU(39,"\n                "),t.TgZ(40,"span",38),t._uU(41,"Delete"),t.qZA(),t._uU(42,"\n              "),t.qZA(),t._uU(43,"\n            "),t.qZA(),t._uU(44,"\n          "),t.qZA(),t._uU(45,"\n        "),t.qZA()}if(2&n){const e=u.$implicit;t.xp6(4),t.Q6J("routerLink",t.VKq(6,J,e.id)),t.xp6(1),t.Oqu(e.id),t.xp6(4),t.Oqu(e.departmentName),t.xp6(4),t.Q6J("ngIf",e.location),t.xp6(7),t.Q6J("routerLink",t.VKq(8,J,e.id)),t.xp6(8),t.Q6J("routerLink",t.VKq(10,K,e.id))}}function w(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"div",13),t._uU(1,"\n    "),t.TgZ(2,"table",14),t._uU(3,"\n      "),t.TgZ(4,"thead"),t._uU(5,"\n        "),t.TgZ(6,"tr",15),t.NdJ("predicateChange",function(c){t.CHM(e);const C=t.oxw();return t.KtG(C.predicate=c)})("ascendingChange",function(c){t.CHM(e);const C=t.oxw();return t.KtG(C.ascending=c)})("sortChange",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.navigateToWithComponentValues())}),t._uU(7,"\n          "),t.TgZ(8,"th",16)(9,"span",17),t._uU(10,"ID"),t.qZA(),t._uU(11," "),t._UZ(12,"fa-icon",18),t.qZA(),t._uU(13,"\n          "),t.TgZ(14,"th",19),t._uU(15,"\n            "),t.TgZ(16,"span",20),t._uU(17,"Department Name"),t.qZA(),t._uU(18," "),t._UZ(19,"fa-icon",18),t._uU(20,"\n          "),t.qZA(),t._uU(21,"\n          "),t.TgZ(22,"th",21),t._uU(23,"\n            "),t.TgZ(24,"span",22),t._uU(25,"Location"),t.qZA(),t._uU(26," "),t._UZ(27,"fa-icon",18),t._uU(28,"\n          "),t.qZA(),t._uU(29,"\n          "),t._UZ(30,"th",23),t._uU(31,"\n        "),t.qZA(),t._uU(32,"\n      "),t.qZA(),t._uU(33,"\n      "),t.TgZ(34,"tbody"),t._uU(35,"\n        "),t.YNc(36,Q,46,12,"tr",24),t._uU(37,"\n      "),t.qZA(),t._uU(38,"\n    "),t.qZA(),t._uU(39,"\n  "),t.qZA()}if(2&n){const e=t.oxw();t.xp6(6),t.Q6J("predicate",e.predicate)("ascending",e.ascending),t.xp6(30),t.Q6J("ngForOf",e.departments)("ngForTrackBy",e.trackId)}}const Y=function(){return["/department/new"]};let W=(()=>{class n{constructor(e,o,c,C,F){this.departmentService=e,this.activatedRoute=o,this.router=c,this.sortService=C,this.modalService=F,this.isLoading=!1,this.predicate="id",this.ascending=!0,this.trackId=(B,lt)=>this.departmentService.getDepartmentIdentifier(lt)}ngOnInit(){this.load()}delete(e){const o=this.modalService.open(S,{size:"lg",backdrop:"static"});o.componentInstance.department=e,o.closed.pipe((0,f.h)(c=>c===m.s1),(0,d.w)(()=>this.loadFromBackendWithRouteInformations())).subscribe({next:c=>{this.onResponseSuccess(c)}})}load(){this.loadFromBackendWithRouteInformations().subscribe({next:e=>{this.onResponseSuccess(e)}})}navigateToWithComponentValues(){this.handleNavigation(this.predicate,this.ascending)}loadFromBackendWithRouteInformations(){return(0,A.a)([this.activatedRoute.queryParamMap,this.activatedRoute.data]).pipe((0,v.b)(([e,o])=>this.fillComponentAttributeFromRoute(e,o)),(0,d.w)(()=>this.queryBackend(this.predicate,this.ascending)))}fillComponentAttributeFromRoute(e,o){const c=(e.get(m._l)??o[m.cy]).split(",");this.predicate=c[0],this.ascending=c[1]===m.aW}onResponseSuccess(e){const o=this.fillComponentAttributesFromResponseBody(e.body);this.departments=this.refineData(o)}refineData(e){return e.sort(this.sortService.startSort(this.predicate,this.ascending?1:-1))}fillComponentAttributesFromResponseBody(e){return e??[]}queryBackend(e,o){this.isLoading=!0;const c={sort:this.getSortQueryParam(e,o)};return this.departmentService.query(c).pipe((0,v.b)(()=>this.isLoading=!1))}handleNavigation(e,o){const c={sort:this.getSortQueryParam(e,o)};this.router.navigate(["./"],{relativeTo:this.activatedRoute,queryParams:c})}getSortQueryParam(e=this.predicate,o=this.ascending){return""===e?[]:[e+","+(o?m.aW:m.jo)]}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.n),t.Y36(_.gz),t.Y36(_.F0),t.Y36(D.K),t.Y36(g.FF))},n.\u0275cmp=t.Xpm({type:n,selectors:[["jhi-department"]],decls:36,vars:6,consts:[["id","page-heading","data-cy","DepartmentHeading"],["jhiTranslate","demoJhipsterFeApp.department.home.title"],[1,"d-flex","justify-content-end"],[1,"btn","btn-info","me-2",3,"disabled","click"],["icon","sync",3,"spin"],["jhiTranslate","demoJhipsterFeApp.department.home.refreshListLabel"],["id","jh-create-entity","data-cy","entityCreateButton",1,"btn","btn-primary","jh-create-entity","create-department",3,"routerLink"],["icon","plus"],["jhiTranslate","demoJhipsterFeApp.department.home.createLabel"],["class","alert alert-warning","id","no-result",4,"ngIf"],["class","table-responsive","id","entities",4,"ngIf"],["id","no-result",1,"alert","alert-warning"],["jhiTranslate","demoJhipsterFeApp.department.home.notFound"],["id","entities",1,"table-responsive"],["aria-describedby","page-heading",1,"table","table-striped"],["jhiSort","",3,"predicate","ascending","predicateChange","ascendingChange","sortChange"],["scope","col","jhiSortBy","id"],["jhiTranslate","global.field.id"],["icon","sort"],["scope","col","jhiSortBy","departmentName"],["jhiTranslate","demoJhipsterFeApp.department.departmentName"],["scope","col","jhiSortBy","location.id"],["jhiTranslate","demoJhipsterFeApp.department.location"],["scope","col"],["data-cy","entityTable",4,"ngFor","ngForOf","ngForTrackBy"],["data-cy","entityTable"],[3,"routerLink"],[4,"ngIf"],[1,"text-end"],[1,"btn-group"],["type","submit","data-cy","entityDetailsButton",1,"btn","btn-info","btn-sm",3,"routerLink"],["icon","eye"],["jhiTranslate","entity.action.view",1,"d-none","d-md-inline"],["type","submit","data-cy","entityEditButton",1,"btn","btn-primary","btn-sm",3,"routerLink"],["icon","pencil-alt"],["jhiTranslate","entity.action.edit",1,"d-none","d-md-inline"],["type","submit","data-cy","entityDeleteButton",1,"btn","btn-danger","btn-sm",3,"click"],["icon","times"],["jhiTranslate","entity.action.delete",1,"d-none","d-md-inline"]],template:function(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1,"\n  "),t.TgZ(2,"h2",0),t._uU(3,"\n    "),t.TgZ(4,"span",1),t._uU(5,"Departments"),t.qZA(),t._uU(6,"\n\n    "),t.TgZ(7,"div",2),t._uU(8,"\n      "),t.TgZ(9,"button",3),t.NdJ("click",function(){return o.load()}),t._uU(10,"\n        "),t._UZ(11,"fa-icon",4),t._uU(12,"\n        "),t.TgZ(13,"span",5),t._uU(14,"Refresh list"),t.qZA(),t._uU(15,"\n      "),t.qZA(),t._uU(16,"\n\n      "),t.TgZ(17,"button",6),t._uU(18,"\n        "),t._UZ(19,"fa-icon",7),t._uU(20,"\n        "),t.TgZ(21,"span",8),t._uU(22," Create a new Department "),t.qZA(),t._uU(23,"\n      "),t.qZA(),t._uU(24,"\n    "),t.qZA(),t._uU(25,"\n  "),t.qZA(),t._uU(26,"\n\n  "),t._UZ(27,"jhi-alert-error"),t._uU(28,"\n\n  "),t._UZ(29,"jhi-alert"),t._uU(30,"\n\n  "),t.YNc(31,q,5,0,"div",9),t._uU(32,"\n\n  "),t.YNc(33,w,40,4,"div",10),t._uU(34,"\n"),t.qZA(),t._uU(35,"\n")),2&e&&(t.xp6(9),t.Q6J("disabled",o.isLoading),t.xp6(2),t.Q6J("spin",o.isLoading),t.xp6(6),t.Q6J("routerLink",t.DdM(5,Y)),t.xp6(14),t.Q6J("ngIf",0===(null==o.departments?null:o.departments.length)),t.xp6(2),t.Q6J("ngIf",o.departments&&o.departments.length>0))},dependencies:[h.sg,h.O5,Z.BN,T.P,b.w,p.A,M.T,x.b,_.rH,_.yS],encapsulation:2}),n})();const $=function(n){return["/location",n,"view"]};function H(n,u){if(1&n&&(t.TgZ(0,"div"),t._uU(1,"\n            "),t.TgZ(2,"a",15),t._uU(3),t.qZA(),t._uU(4,"\n          "),t.qZA()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("routerLink",t.VKq(2,$,e.department.location.id)),t.xp6(1),t.Oqu(null==e.department.location?null:e.department.location.id)}}const k=function(n){return["/department",n,"edit"]};function G(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t._uU(1,"\n      "),t.TgZ(2,"h2",3)(3,"span",4),t._uU(4,"Department"),t.qZA()(),t._uU(5,"\n\n      "),t._UZ(6,"hr"),t._uU(7,"\n\n      "),t._UZ(8,"jhi-alert-error"),t._uU(9,"\n\n      "),t._UZ(10,"jhi-alert"),t._uU(11,"\n\n      "),t.TgZ(12,"dl",5),t._uU(13,"\n        "),t.TgZ(14,"dt")(15,"span",6),t._uU(16,"ID"),t.qZA()(),t._uU(17,"\n        "),t.TgZ(18,"dd"),t._uU(19,"\n          "),t.TgZ(20,"span"),t._uU(21),t.qZA(),t._uU(22,"\n        "),t.qZA(),t._uU(23,"\n        "),t.TgZ(24,"dt")(25,"span",7),t._uU(26,"Department Name"),t.qZA()(),t._uU(27,"\n        "),t.TgZ(28,"dd"),t._uU(29,"\n          "),t.TgZ(30,"span"),t._uU(31),t.qZA(),t._uU(32,"\n        "),t.qZA(),t._uU(33,"\n        "),t.TgZ(34,"dt")(35,"span",8),t._uU(36,"Location"),t.qZA()(),t._uU(37,"\n        "),t.TgZ(38,"dd"),t._uU(39,"\n          "),t.YNc(40,H,5,4,"div",2),t._uU(41,"\n        "),t.qZA(),t._uU(42,"\n      "),t.qZA(),t._uU(43,"\n\n      "),t.TgZ(44,"button",9),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.previousState())}),t._uU(45,"\n        "),t._UZ(46,"fa-icon",10),t._uU(47,"\xa0"),t.TgZ(48,"span",11),t._uU(49,"Back"),t.qZA(),t._uU(50,"\n      "),t.qZA(),t._uU(51,"\n\n      "),t.TgZ(52,"button",12),t._uU(53,"\n        "),t._UZ(54,"fa-icon",13),t._uU(55,"\xa0"),t.TgZ(56,"span",14),t._uU(57,"Edit"),t.qZA(),t._uU(58,"\n      "),t.qZA(),t._uU(59,"\n    "),t.qZA()}if(2&n){const e=t.oxw();t.xp6(21),t.Oqu(e.department.id),t.xp6(10),t.Oqu(e.department.departmentName),t.xp6(9),t.Q6J("ngIf",e.department.location),t.xp6(12),t.Q6J("routerLink",t.VKq(4,k,e.department.id))}}let V=(()=>{class n{constructor(e){this.activatedRoute=e,this.department=null}ngOnInit(){this.activatedRoute.data.subscribe(({department:e})=>{this.department=e})}previousState(){window.history.back()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["jhi-department-detail"]],decls:8,vars:1,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],[4,"ngIf"],["data-cy","departmentDetailsHeading"],["jhiTranslate","demoJhipsterFeApp.department.detail.title"],[1,"row-md","jh-entity-details"],["jhiTranslate","global.field.id"],["jhiTranslate","demoJhipsterFeApp.department.departmentName"],["jhiTranslate","demoJhipsterFeApp.department.location"],["type","submit","data-cy","entityDetailsBackButton",1,"btn","btn-info",3,"click"],["icon","arrow-left"],["jhiTranslate","entity.action.back"],["type","button",1,"btn","btn-primary",3,"routerLink"],["icon","pencil-alt"],["jhiTranslate","entity.action.edit"],[3,"routerLink"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._uU(1,"\n  "),t.TgZ(2,"div",1),t._uU(3,"\n    "),t.YNc(4,G,60,6,"div",2),t._uU(5,"\n  "),t.qZA(),t._uU(6,"\n"),t.qZA(),t._uU(7,"\n")),2&e&&(t.xp6(4),t.Q6J("ngIf",o.department))},dependencies:[h.O5,Z.BN,T.P,b.w,p.A,_.rH,_.yS],encapsulation:2}),n})();var z=i(8746),j=i(4004);let X=(()=>{class n{createDepartmentFormGroup(e={id:null}){const o={...this.getFormDefaults(),...e};return new s.cw({id:new s.NI({value:o.id,disabled:!0},{nonNullable:!0,validators:[s.kI.required]}),departmentName:new s.NI(o.departmentName,{validators:[s.kI.required]}),location:new s.NI(o.location)})}getDepartment(e){return e.getRawValue()}resetForm(e,o){const c={...this.getFormDefaults(),...o};e.reset({...c,id:{value:c.id,disabled:!0}})}getFormDefaults(){return{id:null}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var tt=i(6329);function et(n,u){1&n&&(t.TgZ(0,"div",5),t._uU(1,"\n          "),t.TgZ(2,"label",19),t._uU(3,"ID"),t.qZA(),t._uU(4,"\n          "),t._UZ(5,"input",20),t._uU(6,"\n        "),t.qZA()),2&n&&(t.xp6(5),t.Q6J("readonly",!0))}function nt(n,u){1&n&&(t.TgZ(0,"small",22),t._uU(1,"\n              This field is required.\n            "),t.qZA())}function rt(n,u){if(1&n&&(t.TgZ(0,"div"),t._uU(1,"\n            "),t.YNc(2,nt,2,0,"small",21),t._uU(3,"\n          "),t.qZA()),2&n){const e=t.oxw();let o;t.xp6(2),t.Q6J("ngIf",null==(o=e.editForm.get("departmentName"))||null==o.errors?null:o.errors.required)}}function it(n,u){if(1&n&&(t.TgZ(0,"option",11),t._uU(1),t.qZA()),2&n){const e=u.$implicit;t.Q6J("ngValue",e),t.xp6(1),t.Oqu(e.id)}}let N=(()=>{class n{constructor(e,o,c,C){this.departmentService=e,this.departmentFormService=o,this.locationService=c,this.activatedRoute=C,this.isSaving=!1,this.department=null,this.locationsSharedCollection=[],this.editForm=this.departmentFormService.createDepartmentFormGroup(),this.compareLocation=(F,B)=>this.locationService.compareLocation(F,B)}ngOnInit(){this.activatedRoute.data.subscribe(({department:e})=>{this.department=e,e&&this.updateForm(e),this.loadRelationshipsOptions()})}previousState(){window.history.back()}save(){this.isSaving=!0;const e=this.departmentFormService.getDepartment(this.editForm);this.subscribeToSaveResponse(null!==e.id?this.departmentService.update(e):this.departmentService.create(e))}subscribeToSaveResponse(e){e.pipe((0,z.x)(()=>this.onSaveFinalize())).subscribe({next:()=>this.onSaveSuccess(),error:()=>this.onSaveError()})}onSaveSuccess(){this.previousState()}onSaveError(){}onSaveFinalize(){this.isSaving=!1}updateForm(e){this.department=e,this.departmentFormService.resetForm(this.editForm,e),this.locationsSharedCollection=this.locationService.addLocationToCollectionIfMissing(this.locationsSharedCollection,e.location)}loadRelationshipsOptions(){this.locationService.query().pipe((0,j.U)(e=>e.body??[])).pipe((0,j.U)(e=>this.locationService.addLocationToCollectionIfMissing(e,this.department?.location))).subscribe(e=>this.locationsSharedCollection=e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.n),t.Y36(X),t.Y36(tt.a),t.Y36(_.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["jhi-department-update"]],decls:61,vars:7,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],["name","editForm","role","form","novalidate","",3,"formGroup","ngSubmit"],["id","jhi-department-heading","data-cy","DepartmentCreateUpdateHeading","jhiTranslate","demoJhipsterFeApp.department.home.createOrEditLabel"],["class","row mb-3",4,"ngIf"],[1,"row","mb-3"],["jhiTranslate","demoJhipsterFeApp.department.departmentName","for","field_departmentName",1,"form-label"],["type","text","name","departmentName","id","field_departmentName","data-cy","departmentName","formControlName","departmentName",1,"form-control"],[4,"ngIf"],["jhiTranslate","demoJhipsterFeApp.department.location","for","field_location",1,"form-label"],["id","field_location","data-cy","location","name","location","formControlName","location",1,"form-control",3,"compareWith"],[3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"],["type","button","id","cancel-save","data-cy","entityCreateCancelButton",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["type","submit","id","save-entity","data-cy","entityCreateSaveButton",1,"btn","btn-primary",3,"disabled"],["icon","save"],["jhiTranslate","entity.action.save"],["jhiTranslate","global.field.id","for","field_id",1,"form-label"],["type","number","name","id","id","field_id","data-cy","id","formControlName","id",1,"form-control",3,"readonly"],["class","form-text text-danger","jhiTranslate","entity.validation.required",4,"ngIf"],["jhiTranslate","entity.validation.required",1,"form-text","text-danger"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._uU(1,"\n  "),t.TgZ(2,"div",1),t._uU(3,"\n    "),t.TgZ(4,"form",2),t.NdJ("ngSubmit",function(){return o.save()}),t._uU(5,"\n      "),t.TgZ(6,"h2",3),t._uU(7,"\n        Create or edit a Department\n      "),t.qZA(),t._uU(8,"\n\n      "),t.TgZ(9,"div"),t._uU(10,"\n        "),t._UZ(11,"jhi-alert-error"),t._uU(12,"\n\n        "),t.YNc(13,et,7,1,"div",4),t._uU(14,"\n\n        "),t.TgZ(15,"div",5),t._uU(16,"\n          "),t.TgZ(17,"label",6),t._uU(18,"Department Name"),t.qZA(),t._uU(19,"\n          "),t._UZ(20,"input",7),t._uU(21,"\n          "),t.YNc(22,rt,4,1,"div",8),t._uU(23,"\n        "),t.qZA(),t._uU(24,"\n\n        "),t.TgZ(25,"div",5),t._uU(26,"\n          "),t.TgZ(27,"label",9),t._uU(28,"Location"),t.qZA(),t._uU(29,"\n          "),t.TgZ(30,"select",10),t._uU(31,"\n            "),t._UZ(32,"option",11),t._uU(33,"\n            "),t.YNc(34,it,2,2,"option",12),t._uU(35,"\n          "),t.qZA(),t._uU(36,"\n        "),t.qZA(),t._uU(37,"\n      "),t.qZA(),t._uU(38,"\n\n      "),t.TgZ(39,"div"),t._uU(40,"\n        "),t.TgZ(41,"button",13),t.NdJ("click",function(){return o.previousState()}),t._uU(42,"\n          "),t._UZ(43,"fa-icon",14),t._uU(44,"\xa0"),t.TgZ(45,"span",15),t._uU(46,"Cancel"),t.qZA(),t._uU(47,"\n        "),t.qZA(),t._uU(48,"\n\n        "),t.TgZ(49,"button",16),t._uU(50,"\n          "),t._UZ(51,"fa-icon",17),t._uU(52,"\xa0"),t.TgZ(53,"span",18),t._uU(54,"Save"),t.qZA(),t._uU(55,"\n        "),t.qZA(),t._uU(56,"\n      "),t.qZA(),t._uU(57,"\n    "),t.qZA(),t._uU(58,"\n  "),t.qZA(),t._uU(59,"\n"),t.qZA(),t._uU(60,"\n")),2&e&&(t.xp6(4),t.Q6J("formGroup",o.editForm),t.xp6(9),t.Q6J("ngIf",null!==o.editForm.controls.id.value),t.xp6(9),t.Q6J("ngIf",o.editForm.get("departmentName").invalid&&(o.editForm.get("departmentName").dirty||o.editForm.get("departmentName").touched)),t.xp6(8),t.Q6J("compareWith",o.compareLocation),t.xp6(2),t.Q6J("ngValue",null),t.xp6(2),t.Q6J("ngForOf",o.locationsSharedCollection),t.xp6(15),t.Q6J("disabled",o.editForm.invalid||o.isSaving))},dependencies:[s._Y,s.YN,s.Kr,s.Fj,s.wV,s.EJ,s.JJ,s.JL,h.sg,h.O5,Z.BN,s.sg,s.u,T.P,p.A],encapsulation:2}),n})();var L=i(9646),ot=i(515),at=i(5577);let O=(()=>{class n{constructor(e,o){this.service=e,this.router=o}resolve(e){const o=e.params.id;return o?this.service.find(o).pipe((0,at.z)(c=>c.body?(0,L.of)(c.body):(this.router.navigate(["404"]),ot.E))):(0,L.of)(null)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(a.n),t.LFG(_.F0))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const st=[{path:"",component:W,data:{defaultSort:"id,"+m.aW},canActivate:[l.Z]},{path:":id/view",component:V,resolve:{department:O},canActivate:[l.Z]},{path:"new",component:N,resolve:{department:O},canActivate:[l.Z]},{path:":id/edit",component:N,resolve:{department:O},canActivate:[l.Z]}];let ct=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[_.Bz.forChild(st),_.Bz]}),n})(),dt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.m,ct]}),n})()},8256:(y,U,i)=>{i.d(U,{n:()=>A});var r=i(6037),_=i(5929),l=i(4650),f=i(529),d=i(1082);let A=(()=>{class v{constructor(t,a){this.http=t,this.applicationConfigService=a,this.resourceUrl=this.applicationConfigService.getEndpointFor("api/departments")}create(t){return this.http.post(this.resourceUrl,t,{observe:"response"})}update(t){return this.http.put(`${this.resourceUrl}/${this.getDepartmentIdentifier(t)}`,t,{observe:"response"})}partialUpdate(t){return this.http.patch(`${this.resourceUrl}/${this.getDepartmentIdentifier(t)}`,t,{observe:"response"})}find(t){return this.http.get(`${this.resourceUrl}/${t}`,{observe:"response"})}query(t){const a=(0,_.b)(t);return this.http.get(this.resourceUrl,{params:a,observe:"response"})}delete(t){return this.http.delete(`${this.resourceUrl}/${t}`,{observe:"response"})}getDepartmentIdentifier(t){return t.id}compareDepartment(t,a){return t&&a?this.getDepartmentIdentifier(t)===this.getDepartmentIdentifier(a):t===a}addDepartmentToCollectionIfMissing(t,...a){const g=a.filter(r.E);if(g.length>0){const s=t.map(Z=>this.getDepartmentIdentifier(Z));return[...g.filter(Z=>{const T=this.getDepartmentIdentifier(Z);return!s.includes(T)&&(s.push(T),!0)}),...t]}return t}}return v.\u0275fac=function(t){return new(t||v)(l.LFG(f.eN),l.LFG(d.y))},v.\u0275prov=l.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},486:(y,U,i)=>{i.d(U,{A:()=>t});var r=i(4650),_=i(4728),l=i(8821),f=i(6188),d=i(6895),A=i(3414);function v(a,g){if(1&a){const s=r.EpF();r.TgZ(0,"ngb-alert",4),r.NdJ("closed",function(){r.CHM(s);const Z=r.oxw().$implicit,T=r.oxw();return r.KtG(T.close(Z))}),r._uU(1,"\n      "),r._UZ(2,"pre",5),r._uU(3,"\n    "),r.qZA()}if(2&a){const s=r.oxw().$implicit;r.Q6J("type",s.type),r.xp6(2),r.Q6J("innerHTML",s.message,r.oJD)}}function m(a,g){if(1&a&&(r.TgZ(0,"div",2),r._uU(1,"\n    "),r.YNc(2,v,4,2,"ngb-alert",3),r._uU(3,"\n  "),r.qZA()),2&a){const s=g.$implicit,h=r.oxw();r.Q6J("ngClass",h.setClasses(s)),r.xp6(2),r.Q6J("ngIf",s.message)}}let t=(()=>{class a{constructor(s,h,Z){this.alertService=s,this.eventManager=h,this.alerts=[],this.errorListener=h.subscribe("demoJhipsterFeApp.error",T=>{const p=T.content;this.addErrorAlert(p.message,p.key,p.params)}),this.httpErrorListener=h.subscribe("demoJhipsterFeApp.httpError",T=>{const p=T.content;switch(p.status){case 0:this.addErrorAlert("Server not reachable","error.server.not.reachable");break;case 400:{const I=p.headers.keys();let E=null,S=null;for(const D of I)D.toLowerCase().endsWith("app-error")?E=p.headers.get(D):D.toLowerCase().endsWith("app-params")&&(S=p.headers.get(D));if(E){const D=S?{entityName:Z.instant(`global.menu.entities.${S}`)}:void 0;this.addErrorAlert(E,E,D)}else if(""!==p.error&&p.error.fieldErrors){const D=p.error.fieldErrors;for(const b of D){["Min","Max","DecimalMin","DecimalMax"].includes(b.message)&&(b.message="Size");const M=b.field.replace(/\[\d*\]/g,"[]"),x=Z.instant(`demoJhipsterFeApp.${b.objectName}.${M}`);this.addErrorAlert(`Error on field "${x}"`,`error.${b.message}`,{fieldName:x})}}else""!==p.error&&p.error.message?this.addErrorAlert(p.error.detail??p.error.message,p.error.message,p.error.params):this.addErrorAlert(p.error,p.error);break}case 404:this.addErrorAlert("Not found","error.url.not.found");break;default:""!==p.error&&p.error.message?this.addErrorAlert(p.error.detail??p.error.message,p.error.message,p.error.params):this.addErrorAlert(p.error,p.error)}})}setClasses(s){const h={"jhi-toast":Boolean(s.toast)};return s.position?{...h,[s.position]:!0}:h}ngOnDestroy(){this.eventManager.destroy(this.errorListener),this.eventManager.destroy(this.httpErrorListener)}close(s){s.close?.(this.alerts)}addErrorAlert(s,h,Z){this.alertService.addAlert({type:"danger",message:s,translationKey:h,translationParams:Z},this.alerts)}}return a.\u0275fac=function(s){return new(s||a)(r.Y36(_.c),r.Y36(l.Q),r.Y36(f.sK))},a.\u0275cmp=r.Xpm({type:a,selectors:[["jhi-alert-error"]],decls:5,vars:1,consts:[["role","alert",1,"alerts"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[3,"type","closed",4,"ngIf"],[3,"type","closed"],[3,"innerHTML"]],template:function(s,h){1&s&&(r.TgZ(0,"div",0),r._uU(1,"\n  "),r.YNc(2,m,4,2,"div",1),r._uU(3,"\n"),r.qZA(),r._uU(4,"\n")),2&s&&(r.xp6(2),r.Q6J("ngForOf",h.alerts))},dependencies:[d.mk,d.sg,d.O5,A.xm],encapsulation:2}),a})()},9003:(y,U,i)=>{i.d(U,{w:()=>v});var r=i(4650),_=i(4728),l=i(6895),f=i(3414);function d(m,t){if(1&m){const a=r.EpF();r.TgZ(0,"ngb-alert",4),r.NdJ("closed",function(){r.CHM(a);const s=r.oxw().$implicit,h=r.oxw();return r.KtG(h.close(s))}),r._uU(1,"\n      "),r._UZ(2,"pre",5),r._uU(3,"\n    "),r.qZA()}if(2&m){const a=r.oxw().$implicit;r.Q6J("type",a.type),r.xp6(2),r.Q6J("innerHTML",a.message,r.oJD)}}function A(m,t){if(1&m&&(r.TgZ(0,"div",2),r._uU(1,"\n    "),r.YNc(2,d,4,2,"ngb-alert",3),r._uU(3,"\n  "),r.qZA()),2&m){const a=t.$implicit,g=r.oxw();r.Q6J("ngClass",g.setClasses(a)),r.xp6(2),r.Q6J("ngIf",a.message)}}let v=(()=>{class m{constructor(a){this.alertService=a,this.alerts=[]}ngOnInit(){this.alerts=this.alertService.get()}setClasses(a){const g={"jhi-toast":Boolean(a.toast)};return a.position?{...g,[a.position]:!0}:g}ngOnDestroy(){this.alertService.clear()}close(a){a.close?.(this.alerts)}}return m.\u0275fac=function(a){return new(a||m)(r.Y36(_.c))},m.\u0275cmp=r.Xpm({type:m,selectors:[["jhi-alert"]],decls:5,vars:1,consts:[["role","alert",1,"alerts"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[3,"type","closed",4,"ngIf"],[3,"type","closed"],[3,"innerHTML"]],template:function(a,g){1&a&&(r.TgZ(0,"div",0),r._uU(1,"\n  "),r.YNc(2,A,4,2,"div",1),r._uU(3,"\n"),r.qZA(),r._uU(4,"\n")),2&a&&(r.xp6(2),r.Q6J("ngForOf",g.alerts))},dependencies:[l.mk,l.sg,l.O5,f.xm],encapsulation:2}),m})()},1408:(y,U,i)=>{i.d(U,{T:()=>v});var r=i(7579),_=i(2722),l=i(3868),f=i(801),d=i(4650),A=i(1427);let v=(()=>{class m{constructor(a){this.sort=a,this.sortIcon=f.CmM,this.sortAscIcon=f.foy,this.sortDescIcon=f.u9C,this.destroy$=new r.x,a.predicateChange.pipe((0,_.R)(this.destroy$)).subscribe(()=>this.updateIconDefinition()),a.ascendingChange.pipe((0,_.R)(this.destroy$)).subscribe(()=>this.updateIconDefinition())}onClick(){this.iconComponent&&this.sort.sort(this.jhiSortBy)}ngAfterContentInit(){this.updateIconDefinition()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}updateIconDefinition(){if(this.iconComponent){let a=this.sortIcon;this.sort.predicate===this.jhiSortBy&&(a=this.sort.ascending?this.sortAscIcon:this.sortDescIcon),this.iconComponent.icon=a.iconName,this.iconComponent.render()}}}return m.\u0275fac=function(a){return new(a||m)(d.Y36(A.b,1))},m.\u0275dir=d.lG2({type:m,selectors:[["","jhiSortBy",""]],contentQueries:function(a,g,s){if(1&a&&d.Suo(s,l.BN,5),2&a){let h;d.iGM(h=d.CRH())&&(g.iconComponent=h.first)}},hostBindings:function(a,g){1&a&&d.NdJ("click",function(){return g.onClick()})},inputs:{jhiSortBy:"jhiSortBy"}}),m})()},1427:(y,U,i)=>{i.d(U,{b:()=>_});var r=i(4650);let _=(()=>{class l{constructor(){this.predicateChange=new r.vpe,this.ascendingChange=new r.vpe,this.sortChange=new r.vpe}get predicate(){return this._predicate}set predicate(d){this._predicate=d,this.predicateChange.emit(d)}get ascending(){return this._ascending}set ascending(d){this._ascending=d,this.ascendingChange.emit(d)}sort(d){this.ascending=d!==this.predicate||!this.ascending,this.predicate=d,this.predicateChange.emit(d),this.ascendingChange.emit(this.ascending),this.sortChange.emit({predicate:this.predicate,ascending:this.ascending})}}return l.\u0275fac=function(d){return new(d||l)},l.\u0275dir=r.lG2({type:l,selectors:[["","jhiSort",""]],inputs:{predicate:"predicate",ascending:"ascending"},outputs:{predicateChange:"predicateChange",ascendingChange:"ascendingChange",sortChange:"sortChange"}}),l})()}}]);