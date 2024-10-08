<template>
  <main>
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold leading-6 text-gray-900">Withdrawals</h1>
          <p class="mt-2 text-sm text-gray-700">For withdrawals completed from {{ withdrawalsDateRange }}</p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button @click="downloadWithdrawals" type="button"
            class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Print</button>
        </div>
      </div>
      <div v-if="transactionsList?.length && !loading"
        class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table class="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Account
              </th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Amount</th>
              <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white">
            <tr v-for="transaction in transactionsList" :key="transaction.id">
              <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                <div class="font-medium text-gray-900">
                  {{ transaction.beneficiaryAccountNumber?.length ?
            transaction.beneficiaryAccountNumber : 'Nil' }}
                </div>
                <div class="mt-1 truncate text-gray-500">{{ transaction.beneficiaryName?.length ?
            transaction.beneficiaryName : 'Nil' }}
                </div>
              </td>
              <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                <div class="text-gray-900">{{ formatDateTime(transaction.timeAdded) ?? 'Nil' }}</div>
                <!-- <div class="mt-1 text-gray-500">Optimization</div> -->
              </td>
              <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                <span
                  :class="[transaction.transactionStatus === 'Pending' ? 'bg-yellow-500 py-2 text-xs text-white px-2.5 rounded-full' : transaction.transactionStatus === 'Approved' ? 'bg-green-500 py-2.5 text-xs text-white px-3 rounded-full' : transaction.transactionStatus === 'Declined' ? 'bg-red-500 py-2.5 text-xs text-white px-3 rounded-full' : '']">
                  {{ transaction.transactionStatus ?? 'Nil' }}</span>
              </td>
              <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                {{ user.accountCurrency ?? 'Nil' }}{{
            formatNumberAsDollar(transaction.amount) ?? 'Nil' }}
              </td>
              <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                <a @click.prevent="previewTransaction(transaction)" href="#"
                  class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
              </td>
            </tr>

            <!-- More people... -->
          </tbody>
        </table>
      </div>
      <div v-else-if="loading && !transactionsList?.length" class="bg-white rounded-lg shadow-md p-4 animate-pulse">
        <div class="w-full h-32 bg-gray-300 rounded mb-2"></div>
      </div>
      <EmptyState title="No Withdrawals available" desc="Please perform a withdrawal transaction" v-else />
    </div>
    <Modal :isVisible.sync="isModalVisible">
      <div class="overflow-hidden">
        <div class="px-4 py-6 sm:px-6">
          <h3 class="text-base font-semibold leading-7 text-gray-900">Withdrawal Information</h3>
        </div>
        <div class="border-t border-gray-100">
          <dl class="divide-y divide-gray-100">
            <div class="px-4 py-6 flex justify-between items-center sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-900">Amount</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <div>
                  <span v-if="Object.keys(user).length">
                    {{ user.accountCurrency ?? 'Nil' }}{{
            formatNumberAsDollar(selectedTransaction.amount) ?? 'Nil' }}
                  </span>
                  <span v-else>Nil</span>
                </div>
              </dd>
            </div>
            <div class="px-4 py-6 flex justify-between items-center sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-900">Beneficiary Account Number</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {{ selectedTransaction.beneficiaryAccountNumber?.length ? selectedTransaction.beneficiaryAccountNumber :
            'Nil' }}</dd>
            </div>
            <div class="px-4 py-6 flex justify-between items-center sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-900">Beneficiary Name</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {{ selectedTransaction.beneficiaryName?.length ? selectedTransaction.beneficiaryName : 'Nil' }}</dd>
            </div>
            <div class="px-4 py-6 flex justify-between items-center sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-900">Receiving Bank Name</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {{ selectedTransaction.receivingBankName?.length ? selectedTransaction.receivingBankName : 'Nil' }}</dd>
            </div>
            <div class="px-4 py-6 flex justify-between items-center sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-900">Routing Number</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{
            selectedTransaction.routingNumber?.length ? selectedTransaction.routingNumber
              : 'Nil' }}</dd>
            </div>
            <div class="px-4 py-6 flex justify-between items-center sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-900">Wallet</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{
            selectedTransaction.wallet?.length ? selectedTransaction.wallet :
              'Nil' }}</dd>
            </div>
            <div class="px-4 py-6 flex justify-between items-center sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-900">Transaction Status</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {{ selectedTransaction.transactionStatus?.length ? selectedTransaction.transactionStatus : 'Nil' }}</dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="w-full pt-10">
        <button @click="isModalVisible = false" class="bg-green-500 text-white w-full py-2.5 rounded-md">Close</button>
      </div>
    </Modal>
  </main>
</template>

<script>
import EmptyState from '@/components/core/EmptyState.vue'
import Modal from '@/components/core/Modal.vue'
export default {
  layout: 'user-dashboard',
  head() {
    return {
      title: 'Bastons Banks | User Dashboard',
      meta: [
        // Standard meta tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // SEO meta tags
        { hid: 'description', name: 'description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'keywords', name: 'keywords', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },

        // Open Graph / Facebook meta tags for rich sharing
        { hid: 'og:title', property: 'og:title', content: 'Bastons Banks | User Dashboard' },
        { hid: 'og:description', property: 'og:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.bastonsbanks.com/user/withdrawals' },
        { hid: 'og:image', property: 'og:image', content: '@/assets/img/preview.png' },

        // Twitter Card meta tags
        { hid: 'twitter:card', name: 'twitter:card', content: '' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Bastons Banks | User Dashboard' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'twitter:image', name: 'twitter:image', content: '@/assets/img/preview.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
  components: {
    Modal,
    EmptyState
  },
  data() {
    return {
      user: {},
      transactionsList: [],
      isModalVisible: false,
      selectedTransaction: {},
      loading: false,
      withdrawalsDateRange: ''
    }
  },
  created() {
    this.fetchTransactions()
  },
  mounted() {
    this.getUser()
  },
  methods: {
    downloadWithdrawals() {
      this.$downloadCSV(this.transactionsList, 'withdrawals-data.csv');
    },
    async fetchTransactions() {
      this.loading = true
      if (process.client) {
        const accessToken = JSON.parse(sessionStorage.getItem('auth'))
        this.loading = true
        const query = `
        query {
          getUsersTransactions {
            id
            amount
            beneficiaryName
            beneficiaryAccountNumber
            receivingBankName
            routingNumber
            wallet
            transactionType
            transactionStatus
            user {
              id
              name
              email
              role
              phoneNumber
              dob
              gender
              ssn
              occupation
              country
              city
              zip
              address
              accountCurrency
              pin
              passport
              identification
              Status
              PlanType
              accountBalance
              cardBalance
              cardNumber
              expiry
              cvv
              eth
              btc
              timeAdded
            }
            proof
            timeAdded
          }
        }
      `

        try {
          const response = await fetch('https://api.bastonsbanks.com/graphql/query', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: 'Bearer ' + accessToken
            },
            body: JSON.stringify({
              query
            })
          })
          const data = await response.json()
          if (data?.errors) {
            this.$toastr.e(data.errors[0].message)
          } else {
            let result = data.data.getUsersTransactions
            this.transactionsList = result.filter(transaction => transaction.transactionType === 'withdrawal')
            const dates = this.transactionsList.map(transaction => new Date(transaction.timeAdded))
            const earliestDate = new Date(Math.min.apply(null, dates))
            const mostRecentDate = new Date(Math.max.apply(null, dates))
            this.withdrawalsDateRange = `Withdrawals from ${earliestDate.toISOString().split('T')[0]} to ${mostRecentDate.toISOString().split('T')[0]}`
          }
        } finally {
          this.loading = false
        }
      }
    },
    formatDateTime(date) {
      // Check if date is a string and convert it to a Date object
      if (typeof date === 'string') {
        date = new Date(date)
      }

      // Check if date is a valid Date object
      if (Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime())) {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' }
        return date.toLocaleDateString('en-US', options)
      } else {
        return 'Invalid Date'
      }
    },
    formatNumberAsDollar(number) {
      return number?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    },
    previewTransaction(data) {
      this.isModalVisible = true
      this.selectedTransaction = data
    },
    getUser() {
      if (process.client) {
        const user = JSON.parse(sessionStorage.getItem('user'))
        this.user = user
      }
    }
  },
}
</script>
