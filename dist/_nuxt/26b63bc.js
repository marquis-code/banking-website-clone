(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{657:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"sm:mx-auto sm:w-full sm:max-w-sm"},[e("img",{staticClass:"mx-auto h-32 w-auto",attrs:{src:n(47),alt:"Your Company"}}),t._v(" "),e("h2",{staticClass:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"},[t._v("Admin Login")])])}],r=n(6),d=(n(55),n(42),n(10),n(22),{layout:"admin-auth",head:function(){return{title:"Bastons Banks | Admin Login",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Mobile Banking, Credit Cards, Mortgages, Auto Loan"},{hid:"keywords",name:"keywords",content:"Mobile Banking, Credit Cards, Mortgages, Auto Loan"},{hid:"og:title",property:"og:title",content:"Bastons Banks | Admin Login"},{hid:"og:description",property:"og:description",content:"Mobile Banking, Credit Cards, Mortgages, Auto Loan"},{hid:"og:type",property:"og:type",content:"website"},{hid:"og:url",property:"og:url",content:"https://www.bastonsbanks.com/admin"},{hid:"og:image",property:"og:image",content:"@/assets/img/preview.png"},{hid:"twitter:card",name:"twitter:card",content:""},{hid:"twitter:title",name:"twitter:title",content:"Bastons Banks | Admin Login"},{hid:"twitter:description",name:"twitter:description",content:"Mobile Banking, Credit Cards, Mortgages, Auto Loan"},{hid:"twitter:image",name:"twitter:image",content:"@/assets/img/preview.png"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}]}},data:function(){return{processing:!1,isEmailValid:!0,form:{email:"",password:""}}},computed:{isFormEmpty:function(){return!(!this.form.email||!this.form.password)}},watch:{"form.email":function(t){this.form.email=t,this.validateEmail(t)}},methods:{handleLogin:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,o,data,r,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.processing=!0,n='\n          mutation {\n            adminLogin(email: "'.concat(t.form.email,'", password: "').concat(t.form.password,'") {\n              jwt\n              user {\n                id\n                name\n                email\n                role\n                phoneNumber\n                dob\n                gender\n                ssn\n                occupation\n                country\n                city\n                zip\n                address\n                accountCurrency\n                pin\n                passport\n                identification\n                Status\n                PlanType\n                accountBalance\n                cardBalance\n                cardNumber\n                expiry\n                cvv\n                eth\n                btc\n                timeAdded\n                admin {\n                  eth\n                  btc\n                  id\n                  email\n                  role\n                  name\n                  Status\n                  timeAdded\n                }\n              }\n            }\n          }\n        '),e.prev=2,e.next=5,fetch("https://api.bastonsbanks.com/graphql/query",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({query:n,variables:{email:t.form.email,password:t.form.password}})});case 5:return o=e.sent,e.next=8,o.json();case 8:null!=(data=e.sent)&&data.errors?t.$toastr.e(data.errors[0].message):(sessionStorage.setItem("auth",JSON.stringify(null==data||null===(r=data.data)||void 0===r||null===(r=r.adminLogin)||void 0===r?void 0:r.jwt)),sessionStorage.setItem("user",JSON.stringify(null==data||null===(d=data.data)||void 0===d||null===(d=d.adminLogin)||void 0===d?void 0:d.user)),t.$toastr.s("Login was successful"),t.$router.push("/admins/dashboard/users"));case 10:return e.prev=10,t.processing=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[2,,10,13]])})))()},validateEmail:function(t){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)?this.isEmailValid=!0:this.isEmailValid=!1}}}),l=n(16),component=Object(l.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"},[t._m(0),t._v(" "),e("div",{staticClass:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"},[e("form",{staticClass:"space-y-6",on:{submit:function(e){return e.preventDefault(),t.handleLogin.apply(null,arguments)}}},[e("div",[e("label",{staticClass:"block text-sm font-medium leading-6 text-gray-900",attrs:{for:"email"}},[t._v("Email address")]),t._v(" "),e("div",{staticClass:"mt-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"block py-3 px-3 w-full rounded-md text-gray-900 shadow-sm ring-1 ring-inset border-[0.6px] bg-gray-100 border-gray-500 sm:text-sm sm:leading-6",attrs:{id:"email",name:"email",type:"email",autocomplete:"email",required:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),t._v(" "),e("div",[e("div",{staticClass:"flex items-center justify-between"},[e("label",{staticClass:"block text-sm font-medium leading-6 text-gray-900",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),e("div",{staticClass:"text-sm"},[e("nuxt-link",{staticClass:"font-semibold text-indigo-600 hover:text-indigo-500",attrs:{to:"/user/forgot"}},[t._v("Forgot\n              password?")])],1)]),t._v(" "),e("div",{staticClass:"mt-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"block py-3 px-3 w-full rounded-md text-gray-900 shadow-sm ring-1 ring-inset border-[0.6px] bg-gray-100 border-gray-500 sm:text-sm sm:leading-6",attrs:{id:"password",name:"password",type:"password",autocomplete:"current-password",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})])]),t._v(" "),e("div",[e("button",{staticClass:"flex w-full disabled:cursor-not-allowed disabled:opacity-25 justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",attrs:{disabled:!t.isFormEmpty||t.processing,type:"submit"}},[t._v(t._s(t.processing?"loading..":"Sign In"))])])])])])}),o,!1,null,null,null);e.default=component.exports}}]);