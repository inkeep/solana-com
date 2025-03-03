import defaultIcon from "../../../assets/wallets/wallet-placeholder-icon.png";
import phantomIcon from "../../../assets/wallets/icons/phantom.png";
import backpackIcon from "../../../assets/wallets/icons/backpack.png";
import solflareIcon from "../../../assets/wallets/icons/solflare.png";
import fuseIcon from "../../../assets/wallets/icons/fuse.png";
import capsuleIcon from "../../../assets/wallets/icons/capsule.png";
import okxIcon from "../../../assets/wallets/icons/okx.png";
import circleIcon from "../../../assets/wallets/icons/circle.png";
import robinhoodIcon from "../../../assets/wallets/icons/robinhood.png";
import heliumIcon from "../../../assets/wallets/icons/helium.png";
import privyIcon from "../../../assets/wallets/icons/privy.png";
import walletConnectIcon from "../../../assets/wallets/icons/walletconnect.png";
import bitGetIcon from "../../../assets/wallets/icons/bitget.png";
import braveIcon from "../../../assets/wallets/icons/brave.png";
import crossmintIcon from "../../../assets/wallets/icons/crossmint.png";
import decafIcon from "../../../assets/wallets/icons/decaf.png";
import ledgerIcon from "../../../assets/wallets/icons/ledger.png";
import tiplinkIcon from "../../../assets/wallets/icons/tiplink.png";
import trustWalletCoreIcon from "../../../assets/wallets/icons/trustwalletcore.png";
import web3authIcon from "../../../assets/wallets/icons/web3auth.png";
import binanceIcon from "../../../assets/wallets/icons/binance.png";
import exodusIcon from "../../../assets/wallets/icons/exodus.png";
import keystoneIcon from "../../../assets/wallets/icons/keystone.png";
import turnkeyIcon from "../../../assets/wallets/icons/turnkey.png";
import gemIcon from "../../../assets/wallets/icons/gem.png";
import dynamicIcon from "../../../assets/wallets/icons/dynamic.png";
import enkryptIcon from "../../../assets/wallets/icons/enkrypt.png";
import nowwalletIcon from "../../../assets/wallets/icons/nowwallet.png";
import coinwalletIcon from "../../../assets/wallets/icons/coinwallet.png";
import guardaIcon from "../../../assets/wallets/icons/guarda.png";
import cakewalletIcon from "../../../assets/wallets/icons/cakewallet.png";

export const walletData = [
  {
    name: "Phantom",
    body: "Multiple chains, one wallet. No more switching.",
    website: "https://phantom.com/",
    additionalInfo:
      "Non-Custodial/Self Custodial • Token Extensions • Actions & Blinks • Solana Pay • Buy Crypto • Sell Crypto • Hold NFTs • Staking",
    icon: phantomIcon,
    custodial: false,
    non_custodial: true,
    te: true,
    blinks_and_actions: true,
    solana_pay: true,
    buy_crypto: true,
    sell_crypto: true,
    hold_nfts: true,
    mpc: false,
    gas_abstraction: false,
    social_recovery: false,
    staking: true,
    spending_limits: false,
    open_source: false,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Backpack",
    body: "Backpack offers a robust, user-friendly platform for seamlessly trading, managing, and securing your cryptocurrency assets.",
    website: "https://backpack.app/",
    additionalInfo:
      "Non-Custodial/Self Custodial • Token Extensions • Actions & Blinks • Solana Pay • Hold NFTs • Staking • Open Source",
    icon: backpackIcon,
    custodial: false,
    non_custodial: true,
    te: true,
    blinks_and_actions: true,
    solana_pay: true,
    buy_crypto: false,
    sell_crypto: false,
    hold_nfts: true,
    mpc: false,
    gas_abstraction: false,
    social_recovery: false,
    staking: true,
    spending_limits: false,
    open_source: true,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Solflare",
    body: "A secure and powerful Solana Wallet. Buy, store, swap tokens & NFTs and access Solana DeFi from web or mobile.",
    website: "https://solflare.com/",
    additionalInfo:
      "Non-Custodial/Self Custodial • Token Extensions • Actions & Blinks • Solana Pay • Buy Crypto • Sell Crypto • Hold NFTs • Staking",
    icon: solflareIcon,
    custodial: false,
    non_custodial: true,
    te: true,
    blinks_and_actions: true,
    solana_pay: true,
    buy_crypto: true,
    sell_crypto: true,
    hold_nfts: true,
    mpc: false,
    gas_abstraction: false,
    social_recovery: false,
    staking: true,
    spending_limits: false,
    open_source: false,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Coinbase Wallet",
    body: "Your key to the world of crypto.",
    website: "https://www.coinbase.com/wallet",
    additionalInfo:
      "Non-Custodial/Self Custodial • Buy Crypto • Sell Crypto • Hold NFTs • MPC • Social recovery • Staking • Spending Limits • Open Source",
    icon: defaultIcon,
    custodial: false,
    non_custodial: true,
    te: false,
    blinks_and_actions: false,
    solana_pay: false,
    buy_crypto: true,
    sell_crypto: true,
    hold_nfts: true,
    mpc: true,
    gas_abstraction: false,
    social_recovery: false,
    staking: true,
    spending_limits: true,
    open_source: true,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Fuse Wallet",
    body: "A safe wallet for your Solana assets. 2FA. Recovery. No seed phrase.",
    website: "https://www.fusewallet.com/",
    additionalInfo:
      "Non-Custodial/Self Custodial • Buy Crypto • Sell Crypto • Hold NFTs • MPC • Gas Abstraction • Social recovery • Staking • Spending Limits • Open Source",
    icon: fuseIcon,
    custodial: false,
    non_custodial: true,
    te: false,
    blinks_and_actions: false,
    solana_pay: false,
    buy_crypto: true,
    sell_crypto: true,
    hold_nfts: true,
    mpc: true,
    gas_abstraction: true,
    social_recovery: true,
    staking: true,
    spending_limits: true,
    open_source: false,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Dynamic",
    body: "Dynamic offers a suite of tools for effortless log in, wallet creation and user management. Designed for users. Built for developers.",
    website: "https://www.dynamic.xyz/",
    additionalInfo:
      "Non-Custodial/Self Custodial • Actions & Blinks • Buy Crypto • Sell Crypto • Hold NFTs • Gas Abstraction • Social Recovery",
    icon: dynamicIcon,
    custodial: false,
    non_custodial: false,
    te: false,
    blinks_and_actions: false,
    solana_pay: false,
    buy_crypto: false,
    sell_crypto: false,
    hold_nfts: true,
    mpc: false,
    gas_abstraction: false,
    social_recovery: false,
    staking: false,
    spending_limits: false,
    open_source: false,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Capsule",
    body: "Capsule’s goal is simple: make transacting onchain easier. Capsule handles the hard stuff for you, so you can get back to perfecting your product.",
    website: "https://usecapsule.com/",
    additionalInfo:
      "Non-Custodial/Self Custodial • Token Extensions • Buy Crypto • Sell Crytpo • Hold NFTs • MPC • Gas Abstraction • Social recovery • Staking • Spending Limits • Open Source",
    icon: capsuleIcon,
    custodial: false,
    non_custodial: true,
    te: true,
    blinks_and_actions: false,
    solana_pay: false,
    buy_crypto: true,
    sell_crypto: true,
    hold_nfts: true,
    mpc: true,
    gas_abstraction: true,
    social_recovery: true,
    staking: true,
    spending_limits: true,
    open_source: true,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "OKX",
    body: "Your portal to Web3. Access 100+ decentralized networks with many more on the way.",
    website: "https://www.okx.com/web3",
    additionalInfo:
      "Custodial • Token Extensions • Actions & Blinks • Buy Crypto • Sell Crypto • Hold NFTs • Social recovery • Staking",
    icon: okxIcon,
    custodial: true,
    non_custodial: false,
    te: true,
    blinks_and_actions: true,
    solana_pay: false,
    buy_crypto: true,
    sell_crypto: true,
    hold_nfts: true,
    mpc: false,
    gas_abstraction: false,
    social_recovery: true,
    staking: true,
    spending_limits: false,
    open_source: false,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Privy",
    body: "Onboard all of your users to web3.",
    website: "https://www.privy.io/",
    additionalInfo:
      "Non-Custodial/Self Custodial • Token Extensions • Actions & Blinks • Buy Crypto • Sell Crypto • Hold NFTs • MPC • Gas Abstraction",
    icon: privyIcon,
    custodial: false,
    non_custodial: true,
    te: true,
    blinks_and_actions: true,
    solana_pay: false,
    buy_crypto: true,
    sell_crypto: true,
    hold_nfts: true,
    mpc: true,
    gas_abstraction: true,
    social_recovery: false,
    staking: false,
    spending_limits: false,
    open_source: false,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Web3Auth",
    body: "An open source, non-custodial key management network. Making Web3 simple, secure, and easy to use.",
    website: "https://tor.us/",
    additionalInfo:
      "Non-Custodial/Self Custodial • Token Extensions • Solana Pay • Buy Crypto • Sell Crypto • Hold NFTs • MPC • Gas Abstraction • Social recovery • Staking • Open Source",
    icon: web3authIcon,
    custodial: false,
    non_custodial: true,
    te: false,
    blinks_and_actions: false,
    solana_pay: true,
    buy_crypto: false,
    sell_crypto: false,
    hold_nfts: true,
    mpc: true,
    gas_abstraction: false,
    social_recovery: true,
    staking: false,
    spending_limits: false,
    open_source: true,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Exodus",
    body: "50+ networks supported. Swap between 1000s of assets..",
    website: "https://www.exodus.com/",
    additionalInfo:
      "Non-Custodial/Self Custodial • Token Extensions • Buy Crypto • Sell Crypto • Hold NFTs • Staking",
    icon: exodusIcon,
    custodial: false,
    non_custodial: true,
    te: true,
    blinks_and_actions: false,
    solana_pay: false,
    buy_crypto: false,
    sell_crypto: false,
    hold_nfts: true,
    mpc: true,
    gas_abstraction: true,
    social_recovery: true,
    staking: false,
    spending_limits: false,
    open_source: false,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Circle",
    body: "Circle: Built for Developers — Create the next revolutionary app powered by Circle digital currency and Web3 wallets.",
    website: "https://www.circle.com/programmable-wallets",
    additionalInfo:
      "Non-Custodial/Self Custodial • Token Extensions • Hold NFTs • Gas abstraction",
    icon: circleIcon,
    custodial: false,
    non_custodial: true,
    te: true,
    blinks_and_actions: false,
    solana_pay: false,
    buy_crypto: false,
    sell_crypto: false,
    hold_nfts: true,
    mpc: false,
    gas_abstraction: true,
    social_recovery: false,
    staking: false,
    spending_limits: false,
    open_source: false,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Brave",
    body: "Brave Wallet is a secure crypto wallet, built right into the Brave privacy browser. No extension required.",
    website: "https://brave.com/wallet/",
    additionalInfo:
      "Non-Custodial/Self Custodial • Token Extensions • Actions & Blinks • Buy Crypto • Sell Crypto • Hold NFTs • Spending Limits",
    icon: braveIcon,
    custodial: false,
    non_custodial: true,
    te: true,
    blinks_and_actions: true,
    solana_pay: false,
    buy_crypto: true,
    sell_crypto: true,
    hold_nfts: true,
    mpc: false,
    gas_abstraction: false,
    social_recovery: false,
    staking: false,
    spending_limits: true,
    open_source: false,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Robinhood",
    body: "The Robinhood Wallet app is a self-custody wallet that’s your portal to web3 where you can store and manage your crypto. Robinhood Wallet gives you full control over your crypto, which means you hold the private keys to your assets.",
    website: "https://robinhood.com/us/en/support/articles/robinhood-wallet/",
    additionalInfo:
      "Custodial • Buy Crypto • Sell Crypto • Social recovery • Staking • Spending Limits",
    icon: robinhoodIcon,
    custodial: true,
    non_custodial: false,
    te: false,
    blinks_and_actions: false,
    solana_pay: false,
    buy_crypto: true,
    sell_crypto: true,
    hold_nfts: false,
    mpc: false,
    gas_abstraction: false,
    social_recovery: true,
    staking: true,
    spending_limits: true,
    open_source: false,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Tiplink",
    body: "The crypto of tomorrow, today. Create a frictionless wallet with just a Google Account.",
    website: "https://tiplink.io/",
    additionalInfo:
      "Custodial • Token Extensions • Actions & Blinks • Solana Pay • Buy Crypto • Sell Crypto • Hold NFTs • Gas Abstraction",
    icon: tiplinkIcon,
    custodial: true,
    non_custodial: false,
    te: true,
    blinks_and_actions: true,
    solana_pay: true,
    buy_crypto: true,
    sell_crypto: true,
    hold_nfts: true,
    mpc: false,
    gas_abstraction: true,
    social_recovery: false,
    staking: false,
    spending_limits: false,
    open_source: false,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Trust",
    body: "Trust Wallet is a multi-chain self-custody crypto wallet and secure gateway to thousands of Web3 decentralized applications (dApps).",
    website: "https://trustwallet.com/download",
    additionalInfo:
      "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    icon: trustWalletCoreIcon,
    custodial: false,
    non_custodial: false,
    te: false,
    blinks_and_actions: false,
    solana_pay: false,
    buy_crypto: false,
    sell_crypto: false,
    hold_nfts: false,
    mpc: false,
    gas_abstraction: false,
    social_recovery: false,
    staking: false,
    spending_limits: false,
    open_source: false,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Glow",
    body: "Glow Wallet Extension is a user-friendly digital wallet designed to facilitate seamless cryptocurrency transactions.",
    website: "https://glow.app/",
    additionalInfo:
      "Non-Custodial/Self Custodial • Token Extensions • Actions & Blinks • Solana Pay • Buy Crypto • Sell Crypto • Hold NFTs • Staking",
    icon: defaultIcon,
    custodial: false,
    non_custodial: true,
    te: true,
    blinks_and_actions: true,
    solana_pay: true,
    buy_crypto: true,
    sell_crypto: true,
    hold_nfts: true,
    mpc: false,
    gas_abstraction: false,
    social_recovery: false,
    staking: true,
    spending_limits: false,
    open_source: false,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Helium",
    body: "The Helium Wallet app is the trusted way to manage your Helium account.",
    website: "https://docs.helium.com/wallets/helium-wallet-app/",
    additionalInfo: "Non-Custodial/Self Custodial • Hold NFTs • Open Source",
    icon: heliumIcon,
    custodial: false,
    non_custodial: true,
    te: false,
    blinks_and_actions: false,
    solana_pay: false,
    buy_crypto: false,
    sell_crypto: false,
    hold_nfts: true,
    mpc: false,
    gas_abstraction: false,
    social_recovery: false,
    staking: false,
    spending_limits: false,
    open_source: true,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Crossmint Non-Custodial",
    body: "The Smart Wallet for enterprises. Create non-custodial wallets for your next million users ",
    website:
      "https://www.crossmint.com/products/non-custodial-wallets-as-a-service",
    additionalInfo:
      "Non-Custodial/Self Custodial • Token Extensions • Solana Pay • Buy Crypto • Sell Crypto • Hold NFTs • Gas Abstraction • Social recovery",
    icon: crossmintIcon,
    custodial: false,
    non_custodial: true,
    te: true,
    blinks_and_actions: false,
    solana_pay: true,
    buy_crypto: true,
    sell_crypto: true,
    hold_nfts: true,
    mpc: false,
    gas_abstraction: true,
    social_recovery: true,
    staking: false,
    spending_limits: false,
    open_source: false,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Crossmint Custodial",
    body: "Make the blockchain invisible with embedded wallets. Whitelabel interoperable NFT wallets with best-in-class security.",
    website: "https://www.crossmint.com/products/custodial-wallet-as-a-service",
    additionalInfo:
      "Custodial • Token Extensions • Solana Pay • Buy Crypto • Sell Crypto • Hold NFTs • MPC • Gas Abstraction • Social recovery",
    icon: crossmintIcon,
    custodial: true,
    non_custodial: false,
    te: true,
    blinks_and_actions: false,
    solana_pay: true,
    buy_crypto: true,
    sell_crypto: true,
    hold_nfts: true,
    mpc: true,
    gas_abstraction: true,
    social_recovery: true,
    staking: false,
    spending_limits: false,
    open_source: false,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Decaf",
    body: "A Global Bank, Onchain. Instantly transfer money between 184+ countries.",
    website: "https://www.decaf.so/",
    additionalInfo:
      "Non-Custodial/Self Custodial • Token Extensions • Actions & Blinks • Solana Pay • Buy Crypto • Sell Crypto • Hold NFTs • MPS • Gas abstraction • Social recovery",
    icon: decafIcon,
    custodial: false,
    non_custodial: false,
    te: false,
    blinks_and_actions: false,
    solana_pay: false,
    buy_crypto: false,
    sell_crypto: false,
    hold_nfts: false,
    mpc: false,
    gas_abstraction: false,
    social_recovery: false,
    staking: false,
    spending_limits: false,
    open_source: false,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "WalletConnect",
    body: "WalletConnect gives developers the tools to build user experiences that make digital ownership effortless, intuitive, and secure.",
    website: "https://walletconnect.com/",
    additionalInfo:
      "Non-Custodial/Self Custodial • Buy Crypto • Sell Crypto • Hold NFTs • MPCs • Social recovery • Open Source",
    icon: walletConnectIcon,
    custodial: false,
    non_custodial: true,
    te: false,
    blinks_and_actions: false,
    solana_pay: false,
    buy_crypto: true,
    sell_crypto: true,
    hold_nfts: true,
    mpc: true,
    gas_abstraction: false,
    social_recovery: true,
    staking: false,
    spending_limits: false,
    open_source: true,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Turnkey",
    body: "Secure, flexible, and scalable wallet infrastructure helping you build better crypto products. Create thousands of embedded wallets, get rid of manual transaction flows, and automate onchain actions — all without compromising on security.",
    website: "https://www.turnkey.com/",
    additionalInfo:
      "Token Extensions • Actions & Blinks • Hold NFTs • Gas Abstraction • Social recovery • Staking • Spending Limits • Private Key Infrastructure",
    icon: turnkeyIcon,
    custodial: false,
    non_custodial: false,
    te: true,
    blinks_and_actions: true,
    solana_pay: false,
    buy_crypto: false,
    sell_crypto: false,
    hold_nfts: true,
    mpc: false,
    gas_abstraction: true,
    social_recovery: true,
    staking: true,
    spending_limits: true,
    open_source: false,
    hardware: false,
    private_key_infrastructure: true,
  },
  {
    name: "Ledger",
    body: "Physically secure your transactions with Ledger wallets. Thousands of supported coins and tokens.",
    website: "https://www.ledger.com/",
    additionalInfo:
      "Hardware • Non-Custodial/Self Custodial • Buy Crypto • Sell Crypto • Staking",
    icon: ledgerIcon,
    custodial: false,
    non_custodial: false,
    te: false,
    blinks_and_actions: false,
    solana_pay: false,
    buy_crypto: false,
    sell_crypto: false,
    hold_nfts: false,
    mpc: false,
    gas_abstraction: false,
    social_recovery: false,
    staking: false,
    spending_limits: false,
    open_source: false,
    hardware: true,
    private_key_infrastructure: false,
  },
  {
    name: "Trezor",
    body: "The ultimate hardware wallet offering highest level of security and seamless usability.",
    website: "https://trezor.io/",
    additionalInfo:
      "Hardware • Non-Custodial/Self Custodial • Buy Crypto • Sell Crypto • Staking",
    icon: defaultIcon,
    custodial: false,
    non_custodial: false,
    te: false,
    blinks_and_actions: false,
    solana_pay: false,
    buy_crypto: false,
    sell_crypto: false,
    hold_nfts: false,
    mpc: false,
    gas_abstraction: false,
    social_recovery: false,
    staking: false,
    spending_limits: false,
    open_source: false,
    hardware: true,
    private_key_infrastructure: false,
  },
  {
    name: "Keystone",
    body: "Keystone offers seamless compatibility with leading wallets, ensuring top-tier security for a wide range of cryptocurrencies.",
    website: "https://keyst.one/",
    additionalInfo: "Hardware • Non-Custodial/Self Custodial • Open Source",
    icon: keystoneIcon,
    custodial: false,
    non_custodial: false,
    te: false,
    blinks_and_actions: false,
    solana_pay: false,
    buy_crypto: false,
    sell_crypto: false,
    hold_nfts: false,
    mpc: false,
    gas_abstraction: false,
    social_recovery: false,
    staking: false,
    spending_limits: false,
    open_source: false,
    hardware: true,
    private_key_infrastructure: false,
  },
  {
    name: "Bitget",
    body: "Faster Trading, Better Assets. Bitget Wallet — Your Web3 Trading Wallet of the Future",
    website: "https://web3.bitget.com/en/",
    additionalInfo:
      "Custodial • Token Extensions • Actions & Blinks • MPC • Gas Abstraction",
    icon: bitGetIcon,
    custodial: true,
    non_custodial: false,
    te: true,
    blinks_and_actions: true,
    solana_pay: false,
    buy_crypto: false,
    sell_crypto: false,
    hold_nfts: false,
    mpc: true,
    gas_abstraction: true,
    social_recovery: false,
    staking: false,
    spending_limits: false,
    open_source: false,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Binance Web3 Wallet",
    body: "Binance Web3 wallet is a keyless, seedless, multi-chain, semi-custody wallet designed for DeFi.",
    website: "https://www.binance.com/en/web3wallet",
    additionalInfo: "Custodial • Token Extensions • MPC",
    icon: binanceIcon,
    custodial: true,
    non_custodial: false,
    te: true,
    blinks_and_actions: false,
    solana_pay: false,
    buy_crypto: false,
    sell_crypto: false,
    hold_nfts: false,
    mpc: true,
    gas_abstraction: false,
    social_recovery: false,
    staking: false,
    spending_limits: false,
    open_source: false,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Gem Wallet",
    body: "Gem Wallet is an open-source and self-custodial crypto wallet that lets you send, receive, swap, use dApps, buy, and stake cryptocurrencies.",
    website: "https://gemwallet.com/",
    additionalInfo:
      "Non-Custodial/Self Custodial • Buy Crypto • Sell Crypto • Open Source • Staking",
    icon: gemIcon,
    custodial: false,
    non_custodial: true,
    te: false,
    blinks_and_actions: false,
    solana_pay: false,
    buy_crypto: true,
    sell_crypto: false,
    hold_nfts: false,
    mpc: false,
    gas_abstraction: false,
    social_recovery: false,
    staking: true,
    spending_limits: false,
    open_source: true,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Enkrypt",
    body: "A multichain crypto wallet hold, buy, send, receive, and swap tokens. Manage your NFTs. Access web3 apps across multiple blockchains.",
    website: "https://www.enkrypt.com/",
    additionalInfo:
      "Non-Custodial/Self Custodial • Actions & Blinks • Buy Crypto • Sell Crypto • Hold NFTs • Open Source",
    icon: enkryptIcon,
    custodial: false,
    non_custodial: true,
    te: false,
    blinks_and_actions: true,
    solana_pay: false,
    buy_crypto: true,
    sell_crypto: true,
    hold_nfts: true,
    mpc: false,
    gas_abstraction: false,
    social_recovery: false,
    staking: false,
    spending_limits: false,
    open_source: true,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "NOW Wallet",
    body: "Built for ease, powered by security. Swap and store crypto across 70+ networks.",
    website: "https://walletnow.app/",
    additionalInfo:
      "Non-Custodial/Self Custodial • Buy Crypto • Sell Crypto • Hold NFTs  • Staking",
    icon: nowwalletIcon,
    custodial: false,
    non_custodial: true,
    te: false,
    blinks_and_actions: false,
    solana_pay: false,
    buy_crypto: true,
    sell_crypto: true,
    hold_nfts: true,
    mpc: false,
    gas_abstraction: false,
    social_recovery: false,
    staking: true,
    spending_limits: false,
    open_source: false,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Coin Wallet",
    body: "A self-custodial multicurrency wallet for multiple platforms. Available since 2015.",
    website: "https://coin.space/",
    additionalInfo:
      "Non-Custodial/Self Custodial • Buy Crypto • Sell Crypto • Open Source",
    icon: coinwalletIcon,
    custodial: false,
    non_custodial: true,
    te: false,
    blinks_and_actions: false,
    solana_pay: false,
    buy_crypto: true,
    sell_crypto: true,
    hold_nfts: false,
    mpc: false,
    gas_abstraction: false,
    social_recovery: false,
    staking: false,
    spending_limits: false,
    open_source: true,
    hardware: false,
    private_key_infrastructure: false,
  },
  {
    name: "Guarda Wallet",
    body: "One secure multi crypto wallet, all assets in. Swap and store crypto across 70+ networks.",
    website: "https://guarda.com/",
    additionalInfo:
      "Non-Custodial/Self Custodial • Buy Crypto • Sell Crypto • Exchange Crypto • Staking",
    icon: guardaIcon,
    custodial: false,
    non_custodial: true,
    te: false,
    blinks_and_actions: false,
    solana_pay: false,
    buy_crypto: true,
    sell_crypto: true,
    hold_nfts: true,
    mpc: false,
    gas_abstraction: false,
    social_recovery: false,
    staking: true,
    spending_limits: false,
    open_source: false,
    hardware: false,
    private_key_infrastructure: true,
  },
  {
    name: "Cake Wallet",
    body: "Your keys, your coins. Securely store, send and exchange your crypto with ease.",
    website: "https://cakewallet.com/",
    additionalInfo:
      "Non-Custodial/Self Custodial • Buy Crypto • Sell Crypto • Exchange Crypto • Open Source",
    icon: cakewalletIcon,
    custodial: false,
    non_custodial: true,
    te: false,
    blinks_and_actions: false,
    solana_pay: false,
    buy_crypto: true,
    sell_crypto: true,
    hold_nfts: false,
    mpc: false,
    gas_abstraction: false,
    social_recovery: false,
    staking: false,
    spending_limits: false,
    open_source: true,
    hardware: false,
    private_key_infrastructure: false,
  },

  // {
  //   name: "Passkeys.Foundation",
  //   body: "Binance Web3 wallet is a keyless, seedless, multi-chain, semi-custody wallet designed for DeFi.",
  //   website: "https://www.binance.com/en/web3wallet",
  //   additionalInfo: "Non-Custodial/Self Custodial • Actions & Blinks • MPC • Gas Abstraction",
  //   icon: defaultIcon,
  //   custodial: false,
  //   non_custodial: true,
  //   te: false,
  //   blinks_and_actions: true,
  //   solana_pay: false,
  //   buy_crypto: false,
  //   sell_crypto: false,
  //   hold_nfts: false,
  //   mpc: true,
  //   gas_abstraction: true,
  //   social_recovery: false,
  //   staking: false,
  //   spending_limits: false,
  //   open_source: false,
  //   hardware: false,
  //   private_key_infrastructure: false
  // }
];
