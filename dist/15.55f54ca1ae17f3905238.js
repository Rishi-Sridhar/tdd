(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/cdV":function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),t=function(){},o=e("lwpf"),a=e("ebCm"),r=e("A7o+"),i=e("ZYCi"),d=e("Ip0R"),c=function(){function l(l,n){var e=this;this.translate=l,this.router=n,this.pushRightClass="push-right",this.translate.addLangs(["en","fr","ur","es","it","fa","de","zh-CHS"]),this.translate.setDefaultLang("en");var u=this.translate.getBrowserLang();this.translate.use(u.match(/en|fr|ur|es|it|fa|de|zh-CHS/)?u:"en"),this.router.events.subscribe(function(l){l instanceof i.d&&window.innerWidth<=992&&e.isToggled()&&e.toggleSidebar()})}return l.prototype.ngOnInit=function(){this.username=sessionStorage.getItem("username")},l.prototype.isToggled=function(){return document.querySelector("body").classList.contains(this.pushRightClass)},l.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle(this.pushRightClass)},l.prototype.rltAndLtr=function(){document.querySelector("body").classList.toggle("rtl")},l.prototype.onLoggedout=function(){sessionStorage.removeItem("isLoggedin")},l.prototype.changeLang=function(l){this.translate.use(l)},l}(),s=u["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]{background-color:#222}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#999}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:#fff}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]{width:300px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;padding:5px 15px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]:last-child{border-bottom:none}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:13px;font-weight:600}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .last[_ngcontent-%COMP%]{font-size:12px;margin:0}.search-bar[_ngcontent-%COMP%]{height:29px;background-color:#e1e1e1;border-radius:100px;position:relative;width:230px}.search-bar[_ngcontent-%COMP%]   .searchbutton[_ngcontent-%COMP%]{position:absolute;top:23%;right:5px}.sfield[_ngcontent-%COMP%]{float:left;margin:5px 0 0 8px;font:8pt/18px Verdana;color:#888;height:20px;padding:0;background:0 0;border:0;max-width:125px}"]],data:{}});function g(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,83,"nav",[["class","navbar navbar-expand-lg fixed-top"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,1,"div",[["class","brand-logo"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,0,"img",[["src","assets/images/brand_logo.PNG"],["width","150px"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,1,"button",[["class","navbar-toggler"],["type","button"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.toggleSidebar()&&u),u},null,null)),(l()(),u["\u0275eld"](4,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-bars text-muted"]],null,null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,null,78,"div",[["class","collapse navbar-collapse"]],null,null,null,null,null)),(l()(),u["\u0275eld"](6,0,null,null,4,"form",[["class","form-inline my-2 my-lg-0"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" \xa0 \xa0 \xa0 \xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "])),(l()(),u["\u0275eld"](8,0,null,null,2,"div",[["class","search-bar"]],null,null,null,null,null)),(l()(),u["\u0275eld"](9,0,null,null,0,"input",[["class","sfield"],["maxlength","30"],["name","searchterm"],["placeholder","Search..."],["type","text"]],null,null,null,null,null)),(l()(),u["\u0275eld"](10,0,null,null,0,"input",[["alt","Search"],["class","searchbutton"],["name","search"],["src","assets/images/search_icon.png"],["type","image"],["width","20px"]],null,null,null,null,null)),(l()(),u["\u0275eld"](11,0,null,null,72,"ul",[["class","navbar-nav ml-auto"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\xa0 "])),(l()(),u["\u0275eld"](13,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),u["\u0275eld"](14,0,null,null,1,"a",[["class","nav-link mt-1"],["href","javascript:void(0)"],["style","padding: 0.375rem 1rem !important; border-color: #999;"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.rltAndLtr()&&u),u},null,null)),(l()(),u["\u0275ted"](-1,null,[" RTL/LTR "])),(l()(),u["\u0275ted"](-1,null,[" \xa0 "])),(l()(),u["\u0275eld"](17,0,null,null,36,"li",[["class","nav-item dropdown"],["ngbDropdown",""]],[[2,"show",null]],[[null,"keyup.esc"],["document","click"]],function(l,n,e){var t=!0;return"keyup.esc"===n&&(t=!1!==u["\u0275nov"](l,18).closeFromOutsideEsc()&&t),"document:click"===n&&(t=!1!==u["\u0275nov"](l,18).closeFromClick(e)&&t),t},null,null)),u["\u0275did"](18,212992,null,2,o.a,[a.a,u.NgZone],null,null),u["\u0275qud"](335544320,1,{_menu:0}),u["\u0275qud"](335544320,2,{_anchor:0}),(l()(),u["\u0275eld"](21,0,null,null,6,"a",[["aria-haspopup","true"],["class","nav-link dropdown-toggle"],["href","javascript:void(0)"],["ngbDropdownToggle",""]],[[1,"aria-expanded",0]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,22).toggleOpen()&&t),t},null,null)),u["\u0275did"](22,16384,null,0,o.d,[o.a,u.ElementRef],null,null),u["\u0275prd"](2048,[[2,4]],o.b,null,[o.d]),(l()(),u["\u0275eld"](24,0,null,null,0,"i",[["class","fa fa-language"]],null,null,null,null,null)),(l()(),u["\u0275ted"](25,null,[" "," "])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](27,0,null,null,0,"b",[["class","caret"]],null,null,null,null,null)),(l()(),u["\u0275eld"](28,0,null,null,25,"div",[["class","dropdown-menu-right"],["ngbDropdownMenu",""]],[[2,"dropdown-menu",null],[2,"show",null],[1,"x-placement",0]],null,null,null,null)),u["\u0275did"](29,16384,[[1,4]],0,o.c,[o.a,u.ElementRef,u.Renderer2],null,null),(l()(),u["\u0275eld"](30,0,null,null,2,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("en")&&u),u},null,null)),(l()(),u["\u0275ted"](31,null,[" "," "])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](33,0,null,null,2,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("fr")&&u),u},null,null)),(l()(),u["\u0275ted"](34,null,[" "," "])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](36,0,null,null,2,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("ur")&&u),u},null,null)),(l()(),u["\u0275ted"](37,null,[" "," "])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](39,0,null,null,2,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("es")&&u),u},null,null)),(l()(),u["\u0275ted"](40,null,[" "," "])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](42,0,null,null,2,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("it")&&u),u},null,null)),(l()(),u["\u0275ted"](43,null,[" "," "])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](45,0,null,null,2,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("fa")&&u),u},null,null)),(l()(),u["\u0275ted"](46,null,[" "," "])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](48,0,null,null,2,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("de")&&u),u},null,null)),(l()(),u["\u0275ted"](49,null,[" "," "])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](51,0,null,null,2,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("zh-CHS")&&u),u},null,null)),(l()(),u["\u0275ted"](52,null,[" "," "])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](54,0,null,null,29,"li",[["class","nav-item dropdown"],["ngbDropdown",""]],[[2,"show",null]],[[null,"keyup.esc"],["document","click"]],function(l,n,e){var t=!0;return"keyup.esc"===n&&(t=!1!==u["\u0275nov"](l,55).closeFromOutsideEsc()&&t),"document:click"===n&&(t=!1!==u["\u0275nov"](l,55).closeFromClick(e)&&t),t},null,null)),u["\u0275did"](55,212992,null,2,o.a,[a.a,u.NgZone],null,null),u["\u0275qud"](335544320,3,{_menu:0}),u["\u0275qud"](335544320,4,{_anchor:0}),(l()(),u["\u0275eld"](58,0,null,null,5,"a",[["aria-haspopup","true"],["class","nav-link dropdown-toggle"],["href","javascript:void(0)"],["ngbDropdownToggle",""]],[[1,"aria-expanded",0]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,59).toggleOpen()&&t),t},null,null)),u["\u0275did"](59,16384,null,0,o.d,[o.a,u.ElementRef],null,null),u["\u0275prd"](2048,[[4,4]],o.b,null,[o.d]),(l()(),u["\u0275eld"](61,0,null,null,0,"i",[["class","fa fa-user"]],null,null,null,null,null)),(l()(),u["\u0275ted"](62,null,[" "," "])),(l()(),u["\u0275eld"](63,0,null,null,0,"b",[["class","caret"]],null,null,null,null,null)),(l()(),u["\u0275eld"](64,0,null,null,19,"div",[["class","dropdown-menu-right"],["ngbDropdownMenu",""]],[[2,"dropdown-menu",null],[2,"show",null],[1,"x-placement",0]],null,null,null,null)),u["\u0275did"](65,16384,[[3,4]],0,o.c,[o.a,u.ElementRef,u.Renderer2],null,null),(l()(),u["\u0275eld"](66,0,null,null,3,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),u["\u0275eld"](67,0,null,null,0,"i",[["class","fa fa-fw fa-user"]],null,null,null,null,null)),(l()(),u["\u0275ted"](68,null,[" "," "])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](70,0,null,null,3,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),u["\u0275eld"](71,0,null,null,0,"i",[["class","fa fa-fw fa-envelope"]],null,null,null,null,null)),(l()(),u["\u0275ted"](72,null,[" "," "])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](74,0,null,null,3,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),u["\u0275eld"](75,0,null,null,0,"i",[["class","fa fa-fw fa-gear"]],null,null,null,null,null)),(l()(),u["\u0275ted"](76,null,[" "," "])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](78,0,null,null,5,"a",[["class","dropdown-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0,o=l.component;return"click"===n&&(t=!1!==u["\u0275nov"](l,79).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),"click"===n&&(t=!1!==o.onLoggedout()&&t),t},null,null)),u["\u0275did"](79,671744,null,0,i.n,[i.l,i.a,d.j],{routerLink:[0,"routerLink"]},null),u["\u0275pad"](80,1),(l()(),u["\u0275eld"](81,0,null,null,0,"i",[["class","fa fa-fw fa-power-off"]],null,null,null,null,null)),(l()(),u["\u0275ted"](82,null,[" "," "])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef])],function(l,n){l(n,18,0),l(n,55,0),l(n,79,0,l(n,80,0,"/login"))},function(l,n){var e=n.component;l(n,17,0,u["\u0275nov"](n,18).isOpen()),l(n,21,0,u["\u0275nov"](n,22).dropdown.isOpen()),l(n,25,0,u["\u0275unv"](n,25,0,u["\u0275nov"](n,26).transform("Language"))),l(n,28,0,!0,u["\u0275nov"](n,29).dropdown.isOpen(),u["\u0275nov"](n,29).placement),l(n,31,0,u["\u0275unv"](n,31,0,u["\u0275nov"](n,32).transform("English"))),l(n,34,0,u["\u0275unv"](n,34,0,u["\u0275nov"](n,35).transform("French"))),l(n,37,0,u["\u0275unv"](n,37,0,u["\u0275nov"](n,38).transform("Urdu"))),l(n,40,0,u["\u0275unv"](n,40,0,u["\u0275nov"](n,41).transform("Spanish"))),l(n,43,0,u["\u0275unv"](n,43,0,u["\u0275nov"](n,44).transform("Italian"))),l(n,46,0,u["\u0275unv"](n,46,0,u["\u0275nov"](n,47).transform("Farsi"))),l(n,49,0,u["\u0275unv"](n,49,0,u["\u0275nov"](n,50).transform("German"))),l(n,52,0,u["\u0275unv"](n,52,0,u["\u0275nov"](n,53).transform("Simplified Chinese"))),l(n,54,0,u["\u0275nov"](n,55).isOpen()),l(n,58,0,u["\u0275nov"](n,59).dropdown.isOpen()),l(n,62,0,e.username),l(n,64,0,!0,u["\u0275nov"](n,65).dropdown.isOpen(),u["\u0275nov"](n,65).placement),l(n,68,0,u["\u0275unv"](n,68,0,u["\u0275nov"](n,69).transform("Profile"))),l(n,72,0,u["\u0275unv"](n,72,0,u["\u0275nov"](n,73).transform("Inbox"))),l(n,76,0,u["\u0275unv"](n,76,0,u["\u0275nov"](n,77).transform("Settings"))),l(n,78,0,u["\u0275nov"](n,79).target,u["\u0275nov"](n,79).href),l(n,82,0,u["\u0275unv"](n,82,0,u["\u0275nov"](n,83).transform("Log Out")))})}var p=function(){function l(l,n){var e=this;this.translate=l,this.router=n,this.isActive=!1,this.showMenu="",this.pushRightClass="push-right",this.translate.addLangs(["en","fr","ur","es","it","fa","de"]),this.translate.setDefaultLang("en");var u=this.translate.getBrowserLang();this.translate.use(u.match(/en|fr|ur|es|it|fa|de/)?u:"en"),this.router.events.subscribe(function(l){l instanceof i.d&&window.innerWidth<=992&&e.isToggled()&&e.toggleSidebar()})}return l.prototype.ngOnInit=function(){this.username=sessionStorage.getItem("username"),this.isAuthorized=sessionStorage.getItem("isAuthorized")},l.prototype.eventCalled=function(){this.isActive=!this.isActive},l.prototype.addExpandClass=function(l){this.showMenu=l===this.showMenu?"0":l},l.prototype.isToggled=function(){return document.querySelector("body").classList.contains(this.pushRightClass)},l.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle(this.pushRightClass)},l.prototype.rltAndLtr=function(){document.querySelector("body").classList.toggle("rtl")},l.prototype.changeLang=function(l){this.translate.use(l)},l.prototype.onLoggedout=function(){sessionStorage.removeItem("isLoggedin")},l}(),f=u["\u0275crt"]({encapsulation:0,styles:[[".sidebar[_ngcontent-%COMP%]{border-radius:0;position:fixed;z-index:1000;top:56px;left:235px;width:235px;margin-left:-235px;border:none;overflow-y:auto;background-color:#222;bottom:0;overflow-x:hidden;padding-bottom:40px;transition:all .2s ease-in-out}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]{background:#222;border:0;border-radius:0;color:#999;text-decoration:none}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{margin-right:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.router-link-active[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#151515;color:#fff}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%]{padding-top:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%] > .list-group-item[_ngcontent-%COMP%]:first-child{border-top:1px solid rgba(255,255,255,.2)}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{border-radius:none;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]{font-size:1rem;height:50px;margin-bottom:0}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999;text-decoration:none;font-weight:400;background:#222}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;display:block;padding:1rem 1.5rem .75rem}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;outline:0;outline-offset:-2px}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]:hover{background:#151515}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]{border-radious:0;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{border-radius:0;background-color:#222;border:0 solid transparent}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover{background:#151515}.nested-menu[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{cursor:pointer}.nested-menu[_ngcontent-%COMP%]   .nested[_ngcontent-%COMP%]{list-style-type:none}.nested-menu[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:none;height:0}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:block;list-style-type:none;height:auto}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;padding:10px;display:block}@media screen and (max-width:992px){.sidebar[_ngcontent-%COMP%]{top:54px;left:0}}@media (min-width:992px){.header-fields[_ngcontent-%COMP%]{display:none}}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 0 #fff;border-radius:3px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:3px;-webkit-box-shadow:inset 0 0 3px #fff}"]],data:{}});function h(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,97,"nav",[["class","sidebar"]],null,null,null,null,null)),u["\u0275did"](1,278528,null,0,d.k,[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](2,{sidebarPushRight:0}),(l()(),u["\u0275eld"](3,0,null,null,94,"div",[["class","list-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](4,0,null,null,8,"a",[["class","list-group-item"],["routerLink","/dashboard"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,5).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u["\u0275did"](5,671744,[[2,4]],0,i.n,[i.l,i.a,d.j],{routerLink:[0,"routerLink"]},null),u["\u0275did"](6,1720320,null,2,i.m,[i.l,u.ElementRef,u.Renderer2,u.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),u["\u0275qud"](603979776,1,{links:1}),u["\u0275qud"](603979776,2,{linksWithHrefs:1}),u["\u0275pad"](9,1),(l()(),u["\u0275eld"](10,0,null,null,0,"i",[["class","fa fa-fw fa-dashboard"]],null,null,null,null,null)),(l()(),u["\u0275ted"](11,null,["\xa0"," "])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](13,0,null,null,9,"a",[["class","list-group-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,14).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u["\u0275did"](14,671744,[[4,4]],0,i.n,[i.l,i.a,d.j],{routerLink:[0,"routerLink"]},null),u["\u0275pad"](15,1),u["\u0275did"](16,1720320,null,2,i.m,[i.l,u.ElementRef,u.Renderer2,u.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),u["\u0275qud"](603979776,3,{links:1}),u["\u0275qud"](603979776,4,{linksWithHrefs:1}),u["\u0275pad"](19,1),(l()(),u["\u0275eld"](20,0,null,null,0,"i",[["class","fa fa-file-o"]],null,null,null,null,null)),(l()(),u["\u0275ted"](21,null,["\xa0"," "])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](23,0,null,null,74,"div",[["class","header-fields"]],null,null,null,null,null)),(l()(),u["\u0275eld"](24,0,null,null,3,"a",[["class","list-group-item"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.rltAndLtr()&&u),u},null,null)),(l()(),u["\u0275eld"](25,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),u["\u0275eld"](26,0,null,null,0,"i",[["class","fa fa-arrows-h"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\xa0 RTL/LTR"])),(l()(),u["\u0275eld"](28,0,null,null,36,"div",[["class","nested-menu"]],null,null,null,null,null)),(l()(),u["\u0275eld"](29,0,null,null,5,"a",[["class","list-group-item"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.addExpandClass("languages")&&u),u},null,null)),(l()(),u["\u0275eld"](30,0,null,null,4,"span",[],null,null,null,null,null)),(l()(),u["\u0275eld"](31,0,null,null,0,"i",[["class","fa fa-language"]],null,null,null,null,null)),(l()(),u["\u0275ted"](32,null,["\xa0 "," "])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](34,0,null,null,0,"b",[["class","caret"]],null,null,null,null,null)),(l()(),u["\u0275eld"](35,0,null,null,29,"li",[["class","nested"]],[[2,"expand",null]],null,null,null,null)),(l()(),u["\u0275eld"](36,0,null,null,28,"ul",[["class","submenu"]],null,null,null,null,null)),(l()(),u["\u0275eld"](37,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),u["\u0275eld"](38,0,null,null,2,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("en")&&u),u},null,null)),(l()(),u["\u0275ted"](39,null,[" "," "])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](41,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),u["\u0275eld"](42,0,null,null,2,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("fr")&&u),u},null,null)),(l()(),u["\u0275ted"](43,null,[" "," "])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](45,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),u["\u0275eld"](46,0,null,null,2,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("ur")&&u),u},null,null)),(l()(),u["\u0275ted"](47,null,[" "," "])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](49,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),u["\u0275eld"](50,0,null,null,2,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("es")&&u),u},null,null)),(l()(),u["\u0275ted"](51,null,[" "," "])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](53,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),u["\u0275eld"](54,0,null,null,2,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("it")&&u),u},null,null)),(l()(),u["\u0275ted"](55,null,[" "," "])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](57,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),u["\u0275eld"](58,0,null,null,2,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("fa")&&u),u},null,null)),(l()(),u["\u0275ted"](59,null,[" "," "])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](61,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),u["\u0275eld"](62,0,null,null,2,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("de")&&u),u},null,null)),(l()(),u["\u0275ted"](63,null,[" "," "])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](65,0,null,null,32,"div",[["class","nested-menu"]],null,null,null,null,null)),(l()(),u["\u0275eld"](66,0,null,null,3,"a",[["class","list-group-item"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.addExpandClass("profile")&&u),u},null,null)),(l()(),u["\u0275eld"](67,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),u["\u0275eld"](68,0,null,null,0,"i",[["class","fa fa-user"]],null,null,null,null,null)),(l()(),u["\u0275ted"](69,null,["\xa0 ",""])),(l()(),u["\u0275eld"](70,0,null,null,27,"li",[["class","nested"]],[[2,"expand",null]],null,null,null,null)),(l()(),u["\u0275eld"](71,0,null,null,26,"ul",[["class","submenu"]],null,null,null,null,null)),(l()(),u["\u0275eld"](72,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),u["\u0275eld"](73,0,null,null,4,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),u["\u0275eld"](74,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),u["\u0275eld"](75,0,null,null,0,"i",[["class","fa fa-fw fa-user"]],null,null,null,null,null)),(l()(),u["\u0275ted"](76,null,[" ",""])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](78,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),u["\u0275eld"](79,0,null,null,4,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),u["\u0275eld"](80,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),u["\u0275eld"](81,0,null,null,0,"i",[["class","fa fa-fw fa-envelope"]],null,null,null,null,null)),(l()(),u["\u0275ted"](82,null,[" ",""])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](84,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),u["\u0275eld"](85,0,null,null,4,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),u["\u0275eld"](86,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),u["\u0275eld"](87,0,null,null,0,"i",[["class","fa fa-fw fa-gear"]],null,null,null,null,null)),(l()(),u["\u0275ted"](88,null,[" ",""])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](90,0,null,null,7,"li",[],null,null,null,null,null)),(l()(),u["\u0275eld"](91,0,null,null,6,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0,o=l.component;return"click"===n&&(t=!1!==u["\u0275nov"](l,92).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),"click"===n&&(t=!1!==o.onLoggedout()&&t),t},null,null)),u["\u0275did"](92,671744,null,0,i.n,[i.l,i.a,d.j],{routerLink:[0,"routerLink"]},null),u["\u0275pad"](93,1),(l()(),u["\u0275eld"](94,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),u["\u0275eld"](95,0,null,null,0,"i",[["class","fa fa-fw fa-power-off"]],null,null,null,null,null)),(l()(),u["\u0275ted"](96,null,[" ",""])),u["\u0275pid"](131072,r.i,[r.j,u.ChangeDetectorRef])],function(l,n){l(n,1,0,"sidebar",l(n,2,0,n.component.isActive)),l(n,5,0,"/dashboard"),l(n,6,0,l(n,9,0,"router-link-active")),l(n,14,0,l(n,15,0,"/process-scan-tool")),l(n,16,0,l(n,19,0,"router-link-active")),l(n,92,0,l(n,93,0,"/login"))},function(l,n){var e=n.component;l(n,4,0,u["\u0275nov"](n,5).target,u["\u0275nov"](n,5).href),l(n,11,0,u["\u0275unv"](n,11,0,u["\u0275nov"](n,12).transform("Dashboard"))),l(n,13,0,u["\u0275nov"](n,14).target,u["\u0275nov"](n,14).href),l(n,21,0,u["\u0275unv"](n,21,0,u["\u0275nov"](n,22).transform("Documentation Auto Generator"))),l(n,32,0,u["\u0275unv"](n,32,0,u["\u0275nov"](n,33).transform("Language"))),l(n,35,0,"languages"===e.showMenu),l(n,39,0,u["\u0275unv"](n,39,0,u["\u0275nov"](n,40).transform("English"))),l(n,43,0,u["\u0275unv"](n,43,0,u["\u0275nov"](n,44).transform("French"))),l(n,47,0,u["\u0275unv"](n,47,0,u["\u0275nov"](n,48).transform("Urdu"))),l(n,51,0,u["\u0275unv"](n,51,0,u["\u0275nov"](n,52).transform("Spanish"))),l(n,55,0,u["\u0275unv"](n,55,0,u["\u0275nov"](n,56).transform("Italian"))),l(n,59,0,u["\u0275unv"](n,59,0,u["\u0275nov"](n,60).transform("Farsi"))),l(n,63,0,u["\u0275unv"](n,63,0,u["\u0275nov"](n,64).transform("German"))),l(n,69,0,e.username),l(n,70,0,"profile"===e.showMenu),l(n,76,0,u["\u0275unv"](n,76,0,u["\u0275nov"](n,77).transform("Profile"))),l(n,82,0,u["\u0275unv"](n,82,0,u["\u0275nov"](n,83).transform("Inbox"))),l(n,88,0,u["\u0275unv"](n,88,0,u["\u0275nov"](n,89).transform("Settings"))),l(n,91,0,u["\u0275nov"](n,92).target,u["\u0275nov"](n,92).href),l(n,96,0,u["\u0275unv"](n,96,0,u["\u0275nov"](n,97).transform("Log Out")))})}var m=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),v=u["\u0275crt"]({encapsulation:0,styles:[[".main-container[_ngcontent-%COMP%]{margin-top:56px;margin-left:235px;padding:15px;-ms-overflow-x:hidden;overflow-x:hidden;overflow-y:scroll;position:relative;overflow:hidden}@media screen and (max-width:992px){.main-container[_ngcontent-%COMP%]{margin-left:0!important}}"]],data:{}});function C(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-header",[],null,null,null,g,s)),u["\u0275did"](1,114688,null,0,c,[r.j,i.l],null,null),(l()(),u["\u0275eld"](2,0,null,null,1,"app-sidebar",[],null,null,null,h,f)),u["\u0275did"](3,114688,null,0,p,[r.j,i.l],null,null),(l()(),u["\u0275eld"](4,0,null,null,2,"section",[["class","main-container"]],null,null,null,null,null)),(l()(),u["\u0275eld"](5,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u["\u0275did"](6,212992,null,0,i.p,[i.b,u.ViewContainerRef,u.ComponentFactoryResolver,[8,null],u.ChangeDetectorRef],null,null)],function(l,n){l(n,1,0),l(n,3,0),l(n,6,0)},null)}var b=u["\u0275ccf"]("app-layout",m,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-layout",[],null,null,null,C,v)),u["\u0275did"](1,114688,null,0,m,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),M=function(){},O=e("C9m0");e.d(n,"LayoutModuleNgFactory",function(){return _});var _=u["\u0275cmf"](t,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[b]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,d.o,d.n,[u.LOCALE_ID,[2,d.w]]),u["\u0275mpd"](4608,a.a,a.a,[]),u["\u0275mpd"](1073742336,d.b,d.b,[]),u["\u0275mpd"](1073742336,i.o,i.o,[[2,i.t],[2,i.l]]),u["\u0275mpd"](1073742336,M,M,[]),u["\u0275mpd"](1073742336,r.g,r.g,[]),u["\u0275mpd"](1073742336,O.a,O.a,[]),u["\u0275mpd"](1073742336,t,t,[]),u["\u0275mpd"](1024,i.j,function(){return[[{path:"",component:m,children:[{path:"",redirectTo:"dashboard"},{path:"dashboard",loadChildren:"./dashboard/dashboard.module#DashboardModule"},{path:"charts",loadChildren:"./charts/charts.module#ChartsModule"},{path:"tables",loadChildren:"./tables/tables.module#TablesModule"},{path:"forms",loadChildren:"./form/form.module#FormModule"},{path:"bs-element",loadChildren:"./bs-element/bs-element.module#BsElementModule"},{path:"grid",loadChildren:"./grid/grid.module#GridModule"},{path:"components",loadChildren:"./bs-component/bs-component.module#BsComponentModule"},{path:"process-scan-tool",loadChildren:"./blank-page/blank-page.module#BlankPageModule"}]}]]},[])])})}}]);