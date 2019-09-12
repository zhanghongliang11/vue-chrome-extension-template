<template>
  <main-layout>
    <!-- <token-list
        slot="drawer"
        @active-token-change="handleActiveTokenChange"
        :active-reg-id="null"
        :active-account="activeAccount"
        :active-address="activeAddress"
        :network="network"
        :tokens="tokens">
    </token-list> -->

    <coin-card
        v-if="activeAccountInfo"
        style="margin: 16px;"
        :show-register-button="!activeAccountInfo.regID"
        name="wicc"
        :address="address"
        :value="balance">
    </coin-card>

    <template slot="body">
      <trans-history
          :transactions="transactions"
          :show-empty-block="!loading"></trans-history>
    </template>

    <template class="footer" slot="footer">
      <button class="btn-primary" @click="gotoSend">{{ $t('account.main.sendButton') }}</button>
      <button @click="handleReceiveClick">{{ $t('account.main.receiveButton') }}</button>
    </template>
  </main-layout>
</template>

<style scoped lang="scss">
  .button-wrapper {
    > button {
      flex: 1 0 0;
    }

    > button:first-child {
      margin-right: 10px;
    }
  }
</style>

<script type="text/jsx">
  import { DrawerLayout } from 'vue-drawer-layout'
  import TokenList from './components/token-list'
  import CoinCard from './components/coin-card'
  import TransHistory from './components/trans-history'
  import { openQrCodeDialog } from './dialog'
  import StateWatcher from './state-watcher'
  import MainLayout from './components/main-layout'
  import axios from "axios";
  export default {
    mixins: [StateWatcher],

    components: {
      MainLayout,
      DrawerLayout,
      TokenList,
      CoinCard,
      TransHistory
    },

    created () {
     
     
      // this.eventBus.$on('account:transactions:refresh', this.refresh)

      // this.timer = setInterval(() => {
      //   this.refresh(true)
      // }, 15 * 1000)
      
    },
    mounted(){
      // let wallet = JSON.parse(localStorage.getItem('wallet'));
      // this.address = wallet.address
      // this.balance = this.getBalance(this.address)
      // this.wallet = this.$route.query.wallet;
      // console.log('wallet',this.wallet)
      // console.log(this.$route.query)
    },
    destroyed () {
      this.eventBus.$off('account:transactions:refresh', this.refresh)
      clearInterval(this.timer)
    },

    watch: {
      activeAddress (news,old) {
         console.log('news',news)
         console.log('old',old)
        this.refresh()
      }
    },

    methods: {
      //获取余额
      getBalance(address) {
        console.log('111111111111111111111111111111111111',address)
     
      axios.get(
          "https://api-wallet-ela.elastos.org/api/1/balance/" + address
        ).then(res => {
          this.balance = res.data.result;
          localStorage.setItem("balance", this.balance);
          console.log(this.balance);
        }).catch(res => {
          console.log(res);
        });
        
    },
      handleActiveTokenChange (token) {
        if (token) {
          this.$router.push({
            name: 'tokenMain',
            query: {
              name: token.name,
              regId: token.regId
            }
          })
        }
      },

      refresh (silence = false) {
        
        const activeAddress = this.activeAddress
        console.log('sdffffffffffffffffffffffffffffffffff',activeAddress)
        if (!silence) {
          this.$loading(this.$t('common.loading'))
        }

      

        return API.getTransHistory(this.network, this.activeAddress).then((value) => {
          this.transactions = value
          return value
        })
      },

      gotoSend () {
        this.$router.push({
          name: 'send',
          query: {
            balance: this.activeAccountInfo ? this.activeAccountInfo.balanceText : null
          }
        })
      },

      toggleDrawer() {
        this.$refs.drawerLayout.toggle()
      },

      handleReceiveClick () {
        openQrCodeDialog(this.activeAddress)
      }
    },

    data () {
      return {
        loading: false,

        activeAccountInfo: null,
        transactions: null,
        wallet:'',
        balance:0
      }
    }
  }
</script>
