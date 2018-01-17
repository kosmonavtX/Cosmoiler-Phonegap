webpackJsonp([1],[,,,,,,,,,,,,,function(t,e,s){"use strict";e.a=[{path:"/about/",component:s(71)},{path:"/trip/",component:s(78)},{path:"/time/",component:s(77)},{path:"/manual/",component:s(74)},{path:"/ctrlpump/",component:s(72)},{path:"/params/",component:s(75)},{path:"/system/",component:s(76)},{path:"/debug/",component:s(73)}]},function(t,e,s){"use strict";function n(){return console.log(document.location.host),document.location.host.indexOf("localhost")+1?"192.168.1.233":""===document.location.host?"192.168.4.1":document.location.host}var i=s(1),a=s.n(i),o=s(34),r=s.n(o),c=s(8),l=s(89),p=s(32),m=s.n(p);c.a.use(l.a);var f=m.a.connect("ws://"+n()+"/ws"),d=(setInterval(function(){1!==d.state.connection.readyState&&("192.168.4.1"!=n()&&(d.state.connect=!0),console.log("Unable to communicate with the WebSocket server."))},3e3),new l.a.Store({state:{modejson:{mode:0,preset:0},config:{gnss:!0,pump:{dpms:null,dpdp:null},pumping:{time:null,pump:{dpms:null,dpdp:null}},trip:{smart:{adxl:!1,prediction:null},sensor:{gnss:!1,extsp:!1,imp:16},presets:[{trip_m:2e3,dp_num:5,imptripm:0},{trip_m:1500,dp_num:2,imptripm:0}],wheel:{dia:17,width:150,height:70,lenght:null}},time:{smart:{adxl:!1,trail:!0,prediction:null},presets:[{dp_time:null,dp_num:null,trail:null},{dp_time:null,dp_num:null,trail:null}]},manual:{pump:{dpms:null,dpdp:null}}},system:{bright:32,wifi:{connect:!1,ssid:null,psw:null}},params:{preset:null,voltage:0,sp:0,imp:0,odo:0,speed:0,maxspeed:0,avgspeed:0,kvolt:1,non:0,remains:0},debug:["234",4544],connection:f,connect:!1},mutations:{SET_CONFIG:function(t,e){t.config=e},CHNG_CONFIG:function(t){},SET_MODE:function(t,e){t.modejson=e},CHNG_MODE:function(t,e){t.modejson.mode=e.mode,console.log(e)},SET_VER:function(t,e){t.ver=e},SET_SYSTEM:function(t,e){t.system=e},SET_PARAMS:function(t,e){t.params=e},CONNECT:function(t,e){t.connect=e},RECONNECT:function(t,e){t.connection=e,t.connection.onmessage=console.log(t.connection)},PUSH_DEBUG:function(t,e){t.debug.push(e)},UPD_TRIP_TRIPM:function(t,e){t.config.trip.presets[e.preset].trip_m=1e3*e.data},UPD_TRIP_DPNUM:function(t,e){t.config.trip.presets[e.preset].dp_num=e.data},UPD_TRIP_DPMS:function(t,e){t.config.pump.dpms=e.data},UPD_TRIP_DPDP:function(t,e){t.config.pump.dpdp=e.data},UPD_TRIP_WHEEL_D:function(t,e){t.config.trip.wheel.dia=e.data},UPD_TRIP_WHEEL_W:function(t,e){t.config.trip.wheel.width=e.data},UPD_TRIP_WHEEL_H:function(t,e){t.config.trip.wheel.height=e.data},UPD_TRIP_SENSOR_EXTSP:function(t,e){t.config.trip.sensor.extsp=e.data},UPD_TRIP_SENSOR_IMP:function(t,e){t.config.trip.sensor.imp=e.data},CALC_IMPTRIPM:function(t){console.log("CALC_IMPTRIPM");var e=25.4*t.config.trip.wheel.dia,s=t.config.trip.wheel.height*t.config.trip.wheel.width/100,n=3.14159*(e+2*s);t.config.trip.wheel.lenght=n;for(var i=0;i<2;i++){var a=t.config.trip.sensor.imp*t.config.trip.presets[i].trip_m/(t.config.trip.wheel.lenght/1e3);t.config.trip.presets[i].imptripm=parseInt(a.toFixed(),10)}},SET_SENSOR_GNSS:function(t){t.config.trip.sensor.gnss=!0},SET_SENSOR_IMP:function(t){t.config.trip.sensor.gnss=!1},UPD_TIME_DPTIME:function(t,e){console.log(e),t.config.time.presets[e.preset].dp_time=e.data},UPD_TIME_DPNUM:function(t,e){t.config.time.presets[e.preset].dp_num=e.data},UPD_TIME_DPMS:function(t,e){t.config.pump.dpms=e},UPD_TIME_DPDP:function(t,e){t.config.pump.dpdp=e},UPD_MAN_DPMS:function(t,e){t.config.manual.pump.dpms=e},UPD_MAN_DPDP:function(t,e){t.config.manual.pump.dpdp=e},UPD_UPDATE_SSID:function(t,e){t.system.wifi.ssid=e},UPD_UPDATE_PSW:function(t,e){t.system.wifi.psw=e},UPD_SYS_BRIGHT:function(t,e){t.system.bright=e},CHNG_SYSTEM:function(t){t.system={cmd:"post",param:["/system.json",r()({},t.system)]}}},actions:{changeConfig:function(t){(0,t.commit)("CHNG_CONFIG"),m.a.send(d.state.connection,a()({cmd:"post",param:["/config.json",r()({},d.state.config)]}))},changeMode:function(t,e){(0,t.commit)("CHNG_MODE",e),m.a.send(d.state.connection,a()({cmd:"post",param:["/mode.json",r()({},d.state.modejson)]})),m.a.send(d.state.connection,a()({cmd:"get",param:["/mode.json"]}))},changeSystem:function(t){t.commit;m.a.send(d.state.connection,a()({cmd:"post",param:["/system.json",r()({},d.state.system)]}))},Update:function(){console.log("UPDATE"),m.a.send(d.state.connection,a()({cmd:"update"}))},Bright:function(t){m.a.send(d.state.connection,a()({cmd:"bright",param:d.state.system.bright}))},reconnect:function(t){t.commit;console.log("reconnect")}}}));e.a=d,d.state.connection.onmessage=function(t){try{d.commit("CONNECT",!0);var e=JSON.parse(t.data);console.log(e),"config"in e?d.commit("SET_CONFIG",e):"mode"in e?d.commit("SET_MODE",e):"sn"in e?d.commit("SET_VER",e):"wifi"in e?d.commit("SET_SYSTEM",e):"voltage"in e&&d.commit("SET_PARAMS",e)}catch(e){console.log("Error, either a bug or this isn't valid JSON: ",t.data)}},d.state.connection.onerror=function(t){console.log("Sorry, but there's a problem with your connection or the server is down."),console.log(t),d.commit("CONNECT",!1)},d.state.connection.onclose=function(t){d.commit("CONNECT",!1),t.wasClean?console.log("OK close connection"):(console.log("Error close connection!"),d.commit("CONNECT",!1),setTimeout(function(){f=m.a.connect("ws://"+n()+"/ws")},5e3))},d.state.connection.onopen=function(){console.log("Connection to socket server opened."),d.commit("CONNECT",!0)}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,s){var n=s(0)(s(22),s(82),null,null);t.exports=n.exports},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{messonoff:["","","",""],styleVer:"font-size:12px; margin-top: 5px",ver:"v2.1"}},computed:{badgeName1:function(){return 1==this.$store.state.modejson.mode?(this.messonoff[0]="ВЫКЛ","ВКЛЮЧЕНО"):(this.messonoff[0]="ВКЛ","")},badgeName2:function(){return 2==this.$store.state.modejson.mode?(this.messonoff[1]="ВЫКЛ","ВКЛЮЧЕНО"):(this.messonoff[1]="ВКЛ","")},badgeName3:function(){return 3==this.$store.state.modejson.mode?(this.messonoff[2]="ВЫКЛ","ВКЛЮЧЕНО"):(this.messonoff[2]="ВКЛ","")},badgeName4:function(){return 4==this.$store.state.modejson.mode?(this.messonoff[3]="ВЫКЛ","ВКЛЮЧЕНО"):(this.messonoff[3]="ВКЛ","")}},methods:{ctrlMode:function(t){if(console.log(this.$store.state.modejson.mode),null!=this.$store.state.modejson.mode)switch(t.currentTarget.id){case"trip":1===this.$store.state.modejson.mode?this.$store.dispatch("changeMode",{mode:0}):this.$store.dispatch("changeMode",{mode:1});break;case"time":2===this.$store.state.modejson.mode?this.$store.dispatch("changeMode",{mode:0}):this.$store.dispatch("changeMode",{mode:2});break;case"manual":3===this.$store.state.modejson.mode?this.$store.dispatch("changeMode",{mode:0}):this.$store.dispatch("changeMode",{mode:3});break;case"pumping":4===this.$store.state.modejson.mode?this.$store.dispatch("changeMode",{mode:0}):this.$store.dispatch("changeMode",{mode:4})}},reconnect:function(){this.$store.dispatch("reconnect")}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{obj:this.$store.state.ver}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(1),i=s.n(n),a={OUT:0,IN:1,properites:{0:{name:"OUT"},1:{name:"IN"}}};e.default={data:function(){return{pump:{dpms:500,dpdp:500,state:0,dir:a.OUT},dirname:a,stylediv:"margin-top: 6px",sizeIconPump:40}},created:function(){this.$store.state.connection.send(i()({cmd:"work",param:2}))},methods:{send:function(){this.$store.state.connection.send(i()({cmd:"pump",param:[this.pump.state,this.pump.dpms,this.pump.dpdp,this.pump.dir]}))},on:function(){this.pump.state=1,this.send()},off:function(){this.pump.state=0,this.send()},reverse:function(){this.pump.dir===a.OUT?this.pump.dir=a.IN:this.pump.dir=a.OUT,this.send()}},beforeDestroy:function(){this.$store.state.connection.send(i()({cmd:"work",param:0}))}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},created:function(){this.items.push("123"),this.items.push("45678")}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{back:function(){}},beforeDestroy:function(){this.$store.dispatch("changeConfig")},computed:{param1:{get:function(){return this.$store.state.config.manual.pump.dpms},set:function(t){this.$store.commit("UPD_MAN_DPMS",t)}},param2:{get:function(){return this.$store.state.config.manual.pump.dpdp},set:function(t){this.$store.commit("UPD_MAN_DPDP",t)}}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(1),i=s.n(n);e.default={data:function(){return{interval:null,sensor_footer:null,mode:null}},created:function(){this.fetchParams()},computed:{NamePreset:function(){switch(this.$store.state.modejson.mode){case 1:this.mode="ПО ПРОБЕГУ";break;case 2:this.mode="ПО ВРЕМЕНИ";break;case 3:this.mode="РУЧНОЕ"}switch(this.$store.state.params.preset){case 0:return"Город";case 1:return"Трасса"}},Speed:function(){return this.$store.state.params.speed+" км/ч"},AvgSpeed:function(){return this.$store.state.params.avgspeed+" км/ч (среднее)"},Odo:function(){return Number(this.$store.state.params.odo/1e3).toFixed(1)+" км"},Voltage:function(){console.info(this.$store.state.params.voltage);var t=this.$store.state.params.voltage/1024;return t<0&&(t=0),t/=this.$store.state.params.kvolt,Number(t).toFixed(2)+" В"},Sp:function(){return this.$store.state.params.sp+""},Imp:function(){return this.$store.state.params.imp+""},Non:function(){return this.$store.state.params.non+""},Remains:function(){var t=this.$store.state.params.imp,e=this.$store.state.config.trip.sensor.imp,s=this.$store.state.config.trip.wheel.lenght;return Number(t*s/e/1e3).toFixed(0)+" м"},TypeSensor:function(){return!0===this.$store.state.config.trip.sensor.gps?(this.sensor_footer=this.$store.state.params.lat+"d "+this.$store.state.params.lon,"ГНСС"):(this.sensor_footer=this.$store.state.params.imp,2===this.$store.state.modejson.mode?(this.sensor_footer=this.$store.state.config.time.presets[0].dp_time+" сек","Таймер"):"Импульсный")}},methods:{fetchParams:function(){var t=this;this.interval=setInterval(function(){t.$store.state.connection.send(i()({cmd:"telemetry"}))},750)}},beforeDestroy:function(){clearInterval(this.interval)}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{cautionStyle:"font-size: 18px; font-weight: bold; color: #e91e63; margin-bottom",stylediv1:"margin-top: 6px",styledivBright:"margin-top: 0px"}},methods:{saveSSID:function(){this.$store.dispatch("changeSystem")},updateFW:function(){""===this.$store.state.system.wifi.ssid?this.$f7.alert("Введите название точки доступа и пароль!","Cosmoiler"):(this.$store.dispatch("Update"),this.$router.back())},clearSSID:function(){this.$store.commit("UPD_UPDATE_SSID",""),this.$store.commit("UPD_UPDATE_PSW",""),this.saveSSID()}},beforeDestroy:function(){this.$store.dispatch("changeSystem")},computed:{ssid:{get:function(){return this.$store.state.system.wifi.ssid},set:function(t){this.$store.commit("UPD_UPDATE_SSID",t)}},psw:{get:function(){return this.$store.state.system.wifi.psw},set:function(t){this.$store.commit("UPD_UPDATE_PSW",t)}},param1:{get:function(){},set:function(t){console.log(t),this.$store.commit("UPD_SYS_BRIGHT",t),this.$store.dispatch("Bright",t)}},param2:{get:function(){return(this.$store.state.system.bright*(100/255)).toFixed(0)}}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{stylediv1:"margin-top: 6px"}},methods:{back:function(){}},beforeDestroy:function(){this.$store.dispatch("changeConfig")},computed:{param1:{get:function(){return this.$store.state.config.time.presets[0].dp_time},set:function(t){this.$store.commit({type:"UPD_TIME_DPTIME",data:t,preset:0})}},param2:{get:function(){return this.$store.state.config.time.presets[0].dp_num},set:function(t){this.$store.commit({type:"UPD_TIME_DPNUM",data:t,preset:0})}},param3:{get:function(){return this.$store.state.config.time.presets[1].dp_time},set:function(t){this.$store.commit({type:"UPD_TIME_DPTIME",data:t,preset:1})}},param4:{get:function(){return this.$store.state.config.time.presets[1].dp_num},set:function(t){this.$store.commit({type:"UPD_TIME_DPNUM",data:t,preset:1})}},param5:{get:function(){return this.$store.state.config.pump.dpms},set:function(t){this.$store.commit("UPD_TIME_DPMS",t)}},param6:{get:function(){return this.$store.state.config.pump.dpdp},set:function(t){this.$store.commit("UPD_TIME_DPDP",t)}}},components:{}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(1),i=s.n(n);e.default={data:function(){return{interval:null,params:{sp:0},stylediv1:"margin-top: 6px",stylefooter_p:"text-transform: initial; font-weight: 600"}},computed:{param1:{get:function(){return this.$store.state.config.trip.presets[0].trip_m/1e3},set:function(t){this.$store.commit({type:"UPD_TRIP_TRIPM",preset:0,data:t})}},param2:{get:function(){return this.$store.state.config.trip.presets[0].dp_num},set:function(t){this.$store.commit({type:"UPD_TRIP_DPNUM",preset:0,data:t})}},param3:{get:function(){return this.$store.state.config.trip.presets[1].trip_m/1e3},set:function(t){this.$store.commit({type:"UPD_TRIP_TRIPM",preset:1,data:t})}},param4:{get:function(){return this.$store.state.config.trip.presets[1].dp_num},set:function(t){this.$store.commit({type:"UPD_TRIP_DPNUM",preset:1,data:t})}},param5:{get:function(){return this.$store.state.config.pump.dpms},set:function(t){this.$store.commit({type:"UPD_TRIP_DPMS",data:t})}},param6:{get:function(){return this.$store.state.config.pump.dpdp},set:function(t){this.$store.commit({type:"UPD_TRIP_DPDP",data:t})}},param7:{get:function(){return this.$store.state.config.trip.wheel.dia},set:function(t){this.$store.commit({type:"UPD_TRIP_WHEEL_D",data:parseInt(t)})}},param8:{get:function(){return this.$store.state.config.trip.wheel.width},set:function(t){this.$store.commit({type:"UPD_TRIP_WHEEL_W",data:t})}},param9:{get:function(){return this.$store.state.config.trip.wheel.height},set:function(t){this.$store.commit({type:"UPD_TRIP_WHEEL_H",data:t})}},param10:{get:function(){return this.$store.state.config.trip.sensor.extsp},set:function(t){this.$store.commit({type:"UPD_TRIP_SENSOR_EXTSP",data:t})}},param11:{get:function(){return this.$store.state.config.trip.sensor.imp},set:function(t){this.$store.commit({type:"UPD_TRIP_SENSOR_IMP",data:t})}},param12:{get:function(){return this.$store.state.config.trip.sensor.gnss&&this.$store.state.config.gnss}},param13:{get:function(){return this.$store.state.config.gnss}}},methods:{AccordOpen:function(){var t=this;this.$store.state.connection.send(i()({cmd:"work",param:1})),this.interval=setInterval(function(){t.$store.state.connection.send(i()({cmd:"telemetry"})),t.$store.commit({type:"UPD_TRIP_SENSOR_IMP",data:t.$store.state.params.sp})},300)},AccordClose:function(){console.log("Accordion close\n",this.interval),clearInterval(this.interval),this.$store.state.connection.send(i()({cmd:"work",param:0}))},onChangePwr:function(t){},onSetTypeSensor:function(t){switch(t){case 1:this.$store.commit("SET_SENSOR_GNSS");break;case 2:this.$store.commit("SET_SENSOR_IMP")}}},beforeDestroy:function(){console.log("BACK"),clearInterval(this.interval),this.$store.state.connection.send(i()({cmd:"work",param:0})),this.$store.commit("CALC_IMPTRIPM"),this.$store.dispatch("changeConfig")},components:{}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(8),i=s(20),a=(s.n(i),s(19)),o=s.n(a),r=s(16),c=(s.n(r),s(15)),l=(s.n(c),s(18)),p=(s.n(l),s(17)),m=(s.n(p),s(13)),f=s(21),d=s.n(f),u=s(14);n.a.use(o.a);new n.a({el:"#app",template:"<app/>",store:u.a,framework7:{root:"#app",pushState:!0,routes:m.a,material:!0,materialPageLoadDelay:20},data:function(){return{}},components:{app:d.a}})},function(t,e){function s(t,e){setTimeout(function(){if(1===t.readyState)return console.log("Connection is made"),void(null!=e&&e());s(t,e)},500)}var n=window.WebSocket||window.MozWebSocket;e.connect=function(t){if(n){return new n(t)}console.log("Please use a newer browser to access collaboration features.")},e.send=function(t,e){s(t,function(){t.send(e)})},e.disconnect=function(t){t.close()}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,s){var n=s(0)(s(23),s(86),null,null);t.exports=n.exports},function(t,e,s){s(67);var n=s(0)(s(24),s(87),null,null);t.exports=n.exports},function(t,e,s){var n=s(0)(s(25),s(81),null,null);t.exports=n.exports},function(t,e,s){s(63);var n=s(0)(s(26),s(79),null,null);t.exports=n.exports},function(t,e,s){var n=s(0)(s(27),s(84),null,null);t.exports=n.exports},function(t,e,s){s(66);var n=s(0)(s(28),s(85),null,null);t.exports=n.exports},function(t,e,s){s(65);var n=s(0)(s(29),s(83),null,null);t.exports=n.exports},function(t,e,s){s(64);var n=s(0)(s(30),s(80),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("f7-page",[s("f7-navbar",{attrs:{title:"Настройки","back-link":"Back",sliding:""},on:{"back-click":t.back}}),t._v(" "),s("f7-list",{attrs:{accordion:""}},[s("f7-list-item",{staticClass:"settings",attrs:{"accordion-item":"",title:"Настройки насоса",media:"<i class='icon icon-pump'>"}},[s("f7-accordion-content",[s("f7-list",{attrs:{"media-list":""}},[s("f7-list-item",[s("div",{attrs:{slot:"inner"},slot:"inner"},[s("div",{staticStyle:{"margin-top":"6px"}},[s("f7-label",{staticClass:"labelin"},[t._v("Время вкл: "+t._s(t.param1))]),t._v(" "),s("f7-input",{attrs:{type:"range",min:"50",max:"500",step:"10"},model:{value:t.param1,callback:function(e){t.param1=e},expression:"param1"}}),t._v(" "),s("f7-label",{staticClass:"labelin"},[t._v("Время выкл: "+t._s(t.param2))]),t._v(" "),s("f7-input",{attrs:{type:"range",min:2*t.param1,max:4*t.param1,step:"10"},model:{value:t.param2,callback:function(e){t.param2=e},expression:"param2"}})],1)])])],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("f7-page",[s("f7-navbar",{attrs:{title:"Настройки","back-link":"Back",sliding:""}}),t._v(" "),s("f7-list",{attrs:{accordion:""}},[s("f7-list-item",{staticClass:"settings",attrs:{"accordion-item":"",title:"Предустановки",media:"<i class='icon icon-presets' >"}},[s("f7-accordion-content",[s("f7-list",{attrs:{"media-list":""}},[s("f7-list-item",[s("f7-card",[s("f7-card-header",[s("div",{staticClass:"item-media"},[s("i",{staticClass:"icon icon-building"}),t._v(" "),s("p",{staticClass:"text-icon"},[t._v("Город")])])]),t._v(" "),s("f7-card-content",[s("div",{style:t.stylediv1},[s("f7-label",{staticClass:"labelin"},[t._v("Расстояние: "+t._s(t.param1)+" км")]),t._v(" "),s("f7-input",{attrs:{type:"range",id:"0",min:"1",max:"10",step:"1",placeholder:"Введите расстояние между включением"},model:{value:t.param1,callback:function(e){t.param1=t._n(e)},expression:"param1"}}),t._v(" "),s("f7-label",{staticClass:"labelin"},[t._v("Капли: "+t._s(t.param2))]),t._v(" "),s("f7-input",{attrs:{color:"brown",type:"range",id:"1",min:"1",max:"10",step:"1",placeholder:"Количество капель за цикл"},model:{value:t.param2,callback:function(e){t.param2=t._n(e)},expression:"param2"}})],1)])],1),t._v(" "),s("f7-card",[s("f7-card-header",[s("div",{staticClass:"item-media"},[s("i",{staticClass:"icon icon-highway"}),t._v(" "),s("p",{staticClass:"text-icon"},[t._v("Трасса")])])]),t._v(" "),s("f7-card-content",[s("div",{style:t.stylediv1},[s("f7-label",{staticClass:"labelin"},[t._v("Расстояние: "+t._s(t.param3)+" км")]),t._v(" "),s("f7-input",{attrs:{type:"range",id:"2",min:"1",max:"20",step:"1",placeholder:"Введите расстояние между включением"},model:{value:t.param3,callback:function(e){t.param3=t._n(e)},expression:"param3"}}),t._v(" "),s("f7-label",{staticClass:"labelin"},[t._v("Капли: "+t._s(t.param4)+" ")]),t._v(" "),s("f7-input",{attrs:{color:"brown",type:"range",id:"3",min:"1",max:"10",step:"1",placeholder:"Количество капель за цикл"},model:{value:t.param4,callback:function(e){t.param4=t._n(e)},expression:"param4"}})],1)])],1)],1)],1)],1)],1),t._v(" "),s("f7-list-item",{staticClass:"settings",attrs:{"accordion-item":"",title:"Настройки насоса",media:"<i class='icon icon-pump' >"}},[s("f7-accordion-content",[s("f7-list",{attrs:{"media-list":""}},[s("f7-list-item",[s("div",{attrs:{slot:"inner"},slot:"inner"},[s("div",{style:t.stylediv1},[s("f7-label",{staticClass:"labelin"},[t._v("Время вкл: "+t._s(t.param5)+" мсек")]),t._v(" "),s("f7-input",{attrs:{color:"green",type:"range",min:"50",max:"500",step:"10"},model:{value:t.param5,callback:function(e){t.param5=e},expression:"param5"}}),t._v(" "),s("f7-label",{staticClass:"labelin"},[t._v("Время выкл: "+t._s(t.param6)+" мсек")]),t._v(" "),s("f7-input",{attrs:{color:"red",type:"range",min:2*t.param5,max:4*t.param5,step:"10"},model:{value:t.param6,callback:function(e){t.param6=e},expression:"param6"}})],1)])])],1)],1)],1),t._v(" "),s("f7-list-item",{staticClass:"settings",attrs:{"accordion-item":"",title:"Датчик",media:"<i class='icon icon-gauge'>"},on:{"accordion:close":t.AccordClose}},[s("f7-accordion-content",[s("f7-list",{attrs:{"media-list":""}},[s("f7-list-item",[s("div",{attrs:{slot:"inner"},slot:"inner"},[s("f7-list",[t.param13?s("f7-list-item",{attrs:{media:"<i class='icon icon-gps'>",radio:"",name:"my-radio",value:1,checked:t.param12},on:{click:function(e){t.onSetTypeSensor(1)}}},[t._v("ГНСС")]):t._e(),t._v(" "),s("f7-list-item",{attrs:{media:"<i class='icon icon-gauge2'>",radio:"",name:"my-radio",value:2,checked:!t.param12},on:{click:function(e){t.onSetTypeSensor(2)}}},[t._v("Импульсный")])],1)],1),t._v(" "),t.param12?t._e():s("div",[s("f7-card",[s("f7-card-content",[s("f7-label",{staticClass:"labelin"},[t._v("Внешний датчик")]),t._v(" "),s("f7-input",{attrs:{type:"switch"},on:{change:t.onChangePwr},model:{value:t.param10,callback:function(e){t.param10=e},expression:"param10"}}),t._v(" "),s("f7-grid",[s("f7-col",{attrs:{width:"50"}},[s("div",{style:t.stylediv1},[s("f7-label",{staticClass:"labelin"},[t._v("Имп. на оборот:")]),t._v(" "),s("f7-input",{attrs:{type:"number",placeholder:"Введите число импульсов на оборот"},model:{value:t.param11,callback:function(e){t.param11=t._n(e)},expression:"param11"}})],1)]),t._v(" "),s("f7-col",{attrs:{width:"50"}},[s("f7-button",{style:{"margin-top":"30px"},attrs:{fill:""},on:{click:t.AccordOpen}},[t._v("Сброс")])],1)],1)],1)],1),t._v(" "),s("f7-card",[s("f7-card-header",[s("span",{style:t.stylefooter_p},[t._v("Параметры колеса")])]),t._v(" "),s("f7-card-content",[s("div",{style:t.stylediv1},[s("f7-grid",[s("f7-col",[s("f7-label",{staticClass:"labelin"},[t._v("Диаметр:")]),t._v(" "),s("f7-input",{attrs:{type:"select"},model:{value:t.param7,callback:function(e){t.param7=e},expression:"param7"}},[s("option",{domProps:{value:16}},[t._v('16"')]),t._v(" "),s("option",{domProps:{value:17}},[t._v('17"')]),t._v(" "),s("option",{domProps:{value:18}},[t._v('18"')]),t._v(" "),s("option",{domProps:{value:19}},[t._v('19"')]),t._v(" "),s("option",{domProps:{value:21}},[t._v('21"')])])],1),t._v(" "),s("f7-col",[s("f7-label",{staticClass:"labelin"},[t._v("Ширина:")]),t._v(" "),s("f7-input",{attrs:{type:"number",placeholder:"Ширина шины"},model:{value:t.param8,callback:function(e){t.param8=t._n(e)},expression:"param8"}})],1)],1),t._v(" "),s("f7-label",{staticClass:"labelin"},[t._v("Профиль:")]),t._v(" "),s("f7-input",{attrs:{type:"number",placeholder:"Высота шины в %"},model:{value:t.param9,callback:function(e){t.param9=t._n(e)},expression:"param9"}})],1)])],1)],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("f7-page",[s("f7-navbar",{attrs:{title:"Консоль","back-link":"Back",sliding:""}}),t._v(" "),s("f7-block",{attrs:{inner:""}},t._l(this.$store.state.debug,function(e){return s("p",[t._v("\n          "+t._s(e)+"\n      ")])}))],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("f7-panel",{attrs:{right:"",cover:"",layout:"dark"}},[s("f7-view",{attrs:{id:"right-panel-view","navbar-through":"","dynamic-navbar":!0}},[t.$theme.ios?s("f7-navbar",{attrs:{sliding:""}}):t._e(),t._v(" "),s("f7-pages",[s("f7-page",[t.$theme.material?s("f7-navbar",{attrs:{sliding:""}}):t._e(),t._v(" "),s("f7-list",[s("f7-list-item",{attrs:{link:"/params/","link-view":"#main-view",title:"Телеметрия","link-close-panel":""}}),t._v(" "),s("f7-list-item",{attrs:{link:"/ctrlpump/","link-view":"#main-view","link-close-panel":"",title:"Управление"}}),t._v(" "),s("f7-list-item",{attrs:{link:"/system/","link-view":"#main-view",title:"Система","link-close-panel":""}}),t._v(" "),s("f7-list-item",{attrs:{link:"/about/",title:"О Cosmoiler"}})],1)],1)],1)],1)],1),t._v(" "),s("f7-views",[s("f7-view",{attrs:{id:"main-view","navbar-through":"","dynamic-navbar":!0,main:""}},[t.$theme.ios?s("f7-navbar",[s("f7-nav-left",[s("f7-link",{attrs:{icon:"icon-bars","open-panel":"left"}})],1),t._v(" "),s("f7-nav-center",{attrs:{sliding:""}},[t._v("Cosmoiler")]),t._v(" "),s("f7-nav-right",[s("f7-link",{attrs:{icon:"icon-bars","open-panel":"right"}})],1)],1):t._e(),t._v(" "),s("f7-pages",[s("f7-page",[t.$theme.material?s("f7-navbar",[s("f7-nav-left"),t._v(" "),s("f7-nav-center",{attrs:{sliding:""}},[t._v("Cosmoiler")]),t._v(" "),s("div",{style:t.styleVer},[t._v(t._s(t.ver))]),t._v(" "),this.$store.state.connect?s("f7-nav-right",[s("f7-link",{attrs:{icon:"icon-bars","open-panel":"right"}})],1):t._e()],1):t._e(),t._v(" "),this.$store.state.connect?s("div",[s("f7-block-title",{style:{"font-weight":600}},[t._v("Выберите режим работы ")]),t._v(" "),s("f7-list",{attrs:{"media-list":""}},[s("f7-list-item",{attrs:{swipeout:"",title:"По пробегу...",media:"<i class='icon icon-meter'></i>",link:"#",badge:t.badgeName1,"badge-color":"green",subtitle:"Смазывать через заданное расстояние..."}},[s("f7-swipeout-actions",[s("f7-swipeout-button",{attrs:{close:"",color:"purple",id:"trip"},on:{click:function(e){t.ctrlMode(e)}}},[t._v(t._s(t.messonoff[0]))]),t._v(" "),s("f7-swipeout-button",{attrs:{close:"",href:"/trip/",color:"teal"}},[t._v("Настройки")])],1)],1),t._v(" "),s("f7-list-item",{attrs:{swipeout:"",title:"По времени...",media:"<i class='icon icon-time'></i>",link:"#",badge:t.badgeName2,"badge-color":"green",subtitle:"Смазывать через заданное время..."}},[s("f7-swipeout-actions",[s("f7-swipeout-button",{attrs:{close:"",color:"purple",id:"time"},on:{click:function(e){t.ctrlMode(e)}}},[t._v(t._s(t.messonoff[1]))]),t._v(" "),s("f7-swipeout-button",{attrs:{close:"",href:"/time/",color:"teal"}},[t._v("Настройки")])],1)],1),t._v(" "),s("f7-list-item",{attrs:{swipeout:"",title:"Вручную...",media:"<i class='icon icon-right-hand'></i>",link:"#",badge:t.badgeName3,"badge-color":"green",subtitle:"Смазывать вручную..."}},[s("f7-swipeout-actions",[s("f7-swipeout-button",{attrs:{close:"",color:"purple",id:"manual"},on:{click:function(e){t.ctrlMode(e)}}},[t._v(t._s(t.messonoff[2]))]),t._v(" "),s("f7-swipeout-button",{attrs:{close:"",href:"/manual/",color:"teal"}},[t._v("Настройки")])],1)],1)],1)],1):s("div",{staticClass:"preload"},[s("f7-grid",[s("f7-col",{attrs:{width:"100"}},[s("p",[t._v("Подключение... ")])]),t._v(" "),s("f7-col",{attrs:{width:"100"}},[s("f7-preloader",{attrs:{color:"blue",size:"40px"}})],1)],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("f7-page",[s("f7-navbar",{attrs:{title:"Настройки","back-link":"Back",sliding:""},on:{"back-click":t.back}}),t._v(" "),s("f7-list",{attrs:{accordion:""}},[s("f7-list-item",{staticClass:"settings",attrs:{"accordion-item":"",title:"Предустановки",media:"<i class='icon icon-presets'>"}},[s("f7-accordion-content",[s("f7-list",{attrs:{"media-list":""}},[s("f7-list-item",[s("f7-card",[s("f7-card-header",[s("div",{staticClass:"item-media"},[s("i",{staticClass:"icon icon-building"}),t._v(" "),s("p",{staticClass:"text-icon"},[t._v("Город")])])]),t._v(" "),s("f7-card-content",[s("f7-label",{staticClass:"labelin"},[t._v("Вемя: "+t._s(t.param1)+" сек")]),t._v(" "),s("f7-input",{attrs:{type:"range",min:"10",max:"600",step:"10",placeholder:"Введите время между включениями"},model:{value:t.param1,callback:function(e){t.param1=t._n(e)},expression:"param1"}}),t._v(" "),s("f7-label",{staticClass:"labelin"},[t._v("Капли: "+t._s(t.param2)+" ")]),t._v(" "),s("f7-input",{attrs:{type:"range",min:"1",max:"10",step:"1",placeholder:"Количество капель за цикл"},model:{value:t.param2,callback:function(e){t.param2=t._n(e)},expression:"param2"}})],1)],1),t._v(" "),s("f7-card",[s("f7-card-header",[s("div",{staticClass:"item-media"},[s("i",{staticClass:"icon icon-highway"}),t._v(" "),s("p",{staticClass:"text-icon"},[t._v("Трасса")])])]),t._v(" "),s("f7-card-content",[s("f7-label",{staticClass:"labelin"},[t._v("Вемя: "+t._s(t.param3)+" сек")]),t._v(" "),s("f7-input",{attrs:{type:"range",min:"10",max:"600",step:"10",placeholder:"Введите время между включениями"},model:{value:t.param3,callback:function(e){t.param3=t._n(e)},expression:"param3"}}),t._v(" "),s("f7-label",{staticClass:"labelin"},[t._v("Капли: "+t._s(t.param4)+" ")]),t._v(" "),s("f7-input",{attrs:{type:"range",min:"1",max:"10",step:"1",placeholder:"Количество капель за цикл"},model:{value:t.param4,callback:function(e){t.param4=t._n(e)},expression:"param4"}})],1)],1)],1)],1)],1)],1),t._v(" "),s("f7-list-item",{staticClass:"settings",attrs:{"accordion-item":"",title:"Настройки насоса",media:"<i class='icon icon-pump'>"}},[s("f7-accordion-content",[s("f7-list",{attrs:{"media-list":""}},[s("f7-list-item",[s("div",{attrs:{slot:"inner"},slot:"inner"},[s("div",{style:t.stylediv1},[s("f7-label",{staticClass:"labelin"},[t._v("Время вкл: "+t._s(t.param5)+" мсек ")]),t._v(" "),s("f7-input",{attrs:{color:"green",type:"range",min:"50",max:"500",step:"10"},model:{value:t.param5,callback:function(e){t.param5=e},expression:"param5"}}),t._v(" "),s("f7-label",{staticClass:"labelin"},[t._v("Время выкл: "+t._s(t.param6)+" мсек")]),t._v(" "),s("f7-input",{attrs:{color:"red",type:"range",min:2*t.param5,max:4*t.param5,step:"10"},model:{value:t.param6,callback:function(e){t.param6=e},expression:"param6"}})],1)])])],1)],1)],1)],1),t._v(" "),t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("f7-page",[s("f7-navbar",{attrs:{title:"Телеметрия","back-link":"Back",sliding:""}}),t._v(" "),0!==this.$store.state.modejson.mode?s("f7-grid",{attrs:{"no-gutter":""}},[s("f7-col",[s("f7-card",{attrs:{title:"Режим",content:t.mode,footer:t.NamePreset}})],1),t._v(" "),s("f7-col",[s("f7-card",{attrs:{title:"Датчик",content:t.TypeSensor}},[s("f7-card-footer",[t._v(t._s(t.sensor_footer))])],1)],1)],1):t._e(),t._v(" "),1===this.$store.state.modejson.mode?s("f7-grid",{attrs:{"no-gutter":""}},[s("f7-col",[s("f7-card",{attrs:{title:"Скорость",content:t.Speed,footer:t.AvgSpeed}})],1),t._v(" "),s("f7-col",[s("f7-card",{attrs:{title:"Одометр",content:t.Odo,footer:t.Remains}})],1)],1):t._e(),t._v(" "),1===this.$store.state.modejson.mode?s("f7-grid",{attrs:{"no-gutter":""}},[s("f7-col",[s("f7-card",{attrs:{title:"Насос",content:t.Non}})],1),t._v(" "),s("f7-col",[s("f7-card",{attrs:{title:"напряжение",content:t.Voltage}})],1)],1):t._e(),t._v(" "),s("f7-grid",{attrs:{"no-gutter":""}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("f7-page",[s("f7-navbar",{attrs:{title:"Системные настройки","back-link":"Back",sliding:""}}),t._v(" "),s("f7-list",{attrs:{accordion:""}},[s("f7-list-item",{staticClass:"system",attrs:{"accordion-item":"",title:"Подключение",media:"<i class='icon icon-wifi-logo'>"}},[s("f7-accordion-content",[s("f7-list",{attrs:{"media-list":""}},[s("f7-list-item",[s("f7-card",[s("f7-card-content",[s("div",{style:t.stylediv1},[s("f7-label",{staticClass:"labelin"},[t._v("SSID")]),t._v(" "),s("f7-input",{attrs:{type:"text",placeholder:"Введите имя точки доступа"},model:{value:t.ssid,callback:function(e){t.ssid=e},expression:"ssid"}}),t._v(" "),s("f7-label",{staticClass:"labelin"},[t._v("Пароль")]),t._v(" "),s("f7-input",{attrs:{type:"password",placeholder:"Пароль"},model:{value:t.psw,callback:function(e){t.psw=e},expression:"psw"}})],1),t._v(" "),s("f7-grid",[s("f7-col",{attrs:{width:"50"}},[s("p",[s("f7-button",{attrs:{big:"",raised:"",fill:""},on:{click:t.saveSSID}},[t._v("Сохранить")])],1)]),t._v(" "),s("f7-col",{attrs:{width:"50"}},[s("p",[s("f7-button",{attrs:{big:"",raised:"",fill:""},on:{click:t.clearSSID}},[t._v("Сброс SSID")])],1)])],1)],1)],1)],1)],1)],1)],1),t._v(" "),s("f7-list-item",{staticClass:"settings",attrs:{"accordion-item":"",title:"Обновление ПО",media:"<i class='icon icon-arrows-cw'>"}},[s("f7-accordion-content",[s("f7-list",{attrs:{"media-list":""}},[s("f7-list-item",[s("f7-card",[s("f7-card-content",{staticClass:"caution"},[s("p",{style:t.cautionStyle},[t._v("Внимание!")]),t._v(" "),s("p",[t._v("Перед обновлением ПО обязательно необходимо ввести данные точки доступа, через которую имеется выход в интернет.")]),t._v(" "),s("p",[s("f7-button",{attrs:{big:"",raised:"",color:"red",fill:""},on:{click:t.updateFW}},[t._v("Обновить ПО")])],1)])],1)],1)],1)],1)],1),t._v(" "),s("f7-list-item",{staticClass:"settings",attrs:{"accordion-item":"",title:"Светодиод",media:"<i class='icon icon-light-up'>"}},[s("f7-accordion-content",[s("f7-list",{attrs:{"media-list":""}},[s("f7-list-item",[s("f7-card",[s("f7-card-content",[s("div",{style:t.styledivBright},[s("f7-label",{staticClass:"labelin"},[t._v("Яркость: "+t._s(t.param2)+"%")]),t._v(" "),s("f7-input",{attrs:{type:"range",min:"10",max:"255",step:"1"},model:{value:t.param1,callback:function(e){t.param1=e},expression:"param1"}})],1)])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("f7-page",[s("f7-navbar",{attrs:{title:"О системе","back-link":"Back",sliding:""}}),t._v(" "),s("f7-block",{attrs:{inner:""}},[s("p",[t._v("S/N: "+t._s(t.obj.sn))]),t._v(" "),s("p",[t._v("Firmware version: "+t._s(t.obj.fw.major)+"."+t._s(t.obj.fw.minor)+"."+t._s(t.obj.fw.build))]),t._v(" "),s("p",[t._v("HW version: rev."+t._s(t.obj.hw))])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("f7-page",[s("f7-navbar",{attrs:{title:"Управление насосом","back-link":"Back",sliding:""}}),t._v(" "),s("f7-list",{attrs:{"media-list":""}},[s("f7-card",[s("f7-card-header",[s("div",{staticClass:"item-media"},[s("i",{staticClass:"icon icon-pump",style:{"font-size":t.sizeIconPump+"px"}}),t._v(" "),s("p",{staticClass:"text-icon"},[t._v("Насос")])])]),t._v(" "),s("f7-card-content",[s("div",{style:t.stylediv},[s("f7-label",{staticClass:"labelin"},[t._v("Время вкл: "+t._s(t.pump.dpms)+" мсек")]),t._v(" "),s("f7-input",{attrs:{color:"green",type:"range",min:"100",max:"1000",step:"10"},model:{value:t.pump.dpms,callback:function(e){t.$set(t.pump,"dpms",e)},expression:"pump.dpms"}}),t._v(" "),s("f7-label",{staticClass:"labelin"},[t._v("Время выкл: "+t._s(t.pump.dpdp)+" мсек")]),t._v(" "),s("f7-input",{attrs:{color:"red",type:"range",min:50,max:2e3,step:"10",value:t.pump.dpdp},model:{value:t.pump.dpdp,callback:function(e){t.$set(t.pump,"dpdp",e)},expression:"pump.dpdp"}})],1),t._v(" "),s("f7-grid",[s("f7-col",{attrs:{width:"50"}},[s("p",[s("f7-button",{attrs:{big:"",raised:"",color:"green",fill:""},on:{click:t.on}},[t._v("Старт")])],1)]),t._v(" "),s("f7-col",{attrs:{width:"50"}},[s("p",[s("f7-button",{attrs:{big:"",raised:"",color:"red",fill:""},on:{click:t.off}},[t._v("Стоп")])],1)]),t._v(" "),s("f7-col",{attrs:{width:"100"}},[s("p",[s("f7-button",{attrs:{raised:"",fill:"",color:"gray"},on:{click:t.reverse}},[t._v("Реверс ("+t._s(t.dirname.properites[t.pump.dir].name)+")")])],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]}}],[31]);