"use strict";(self.webpackChunkdemo_jhipster_fe=self.webpackChunkdemo_jhipster_fe||[]).push([[592],{5709:(g,d,s)=>{s.d(d,{T:()=>a});var n=s(6037),l=s(5929),i=s(4650),f=s(529),o=s(1082);let a=(()=>{class t{constructor(e,r){this.http=e,this.applicationConfigService=r,this.resourceUrl=this.applicationConfigService.getEndpointFor("api/countries")}create(e){return this.http.post(this.resourceUrl,e,{observe:"response"})}update(e){return this.http.put(`${this.resourceUrl}/${this.getCountryIdentifier(e)}`,e,{observe:"response"})}partialUpdate(e){return this.http.patch(`${this.resourceUrl}/${this.getCountryIdentifier(e)}`,e,{observe:"response"})}find(e){return this.http.get(`${this.resourceUrl}/${e}`,{observe:"response"})}query(e){const r=(0,l.b)(e);return this.http.get(this.resourceUrl,{params:r,observe:"response"})}delete(e){return this.http.delete(`${this.resourceUrl}/${e}`,{observe:"response"})}getCountryIdentifier(e){return e.id}compareCountry(e,r){return e&&r?this.getCountryIdentifier(e)===this.getCountryIdentifier(r):e===r}addCountryToCollectionIfMissing(e,...r){const p=r.filter(n.E);if(p.length>0){const _=e.map(c=>this.getCountryIdentifier(c));return[...p.filter(c=>{const h=this.getCountryIdentifier(c);return!_.includes(h)&&(_.push(h),!0)}),...e]}return e}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(f.eN),i.LFG(o.y))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},4610:(g,d,s)=>{s.d(d,{O:()=>a});var n=s(6037),l=s(5929),i=s(4650),f=s(529),o=s(1082);let a=(()=>{class t{constructor(e,r){this.http=e,this.applicationConfigService=r,this.resourceUrl=this.applicationConfigService.getEndpointFor("api/jobs")}create(e){return this.http.post(this.resourceUrl,e,{observe:"response"})}update(e){return this.http.put(`${this.resourceUrl}/${this.getJobIdentifier(e)}`,e,{observe:"response"})}partialUpdate(e){return this.http.patch(`${this.resourceUrl}/${this.getJobIdentifier(e)}`,e,{observe:"response"})}find(e){return this.http.get(`${this.resourceUrl}/${e}`,{observe:"response"})}query(e){const r=(0,l.b)(e);return this.http.get(this.resourceUrl,{params:r,observe:"response"})}delete(e){return this.http.delete(`${this.resourceUrl}/${e}`,{observe:"response"})}getJobIdentifier(e){return e.id}compareJob(e,r){return e&&r?this.getJobIdentifier(e)===this.getJobIdentifier(r):e===r}addJobToCollectionIfMissing(e,...r){const p=r.filter(n.E);if(p.length>0){const _=e.map(c=>this.getJobIdentifier(c));return[...p.filter(c=>{const h=this.getJobIdentifier(c);return!_.includes(h)&&(_.push(h),!0)}),...e]}return e}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(f.eN),i.LFG(o.y))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},6329:(g,d,s)=>{s.d(d,{a:()=>a});var n=s(6037),l=s(5929),i=s(4650),f=s(529),o=s(1082);let a=(()=>{class t{constructor(e,r){this.http=e,this.applicationConfigService=r,this.resourceUrl=this.applicationConfigService.getEndpointFor("api/locations")}create(e){return this.http.post(this.resourceUrl,e,{observe:"response"})}update(e){return this.http.put(`${this.resourceUrl}/${this.getLocationIdentifier(e)}`,e,{observe:"response"})}partialUpdate(e){return this.http.patch(`${this.resourceUrl}/${this.getLocationIdentifier(e)}`,e,{observe:"response"})}find(e){return this.http.get(`${this.resourceUrl}/${e}`,{observe:"response"})}query(e){const r=(0,l.b)(e);return this.http.get(this.resourceUrl,{params:r,observe:"response"})}delete(e){return this.http.delete(`${this.resourceUrl}/${e}`,{observe:"response"})}getLocationIdentifier(e){return e.id}compareLocation(e,r){return e&&r?this.getLocationIdentifier(e)===this.getLocationIdentifier(r):e===r}addLocationToCollectionIfMissing(e,...r){const p=r.filter(n.E);if(p.length>0){const _=e.map(c=>this.getLocationIdentifier(c));return[...p.filter(c=>{const h=this.getLocationIdentifier(c);return!_.includes(h)&&(_.push(h),!0)}),...e]}return e}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(f.eN),i.LFG(o.y))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},329:(g,d,s)=>{s.d(d,{o:()=>a});var n=s(6037),l=s(5929),i=s(4650),f=s(529),o=s(1082);let a=(()=>{class t{constructor(e,r){this.http=e,this.applicationConfigService=r,this.resourceUrl=this.applicationConfigService.getEndpointFor("api/regions")}create(e){return this.http.post(this.resourceUrl,e,{observe:"response"})}update(e){return this.http.put(`${this.resourceUrl}/${this.getRegionIdentifier(e)}`,e,{observe:"response"})}partialUpdate(e){return this.http.patch(`${this.resourceUrl}/${this.getRegionIdentifier(e)}`,e,{observe:"response"})}find(e){return this.http.get(`${this.resourceUrl}/${e}`,{observe:"response"})}query(e){const r=(0,l.b)(e);return this.http.get(this.resourceUrl,{params:r,observe:"response"})}delete(e){return this.http.delete(`${this.resourceUrl}/${e}`,{observe:"response"})}getRegionIdentifier(e){return e.id}compareRegion(e,r){return e&&r?this.getRegionIdentifier(e)===this.getRegionIdentifier(r):e===r}addRegionToCollectionIfMissing(e,...r){const p=r.filter(n.E);if(p.length>0){const _=e.map(c=>this.getRegionIdentifier(c));return[...p.filter(c=>{const h=this.getRegionIdentifier(c);return!_.includes(h)&&(_.push(h),!0)}),...e]}return e}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(f.eN),i.LFG(o.y))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},3992:(g,d,s)=>{s.d(d,{M:()=>a});var n=s(6037),l=s(5929),i=s(4650),f=s(529),o=s(1082);let a=(()=>{class t{constructor(e,r){this.http=e,this.applicationConfigService=r,this.resourceUrl=this.applicationConfigService.getEndpointFor("api/tasks")}create(e){return this.http.post(this.resourceUrl,e,{observe:"response"})}update(e){return this.http.put(`${this.resourceUrl}/${this.getTaskIdentifier(e)}`,e,{observe:"response"})}partialUpdate(e){return this.http.patch(`${this.resourceUrl}/${this.getTaskIdentifier(e)}`,e,{observe:"response"})}find(e){return this.http.get(`${this.resourceUrl}/${e}`,{observe:"response"})}query(e){const r=(0,l.b)(e);return this.http.get(this.resourceUrl,{params:r,observe:"response"})}delete(e){return this.http.delete(`${this.resourceUrl}/${e}`,{observe:"response"})}getTaskIdentifier(e){return e.id}compareTask(e,r){return e&&r?this.getTaskIdentifier(e)===this.getTaskIdentifier(r):e===r}addTaskToCollectionIfMissing(e,...r){const p=r.filter(n.E);if(p.length>0){const _=e.map(c=>this.getTaskIdentifier(c));return[...p.filter(c=>{const h=this.getTaskIdentifier(c);return!_.includes(h)&&(_.push(h),!0)}),...e]}return e}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(f.eN),i.LFG(o.y))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},8133:(g,d,s)=>{s.d(d,{N:()=>f});var n=s(4650),l=s(1995);const i=function(o,a,t){return{first:o,second:a,total:t}};let f=(()=>{class o{set params(t){t.page&&void 0!==t.totalItems&&t.itemsPerPage?(this.first=(t.page-1)*t.itemsPerPage+1,this.second=t.page*t.itemsPerPage<t.totalItems?t.page*t.itemsPerPage:t.totalItems):(this.first=void 0,this.second=void 0),this.total=t.totalItems}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["jhi-item-count"]],inputs:{params:"params"},decls:3,vars:5,consts:[["jhiTranslate","global.item-count",3,"translateValues"]],template:function(t,u){1&t&&(n._uU(0," "),n._UZ(1,"div",0),n._uU(2," ")),2&t&&(n.xp6(1),n.Q6J("translateValues",n.kEZ(1,i,u.first,u.second,u.total)))},dependencies:[l.P],encapsulation:2}),o})()},1805:(g,d,s)=>{s.d(d,{K:()=>l});var n=s(4650);let l=(()=>{class i{constructor(){this.collator=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"})}startSort(o,a){return(t,u)=>this.collator.compare(t[o],u[o])*a}}return i.\u0275fac=function(o){return new(o||i)},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()}}]);