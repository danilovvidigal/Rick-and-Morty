"use strict";(self.webpackChunkrick_and_morty=self.webpackChunkrick_and_morty||[]).push([[992],{7992:(Zn,ut,l)=>{l.r(ut),l.d(ut,{HomeComponent:()=>qn});var p=l(6814),ct=l(9862),dt=l(86),U=l(7398),i=l(6689),ht=(l(7715),l(5592),l(7453),l(4829),l(4564),l(8251));l(7400),l(2714);const b=new i.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>T}),T="always";let Kt=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=i.oAB({type:e});static#n=this.\u0275inj=i.cJS({})}return e})(),Dn=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=i.oAB({type:e});static#n=this.\u0275inj=i.cJS({imports:[Kt]})}return e})(),wn=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:b,useValue:t.callSetDisabledState??T}]}}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=i.oAB({type:e});static#n=this.\u0275inj=i.cJS({imports:[Dn]})}return e})();var _e=l(8645),En=l(7394);class Fn extends En.w0{constructor(n,t){super()}schedule(n,t=0){return this}}const k={setInterval(e,n,...t){const{delegate:r}=k;return r?.setInterval?r.setInterval(e,n,...t):setInterval(e,n,...t)},clearInterval(e){const{delegate:n}=k;return(n?.clearInterval||clearInterval)(e)},delegate:void 0};var On=l(9039);const ye={now:()=>(ye.delegate||Date).now(),delegate:void 0};class F{constructor(n,t=F.now){this.schedulerActionCtor=n,this.now=t}schedule(n,t=0,r){return new this.schedulerActionCtor(this,n).schedule(r,t)}}F.now=ye.now;const xn=new class Nn extends F{constructor(n,t=F.now){super(n,t),this.actions=[],this._active=!1}flush(n){const{actions:t}=this;if(this._active)return void t.push(n);let r;this._active=!0;do{if(r=n.execute(n.state,n.delay))break}while(n=t.shift());if(this._active=!1,r){for(;n=t.shift();)n.unsubscribe();throw r}}}(class Sn extends Fn{constructor(n,t){super(n,t),this.scheduler=n,this.work=t,this.pending=!1}schedule(n,t=0){var r;if(this.closed)return this;this.state=n;const s=this.id,o=this.scheduler;return null!=s&&(this.id=this.recycleAsyncId(o,s,t)),this.pending=!0,this.delay=t,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(o,this.id,t),this}requestAsyncId(n,t,r=0){return k.setInterval(n.flush.bind(n,this),r)}recycleAsyncId(n,t,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return t;null!=t&&k.clearInterval(t)}execute(n,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(n,t);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,t){let s,r=!1;try{this.work(n)}catch(o){r=!0,s=o||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),s}unsubscribe(){if(!this.closed){const{id:n,scheduler:t}=this,{actions:r}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,On.P)(r,this),null!=n&&(this.id=this.recycleAsyncId(t,n,null)),this.delay=null,super.unsubscribe()}}});var Gn=l(9360),Bn=l(3997),In=l(4664),Hn=l(6306),Pn=l(2096),kn=l(9773),at=l(5742),Un=l(2425);let Rn=(()=>{class e{constructor(t,r){this.characterService=t,this.toastr=r,this.searchResults=new i.vpe,this.searchTerm=new _e.x,this.destroy$=new _e.x,this.searchTerm.pipe(function Tn(e,n=xn){return(0,Gn.e)((t,r)=>{let s=null,o=null,a=null;const c=()=>{if(s){s.unsubscribe(),s=null;const h=o;o=null,r.next(h)}};function g(){const h=a+e,V=n.now();if(V<h)return s=this.schedule(void 0,h-V),void r.add(s);c()}t.subscribe((0,ht.x)(r,h=>{o=h,a=n.now(),s||(s=n.schedule(g,e),r.add(s))},()=>{c(),r.complete()},void 0,()=>{o=s=null}))})}(300),(0,Bn.x)(),(0,In.w)(s=>this.characterService.searchCharacters(s).pipe((0,Hn.K)(()=>(this.toastr.error("Nem um personagem encontrado!","Erro",{toastClass:"toast toast-error"}),(0,Pn.of)({results:[]}))))),(0,kn.R)(this.destroy$)).subscribe(s=>this.searchResults.emit(s.results))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onSearch(t){this.searchTerm.next(t.target.value)}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(at.A),i.Y36(Un._W))};static#e=this.\u0275cmp=i.Xpm({type:e,selectors:[["app-search-characters"]],outputs:{searchResults:"searchResults"},standalone:!0,features:[i.jDz],decls:2,vars:0,consts:[[1,"flex","items-center","space-x-4","w-full"],["type","text","placeholder","Pesquisar Personagens",1,"p-2","rounded","border","border-gray-300","w-full",3,"input"]],template:function(r,s){1&r&&(i.TgZ(0,"div",0)(1,"input",1),i.NdJ("input",function(a){return s.onSearch(a)}),i.qZA()())},dependencies:[p.ez,wn,ct.JF]})}return e})(),jn=(()=>{class e{constructor(t){this.characterService=t,this.searchResults=new i.vpe,this.favoritesCount$=this.characterService.favorites$.pipe((0,U.U)(r=>r.length))}onSearchResults(t){this.searchResults.emit(t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(at.A))};static#e=this.\u0275cmp=i.Xpm({type:e,selectors:[["app-header"]],outputs:{searchResults:"searchResults"},standalone:!0,features:[i.jDz],decls:10,vars:3,consts:[[1,"bg-blue-500","p-4","flex","items-center","justify-between"],[1,"text-white","text-2xl"],[3,"searchResults"],[1,"text-white"]],template:function(r,s){1&r&&(i.TgZ(0,"header",0)(1,"h1",1),i._uU(2,"Rick & Morty Personagens"),i.qZA(),i.TgZ(3,"span"),i._uU(4,"Favoritos: "),i.qZA(),i.TgZ(5,"span"),i._uU(6),i.ALo(7,"async"),i.qZA(),i.TgZ(8,"app-search-characters",2),i.NdJ("searchResults",function(a){return s.onSearchResults(a)}),i.qZA(),i._UZ(9,"div",3),i.qZA()),2&r&&(i.xp6(6),i.Oqu(i.lcZ(7,1,s.favoritesCount$)))},dependencies:[p.ez,p.Ov,Rn]})}return e})();function Ln(e,n){if(1&e){const t=i.EpF();i.TgZ(0,"button",7),i.NdJ("click",function(){i.CHM(t);const s=i.oxw();return i.KtG(s.goToFavorites())}),i._uU(1,"Ver favoritos"),i.qZA()}}function Yn(e,n){if(1&e){const t=i.EpF();i.TgZ(0,"div",10),i._UZ(1,"img",11),i.TgZ(2,"h2",12),i._uU(3),i.qZA(),i.TgZ(4,"p"),i._uU(5),i.qZA(),i.TgZ(6,"p"),i._uU(7),i.qZA(),i.TgZ(8,"p"),i._uU(9),i.qZA(),i.TgZ(10,"button",13),i.NdJ("click",function(){const o=i.CHM(t).$implicit,a=i.oxw(2);return i.KtG(a.addToFavorites(o))}),i._uU(11,"Adicionar a favoritos"),i.qZA()()}if(2&e){const t=n.$implicit;i.xp6(1),i.Q6J("src",t.image,i.LSH)("alt",t.name),i.xp6(2),i.Oqu(t.name),i.xp6(2),i.hij("Status: ",t.status,""),i.xp6(2),i.hij("Species: ",t.species,""),i.xp6(2),i.hij("Gender: ",t.gender,"")}}function $n(e,n){if(1&e&&(i.TgZ(0,"div",8),i.YNc(1,Yn,12,6,"div",9),i.ALo(2,"async"),i.qZA()),2&e){const t=i.oxw();i.xp6(1),i.Q6J("ngForOf",i.lcZ(2,1,t.characters$))}}let qn=(()=>{class e{constructor(t,r){this.characterService=t,this.router=r}ngOnInit(){this.characters$=this.characterService.searchResults$,this.searchCompleted$=this.characters$.pipe((0,U.U)(t=>t.length>0))}addToFavorites(t){this.characterService.addFavorite(t)}goToFavorites(){this.router.navigate(["/favorites"])}onSearchResults(t){this.characterService.setSearchResults(t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(at.A),i.Y36(dt.F0))};static#e=this.\u0275cmp=i.Xpm({type:e,selectors:[["app-home"]],standalone:!0,features:[i.jDz],decls:9,vars:6,consts:[[3,"searchResults"],[1,"relative","min-h-screen"],["src","../../../assets/img/f6e96e7bcf7aee8f5619f215dc02f3f5.jpg","alt","Background",1,"absolute","inset-0","w-full","h-full","object-cover","z-0"],[1,"relative","z-10","p-4"],[1,"grid","p-2"],["class","bg-green-500 text-white py-2 px-4 rounded mt-4",3,"click",4,"ngIf"],["class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",4,"ngIf"],[1,"bg-green-500","text-white","py-2","px-4","rounded","mt-4",3,"click"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","lg:grid-cols-4","gap-4"],["class","bg-white rounded-lg shadow p-4",4,"ngFor","ngForOf"],[1,"bg-white","rounded-lg","shadow","p-4"],[1,"w-full","h-auto","rounded","mb-4",3,"src","alt"],[1,"text-xl","font-bold"],[1,"bg-blue-500","text-white","py-2","px-4","rounded","mt-4",3,"click"]],template:function(r,s){1&r&&(i.TgZ(0,"app-header",0),i.NdJ("searchResults",function(a){return s.onSearchResults(a)}),i.qZA(),i.TgZ(1,"div",1),i._UZ(2,"img",2),i.TgZ(3,"div",3)(4,"div",4),i.YNc(5,Ln,2,0,"button",5),i.ALo(6,"async"),i.qZA(),i.YNc(7,$n,3,3,"div",6),i.ALo(8,"async"),i.qZA()()),2&r&&(i.xp6(5),i.Q6J("ngIf",i.lcZ(6,2,s.searchCompleted$)),i.xp6(2),i.Q6J("ngIf",i.lcZ(8,4,s.searchCompleted$)))},dependencies:[p.ez,p.sg,p.O5,p.Ov,jn,ct.JF,dt.Bz]})}return e})()}}]);