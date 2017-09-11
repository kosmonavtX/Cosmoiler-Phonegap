webpackJsonp([1],[,,,,,,,,,,,,,,function(t,e,n){"use strict";e.a=[{path:"/about/",component:n(67)},{path:"/trip/",component:n(73)},{path:"/time/",component:n(72)},{path:"/manual/",component:n(69)},{path:"/ctrlpump/",component:n(68)},{path:"/params/",component:n(70)},{path:"/system/",component:n(71)}]},function(t,e,n){"use strict";function s(){return console.log(document.location.host),document.location.host.indexOf("localhost")+1?"192.168.1.233":""===document.location.host?"192.168.4.1":document.location.host}var i=n(1),a=n.n(i),o=n(8),r=n.n(o),c=n(7),l=n(83),p=n(32),m=n.n(p);c.a.use(l.a);var u=m.a.connect("ws://"+s()+"/ws"),f=(setInterval(function(){1!==f.state.connection.readyState&&console.log("Unable to communicate with the WebSocket server.")},3e3),new l.a.Store({state:{modejson:{get:"mode",mode:0,preset:0},config:{manual:{pump:{dpms:null,dpdp:null}},pumping:{time:null,pump:{dpms:null,dpdp:null}},trip:{smart:{adxl:!1,prediction:null},sensor:{extsp:!1,imp:16},presets:[{trip_m:2e3,dp_num:5,imptripm:0},{trip_m:1500,dp_num:2,imptripm:0},{trip_m:null,dp_num:null,imptripm:0},{trip_m:null,dp_num:null,imptripm:0}],pump:{dpms:null,dpdp:null},wheel:{dia:17,width:150,height:70,lenght:null}},time:{smart:{adxl:!1,trail:!0,prediction:null},presets:[{dp_time:null,dp_num:null,trail:null},{dp_time:null,dp_num:null,trail:null},{dp_time:null,dp_num:null,trail:null},{dp_time:null,dp_num:null,trail:null}],pump:{dpms:null,dpdp:null}}},status:{wifi:{connect:!1,ssid:null,psw:null}},params:{preset:null,voltage:0,sp:0,imp:0,odo:0,speed:0,maxspeed:0,avgspeed:0,kvolt:1,non:0},connection:u,connect:!1},mutations:{SET_CONFIG:function(t,e){t.config=e,console.log("GET_CONFIG")},CHNG_CONFIG:function(t){t.config=r()({},t.config,{post:"config.json"}),console.log("CHNG_CONFIG")},SET_MODE:function(t,e){t.modejson=e,console.log("SET_MODE")},CHNG_MODE:function(t,e){t.modejson.mode=e.mode,t.modejson=r()({},t.modejson,{post:"mode.json"}),console.log(e)},SET_VER:function(t,e){t.ver=e},SET_WIFI:function(t,e){t.status=e},SET_PARAMS:function(t,e){t.params=e},CONNECT:function(t,e){t.connect=e},RECONNECT:function(t,e){t.connection=e,t.connection.onmessage=console.log(t.connection)},UPD_TRIP_TRIPM:function(t,e){console.log("UPD_TRIP"),t.config.trip.presets[e.preset].trip_m=1e3*e.data},UPD_TRIP_DPNUM:function(t,e){t.config.trip.presets[e.preset].dp_num=e.data},UPD_TRIP_DPMS:function(t,e){t.config.trip.pump.dpms=e.data},UPD_TRIP_DPDP:function(t,e){t.config.trip.pump.dpdp=e.data},UPD_TRIP_WHEEL_D:function(t,e){t.config.trip.wheel.dia=e.data},UPD_TRIP_WHEEL_W:function(t,e){t.config.trip.wheel.width=e.data},UPD_TRIP_WHEEL_H:function(t,e){t.config.trip.wheel.height=e.data},UPD_TRIP_SENSOR_EXTSP:function(t,e){t.config.trip.sensor.extsp=e.data},UPD_TRIP_SENSOR_IMP:function(t,e){t.config.trip.sensor.imp=e.data},CALC_IMPTRIPM:function(t){console.log("CALC_IMPTRIPM");var e=25.4*t.config.trip.wheel.dia,n=t.config.trip.wheel.height*t.config.trip.wheel.width/100,s=3.14159*(e+2*n);t.config.trip.wheel.lenght=s;for(var i=0;i<2;i++){var a=t.config.trip.sensor.imp*t.config.trip.presets[i].trip_m/(t.config.trip.wheel.lenght/1e3);t.config.trip.presets[i].imptripm=parseInt(a.toFixed(),10)}},UPD_TIME_DPTIME:function(t,e){console.log(e),t.config.time.presets[e.preset].dp_time=e.data},UPD_TIME_DPNUM:function(t,e){t.config.time.presets[e.preset].dp_num=e.data},UPD_TIME_DPMS:function(t,e){t.config.time.pump.dpms=e},UPD_TIME_DPDP:function(t,e){t.config.time.pump.dpdp=e},UPD_MAN_DPMS:function(t,e){t.config.manual.pump.dpms=e},UPD_MAN_DPDP:function(t,e){t.config.manual.pump.dpdp=e},UPD_UPDATE_SSID:function(t,e){t.status.wifi.ssid=e},UPD_UPDATE_PSW:function(t,e){t.status.wifi.psw=e},CHNG_UPDATE:function(t){t.status=r()({},t.status,{post:"status.json"})}},actions:{changeConfig:function(t){(0,t.commit)("CHNG_CONFIG"),m.a.send(f.state.connection,a()(f.state.config))},changeMode:function(t,e){(0,t.commit)("CHNG_MODE",e),m.a.send(f.state.connection,a()(f.state.modejson)),m.a.send(f.state.connection,a()({get:"mode"}))},changeStatus:function(t){(0,t.commit)("CHNG_UPDATE"),m.a.send(f.state.connection,a()(f.state.status))},Update:function(){console.log("UPDATE"),m.a.send(f.state.connection,a()({get:"update"}))},reconnect:function(t){t.commit;console.log("reconnect")}}}));e.a=f,f.state.connection.onmessage=function(t){try{f.commit("CONNECT",!0);var e=JSON.parse(t.data);console.log(e),"config"in e?f.commit("SET_CONFIG",e):"mode"in e?f.commit("SET_MODE",e):"sn"in e?f.commit("SET_VER",e):"wifi"in e?f.commit("SET_WIFI",e):"params"in e&&f.commit("SET_PARAMS",e)}catch(e){console.log("Error, either a bug or this isn't valid JSON: ",t.data)}},f.state.connection.onerror=function(t){console.log("Sorry, but there's a problem with your connection or the server is down."),console.log(t),f.commit("CONNECT",!1)},f.state.connection.onclose=function(t){f.commit("CONNECT",!1),t.wasClean?console.log("OK close connection"):(console.log("Error close connection!"),f.commit("CONNECT",!1),setTimeout(function(){u=m.a.connect("ws://"+s()+"/ws")},5e3))},f.state.connection.onopen=function(){console.log("Connection to socket server opened."),f.commit("CONNECT",!0)}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,n){var s=n(0)(n(23),n(78),null,null);t.exports=s.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{messonoff:["","","",""]}},computed:{badgeName1:function(){return 1==this.$store.state.modejson.mode?(this.messonoff[0]="ВЫКЛ","ВКЛЮЧЕНО"):(this.messonoff[0]="ВКЛ","")},badgeName2:function(){return 2==this.$store.state.modejson.mode?(this.messonoff[1]="ВЫКЛ","ВКЛЮЧЕНО"):(this.messonoff[1]="ВКЛ","")},badgeName3:function(){return 3==this.$store.state.modejson.mode?(this.messonoff[2]="ВЫКЛ","ВКЛЮЧЕНО"):(this.messonoff[2]="ВКЛ","")},badgeName4:function(){return 4==this.$store.state.modejson.mode?(this.messonoff[3]="ВЫКЛ","ВКЛЮЧЕНО"):(this.messonoff[3]="ВКЛ","")}},methods:{ctrlMode:function(t){if(console.log(this.$store.state.modejson.mode),null!=this.$store.state.modejson.mode)switch(t.currentTarget.id){case"trip":1===this.$store.state.modejson.mode?this.$store.dispatch("changeMode",{mode:0}):this.$store.dispatch("changeMode",{mode:1});break;case"time":2===this.$store.state.modejson.mode?this.$store.dispatch("changeMode",{mode:0}):this.$store.dispatch("changeMode",{mode:2});break;case"manual":3===this.$store.state.modejson.mode?this.$store.dispatch("changeMode",{mode:0}):this.$store.dispatch("changeMode",{mode:3});break;case"pumping":4===this.$store.state.modejson.mode?this.$store.dispatch("changeMode",{mode:0}):this.$store.dispatch("changeMode",{mode:4})}},reconnect:function(){this.$store.dispatch("reconnect")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{obj:this.$store.state.ver}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(8),i=n.n(s),a=n(1),o=n.n(a),r={OUT:0,IN:1,properites:{0:{name:"OUT"},1:{name:"IN"}}};e.default={data:function(){return{pump:{dpms:150,dpdp:800,state:0,dir:r.OUT},dirname:r,stylediv:"margin-top: 6px"}},created:function(){this.$store.state.connection.send(o()({get:"work",p:[2]}))},methods:{send:function(){this.$store.state.connection.send(o()(i()({},this.pump,{get:"pump"})))},on:function(){this.pump.state=1,this.send()},off:function(){this.pump.state=0,this.send()},reverse:function(){this.pump.dir===r.OUT?this.pump.dir=r.IN:this.pump.dir=r.OUT,this.send()}},beforeDestroy:function(){this.$store.state.connection.send(o()({get:"work",p:[0]}))}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{back:function(){}},beforeDestroy:function(){this.$store.dispatch("changeConfig")},computed:{param1:{get:function(){return this.$store.state.config.manual.pump.dpms},set:function(t){this.$store.commit("UPD_MAN_DPMS",t)}},param2:{get:function(){return this.$store.state.config.manual.pump.dpdp},set:function(t){this.$store.commit("UPD_MAN_DPDP",t)}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),i=n.n(s);e.default={data:function(){return{interval:null}},created:function(){this.fetchParams()},computed:{NamePreset:function(){switch(this.$store.state.params.preset){case 0:return"Город";case 1:return"Трасса"}},Speed:function(){return this.$store.state.params.speed+" км/ч"},AvgSpeed:function(){return this.$store.state.params.avgspeed+" км/ч"},Odo:function(){return Number(this.$store.state.params.odo/1e3).toFixed(1)+" км"},Voltage:function(){console.info(this.$store.state.params.voltage);var t=this.$store.state.params.voltage/1024;return t<0&&(t=0),t/=this.$store.state.params.kvolt,Number(t).toFixed(2)+" В"},Sp:function(){return this.$store.state.params.sp+""},Imp:function(){return this.$store.state.params.imp+""},Non:function(){return this.$store.state.params.non+""}},methods:{fetchParams:function(){var t=this;this.interval=setInterval(function(){t.$store.state.connection.send(i()({get:"params"}))},750)}},beforeDestroy:function(){clearInterval(this.interval)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{cautionStyle:"font-size: 18px; font-weight: bold; color: #e91e63;",stylediv1:"margin-top: 6px"}},methods:{saveSSID:function(){this.$store.dispatch("changeStatus")},updateFW:function(){""===this.$store.state.status.wifi.ssid?this.$f7.alert("Введите название точки доступа и пароль!","Cosmoiler"):(this.saveSSID(),this.$store.dispatch("Update"),this.$router.back())},clearSSID:function(){this.$store.commit("UPD_UPDATE_SSID",""),this.$store.commit("UPD_UPDATE_PSW",""),this.saveSSID()}},computed:{ssid:{get:function(){return this.$store.state.status.wifi.ssid},set:function(t){this.$store.commit("UPD_UPDATE_SSID",t)}},psw:{get:function(){return this.$store.state.status.wifi.psw},set:function(t){this.$store.commit("UPD_UPDATE_PSW",t)}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{stylediv1:"margin-top: 6px"}},methods:{back:function(){console.log("back")}},beforeDestroy:function(){this.$store.dispatch("changeConfig")},computed:{param1:{get:function(){return this.$store.state.config.time.presets[0].dp_time},set:function(t){this.$store.commit({type:"UPD_TIME_DPTIME",data:t,preset:0})}},param2:{get:function(){return this.$store.state.config.time.presets[0].dp_num},set:function(t){this.$store.commit({type:"UPD_TIME_DPNUM",data:t,preset:0})}},param3:{get:function(){return this.$store.state.config.time.presets[1].dp_time},set:function(t){this.$store.commit({type:"UPD_TIME_DPTIME",data:t,preset:1})}},param4:{get:function(){return this.$store.state.config.time.presets[1].dp_num},set:function(t){this.$store.commit({type:"UPD_TIME_DPNUM",data:t,preset:1})}},param5:{get:function(){return this.$store.state.config.time.pump.dpms},set:function(t){this.$store.commit("UPD_TIME_DPMS",t)}},param6:{get:function(){return this.$store.state.config.time.pump.dpdp},set:function(t){this.$store.commit("UPD_TIME_DPDP",t)}}},components:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),i=n.n(s);e.default={data:function(){return{interval:null,params:{sp:0},stylediv1:"margin-top: 6px"}},computed:{param1:{get:function(){return this.$store.state.config.trip.presets[0].trip_m/1e3},set:function(t){this.$store.commit({type:"UPD_TRIP_TRIPM",preset:0,data:t})}},param2:{get:function(){return this.$store.state.config.trip.presets[0].dp_num},set:function(t){this.$store.commit({type:"UPD_TRIP_DPNUM",preset:0,data:t})}},param3:{get:function(){return this.$store.state.config.trip.presets[1].trip_m/1e3},set:function(t){this.$store.commit({type:"UPD_TRIP_TRIPM",preset:1,data:t})}},param4:{get:function(){return this.$store.state.config.trip.presets[1].dp_num},set:function(t){this.$store.commit({type:"UPD_TRIP_DPNUM",preset:1,data:t})}},param5:{get:function(){return this.$store.state.config.trip.pump.dpms},set:function(t){this.$store.commit({type:"UPD_TRIP_DPMS",data:t})}},param6:{get:function(){return this.$store.state.config.trip.pump.dpdp},set:function(t){this.$store.commit({type:"UPD_TRIP_DPDP",data:t})}},param7:{get:function(){return this.$store.state.config.trip.wheel.dia},set:function(t){this.$store.commit({type:"UPD_TRIP_WHEEL_D",data:parseInt(t)})}},param8:{get:function(){return this.$store.state.config.trip.wheel.width},set:function(t){this.$store.commit({type:"UPD_TRIP_WHEEL_W",data:t})}},param9:{get:function(){return this.$store.state.config.trip.wheel.height},set:function(t){this.$store.commit({type:"UPD_TRIP_WHEEL_H",data:t})}},param10:{get:function(){return this.$store.state.config.trip.sensor.extsp},set:function(t){this.$store.commit({type:"UPD_TRIP_SENSOR_EXTSP",data:t})}},param11:{get:function(){return this.$store.state.config.trip.sensor.imp},set:function(t){this.$store.commit({type:"UPD_TRIP_SENSOR_IMP",data:t})}}},methods:{AccordOpen:function(){var t=this;this.$store.state.connection.send(i()({get:"work",p:[1]})),this.interval=setInterval(function(){t.$store.state.connection.send(i()({get:"params"})),t.$store.commit({type:"UPD_TRIP_SENSOR_IMP",data:t.$store.state.params.sp})},300)},AccordClose:function(){clearInterval(this.interval),this.$store.state.connection.send(i()({get:"work",p:[0]}))},onChangePwr:function(t){}},beforeDestroy:function(){console.log("BACK"),clearInterval(this.interval),this.$store.state.connection.send(i()({get:"work",p:[0]})),this.$store.commit("CALC_IMPTRIPM"),this.$store.dispatch("changeConfig")},components:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(7),i=n(21),a=(n.n(i),n(20)),o=n.n(a),r=n(17),c=(n.n(r),n(16)),l=(n.n(c),n(19)),p=(n.n(l),n(18)),m=(n.n(p),n(14)),u=n(22),f=n.n(u),d=n(15);s.a.use(o.a);new s.a({el:"#app",template:"<app/>",store:d.a,framework7:{root:"#app",pushState:!0,routes:m.a,material:!0,materialPageLoadDelay:20},data:function(){return{}},components:{app:f.a}})},function(t,e){function n(t,e){setTimeout(function(){if(1===t.readyState)return console.log("Connection is made"),void(null!=e&&e());console.log("wait for connection..."),n(t,e)},500)}var s=window.WebSocket||window.MozWebSocket;e.connect=function(t){if(s){return new s(t)}console.log("Please use a newer browser to access collaboration features.")},e.send=function(t,e){n(t,function(){console.log("message sent!!!"),t.send(e)})},e.disconnect=function(t){t.close()}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){var s=n(0)(n(24),n(77),null,null);t.exports=s.exports},function(t,e,n){n(65);var s=n(0)(n(25),n(80),null,null);t.exports=s.exports},function(t,e,n){n(62);var s=n(0)(n(26),n(74),null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(n(27),n(79),null,null);t.exports=s.exports},function(t,e,n){n(66);var s=n(0)(n(28),n(81),null,null);t.exports=s.exports},function(t,e,n){n(64);var s=n(0)(n(29),n(76),null,null);t.exports=s.exports},function(t,e,n){n(63);var s=n(0)(n(30),n(75),null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",[n("f7-navbar",{attrs:{title:"Настройки","back-link":"Back",sliding:""},on:{"back-click":t.back}}),t._v(" "),n("f7-list",{attrs:{accordion:""}},[n("f7-list-item",{staticClass:"settings",attrs:{"accordion-item":"",title:"Настройки насоса",media:"<i class='icon icon-pump'>"}},[n("f7-accordion-content",[n("f7-list",{attrs:{"media-list":""}},[n("f7-list-item",[n("div",{slot:"inner"},[n("div",{staticStyle:{"margin-top":"6px"}},[n("f7-label",{staticClass:"labelin"},[t._v("Время вкл: "+t._s(t.param1))]),t._v(" "),n("f7-input",{attrs:{type:"range",min:"50",max:"500",step:"10"},model:{value:t.param1,callback:function(e){t.param1=e},expression:"param1"}}),t._v(" "),n("f7-label",{staticClass:"labelin"},[t._v("Время выкл: "+t._s(t.param2))]),t._v(" "),n("f7-input",{attrs:{type:"range",min:2*t.param1,max:4*t.param1,step:"10"},model:{value:t.param2,callback:function(e){t.param2=e},expression:"param2"}})],1)])])],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",[n("f7-navbar",{attrs:{title:"Настройки","back-link":"Back",sliding:""}}),t._v(" "),n("f7-list",{attrs:{accordion:""}},[n("f7-list-item",{staticClass:"settings",attrs:{"accordion-item":"",title:"Предустановки",media:"<i class='icon icon-presets' >"}},[n("f7-accordion-content",[n("f7-list",{attrs:{"media-list":""}},[n("f7-list-item",{staticClass:"presets-icon",attrs:{title:"Город",after:"<i class='icon icon-building'>"}},[n("div",{slot:"inner"},[n("div",{style:t.stylediv1},[n("f7-label",{staticClass:"labelin"},[t._v("Расстояние: "+t._s(t.param1)+" км")]),t._v(" "),n("f7-input",{attrs:{type:"range",id:"0",min:"1",max:"20",step:"1",placeholder:"Введите расстояние между включением"},model:{value:t.param1,callback:function(e){t.param1=t._n(e)},expression:"param1"}}),t._v(" "),n("f7-label",{staticClass:"labelin"},[t._v("Капли: "+t._s(t.param2))]),t._v(" "),n("f7-input",{attrs:{type:"range",id:"1",min:"1",max:"10",step:"1",placeholder:"Количество капель за цикл"},model:{value:t.param2,callback:function(e){t.param2=t._n(e)},expression:"param2"}})],1)])]),t._v(" "),n("f7-list-item",{staticClass:"presets-icon",attrs:{title:"ТРАССА",after:"<i class='icon icon-highway'>"}},[n("div",{slot:"inner"},[n("div",{style:t.stylediv1},[n("f7-label",{staticClass:"labelin"},[t._v("Расстояние: "+t._s(t.param3)+" км")]),t._v(" "),n("f7-input",{attrs:{type:"range",id:"2",min:"1",max:"50",step:"1",placeholder:"Введите расстояние между включением"},model:{value:t.param3,callback:function(e){t.param3=t._n(e)},expression:"param3"}}),t._v(" "),n("f7-label",{staticClass:"labelin"},[t._v("Капли: "+t._s(t.param4)+" ")]),t._v(" "),n("f7-input",{attrs:{type:"range",id:"3",min:"1",max:"10",step:"1",placeholder:"Количество капель за цикл"},model:{value:t.param4,callback:function(e){t.param4=t._n(e)},expression:"param4"}})],1)])])],1)],1)],1),t._v(" "),n("f7-list-item",{staticClass:"settings",attrs:{"accordion-item":"",title:"Настройки насоса",media:"<i class='icon icon-pump' >"}},[n("f7-accordion-content",[n("f7-list",{attrs:{"media-list":""}},[n("f7-list-item",[n("div",{slot:"inner"},[n("div",{style:t.stylediv1},[n("f7-label",{staticClass:"labelin"},[t._v("Время вкл: "+t._s(t.param5)+" мсек")]),t._v(" "),n("f7-input",{attrs:{type:"range",min:"50",max:"500",step:"10"},model:{value:t.param5,callback:function(e){t.param5=e},expression:"param5"}}),t._v(" "),n("f7-label",{staticClass:"labelin"},[t._v("Время выкл: "+t._s(t.param6)+" мсек")]),t._v(" "),n("f7-input",{attrs:{type:"range",min:2*t.param5,max:4*t.param5,step:"10"},model:{value:t.param6,callback:function(e){t.param6=e},expression:"param6"}})],1)])])],1)],1)],1),t._v(" "),n("f7-list-item",{staticClass:"settings",attrs:{"accordion-item":"",title:"Колесо (с датчиком)",media:"<i class='icon icon-gauge2'>"}},[n("f7-accordion-content",[n("f7-list",{attrs:{"media-list":""}},[n("f7-list-item",[n("div",{slot:"inner"},[n("div",{style:t.stylediv1},[n("f7-label",{staticClass:"labelin"},[t._v("Диаметр:")]),t._v(" "),n("f7-input",{attrs:{type:"select"},model:{value:t.param7,callback:function(e){t.param7=e},expression:"param7"}},[n("option",{domProps:{value:16}},[t._v('16"')]),t._v(" "),n("option",{domProps:{value:17}},[t._v('17"')]),t._v(" "),n("option",{domProps:{value:18}},[t._v('18"')]),t._v(" "),n("option",{domProps:{value:19}},[t._v('19"')]),t._v(" "),n("option",{domProps:{value:21}},[t._v('21"')])]),t._v(" "),n("f7-label",{staticClass:"labelin"},[t._v("Ширина:")]),t._v(" "),n("f7-input",{attrs:{type:"number",placeholder:"Ширина шины"},model:{value:t.param8,callback:function(e){t.param8=t._n(e)},expression:"param8"}}),t._v(" "),n("f7-label",{staticClass:"labelin"},[t._v("Профиль:")]),t._v(" "),n("f7-input",{attrs:{type:"number",placeholder:"Высота шины в %"},model:{value:t.param9,callback:function(e){t.param9=t._n(e)},expression:"param9"}})],1)])])],1)],1)],1),t._v(" "),n("f7-list-item",{staticClass:"settings",attrs:{"accordion-item":"",title:"Датчик",media:"<i class='icon icon-gauge2'>"},on:{"accordion:close":t.AccordClose}},[n("f7-accordion-content",[n("f7-list",{attrs:{"media-list":""}},[n("f7-list-item",[n("div",{slot:"inner"},[n("f7-label",{staticClass:"labelin"},[t._v("Питание внешнего датчика")]),t._v(" "),n("f7-input",{attrs:{type:"switch"},on:{change:t.onChangePwr},model:{value:t.param10,callback:function(e){t.param10=e},expression:"param10"}}),t._v(" "),n("div",{style:t.stylediv1},[n("f7-label",{staticClass:"labelin"},[t._v("Импульсов на оборот:")]),t._v(" "),n("f7-input",{attrs:{type:"number",placeholder:"Введите число импульсов на оборот"},model:{value:t.param11,callback:function(e){t.param11=t._n(e)},expression:"param11"}})],1),t._v(" "),n("p"),t._v(" "),n("f7-button",{attrs:{big:"",fill:""},on:{click:t.AccordOpen}},[t._v("Сброс")])],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",[n("f7-navbar",{attrs:{title:"Настройки","back-link":"Back",sliding:""},on:{"back-click":t.back}}),t._v(" "),n("f7-list",{attrs:{accordion:""}},[n("f7-list-item",{staticClass:"settings",attrs:{"accordion-item":"",title:"Предустановки",media:"<i class='icon icon-presets'>",subtitle:"Смазывать через заданное расстояние..."}},[n("f7-accordion-content",[n("f7-list",{attrs:{"media-list":""}},[n("f7-list-item",{staticClass:"presets-icon",attrs:{title:"Город",after:"<i class='icon icon-building'>"}},[n("div",{slot:"inner"},[n("div",{style:t.stylediv1},[n("f7-label",{staticClass:"labelin"},[t._v("Вемя: "+t._s(t.param1)+" сек")]),t._v(" "),n("f7-input",{attrs:{type:"range",min:"10",max:"600",step:"10",placeholder:"Введите время между включениями"},model:{value:t.param1,callback:function(e){t.param1=t._n(e)},expression:"param1"}}),t._v(" "),n("f7-label",{staticClass:"labelin"},[t._v("Капли: "+t._s(t.param2)+" ")]),t._v(" "),n("f7-input",{attrs:{type:"range",min:"1",max:"10",step:"1",placeholder:"Количество капель за цикл"},model:{value:t.param2,callback:function(e){t.param2=t._n(e)},expression:"param2"}})],1)])]),t._v(" "),n("f7-list-item",{staticClass:"presets-icon",attrs:{title:"ТРАССА",after:"<i class='icon icon-highway'>"}},[n("div",{slot:"inner"},[n("div",{style:t.stylediv1},[n("f7-label",{staticClass:"labelin"},[t._v("Время: "+t._s(t.param3)+" сек")]),t._v(" "),n("f7-input",{attrs:{type:"range",min:"10",max:"600",step:"10",placeholder:"Введите время между включениями"},model:{value:t.param3,callback:function(e){t.param3=t._n(e)},expression:"param3"}}),t._v(" "),n("f7-label",{staticClass:"labelin"},[t._v("Капли: "+t._s(t.param4)+" ")]),t._v(" "),n("f7-input",{attrs:{type:"range",min:"1",max:"10",step:"1",placeholder:"Количество капель за цикл"},model:{value:t.param4,callback:function(e){t.param4=t._n(e)},expression:"param4"}})],1)])]),t._v(" "),t._e()],1)],1)],1),t._v(" "),n("f7-list-item",{staticClass:"settings",attrs:{"accordion-item":"",title:"Настройки насоса",media:"<i class='icon icon-pump'>"}},[n("f7-accordion-content",[n("f7-list",{attrs:{"media-list":""}},[n("f7-list-item",[n("div",{slot:"inner"},[n("div",{style:t.stylediv1},[n("f7-label",{staticClass:"labelin"},[t._v("Время вкл: "+t._s(t.param5)+" мсек ")]),t._v(" "),n("f7-input",{attrs:{type:"range",min:"50",max:"500",step:"10"},model:{value:t.param5,callback:function(e){t.param5=e},expression:"param5"}}),t._v(" "),n("f7-label",{staticClass:"labelin"},[t._v("Время выкл: "+t._s(t.param6)+" мсек")]),t._v(" "),n("f7-input",{attrs:{type:"range",min:2*t.param5,max:4*t.param5,step:"10"},model:{value:t.param6,callback:function(e){t.param6=e},expression:"param6"}})],1)])])],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",[n("f7-navbar",{attrs:{title:"О системе","back-link":"Back",sliding:""}}),t._v(" "),n("f7-block",{attrs:{inner:""}},[n("p",[t._v("S/N: "+t._s(t.obj.sn))]),t._v(" "),n("p",[t._v("Firmware version: "+t._s(t.obj.fw.major)+"."+t._s(t.obj.fw.minor)+"."+t._s(t.obj.fw.build))]),t._v(" "),n("p",[t._v("HW version: rev."+t._s(t.obj.hw))])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("f7-panel",{attrs:{right:"",cover:"",layout:"dark"}},[n("f7-view",{attrs:{id:"right-panel-view","navbar-through":"","dynamic-navbar":!0}},[t.$theme.ios?n("f7-navbar",{attrs:{sliding:""}}):t._e(),t._v(" "),n("f7-pages",[n("f7-page",[t.$theme.material?n("f7-navbar",{attrs:{sliding:""}}):t._e(),t._v(" "),n("f7-list",[n("f7-list-item",{attrs:{link:"/params/","link-view":"#main-view",title:"Параметры","link-close-panel":""}}),t._v(" "),n("f7-list-item",{attrs:{link:"/ctrlpump/","link-view":"#main-view","link-close-panel":"",title:"Управление насосом"}}),t._v(" "),n("f7-list-item",{attrs:{link:"/system/","link-view":"#main-view",title:"Система","link-close-panel":""}}),t._v(" "),n("f7-list-item",{attrs:{link:"/about/",title:"О Cosmoiler"}})],1)],1)],1)],1)],1),t._v(" "),n("f7-views",[n("f7-view",{attrs:{id:"main-view","navbar-through":"","dynamic-navbar":!0,main:""}},[t.$theme.ios?n("f7-navbar",[n("f7-nav-left",[n("f7-link",{attrs:{icon:"icon-bars","open-panel":"left"}})],1),t._v(" "),n("f7-nav-center",{attrs:{sliding:""}},[t._v("Cosmoiler")]),t._v(" "),n("f7-nav-right",[n("f7-link",{attrs:{icon:"icon-bars","open-panel":"right"}})],1)],1):t._e(),t._v(" "),n("f7-pages",[n("f7-page",[t.$theme.material?n("f7-navbar",[n("f7-nav-left"),t._v(" "),n("f7-nav-center",{attrs:{sliding:""}},[t._v("Cosmoiler")]),t._v(" "),this.$store.state.connect?n("f7-nav-right",[n("f7-link",{attrs:{icon:"icon-bars","open-panel":"right"}})],1):t._e()],1):t._e(),t._v(" "),this.$store.state.connect?n("div",[n("f7-block-title",[t._v("Выберите режим работы ")]),t._v(" "),n("f7-list",{attrs:{"media-list":""}},[n("f7-list-item",{attrs:{swipeout:"",title:"По пробегу...",media:"<i class='icon icon-meter'></i>",link:"#",badge:t.badgeName1,"badge-color":"green",subtitle:"Смазывать через заданное расстояние..."}},[n("f7-swipeout-actions",[n("f7-swipeout-button",{attrs:{close:"",color:"purple",id:"trip"},on:{click:function(e){t.ctrlMode(e)}}},[t._v(t._s(t.messonoff[0]))]),t._v(" "),n("f7-swipeout-button",{attrs:{close:"",href:"/trip/",color:"teal"}},[t._v("Настройки")])],1)],1),t._v(" "),n("f7-list-item",{attrs:{swipeout:"",title:"По времени...",media:"<i class='icon icon-time'></i>",link:"#",badge:t.badgeName2,"badge-color":"green",subtitle:"Смазывать через заданное время..."}},[n("f7-swipeout-actions",[n("f7-swipeout-button",{attrs:{close:"",color:"purple",id:"time"},on:{click:function(e){t.ctrlMode(e)}}},[t._v(t._s(t.messonoff[1]))]),t._v(" "),n("f7-swipeout-button",{attrs:{close:"",href:"/time/",color:"teal"}},[t._v("Настройки")])],1)],1),t._v(" "),n("f7-list-item",{attrs:{swipeout:"",title:"Вручную...",media:"<i class='icon icon-right-hand'></i>",link:"#",badge:t.badgeName3,"badge-color":"green",subtitle:"Смазывать вручную..."}},[n("f7-swipeout-actions",[n("f7-swipeout-button",{attrs:{close:"",color:"purple",id:"manual"},on:{click:function(e){t.ctrlMode(e)}}},[t._v(t._s(t.messonoff[2]))]),t._v(" "),n("f7-swipeout-button",{attrs:{close:"",href:"/manual/",color:"teal"}},[t._v("Настройки")])],1)],1)],1)],1):n("div",{staticClass:"preload"},[n("f7-grid",[n("f7-col",{attrs:{width:"100"}},[n("p",[t._v("Подключение... ")])]),t._v(" "),n("f7-col",{attrs:{width:"100"}},[n("f7-preloader",{attrs:{color:"blue",size:"40px"}})],1)],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",[n("f7-navbar",{attrs:{title:"Параметры","back-link":"Back",sliding:""}}),t._v(" "),1===this.$store.state.modejson.mode?n("f7-grid",{attrs:{"no-gutter":""}},[n("f7-col",[n("f7-card",{attrs:{title:"Режим",content:t.NamePreset}})],1)],1):t._e(),t._v(" "),1===this.$store.state.modejson.mode?n("f7-grid",{attrs:{"no-gutter":""}},[n("f7-col",[n("f7-card",{attrs:{title:"Скорость",content:t.Speed}})],1),t._v(" "),n("f7-col",[n("f7-card",{attrs:{title:"Ср. скорость",content:t.AvgSpeed}})],1)],1):t._e(),t._v(" "),1===this.$store.state.modejson.mode?n("f7-grid",{attrs:{"no-gutter":""}},[n("f7-col",[n("f7-card",{attrs:{title:"Одометр",content:t.Odo}})],1),t._v(" "),n("f7-col",[n("f7-card",{attrs:{title:"Датчик",content:t.Imp}})],1)],1):t._e(),t._v(" "),n("f7-grid",{attrs:{"no-gutter":""}},[n("f7-col",[n("f7-card",{attrs:{title:"Насос",content:t.Non}},[n("f7-button",[t._v("Сброс")])],1)],1),t._v(" "),n("f7-col",[n("f7-card",{attrs:{title:"напряжение",content:t.Voltage}})],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",[n("f7-navbar",{attrs:{title:"Управление насосом","back-link":"Back",sliding:""}}),t._v(" "),n("f7-list",{attrs:{"media-list":""}},[n("f7-list-item",{attrs:{title:"Насос",after:"<i class='icon icon-pump'>"}},[n("div",{slot:"inner"},[n("div",{style:t.stylediv},[n("f7-label",{staticClass:"labelin"},[t._v("Время вкл: "+t._s(t.pump.dpms)+" мсек")]),t._v(" "),n("f7-input",{attrs:{type:"range",min:"100",max:"1000",step:"10"},model:{value:t.pump.dpms,callback:function(e){t.pump.dpms=e},expression:"pump.dpms"}}),t._v(" "),n("f7-label",{staticClass:"labelin"},[t._v("Время выкл: "+t._s(t.pump.dpdp)+" мсек")]),t._v(" "),n("f7-input",{attrs:{type:"range",min:50,max:2e3,step:"10",value:t.pump.dpdp},model:{value:t.pump.dpdp,callback:function(e){t.pump.dpdp=e},expression:"pump.dpdp"}})],1)]),t._v(" "),n("f7-grid",[n("f7-col",{attrs:{width:"50"}},[n("p",[n("f7-button",{attrs:{big:"",raised:"",fill:""},on:{click:t.on}},[t._v("Старт")])],1)]),t._v(" "),n("f7-col",{attrs:{width:"50"}},[n("p",[n("f7-button",{attrs:{big:"",raised:"",fill:""},on:{click:t.off}},[t._v("Стоп")])],1)]),t._v(" "),n("f7-col",{attrs:{width:"100"}},[n("p",[n("f7-button",{attrs:{raised:"",fill:""},on:{click:t.reverse}},[t._v("Реверс ("+t._s(t.dirname.properites[t.pump.dir].name)+")")])],1)])],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",[n("f7-navbar",{attrs:{title:"Системные настройки","back-link":"Back",sliding:""}}),t._v(" "),n("f7-list",{attrs:{"media-list":""}},[n("f7-list-item",{attrs:{title:"Подключение WiFi",after:"<i class='icon icon-wifi-ap'>"}},[n("div",{slot:"inner"},[n("div",{style:t.stylediv1},[n("f7-label",{staticClass:"labelin"},[t._v("SSID")]),t._v(" "),n("f7-input",{attrs:{type:"text",placeholder:"Введите имя точки доступа"},model:{value:t.ssid,callback:function(e){t.ssid=e},expression:"ssid"}}),t._v(" "),n("f7-label",{staticClass:"labelin"},[t._v("Пароль")]),t._v(" "),n("f7-input",{attrs:{type:"password",placeholder:"Пароль"},model:{value:t.psw,callback:function(e){t.psw=e},expression:"psw"}})],1)]),t._v(" "),n("f7-grid",[n("f7-col",{attrs:{width:"50"}},[n("p",[n("f7-button",{attrs:{big:"",raised:"",fill:""},on:{click:t.saveSSID}},[t._v("Сохранить")])],1)]),t._v(" "),n("f7-col",{attrs:{width:"50"}},[n("p",[n("f7-button",{attrs:{big:"",raised:"",fill:""},on:{click:t.clearSSID}},[t._v("Сброс SSID")])],1)])],1),t._v(" "),n("f7-grid",[n("f7-col",{attrs:{width:"100"}},[n("p",[n("f7-button",{attrs:{big:"",raised:"",color:"red",fill:""},on:{click:t.updateFW}},[t._v("Обновить ПО")])],1)])],1),t._v(" "),n("f7-block-title",{style:t.cautionStyle},[t._v("Внимание!")]),t._v(" "),n("f7-block",{attrs:{"tablet-inset":""}},[n("f7-block",{attrs:{inner:""}},[n("p",[t._v("Перед обновлением ПО обязательно необходимо ввести данные точки доступа, через которую имеется выход в интернет.")])])],1)],1)],1)],1)},staticRenderFns:[]}}],[31]);