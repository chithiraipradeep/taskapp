function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"1sqi":function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),u=function n(){_classCallCheck(this,n)},o=e("pMnS"),i=e("MKJQ"),a=e("sZkV"),r=e("s7LF"),s=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"transform",value:function(n){return Object.keys(n)}}]),n}(),c=function(){function n(l){_classCallCheck(this,n),this.keysPipe=l,this.config={length:4},this.onInputChange=new t.n,this.inputControls=new Array(this.config.length),this.componentKey=Math.random().toString(36).substring(2)+(new Date).getTime().toString(36)}return _createClass(n,[{key:"ngOnInit",value:function(){this.otpForm=new r.g({});for(var n=0;n<this.config.length;n++)this.otpForm.addControl(this.getControlName(n),new r.e);this.inputType=this.getInputType()}},{key:"ngAfterViewInit",value:function(){var n=this;if(!this.config.disableAutoFocus){var l=document.getElementById("c_".concat(this.componentKey));if(l){l.addEventListener("paste",(function(l){return n.handlePaste(l)}));var e=l.getElementsByClassName("otp-input")[0];e&&e.focus&&e.focus()}}}},{key:"getControlName",value:function(n){return"ctrl_".concat(n)}},{key:"ifLeftArrow",value:function(n){return this.ifKeyCode(n,37)}},{key:"ifRightArrow",value:function(n){return this.ifKeyCode(n,39)}},{key:"ifBackspaceOrDelete",value:function(n){return"Backspace"===n.key||"Delete"===n.key||this.ifKeyCode(n,8)||this.ifKeyCode(n,46)}},{key:"ifKeyCode",value:function(n,l){return(n.keyCode||n.charCode)==l}},{key:"onKeyDown",value:function(n){if(this.ifKeyCode(n,32))return!1}},{key:"onKeyUp",value:function(n,l){var e=this.appendKey("otp_".concat(l+1)),t=this.appendKey("otp_".concat(l-1));if(this.ifRightArrow(n))this.setSelected(e);else{if(!this.ifLeftArrow(n))return this.ifBackspaceOrDelete(n)&&!n.target.value?(this.setSelected(t),void this.rebuildValue()):void(n.target.value&&(this.ifValidEntry(n)&&this.setSelected(e),this.rebuildValue()));this.setSelected(t)}}},{key:"appendKey",value:function(n){return"".concat(n,"_").concat(this.componentKey)}},{key:"setSelected",value:function(n){this.focusTo(n);var l=document.getElementById(n);l&&l.setSelectionRange&&setTimeout((function(){l.setSelectionRange(0,1)}),0)}},{key:"ifValidEntry",value:function(n){var l=String.fromCharCode(n.keyCode);return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||/[a-zA-Z0-9-_]/.test(l)||this.config.allowKeyCodes&&this.config.allowKeyCodes.includes(n.keyCode)||n.keyCode>=96&&n.keyCode<=105}},{key:"focusTo",value:function(n){var l=document.getElementById(n);l&&l.focus()}},{key:"setValue",value:function(n){var l=this;if(!this.config.allowNumbersOnly||!isNaN(n))if(this.otpForm.reset(),n){n=n.toString().replace(/\s/g,""),Array.from(n).forEach((function(n,e){l.otpForm.get(l.getControlName(e))&&l.otpForm.get(l.getControlName(e)).setValue(n)}));var e=document.getElementById("c_".concat(this.componentKey)),t=n.length<this.config.length?n.length:this.config.length-1,u=e.getElementsByClassName("otp-input")[t];u&&u.focus&&u.focus(),this.rebuildValue()}else this.rebuildValue()}},{key:"rebuildValue",value:function(){var n=this,l="";this.keysPipe.transform(this.otpForm.controls).forEach((function(e){n.otpForm.controls[e].value&&(l+=n.otpForm.controls[e].value)})),this.onInputChange.emit(l)}},{key:"getInputType",value:function(){return this.config.isPasswordInput?"password":this.config.allowNumbersOnly?"tel":"text"}},{key:"handlePaste",value:function(n){var l=n.clipboardData||window.clipboardData;if(l)var e=l.getData("Text");n.stopPropagation(),n.preventDefault(),e&&this.setValue(e)}}]),n}(),b=function(){function n(l,e){_classCallCheck(this,n),this._elRef=l,this._renderer=e}return _createClass(n,[{key:"ngOnInit",value:function(){this.disabledNumberOnly||this._renderer.setAttribute(this._elRef.nativeElement,"onkeypress","return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 0")}}]),n}(),d=function n(){_classCallCheck(this,n)},g=e("SVse"),h=t.ub({encapsulation:0,styles:[".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:1px solid #c5c5c5;text-align:center;font-size:32px}.wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width:767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width:420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"],data:{}});function p(n){return t.Sb(0,[(n()(),t.wb(0,0,null,null,11,"input",[["autocomplete","off"],["maxlength","1"],["numberOnly",""]],[[8,"type",0],[8,"placeholder",0],[8,"className",0],[8,"id",0],[1,"maxlength",0],[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keydown"],[null,"keyup"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,e){var u=!0,o=n.component;return"input"===l&&(u=!1!==t.Ib(n,3)._handleInput(e.target.value)&&u),"blur"===l&&(u=!1!==t.Ib(n,3).onTouched()&&u),"compositionstart"===l&&(u=!1!==t.Ib(n,3)._compositionStart()&&u),"compositionend"===l&&(u=!1!==t.Ib(n,3)._compositionEnd(e.target.value)&&u),"keydown"===l&&(u=!1!==o.onKeyDown(e)&&u),"keyup"===l&&(u=!1!==o.onKeyUp(e,n.context.index)&&u),u}),null,null)),t.Nb(512,null,g.x,g.y,[t.l,t.v,t.H]),t.vb(2,278528,null,0,g.n,[g.x],{ngStyle:[0,"ngStyle"]},null),t.vb(3,16384,null,0,r.c,[t.H,t.l,[2,r.a]],null,null),t.vb(4,540672,null,0,r.i,[],{maxlength:[0,"maxlength"]},null),t.vb(5,540672,null,0,r.r,[],{pattern:[0,"pattern"]},null),t.Nb(1024,null,r.k,(function(n,l){return[n,l]}),[r.i,r.r]),t.Nb(1024,null,r.l,(function(n){return[n]}),[r.c]),t.vb(8,540672,null,0,r.f,[[6,r.k],[8,null],[6,r.l],[2,r.w]],{form:[0,"form"]},null),t.Nb(2048,null,r.m,null,[r.f]),t.vb(10,16384,null,0,r.n,[[4,r.m]],null,null),t.vb(11,81920,null,0,b,[t.l,t.H],{disabledNumberOnly:[0,"disabledNumberOnly"]},null)],(function(n,l){var e=l.component;n(l,2,0,e.config.inputStyles),n(l,4,0,"1"),n(l,5,0,e.config.allowNumbersOnly?"\\d*":""),n(l,8,0,e.otpForm.controls[l.context.$implicit]),n(l,11,0,!e.config.allowNumbersOnly)}),(function(n,l){var e=l.component;n(l,0,1,[e.inputType,(null==e.config?null:e.config.placeholder)||"",t.Ab(1,"otp-input ",e.config.inputClass,""),t.Ab(2,"otp_",l.context.index,"_",e.componentKey,""),t.Ib(l,4).maxlength?t.Ib(l,4).maxlength:null,t.Ib(l,5).pattern?t.Ib(l,5).pattern:null,t.Ib(l,10).ngClassUntouched,t.Ib(l,10).ngClassTouched,t.Ib(l,10).ngClassPristine,t.Ib(l,10).ngClassDirty,t.Ib(l,10).ngClassValid,t.Ib(l,10).ngClassInvalid,t.Ib(l,10).ngClassPending])}))}function m(n){return t.Sb(0,[(n()(),t.wb(0,0,null,null,5,"div",[],[[8,"className",0],[8,"id",0]],null,null,null,null)),t.Nb(512,null,g.x,g.y,[t.l,t.v,t.H]),t.vb(2,278528,null,0,g.n,[g.x],{ngStyle:[0,"ngStyle"]},null),(n()(),t.lb(16777216,null,null,2,null,p)),t.vb(4,278528,null,0,g.j,[t.T,t.P,t.u],{ngForOf:[0,"ngForOf"]},null),t.Mb(5,1)],(function(n,l){var e=l.component;n(l,2,0,e.config.containerStyles);var u=t.Rb(l,4,0,n(l,5,0,t.Ib(l.parent,0),null==e.otpForm?null:e.otpForm.controls));n(l,4,0,u)}),(function(n,l){var e=l.component;n(l,0,0,t.Ab(1,"wrapper ",e.config.containerClass,""),t.Ab(1,"c_",e.componentKey,""))}))}function v(n){return t.Sb(0,[t.Kb(0,s,[]),(n()(),t.lb(16777216,null,null,1,null,m)),t.vb(2,16384,null,0,g.k,[t.T,t.P],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,2,0,null==e.otpForm?null:e.otpForm.controls)}),null)}var f=e("mrSG"),C=e("2Rin"),y=e("H+bZ"),k=function(){function n(l,e,t,u,o){_classCallCheck(this,n),this.location=l,this.util=e,this.actionSheetController=t,this.navCtrl=u,this.apiservice=o,this.user={email:"",password:"",username:"",dob:"",phone:"",address:"",avatar:""},this.slideOpts={slidesPerView:1,allowTouchMove:!1},this.otp="",this.hideResend=!1}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"goNext",value:function(){this.slides.slideNext(500).then((function(n){return console.log(n)}))}},{key:"phoneValidation",value:function(){var n=this;if(console.log("user",this.user),""===this.user.phone||10!=this.user.phone.length)return this.util.toast("Please enter proper mobile number","danger","bottom"),!1;this.apiservice.validate_phone({phone:this.user.phone}).subscribe((function(l){console.log(l),1==l.status?(setTimeout((function(){n.hideResend=!0}),3e3),n.goNext()):n.util.toast(l.detail,"danger","bottom")}))}},{key:"prev",value:function(){this.slides.slidePrev(1e3).then((function(n){return console.log(n)}))}},{key:"back",value:function(){this.location.back()}},{key:"onOtpChange",value:function(n){console.log(n),this.otp=n}},{key:"validateOtp",value:function(){var n=this;if(""===this.otp)return this.util.toast("Please enter otp","danger","bottom"),!1;this.apiservice.validate_otp({phone:this.user.phone,otp:this.otp}).subscribe((function(l){console.log(l),1==l.status?n.goNext():n.util.toast(l.detail,"danger","bottom")}))}},{key:"password",value:function(){if(""===this.user.password)return this.util.toast("Please enter password","danger","bottom"),!1;this.goNext()}},{key:"parseDate",value:function(){var n=this.user.dob.substring(0,10);this.user.dob=n,console.log(n)}},{key:"submit",value:function(){var n=this;if(!/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(this.user.email))return this.util.toast("Please enter valid email","danger","bottom"),!1;localStorage.setItem("uid",this.user.email);var l={phone:this.user.phone,password:this.user.password,username:this.user.username,profile:{date_Of_Birth:this.user.dob,email:this.user.email,address:this.user.address}};console.log(l),this.apiservice.customerregister(l).subscribe((function(l){console.log(l),"True"==l.success?n.navCtrl.navigateRoot(["login"]):n.util.toast(l.detail,"danger","bottom")}))}},{key:"avatar",value:function(){return f.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.actionSheetController.create({header:"Choose Avtars",mode:"ios",buttons:[{text:"Gallery",icon:"image-outline",handler:function(){console.log("galley clicked")}},{text:"Camera",icon:"camera-outline",handler:function(){console.log("Share clicked")}},{text:"Cancel",icon:"close",role:"cancel",handler:function(){console.log("Cancel clicked")}}]});case 2:return l=n.sent,n.next=5,l.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"resend",value:function(){console.log("resend")}}]),n}(),w=t.ub({encapsulation:0,styles:[["ion-slides[_ngcontent-%COMP%]{height:90vh}.backBtn[_ngcontent-%COMP%]{position:absolute;top:40px;left:0}h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:var(--ion-color-secondary)!important}ion-item[_ngcontent-%COMP%]{--ion-background-color:#f3f3f3;border-radius:5px!important;margin-top:10px}.btn_class[_ngcontent-%COMP%]{color:var(--ion-color-secondary);height:50px;margin-top:20px;font-weight:600}.resend_btn[_ngcontent-%COMP%]{margin-top:20px;color:var(--ion-color-secondary)}.emailForm[_ngcontent-%COMP%]{text-align:center;width:100%}.emailForm[_ngcontent-%COMP%]   .login-logo[_ngcontent-%COMP%]{text-align:center;margin:30% auto 20px;right:0;left:0}.emailForm[_ngcontent-%COMP%]   .login-logo[_ngcontent-%COMP%]   .logo_icon[_ngcontent-%COMP%]{width:110px!important}.emailForm[_ngcontent-%COMP%]   .back_img[_ngcontent-%COMP%]{background-position:center;background-repeat:no-repeat;background-size:contain;width:95%!important;height:25vh;border:1px solid var(--ion-color-secondary);border-radius:5px}.emailForm[_ngcontent-%COMP%]   .back_img[_ngcontent-%COMP%]   .gender[_ngcontent-%COMP%]{background-position:center;background-repeat:no-repeat;background-size:contain;width:25px!important;height:25px;position:absolute;right:20px;top:10px}"]],data:{}});function I(n){return t.Sb(0,[(n()(),t.wb(0,0,null,null,2,"ion-button",[["class","resend_btn"],["expand","block"],["fill","clear"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.resend()&&t),t}),i.E,i.b)),t.vb(1,49152,null,0,a.j,[t.h,t.l,t.C],{expand:[0,"expand"],fill:[1,"fill"]},null),(n()(),t.Qb(-1,0,[" Resend "]))],(function(n,l){n(l,1,0,"block","clear")}),null)}function x(n){return t.Sb(0,[t.Ob(671088640,1,{slides:0}),(n()(),t.wb(1,0,null,null,131,"ion-content",[["class","ion-padding"]],null,null,null,i.H,i.e)),t.vb(2,49152,null,0,a.t,[t.h,t.l,t.C],null,null),(n()(),t.wb(3,0,null,0,129,"ion-slides",[["mode","md"]],null,null,null,i.ab,i.x)),t.vb(4,49152,[[1,4]],0,a.nb,[t.h,t.l,t.C],{mode:[0,"mode"],options:[1,"options"]},null),(n()(),t.wb(5,0,null,0,27,"ion-slide",[],null,null,null,i.Z,i.w)),t.vb(6,49152,null,0,a.mb,[t.h,t.l,t.C],null,null),(n()(),t.wb(7,0,null,0,3,"ion-button",[["class","backBtn"],["fill","clear"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.back()&&t),t}),i.E,i.b)),t.vb(8,49152,null,0,a.j,[t.h,t.l,t.C],{fill:[0,"fill"]},null),(n()(),t.wb(9,0,null,0,1,"ion-icon",[["color","secondary"],["name","arrow-back-outline"],["slot","start"]],null,null,null,i.N,i.k)),t.vb(10,49152,null,0,a.B,[t.h,t.l,t.C],{color:[0,"color"],name:[1,"name"]},null),(n()(),t.wb(11,0,null,0,21,"div",[["class","emailForm"]],null,null,null,null,null)),(n()(),t.wb(12,0,null,null,1,"h2",[["class","ion-text-center"]],null,null,null,null,null)),(n()(),t.Qb(-1,null,["Sign Up"])),(n()(),t.wb(14,0,null,null,3,"p",[["class","subtitle ion-text-center"]],null,null,null,null,null)),(n()(),t.Qb(-1,null,["Enter your profile detail to "])),(n()(),t.wb(16,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.Qb(-1,null,["access your account "])),(n()(),t.wb(18,0,null,null,11,"ion-item",[["lines","none"]],null,null,null,i.P,i.m)),t.vb(19,49152,null,0,a.G,[t.h,t.l,t.C],{lines:[0,"lines"]},null),(n()(),t.wb(20,0,null,0,9,"ion-input",[["maxlength","10"],["minlength","10"],["placeholder","Mobile No"],["type","tel"]],[[1,"minlength",0],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t.Ib(n,24)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Ib(n,24)._handleInputEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(o.user.phone=e)&&u),u}),i.O,i.l)),t.vb(21,540672,null,0,r.j,[],{minlength:[0,"minlength"]},null),t.vb(22,540672,null,0,r.i,[],{maxlength:[0,"maxlength"]},null),t.Nb(1024,null,r.k,(function(n,l){return[n,l]}),[r.j,r.i]),t.vb(24,16384,null,0,a.Lb,[t.l],null,null),t.Nb(1024,null,r.l,(function(n){return[n]}),[a.Lb]),t.vb(26,671744,null,0,r.q,[[8,null],[6,r.k],[8,null],[6,r.l]],{model:[0,"model"]},{update:"ngModelChange"}),t.Nb(2048,null,r.m,null,[r.q]),t.vb(28,16384,null,0,r.n,[[4,r.m]],null,null),t.vb(29,49152,null,0,a.F,[t.h,t.l,t.C],{maxlength:[0,"maxlength"],minlength:[1,"minlength"],placeholder:[2,"placeholder"],type:[3,"type"]},null),(n()(),t.wb(30,0,null,null,2,"ion-button",[["class","btn_class"],["color","secondary"],["expand","block"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.phoneValidation()&&t),t}),i.E,i.b)),t.vb(31,49152,null,0,a.j,[t.h,t.l,t.C],{color:[0,"color"],expand:[1,"expand"]},null),(n()(),t.Qb(-1,0,[" Next "])),(n()(),t.wb(33,0,null,0,21,"ion-slide",[],null,null,null,i.Z,i.w)),t.vb(34,49152,null,0,a.mb,[t.h,t.l,t.C],null,null),(n()(),t.wb(35,0,null,0,3,"ion-button",[["class","backBtn"],["fill","clear"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.prev()&&t),t}),i.E,i.b)),t.vb(36,49152,null,0,a.j,[t.h,t.l,t.C],{fill:[0,"fill"]},null),(n()(),t.wb(37,0,null,0,1,"ion-icon",[["color","secondary"],["name","arrow-back-outline"],["slot","start"]],null,null,null,i.N,i.k)),t.vb(38,49152,null,0,a.B,[t.h,t.l,t.C],{color:[0,"color"],name:[1,"name"]},null),(n()(),t.wb(39,0,null,0,15,"div",[["class","emailForm"]],null,null,null,null,null)),(n()(),t.wb(40,0,null,null,1,"h2",[["class","ion-text-center"]],null,null,null,null,null)),(n()(),t.Qb(-1,null,["Verifications"])),(n()(),t.wb(42,0,null,null,3,"p",[["class","subtitle ion-text-center"]],null,null,null,null,null)),(n()(),t.Qb(-1,null,["We sent verification code to your mobile number "])),(n()(),t.wb(44,0,null,null,1,"span",[["style","color: black;"]],null,null,null,null,null)),(n()(),t.Qb(45,null,[" "," "])),(n()(),t.wb(46,0,null,null,3,"ng-otp-input",[],null,[[null,"onInputChange"]],(function(n,l,e){var t=!0;return"onInputChange"===l&&(t=!1!==n.component.onOtpChange(e)&&t),t}),v,h)),t.vb(47,4308992,null,0,c,[s],{config:[0,"config"]},{onInputChange:"onInputChange"}),t.Lb(48,{width:0,height:1}),t.Lb(49,{length:0,inputStyles:1}),(n()(),t.wb(50,0,null,null,2,"ion-button",[["class","btn_class"],["color","secondary"],["expand","block"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.validateOtp()&&t),t}),i.E,i.b)),t.vb(51,49152,null,0,a.j,[t.h,t.l,t.C],{color:[0,"color"],expand:[1,"expand"]},null),(n()(),t.Qb(-1,0,[" Verify "])),(n()(),t.lb(16777216,null,null,1,null,I)),t.vb(54,16384,null,0,g.k,[t.T,t.P],{ngIf:[0,"ngIf"]},null),(n()(),t.wb(55,0,null,0,20,"ion-slide",[],null,null,null,i.Z,i.w)),t.vb(56,49152,null,0,a.mb,[t.h,t.l,t.C],null,null),(n()(),t.wb(57,0,null,0,3,"ion-button",[["class","backBtn"],["fill","clear"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.back()&&t),t}),i.E,i.b)),t.vb(58,49152,null,0,a.j,[t.h,t.l,t.C],{fill:[0,"fill"]},null),(n()(),t.wb(59,0,null,0,1,"ion-icon",[["color","secondary"],["name","arrow-back-outline"],["slot","start"]],null,null,null,i.N,i.k)),t.vb(60,49152,null,0,a.B,[t.h,t.l,t.C],{color:[0,"color"],name:[1,"name"]},null),(n()(),t.wb(61,0,null,0,14,"div",[["class","emailForm"]],null,null,null,null,null)),(n()(),t.wb(62,0,null,null,1,"p",[["class","subtitle ion-text-center"]],null,null,null,null,null)),(n()(),t.Qb(-1,null,["Create Strong Password for your account "])),(n()(),t.wb(64,0,null,null,8,"ion-item",[["lines","none"]],null,null,null,i.P,i.m)),t.vb(65,49152,null,0,a.G,[t.h,t.l,t.C],{lines:[0,"lines"]},null),(n()(),t.wb(66,0,null,0,6,"ion-input",[["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t.Ib(n,67)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Ib(n,67)._handleInputEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(o.user.password=e)&&u),u}),i.O,i.l)),t.vb(67,16384,null,0,a.Lb,[t.l],null,null),t.Nb(1024,null,r.l,(function(n){return[n]}),[a.Lb]),t.vb(69,671744,null,0,r.q,[[8,null],[8,null],[8,null],[6,r.l]],{model:[0,"model"]},{update:"ngModelChange"}),t.Nb(2048,null,r.m,null,[r.q]),t.vb(71,16384,null,0,r.n,[[4,r.m]],null,null),t.vb(72,49152,null,0,a.F,[t.h,t.l,t.C],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t.wb(73,0,null,null,2,"ion-button",[["class","btn_class"],["color","secondary"],["expand","block"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.password()&&t),t}),i.E,i.b)),t.vb(74,49152,null,0,a.j,[t.h,t.l,t.C],{color:[0,"color"],expand:[1,"expand"]},null),(n()(),t.Qb(-1,0,[" Next "])),(n()(),t.wb(76,0,null,0,56,"ion-slide",[],null,null,null,i.Z,i.w)),t.vb(77,49152,null,0,a.mb,[t.h,t.l,t.C],null,null),(n()(),t.wb(78,0,null,0,3,"ion-button",[["class","backBtn"],["fill","clear"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.prev()&&t),t}),i.E,i.b)),t.vb(79,49152,null,0,a.j,[t.h,t.l,t.C],{fill:[0,"fill"]},null),(n()(),t.wb(80,0,null,0,1,"ion-icon",[["color","secondary"],["name","arrow-back-outline"],["slot","start"]],null,null,null,i.N,i.k)),t.vb(81,49152,null,0,a.B,[t.h,t.l,t.C],{color:[0,"color"],name:[1,"name"]},null),(n()(),t.wb(82,0,null,0,50,"div",[["class","emailForm"]],null,null,null,null,null)),(n()(),t.wb(83,0,null,null,1,"div",[["class","login-logo"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.avatar()&&t),t}),null,null)),(n()(),t.wb(84,0,null,null,0,"img",[["alt","yoga"],["class","logo_icon"],["src","assets/imgs/account.png"]],null,null,null,null,null)),(n()(),t.wb(85,0,null,null,8,"ion-item",[["lines","none"]],null,null,null,i.P,i.m)),t.vb(86,49152,null,0,a.G,[t.h,t.l,t.C],{lines:[0,"lines"]},null),(n()(),t.wb(87,0,null,0,6,"ion-input",[["placeholder","Username"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t.Ib(n,88)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Ib(n,88)._handleInputEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(o.user.username=e)&&u),u}),i.O,i.l)),t.vb(88,16384,null,0,a.Lb,[t.l],null,null),t.Nb(1024,null,r.l,(function(n){return[n]}),[a.Lb]),t.vb(90,671744,null,0,r.q,[[8,null],[8,null],[8,null],[6,r.l]],{model:[0,"model"]},{update:"ngModelChange"}),t.Nb(2048,null,r.m,null,[r.q]),t.vb(92,16384,null,0,r.n,[[4,r.m]],null,null),t.vb(93,49152,null,0,a.F,[t.h,t.l,t.C],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t.wb(94,0,null,null,8,"ion-item",[["lines","none"]],null,null,null,i.P,i.m)),t.vb(95,49152,null,0,a.G,[t.h,t.l,t.C],{lines:[0,"lines"]},null),(n()(),t.wb(96,0,null,0,6,"ion-datetime",[["displayFormat","MMM DD YYYY"],["placeholder","Date of birth"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t.Ib(n,97)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Ib(n,97)._handleChangeEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(o.user.dob=e)&&u),"ionChange"===l&&(u=!1!==o.parseDate()&&u),u}),i.I,i.f)),t.vb(97,16384,null,0,a.Kb,[t.l],null,null),t.Nb(1024,null,r.l,(function(n){return[n]}),[a.Kb]),t.vb(99,671744,null,0,r.q,[[8,null],[8,null],[8,null],[6,r.l]],{model:[0,"model"]},{update:"ngModelChange"}),t.Nb(2048,null,r.m,null,[r.q]),t.vb(101,16384,null,0,r.n,[[4,r.m]],null,null),t.vb(102,49152,null,0,a.u,[t.h,t.l,t.C],{displayFormat:[0,"displayFormat"],placeholder:[1,"placeholder"]},null),(n()(),t.wb(103,0,null,null,8,"ion-item",[["lines","none"]],null,null,null,i.P,i.m)),t.vb(104,49152,null,0,a.G,[t.h,t.l,t.C],{lines:[0,"lines"]},null),(n()(),t.wb(105,0,null,0,6,"ion-input",[["placeholder","Email id"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t.Ib(n,106)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Ib(n,106)._handleInputEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(o.user.email=e)&&u),u}),i.O,i.l)),t.vb(106,16384,null,0,a.Lb,[t.l],null,null),t.Nb(1024,null,r.l,(function(n){return[n]}),[a.Lb]),t.vb(108,671744,null,0,r.q,[[8,null],[8,null],[8,null],[6,r.l]],{model:[0,"model"]},{update:"ngModelChange"}),t.Nb(2048,null,r.m,null,[r.q]),t.vb(110,16384,null,0,r.n,[[4,r.m]],null,null),t.vb(111,49152,null,0,a.F,[t.h,t.l,t.C],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t.wb(112,0,null,null,8,"ion-item",[["lines","none"]],null,null,null,i.P,i.m)),t.vb(113,49152,null,0,a.G,[t.h,t.l,t.C],{lines:[0,"lines"]},null),(n()(),t.wb(114,0,null,0,6,"ion-input",[["placeholder","Phone Number"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t.Ib(n,115)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Ib(n,115)._handleIonChange(e.target)&&u),"ngModelChange"===l&&(u=!1!==(o.user.phone=e)&&u),u}),i.O,i.l)),t.vb(115,16384,null,0,a.Gb,[t.l],null,null),t.Nb(1024,null,r.l,(function(n){return[n]}),[a.Gb]),t.vb(117,671744,null,0,r.q,[[8,null],[8,null],[8,null],[6,r.l]],{model:[0,"model"]},{update:"ngModelChange"}),t.Nb(2048,null,r.m,null,[r.q]),t.vb(119,16384,null,0,r.n,[[4,r.m]],null,null),t.vb(120,49152,null,0,a.F,[t.h,t.l,t.C],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t.wb(121,0,null,null,8,"ion-item",[],null,null,null,i.P,i.m)),t.vb(122,49152,null,0,a.G,[t.h,t.l,t.C],null,null),(n()(),t.wb(123,0,null,0,6,"ion-textarea",[["placeholder","Enter Your Address"],["rows","3"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t.Ib(n,124)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Ib(n,124)._handleInputEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(o.user.address=e)&&u),u}),i.db,i.A)),t.vb(124,16384,null,0,a.Lb,[t.l],null,null),t.Nb(1024,null,r.l,(function(n){return[n]}),[a.Lb]),t.vb(126,671744,null,0,r.q,[[8,null],[8,null],[8,null],[6,r.l]],{model:[0,"model"]},{update:"ngModelChange"}),t.Nb(2048,null,r.m,null,[r.q]),t.vb(128,16384,null,0,r.n,[[4,r.m]],null,null),t.vb(129,49152,null,0,a.ub,[t.h,t.l,t.C],{placeholder:[0,"placeholder"],rows:[1,"rows"]},null),(n()(),t.wb(130,0,null,null,2,"ion-button",[["class","btn_class"],["color","secondary"],["expand","block"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.submit()&&t),t}),i.E,i.b)),t.vb(131,49152,null,0,a.j,[t.h,t.l,t.C],{color:[0,"color"],expand:[1,"expand"]},null),(n()(),t.Qb(-1,0,[" Submit "]))],(function(n,l){var e=l.component;n(l,4,0,"md",e.slideOpts),n(l,8,0,"clear"),n(l,10,0,"secondary","arrow-back-outline"),n(l,19,0,"none"),n(l,21,0,"10"),n(l,22,0,"10"),n(l,26,0,e.user.phone),n(l,29,0,"10","10","Mobile No","tel"),n(l,31,0,"secondary","block"),n(l,36,0,"clear"),n(l,38,0,"secondary","arrow-back-outline");var t=n(l,49,0,4,n(l,48,0,"60px","60px"));n(l,47,0,t),n(l,51,0,"secondary","block"),n(l,54,0,e.hideResend),n(l,58,0,"clear"),n(l,60,0,"secondary","arrow-back-outline"),n(l,65,0,"none"),n(l,69,0,e.user.password),n(l,72,0,"Password","password"),n(l,74,0,"secondary","block"),n(l,79,0,"clear"),n(l,81,0,"secondary","arrow-back-outline"),n(l,86,0,"none"),n(l,90,0,e.user.username),n(l,93,0,"Username","text"),n(l,95,0,"none"),n(l,99,0,e.user.dob),n(l,102,0,"MMM DD YYYY","Date of birth"),n(l,104,0,"none"),n(l,108,0,e.user.email),n(l,111,0,"Email id","text"),n(l,113,0,"none"),n(l,117,0,e.user.phone),n(l,120,0,"Phone Number","number"),n(l,126,0,e.user.address),n(l,129,0,"Enter Your Address","3"),n(l,131,0,"secondary","block")}),(function(n,l){var e=l.component;n(l,20,0,t.Ib(l,21).minlength?t.Ib(l,21).minlength:null,t.Ib(l,22).maxlength?t.Ib(l,22).maxlength:null,t.Ib(l,28).ngClassUntouched,t.Ib(l,28).ngClassTouched,t.Ib(l,28).ngClassPristine,t.Ib(l,28).ngClassDirty,t.Ib(l,28).ngClassValid,t.Ib(l,28).ngClassInvalid,t.Ib(l,28).ngClassPending),n(l,45,0,e.user.phone),n(l,66,0,t.Ib(l,71).ngClassUntouched,t.Ib(l,71).ngClassTouched,t.Ib(l,71).ngClassPristine,t.Ib(l,71).ngClassDirty,t.Ib(l,71).ngClassValid,t.Ib(l,71).ngClassInvalid,t.Ib(l,71).ngClassPending),n(l,87,0,t.Ib(l,92).ngClassUntouched,t.Ib(l,92).ngClassTouched,t.Ib(l,92).ngClassPristine,t.Ib(l,92).ngClassDirty,t.Ib(l,92).ngClassValid,t.Ib(l,92).ngClassInvalid,t.Ib(l,92).ngClassPending),n(l,96,0,t.Ib(l,101).ngClassUntouched,t.Ib(l,101).ngClassTouched,t.Ib(l,101).ngClassPristine,t.Ib(l,101).ngClassDirty,t.Ib(l,101).ngClassValid,t.Ib(l,101).ngClassInvalid,t.Ib(l,101).ngClassPending),n(l,105,0,t.Ib(l,110).ngClassUntouched,t.Ib(l,110).ngClassTouched,t.Ib(l,110).ngClassPristine,t.Ib(l,110).ngClassDirty,t.Ib(l,110).ngClassValid,t.Ib(l,110).ngClassInvalid,t.Ib(l,110).ngClassPending),n(l,114,0,t.Ib(l,119).ngClassUntouched,t.Ib(l,119).ngClassTouched,t.Ib(l,119).ngClassPristine,t.Ib(l,119).ngClassDirty,t.Ib(l,119).ngClassValid,t.Ib(l,119).ngClassInvalid,t.Ib(l,119).ngClassPending),n(l,123,0,t.Ib(l,128).ngClassUntouched,t.Ib(l,128).ngClassTouched,t.Ib(l,128).ngClassPristine,t.Ib(l,128).ngClassDirty,t.Ib(l,128).ngClassValid,t.Ib(l,128).ngClassInvalid,t.Ib(l,128).ngClassPending)}))}var _=t.sb("app-register",k,(function(n){return t.Sb(0,[(n()(),t.wb(0,0,null,null,1,"app-register",[],null,null,null,x,w)),t.vb(1,114688,null,0,k,[g.g,C.a,a.a,a.Fb,y.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),P=e("iInd"),M=function n(){_classCallCheck(this,n)};e.d(l,"RegisterPageModuleNgFactory",(function(){return N}));var N=t.tb(u,[],(function(n){return t.Fb([t.Gb(512,t.k,t.eb,[[8,[o.a,_]],[3,t.k],t.A]),t.Gb(4608,g.m,g.l,[t.w,[2,g.A]]),t.Gb(4608,r.v,r.v,[]),t.Gb(4608,a.c,a.c,[t.C,t.g]),t.Gb(4608,a.Eb,a.Eb,[a.c,t.k,t.s]),t.Gb(4608,a.Ib,a.Ib,[a.c,t.k,t.s]),t.Gb(4608,r.d,r.d,[]),t.Gb(4608,s,s,[]),t.Gb(1073742336,g.b,g.b,[]),t.Gb(1073742336,r.u,r.u,[]),t.Gb(1073742336,r.h,r.h,[]),t.Gb(1073742336,a.Ab,a.Ab,[]),t.Gb(1073742336,r.s,r.s,[]),t.Gb(1073742336,d,d,[]),t.Gb(1073742336,P.o,P.o,[[2,P.t],[2,P.m]]),t.Gb(1073742336,M,M,[]),t.Gb(1073742336,u,u,[]),t.Gb(1024,P.k,(function(){return[[{path:"",component:k}]]}),[])])}))}}]);