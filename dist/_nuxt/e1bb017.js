(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{454:function(e,t,o){"use strict";o.r(t);var n=o(10),r=(o(67),o(13),o(35),o(36),o(443),o(209),{layout:"admin-dashboard",data:function(){return{identificationFilePreview:"",isPdf:!1,processing:!1,docfileError:null,form:{amount:"",proof:""}}},methods:{handleChequeDeposit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o,n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.processing=!0,o=JSON.parse(window.localStorage.getItem("auth")),t.prev=3,"\n          mutation newTransaction($input: NewTransaction!) {\n            newTransaction(input: $input)\n          }\n        ",t.next=7,fetch("https://fidelityvalues.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer "+o},body:JSON.stringify({query:"\n          mutation newTransaction($input: NewTransaction!) {\n            newTransaction(input: $input)\n          }\n        ",variables:{input:{amount:e.form.amount,transactionType:"deposit",proof:e.form.proof}}})});case 7:return n=t.sent,t.next=10,n.json();case 10:null!=(data=t.sent)&&data.errors?e.$toastr.e(data.errors[0].message):(e.$toastr.s("You have successfully initiated a cheque deposit"),e.form.amount,e.form.proof,e.$emit("chequeDepositSuccess"));case 12:return t.prev=12,e.processing=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[3,,12,15]])})))()},handleMeansOfIdentificationUpload:function(e){var t=this,o=e.target.files[0];if(o){if(o.size>5242880)return void(this.docfileError="File is too large. Please upload a file smaller than 5MB.");this.docfileError=null;var n=o.type;if(this.isPdf="application/pdf"===n,this.isPdf||"image/png"===n||"image/jpeg"===n||"image/gif"===n){this.identificationFilePreview=URL.createObjectURL(o);var r=new FileReader;r.onload=function(){t.form.proof=r.result},r.readAsDataURL(o)}else this.docfileError="Unsupported file type. Please upload a PDF, PNG, JPG, or GIF file."}}},computed:{isFormEmpty:function(){return!(!this.form.amount||!this.form.proof)}},beforeDestroy:function(){this.identificationFilePreview&&URL.revokeObjectURL(this.identificationFilePreview)}}),l=o(9),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("form",{staticClass:"space-y-6 p-4",on:{submit:function(t){return t.preventDefault(),e.handleChequeDeposit.apply(null,arguments)}}},[t("div",[t("label",{staticClass:"block text-sm font-medium leading-6 text-gray-900",attrs:{for:"deposit-amount"}},[e._v("Amount")]),e._v(" "),t("div",{staticClass:"mt-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.amount,expression:"form.amount"}],staticClass:"block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",attrs:{id:"deposit-amount",name:"deposit-amount",type:"tel"},domProps:{value:e.form.amount},on:{input:function(t){t.target.composing||e.$set(e.form,"amount",t.target.value)}}})])]),e._v(" "),t("div",[t("label",{staticClass:"block text-sm font-medium leading-6 text-gray-900",attrs:{for:"password"}},[e._v("Proof of deposit")]),e._v(" "),t("div",{staticClass:"mt-2"},[e.identificationFilePreview?e._e():t("div",{staticClass:"col-span-full"},[t("div",{staticClass:"mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"},[t("div",{staticClass:"text-center"},[t("svg",{staticClass:"mx-auto h-12 w-12 text-gray-300",attrs:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z","clip-rule":"evenodd"}})]),e._v(" "),t("div",{staticClass:"mt-4 flex text-sm leading-6 text-gray-600"},[t("label",{staticClass:"relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500",attrs:{for:"file-upload"}},[t("span",[e._v("Upload a file")]),e._v(" "),t("input",{staticClass:"sr-only",attrs:{id:"file-upload",name:"file-upload",type:"file"},on:{change:e.handleMeansOfIdentificationUpload}})]),e._v(" "),t("p",{staticClass:"pl-1"},[e._v("or drag and drop")])]),e._v(" "),t("p",{staticClass:"text-xs leading-5 text-gray-600"},[e._v("\n              PNG, JPG, GIF up to 10MB\n            ")])])])]),e._v(" "),e.docfileError?t("div",{staticClass:"error text-red-500 text-xs pt-2 font-medium"},[e._v("\n        "+e._s(e.docfileError)+"\n      ")]):e._e(),e._v(" "),e.isPdf&&e.identificationFilePreview?t("iframe",{staticStyle:{width:"100%",height:"500px"},attrs:{src:e.identificationFilePreview}}):e._e(),e._v(" "),!e.isPdf&&e.identificationFilePreview?t("img",{staticStyle:{"max-width":"100%","max-height":"500px"},attrs:{src:e.identificationFilePreview}}):e._e()])]),e._v(" "),t("div",[t("button",{staticClass:"flex w-full disabled:cursor-not-allowed disabled:opacity-25 justify-center rounded-md bg-yellow-600 px-3 py-2.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",attrs:{type:"submit",disabled:!e.isFormEmpty||e.processing}},[e._v(e._s(e.processing?"processing..":"Submit"))])])])}),[],!1,null,null,null);t.default=component.exports}}]);