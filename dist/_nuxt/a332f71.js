(window.webpackJsonp=window.webpackJsonp||[]).push([[61,10],{442:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String},desc:{type:String}}},d=n(9),component=Object(d.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center border rounded-br-md rounded-bl-md py-10"},[e("svg",{staticClass:"mx-auto h-12 w-12 text-gray-400",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"vector-effect":"non-scaling-stroke","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"}})]),t._v(" "),e("h3",{staticClass:"mt-2 text-sm font-semibold text-gray-900"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v(t._s(t.desc)+".")])])}),[],!1,null,null,null);e.default=component.exports},470:function(t,e,n){var content=n(497);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("5920b854",content,!0,{sourceMap:!1})},496:function(t,e,n){"use strict";n(470)},497:function(t,e,n){var r=n(69)((function(i){return i[1]}));r.push([t.i,"::-webkit-scrollbar{display:none}",""]),r.locals={},t.exports=r},575:function(t,e,n){"use strict";n.r(e);n(31),n(20),n(43),n(37),n(13);var r=n(10),d=(n(67),{layout:"user-dashboard",components:{EmptyState:n(442).default},data:function(){return{processing:!1,isPersonalEmailValid:!0,identificationFilePreview:"",passportFilePreview:null,isPdf:!1,profileError:null,docfileError:null,updatedUserData:{name:"",password:"",email:"",phoneNumber:"",dob:"",gender:"",ssn:"",occupation:"",country:"",city:"",zip:"",address:"",accountCurrency:"",pin:"",passport:"",identification:"",eth:"",btc:"",accountBalance:"",tradingBalance:"",profit:""}}},methods:{updateUser:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,d,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.processing=!0,n=JSON.parse(window.localStorage.getItem("auth")),r=JSON.parse(window.localStorage.getItem("user")),e.prev=3,"\n          mutation updateUser($userId: String!, $input: UpdateUser!) {\n            updateUser(userId: $userId, input: $input) {\n              name\n              email\n              phoneNumber\n              dob\n              gender\n              ssn\n              occupation\n              country\n              city\n              zip\n              address\n              accountCurrency\n              pin\n              passport\n              identification\n              eth\n              btc\n              accountBalance\n            }\n          }\n        ",e.next=7,fetch("https://fidelityvalues.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer "+n},body:JSON.stringify({query:"\n          mutation updateUser($userId: String!, $input: UpdateUser!) {\n            updateUser(userId: $userId, input: $input) {\n              name\n              email\n              phoneNumber\n              dob\n              gender\n              ssn\n              occupation\n              country\n              city\n              zip\n              address\n              accountCurrency\n              pin\n              passport\n              identification\n              eth\n              btc\n              accountBalance\n            }\n          }\n        ",variables:{userId:null!==(d=null==r?void 0:r.id)&&void 0!==d?d:"",input:{name:t.updatedUserData.name,password:t.updatedUserData.password,email:t.updatedUserData.email,phoneNumber:t.updatedUserData.phoneNumber,dob:t.updatedUserData.dob,gender:t.updatedUserData.gender,ssn:t.updatedUserData.ssn,occupation:t.updatedUserData.occupation,country:t.updatedUserData.country,city:t.updatedUserData.city,zip:t.updatedUserData.zip,address:t.updatedUserData.address,accountCurrency:t.updatedUserData.accountCurrency,pin:t.updatedUserData.pin,passport:t.updatedUserData.passport,identification:t.updatedUserData.identification,eth:t.updatedUserData.eth,btc:t.updatedUserData.btc,accountBalance:t.updatedUserData.accountBalance,tradingBalance:t.updatedUserData.tradingBalance,profit:t.updatedUserData.profit}}})});case 7:return o=e.sent,e.next=10,o.json();case 10:null!=(data=e.sent)&&data.errors?t.$toastr.e(data.errors[0].message):t.$toastr.s("You have successfully updated your profile");case 12:return e.prev=12,t.processing=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[3,,12,15]])})))()},getUserInfo:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,n=JSON.parse(window.localStorage.getItem("auth")),t.loading=!0,"\n        query {\n          getUser {\n            id\n            name\n            email\n            role\n            phoneNumber\n            dob\n            gender\n            ssn\n            occupation\n            country\n            city\n            zip\n            address\n            accountCurrency\n            pin\n            passport\n            identification\n            Status\n            PlanType\n            accountBalance\n            cardBalance\n            cardNumber\n            expiry\n            cvv\n            eth\n            btc\n            timeAdded\n            admin {\n                id\n                email\n                role\n                Status\n                timeAdded\n                btc\n                eth\n                name\n              }\n          }\n        }\n      ",e.prev=4,e.next=7,fetch("https://fidelityvalues.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer "+n},body:JSON.stringify({query:"\n        query {\n          getUser {\n            id\n            name\n            email\n            role\n            phoneNumber\n            dob\n            gender\n            ssn\n            occupation\n            country\n            city\n            zip\n            address\n            accountCurrency\n            pin\n            passport\n            identification\n            Status\n            PlanType\n            accountBalance\n            cardBalance\n            cardNumber\n            expiry\n            cvv\n            eth\n            btc\n            timeAdded\n            admin {\n                id\n                email\n                role\n                Status\n                timeAdded\n                btc\n                eth\n                name\n              }\n          }\n        }\n      "})});case 7:return r=e.sent,e.next=10,r.json();case 10:null!=(data=e.sent)&&data.errors?t.$toastr.e(data.errors[0].message):t.updatedUserData=data.data.getUser;case 12:return e.prev=12,t.loading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[4,,12,15]])})))()}},mounted:function(){this.getUserInfo()}}),o=(n(496),n(9)),component=Object(o.a)(d,(function(){var t,e=this,n=e._self._c;return n("div",{staticClass:"flex min-h-full"},[n("div",{staticClass:"flex flex-1 h-screen overflow-hidden flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"},[n("div",{staticClass:"mx-auto w-full overflow-y-auto"},[e._m(0),e._v(" "),n("div",{},[n("div",[Object.keys(e.updatedUserData).length&&!e.loading?n("form",{staticClass:"p-6 lg:p-10 space-y-6 max-w-xl",on:{submit:function(t){return t.preventDefault(),e.updateUser.apply(null,arguments)}}},[n("div",{staticClass:"space-y-1"},[n("label",{staticClass:"text-xs text-gray-700 font-medium"},[e._v("First Name")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.updatedUserData.name,expression:"updatedUserData.name"}],staticClass:"py-3 md:py-2 border rounded-md w-full outline-none pl-6 text-sm md:text-base",attrs:{type:"text"},domProps:{value:e.updatedUserData.name},on:{input:function(t){t.target.composing||e.$set(e.updatedUserData,"name",t.target.value)}}}),e._v(" "),n("span",{staticClass:"text-xs text-gray-500"},[e._v("We'll never share your details with anyone else")])]),e._v(" "),n("div",{staticClass:"space-y-1"},[n("label",{staticClass:"text-xs text-gray-700 font-medium"},[e._v("Phone Number")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.updatedUserData.phoneNumber,expression:"updatedUserData.phoneNumber"}],staticClass:"py-3 md:py-2 text-sm md:text-base border rounded-md w-full outline-none pl-6",attrs:{type:"tel"},domProps:{value:e.updatedUserData.phoneNumber},on:{input:function(t){t.target.composing||e.$set(e.updatedUserData,"phoneNumber",t.target.value)}}}),e._v(" "),n("span",{staticClass:"text-xs text-gray-500"},[e._v("We'll never share your details with anyone else")])]),e._v(" "),n("div",{staticClass:"space-y-1"},[n("label",{staticClass:"text-xs text-gray-700 font-medium"},[e._v("Social Security Number/Tax ID")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.updatedUserData.ssn,expression:"updatedUserData.ssn"}],staticClass:"py-3 md:py-2 text-sm md:text-base border rounded-md w-full outline-none pl-6",attrs:{type:"tel"},domProps:{value:e.updatedUserData.ssn},on:{input:function(t){t.target.composing||e.$set(e.updatedUserData,"ssn",t.target.value)}}}),e._v(" "),n("span",{staticClass:"text-xs text-gray-500"},[e._v("We'll never share your details with anyone else")])]),e._v(" "),n("div",{staticClass:"space-y-1"},[n("label",{staticClass:"text-xs text-gray-700 font-medium"},[e._v("Email address:")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.updatedUserData.email,expression:"updatedUserData.email"}],staticClass:"py-3 md:py-2 text-sm md:text-base border rounded-md w-full outline-none pl-6",attrs:{type:"email"},domProps:{value:e.updatedUserData.email},on:{input:function(t){t.target.composing||e.$set(e.updatedUserData,"email",t.target.value)}}}),e._v(" "),n("span",{staticClass:"text-xs text-gray-500"},[e._v("We'll never share your details with anyone else")])]),e._v(" "),n("div",{staticClass:"space-y-1"},[n("label",{staticClass:"text-xs text-gray-700 font-medium"},[e._v("Occupation")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.updatedUserData.occupation,expression:"updatedUserData.occupation"}],staticClass:"py-3 md:py-2 text-sm md:text-base border rounded-md w-full outline-none pl-6",attrs:{type:"text"},domProps:{value:e.updatedUserData.occupation},on:{input:function(t){t.target.composing||e.$set(e.updatedUserData,"occupation",t.target.value)}}}),e._v(" "),n("span",{staticClass:"text-xs text-gray-500"},[e._v("We'll never share your details with anyone else")])]),e._v(" "),n("div",{staticClass:"space-y-1"},[n("label",{staticClass:"text-xs text-gray-700 font-medium"},[e._v("Occupation")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.updatedUserData.country,expression:"updatedUserData.country"}],staticClass:"py-3 md:py-2 text-sm md:text-base border rounded-md w-full outline-none pl-6",attrs:{type:"text"},domProps:{value:e.updatedUserData.country},on:{input:function(t){t.target.composing||e.$set(e.updatedUserData,"country",t.target.value)}}}),e._v(" "),n("span",{staticClass:"text-xs text-gray-500"},[e._v("We'll never share your details with anyone else")])]),e._v(" "),n("div",{staticClass:"space-y-1"},[n("label",{staticClass:"text-xs text-gray-700 font-medium"},[e._v("City")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.updatedUserData.city,expression:"updatedUserData.city"}],staticClass:"py-3 md:py-2 text-sm md:text-base border rounded-md w-full outline-none pl-6",attrs:{type:"text"},domProps:{value:e.updatedUserData.city},on:{input:function(t){t.target.composing||e.$set(e.updatedUserData,"city",t.target.value)}}}),e._v(" "),n("span",{staticClass:"text-xs text-gray-500"},[e._v("We'll never share your details with anyone else")])]),e._v(" "),n("div",{staticClass:"space-y-1"},[n("label",{staticClass:"text-xs text-gray-700 font-medium"},[e._v("Zip")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.updatedUserData.zip,expression:"updatedUserData.zip"}],staticClass:"py-3 md:py-2 text-sm md:text-base border rounded-md w-full outline-none pl-6",attrs:{type:"tel"},domProps:{value:e.updatedUserData.zip},on:{input:function(t){t.target.composing||e.$set(e.updatedUserData,"zip",t.target.value)}}}),e._v(" "),n("span",{staticClass:"text-xs text-gray-500"},[e._v("We'll never share your details with anyone else")])]),e._v(" "),n("div",{staticClass:"space-y-1"},[n("label",{staticClass:"text-xs text-gray-700 font-medium"},[e._v("Address")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.updatedUserData.address,expression:"updatedUserData.address"}],staticClass:"py-3 md:py-2 text-sm md:text-base border rounded-md w-full outline-none pl-6",domProps:{value:e.updatedUserData.address},on:{input:function(t){t.target.composing||e.$set(e.updatedUserData,"address",t.target.value)}}}),e._v(" "),n("span",{staticClass:"text-xs text-gray-500"},[e._v("We'll never share your details with anyone else")])]),e._v(" "),n("div",{staticClass:"space-y-1"},[n("label",{staticClass:"text-xs text-gray-700 font-medium"},[e._v("Password:")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.updatedUserData.password,expression:"updatedUserData.password"}],staticClass:"py-3 md:py-2 border rounded-md w-full outline-none pl-6 text-sm md:text-base",attrs:{type:"password"},domProps:{value:e.updatedUserData.password},on:{input:function(t){t.target.composing||e.$set(e.updatedUserData,"password",t.target.value)}}}),e._v(" "),n("span",{staticClass:"text-xs text-gray-500"},[e._v("We'll never share your details with anyone else")])]),e._v(" "),n("div",{staticClass:"space-y-1"},[n("label",{staticClass:"text-xs text-gray-700 font-medium"},[e._v("Pin")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.updatedUserData.pin,expression:"updatedUserData.pin"}],staticClass:"py-3 md:py-2 border rounded-md w-full outline-none pl-6 text-sm md:text-base",attrs:{type:"tel"},domProps:{value:e.updatedUserData.pin},on:{input:function(t){t.target.composing||e.$set(e.updatedUserData,"pin",t.target.value)}}}),e._v(" "),n("span",{staticClass:"text-xs text-gray-500"},[e._v("We'll never share your details with anyone else")])]),e._v(" "),n("div",{staticClass:"space-y-1"},[n("label",{staticClass:"text-xs text-gray-700 font-medium"},[e._v("Eth")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.updatedUserData.eth,expression:"updatedUserData.eth"}],staticClass:"py-3 md:py-2 border rounded-md w-full outline-none pl-6 text-sm md:text-base",attrs:{type:"tel"},domProps:{value:e.updatedUserData.eth},on:{input:function(t){t.target.composing||e.$set(e.updatedUserData,"eth",t.target.value)}}}),e._v(" "),n("span",{staticClass:"text-xs text-gray-500"},[e._v("We'll never share your details with anyone else")])]),e._v(" "),n("div",{staticClass:"space-y-1"},[n("label",{staticClass:"text-xs text-gray-700 font-medium"},[e._v("Btc")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.updatedUserData.btc,expression:"updatedUserData.btc"}],staticClass:"py-3 md:py-2 border rounded-md w-full outline-none pl-6 text-sm md:text-base",attrs:{type:"tel"},domProps:{value:e.updatedUserData.btc},on:{input:function(t){t.target.composing||e.$set(e.updatedUserData,"btc",t.target.value)}}}),e._v(" "),n("span",{staticClass:"text-xs text-gray-500"},[e._v("We'll never share your details with anyone else")])]),e._v(" "),n("div",{staticClass:"space-y-1"},[n("label",{staticClass:"text-xs text-gray-700 font-medium"},[e._v("Account Balance")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.updatedUserData.accountBalance,expression:"updatedUserData.accountBalance"}],staticClass:"py-3 md:py-2 border rounded-md w-full outline-none pl-6 text-sm md:text-base",attrs:{type:"tel"},domProps:{value:e.updatedUserData.accountBalance},on:{input:function(t){t.target.composing||e.$set(e.updatedUserData,"accountBalance",t.target.value)}}}),e._v(" "),n("span",{staticClass:"text-xs text-gray-500"},[e._v("We'll never share your details with anyone else")])]),e._v(" "),n("div",{staticClass:"space-y-1"},[n("label",{staticClass:"text-xs text-gray-700 font-medium"},[e._v("Trading Balance")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.updatedUserData.tradingBalance,expression:"updatedUserData.tradingBalance"}],staticClass:"py-3 md:py-2 border rounded-md w-full outline-none pl-6 text-sm md:text-base",attrs:{type:"tel"},domProps:{value:e.updatedUserData.tradingBalance},on:{input:function(t){t.target.composing||e.$set(e.updatedUserData,"tradingBalance",t.target.value)}}}),e._v(" "),n("span",{staticClass:"text-xs text-gray-500"},[e._v("We'll never share your details with anyone else")])]),e._v(" "),n("div",{staticClass:"space-y-1"},[n("label",{staticClass:"text-xs text-gray-700 font-medium"},[e._v("Trading Balance")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.updatedUserData.tradingBalance,expression:"updatedUserData.tradingBalance"}],staticClass:"py-3 md:py-2 border rounded-md w-full outline-none pl-6 text-sm md:text-base",attrs:{type:"tel"},domProps:{value:e.updatedUserData.tradingBalance},on:{input:function(t){t.target.composing||e.$set(e.updatedUserData,"tradingBalance",t.target.value)}}}),e._v(" "),n("span",{staticClass:"text-xs text-gray-500"},[e._v("We'll never share your details with anyone else")])]),e._v(" "),n("div",{staticClass:"space-y-1"},[n("label",{staticClass:"text-xs text-gray-700 font-medium"},[e._v("Account Currency")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.updatedUserData.accountCurrency,expression:"updatedUserData.accountCurrency"}],staticClass:"block w-full rounded-md border-0 py-3 bg-gray-100 outline-none px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",attrs:{name:"currency",required:""},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));e.$set(e.updatedUserData,"accountCurrency",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:""}},[e._v("Select")]),e._v(" "),n("option",{attrs:{value:"$"}},[e._v("US Dollar")]),e._v(" "),n("option",{attrs:{value:"€"}},[e._v("Euro")]),e._v(" "),n("option",{attrs:{value:"£"}},[e._v("Pounds Sterling")]),e._v(" "),n("option",{attrs:{value:"RM"}},[e._v("Malaysian Ringgit - RM")]),e._v(" "),n("option",{attrs:{value:"SGD$"}},[e._v("Singapore Dollar")]),e._v(" "),n("option",{attrs:{value:"₹"}},[e._v("Indian Rupee")]),e._v(" "),n("option",{attrs:{value:"Rp"}},[e._v("Indonesian Rupiah")]),e._v(" "),n("option",{attrs:{value:"AUD$"}},[e._v("Australian Dollar")]),e._v(" "),n("option",{attrs:{value:"CAD$"}},[e._v("Canadian Dollar")]),e._v(" "),n("option",{attrs:{value:"₣"}},[e._v("CFP Franc")]),e._v(" "),n("option",{attrs:{value:"¥"}},[e._v("Japanese Yen")]),e._v(" "),n("option",{attrs:{value:"¥"}},[e._v("Chinese Yen")]),e._v(" "),n("option",{attrs:{value:"ا.د"}},[e._v("Jordanian Dinar")]),e._v(" "),n("option",{attrs:{value:"ك.د"}},[e._v("Kuwaiti Dinar")]),e._v(" "),n("option",{attrs:{value:"MXN$"}},[e._v("Mexican Peso")]),e._v(" "),n("option",{attrs:{value:".ع.ر"}},[e._v("Omani Rial")]),e._v(" "),n("option",{attrs:{value:"₱"}},[e._v("Philippine Peso")]),e._v(" "),n("option",{attrs:{value:"ق.ر"}},[e._v("Qatari Rial")]),e._v(" "),n("option",{attrs:{value:" ﷼"}},[e._v("Saudi Riyal")]),e._v(" "),n("option",{attrs:{value:"₩"}},[e._v("South Korean Won")]),e._v(" "),n("option",{attrs:{value:"฿"}},[e._v("Thailand Baht")]),e._v(" "),n("option",{attrs:{value:"₫"}},[e._v("Vietnam Dong")])])]),e._v(" "),n("div",[n("label",{staticClass:"block text-sm font-medium leading-6 text-gray-900",attrs:{for:"email"}},[e._v("Passport\n                Photograph")]),e._v(" "),e.updatedUserData.passport.length?n("img",{staticClass:"h-32 w-32",staticStyle:{"max-width":"100%","max-height":"500px"},attrs:{src:e.updatedUserData.passport}}):n("div",{staticClass:"mt-2"},[e.passportFilePreview?e._e():n("div",{staticClass:"col-span-full"},[n("div",{staticClass:"mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"},[n("div",{staticClass:"text-center"},[n("svg",{staticClass:"mx-auto h-12 w-12 text-gray-300",attrs:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z","clip-rule":"evenodd"}})]),e._v(" "),n("div",{staticClass:"mt-4 flex text-sm leading-6 text-gray-600"},[n("label",{staticClass:"relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500",attrs:{for:"file-upload"}},[n("span",[e._v("Upload a file")]),e._v(" "),n("input",{staticClass:"sr-only",attrs:{id:"file-upload",name:"file-upload",type:"file",accept:".pdf,.png,.jpg,.jpeg,.gif"},on:{change:e.handlePassportUpload}})]),e._v(" "),n("p",{staticClass:"pl-1"},[e._v("or drag and drop")])]),e._v(" "),n("p",{staticClass:"text-xs leading-5 text-gray-600"},[e._v("\n                        PNG, JPG, GIF up to 10MB\n                      ")])])])]),e._v(" "),e.profileError?n("div",{staticClass:"error text-xs text-red-500 pt-2 font-medium"},[e._v("\n                  "+e._s(e.profileError)+"\n                ")]):e._e(),e._v(" "),e.isPdf&&e.passportFilePreview?n("iframe",{staticStyle:{width:"100%",height:"500px"},attrs:{src:e.passportFilePreview}}):e._e(),e._v(" "),!e.isPdf&&e.passportFilePreview?n("img",{staticStyle:{"max-width":"100%","max-height":"500px"},attrs:{src:e.passportFilePreview}}):e._e()])]),e._v(" "),n("div",[n("label",{staticClass:"block text-sm font-medium leading-6 text-gray-900",attrs:{for:"password"}},[e._v("Means of\n                Identification")]),e._v(" "),e.updatedUserData.identification.length?n("img",{staticClass:"h-32 w-32",staticStyle:{"max-width":"100%","max-height":"500px"},attrs:{src:e.updatedUserData.identification}}):n("div",{staticClass:"mt-2"},[e.identificationFilePreview?e._e():n("div",{staticClass:"col-span-full"},[n("div",{staticClass:"mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"},[n("div",{staticClass:"text-center"},[n("svg",{staticClass:"mx-auto h-12 w-12 text-gray-300",attrs:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z","clip-rule":"evenodd"}})]),e._v(" "),n("div",{staticClass:"mt-4 flex text-sm leading-6 text-gray-600"},[n("label",{staticClass:"relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500",attrs:{for:"file-upload"}},[n("span",[e._v("Upload a file")]),e._v(" "),n("input",{staticClass:"sr-only",attrs:{id:"file-upload",name:"file-upload",type:"file"},on:{change:e.handleMeansOfIdentificationUpload}})]),e._v(" "),n("p",{staticClass:"pl-1"},[e._v("or drag and drop")])]),e._v(" "),n("p",{staticClass:"text-xs leading-5 text-gray-600"},[e._v("\n                        PNG, JPG, GIF up to 10MB\n                      ")])])])]),e._v(" "),e.docfileError?n("div",{staticClass:"error text-red-500 text-xs pt-2 font-medium"},[e._v("\n                  "+e._s(e.docfileError)+"\n                ")]):e._e(),e._v(" "),e.isPdf&&e.identificationFilePreview?n("iframe",{staticStyle:{width:"100%",height:"500px"},attrs:{src:e.identificationFilePreview}}):e._e(),e._v(" "),!e.isPdf&&e.identificationFilePreview?n("img",{staticStyle:{"max-width":"100%","max-height":"500px"},attrs:{src:e.identificationFilePreview}}):e._e()])]),e._v(" "),n("div",{staticClass:"w-full"},[n("button",{staticClass:"bg-green-500 w-full text-white rounded-lg px-6 py-3 text-sm"},[e._v("\n                "+e._s(e.processing?"processing...":"Update")+"\n              ")])])]):!e.loading||null!==(t=e.transactionsList)&&void 0!==t&&t.length?n("EmptyState",{attrs:{title:"No Withdrawals available",desc:"Please perform a withdrawal transaction"}}):n("div",{staticClass:"bg-white rounded-lg shadow-md p-4 animate-pulse"},[n("div",{staticClass:"w-full h-32 bg-gray-300 rounded mb-2"})])],1)])])]),e._v(" "),e._m(1)])}),[function(){var t=this._self._c;return t("div",[t("h2",{staticClass:"text-2xl font-bold leading-9 tracking-tight text-gray-900"},[this._v("Update your account")])])},function(){var t=this._self._c;return t("div",{staticClass:"relative overflow-hidden h-screen hidden w-0 flex-1 lg:block"},[t("img",{staticClass:"absolute inset-0 h-full w-full object-cover",attrs:{src:"https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80",alt:""}})])}],!1,null,null,null);e.default=component.exports}}]);