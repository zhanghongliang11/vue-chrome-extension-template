import VueRouter from 'vue-router'

/**
 * Splash related page
 */
import Splash from './main/index'


/**
 * Account related page
 */
import Account from './account/index'
import AccountMain from './account/main'
// import Send from './account/send'
// import ImportAccount from './account/import-account'
// import AddToken from './account/token/add'
// import SendToken from './account/token/send'
// import TokenMain from './account/token/main'

/**
 * Wallet related page
 */
import Wallet from './wallet/index'
import CreateWallet from './wallet/create/step-password'
import BackupMnemonic from './wallet/create/step-backup-mnemonic'
import ValidateMnemonic from './wallet/create/step-validate-mnemonic'
import ChangePassword from './setting/change-password'
import ImportWallet from './wallet/import-wallet'

const router = new VueRouter({
  routes:[
    {
      name: 'welcome',
      path: '/',
      component: Splash
    },
    {
      name: 'wallet',
      path: '/wallet',
      component: Wallet,
      children: [{
        name: 'createWallet',
        path: 'create/password',
        component: CreateWallet
      }, {
        name: 'backupWalletMnemonic',
        path: 'create/backup-mnemonic',
        component: BackupMnemonic
      }, {
        name: 'validateWalletMnemonic',
        path: 'create/validate-mnemonic',
        component: ValidateMnemonic,
        props: (route) => {
          return {
            mnemonics: (route.query.mnemonic || '').split(' ')
          }
        }
      },]
    },
    {
      name: 'account',
      path: '/account',
      component: Account,
      children: [{
        name: 'accountMain',
        path: 'index',
        component: AccountMain
      }]
    },
  ]
})
export default router 