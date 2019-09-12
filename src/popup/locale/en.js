export default {
  common: {
    confirm: 'Confirm',
    cancel: 'Cancel',
    activeAccount: 'Activate',
    copySuccess: 'Copied',
    fast: 'Fast',
    slow: 'Slow',
    minerFee: 'Gas fee',
    accountLabel: 'Account',
    copyAddress: 'Copy Address',
    unknownError: 'Unknown Error',
    warning: 'Warning',
    loading: 'Loading...'
  },

  errors: {
    passwordError: 'The password you entered is incorrect.',
    passwordInConsistent: 'Passwords do not match. Please check.',
    insufficientBalance: 'Insufficient balance',
    amountLessThanLimit: 'The transferred amount should not less than 0.0001',
    accountNotActivated: 'Please activate your wallet first',
    accountAlreadyExists: 'Account already exists',
    passwordInvalid: 'The input current password is incorrect',
    inActivating: 'Activating, please wait'
  },

  splash: {
    passwordPlaceholder: 'Please enter 6~20 characters',
    unlockButton: 'Log in',
    restoreWalletButton: 'Recover your wallet with mnemonics.',
    createWalletButton: 'Create Wallet',
    importWalletButton: 'Import Wallet'
  },

  account: {
    import: {
      title: 'Import Account',
      typeLabel: 'Type',
      mnemonicType: 'Mnemonics',
      privateKeyType: 'Private Key',
      mnemonicLabel: 'Mnemonics',
      mnemonicPlaceholder: 'Input mnemonics',
      privateKeyLabel: 'Private Key',
      privateKeyPlaceholder: 'Input private key',
      confirmLoading: 'Importing...',
      importSuccess: 'Import successfully',
      importFailure: 'Failed to import '
    },
    header: {
      network: 'Network',
      defaultNetwork: 'The default network is MainNet',
      logout: 'Logout',
      viewMnemonic: 'View mnemonics',
      exportPrivateKey: 'Export Private Key',
      createAccount: 'Create Account',
      importAccount: 'Import Account',
      about: 'Info',
      setting: 'Setting',
      mainnet: 'WICC MainNet',
      testnet: 'WICC TestNet'
    },
    addToken: {
      title: 'Add Token',
      regIdLabel: 'Contract RegID',
      regIdPlaceholder: 'Input contract RegID',
      nameLabel: 'Token name',
      namePlaceholder: 'Input token name',
      precisionLabel: 'Token precision',
      precisionPlaceholder: 'Input token precision',
      confirmLoading: 'Adding...',
      addSuccess: 'Token added',
      addFailure: 'Failed to add token'
    },
    sendToken: {
      title: 'Transfer',
      fromLabel: 'From',
      destLabel: 'To',
      destPlaceHolder: 'Recipient address',
      valueLabel: 'Amount',
      limit: 'Transfer Limit：',
      valuePlaceHolder: 'Input amount',
      descLabel: 'Comment（Optional）',
      confirmButton: 'Confirm',
      confirmLoading: 'Submitting...',
      sendSuccess: 'Submit successfully',
      sendFailure: 'Failed to submit '
    },
    send: {
      title: 'Transfer',
      fromLabel: 'From',
      destLabel: 'To',
      destPlaceHolder: 'Recipient Address',
      valueLabel: 'Amount',
      valuePlaceHolder: 'Input amount',
      descLabel: 'Comment（Optional）',
      addressInvalid: 'Input WICC mainnet address, ',
      testnetAddressInvalid: 'Input WICC testnet address',
      confirmButton: 'Confirm',
      confirmLoading: 'Submitting...',
      sendSuccess: 'Submit successfully',
      sendFailure: 'Failed to submit'
    },
    main: {
      tokenList: 'Token List',
      removeToken: 'Hide token',
      removeTokenSuccess: 'Hide successfully',
      removeTokenFailed: 'Failed to hide',
      sendButton: 'Transfer',
      receiveButton: 'Receive',
      addTokenButton: 'Add token',
      expect: 'Coming soon'
    },
    dialog: {
      passwordTitle: 'Input Password',
      passwordPlaceHolder: 'Please enter 6~20 characters',
      viewMnemonicTitle: 'View mnemonics',
      viewMnemonicTip: 'Keeping mnemonics is equivalent to owning an asset, so be sure to keep it in a safe place.',
      downloadMnemonicButton: 'Download',
      exportPkTitle: 'Export private key',
      exportPkTip: 'The private key is not encrypted and the risk of disclosure is extremely high. Please keep it in a safe place.',
      copyPkButton: 'Copy',
      registerTitle: 'Are you sure to activate the wallet? ',
      registerTip: 'Activating the wallet requires 0.0001 WICC, and the activation uses the WICC in the wallet.',
      registerLoading: 'Activating...',
      registerSuccess: 'Activate successfully',
      registerFailed: 'Failed to activate'
    },
    transDetail: {
      fromLabel: 'From',
      toLabel: 'To',
      feesLabel: 'Gas fee',
      hashLabel: 'Tx hash',
      commentLabel: 'Comment',
      txTypeLabel: 'Type',
      confirmedTimeLabel: 'Confirmation time'
    },
    transHistory: {
      title: 'History',
      statusConfirmed: 'Completed',
      statusPending: 'Pending...',
      emptyBlock: 'No history'
    }
  },

  wallet: {
    create: {
      password: {
        title: 'Set Password',
        tip: 'wallet doesn\'t store your wallet password and can\'t help you get it back, so keep it in mind.',
        password: 'Password',
        passwordPlaceholder: 'Please enter 6~20 characters',
        password2: 'Confirm Password',
        password2Placeholder: 'Input password again',
        confirmButton: 'Create',
        importButton: 'Import'
      },
      backup: {
        title: 'Backup Mnemonics',
        tip: 'Keeping mnemonics is equivalent to owning an asset, so be sure to keep it in a safe place.',
        mnemonicLabel: 'Please copy the following mnemonics. We will verify them in the next step.',
        nextButton: 'Next',
        downloadButton: 'Download'
      },
      validate: {
        title: 'Verify Mnemonics',
        mnemonicLabel: 'Please click on the mnemonics in order to verify that if your backup is correct.',
        validateErrorTip: 'The mnemonics inputted are incorrect, please check!',
        confirmLoading: 'Creating...',
        createSuccess: 'Create successfully',
        createFailure: 'Failed to create'
      }
    },
    import: {
      title: 'Import Wallet',
      tip: 'This action will overwrite all account info in wallet, please use with caution!',
      mnemonic: 'Mnemonics',
      mnemonicPlaceholder: 'Input mnemonics',
      password: 'Password',
      passwordPlaceholder: 'Please enter 6~20 characters',
      password2: 'Confirm Password',
      password2Placeholder: 'Input password again',
      confirmLoading: 'Importing...',
      importSuccess: 'Import successfully',
      importFailure: 'Failed to import',
      correctMnemonic: 'Please enter correct mnemonic'
    }
  },

  setting: {
    index: {
      title: 'Setting',
      language: 'Language',
      changePassword: 'Change Password',
      walletTitle: 'Reset Wallet',
      createWallet: 'Create Wallet',
      importWallet: 'Import Wallet'
    },
    about: {
      title: 'Info',
      name: 'WaykiMax',
      links: 'Links',
      homepage: 'wallet Offical Website',
      devCenter: 'wallet Developer Portal'
    },
    password: {
      title: 'Change Password',
      currentPassword: 'Current password',
      currentPasswordPlaceholder: 'Input current password',
      newPassword: 'New password',
      newPasswordPlaceholder: 'Please enter 6~20 characters',
      newPassword2: 'Confirm new password',
      newPassword2Placeholder: 'Input new password again',
      confirmLoading: 'Loading...',
      changeSuccess: 'Password has been changed',
      changeFailure: 'Failed to change password'
    }
  },

  window: {
    contract: {
      title: 'WICC Contract Call',
      addressLabel: 'Address:',
      contractRegIdLabel: 'Contract RegID:',
      valueLabel: 'WICC amount:',
      contractLabel: 'Contract:',
      closeButton: 'Close',
      confirmButton: 'Confirm',
      confirmLoading: 'Loading...',
      createSuccess: 'Call contract successfully',
      createFailure: 'Failed to call contract'
    },
    publishContract: {
      title: 'WICC Contract Publish',
      addressLabel: 'Address:',
      scriptLabel: 'Contract script:',
      scriptDescLabel: 'Contract description:',
      closeButton: 'Close',
      confirmButton: 'Confirm',
      confirmLoading: 'Loading...',
      createSuccess: 'Create contract successfully',
      createFailure: 'Failed to create contract'
    },
    transfer: {
      title: 'WICC Transfer Confirm',
      fromLabel: 'From:',
      toLabel: 'To:',
      valueLabel: 'Amount:',
      closeButton: 'Close',
      confirmButton: 'Confirm',
      confirmLoading: 'Loading...',
      createSuccess: 'Submit successfully',
      createFailure: 'Failed to submit'
    },
    vote: {
      title: 'WICC Node Voting',
      addressLabel: 'Address:',
      valueLabel: 'Vote amount:',
      withdrawValueLabel: 'Withdrawal amount:',
      maxVoteLimit: 'The number of voted addresses should not exceed 11.',
      closeButton: 'Close',
      confirmButton: 'Confirm',
      confirmLoading: 'Loading...',
      createSuccess: 'Call successfully',
      createFailure: 'Failed to call'
    }
  }
}
