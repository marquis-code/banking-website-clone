(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{473:function(e,t,r){"use strict";r.r(t);var n=r(10),o=(r(52),r(28),r(15),{layout:"admin-auth",data:function(){return{processing:!1,isEmailValid:!0,form:{amount:"",beneficiaryName:"",beneficiaryAccountNumber:"",receivingBankName:"",routingNumber:""}}},computed:{isFormEmpty:function(){return!!(this.form.amount&&this.form.beneficiaryName&&this.form.beneficiaryAccountNumber&&this.form.receivingBankName&&this.form.routingNumber)},isInternalTransferFormEmpty:function(){return!!(this.form.amount&&this.form.beneficiaryName&&this.form.beneficiaryAccountNumber)}},methods:{handleWireTransfer:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,m,c,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.processing=!0,r=JSON.parse(sessionStorage.getItem("auth")),t.prev=3,n={amount:e.form.amount,transactionType:"withdrawal",beneficiaryName:e.form.beneficiaryName,beneficiaryAccountNumber:e.form.beneficiaryAccountNumber,receivingBankName:e.form.receivingBankName,routingNumber:e.form.routingNumber},o={amount:e.form.amount,transactionType:"withdrawal",beneficiaryName:e.form.beneficiaryName,beneficiaryAccountNumber:e.form.beneficiaryAccountNumber},m="internal-transfer"!==e.$route.query.page?n:o,"\n          mutation newTransaction($input: NewTransaction!) {\n            newTransaction(input: $input)\n          }\n        ",t.next=10,fetch("https://fidelityvalues.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer "+r},body:JSON.stringify({query:"\n          mutation newTransaction($input: NewTransaction!) {\n            newTransaction(input: $input)\n          }\n        ",variables:{input:m}})});case 10:return c=t.sent,t.next=13,c.json();case 13:null!=(data=t.sent)&&data.errors?e.$toastr.e(data.errors[0].message):(e.$toastr.s("You have successfully initiated a ".concat("wire-transfer"===e.$route.query.page?"wire transfer":"local-transfer"===e.$route.query.page?"Local transfer":"internal-transfer"===e.$route.query.page?"Internal Transfer":"")),e.form.amount,e.form.beneficiaryName,e.form.beneficiaryAccountNumber,e.form.receivingBankName,e.form.routingNumber,e.$emit("transferSuccess"));case 15:return t.prev=15,e.processing=!1,t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[3,,15,18]])})))()}}}),m=r(11),component=Object(m.a)(o,(function(){var e=this,t=e._self._c;return t("form",{staticClass:"space-y-6 p-4",on:{submit:function(t){return t.preventDefault(),e.handleWireTransfer.apply(null,arguments)}}},[t("div",[t("label",{staticClass:"block text-sm font-medium leading-6 text-gray-900",attrs:{for:"amount"}},[e._v("Amount")]),e._v(" "),t("div",{staticClass:"mt-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.amount,expression:"form.amount"}],staticClass:"block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",attrs:{id:"amount",name:"amount",type:"tel"},domProps:{value:e.form.amount},on:{input:function(t){t.target.composing||e.$set(e.form,"amount",t.target.value)}}})])]),e._v(" "),t("div",[t("label",{staticClass:"block text-sm font-medium leading-6 text-gray-900",attrs:{for:"beneficiary-name"}},[e._v("Beneficiary Name")]),e._v(" "),t("div",{staticClass:"mt-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.beneficiaryName,expression:"form.beneficiaryName"}],staticClass:"block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",attrs:{id:"beneficiary-name",name:"beneficiary-name",type:"text"},domProps:{value:e.form.beneficiaryName},on:{input:function(t){t.target.composing||e.$set(e.form,"beneficiaryName",t.target.value)}}})])]),e._v(" "),t("div",[t("label",{staticClass:"block text-sm font-medium leading-6 text-gray-900",attrs:{for:"beneficiary-account"}},[e._v("Beneficiary Account\n      Number / IBAN")]),e._v(" "),t("div",{staticClass:"mt-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.beneficiaryAccountNumber,expression:"form.beneficiaryAccountNumber"}],staticClass:"block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",attrs:{id:"beneficiary-account",name:"beneficiary-account",type:"tel"},domProps:{value:e.form.beneficiaryAccountNumber},on:{input:function(t){t.target.composing||e.$set(e.form,"beneficiaryAccountNumber",t.target.value)}}})])]),e._v(" "),"internal-transfer"!==e.$route.query.page?t("div",[t("label",{staticClass:"block text-sm font-medium leading-6 text-gray-900",attrs:{for:"recieving-bank-name"}},[e._v("Receiving Bank\n      Name")]),e._v(" "),t("div",{staticClass:"mt-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.receivingBankName,expression:"form.receivingBankName"}],staticClass:"block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",attrs:{id:"recieving-bank-name",name:"recieving-bank-name",type:"text"},domProps:{value:e.form.receivingBankName},on:{input:function(t){t.target.composing||e.$set(e.form,"receivingBankName",t.target.value)}}})])]):e._e(),e._v(" "),"internal-transfer"!==e.$route.query.page?t("div",[t("label",{staticClass:"block text-sm font-medium leading-6 text-gray-900",attrs:{for:"aba-routing-number"}},[e._v("ABA Routing\n      Number")]),e._v(" "),t("div",{staticClass:"mt-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.routingNumber,expression:"form.routingNumber"}],staticClass:"block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",attrs:{id:"aba-routing-number",name:"aba-routing-number",type:"tel",max:"9",min:"9"},domProps:{value:e.form.routingNumber},on:{input:function(t){t.target.composing||e.$set(e.form,"routingNumber",t.target.value)}}})])]):e._e(),e._v(" "),t("div",["wire-transfer"===e.$route.query.page||"local-transfer"===e.$route.query.page?t("button",{staticClass:"flex w-full justify-center rounded-md disabled:cursor-not-allowed disabled:opacity-25 bg-yellow-600 px-3 py-2.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",attrs:{disabled:!e.isFormEmpty||e.processing,type:"submit"}},[e._v(e._s(e.processing?"processing..":"Submit"))]):e._e(),e._v(" "),"internal-transfer"===e.$route.query.page?t("button",{staticClass:"flex w-full justify-center rounded-md disabled:cursor-not-allowed disabled:opacity-25 bg-yellow-600 px-3 py-2.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",attrs:{disabled:!e.isInternalTransferFormEmpty||e.processing,type:"submit"}},[e._v(e._s(e.processing?"processing..":"Submit"))]):e._e()])])}),[],!1,null,null,null);t.default=component.exports}}]);