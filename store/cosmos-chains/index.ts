import { defineChainInfo, defineChains } from "../dist";

export const _8ball = defineChainInfo({
  chainId: "eightball-1",
  currencies: [
    {
      coinDenom: "ebl",
      coinMinimalDenom: "uebl",
      coinDecimals: 6
    }
  ],
  rest: "https://rest.8ball.info",
  rpc: "https://rpc.8ball.info/",
  bech32Config: {
    bech32PrefixAccAddr: "8ball",
    bech32PrefixAccPub: "8ballpub",
    bech32PrefixValAddr: "8ballvaloper",
    bech32PrefixValPub: "8ballvaloperpub",
    bech32PrefixConsAddr: "8ballvalcons",
    bech32PrefixConsPub: "8ballvalconspub"
  },
  chainName: "8ball",
  feeCurrencies: [
    {
      coinDenom: "ebl",
      coinMinimalDenom: "uebl",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "ebl",
    coinMinimalDenom: "uebl",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const acrechain = defineChainInfo({
  chainId: "acre_9052-1",
  currencies: [
    {
      coinDenom: "acre",
      coinMinimalDenom: "aacre",
      coinDecimals: 18,
      coinGeckoId: "arable-protocol"
    },
    {
      coinDenom: "arusd",
      coinMinimalDenom: "erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c",
      coinDecimals: 18,
      coinGeckoId: "arable-usd"
    },
    {
      coinDenom: "cnto",
      coinMinimalDenom: "erc20/0xAE6D3334989a22A65228732446731438672418F2",
      coinDecimals: 18
    }
  ],
  rest: "https://lcd-acre.synergynodes.com",
  rpc: "https://rpc.acre.nodestake.top",
  bech32Config: {
    bech32PrefixAccAddr: "acre",
    bech32PrefixAccPub: "acrepub",
    bech32PrefixValAddr: "acrevaloper",
    bech32PrefixValPub: "acrevaloperpub",
    bech32PrefixConsAddr: "acrevalcons",
    bech32PrefixConsPub: "acrevalconspub"
  },
  chainName: "acrechain",
  feeCurrencies: [
    {
      coinDenom: "acre",
      coinMinimalDenom: "aacre",
      coinDecimals: 18,
      coinGeckoId: "arable-protocol",
      gasPriceStep: {
        low: 20000000000,
        average: 25000000000,
        high: 40000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "acre",
    coinMinimalDenom: "aacre",
    coinDecimals: 18,
    coinGeckoId: "arable-protocol"
  },
  bip44: {
    coinType: 60
  }
});
export const agoric = defineChainInfo({
  chainId: "agoric-3",
  currencies: [
    {
      coinDenom: "bld",
      coinMinimalDenom: "ubld",
      coinDecimals: 6,
      coinGeckoId: "agoric"
    },
    {
      coinDenom: "ist",
      coinMinimalDenom: "uist",
      coinDecimals: 6,
      coinGeckoId: "inter-stable-token"
    }
  ],
  rest: "https://main.api.agoric.net:443",
  rpc: "https://main.rpc.agoric.net:443",
  bech32Config: {
    bech32PrefixAccAddr: "agoric",
    bech32PrefixAccPub: "agoricpub",
    bech32PrefixValAddr: "agoricvaloper",
    bech32PrefixValPub: "agoricvaloperpub",
    bech32PrefixConsAddr: "agoricvalcons",
    bech32PrefixConsPub: "agoricvalconspub"
  },
  chainName: "agoric",
  feeCurrencies: [
    {
      coinDenom: "bld",
      coinMinimalDenom: "ubld",
      coinDecimals: 6,
      coinGeckoId: "agoric",
      gasPriceStep: {
        low: 0.03,
        average: 0.05,
        high: 0.07
      }
    },
    {
      coinDenom: "ist",
      coinMinimalDenom: "uist",
      coinDecimals: 6,
      coinGeckoId: "inter-stable-token",
      gasPriceStep: {
        low: 0.0034,
        average: 0.007,
        high: 0.02
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "bld",
    coinMinimalDenom: "ubld",
    coinDecimals: 6,
    coinGeckoId: "agoric"
  },
  bip44: {
    coinType: 564
  }
});
export const aioz = defineChainInfo({
  chainId: "aioz_168-1",
  currencies: [
    {
      coinDenom: "aioz",
      coinMinimalDenom: "attoaioz",
      coinDecimals: 18,
      coinGeckoId: "aioz-network"
    }
  ],
  rest: "https://lcd-dataseed.aioz.network",
  rpc: "https://rpc-dataseed.aioz.network:443",
  bech32Config: {
    bech32PrefixAccAddr: "aioz",
    bech32PrefixAccPub: "aiozpub",
    bech32PrefixValAddr: "aiozvaloper",
    bech32PrefixValPub: "aiozvaloperpub",
    bech32PrefixConsAddr: "aiozvalcons",
    bech32PrefixConsPub: "aiozvalconspub"
  },
  chainName: "aioz",
  feeCurrencies: [
    {
      coinDenom: "aioz",
      coinMinimalDenom: "attoaioz",
      coinDecimals: 18,
      coinGeckoId: "aioz-network",
      gasPriceStep: {
        low: 7000000000,
        average: 7000000000,
        high: 10000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "aioz",
    coinMinimalDenom: "attoaioz",
    coinDecimals: 18,
    coinGeckoId: "aioz-network"
  },
  bip44: {
    coinType: 60
  }
});
export const akash = defineChainInfo({
  chainId: "akashnet-2",
  currencies: [
    {
      coinDenom: "akt",
      coinMinimalDenom: "uakt",
      coinDecimals: 6,
      coinGeckoId: "akash-network"
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "ibc/05DB6975261B805B6F6A157A4386C627F8A70BF8118D411655EFEDCA82BFABA5",
      coinDecimals: 6
    }
  ],
  rest: "https://api.akash.forbole.com:443",
  rpc: "https://rpc.akash.forbole.com:443",
  bech32Config: {
    bech32PrefixAccAddr: "akash",
    bech32PrefixAccPub: "akashpub",
    bech32PrefixValAddr: "akashvaloper",
    bech32PrefixValPub: "akashvaloperpub",
    bech32PrefixConsAddr: "akashvalcons",
    bech32PrefixConsPub: "akashvalconspub"
  },
  chainName: "akash",
  feeCurrencies: [
    {
      coinDenom: "akt",
      coinMinimalDenom: "uakt",
      coinDecimals: 6,
      coinGeckoId: "akash-network",
      gasPriceStep: {
        low: 0.00025,
        average: 0.0025,
        high: 0.025
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "akt",
    coinMinimalDenom: "uakt",
    coinDecimals: 6,
    coinGeckoId: "akash-network"
  },
  bip44: {
    coinType: 118
  }
});
export const akiro = defineChainInfo({
  chainId: "akiro-1",
  currencies: [
    {
      coinDenom: "akiro",
      coinMinimalDenom: "uakiro",
      coinDecimals: 6
    }
  ],
  rest: "http://213.199.36.82:1317",
  rpc: "http://213.199.36.82:26657",
  bech32Config: {
    bech32PrefixAccAddr: "akiro",
    bech32PrefixAccPub: "akiropub",
    bech32PrefixValAddr: "akirovaloper",
    bech32PrefixValPub: "akirovaloperpub",
    bech32PrefixConsAddr: "akirovalcons",
    bech32PrefixConsPub: "akirovalconspub"
  },
  chainName: "akiro",
  feeCurrencies: [
    {
      coinDenom: "akiro",
      coinMinimalDenom: "uakiro",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.025,
        average: 0.035,
        high: 0.045
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "akiro",
    coinMinimalDenom: "uakiro",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const althea = defineChainInfo({
  chainId: "althea_258432-1",
  currencies: [
    {
      coinDenom: "althea",
      coinMinimalDenom: "aalthea",
      coinDecimals: 18
    }
  ],
  rest: "https://nodes.chandrastation.com/api/althea/",
  rpc: "https://nodes.chandrastation.com/rpc/althea/",
  bech32Config: {
    bech32PrefixAccAddr: "althea",
    bech32PrefixAccPub: "altheapub",
    bech32PrefixValAddr: "altheavaloper",
    bech32PrefixValPub: "altheavaloperpub",
    bech32PrefixConsAddr: "altheavalcons",
    bech32PrefixConsPub: "altheavalconspub"
  },
  chainName: "althea",
  feeCurrencies: [
    {
      coinDenom: "althea",
      coinMinimalDenom: "aalthea",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 100000000000,
        average: 100000000000,
        high: 300000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "althea",
    coinMinimalDenom: "aalthea",
    coinDecimals: 18
  },
  bip44: {
    coinType: 118
  }
});
export const andromeda = defineChainInfo({
  chainId: "andromeda-1",
  currencies: [
    {
      coinDenom: "andr",
      coinMinimalDenom: "uandr",
      coinDecimals: 6,
      coinGeckoId: "andromeda-2"
    }
  ],
  rest: "https://api.andromeda-1.andromeda.aviaone.com",
  rpc: "https://rpc.andromeda-1.andromeda.aviaone.com",
  bech32Config: {
    bech32PrefixAccAddr: "andr",
    bech32PrefixAccPub: "andrpub",
    bech32PrefixValAddr: "andrvaloper",
    bech32PrefixValPub: "andrvaloperpub",
    bech32PrefixConsAddr: "andrvalcons",
    bech32PrefixConsPub: "andrvalconspub"
  },
  chainName: "andromeda",
  feeCurrencies: [
    {
      coinDenom: "andr",
      coinMinimalDenom: "uandr",
      coinDecimals: 6,
      coinGeckoId: "andromeda-2",
      gasPriceStep: {
        low: 0.03,
        average: 0.05,
        high: 0.075
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "andr",
    coinMinimalDenom: "uandr",
    coinDecimals: 6,
    coinGeckoId: "andromeda-2"
  },
  bip44: {
    coinType: 118
  }
});
export const andromeda1 = defineChainInfo({
  chainId: "andromeda-1",
  currencies: [
    {
      coinDenom: "andr",
      coinMinimalDenom: "uandr",
      coinDecimals: 6,
      coinGeckoId: "andromeda-2"
    }
  ],
  rest: "https://api.andromeda-1.andromeda.aviaone.com/",
  rpc: "https://rpc.andromeda-1.andromeda.aviaone.com",
  bech32Config: {
    bech32PrefixAccAddr: "andr",
    bech32PrefixAccPub: "andrpub",
    bech32PrefixValAddr: "andrvaloper",
    bech32PrefixValPub: "andrvaloperpub",
    bech32PrefixConsAddr: "andrvalcons",
    bech32PrefixConsPub: "andrvalconspub"
  },
  chainName: "andromeda1",
  feeCurrencies: [
    {
      coinDenom: "andr",
      coinMinimalDenom: "uandr",
      coinDecimals: 6,
      coinGeckoId: "andromeda-2"
    }
  ],
  stakeCurrency: {
    coinDenom: "andr",
    coinMinimalDenom: "uandr",
    coinDecimals: 6,
    coinGeckoId: "andromeda-2"
  },
  bip44: {
    coinType: 118
  }
});
export const archway = defineChainInfo({
  chainId: "archway-1",
  currencies: [
    {
      coinDenom: "arch",
      coinMinimalDenom: "aarch",
      coinDecimals: 18,
      coinGeckoId: "archway"
    },
    {
      coinDenom: "ampARCH",
      coinMinimalDenom: "cw20:archway1fwurjg7ah4v7hhs6xsc3wutqpvmahrfhns285s0lt34tgfdhplxq6m8xg5",
      coinDecimals: 6
    },
    {
      coinDenom: "WOSMO",
      coinMinimalDenom: "ibc/D2BCFE34F35AF2968C8E1F84557D8A2058BB56F739EB553206EFC2AD8C6EDAF0",
      coinDecimals: 6
    },
    {
      coinDenom: "vdl",
      coinMinimalDenom: "ibc/1BCF1FCAFE3568E234787EDFDA12460BD8931B17FE6A729DCD60FAD845558DA1",
      coinDecimals: 6
    },
    {
      coinDenom: "AXV",
      coinMinimalDenom: "cw20:archway1ecjefhcf8r60wtfnhwefrxhj9caeqa90fj58cqsaafqveawn6cjs5znd2n",
      coinDecimals: 6,
      coinGeckoId: "astrovault"
    },
    {
      coinDenom: "wARCH",
      coinMinimalDenom: "cw20:archway1msc3fa4e2mh73y760qmjd3wfkzr98nl26f36xgt2xnhuw6ay3scs42zeue",
      coinDecimals: 18
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/43897B9739BD63E3A08A88191999C632E052724AB96BD4C74AE31375C991F48D",
      coinDecimals: 6
    }
  ],
  rest: "https://api.mainnet.archway.io",
  rpc: "https://rpc.mainnet.archway.io",
  bech32Config: {
    bech32PrefixAccAddr: "archway",
    bech32PrefixAccPub: "archwaypub",
    bech32PrefixValAddr: "archwayvaloper",
    bech32PrefixValPub: "archwayvaloperpub",
    bech32PrefixConsAddr: "archwayvalcons",
    bech32PrefixConsPub: "archwayvalconspub"
  },
  chainName: "archway",
  feeCurrencies: [
    {
      coinDenom: "arch",
      coinMinimalDenom: "aarch",
      coinDecimals: 18,
      coinGeckoId: "archway",
      gasPriceStep: {
        low: 196000000000,
        average: 225400000000,
        high: 254800000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "arch",
    coinMinimalDenom: "aarch",
    coinDecimals: 18,
    coinGeckoId: "archway"
  },
  bip44: {
    coinType: 118
  }
});
export const arkh = defineChainInfo({
  chainId: "arkh",
  currencies: [
    {
      coinDenom: "ARKH",
      coinMinimalDenom: "arkh",
      coinDecimals: 6
    }
  ],
  rest: "https://asc-blockchain-api.arkhadian.com/",
  rpc: "https://asc-dataseed.arkhadian.com/",
  bech32Config: {
    bech32PrefixAccAddr: "arkh",
    bech32PrefixAccPub: "arkhpub",
    bech32PrefixValAddr: "arkhvaloper",
    bech32PrefixValPub: "arkhvaloperpub",
    bech32PrefixConsAddr: "arkhvalcons",
    bech32PrefixConsPub: "arkhvalconspub"
  },
  chainName: "arkh",
  feeCurrencies: [
    {
      coinDenom: "ARKH",
      coinMinimalDenom: "arkh",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "ARKH",
    coinMinimalDenom: "arkh",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const assetmantle = defineChainInfo({
  chainId: "mantle-1",
  currencies: [
    {
      coinDenom: "mntl",
      coinMinimalDenom: "umntl",
      coinDecimals: 6,
      coinGeckoId: "assetmantle"
    }
  ],
  rest: "https://rest.assetmantle.one",
  rpc: "https://rpc.assetmantle.one",
  bech32Config: {
    bech32PrefixAccAddr: "mantle",
    bech32PrefixAccPub: "mantlepub",
    bech32PrefixValAddr: "mantlevaloper",
    bech32PrefixValPub: "mantlevaloperpub",
    bech32PrefixConsAddr: "mantlevalcons",
    bech32PrefixConsPub: "mantlevalconspub"
  },
  chainName: "assetmantle",
  feeCurrencies: [
    {
      coinDenom: "mntl",
      coinMinimalDenom: "umntl",
      coinDecimals: 6,
      coinGeckoId: "assetmantle",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "mntl",
    coinMinimalDenom: "umntl",
    coinDecimals: 6,
    coinGeckoId: "assetmantle"
  },
  bip44: {
    coinType: 118
  }
});
export const aura = defineChainInfo({
  chainId: "aura_6322-2",
  currencies: [
    {
      coinDenom: "aura",
      coinMinimalDenom: "uaura",
      coinDecimals: 6,
      coinGeckoId: "aura-network"
    }
  ],
  rest: "https://lcd.aura.network/",
  rpc: "https://rpc.aura.network/",
  bech32Config: {
    bech32PrefixAccAddr: "aura",
    bech32PrefixAccPub: "aurapub",
    bech32PrefixValAddr: "auravaloper",
    bech32PrefixValPub: "auravaloperpub",
    bech32PrefixConsAddr: "auravalcons",
    bech32PrefixConsPub: "auravalconspub"
  },
  chainName: "aura",
  feeCurrencies: [
    {
      coinDenom: "aura",
      coinMinimalDenom: "uaura",
      coinDecimals: 6,
      coinGeckoId: "aura-network",
      gasPriceStep: {
        low: 0.001,
        average: 0.002,
        high: 0.0025
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "aura",
    coinMinimalDenom: "uaura",
    coinDecimals: 6,
    coinGeckoId: "aura-network"
  },
  bip44: {
    coinType: 118
  }
});
export const aura1 = defineChainInfo({
  chainId: "xstaxy-1",
  currencies: [
    {
      coinDenom: "aura",
      coinMinimalDenom: "uaura",
      coinDecimals: 6,
      coinGeckoId: "aura-network"
    }
  ],
  rest: "https://lcd.aura.network/",
  rpc: "https://rpc.aura.network/",
  bech32Config: {
    bech32PrefixAccAddr: "aura",
    bech32PrefixAccPub: "aurapub",
    bech32PrefixValAddr: "auravaloper",
    bech32PrefixValPub: "auravaloperpub",
    bech32PrefixConsAddr: "auravalcons",
    bech32PrefixConsPub: "auravalconspub"
  },
  chainName: "aura1",
  feeCurrencies: [
    {
      coinDenom: "aura",
      coinMinimalDenom: "uaura",
      coinDecimals: 6,
      coinGeckoId: "aura-network",
      gasPriceStep: {
        low: 0.001,
        average: 0.002,
        high: 0.0025
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "aura",
    coinMinimalDenom: "uaura",
    coinDecimals: 6,
    coinGeckoId: "aura-network"
  },
  bip44: {
    coinType: 118
  }
});
export const axelar = defineChainInfo({
  chainId: "axelar-dojo-1",
  currencies: [
    {
      coinDenom: "axl",
      coinMinimalDenom: "uaxl",
      coinDecimals: 6,
      coinGeckoId: "axelar"
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "uusdc",
      coinDecimals: 6,
      coinGeckoId: "axlusdc"
    },
    {
      coinDenom: "frax",
      coinMinimalDenom: "frax-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "dai",
      coinMinimalDenom: "dai-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "uusdt",
      coinDecimals: 6,
      coinGeckoId: "axelar-usdt"
    },
    {
      coinDenom: "weth",
      coinMinimalDenom: "weth-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "wbtc",
      coinMinimalDenom: "wbtc-satoshi",
      coinDecimals: 8,
      coinGeckoId: "axlwbtc"
    },
    {
      coinDenom: "aave",
      coinMinimalDenom: "aave-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "ape",
      coinMinimalDenom: "ape-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "axs",
      coinMinimalDenom: "axs-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "link",
      coinMinimalDenom: "link-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "mkr",
      coinMinimalDenom: "mkr-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "rai",
      coinMinimalDenom: "rai-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "shib",
      coinMinimalDenom: "shib-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "steth",
      coinMinimalDenom: "steth-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "uni",
      coinMinimalDenom: "uni-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "xcn",
      coinMinimalDenom: "xcn-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "dot",
      coinMinimalDenom: "dot-planck",
      coinDecimals: 10
    },
    {
      coinDenom: "wglmr",
      coinMinimalDenom: "wglmr-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "wmatic",
      coinMinimalDenom: "wmatic-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "wbnb",
      coinMinimalDenom: "wbnb-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "busd",
      coinMinimalDenom: "busd-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "avax",
      coinMinimalDenom: "wavax-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "ftm",
      coinMinimalDenom: "wftm-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "polygon-usdc",
      coinMinimalDenom: "polygon-uusdc",
      coinDecimals: 6
    },
    {
      coinDenom: "avalanche-usdc",
      coinMinimalDenom: "avalanche-uusdc",
      coinDecimals: 6
    },
    {
      coinDenom: "fil",
      coinMinimalDenom: "wfil-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "arb",
      coinMinimalDenom: "arb-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "pepe",
      coinMinimalDenom: "pepe-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "cbeth",
      coinMinimalDenom: "cbeth-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "reth",
      coinMinimalDenom: "reth-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "sfrxeth",
      coinMinimalDenom: "sfrxeth-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "wsteth",
      coinMinimalDenom: "wsteth-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "YieldETH",
      coinMinimalDenom: "yieldeth-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "ox",
      coinMinimalDenom: "ox-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "yum",
      coinMinimalDenom: "yum-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "arbitrum-weth",
      coinMinimalDenom: "arbitrum-weth-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "base-weth",
      coinMinimalDenom: "base-weth-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "polygon-weth",
      coinMinimalDenom: "polygon-weth-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "op",
      coinMinimalDenom: "op-wei",
      coinDecimals: 18
    }
  ],
  rest: "https://lcd-axelar.imperator.co:443",
  rpc: "https://rpc-axelar.imperator.co:443",
  bech32Config: {
    bech32PrefixAccAddr: "axelar",
    bech32PrefixAccPub: "axelarpub",
    bech32PrefixValAddr: "axelarvaloper",
    bech32PrefixValPub: "axelarvaloperpub",
    bech32PrefixConsAddr: "axelarvalcons",
    bech32PrefixConsPub: "axelarvalconspub"
  },
  chainName: "axelar",
  feeCurrencies: [
    {
      coinDenom: "axl",
      coinMinimalDenom: "uaxl",
      coinDecimals: 6,
      coinGeckoId: "axelar",
      gasPriceStep: {
        low: 0.007,
        average: 0.007,
        high: 0.01
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "axl",
    coinMinimalDenom: "uaxl",
    coinDecimals: 6,
    coinGeckoId: "axelar"
  },
  bip44: {
    coinType: 118
  }
});
export const bandchain = defineChainInfo({
  chainId: "laozi-mainnet",
  currencies: [
    {
      coinDenom: "band",
      coinMinimalDenom: "uband",
      coinDecimals: 6,
      coinGeckoId: "band-protocol"
    }
  ],
  rest: "https://laozi1.bandchain.org/api",
  rpc: "http://rpc.laozi1.bandchain.org:80",
  bech32Config: {
    bech32PrefixAccAddr: "band",
    bech32PrefixAccPub: "bandpub",
    bech32PrefixValAddr: "bandvaloper",
    bech32PrefixValPub: "bandvaloperpub",
    bech32PrefixConsAddr: "bandvalcons",
    bech32PrefixConsPub: "bandvalconspub"
  },
  chainName: "bandchain",
  feeCurrencies: [
    {
      coinDenom: "band",
      coinMinimalDenom: "uband",
      coinDecimals: 6,
      coinGeckoId: "band-protocol",
      gasPriceStep: {
        low: 0.0025,
        average: 0.003,
        high: 0.005
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "band",
    coinMinimalDenom: "uband",
    coinDecimals: 6,
    coinGeckoId: "band-protocol"
  },
  bip44: {
    coinType: 494
  }
});
export const beezee = defineChainInfo({
  chainId: "beezee-1",
  currencies: [
    {
      coinDenom: "bze",
      coinMinimalDenom: "ubze",
      coinDecimals: 6,
      coinGeckoId: "bzedge"
    },
    {
      coinDenom: "vdl",
      coinMinimalDenom: "factory/bze13gzq40che93tgfm9kzmkpjamah5nj0j73pyhqk/uvdl",
      coinDecimals: 6,
      coinGeckoId: "vidulum"
    },
    {
      coinDenom: "osmo",
      coinMinimalDenom: "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
      coinDecimals: 6
    },
    {
      coinDenom: "C2M",
      coinMinimalDenom: "factory/bze15pqjgk4la0mfphwddce00d05n3th3u66n3ptcv/2MARS",
      coinDecimals: 6
    },
    {
      coinDenom: "arch",
      coinMinimalDenom: "ibc/C00D101A3572A5374E23F11944463D1325319E255D7C824B33AF2F927F532348",
      coinDecimals: 18
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
      coinDecimals: 6
    }
  ],
  rest: "https://rest.getbze.com",
  rpc: "https://rpc.getbze.com",
  bech32Config: {
    bech32PrefixAccAddr: "bze",
    bech32PrefixAccPub: "bzepub",
    bech32PrefixValAddr: "bzevaloper",
    bech32PrefixValPub: "bzevaloperpub",
    bech32PrefixConsAddr: "bzevalcons",
    bech32PrefixConsPub: "bzevalconspub"
  },
  chainName: "beezee",
  feeCurrencies: [
    {
      coinDenom: "bze",
      coinMinimalDenom: "ubze",
      coinDecimals: 6,
      coinGeckoId: "bzedge",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "bze",
    coinMinimalDenom: "ubze",
    coinDecimals: 6,
    coinGeckoId: "bzedge"
  },
  bip44: {
    coinType: 118
  }
});
export const bitbadges = defineChainInfo({
  chainId: "bitbadges-1",
  currencies: [
    {
      coinDenom: "badge",
      coinMinimalDenom: "ubadge",
      coinDecimals: 9
    },
    {
      coinDenom: "stake",
      coinMinimalDenom: "ustake",
      coinDecimals: 9
    }
  ],
  rest: "http://134.122.12.165:1317",
  rpc: "http://134.122.12.165:26657",
  bech32Config: {
    bech32PrefixAccAddr: "cosmos",
    bech32PrefixAccPub: "cosmospub",
    bech32PrefixValAddr: "cosmosvaloper",
    bech32PrefixValPub: "cosmosvaloperpub",
    bech32PrefixConsAddr: "cosmosvalcons",
    bech32PrefixConsPub: "cosmosvalconspub"
  },
  chainName: "bitbadges",
  feeCurrencies: [
    {
      coinDenom: "badge",
      coinMinimalDenom: "ubadge",
      coinDecimals: 9,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.00025,
        average: 0.0025,
        high: 0.025
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "badge",
    coinMinimalDenom: "ubadge",
    coinDecimals: 9
  },
  bip44: {
    coinType: 118
  }
});
export const bitcanna = defineChainInfo({
  chainId: "bitcanna-1",
  currencies: [
    {
      coinDenom: "bcna",
      coinMinimalDenom: "ubcna",
      coinDecimals: 6,
      coinGeckoId: "bitcanna"
    }
  ],
  rest: "https://lcd.bitcanna.io",
  rpc: "https://rpc.bitcanna.io/",
  bech32Config: {
    bech32PrefixAccAddr: "bcna",
    bech32PrefixAccPub: "bcnapub",
    bech32PrefixValAddr: "bcnavaloper",
    bech32PrefixValPub: "bcnavaloperpub",
    bech32PrefixConsAddr: "bcnavalcons",
    bech32PrefixConsPub: "bcnavalconspub"
  },
  chainName: "bitcanna",
  feeCurrencies: [
    {
      coinDenom: "bcna",
      coinMinimalDenom: "ubcna",
      coinDecimals: 6,
      coinGeckoId: "bitcanna",
      gasPriceStep: {
        low: 0.001,
        average: 0.0025,
        high: 0.01
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "bcna",
    coinMinimalDenom: "ubcna",
    coinDecimals: 6,
    coinGeckoId: "bitcanna"
  },
  bip44: {
    coinType: 118
  }
});
export const bitsong = defineChainInfo({
  chainId: "bitsong-2b",
  currencies: [
    {
      coinDenom: "btsg",
      coinMinimalDenom: "ubtsg",
      coinDecimals: 6,
      coinGeckoId: "bitsong"
    },
    {
      coinDenom: "clay",
      coinMinimalDenom: "ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09",
      coinDecimals: 6
    },
    {
      coinDenom: "fasano",
      coinMinimalDenom: "ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7",
      coinDecimals: 6
    },
    {
      coinDenom: "d9x",
      coinMinimalDenom: "ft575B10B0CEE2C164D9ED6A96313496F164A9607C",
      coinDecimals: 6
    },
    {
      coinDenom: "fonti",
      coinMinimalDenom: "ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305",
      coinDecimals: 6
    },
    {
      coinDenom: "bjks",
      coinMinimalDenom: "ft52EEB0EE509AC546ED92EAC8591F731F213DDD16",
      coinDecimals: 6
    },
    {
      coinDenom: "rwne",
      coinMinimalDenom: "ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A",
      coinDecimals: 6
    },
    {
      coinDenom: "enmoda",
      coinMinimalDenom: "ft85AE1716C5E39EA6D64BBD7898C3899A7B500626",
      coinDecimals: 6
    },
    {
      coinDenom: "404dr",
      coinMinimalDenom: "ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A",
      coinDecimals: 6
    },
    {
      coinDenom: "n43",
      coinMinimalDenom: "ft387C1C279D962ED80C09C1D592A92C4275FD7C5D",
      coinDecimals: 6
    },
    {
      coinDenom: "lobo",
      coinMinimalDenom: "ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB",
      coinDecimals: 6
    },
    {
      coinDenom: "vibra",
      coinMinimalDenom: "ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B",
      coinDecimals: 6
    },
    {
      coinDenom: "karina",
      coinMinimalDenom: "ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE",
      coinDecimals: 6
    },
    {
      coinDenom: "testa",
      coinMinimalDenom: "ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12",
      coinDecimals: 6
    },
    {
      coinDenom: "cmqz",
      coinMinimalDenom: "ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3",
      coinDecimals: 6
    },
    {
      coinDenom: "ft347B1612A2B7659913679CF6CD45B8B130C50A00/6",
      coinMinimalDenom: "ft347B1612A2B7659913679CF6CD45B8B130C50A00",
      coinDecimals: 6
    }
  ],
  rest: "https://api-bitsong-ia.cosmosia.notional.ventures/",
  rpc: "https://rpc-bitsong-ia.cosmosia.notional.ventures/",
  bech32Config: {
    bech32PrefixAccAddr: "bitsong",
    bech32PrefixAccPub: "bitsongpub",
    bech32PrefixValAddr: "bitsongvaloper",
    bech32PrefixValPub: "bitsongvaloperpub",
    bech32PrefixConsAddr: "bitsongvalcons",
    bech32PrefixConsPub: "bitsongvalconspub"
  },
  chainName: "bitsong",
  feeCurrencies: [
    {
      coinDenom: "btsg",
      coinMinimalDenom: "ubtsg",
      coinDecimals: 6,
      coinGeckoId: "bitsong",
      gasPriceStep: {
        low: 3,
        average: 10,
        high: 20
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "btsg",
    coinMinimalDenom: "ubtsg",
    coinDecimals: 6,
    coinGeckoId: "bitsong"
  },
  bip44: {
    coinType: 639
  }
});
export const bluzelle = defineChainInfo({
  chainId: "bluzelle-9",
  currencies: [
    {
      coinDenom: "bnt",
      coinMinimalDenom: "ubnt",
      coinDecimals: 6,
      coinGeckoId: "bluzelle"
    },
    {
      coinDenom: "elt",
      coinMinimalDenom: "uelt",
      coinDecimals: 6
    },
    {
      coinDenom: "g4",
      coinMinimalDenom: "ug4",
      coinDecimals: 6
    }
  ],
  rest: "https://a.client.sentry.net.bluzelle.com:1317",
  rpc: "https://a.client.sentry.net.bluzelle.com:26657",
  bech32Config: {
    bech32PrefixAccAddr: "bluzelle",
    bech32PrefixAccPub: "bluzellepub",
    bech32PrefixValAddr: "bluzellevaloper",
    bech32PrefixValPub: "bluzellevaloperpub",
    bech32PrefixConsAddr: "bluzellevalcons",
    bech32PrefixConsPub: "bluzellevalconspub"
  },
  chainName: "bluzelle",
  feeCurrencies: [
    {
      coinDenom: "bnt",
      coinMinimalDenom: "ubnt",
      coinDecimals: 6,
      coinGeckoId: "bluzelle",
      gasPriceStep: {
        low: 0.002,
        average: 0.002,
        high: 0.025
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "bnt",
    coinMinimalDenom: "ubnt",
    coinDecimals: 6,
    coinGeckoId: "bluzelle"
  },
  bip44: {
    coinType: 483
  }
});
export const bostrom = defineChainInfo({
  chainId: "bostrom",
  currencies: [
    {
      coinDenom: "boot",
      coinMinimalDenom: "boot",
      coinDecimals: 0,
      coinGeckoId: "bostrom"
    },
    {
      coinDenom: "hydrogen",
      coinMinimalDenom: "hydrogen",
      coinDecimals: 0
    },
    {
      coinDenom: "ampere",
      coinMinimalDenom: "milliampere",
      coinDecimals: 3
    },
    {
      coinDenom: "volt",
      coinMinimalDenom: "millivolt",
      coinDecimals: 3
    },
    {
      coinDenom: "tocyb",
      coinMinimalDenom: "tocyb",
      coinDecimals: 0
    }
  ],
  rest: "https://lcd.bostrom.cybernode.ai",
  rpc: "https://rpc.bostrom.cybernode.ai",
  bech32Config: {
    bech32PrefixAccAddr: "bostrom",
    bech32PrefixAccPub: "bostrompub",
    bech32PrefixValAddr: "bostromvaloper",
    bech32PrefixValPub: "bostromvaloperpub",
    bech32PrefixConsAddr: "bostromvalcons",
    bech32PrefixConsPub: "bostromvalconspub"
  },
  chainName: "bostrom",
  feeCurrencies: [
    {
      coinDenom: "boot",
      coinMinimalDenom: "boot",
      coinDecimals: 0,
      coinGeckoId: "bostrom"
    }
  ],
  stakeCurrency: {
    coinDenom: "boot",
    coinMinimalDenom: "boot",
    coinDecimals: 0,
    coinGeckoId: "bostrom"
  },
  bip44: {
    coinType: 118
  }
});
export const canto = defineChainInfo({
  chainId: "canto_7700-1",
  currencies: [
    {
      coinDenom: "canto",
      coinMinimalDenom: "acanto",
      coinDecimals: 18,
      coinGeckoId: "canto"
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "ibc/FAFF3F7B2FE30447544A27910DF77069763CF25472BFCF63A9E7C81F0AD545AC",
      coinDecimals: 6
    }
  ],
  rest: "https://api.canto.nodestake.top",
  rpc: "https://rpc.canto.nodestake.top",
  bech32Config: {
    bech32PrefixAccAddr: "canto",
    bech32PrefixAccPub: "cantopub",
    bech32PrefixValAddr: "cantovaloper",
    bech32PrefixValPub: "cantovaloperpub",
    bech32PrefixConsAddr: "cantovalcons",
    bech32PrefixConsPub: "cantovalconspub"
  },
  chainName: "canto",
  feeCurrencies: [
    {
      coinDenom: "canto",
      coinMinimalDenom: "acanto",
      coinDecimals: 18,
      coinGeckoId: "canto",
      gasPriceStep: {
        low: 1000000000000,
        average: 2000000000000,
        high: 3000000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "canto",
    coinMinimalDenom: "acanto",
    coinDecimals: 18,
    coinGeckoId: "canto"
  },
  bip44: {
    coinType: 60
  }
});
export const carbon = defineChainInfo({
  chainId: "carbon-1",
  currencies: [
    {
      coinDenom: "dswth",
      coinMinimalDenom: "swth",
      coinDecimals: 8,
      coinGeckoId: "switcheo"
    },
    {
      coinDenom: "dusc",
      coinMinimalDenom: "usc",
      coinDecimals: 8,
      coinGeckoId: "carbon-usd"
    },
    {
      coinDenom: "bnb",
      coinMinimalDenom: "bnb.1.6.773edb",
      coinDecimals: 18
    },
    {
      coinDenom: "bneo",
      coinMinimalDenom: "bneo.1.14.e2e5f6",
      coinDecimals: 8
    },
    {
      coinDenom: "busd",
      coinMinimalDenom: "busd.1.6.754a80",
      coinDecimals: 18
    },
    {
      coinDenom: "cglp",
      coinMinimalDenom: "cglp.1.19.1698d3",
      coinDecimals: 18
    },
    {
      coinDenom: "usd",
      coinMinimalDenom: "cgt/1",
      coinDecimals: 18
    },
    {
      coinDenom: "eth",
      coinMinimalDenom: "eth.1.19.c3b805",
      coinDecimals: 18
    },
    {
      coinDenom: "eth",
      coinMinimalDenom: "eth.1.2.942d87",
      coinDecimals: 18
    },
    {
      coinDenom: "stars",
      coinMinimalDenom: "ibc/07FA7831E1920D0C87C9388F86B0108677F6ED0C9DE7E4063F05ED675192405C",
      coinDecimals: 6
    },
    {
      coinDenom: "luna",
      coinMinimalDenom: "ibc/2B58B8C147E8718EECCB3713271DF46DEE8A3A00A27242628604E31C2F370EF5",
      coinDecimals: 6
    },
    {
      coinDenom: "tia",
      coinMinimalDenom: "ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5",
      coinDecimals: 6
    },
    {
      coinDenom: "milkTIA",
      coinMinimalDenom: "ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F",
      coinDecimals: 6
    },
    {
      coinDenom: "strd",
      coinMinimalDenom: "ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5",
      coinDecimals: 6
    },
    {
      coinDenom: "evmos",
      coinMinimalDenom: "ibc/35E771B8682D828173F4B795F6C307780F96DC64D6F914FAE4CC9B4666F66364",
      coinDecimals: 18
    },
    {
      coinDenom: "iris",
      coinMinimalDenom: "ibc/4E06CF24FEBFB3F5AF645377DCC0B70AA6183BAF6B918B8B6243FCDEB7D38118",
      coinDecimals: 6
    },
    {
      coinDenom: "kuji",
      coinMinimalDenom: "ibc/662914D0C1CEBCB070C68F061D035E8B10A07C79AB286E7342C85F3BE74612C5",
      coinDecimals: 6
    },
    {
      coinDenom: "stosmo",
      coinMinimalDenom: "ibc/75249A18DEFBEFE55F83B1C70CAD234DF164F174C6BC51682EE92C2C81C18C93",
      coinDecimals: 6
    },
    {
      coinDenom: "canto",
      coinMinimalDenom: "ibc/92E974290AF9E2BC3AEEEC35305C8FD76AC5A22A74CF8D91270FDF5A1C41E861",
      coinDecimals: 18
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701",
      coinDecimals: 6
    },
    {
      coinDenom: "statom",
      coinMinimalDenom: "ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C",
      coinDecimals: 6
    },
    {
      coinDenom: "osmo",
      coinMinimalDenom: "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
      coinDecimals: 6
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "usdc.1.2.343151",
      coinDecimals: 6
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "usdc.1.6.53ff75",
      coinDecimals: 18
    },
    {
      coinDenom: "zil",
      coinMinimalDenom: "zil.1.18.1a4a06",
      coinDecimals: 12
    }
  ],
  rest: "https://api.carbon.network",
  rpc: "https://tm-api.carbon.network",
  bech32Config: {
    bech32PrefixAccAddr: "swth",
    bech32PrefixAccPub: "swthpub",
    bech32PrefixValAddr: "swthvaloper",
    bech32PrefixValPub: "swthvaloperpub",
    bech32PrefixConsAddr: "swthvalcons",
    bech32PrefixConsPub: "swthvalconspub"
  },
  chainName: "carbon",
  feeCurrencies: [
    {
      coinDenom: "dswth",
      coinMinimalDenom: "swth",
      coinDecimals: 8,
      coinGeckoId: "switcheo",
      gasPriceStep: {
        low: 1,
        average: 1,
        high: 1
      }
    },
    {
      coinDenom: "dusc",
      coinMinimalDenom: "usc",
      coinDecimals: 8,
      coinGeckoId: "carbon-usd",
      gasPriceStep: {
        low: 0.0001,
        average: 0.0001,
        high: 0.0001
      }
    },
    {
      coinDenom: "bnb",
      coinMinimalDenom: "bnb.1.6.773edb",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 1000000,
        average: 1000000,
        high: 1000000
      }
    },
    {
      coinDenom: "bneo",
      coinMinimalDenom: "bneo.1.14.e2e5f6",
      coinDecimals: 8,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0015,
        average: 0.0015,
        high: 0.0015
      }
    },
    {
      coinDenom: "busd",
      coinMinimalDenom: "busd.1.6.754a80",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 100000000,
        average: 100000000,
        high: 100000000
      }
    },
    {
      coinDenom: "cglp",
      coinMinimalDenom: "cglp.1.19.1698d3",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 100000000,
        average: 100000000,
        high: 100000000
      }
    },
    {
      coinDenom: "usd",
      coinMinimalDenom: "cgt/1",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 100000000,
        average: 100000000,
        high: 100000000
      }
    },
    {
      coinDenom: "eth",
      coinMinimalDenom: "eth.1.19.c3b805",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 100000,
        average: 100000,
        high: 100000
      }
    },
    {
      coinDenom: "eth",
      coinMinimalDenom: "eth.1.2.942d87",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 100000,
        average: 100000,
        high: 100000
      }
    },
    {
      coinDenom: "stars",
      coinMinimalDenom: "ibc/07FA7831E1920D0C87C9388F86B0108677F6ED0C9DE7E4063F05ED675192405C",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0035,
        average: 0.0035,
        high: 0.0035
      }
    },
    {
      coinDenom: "milkTIA",
      coinMinimalDenom: "ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0000075,
        average: 0.0000075,
        high: 0.0000075
      }
    },
    {
      coinDenom: "luna",
      coinMinimalDenom: "ibc/2B58B8C147E8718EECCB3713271DF46DEE8A3A00A27242628604E31C2F370EF5",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.00005,
        average: 0.00005,
        high: 0.00005
      }
    },
    {
      coinDenom: "strd",
      coinMinimalDenom: "ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.00032,
        average: 0.00032,
        high: 0.00032
      }
    },
    {
      coinDenom: "evmos",
      coinMinimalDenom: "ibc/35E771B8682D828173F4B795F6C307780F96DC64D6F914FAE4CC9B4666F66364",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 300000000,
        average: 300000000,
        high: 300000000
      }
    },
    {
      coinDenom: "iris",
      coinMinimalDenom: "ibc/4E06CF24FEBFB3F5AF645377DCC0B70AA6183BAF6B918B8B6243FCDEB7D38118",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0006,
        average: 0.0006,
        high: 0.0006
      }
    },
    {
      coinDenom: "kuji",
      coinMinimalDenom: "ibc/662914D0C1CEBCB070C68F061D035E8B10A07C79AB286E7342C85F3BE74612C5",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.00015,
        average: 0.00015,
        high: 0.00015
      }
    },
    {
      coinDenom: "tia",
      coinMinimalDenom: "ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0000075,
        average: 0.0000075,
        high: 0.0000075
      }
    },
    {
      coinDenom: "stosmo",
      coinMinimalDenom: "ibc/75249A18DEFBEFE55F83B1C70CAD234DF164F174C6BC51682EE92C2C81C18C93",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.00015,
        average: 0.00015,
        high: 0.00015
      }
    },
    {
      coinDenom: "canto",
      coinMinimalDenom: "ibc/92E974290AF9E2BC3AEEEC35305C8FD76AC5A22A74CF8D91270FDF5A1C41E861",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 200000000,
        average: 200000000,
        high: 200000000
      }
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.00001,
        average: 0.00001,
        high: 0.00001
      }
    },
    {
      coinDenom: "statom",
      coinMinimalDenom: "ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.00001,
        average: 0.00001,
        high: 0.00001
      }
    },
    {
      coinDenom: "osmo",
      coinMinimalDenom: "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.00015,
        average: 0.00015,
        high: 0.00015
      }
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "usdc.1.2.343151",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0001,
        average: 0.0001,
        high: 0.0001
      }
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "usdc.1.6.53ff75",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 100000000,
        average: 100000000,
        high: 100000000
      }
    },
    {
      coinDenom: "zil",
      coinMinimalDenom: "zil.1.18.1a4a06",
      coinDecimals: 12,
      coinGeckoId: "",
      gasPriceStep: {
        low: 6000,
        average: 6000,
        high: 6000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "dswth",
    coinMinimalDenom: "swth",
    coinDecimals: 8,
    coinGeckoId: "switcheo"
  },
  bip44: {
    coinType: 118
  }
});
export const celestia = defineChainInfo({
  chainId: "celestia",
  currencies: [
    {
      coinDenom: "tia",
      coinMinimalDenom: "utia",
      coinDecimals: 6,
      coinGeckoId: "celestia"
    }
  ],
  rest: "https://public-celestia-lcd.numia.xyz",
  rpc: "https://public-celestia-rpc.numia.xyz",
  bech32Config: {
    bech32PrefixAccAddr: "celestia",
    bech32PrefixAccPub: "celestiapub",
    bech32PrefixValAddr: "celestiavaloper",
    bech32PrefixValPub: "celestiavaloperpub",
    bech32PrefixConsAddr: "celestiavalcons",
    bech32PrefixConsPub: "celestiavalconspub"
  },
  chainName: "celestia",
  feeCurrencies: [
    {
      coinDenom: "tia",
      coinMinimalDenom: "utia",
      coinDecimals: 6,
      coinGeckoId: "celestia",
      gasPriceStep: {
        low: 0.01,
        average: 0.02,
        high: 0.1
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "tia",
    coinMinimalDenom: "utia",
    coinDecimals: 6,
    coinGeckoId: "celestia"
  },
  bip44: {
    coinType: 118
  }
});
export const chain4energy = defineChainInfo({
  chainId: "perun-1",
  currencies: [
    {
      coinDenom: "c4e",
      coinMinimalDenom: "uc4e",
      coinDecimals: 6,
      coinGeckoId: "chain4energy"
    }
  ],
  rest: "https://lcd.c4e.io/",
  rpc: "https://rpc.c4e.io/",
  bech32Config: {
    bech32PrefixAccAddr: "c4e",
    bech32PrefixAccPub: "c4epub",
    bech32PrefixValAddr: "c4evaloper",
    bech32PrefixValPub: "c4evaloperpub",
    bech32PrefixConsAddr: "c4evalcons",
    bech32PrefixConsPub: "c4evalconspub"
  },
  chainName: "chain4energy",
  feeCurrencies: [
    {
      coinDenom: "c4e",
      coinMinimalDenom: "uc4e",
      coinDecimals: 6,
      coinGeckoId: "chain4energy",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "c4e",
    coinMinimalDenom: "uc4e",
    coinDecimals: 6,
    coinGeckoId: "chain4energy"
  },
  bip44: {
    coinType: 118
  }
});
export const cheqd = defineChainInfo({
  chainId: "cheqd-mainnet-1",
  currencies: [
    {
      coinDenom: "cheq",
      coinMinimalDenom: "ncheq",
      coinDecimals: 9,
      coinGeckoId: "cheqd-network"
    }
  ],
  rest: "https://api.cheqd.net",
  rpc: "https://rpc.cheqd.net",
  bech32Config: {
    bech32PrefixAccAddr: "cheqd",
    bech32PrefixAccPub: "cheqdpub",
    bech32PrefixValAddr: "cheqdvaloper",
    bech32PrefixValPub: "cheqdvaloperpub",
    bech32PrefixConsAddr: "cheqdvalcons",
    bech32PrefixConsPub: "cheqdvalconspub"
  },
  chainName: "cheqd",
  feeCurrencies: [
    {
      coinDenom: "cheq",
      coinMinimalDenom: "ncheq",
      coinDecimals: 9,
      coinGeckoId: "cheqd-network",
      gasPriceStep: {
        low: 50,
        average: 75,
        high: 100
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "cheq",
    coinMinimalDenom: "ncheq",
    coinDecimals: 9,
    coinGeckoId: "cheqd-network"
  },
  bip44: {
    coinType: 118
  }
});
export const chihuahua = defineChainInfo({
  chainId: "chihuahua-1",
  currencies: [
    {
      coinDenom: "huahua",
      coinMinimalDenom: "uhuahua",
      coinDecimals: 6,
      coinGeckoId: "chihuahua-token"
    },
    {
      coinDenom: "puppy",
      coinMinimalDenom: "cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef",
      coinDecimals: 6
    },
    {
      coinDenom: "achihuahuawifhat",
      coinMinimalDenom: "factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat",
      coinDecimals: 6
    },
    {
      coinDenom: "WOOF",
      coinMinimalDenom: "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof",
      coinDecimals: 6
    },
    {
      coinDenom: "TACOS",
      coinMinimalDenom: "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/utacos",
      coinDecimals: 6
    },
    {
      coinDenom: "WEED",
      coinMinimalDenom: "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uweed",
      coinDecimals: 6
    },
    {
      coinDenom: "BDOG",
      coinMinimalDenom: "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ubdog",
      coinDecimals: 6
    },
    {
      coinDenom: "CORSO",
      coinMinimalDenom: "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ucorso",
      coinDecimals: 6
    },
    {
      coinDenom: "bHUAHUA",
      coinMinimalDenom: "cw20:chihuahua1jz5n4aynhpxx7clf2m8hrv9dp5nz83k67fgaxhy4p9dfwl6zssrq3ymr6w",
      coinDecimals: 6,
      coinGeckoId: "backbone-labs-staked-huahua"
    },
    {
      coinDenom: "ashHUAHUA",
      coinMinimalDenom: "factory/chihuahua1hplyuj2hzxd75q8686g9vm3uzrrny9ggvt8aza2csupgdp98vg2sp0e3h0/uhuahua.ash",
      coinDecimals: 6
    },
    {
      coinDenom: "ampGASH",
      coinMinimalDenom: "ibc/7D01429FF7542DBC41C261793B480B63FE7A83260C751989CC268BC7E852EB99",
      coinDecimals: 6
    },
    {
      coinDenom: "GUPPY",
      coinMinimalDenom: "ibc/DBBDE1753EFA93F09C468DB5E384861BB741D4AA73E9C7032D139BB2C99FDD65",
      coinDecimals: 6
    }
  ],
  rest: "https://api.chihuahua.wtf",
  rpc: "https://rpc.chihuahua.wtf",
  bech32Config: {
    bech32PrefixAccAddr: "chihuahua",
    bech32PrefixAccPub: "chihuahuapub",
    bech32PrefixValAddr: "chihuahuavaloper",
    bech32PrefixValPub: "chihuahuavaloperpub",
    bech32PrefixConsAddr: "chihuahuavalcons",
    bech32PrefixConsPub: "chihuahuavalconspub"
  },
  chainName: "chihuahua",
  feeCurrencies: [
    {
      coinDenom: "huahua",
      coinMinimalDenom: "uhuahua",
      coinDecimals: 6,
      coinGeckoId: "chihuahua-token",
      gasPriceStep: {
        low: 500,
        average: 1250,
        high: 2000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "huahua",
    coinMinimalDenom: "uhuahua",
    coinDecimals: 6,
    coinGeckoId: "chihuahua-token"
  },
  bip44: {
    coinType: 118
  }
});
export const chimba = defineChainInfo({
  chainId: "chimba",
  currencies: [
    {
      coinDenom: "chimba",
      coinMinimalDenom: "ucmba",
      coinDecimals: 6
    }
  ],
  rest: "https://mainnet.chimba.ooo",
  rpc: "https://rpc.mainnet.chimba.ooo",
  bech32Config: {
    bech32PrefixAccAddr: "chimba",
    bech32PrefixAccPub: "chimbapub",
    bech32PrefixValAddr: "chimbavaloper",
    bech32PrefixValPub: "chimbavaloperpub",
    bech32PrefixConsAddr: "chimbavalcons",
    bech32PrefixConsPub: "chimbavalconspub"
  },
  chainName: "chimba",
  feeCurrencies: [
    {
      coinDenom: "chimba",
      coinMinimalDenom: "ucmba",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 1,
        average: 5,
        high: 10
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "chimba",
    coinMinimalDenom: "ucmba",
    coinDecimals: 6
  },
  bip44: {
    coinType: 0
  }
});
export const chronicnetwork = defineChainInfo({
  chainId: "morocco-1",
  currencies: [
    {
      coinDenom: "cht",
      coinMinimalDenom: "ucht",
      coinDecimals: 6,
      coinGeckoId: "cht"
    },
    {
      coinDenom: "cgas",
      coinMinimalDenom: "ucgas",
      coinDecimals: 6,
      coinGeckoId: "cgas"
    }
  ],
  rest: "https://api-chronic.zenchainlabs.io/",
  rpc: "https://rpc-chronic.zenchainlabs.io/",
  bech32Config: {
    bech32PrefixAccAddr: "chronic",
    bech32PrefixAccPub: "chronicpub",
    bech32PrefixValAddr: "chronicvaloper",
    bech32PrefixValPub: "chronicvaloperpub",
    bech32PrefixConsAddr: "chronicvalcons",
    bech32PrefixConsPub: "chronicvalconspub"
  },
  chainName: "chronicnetwork",
  feeCurrencies: [
    {
      coinDenom: "cgas",
      coinMinimalDenom: "ucgas",
      coinDecimals: 6,
      coinGeckoId: "cgas"
    }
  ],
  stakeCurrency: {
    coinDenom: "cht",
    coinMinimalDenom: "ucht",
    coinDecimals: 6,
    coinGeckoId: "cht"
  },
  bip44: {
    coinType: 118
  }
});
export const cifer = defineChainInfo({
  chainId: "cifer-2",
  currencies: [
    {
      coinDenom: "cif",
      coinMinimalDenom: "ucif",
      coinDecimals: 6
    }
  ],
  rest: "https://api.cifer.ai",
  rpc: "http://34.128.114.243:26657",
  bech32Config: {
    bech32PrefixAccAddr: "cife",
    bech32PrefixAccPub: "cifepub",
    bech32PrefixValAddr: "cifevaloper",
    bech32PrefixValPub: "cifevaloperpub",
    bech32PrefixConsAddr: "cifevalcons",
    bech32PrefixConsPub: "cifevalconspub"
  },
  chainName: "cifer",
  feeCurrencies: [
    {
      coinDenom: "cif",
      coinMinimalDenom: "ucif",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 1,
        average: 5,
        high: 10
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "cif",
    coinMinimalDenom: "ucif",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const cifer1 = defineChainInfo({
  chainId: "cifer-1",
  currencies: [
    {
      coinDenom: "cif",
      coinMinimalDenom: "ucif",
      coinDecimals: 6
    }
  ],
  rest: "https://api.cifer.ai",
  rpc: "https://cif_node.cifer.ai/",
  bech32Config: {
    bech32PrefixAccAddr: "cife",
    bech32PrefixAccPub: "cifepub",
    bech32PrefixValAddr: "cifevaloper",
    bech32PrefixValPub: "cifevaloperpub",
    bech32PrefixConsAddr: "cifevalcons",
    bech32PrefixConsPub: "cifevalconspub"
  },
  chainName: "cifer1",
  feeCurrencies: [
    {
      coinDenom: "cif",
      coinMinimalDenom: "ucif",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 1,
        average: 5,
        high: 10
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "cif",
    coinMinimalDenom: "ucif",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const cnhostables = defineChainInfo({
  chainId: "cnho_stables-1",
  currencies: [
    {
      coinDenom: "CNHO",
      coinMinimalDenom: "ucnho",
      coinDecimals: 6
    }
  ],
  rest: "https://api.cnho.io",
  rpc: "https://rpc.cnho.io",
  bech32Config: {
    bech32PrefixAccAddr: "cnho",
    bech32PrefixAccPub: "cnhopub",
    bech32PrefixValAddr: "cnhovaloper",
    bech32PrefixValPub: "cnhovaloperpub",
    bech32PrefixConsAddr: "cnhovalcons",
    bech32PrefixConsPub: "cnhovalconspub"
  },
  chainName: "cnhostables",
  feeCurrencies: [
    {
      coinDenom: "CNHO",
      coinMinimalDenom: "ucnho",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.000001,
        average: 0.00001,
        high: 0.025
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "CNHO",
    coinMinimalDenom: "ucnho",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const comdex = defineChainInfo({
  chainId: "comdex-1",
  currencies: [
    {
      coinDenom: "cmdx",
      coinMinimalDenom: "ucmdx",
      coinDecimals: 6,
      coinGeckoId: "comdex"
    },
    {
      coinDenom: "harbor",
      coinMinimalDenom: "uharbor",
      coinDecimals: 6,
      coinGeckoId: "harbor-2"
    },
    {
      coinDenom: "cmst",
      coinMinimalDenom: "ucmst",
      coinDecimals: 6,
      coinGeckoId: "composite"
    }
  ],
  rest: "https://rest.comdex.one",
  rpc: "https://rpc.comdex.one",
  bech32Config: {
    bech32PrefixAccAddr: "comdex",
    bech32PrefixAccPub: "comdexpub",
    bech32PrefixValAddr: "comdexvaloper",
    bech32PrefixValPub: "comdexvaloperpub",
    bech32PrefixConsAddr: "comdexvalcons",
    bech32PrefixConsPub: "comdexvalconspub"
  },
  chainName: "comdex",
  feeCurrencies: [
    {
      coinDenom: "cmdx",
      coinMinimalDenom: "ucmdx",
      coinDecimals: 6,
      coinGeckoId: "comdex"
    }
  ],
  stakeCurrency: {
    coinDenom: "cmdx",
    coinMinimalDenom: "ucmdx",
    coinDecimals: 6,
    coinGeckoId: "comdex"
  },
  bip44: {
    coinType: 118
  }
});
export const commercionetwork = defineChainInfo({
  chainId: "commercio-3",
  currencies: [
    {
      coinDenom: "commercio",
      coinMinimalDenom: "ucommercio",
      coinDecimals: 6
    },
    {
      coinDenom: "ccc",
      coinMinimalDenom: "uccc",
      coinDecimals: 6
    }
  ],
  rest: "https://lcd-mainnet.commercio.network",
  rpc: "https://rpc-mainnet.commercio.network",
  bech32Config: {
    bech32PrefixAccAddr: "did:com:",
    bech32PrefixAccPub: "did:com:pub",
    bech32PrefixValAddr: "did:com:valoper",
    bech32PrefixValPub: "did:com:valoperpub",
    bech32PrefixConsAddr: "did:com:valcons",
    bech32PrefixConsPub: "did:com:valconspub"
  },
  chainName: "commercionetwork",
  feeCurrencies: [
    {
      coinDenom: "commercio",
      coinMinimalDenom: "ucommercio",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "commercio",
    coinMinimalDenom: "ucommercio",
    coinDecimals: 6
  },
  bip44: {
    coinType: 701
  }
});
export const composable = defineChainInfo({
  chainId: "centauri-1",
  currencies: [
    {
      coinDenom: "pica",
      coinMinimalDenom: "ppica",
      coinDecimals: 12,
      coinGeckoId: "picasso"
    },
    {
      coinDenom: "ksm",
      coinMinimalDenom: "ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9",
      coinDecimals: 12
    },
    {
      coinDenom: "dot",
      coinMinimalDenom: "ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366",
      coinDecimals: 10
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265",
      coinDecimals: 6
    },
    {
      coinDenom: "tnkr",
      coinMinimalDenom: "ibc/C58E5D2571042137CB68B1B9851C4E7211C05F7C2C79E21E0966AF0F063961F8",
      coinDecimals: 12
    },
    {
      coinDenom: "eth",
      coinMinimalDenom: "ibc/F9D075D4079FC56A9C49B601E54A45292C319D8B0E8CC0F8439041130AA7166C",
      coinDecimals: 18
    },
    {
      coinDenom: "dai",
      coinMinimalDenom: "ibc/A342F6F8D1CDE1D934C50E8EAFF91E813D971E1BFEED7E557F1674E01004A533",
      coinDecimals: 18
    },
    {
      coinDenom: "fxs",
      coinMinimalDenom: "ibc/5F9BE030FC355733EC79307409FA98398BBFC747C9430B326C144A74F6808B29",
      coinDecimals: 18
    },
    {
      coinDenom: "frax",
      coinMinimalDenom: "ibc/4F20D68B51ED559F99C3CD658383E91F45486D884BF546E7B25337A058562CDB",
      coinDecimals: 18
    },
    {
      coinDenom: "frxeth",
      coinMinimalDenom: "ibc/458032E654E41DB91EF98F13E2CE4F9E0FE86BA3E0CDBEC074A854E9F5229A90",
      coinDecimals: 18
    },
    {
      coinDenom: "sfrxeth",
      coinMinimalDenom: "ibc/4E0ECE7819D77B0F2B49F5C34B5E594A02D2BA8B1B0F103208F847B53EBFB69A",
      coinDecimals: 18
    },
    {
      coinDenom: "sfrax",
      coinMinimalDenom: "ibc/5BD7F23FE150D9CF3BCC944DB829380BCC51A4022A131151C4D13B3AFAC2D1D9",
      coinDecimals: 18
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "ibc/37CC704EA53E96AB09A9C31D79142DE7DB252420F3AB18015F9870AE219947BD",
      coinDecimals: 6
    },
    {
      coinDenom: "crv",
      coinMinimalDenom: "ibc/52C8C6197989684F891076F228F20CD1659AB6E1776E3B85E65CBBEC67DA5DED",
      coinDecimals: 18
    },
    {
      coinDenom: "wbtc",
      coinMinimalDenom: "ibc/1507315B0C337368B85A7EC67C3956C508E1106EBD96336B1B092F7B2815B3E5",
      coinDecimals: 18
    },
    {
      coinDenom: "steth",
      coinMinimalDenom: "ibc/74F65FE91F672BC2524C039B3CD0211F6D370071209552533DF26D57743D5FFD",
      coinDecimals: 18
    },
    {
      coinDenom: "reth",
      coinMinimalDenom: "ibc/207E7F34DFEBF714CED4900C1FD85BAF200230BF431EE8133EB26B98CB535EDC",
      coinDecimals: 18
    },
    {
      coinDenom: "crvusd",
      coinMinimalDenom: "ibc/C9D79BE8E3E75CA2DFDC722C77D7B179C39A4802D59019C790A825FDE34B724A",
      coinDecimals: 18
    },
    {
      coinDenom: "pxeth",
      coinMinimalDenom: "ibc/36EF1EA47A09689C81D848B08E5240FA9FF13B17DB7DCF48B77D4D0D9B152821",
      coinDecimals: 18
    },
    {
      coinDenom: "eeth",
      coinMinimalDenom: "ibc/34C23BA6BAA2EAE0199D85AD1E2E214F76B0BFAD42BF75542D15F71264EEB05B",
      coinDecimals: 18
    },
    {
      coinDenom: "ena",
      coinMinimalDenom: "ibc/B089810D5A6316AD5E9C7808733DC4AB11C7BA3033221D28711FC7206BACB929",
      coinDecimals: 18
    },
    {
      coinDenom: "usde",
      coinMinimalDenom: "ibc/FFD9EB71B4480ED4D73F7370A2AEBDB48447A0AAE27265F8060A957F0FF71983",
      coinDecimals: 18
    },
    {
      coinDenom: "ezeth",
      coinMinimalDenom: "ibc/E317539F148285AAC77E7614101CBE94E20EDF169B233A5E0C867112972F9041",
      coinDecimals: 18
    },
    {
      coinDenom: "pepe",
      coinMinimalDenom: "ibc/6367C5AF2E2477FB13DD0C8CB0027FEDDF5AE947EE84C69FB75003E604E29D05",
      coinDecimals: 18
    },
    {
      coinDenom: "wsol",
      coinMinimalDenom: "ibc/2CC39C8141F257EBBA250F65B9D0F31DC8D153C225E51EC192DE6E3F65D43F0C",
      coinDecimals: 9
    },
    {
      coinDenom: "msol",
      coinMinimalDenom: "ibc/C280CB39B97E7CD33A0BF149CFD392C2A3F95FF896AFF89CFF2FA181479BED8D",
      coinDecimals: 9
    },
    {
      coinDenom: "jitosol",
      coinMinimalDenom: "ibc/91A2FE07F8BDFC0552B1C9972FCCBF2CFD067DDE5F496D81E5132CE57762B0F2",
      coinDecimals: 9
    },
    {
      coinDenom: "bsol",
      coinMinimalDenom: "ibc/F52A71607B3AA7BBA8A222A9176E9939E92AB3656A094289CD218907D45DB716",
      coinDecimals: 9
    },
    {
      coinDenom: "lst",
      coinMinimalDenom: "ibc/55F5B582483FEFA5422794292B079B4D49A5BAB9881E7C801F9F271F1D234F1D",
      coinDecimals: 9
    },
    {
      coinDenom: "edgesol",
      coinMinimalDenom: "ibc/BADB5950C4A81AC201696EBCB33CD295137FA86F0AA620CDDE946D3700E0208C",
      coinDecimals: 9
    },
    {
      coinDenom: "hsol",
      coinMinimalDenom: "ibc/531C52D572698BCBA29F44D959E73CD2148EE6542A3118F9E56621A28E1FF4C6",
      coinDecimals: 9
    },
    {
      coinDenom: "jupsol",
      coinMinimalDenom: "ibc/6976998E24F1CFC373A9F799C9CE901F5EC32C3E33B2B09384A05774D9339626",
      coinDecimals: 9
    },
    {
      coinDenom: "wif",
      coinMinimalDenom: "ibc/BA34EAA22BBDA46C228DC70E4ED7E42A0867D5B051D625F953CC7B1CEF58C071",
      coinDecimals: 6
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "ibc/D105950618E47CA2AEC314282BC401625025F80A4F812808DEEBB1941C685575",
      coinDecimals: 6
    },
    {
      coinDenom: "whine",
      coinMinimalDenom: "ibc/9D5DA3720001F91DD76B8F609A93F96688EC8185B54BF9A1A1450EB34FF2D912",
      coinDecimals: 6
    },
    {
      coinDenom: "unicorn",
      coinMinimalDenom: "ibc/586C150919550F6106711C7557DAAAEAB765DDF05648BAC0D96487AE90394BA1",
      coinDecimals: 6
    }
  ],
  rest: "https://api-composable-ia.cosmosia.notional.ventures",
  rpc: "https://rpc-composable-ia.cosmosia.notional.ventures",
  bech32Config: {
    bech32PrefixAccAddr: "pica",
    bech32PrefixAccPub: "picapub",
    bech32PrefixValAddr: "picavaloper",
    bech32PrefixValPub: "picavaloperpub",
    bech32PrefixConsAddr: "picavalcons",
    bech32PrefixConsPub: "picavalconspub"
  },
  chainName: "composable",
  feeCurrencies: [
    {
      coinDenom: "pica",
      coinMinimalDenom: "ppica",
      coinDecimals: 12,
      coinGeckoId: "picasso"
    }
  ],
  stakeCurrency: {
    coinDenom: "pica",
    coinMinimalDenom: "ppica",
    coinDecimals: 12,
    coinGeckoId: "picasso"
  },
  bip44: {
    coinType: 118
  }
});
export const conscious = defineChainInfo({
  chainId: "cvn_2032-1",
  currencies: [
    {
      coinDenom: "cvnt",
      coinMinimalDenom: "acvnt",
      coinDecimals: 18,
      coinGeckoId: "consciousdao"
    }
  ],
  rest: "https://api.cvn.io",
  rpc: "https://rpc.cvn.io/",
  bech32Config: {
    bech32PrefixAccAddr: "cvn",
    bech32PrefixAccPub: "cvnpub",
    bech32PrefixValAddr: "cvnvaloper",
    bech32PrefixValPub: "cvnvaloperpub",
    bech32PrefixConsAddr: "cvnvalcons",
    bech32PrefixConsPub: "cvnvalconspub"
  },
  chainName: "conscious",
  feeCurrencies: [
    {
      coinDenom: "cvnt",
      coinMinimalDenom: "acvnt",
      coinDecimals: 18,
      coinGeckoId: "consciousdao",
      gasPriceStep: {
        low: 100000000,
        average: 200000000,
        high: 300000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "cvnt",
    coinMinimalDenom: "acvnt",
    coinDecimals: 18,
    coinGeckoId: "consciousdao"
  },
  bip44: {
    coinType: 60
  }
});
export const coreum = defineChainInfo({
  chainId: "coreum-mainnet-1",
  currencies: [
    {
      coinDenom: "core",
      coinMinimalDenom: "ucore",
      coinDecimals: 6,
      coinGeckoId: "coreum"
    },
    {
      coinDenom: "xrp",
      coinMinimalDenom: "drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz",
      coinDecimals: 6
    }
  ],
  rest: "https://rest-coreum.ecostake.com",
  rpc: "https://full-node.mainnet-1.coreum.dev:26657",
  bech32Config: {
    bech32PrefixAccAddr: "core",
    bech32PrefixAccPub: "corepub",
    bech32PrefixValAddr: "corevaloper",
    bech32PrefixValPub: "corevaloperpub",
    bech32PrefixConsAddr: "corevalcons",
    bech32PrefixConsPub: "corevalconspub"
  },
  chainName: "coreum",
  feeCurrencies: [
    {
      coinDenom: "core",
      coinMinimalDenom: "ucore",
      coinDecimals: 6,
      coinGeckoId: "coreum",
      gasPriceStep: {
        low: 0.0625,
        average: 0.0625,
        high: 62.5
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "core",
    coinMinimalDenom: "ucore",
    coinDecimals: 6,
    coinGeckoId: "coreum"
  },
  bip44: {
    coinType: 990
  }
});
export const cosmoshub = defineChainInfo({
  chainId: "cosmoshub-4",
  currencies: [
    {
      coinDenom: "atom",
      coinMinimalDenom: "uatom",
      coinDecimals: 6,
      coinGeckoId: "cosmos"
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0",
      coinDecimals: 6
    },
    {
      coinDenom: "ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729",
      coinMinimalDenom: "ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729",
      coinDecimals: 0
    }
  ],
  rest: "https://cosmos-lcd.quickapi.com:443",
  rpc: "https://cosmos-rpc.quickapi.com:443",
  bech32Config: {
    bech32PrefixAccAddr: "cosmos",
    bech32PrefixAccPub: "cosmospub",
    bech32PrefixValAddr: "cosmosvaloper",
    bech32PrefixValPub: "cosmosvaloperpub",
    bech32PrefixConsAddr: "cosmosvalcons",
    bech32PrefixConsPub: "cosmosvalconspub"
  },
  chainName: "cosmoshub",
  feeCurrencies: [
    {
      coinDenom: "atom",
      coinMinimalDenom: "uatom",
      coinDecimals: 6,
      coinGeckoId: "cosmos",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "atom",
    coinMinimalDenom: "uatom",
    coinDecimals: 6,
    coinGeckoId: "cosmos"
  },
  bip44: {
    coinType: 118
  }
});
export const coss = defineChainInfo({
  chainId: "coss-1",
  currencies: [
    {
      coinDenom: "cgas",
      coinMinimalDenom: "ucgas",
      coinDecimals: 6
    },
    {
      coinDenom: "coss",
      coinMinimalDenom: "ucoss",
      coinDecimals: 6,
      coinGeckoId: "coss-2"
    },
    {
      coinDenom: "cias",
      coinMinimalDenom: "ucias",
      coinDecimals: 6,
      coinGeckoId: "cias"
    }
  ],
  rest: "https://coss-rest.coss.ink",
  rpc: "https://coss-rpc.coss.ink",
  bech32Config: {
    bech32PrefixAccAddr: "coss",
    bech32PrefixAccPub: "cosspub",
    bech32PrefixValAddr: "cossvaloper",
    bech32PrefixValPub: "cossvaloperpub",
    bech32PrefixConsAddr: "cossvalcons",
    bech32PrefixConsPub: "cossvalconspub"
  },
  chainName: "coss",
  feeCurrencies: [
    {
      coinDenom: "coss",
      coinMinimalDenom: "ucoss",
      coinDecimals: 6,
      coinGeckoId: "coss-2",
      gasPriceStep: {
        low: 0.025,
        average: 0.03,
        high: 0.04
      }
    },
    {
      coinDenom: "cgas",
      coinMinimalDenom: "ucgas",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.025,
        average: 0.03,
        high: 0.04
      }
    },
    {
      coinDenom: "cias",
      coinMinimalDenom: "ucias",
      coinDecimals: 6,
      coinGeckoId: "cias",
      gasPriceStep: {
        low: 0.025,
        average: 0.03,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "cgas",
    coinMinimalDenom: "ucgas",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const crescent = defineChainInfo({
  chainId: "crescent-1",
  currencies: [
    {
      coinDenom: "cre",
      coinMinimalDenom: "ucre",
      coinDecimals: 6,
      coinGeckoId: "crescent-network"
    },
    {
      coinDenom: "bcre",
      coinMinimalDenom: "ubcre",
      coinDecimals: 6,
      coinGeckoId: "liquid-staking-crescent"
    }
  ],
  rest: "https://mainnet.crescent.network:1317",
  rpc: "https://mainnet.crescent.network:26657",
  bech32Config: {
    bech32PrefixAccAddr: "cre",
    bech32PrefixAccPub: "crepub",
    bech32PrefixValAddr: "crevaloper",
    bech32PrefixValPub: "crevaloperpub",
    bech32PrefixConsAddr: "crevalcons",
    bech32PrefixConsPub: "crevalconspub"
  },
  chainName: "crescent",
  feeCurrencies: [
    {
      coinDenom: "cre",
      coinMinimalDenom: "ucre",
      coinDecimals: 6,
      coinGeckoId: "crescent-network",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "cre",
    coinMinimalDenom: "ucre",
    coinDecimals: 6,
    coinGeckoId: "crescent-network"
  },
  bip44: {
    coinType: 118
  }
});
export const cronos = defineChainInfo({
  chainId: "cronosmainnet_25-1",
  currencies: [
    {
      coinDenom: "cro",
      coinMinimalDenom: "basecro",
      coinDecimals: 18
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "ibc/9106F2626880DF7FAD30621F355423B2A7523D8E2274475F009644D708A90682",
      coinDecimals: 6
    }
  ],
  rest: "https://rest.cronos.org/",
  rpc: "https://rpc.cronos.org/",
  bech32Config: {
    bech32PrefixAccAddr: "crc",
    bech32PrefixAccPub: "crcpub",
    bech32PrefixValAddr: "crcvaloper",
    bech32PrefixValPub: "crcvaloperpub",
    bech32PrefixConsAddr: "crcvalcons",
    bech32PrefixConsPub: "crcvalconspub"
  },
  chainName: "cronos",
  feeCurrencies: [
    {
      coinDenom: "cro",
      coinMinimalDenom: "basecro",
      coinDecimals: 18,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "cro",
    coinMinimalDenom: "basecro",
    coinDecimals: 18
  },
  bip44: {
    coinType: 60
  }
});
export const cryptoorgchain = defineChainInfo({
  chainId: "crypto-org-chain-mainnet-1",
  currencies: [
    {
      coinDenom: "cro",
      coinMinimalDenom: "basecro",
      coinDecimals: 8,
      coinGeckoId: "crypto-com-chain"
    },
    {
      coinDenom: "lumen",
      coinMinimalDenom: "baseXLM",
      coinDecimals: 7
    },
    {
      coinDenom: "lumen",
      coinMinimalDenom: "ibc/34A1D4BF5FFCDB912F64FE71D54426D56970F873F1279983B69C713B3A62D10D",
      coinDecimals: 7
    }
  ],
  rest: "https://rest.mainnet.crypto.org/",
  rpc: "https://rpc.mainnet.crypto.org/",
  bech32Config: {
    bech32PrefixAccAddr: "cro",
    bech32PrefixAccPub: "cropub",
    bech32PrefixValAddr: "crovaloper",
    bech32PrefixValPub: "crovaloperpub",
    bech32PrefixConsAddr: "crovalcons",
    bech32PrefixConsPub: "crovalconspub"
  },
  chainName: "cryptoorgchain",
  feeCurrencies: [
    {
      coinDenom: "cro",
      coinMinimalDenom: "basecro",
      coinDecimals: 8,
      coinGeckoId: "crypto-com-chain",
      gasPriceStep: {
        low: 0.025,
        average: 0.03,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "cro",
    coinMinimalDenom: "basecro",
    coinDecimals: 8,
    coinGeckoId: "crypto-com-chain"
  },
  bip44: {
    coinType: 394
  }
});
export const cudos = defineChainInfo({
  chainId: "cudos-1",
  currencies: [
    {
      coinDenom: "cudos",
      coinMinimalDenom: "acudos",
      coinDecimals: 18,
      coinGeckoId: "cudos"
    }
  ],
  rest: "http://mainnet-full-node-01.hosts.cudos.org:1317",
  rpc: "http://mainnet-full-node-01.hosts.cudos.org:26657",
  bech32Config: {
    bech32PrefixAccAddr: "cudos",
    bech32PrefixAccPub: "cudospub",
    bech32PrefixValAddr: "cudosvaloper",
    bech32PrefixValPub: "cudosvaloperpub",
    bech32PrefixConsAddr: "cudosvalcons",
    bech32PrefixConsPub: "cudosvalconspub"
  },
  chainName: "cudos",
  feeCurrencies: [
    {
      coinDenom: "cudos",
      coinMinimalDenom: "acudos",
      coinDecimals: 18,
      coinGeckoId: "cudos",
      gasPriceStep: {
        low: 5000000000000,
        average: 10000000000000,
        high: 20000000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "cudos",
    coinMinimalDenom: "acudos",
    coinDecimals: 18,
    coinGeckoId: "cudos"
  },
  bip44: {
    coinType: 118
  }
});
export const decentr = defineChainInfo({
  chainId: "mainnet-3",
  currencies: [
    {
      coinDenom: "dec",
      coinMinimalDenom: "udec",
      coinDecimals: 6,
      coinGeckoId: "decentr"
    }
  ],
  rest: "https://rest.mainnet.decentr.xyz",
  rpc: "https://poseidon.mainnet.decentr.xyz",
  bech32Config: {
    bech32PrefixAccAddr: "decentr",
    bech32PrefixAccPub: "decentrpub",
    bech32PrefixValAddr: "decentrvaloper",
    bech32PrefixValPub: "decentrvaloperpub",
    bech32PrefixConsAddr: "decentrvalcons",
    bech32PrefixConsPub: "decentrvalconspub"
  },
  chainName: "decentr",
  feeCurrencies: [
    {
      coinDenom: "dec",
      coinMinimalDenom: "udec",
      coinDecimals: 6,
      coinGeckoId: "decentr",
      gasPriceStep: {
        low: 0.025,
        average: 0.025,
        high: 0.025
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "dec",
    coinMinimalDenom: "udec",
    coinDecimals: 6,
    coinGeckoId: "decentr"
  },
  bip44: {
    coinType: 118
  }
});
export const desmos = defineChainInfo({
  chainId: "desmos-mainnet",
  currencies: [
    {
      coinDenom: "dsm",
      coinMinimalDenom: "udsm",
      coinDecimals: 6,
      coinGeckoId: "desmos"
    }
  ],
  rest: "https://api.mainnet.desmos.network",
  rpc: "https://rpc.mainnet.desmos.network",
  bech32Config: {
    bech32PrefixAccAddr: "desmos",
    bech32PrefixAccPub: "desmospub",
    bech32PrefixValAddr: "desmosvaloper",
    bech32PrefixValPub: "desmosvaloperpub",
    bech32PrefixConsAddr: "desmosvalcons",
    bech32PrefixConsPub: "desmosvalconspub"
  },
  chainName: "desmos",
  feeCurrencies: [
    {
      coinDenom: "dsm",
      coinMinimalDenom: "udsm",
      coinDecimals: 6,
      coinGeckoId: "desmos",
      gasPriceStep: {
        low: 0.01,
        average: 0.03,
        high: 0.05
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "dsm",
    coinMinimalDenom: "udsm",
    coinDecimals: 6,
    coinGeckoId: "desmos"
  },
  bip44: {
    coinType: 852
  }
});
export const dhealth = defineChainInfo({
  chainId: "dhealth",
  currencies: [
    {
      coinDenom: "dhp",
      coinMinimalDenom: "udhp",
      coinDecimals: 6,
      coinGeckoId: "dhealth"
    }
  ],
  rest: "https://lcd.dhealth.com",
  rpc: "https://rpc.dhealth.com",
  bech32Config: {
    bech32PrefixAccAddr: "dh",
    bech32PrefixAccPub: "dhpub",
    bech32PrefixValAddr: "dhvaloper",
    bech32PrefixValPub: "dhvaloperpub",
    bech32PrefixConsAddr: "dhvalcons",
    bech32PrefixConsPub: "dhvalconspub"
  },
  chainName: "dhealth",
  feeCurrencies: [
    {
      coinDenom: "dhp",
      coinMinimalDenom: "udhp",
      coinDecimals: 6,
      coinGeckoId: "dhealth",
      gasPriceStep: {
        low: 0.025,
        average: 0.03,
        high: 0.035
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "dhp",
    coinMinimalDenom: "udhp",
    coinDecimals: 6,
    coinGeckoId: "dhealth"
  },
  bip44: {
    coinType: 10111
  }
});
export const dig = defineChainInfo({
  chainId: "dig-1",
  currencies: [
    {
      coinDenom: "dig",
      coinMinimalDenom: "udig",
      coinDecimals: 6,
      coinGeckoId: "dig-chain"
    }
  ],
  rest: "https://api-1-dig.notional.ventures",
  rpc: "https://rpc-1-dig.notional.ventures",
  bech32Config: {
    bech32PrefixAccAddr: "dig",
    bech32PrefixAccPub: "digpub",
    bech32PrefixValAddr: "digvaloper",
    bech32PrefixValPub: "digvaloperpub",
    bech32PrefixConsAddr: "digvalcons",
    bech32PrefixConsPub: "digvalconspub"
  },
  chainName: "dig",
  feeCurrencies: [
    {
      coinDenom: "dig",
      coinMinimalDenom: "udig",
      coinDecimals: 6,
      coinGeckoId: "dig-chain",
      gasPriceStep: {
        low: 0.025,
        average: 0.03,
        high: 0.035
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "dig",
    coinMinimalDenom: "udig",
    coinDecimals: 6,
    coinGeckoId: "dig-chain"
  },
  bip44: {
    coinType: 118
  }
});
export const doravota = defineChainInfo({
  chainId: "vota-ash",
  currencies: [
    {
      coinDenom: "DORA",
      coinMinimalDenom: "peaka",
      coinDecimals: 18
    }
  ],
  rest: "https://vota-rest.dorafactory.org",
  rpc: "https://vota-rpc.dorafactory.org/",
  bech32Config: {
    bech32PrefixAccAddr: "dora",
    bech32PrefixAccPub: "dorapub",
    bech32PrefixValAddr: "doravaloper",
    bech32PrefixValPub: "doravaloperpub",
    bech32PrefixConsAddr: "doravalcons",
    bech32PrefixConsPub: "doravalconspub"
  },
  chainName: "doravota",
  feeCurrencies: [
    {
      coinDenom: "DORA",
      coinMinimalDenom: "peaka",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 100000000000,
        average: 100000000000,
        high: 100000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "DORA",
    coinMinimalDenom: "peaka",
    coinDecimals: 18
  },
  bip44: {
    coinType: 118
  }
});
export const dydx = defineChainInfo({
  chainId: "dydx-mainnet-1",
  currencies: [
    {
      coinDenom: "dydx",
      coinMinimalDenom: "adydx",
      coinDecimals: 18,
      coinGeckoId: "dydx-chain"
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
      coinDecimals: 6
    }
  ],
  rest: "https://community.nuxian-node.ch:6797/dydx/crpc",
  rpc: "https://dydx-rpc.kingnodes.com:443",
  bech32Config: {
    bech32PrefixAccAddr: "dydx",
    bech32PrefixAccPub: "dydxpub",
    bech32PrefixValAddr: "dydxvaloper",
    bech32PrefixValPub: "dydxvaloperpub",
    bech32PrefixConsAddr: "dydxvalcons",
    bech32PrefixConsPub: "dydxvalconspub"
  },
  chainName: "dydx",
  feeCurrencies: [
    {
      coinDenom: "dydx",
      coinMinimalDenom: "adydx",
      coinDecimals: 18,
      coinGeckoId: "dydx-chain",
      gasPriceStep: {
        low: 12500000000,
        average: 12500000000,
        high: 20000000000
      }
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.025,
        average: 0.025,
        high: 0.03
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "dydx",
    coinMinimalDenom: "adydx",
    coinDecimals: 18,
    coinGeckoId: "dydx-chain"
  },
  bip44: {
    coinType: 118
  }
});
export const dymension = defineChainInfo({
  chainId: "dymension_1100-1",
  currencies: [
    {
      coinDenom: "dym",
      coinMinimalDenom: "adym",
      coinDecimals: 18,
      coinGeckoId: "dymension"
    },
    {
      coinDenom: "nim",
      coinMinimalDenom: "ibc/FB53D1684F155CBB86D9CE917807E42B59209EBE3AD3A92E15EF66586C073942",
      coinDecimals: 18
    },
    {
      coinDenom: "mand",
      coinMinimalDenom: "ibc/5A26C8DC8DA66F4DD94326E67F94510188F5F7AFE2DB3933A0C823670E56EABF",
      coinDecimals: 18
    }
  ],
  rest: "https://dym-m-api.agoranodes.com",
  rpc: "https://dym-m-rpc.agoranodes.com",
  bech32Config: {
    bech32PrefixAccAddr: "dym",
    bech32PrefixAccPub: "dympub",
    bech32PrefixValAddr: "dymvaloper",
    bech32PrefixValPub: "dymvaloperpub",
    bech32PrefixConsAddr: "dymvalcons",
    bech32PrefixConsPub: "dymvalconspub"
  },
  chainName: "dymension",
  feeCurrencies: [
    {
      coinDenom: "dym",
      coinMinimalDenom: "adym",
      coinDecimals: 18,
      coinGeckoId: "dymension",
      gasPriceStep: {
        low: 5000000000,
        average: 5000000000,
        high: 20000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "dym",
    coinMinimalDenom: "adym",
    coinDecimals: 18,
    coinGeckoId: "dymension"
  },
  bip44: {
    coinType: 60
  }
});
export const dyson = defineChainInfo({
  chainId: "dyson-mainnet-01",
  currencies: [
    {
      coinDenom: "dys",
      coinMinimalDenom: "dys",
      coinDecimals: 0
    },
    {
      coinDenom: "osmo",
      coinMinimalDenom: "ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B",
      coinDecimals: 6
    },
    {
      coinDenom: "wbtc",
      coinMinimalDenom: "ibc/9BF31153F7E37F687C75A2F310E7A4DB6E0512B065F709B5EB69FE828133AFAC",
      coinDecimals: 8
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/13DF61376C08483555C6D4C9203612086A1B23218EB5EBDBE609EEC7EFF2D82D",
      coinDecimals: 6
    }
  ],
  rest: "https://dys-api.dysonprotocol.com:443",
  rpc: "https://dys-tm.dysonprotocol.com:443",
  bech32Config: {
    bech32PrefixAccAddr: "dys",
    bech32PrefixAccPub: "dyspub",
    bech32PrefixValAddr: "dysvaloper",
    bech32PrefixValPub: "dysvaloperpub",
    bech32PrefixConsAddr: "dysvalcons",
    bech32PrefixConsPub: "dysvalconspub"
  },
  chainName: "dyson",
  feeCurrencies: [
    {
      coinDenom: "dys",
      coinMinimalDenom: "dys",
      coinDecimals: 0,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0001,
        average: 0.0002,
        high: 0.0003
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "dys",
    coinMinimalDenom: "dys",
    coinDecimals: 0
  },
  bip44: {
    coinType: 118
  }
});
export const echelon = defineChainInfo({
  chainId: "echelon_3000-3",
  currencies: [
    {
      coinDenom: "echelon",
      coinMinimalDenom: "aechelon",
      coinDecimals: 18
    }
  ],
  rest: "https://ech01api.mindheartsoul.org",
  rpc: "https://ech01trpc.mindheartsoul.org",
  bech32Config: {
    bech32PrefixAccAddr: "echelon",
    bech32PrefixAccPub: "echelonpub",
    bech32PrefixValAddr: "echelonvaloper",
    bech32PrefixValPub: "echelonvaloperpub",
    bech32PrefixConsAddr: "echelonvalcons",
    bech32PrefixConsPub: "echelonvalconspub"
  },
  chainName: "echelon",
  feeCurrencies: [
    {
      coinDenom: "echelon",
      coinMinimalDenom: "aechelon",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 10000000000,
        average: 25000000000,
        high: 40000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "echelon",
    coinMinimalDenom: "aechelon",
    coinDecimals: 18
  },
  bip44: {
    coinType: 60
  }
});
export const emoney = defineChainInfo({
  chainId: "emoney-3",
  currencies: [
    {
      coinDenom: "ngm",
      coinMinimalDenom: "ungm",
      coinDecimals: 6,
      coinGeckoId: "e-money"
    },
    {
      coinDenom: "eur",
      coinMinimalDenom: "eeur",
      coinDecimals: 6,
      coinGeckoId: "e-money-eur"
    },
    {
      coinDenom: "chf",
      coinMinimalDenom: "echf",
      coinDecimals: 6
    },
    {
      coinDenom: "nok",
      coinMinimalDenom: "enok",
      coinDecimals: 6
    },
    {
      coinDenom: "dkk",
      coinMinimalDenom: "edkk",
      coinDecimals: 6
    },
    {
      coinDenom: "sek",
      coinMinimalDenom: "esek",
      coinDecimals: 6
    }
  ],
  rest: "https://emoney.validator.network/api/",
  rpc: "https://emoney.validator.network",
  bech32Config: {
    bech32PrefixAccAddr: "emoney",
    bech32PrefixAccPub: "emoneypub",
    bech32PrefixValAddr: "emoneyvaloper",
    bech32PrefixValPub: "emoneyvaloperpub",
    bech32PrefixConsAddr: "emoneyvalcons",
    bech32PrefixConsPub: "emoneyvalconspub"
  },
  chainName: "emoney",
  feeCurrencies: [
    {
      coinDenom: "ngm",
      coinMinimalDenom: "ungm",
      coinDecimals: 6,
      coinGeckoId: "e-money",
      gasPriceStep: {
        low: 1,
        average: 1,
        high: 1
      }
    },
    {
      coinDenom: "eur",
      coinMinimalDenom: "eeur",
      coinDecimals: 6,
      coinGeckoId: "e-money-eur",
      gasPriceStep: {
        low: 1,
        average: 1,
        high: 1
      }
    },
    {
      coinDenom: "chf",
      coinMinimalDenom: "echf",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 1,
        average: 1,
        high: 1
      }
    },
    {
      coinDenom: "nok",
      coinMinimalDenom: "enok",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 1,
        average: 1,
        high: 1
      }
    },
    {
      coinDenom: "sek",
      coinMinimalDenom: "esek",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 1,
        average: 1,
        high: 1
      }
    },
    {
      coinDenom: "dkk",
      coinMinimalDenom: "edkk",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 1,
        average: 1,
        high: 1
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "ngm",
    coinMinimalDenom: "ungm",
    coinDecimals: 6,
    coinGeckoId: "e-money"
  },
  bip44: {
    coinType: 118
  }
});
export const empowerchain = defineChainInfo({
  chainId: "empowerchain-1",
  currencies: [
    {
      coinDenom: "mpwr",
      coinMinimalDenom: "umpwr",
      coinDecimals: 6
    }
  ],
  rest: "https://rest-empowerchain.ecostake.com:443",
  rpc: "https://rpc-empowerchain.ecostake.com:443",
  bech32Config: {
    bech32PrefixAccAddr: "empower",
    bech32PrefixAccPub: "empowerpub",
    bech32PrefixValAddr: "empowervaloper",
    bech32PrefixValPub: "empowervaloperpub",
    bech32PrefixConsAddr: "empowervalcons",
    bech32PrefixConsPub: "empowervalconspub"
  },
  chainName: "empowerchain",
  feeCurrencies: [
    {
      coinDenom: "mpwr",
      coinMinimalDenom: "umpwr",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.025,
        average: 0.025,
        high: 0.03
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "mpwr",
    coinMinimalDenom: "umpwr",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const ethos = defineChainInfo({
  chainId: "ethos_7003-1",
  currencies: [
    {
      coinDenom: "RYT",
      coinMinimalDenom: "aRYT",
      coinDecimals: 18
    }
  ],
  rest: "https://ethos.provable.dev/rest/",
  rpc: "https://ethos-rpc.provable.dev:443/",
  bech32Config: {
    bech32PrefixAccAddr: "ethos",
    bech32PrefixAccPub: "ethospub",
    bech32PrefixValAddr: "ethosvaloper",
    bech32PrefixValPub: "ethosvaloperpub",
    bech32PrefixConsAddr: "ethosvalcons",
    bech32PrefixConsPub: "ethosvalconspub"
  },
  chainName: "ethos",
  feeCurrencies: [
    {
      coinDenom: "RYT",
      coinMinimalDenom: "aRYT",
      coinDecimals: 18,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "RYT",
    coinMinimalDenom: "aRYT",
    coinDecimals: 18
  },
  bip44: {
    coinType: 60
  }
});
export const evmos = defineChainInfo({
  chainId: "evmos_9001-2",
  currencies: [
    {
      coinDenom: "evmos",
      coinMinimalDenom: "aevmos",
      coinDecimals: 18,
      coinGeckoId: "evmos"
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "ibc/95F4898F70B1E3765715808C57E955034419200A7BB6DDECBEAA5FD3AA3DF7D5",
      coinDecimals: 6
    },
    {
      coinDenom: "neok",
      coinMinimalDenom: "erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9",
      coinDecimals: 18
    },
    {
      coinDenom: "berlin-legacy",
      coinMinimalDenom: "erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280",
      coinDecimals: 18
    },
    {
      coinDenom: "crowdp",
      coinMinimalDenom: "erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f",
      coinDecimals: 18
    }
  ],
  rest: "https://rest.bd.evmos.org:1317",
  rpc: "https://rpc-evmos.ecostake.com",
  bech32Config: {
    bech32PrefixAccAddr: "evmos",
    bech32PrefixAccPub: "evmospub",
    bech32PrefixValAddr: "evmosvaloper",
    bech32PrefixValPub: "evmosvaloperpub",
    bech32PrefixConsAddr: "evmosvalcons",
    bech32PrefixConsPub: "evmosvalconspub"
  },
  chainName: "evmos",
  feeCurrencies: [
    {
      coinDenom: "evmos",
      coinMinimalDenom: "aevmos",
      coinDecimals: 18,
      coinGeckoId: "evmos",
      gasPriceStep: {
        low: 20000000000,
        average: 25000000000,
        high: 40000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "evmos",
    coinMinimalDenom: "aevmos",
    coinDecimals: 18,
    coinGeckoId: "evmos"
  },
  bip44: {
    coinType: 60
  }
});
export const fetchhub = defineChainInfo({
  chainId: "fetchhub-4",
  currencies: [
    {
      coinDenom: "fet",
      coinMinimalDenom: "afet",
      coinDecimals: 18,
      coinGeckoId: "fetch-ai"
    },
    {
      coinDenom: "mobx",
      coinMinimalDenom: "nanomobx",
      coinDecimals: 9
    }
  ],
  rest: "https://rest-fetchhub.fetch.ai",
  rpc: "https://rpc-fetchhub.fetch.ai:443",
  bech32Config: {
    bech32PrefixAccAddr: "fetch",
    bech32PrefixAccPub: "fetchpub",
    bech32PrefixValAddr: "fetchvaloper",
    bech32PrefixValPub: "fetchvaloperpub",
    bech32PrefixConsAddr: "fetchvalcons",
    bech32PrefixConsPub: "fetchvalconspub"
  },
  chainName: "fetchhub",
  feeCurrencies: [
    {
      coinDenom: "fet",
      coinMinimalDenom: "afet",
      coinDecimals: 18,
      coinGeckoId: "fetch-ai",
      gasPriceStep: {
        low: 0.025,
        average: 0.025,
        high: 0.035
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "fet",
    coinMinimalDenom: "afet",
    coinDecimals: 18,
    coinGeckoId: "fetch-ai"
  },
  bip44: {
    coinType: 118
  }
});
export const finschia = defineChainInfo({
  chainId: "finschia-2",
  currencies: [
    {
      coinDenom: "fnsa",
      coinMinimalDenom: "cony",
      coinDecimals: 6,
      coinGeckoId: "link"
    }
  ],
  rest: "https://finschia-api.finschia.io",
  rpc: "https://finschia-rpc.finschia.io",
  bech32Config: {
    bech32PrefixAccAddr: "link",
    bech32PrefixAccPub: "linkpub",
    bech32PrefixValAddr: "linkvaloper",
    bech32PrefixValPub: "linkvaloperpub",
    bech32PrefixConsAddr: "linkvalcons",
    bech32PrefixConsPub: "linkvalconspub"
  },
  chainName: "finschia",
  feeCurrencies: [
    {
      coinDenom: "fnsa",
      coinMinimalDenom: "cony",
      coinDecimals: 6,
      coinGeckoId: "link",
      gasPriceStep: {
        low: 0.015,
        average: 0.015,
        high: 0.015
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "fnsa",
    coinMinimalDenom: "cony",
    coinDecimals: 6,
    coinGeckoId: "link"
  },
  bip44: {
    coinType: 438
  }
});
export const firmachain = defineChainInfo({
  chainId: "colosseum-1",
  currencies: [
    {
      coinDenom: "fct",
      coinMinimalDenom: "ufct",
      coinDecimals: 6,
      coinGeckoId: "firmachain"
    }
  ],
  rest: "https://lcd-mainnet.firmachain.dev:1317",
  rpc: "https://lcd-mainnet.firmachain.dev:26657",
  bech32Config: {
    bech32PrefixAccAddr: "firma",
    bech32PrefixAccPub: "firmapub",
    bech32PrefixValAddr: "firmavaloper",
    bech32PrefixValPub: "firmavaloperpub",
    bech32PrefixConsAddr: "firmavalcons",
    bech32PrefixConsPub: "firmavalconspub"
  },
  chainName: "firmachain",
  feeCurrencies: [
    {
      coinDenom: "fct",
      coinMinimalDenom: "ufct",
      coinDecimals: 6,
      coinGeckoId: "firmachain",
      gasPriceStep: {
        low: 0.1,
        average: 0.15,
        high: 0.2
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "fct",
    coinMinimalDenom: "ufct",
    coinDecimals: 6,
    coinGeckoId: "firmachain"
  },
  bip44: {
    coinType: 7777777
  }
});
export const furya = defineChainInfo({
  chainId: "furya-1",
  currencies: [
    {
      coinDenom: "fury",
      coinMinimalDenom: "ufury",
      coinDecimals: 6,
      coinGeckoId: "fanfury"
    }
  ],
  rest: "https://furya.api.nodeshub.online",
  rpc: "https://furya-rpc.synergynodes.com",
  bech32Config: {
    bech32PrefixAccAddr: "furya",
    bech32PrefixAccPub: "furyapub",
    bech32PrefixValAddr: "furyavaloper",
    bech32PrefixValPub: "furyavaloperpub",
    bech32PrefixConsAddr: "furyavalcons",
    bech32PrefixConsPub: "furyavalconspub"
  },
  chainName: "furya",
  feeCurrencies: [
    {
      coinDenom: "fury",
      coinMinimalDenom: "ufury",
      coinDecimals: 6,
      coinGeckoId: "fanfury",
      gasPriceStep: {
        low: 0.1,
        average: 0.25,
        high: 0.5
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "fury",
    coinMinimalDenom: "ufury",
    coinDecimals: 6,
    coinGeckoId: "fanfury"
  },
  bip44: {
    coinType: 118
  }
});
export const fxcore = defineChainInfo({
  chainId: "fxcore",
  currencies: [
    {
      coinDenom: "WFX",
      coinMinimalDenom: "FX",
      coinDecimals: 18,
      coinGeckoId: "fx-coin"
    },
    {
      coinDenom: "PUNDIX",
      coinMinimalDenom: "eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38",
      coinDecimals: 18
    }
  ],
  rest: "https://fx-rest.functionx.io",
  rpc: "https://fx-json.functionx.io",
  bech32Config: {
    bech32PrefixAccAddr: "fx",
    bech32PrefixAccPub: "fxpub",
    bech32PrefixValAddr: "fxvaloper",
    bech32PrefixValPub: "fxvaloperpub",
    bech32PrefixConsAddr: "fxvalcons",
    bech32PrefixConsPub: "fxvalconspub"
  },
  chainName: "fxcore",
  feeCurrencies: [
    {
      coinDenom: "WFX",
      coinMinimalDenom: "FX",
      coinDecimals: 18,
      coinGeckoId: "fx-coin",
      gasPriceStep: {
        low: 4000000000000,
        average: 4200000000000,
        high: 5000000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "WFX",
    coinMinimalDenom: "FX",
    coinDecimals: 18,
    coinGeckoId: "fx-coin"
  },
  bip44: {
    coinType: 60
  }
});
export const gateway = defineChainInfo({
  chainId: "wormchain",
  currencies: [
    {
      coinDenom: "test",
      coinMinimalDenom: "utest",
      coinDecimals: 6
    },
    {
      coinDenom: "worm",
      coinMinimalDenom: "uworm",
      coinDecimals: 6
    },
    {
      coinDenom: "wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8",
      coinMinimalDenom: "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh",
      coinDecimals: 8
    },
    {
      coinDenom: "wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8",
      coinMinimalDenom: "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp",
      coinDecimals: 8
    },
    {
      coinDenom: "wormhole/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b/8",
      coinMinimalDenom: "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b",
      coinDecimals: 8
    },
    {
      coinDenom: "wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8",
      coinMinimalDenom: "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r",
      coinDecimals: 8
    },
    {
      coinDenom: "wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6",
      coinMinimalDenom: "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi",
      coinDecimals: 6
    },
    {
      coinDenom: "wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8",
      coinMinimalDenom: "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA",
      coinDecimals: 8
    },
    {
      coinDenom: "wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5",
      coinMinimalDenom: "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR",
      coinDecimals: 5
    },
    {
      coinDenom: "wormhole/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd/8",
      coinMinimalDenom: "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd",
      coinDecimals: 8
    },
    {
      coinDenom: "wormhole/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw/8",
      coinMinimalDenom: "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw",
      coinDecimals: 8
    },
    {
      coinDenom: "wormhole/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1/8",
      coinMinimalDenom: "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1",
      coinDecimals: 8
    },
    {
      coinDenom: "wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6",
      coinMinimalDenom: "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt",
      coinDecimals: 6
    },
    {
      coinDenom: "wormhole/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4/6",
      coinMinimalDenom: "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4",
      coinDecimals: 6
    },
    {
      coinDenom: "wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6",
      coinMinimalDenom: "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy",
      coinDecimals: 6
    },
    {
      coinDenom: "wormhole/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3/6",
      coinMinimalDenom: "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3",
      coinDecimals: 6
    },
    {
      coinDenom: "wormhole/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst/5",
      coinMinimalDenom: "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst",
      coinDecimals: 5
    },
    {
      coinDenom: "w",
      coinMinimalDenom: "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/2Wb6ueMFc9WLc2eyYVha6qnwHKbwzUXdooXsg6XXVvos",
      coinDecimals: 6
    },
    {
      coinDenom: "wormhole/AbYYFgqSQEhe7NyXfo6w75GT7fCanVd9wNg4E9Df2puP/6",
      coinMinimalDenom: "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/AbYYFgqSQEhe7NyXfo6w75GT7fCanVd9wNg4E9Df2puP",
      coinDecimals: 6
    }
  ],
  rest: "https://tncnt-eu-wormchain-main-01.rpc.p2p.world/lcd/",
  rpc: "https://tncnt-eu-wormchain-main-01.rpc.p2p.world/",
  bech32Config: {
    bech32PrefixAccAddr: "wormhole",
    bech32PrefixAccPub: "wormholepub",
    bech32PrefixValAddr: "wormholevaloper",
    bech32PrefixValPub: "wormholevaloperpub",
    bech32PrefixConsAddr: "wormholevalcons",
    bech32PrefixConsPub: "wormholevalconspub"
  },
  chainName: "gateway",
  feeCurrencies: [
    {
      coinDenom: "test",
      coinMinimalDenom: "utest",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "test",
    coinMinimalDenom: "utest",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const genesisl1 = defineChainInfo({
  chainId: "genesis_29-2",
  currencies: [
    {
      coinDenom: "l1",
      coinMinimalDenom: "el1",
      coinDecimals: 18
    }
  ],
  rest: "https://api.genesisl1.org",
  rpc: "https://26657.genesisl1.org",
  bech32Config: {
    bech32PrefixAccAddr: "genesis",
    bech32PrefixAccPub: "genesispub",
    bech32PrefixValAddr: "genesisvaloper",
    bech32PrefixValPub: "genesisvaloperpub",
    bech32PrefixConsAddr: "genesisvalcons",
    bech32PrefixConsPub: "genesisvalconspub"
  },
  chainName: "genesisl1",
  feeCurrencies: [
    {
      coinDenom: "l1",
      coinMinimalDenom: "el1",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 51000000000,
        average: 52000000000,
        high: 53000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "l1",
    coinMinimalDenom: "el1",
    coinDecimals: 18
  },
  bip44: {
    coinType: 118
  }
});
export const gitopia = defineChainInfo({
  chainId: "gitopia",
  currencies: [
    {
      coinDenom: "LORE",
      coinMinimalDenom: "ulore",
      coinDecimals: 6,
      coinGeckoId: "gitopia"
    }
  ],
  rest: "https://gitopia-api.polkachu.com:443",
  rpc: "https://gitopia-rpc.polkachu.com:443",
  bech32Config: {
    bech32PrefixAccAddr: "gitopia",
    bech32PrefixAccPub: "gitopiapub",
    bech32PrefixValAddr: "gitopiavaloper",
    bech32PrefixValPub: "gitopiavaloperpub",
    bech32PrefixConsAddr: "gitopiavalcons",
    bech32PrefixConsPub: "gitopiavalconspub"
  },
  chainName: "gitopia",
  feeCurrencies: [
    {
      coinDenom: "LORE",
      coinMinimalDenom: "ulore",
      coinDecimals: 6,
      coinGeckoId: "gitopia",
      gasPriceStep: {
        low: 0.0012,
        average: 0.0016,
        high: 0.0024
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "LORE",
    coinMinimalDenom: "ulore",
    coinDecimals: 6,
    coinGeckoId: "gitopia"
  },
  bip44: {
    coinType: 118
  }
});
export const govgen = defineChainInfo({
  chainId: "govgen-1",
  currencies: [
    {
      coinDenom: "govgen",
      coinMinimalDenom: "ugovgen",
      coinDecimals: 6
    }
  ],
  rest: "https://api.govgen.io/",
  rpc: "https://rpc.govgen.io:443",
  bech32Config: {
    bech32PrefixAccAddr: "govgen",
    bech32PrefixAccPub: "govgenpub",
    bech32PrefixValAddr: "govgenvaloper",
    bech32PrefixValPub: "govgenvaloperpub",
    bech32PrefixConsAddr: "govgenvalcons",
    bech32PrefixConsPub: "govgenvalconspub"
  },
  chainName: "govgen",
  feeCurrencies: [
    {
      coinDenom: "govgen",
      coinMinimalDenom: "ugovgen",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.006,
        average: 0.006,
        high: 0.009
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "govgen",
    coinMinimalDenom: "ugovgen",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const gravitybridge = defineChainInfo({
  chainId: "gravity-bridge-3",
  currencies: [
    {
      coinDenom: "graviton",
      coinMinimalDenom: "ugraviton",
      coinDecimals: 6,
      coinGeckoId: "graviton"
    },
    {
      coinDenom: "pstake",
      coinMinimalDenom: "gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006",
      coinDecimals: 18
    },
    {
      coinDenom: "gweth",
      coinMinimalDenom: "gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      coinDecimals: 18
    },
    {
      coinDenom: "gusdc",
      coinMinimalDenom: "gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      coinDecimals: 6,
      coinGeckoId: "gravity-bridge-usdc"
    },
    {
      coinDenom: "gusdt",
      coinMinimalDenom: "gravity0xdAC17F958D2ee523a2206206994597C13D831ec7",
      coinDecimals: 6
    },
    {
      coinDenom: "gwbtc",
      coinMinimalDenom: "gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      coinDecimals: 8
    },
    {
      coinDenom: "gdai",
      coinMinimalDenom: "gravity0x6B175474E89094C44Da98b954EedeAC495271d0F",
      coinDecimals: 18
    },
    {
      coinDenom: "gsdai",
      coinMinimalDenom: "gravity0x83F20F44975D03b1b09e64809B757c47f942BEeA",
      coinDecimals: 18
    },
    {
      coinDenom: "gocc",
      coinMinimalDenom: "gravity0x2F109021aFe75B949429fe30523Ee7C0D5B27207",
      coinDecimals: 18
    },
    {
      coinDenom: "page",
      coinMinimalDenom: "gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e",
      coinDecimals: 8
    },
    {
      coinDenom: "gpaxg",
      coinMinimalDenom: "gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78",
      coinDecimals: 18
    }
  ],
  rest: "https://gravitychain.io:1317",
  rpc: "https://gravitychain.io:26657",
  bech32Config: {
    bech32PrefixAccAddr: "gravity",
    bech32PrefixAccPub: "gravitypub",
    bech32PrefixValAddr: "gravityvaloper",
    bech32PrefixValPub: "gravityvaloperpub",
    bech32PrefixConsAddr: "gravityvalcons",
    bech32PrefixConsPub: "gravityvalconspub"
  },
  chainName: "gravitybridge",
  feeCurrencies: [
    {
      coinDenom: "graviton",
      coinMinimalDenom: "ugraviton",
      coinDecimals: 6,
      coinGeckoId: "graviton"
    },
    {
      coinDenom: "gusdc",
      coinMinimalDenom: "gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      coinDecimals: 6,
      coinGeckoId: "gravity-bridge-usdc",
      gasPriceStep: {
        low: 0.0002,
        average: 0.0005,
        high: 0.0008
      }
    },
    {
      coinDenom: "gusdt",
      coinMinimalDenom: "gravity0xdAC17F958D2ee523a2206206994597C13D831ec7",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0002,
        average: 0.0005,
        high: 0.0008
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "graviton",
    coinMinimalDenom: "ugraviton",
    coinDecimals: 6,
    coinGeckoId: "graviton"
  },
  bip44: {
    coinType: 118
  }
});
export const haqq = defineChainInfo({
  chainId: "haqq_11235-1",
  currencies: [
    {
      coinDenom: "ISLM",
      coinMinimalDenom: "aISLM",
      coinDecimals: 18,
      coinGeckoId: "islamic-coin"
    },
    {
      coinDenom: "DEEN",
      coinMinimalDenom: "erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE",
      coinDecimals: 6,
      coinGeckoId: "deenar-gold"
    }
  ],
  rest: "https://rest.cosmos.haqq.network",
  rpc: "https://rpc.tm.haqq.network",
  bech32Config: {
    bech32PrefixAccAddr: "haqq",
    bech32PrefixAccPub: "haqqpub",
    bech32PrefixValAddr: "haqqvaloper",
    bech32PrefixValPub: "haqqvaloperpub",
    bech32PrefixConsAddr: "haqqvalcons",
    bech32PrefixConsPub: "haqqvalconspub"
  },
  chainName: "haqq",
  feeCurrencies: [
    {
      coinDenom: "ISLM",
      coinMinimalDenom: "aISLM",
      coinDecimals: 18,
      coinGeckoId: "islamic-coin",
      gasPriceStep: {
        low: 20000000000,
        average: 25000000000,
        high: 40000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "ISLM",
    coinMinimalDenom: "aISLM",
    coinDecimals: 18,
    coinGeckoId: "islamic-coin"
  },
  bip44: {
    coinType: 60
  }
});
export const heli = defineChainInfo({
  chainId: "helichain",
  currencies: [
    {
      coinDenom: "heli",
      coinMinimalDenom: "uheli",
      coinDecimals: 6,
      coinGeckoId: "helichain"
    }
  ],
  rest: "https://lcd.helichain.com/",
  rpc: "https://rpc.helichain.com/",
  bech32Config: {
    bech32PrefixAccAddr: "heli",
    bech32PrefixAccPub: "helipub",
    bech32PrefixValAddr: "helivaloper",
    bech32PrefixValPub: "helivaloperpub",
    bech32PrefixConsAddr: "helivalcons",
    bech32PrefixConsPub: "helivalconspub"
  },
  chainName: "heli",
  feeCurrencies: [
    {
      coinDenom: "heli",
      coinMinimalDenom: "uheli",
      coinDecimals: 6,
      coinGeckoId: "helichain",
      gasPriceStep: {
        low: 0.001,
        average: 0.002,
        high: 0.0025
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "heli",
    coinMinimalDenom: "uheli",
    coinDecimals: 6,
    coinGeckoId: "helichain"
  },
  bip44: {
    coinType: 118
  }
});
export const highbury = defineChainInfo({
  chainId: "highbury_710-1",
  currencies: [
    {
      coinDenom: "fury",
      coinMinimalDenom: "ufury",
      coinDecimals: 6,
      coinGeckoId: "fanfury"
    },
    {
      coinDenom: "JINX",
      coinMinimalDenom: "jinx",
      coinDecimals: 6
    },
    {
      coinDenom: "JINXY",
      coinMinimalDenom: "jinxy",
      coinDecimals: 6
    }
  ],
  rest: "https://api-mainnet.furya.io/",
  rpc: "https://gridiron.furya.io",
  bech32Config: {
    bech32PrefixAccAddr: "fury",
    bech32PrefixAccPub: "furypub",
    bech32PrefixValAddr: "furyvaloper",
    bech32PrefixValPub: "furyvaloperpub",
    bech32PrefixConsAddr: "furyvalcons",
    bech32PrefixConsPub: "furyvalconspub"
  },
  chainName: "highbury",
  feeCurrencies: [
    {
      coinDenom: "fury",
      coinMinimalDenom: "ufury",
      coinDecimals: 6,
      coinGeckoId: "fanfury",
      gasPriceStep: {
        low: 0.05,
        average: 0.1,
        high: 0.25
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "fury",
    coinMinimalDenom: "ufury",
    coinDecimals: 6,
    coinGeckoId: "fanfury"
  },
  bip44: {
    coinType: 459
  }
});
export const humans = defineChainInfo({
  chainId: "humans_1089-1",
  currencies: [
    {
      coinDenom: "heart",
      coinMinimalDenom: "aheart",
      coinDecimals: 18,
      coinGeckoId: "humans-ai"
    }
  ],
  rest: "https://api.humans.nodestake.top",
  rpc: "https://rpc.humans.nodestake.top",
  bech32Config: {
    bech32PrefixAccAddr: "human",
    bech32PrefixAccPub: "humanpub",
    bech32PrefixValAddr: "humanvaloper",
    bech32PrefixValPub: "humanvaloperpub",
    bech32PrefixConsAddr: "humanvalcons",
    bech32PrefixConsPub: "humanvalconspub"
  },
  chainName: "humans",
  feeCurrencies: [
    {
      coinDenom: "heart",
      coinMinimalDenom: "aheart",
      coinDecimals: 18,
      coinGeckoId: "humans-ai",
      gasPriceStep: {
        low: 80000000000,
        average: 100000000000,
        high: 160000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "heart",
    coinMinimalDenom: "aheart",
    coinDecimals: 18,
    coinGeckoId: "humans-ai"
  },
  bip44: {
    coinType: 60
  }
});
export const impacthub = defineChainInfo({
  chainId: "ixo-5",
  currencies: [
    {
      coinDenom: "ixo",
      coinMinimalDenom: "uixo",
      coinDecimals: 6,
      coinGeckoId: "ixo"
    }
  ],
  rest: "https://proxies.sifchain.finance/api/impacthub-3/rest",
  rpc: "https://proxies.sifchain.finance/api/impacthub-3/rpc",
  bech32Config: {
    bech32PrefixAccAddr: "ixo",
    bech32PrefixAccPub: "ixopub",
    bech32PrefixValAddr: "ixovaloper",
    bech32PrefixValPub: "ixovaloperpub",
    bech32PrefixConsAddr: "ixovalcons",
    bech32PrefixConsPub: "ixovalconspub"
  },
  chainName: "impacthub",
  feeCurrencies: [
    {
      coinDenom: "ixo",
      coinMinimalDenom: "uixo",
      coinDecimals: 6,
      coinGeckoId: "ixo",
      gasPriceStep: {
        low: 0.025,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "ixo",
    coinMinimalDenom: "uixo",
    coinDecimals: 6,
    coinGeckoId: "ixo"
  },
  bip44: {
    coinType: 118
  }
});
export const injective = defineChainInfo({
  chainId: "injective-1",
  currencies: [
    {
      coinDenom: "INJ",
      coinMinimalDenom: "inj",
      coinDecimals: 18,
      coinGeckoId: "injective-protocol"
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB",
      coinDecimals: 6
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "peggy0xdAC17F958D2ee523a2206206994597C13D831ec7",
      coinDecimals: 6
    },
    {
      coinDenom: "ampINJ",
      coinMinimalDenom: "factory/inj1cdwt8g7nxgtg2k4fn8sj363mh9ahkw2qt0vrnc/ampINJ",
      coinDecimals: 6
    },
    {
      coinDenom: "autism",
      coinMinimalDenom: "factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism",
      coinDecimals: 6,
      coinGeckoId: "autism"
    },
    {
      coinDenom: "bINJ",
      coinMinimalDenom: "factory/inj1dxp690rd86xltejgfq2fa7f2nxtgmm5cer3hvu/bINJ",
      coinDecimals: 18
    },
    {
      coinDenom: "NINJA",
      coinMinimalDenom: "factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja",
      coinDecimals: 6,
      coinGeckoId: "dog-wif-nuchucks"
    },
    {
      coinDenom: "WGMI",
      coinMinimalDenom: "factory/inj1rmjzj9fn47kdmfk4f3z39qr6czexxe0yjyc546/WGMI",
      coinDecimals: 6
    },
    {
      coinDenom: "WOSMO",
      coinMinimalDenom: "ibc/DD648F5D3CDA56D0D8D8820CF703D246B9FC4007725D8B38D23A21FF1A1477E3",
      coinDecimals: 6
    },
    {
      coinDenom: "glto",
      coinMinimalDenom: "peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2",
      coinDecimals: 6
    },
    {
      coinDenom: "hava",
      coinMinimalDenom: "factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava",
      coinDecimals: 6,
      coinGeckoId: "hava-coin"
    },
    {
      coinDenom: "BADKID",
      coinMinimalDenom: "ibc/A0C5AD197FECAF6636F589071338DC7ECD6B0809CD3A5AB131EAAA5395E7E5E8",
      coinDecimals: 6
    },
    {
      coinDenom: "NINPO",
      coinMinimalDenom: "inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88",
      coinDecimals: 6
    },
    {
      coinDenom: "JUDO",
      coinMinimalDenom: "inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h",
      coinDecimals: 6
    },
    {
      coinDenom: "beast",
      coinMinimalDenom: "peggy0xA4426666addBE8c4985377d36683D17FB40c31Be",
      coinDecimals: 6
    },
    {
      coinDenom: "astro",
      coinMinimalDenom: "ibc/063F4461F7317CFF10F50AB044E44932D22AAD84FA7107082744946E6DB7B7A8",
      coinDecimals: 6
    },
    {
      coinDenom: "nINJ",
      coinMinimalDenom: "inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f",
      coinDecimals: 18
    },
    {
      coinDenom: "nATOM",
      coinMinimalDenom: "inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780",
      coinDecimals: 6
    },
    {
      coinDenom: "nWETH",
      coinMinimalDenom: "inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt",
      coinDecimals: 18
    },
    {
      coinDenom: "nUSDT",
      coinMinimalDenom: "inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s",
      coinDecimals: 6
    },
    {
      coinDenom: "nTIA",
      coinMinimalDenom: "inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv",
      coinDecimals: 6
    },
    {
      coinDenom: "NBZ",
      coinMinimalDenom: "ibc/1011E4D6D4800DA9B8F21D7C207C0B0C18E54E614A8576037F066B775210709D",
      coinDecimals: 6
    },
    {
      coinDenom: "Talis",
      coinMinimalDenom: "factory/inj1maeyvxfamtn8lfyxpjca8kuvauuf2qeu6gtxm3/Talis",
      coinDecimals: 6
    },
    {
      coinDenom: "xTalis",
      coinMinimalDenom: "factory/inj1maeyvxfamtn8lfyxpjca8kuvauuf2qeu6gtxm3/xTalis",
      coinDecimals: 6
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/2CBC2EA121AE42563B08028466F37B600F2D7D4282342DE938283CC3FB2BC00E",
      coinDecimals: 6
    },
    {
      coinDenom: "SYN",
      coinMinimalDenom: "factory/inj1a6xdezq7a94qwamec6n6cnup02nvewvjtz6h6e/SYN",
      coinDecimals: 6
    },
    {
      coinDenom: "ashSYN",
      coinMinimalDenom: "factory/inj1ej2f3lmpxj4djsmmuxvnfuvplrut7zmwrq7zj8/syn.ash",
      coinDecimals: 6
    },
    {
      coinDenom: "COSMO",
      coinMinimalDenom: "factory/inj1je6n5sr4qtx2lhpldfxndntmgls9hf38ncmcez/COSMO",
      coinDecimals: 6
    },
    {
      coinDenom: "XTRUMP",
      coinMinimalDenom: "ibc/5339B0D20986A7C20C2548ED9D6B8DE47BB64E03ABFD051B7792E713036EA20C",
      coinDecimals: 6
    },
    {
      coinDenom: "DRUGS",
      coinMinimalDenom: "cw20:inj19vy83ne9tzta2yqynj8yg7dq9ghca6yqn9hyej",
      coinDecimals: 18
    },
    {
      coinDenom: "DRUGS",
      coinMinimalDenom: "factory/inj1sklcy2px26jj73ffs2f7fmxw77zsts66prrqxr/DRUGS",
      coinDecimals: 9
    }
  ],
  rest: "https://6d0ff611-9009-4bd1-a7a7-acec7c70d454.injective-1.mesa-rest.newmetric.xyz",
  rpc: "https://6d0ff611-9009-4bd1-a7a7-acec7c70d454.injective-1.mesa-rpc.newmetric.xyz",
  bech32Config: {
    bech32PrefixAccAddr: "inj",
    bech32PrefixAccPub: "injpub",
    bech32PrefixValAddr: "injvaloper",
    bech32PrefixValPub: "injvaloperpub",
    bech32PrefixConsAddr: "injvalcons",
    bech32PrefixConsPub: "injvalconspub"
  },
  chainName: "injective",
  feeCurrencies: [
    {
      coinDenom: "INJ",
      coinMinimalDenom: "inj",
      coinDecimals: 18,
      coinGeckoId: "injective-protocol",
      gasPriceStep: {
        low: 500000000,
        average: 700000000,
        high: 900000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "INJ",
    coinMinimalDenom: "inj",
    coinDecimals: 18,
    coinGeckoId: "injective-protocol"
  },
  bip44: {
    coinType: 60
  }
});
export const irisnet = defineChainInfo({
  chainId: "irishub-1",
  currencies: [
    {
      coinDenom: "iris",
      coinMinimalDenom: "uiris",
      coinDecimals: 6,
      coinGeckoId: "iris-network"
    }
  ],
  rest: "https://api-irisnet-ia.cosmosia.notional.ventures/",
  rpc: "https://rpc-irisnet-ia.cosmosia.notional.ventures/",
  bech32Config: {
    bech32PrefixAccAddr: "iaa",
    bech32PrefixAccPub: "iaapub",
    bech32PrefixValAddr: "iaavaloper",
    bech32PrefixValPub: "iaavaloperpub",
    bech32PrefixConsAddr: "iaavalcons",
    bech32PrefixConsPub: "iaavalconspub"
  },
  chainName: "irisnet",
  feeCurrencies: [
    {
      coinDenom: "iris",
      coinMinimalDenom: "uiris",
      coinDecimals: 6,
      coinGeckoId: "iris-network",
      gasPriceStep: {
        low: 0.2,
        average: 0.3,
        high: 0.4
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "iris",
    coinMinimalDenom: "uiris",
    coinDecimals: 6,
    coinGeckoId: "iris-network"
  },
  bip44: {
    coinType: 118
  }
});
export const jackal = defineChainInfo({
  chainId: "jackal-1",
  currencies: [
    {
      coinDenom: "jkl",
      coinMinimalDenom: "ujkl",
      coinDecimals: 6,
      coinGeckoId: "jackal-protocol"
    }
  ],
  rest: "https://api.jackalprotocol.com",
  rpc: "https://rpc.jackalprotocol.com",
  bech32Config: {
    bech32PrefixAccAddr: "jkl",
    bech32PrefixAccPub: "jklpub",
    bech32PrefixValAddr: "jklvaloper",
    bech32PrefixValPub: "jklvaloperpub",
    bech32PrefixConsAddr: "jklvalcons",
    bech32PrefixConsPub: "jklvalconspub"
  },
  chainName: "jackal",
  feeCurrencies: [
    {
      coinDenom: "jkl",
      coinMinimalDenom: "ujkl",
      coinDecimals: 6,
      coinGeckoId: "jackal-protocol",
      gasPriceStep: {
        low: 0.002,
        average: 0.002,
        high: 0.02
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "jkl",
    coinMinimalDenom: "ujkl",
    coinDecimals: 6,
    coinGeckoId: "jackal-protocol"
  },
  bip44: {
    coinType: 118
  }
});
export const joltify = defineChainInfo({
  chainId: "joltify_1729-1",
  currencies: [
    {
      coinDenom: "jolt",
      coinMinimalDenom: "ujolt",
      coinDecimals: 6,
      coinGeckoId: "joltify"
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/9117A26BA81E29FA4F78F57DC2BD90CD3D26848101BA880445F119B22A1E254E",
      coinDecimals: 6
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/65D0BEC6DAD96C7F5043D1E54E54B6BB5D5B3AEC3FF6CEBB75B9E059F3580EA3",
      coinDecimals: 6
    }
  ],
  rest: "https://lcd.joltify.io/",
  rpc: "https://rpc.joltify.io",
  bech32Config: {
    bech32PrefixAccAddr: "jolt",
    bech32PrefixAccPub: "joltpub",
    bech32PrefixValAddr: "joltvaloper",
    bech32PrefixValPub: "joltvaloperpub",
    bech32PrefixConsAddr: "joltvalcons",
    bech32PrefixConsPub: "joltvalconspub"
  },
  chainName: "joltify",
  feeCurrencies: [
    {
      coinDenom: "jolt",
      coinMinimalDenom: "ujolt",
      coinDecimals: 6,
      coinGeckoId: "joltify"
    }
  ],
  stakeCurrency: {
    coinDenom: "jolt",
    coinMinimalDenom: "ujolt",
    coinDecimals: 6,
    coinGeckoId: "joltify"
  },
  bip44: {
    coinType: 118
  }
});
export const juno = defineChainInfo({
  chainId: "juno-1",
  currencies: [
    {
      coinDenom: "juno",
      coinMinimalDenom: "ujuno",
      coinDecimals: 6,
      coinGeckoId: "juno-network"
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
      coinDecimals: 6
    },
    {
      coinDenom: "neta",
      coinMinimalDenom: "cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
      coinDecimals: 6,
      coinGeckoId: "neta"
    },
    {
      coinDenom: "marble",
      coinMinimalDenom: "cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl",
      coinDecimals: 3
    },
    {
      coinDenom: "hope",
      coinMinimalDenom: "cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z",
      coinDecimals: 6
    },
    {
      coinDenom: "rac",
      coinMinimalDenom: "cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa",
      coinDecimals: 6,
      coinGeckoId: "racoon"
    },
    {
      coinDenom: "block",
      coinMinimalDenom: "cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq",
      coinDecimals: 6
    },
    {
      coinDenom: "cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49",
      coinMinimalDenom: "cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49",
      coinDecimals: 0
    },
    {
      coinDenom: "raw",
      coinMinimalDenom: "cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g",
      coinDecimals: 6
    },
    {
      coinDenom: "asvt",
      coinMinimalDenom: "cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w",
      coinDecimals: 6
    },
    {
      coinDenom: "hns",
      coinMinimalDenom: "cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k",
      coinDecimals: 6
    },
    {
      coinDenom: "joe",
      coinMinimalDenom: "cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3",
      coinDecimals: 6
    },
    {
      coinDenom: "dla",
      coinMinimalDenom: "cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr",
      coinDecimals: 6
    },
    {
      coinDenom: "glto",
      coinMinimalDenom: "cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se",
      coinDecimals: 6
    },
    {
      coinDenom: "gkey",
      coinMinimalDenom: "cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh",
      coinDecimals: 6
    },
    {
      coinDenom: "hole",
      coinMinimalDenom: "cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m",
      coinDecimals: 6
    },
    {
      coinDenom: "sejuno",
      coinMinimalDenom: "cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv",
      coinDecimals: 6
    },
    {
      coinDenom: "bjuno",
      coinMinimalDenom: "cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3",
      coinDecimals: 6
    },
    {
      coinDenom: "solar",
      coinMinimalDenom: "cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse",
      coinDecimals: 6
    },
    {
      coinDenom: "seasy",
      coinMinimalDenom: "cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf",
      coinDecimals: 6
    },
    {
      coinDenom: "muse",
      coinMinimalDenom: "cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3",
      coinDecimals: 6
    },
    {
      coinDenom: "loop",
      coinMinimalDenom: "cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup",
      coinDecimals: 6,
      coinGeckoId: "loop"
    },
    {
      coinDenom: "fury",
      coinMinimalDenom: "cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz",
      coinDecimals: 6
    },
    {
      coinDenom: "phmn",
      coinMinimalDenom: "cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l",
      coinDecimals: 6,
      coinGeckoId: "posthuman"
    },
    {
      coinDenom: "hopers",
      coinMinimalDenom: "cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n",
      coinDecimals: 6
    },
    {
      coinDenom: "red",
      coinMinimalDenom: "cw20:juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za",
      coinDecimals: 6
    },
    {
      coinDenom: "blue",
      coinMinimalDenom: "cw20:juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7",
      coinDecimals: 6
    },
    {
      coinDenom: "wynd",
      coinMinimalDenom: "cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9",
      coinDecimals: 6,
      coinGeckoId: "wynd"
    },
    {
      coinDenom: "banana",
      coinMinimalDenom: "cw20:juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj",
      coinDecimals: 6
    },
    {
      coinDenom: "nride",
      coinMinimalDenom: "cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq",
      coinDecimals: 6
    },
    {
      coinDenom: "sgnl",
      coinMinimalDenom: "cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k",
      coinDecimals: 6
    },
    {
      coinDenom: "jape",
      coinMinimalDenom: "cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps",
      coinDecimals: 6
    },
    {
      coinDenom: "catom",
      coinMinimalDenom: "cw20:juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa",
      coinDecimals: 6
    },
    {
      coinDenom: "howl",
      coinMinimalDenom: "cw20:juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz",
      coinDecimals: 6
    },
    {
      coinDenom: "fox",
      coinMinimalDenom: "cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x",
      coinDecimals: 6
    },
    {
      coinDenom: "grdn",
      coinMinimalDenom: "cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma",
      coinDecimals: 6
    },
    {
      coinDenom: "mnpu",
      coinMinimalDenom: "cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my",
      coinDecimals: 6
    },
    {
      coinDenom: "kleo",
      coinMinimalDenom: "cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy",
      coinDecimals: 6
    },
    {
      coinDenom: "sikoba",
      coinMinimalDenom: "cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp",
      coinDecimals: 6
    },
    {
      coinDenom: "shibac",
      coinMinimalDenom: "cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z",
      coinDecimals: 6
    },
    {
      coinDenom: "clst",
      coinMinimalDenom: "cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg",
      coinDecimals: 6
    },
    {
      coinDenom: "watr",
      coinMinimalDenom: "cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw",
      coinDecimals: 6
    },
    {
      coinDenom: "casa",
      coinMinimalDenom: "cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss",
      coinDecimals: 6
    },
    {
      coinDenom: "summit",
      coinMinimalDenom: "cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm",
      coinDecimals: 6
    },
    {
      coinDenom: "manna",
      coinMinimalDenom: "cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq",
      coinDecimals: 6
    },
    {
      coinDenom: "empwr",
      coinMinimalDenom: "cw20:juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v",
      coinDecimals: 6
    },
    {
      coinDenom: "middle",
      coinMinimalDenom: "cw20:juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd",
      coinDecimals: 6
    },
    {
      coinDenom: "sunset",
      coinMinimalDenom: "cw20:juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w",
      coinDecimals: 6
    },
    {
      coinDenom: "tree",
      coinMinimalDenom: "cw20:juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e",
      coinDecimals: 6
    },
    {
      coinDenom: "invdrs",
      coinMinimalDenom: "cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8",
      coinDecimals: 6
    },
    {
      coinDenom: "apemos",
      coinMinimalDenom: "cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06",
      coinDecimals: 6
    },
    {
      coinDenom: "osdoge",
      coinMinimalDenom: "cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je",
      coinDecimals: 6
    },
    {
      coinDenom: "doga",
      coinMinimalDenom: "cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d",
      coinDecimals: 6
    },
    {
      coinDenom: "pepe",
      coinMinimalDenom: "cw20:juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7",
      coinDecimals: 6
    },
    {
      coinDenom: "catmos",
      coinMinimalDenom: "cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488",
      coinDecimals: 6
    },
    {
      coinDenom: "spacer",
      coinMinimalDenom: "cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg",
      coinDecimals: 6
    },
    {
      coinDenom: "light",
      coinMinimalDenom: "cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l",
      coinDecimals: 9
    },
    {
      coinDenom: "mile",
      coinMinimalDenom: "cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d",
      coinDecimals: 6
    },
    {
      coinDenom: "void",
      coinMinimalDenom: "cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8",
      coinDecimals: 6
    },
    {
      coinDenom: "silica",
      coinMinimalDenom: "cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux",
      coinDecimals: 6
    },
    {
      coinDenom: "pepec",
      coinMinimalDenom: "cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k",
      coinDecimals: 6
    },
    {
      coinDenom: "pltn",
      coinMinimalDenom: "cw20:juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp",
      coinDecimals: 6
    },
    {
      coinDenom: "yfd",
      coinMinimalDenom: "cw20:juno12mcwmd6wqhledkjsurlfqtc8j0pedvxlcxw3gs4kh2qf808ehehsen8nmw",
      coinDecimals: 6
    },
    {
      coinDenom: "nexx",
      coinMinimalDenom: "factory/juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh/NEXX",
      coinDecimals: 6
    },
    {
      coinDenom: "dgl",
      coinMinimalDenom: "factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL",
      coinDecimals: 6
    },
    {
      coinDenom: "ampJUNO",
      coinMinimalDenom: "cw20:juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a",
      coinDecimals: 6
    },
    {
      coinDenom: "bits",
      coinMinimalDenom: "cw20:juno14fz92ehqt37e096xr95kmy8nc0kz803uezxtg4fwx7agjjma86sqm8mg3h",
      coinDecimals: 8
    },
    {
      coinDenom: "poil",
      coinMinimalDenom: "cw20:juno13epyeat7ef0k7q6kllmyvc8zpfd9xm7cqjrgtk0qkgrk7n5mjfmq8979jw",
      coinDecimals: 6
    },
    {
      coinDenom: "minerva",
      coinMinimalDenom: "cw20:juno1h86ut5aevlxuuxrra6wy3dfq6e39zkzzv9eelz678jr6amxlc4gsx46j82",
      coinDecimals: 6
    },
    {
      coinDenom: "luno",
      coinMinimalDenom: "cw20:juno13c57ssxvlzefsj4v5spdz4m9r6c6s2far5npvmc9en7nz02xqjyqne40gk",
      coinDecimals: 6
    },
    {
      coinDenom: "aten",
      coinMinimalDenom: "cw20:juno1elpg96tju8a32vzn25u6asvscajjm4000589z0zthhvks28ajypqzurl7r",
      coinDecimals: 6
    },
    {
      coinDenom: "hera",
      coinMinimalDenom: "cw20:juno1dtd45vxvv080v9x7hffysnmvrqm6ysecjdnvafqul28646hm04xs9gheh0",
      coinDecimals: 6
    },
    {
      coinDenom: "bJUNO",
      coinMinimalDenom: "cw20:juno1mvkgcr5uce2rnpzr4qrzf50hx4qreuwzlt7fzsjrhjud3xnjmttq5mkh2m",
      coinDecimals: 6,
      coinGeckoId: "backbone-labs-staked-juno"
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/4A482FA914A4B9B05801ED81C33713899F322B24F76A06F4B8FE872485EA22FF",
      coinDecimals: 6,
      coinGeckoId: "usd-coin"
    },
    {
      coinDenom: "rstk",
      coinMinimalDenom: "ibc/F0C440C8040E2FCCAC621D32D3A00D9B347C989D52CE869A91CB34D07B0021D2",
      coinDecimals: 6
    },
    {
      coinDenom: "wind",
      coinMinimalDenom: "factory/juno1h6y8tkceau4d8zyv5aa0fwdj2pa2y0gz2hx0tq/uwind",
      coinDecimals: 6
    },
    {
      coinDenom: "cw20:juno1spjes0smg5yp40dl7gqyw0h8rn03tnmve06dd2m5acwgh6tlx86swha3xg",
      coinMinimalDenom: "cw20:juno1spjes0smg5yp40dl7gqyw0h8rn03tnmve06dd2m5acwgh6tlx86swha3xg",
      coinDecimals: 0
    },
    {
      coinDenom: "arena",
      coinMinimalDenom: "factory/juno1vwmnqk0vyxc96qgffrure4nqxupjrql0zut8s02hadgp0n79r8xq5xdsxy/ARENA",
      coinDecimals: 6
    },
    {
      coinDenom: "ashWIND",
      coinMinimalDenom: "factory/juno16uprl38e4ljj5ctuha9ehpvp2l93z3d5jmwj2cttt6jkhlrhscpqgglalk/wind.ash",
      coinDecimals: 6
    }
  ],
  rest: "https://lcd-juno.itastakers.com",
  rpc: "https://rpc-juno.itastakers.com",
  bech32Config: {
    bech32PrefixAccAddr: "juno",
    bech32PrefixAccPub: "junopub",
    bech32PrefixValAddr: "junovaloper",
    bech32PrefixValPub: "junovaloperpub",
    bech32PrefixConsAddr: "junovalcons",
    bech32PrefixConsPub: "junovalconspub"
  },
  chainName: "juno",
  feeCurrencies: [
    {
      coinDenom: "juno",
      coinMinimalDenom: "ujuno",
      coinDecimals: 6,
      coinGeckoId: "juno-network",
      gasPriceStep: {
        low: 0.075,
        average: 0.1,
        high: 0.125
      }
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.003,
        average: 0.0035,
        high: 0.004
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "juno",
    coinMinimalDenom: "ujuno",
    coinDecimals: 6,
    coinGeckoId: "juno-network"
  },
  bip44: {
    coinType: 118
  }
});
export const kava = defineChainInfo({
  chainId: "kava_2222-10",
  currencies: [
    {
      coinDenom: "kava",
      coinMinimalDenom: "ukava",
      coinDecimals: 6,
      coinGeckoId: "kava"
    },
    {
      coinDenom: "HARD",
      coinMinimalDenom: "hard",
      coinDecimals: 6,
      coinGeckoId: "kava-lend"
    },
    {
      coinDenom: "SWP",
      coinMinimalDenom: "swp",
      coinDecimals: 6,
      coinGeckoId: "kava-swap"
    },
    {
      coinDenom: "USDX",
      coinMinimalDenom: "usdx",
      coinDecimals: 6,
      coinGeckoId: "usdx"
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "erc20/tether/usdt",
      coinDecimals: 6,
      coinGeckoId: "tether"
    }
  ],
  rest: "https://api.data.kava.io/",
  rpc: "https://rpc.data.kava.io",
  bech32Config: {
    bech32PrefixAccAddr: "kava",
    bech32PrefixAccPub: "kavapub",
    bech32PrefixValAddr: "kavavaloper",
    bech32PrefixValPub: "kavavaloperpub",
    bech32PrefixConsAddr: "kavavalcons",
    bech32PrefixConsPub: "kavavalconspub"
  },
  chainName: "kava",
  feeCurrencies: [
    {
      coinDenom: "kava",
      coinMinimalDenom: "ukava",
      coinDecimals: 6,
      coinGeckoId: "kava",
      gasPriceStep: {
        low: 0.05,
        average: 0.1,
        high: 0.25
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "kava",
    coinMinimalDenom: "ukava",
    coinDecimals: 6,
    coinGeckoId: "kava"
  },
  bip44: {
    coinType: 459
  }
});
export const kichain = defineChainInfo({
  chainId: "kichain-2",
  currencies: [
    {
      coinDenom: "xki",
      coinMinimalDenom: "uxki",
      coinDecimals: 6,
      coinGeckoId: "ki"
    },
    {
      coinDenom: "lvn",
      coinMinimalDenom: "cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy",
      coinDecimals: 6,
      coinGeckoId: "lvn"
    }
  ],
  rest: "https://api-mainnet.blockchain.ki",
  rpc: "https://rpc-mainnet.blockchain.ki",
  bech32Config: {
    bech32PrefixAccAddr: "ki",
    bech32PrefixAccPub: "kipub",
    bech32PrefixValAddr: "kivaloper",
    bech32PrefixValPub: "kivaloperpub",
    bech32PrefixConsAddr: "kivalcons",
    bech32PrefixConsPub: "kivalconspub"
  },
  chainName: "kichain",
  feeCurrencies: [
    {
      coinDenom: "xki",
      coinMinimalDenom: "uxki",
      coinDecimals: 6,
      coinGeckoId: "ki",
      gasPriceStep: {
        low: 0.025,
        average: 0.03,
        high: 0.05
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "xki",
    coinMinimalDenom: "uxki",
    coinDecimals: 6,
    coinGeckoId: "ki"
  },
  bip44: {
    coinType: 118
  }
});
export const konstellation = defineChainInfo({
  chainId: "darchub",
  currencies: [
    {
      coinDenom: "darc",
      coinMinimalDenom: "udarc",
      coinDecimals: 6,
      coinGeckoId: "darcmatter-coin"
    }
  ],
  rest: "https://api-konstellation-ia.cosmosia.notional.ventures/",
  rpc: "https://rpc-konstellation-ia.cosmosia.notional.ventures/",
  bech32Config: {
    bech32PrefixAccAddr: "darc",
    bech32PrefixAccPub: "darcpub",
    bech32PrefixValAddr: "darcvaloper",
    bech32PrefixValPub: "darcvaloperpub",
    bech32PrefixConsAddr: "darcvalcons",
    bech32PrefixConsPub: "darcvalconspub"
  },
  chainName: "konstellation",
  feeCurrencies: [
    {
      coinDenom: "darc",
      coinMinimalDenom: "udarc",
      coinDecimals: 6,
      coinGeckoId: "darcmatter-coin",
      gasPriceStep: {
        low: 0.0001,
        average: 0.001,
        high: 0.01
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "darc",
    coinMinimalDenom: "udarc",
    coinDecimals: 6,
    coinGeckoId: "darcmatter-coin"
  },
  bip44: {
    coinType: 118
  }
});
export const kujira = defineChainInfo({
  chainId: "kaiyo-1",
  currencies: [
    {
      coinDenom: "kuji",
      coinMinimalDenom: "ukuji",
      coinDecimals: 6,
      coinGeckoId: "kujira"
    },
    {
      coinDenom: "usk",
      coinMinimalDenom: "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
      coinDecimals: 6,
      coinGeckoId: "usk"
    },
    {
      coinDenom: "qcKUJI",
      coinMinimalDenom: "factory/kujira1m96ucsfpt2yy72w09z2rxjdj38y5qd8lqx5jtggnejmdua2ynpnsxyvjex/urcpt",
      coinDecimals: 6
    },
    {
      coinDenom: "ampKUJI",
      coinMinimalDenom: "factory/kujira1n3fr5f56r2ce0s37wdvwrk98yhhq3unnxgcqus8nzsfxvllk0yxquurqty/ampKUJI",
      coinDecimals: 6
    },
    {
      coinDenom: "mnta",
      coinMinimalDenom: "factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta",
      coinDecimals: 6,
      coinGeckoId: "mantadao"
    },
    {
      coinDenom: "qcMNTA",
      coinMinimalDenom: "factory/kujira1qzu3up50auxhqyzfq56znuj8n38q2ra7daaf9ef7vg8gu66jh4fqd2wd2y/urcpt",
      coinDecimals: 6
    },
    {
      coinDenom: "ampMNTA",
      coinMinimalDenom: "factory/kujira175yatpvkpgw07w0chhzuks3zrrae9z9g2y6r7u5pzqesyau4x9eqqyv0rr/ampMNTA",
      coinDecimals: 6
    },
    {
      coinDenom: "wink",
      coinMinimalDenom: "factory/kujira12cjjeytrqcj25uv349thltcygnp9k0kukpct0e/uwink",
      coinDecimals: 6
    },
    {
      coinDenom: "blend",
      coinMinimalDenom: "factory/kujira1slueerjz7mx9jp45u3y0rjwtvhcf8a68wf2mjt/ublend",
      coinDecimals: 6
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "ibc/20014F963CC9E6488B299622F87B60C6DE71632864859EC08B4753478DAB2BB8",
      coinDecimals: 6
    },
    {
      coinDenom: "fuzn",
      coinMinimalDenom: "factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/ufuzn",
      coinDecimals: 6,
      coinGeckoId: "fuzion"
    },
    {
      coinDenom: "rfuzn",
      coinMinimalDenom: "factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/urfuzn",
      coinDecimals: 6
    },
    {
      coinDenom: "yfuzn",
      coinMinimalDenom: "factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/uyfuzn",
      coinDecimals: 6
    },
    {
      coinDenom: "qcFUZN",
      coinMinimalDenom: "factory/kujira1l04ged98c7a7s9tllu62ld09ztylwf442qgm4thfgmadrvngeumsz4zrh2/urcpt",
      coinDecimals: 6
    },
    {
      coinDenom: "qcAQLA",
      coinMinimalDenom: "factory/kujira1d9fmsgvu3yvvppvqech2s3dhrqdm5ukngcf82ghcl70edfpwcrlsu6yr0u/urcpt",
      coinDecimals: 6
    },
    {
      coinDenom: "AQLA",
      coinMinimalDenom: "factory/kujira1xe0awk5planmtsmjel5xtx2hzhqdw5p8z66yqd/uaqla",
      coinDecimals: 6,
      coinGeckoId: "aqualibre"
    },
    {
      coinDenom: "nstk",
      coinMinimalDenom: "factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk",
      coinDecimals: 6,
      coinGeckoId: "unstake-fi"
    },
    {
      coinDenom: "local",
      coinMinimalDenom: "factory/kujira1swkuyt08z74n5jl7zr6hx0ru5sa2yev5v896p6/local",
      coinDecimals: 6
    },
    {
      coinDenom: "PLNK",
      coinMinimalDenom: "factory/kujira166ysf07ze5suazfzj0r05tv8amk2yn8zvsfuu7/uplnk",
      coinDecimals: 6
    },
    {
      coinDenom: "sol",
      coinMinimalDenom: "ibc/E5CA126979E2FFB4C70C072F8094D07ECF27773B37623AD2BF7582AD0726F0F3",
      coinDecimals: 8
    },
    {
      coinDenom: "evmos",
      coinMinimalDenom: "ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10",
      coinDecimals: 18
    },
    {
      coinDenom: "avax",
      coinMinimalDenom: "ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2",
      coinDecimals: 18
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9",
      coinDecimals: 6
    },
    {
      coinDenom: "osmo",
      coinMinimalDenom: "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
      coinDecimals: 6
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F",
      coinDecimals: 6
    },
    {
      coinDenom: "cmdx",
      coinMinimalDenom: "ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07",
      coinDecimals: 6
    },
    {
      coinDenom: "juno",
      coinMinimalDenom: "ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5",
      coinDecimals: 6
    },
    {
      coinDenom: "weth",
      coinMinimalDenom: "ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7",
      coinDecimals: 18
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
      coinDecimals: 6
    },
    {
      coinDenom: "luna",
      coinMinimalDenom: "ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986",
      coinDecimals: 6
    },
    {
      coinDenom: "stars",
      coinMinimalDenom: "ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602",
      coinDecimals: 6
    },
    {
      coinDenom: "scrt",
      coinMinimalDenom: "ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5",
      coinDecimals: 6
    },
    {
      coinDenom: "stkatom",
      coinMinimalDenom: "ibc/086C1B2E9E611F23D3C9159C858D3F4C6A911D348DFB916A11AE306A865A77A8",
      coinDecimals: 6
    },
    {
      coinDenom: "bKUJI",
      coinMinimalDenom: "factory/kujira15e8q5wzlk5k38gjxlhse3vu6vqnafysncx2ltexd6y9gx50vuj2qpt7dgv/boneKuji",
      coinDecimals: 6
    },
    {
      coinDenom: "rstk",
      coinMinimalDenom: "ibc/82B298F9E74A9A211C55C67C7AB0C790836BD43672D5DD830F7AE2C5D010AD7D",
      coinDecimals: 6
    },
    {
      coinDenom: "xusk",
      coinMinimalDenom: "factory/kujira1w4yaama77v53fp0f9343t9w2f932z526vj970n2jv5055a7gt92sxgwypf/urcpt",
      coinDecimals: 6
    },
    {
      coinDenom: "xmnta",
      coinMinimalDenom: "factory/kujira1ya42knfcsvy6eztegsn3hz7zpjvhzn05ge85xa2dy2zrjeul9hnspp3c06/urcpt",
      coinDecimals: 6
    },
    {
      coinDenom: "statom",
      coinMinimalDenom: "ibc/0306D6B66EAA2EDBB7EAD23C0EC9DDFC69BB43E80B398035E90FBCFEF3FD1A87",
      coinDecimals: 6
    },
    {
      coinDenom: "wbtc.axl",
      coinMinimalDenom: "ibc/301DAF9CB0A9E247CD478533EF0E21F48FF8118C4A51F77C8BC3EB70E5566DBC",
      coinDecimals: 6
    },
    {
      coinDenom: "stosmo",
      coinMinimalDenom: "ibc/F97BDCE220CCB52139C73066E36C45EC7EDCEEF1DAFF891A34F4FBA195A2E6E8",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-dot-mnta",
      coinMinimalDenom: "factory/kujira10qyzrqaza0f593cmnl4sc3p3nhqqakn9j56d899u723pznxpn8us6cypuw/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-shd-mnta",
      coinMinimalDenom: "factory/kujira12tpc335t72qtrjh64ccdydzsr9qtswkqn72cyvfj4d5hmtgynphsv4xjtu/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-dydx-mnta",
      coinMinimalDenom: "factory/kujira13g2eelkf9q4md4xx52ylqvlgpccn50f2vyu05eazufd2g4jatmhq2425pq/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-wavax-mnta",
      coinMinimalDenom: "factory/kujira15pk8c09vcsgsdq4xlh2qfqxtu2r8pgdy7nggkqj8p3h2phke80pqwnvtzk/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-cheq-mnta",
      coinMinimalDenom: "factory/kujira15w6jhxsv924mn9cfr0qg9z36hltmw4rzd68x40d9re6hzyhslumqjw9zqd/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-fuzn-mnta",
      coinMinimalDenom: "factory/kujira1622xuv8unv22xzazljvqh8uukcdz3yzmrp6axgerh7vxg4kum5tqcwcqmv/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-somm-mnta",
      coinMinimalDenom: "factory/kujira17djzq5x5e5zm9q9zlp6dtxdt9p8q2zvj0qtmjs0wrxm5g9e2vf5q9d6y2t/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-weth-mnta",
      coinMinimalDenom: "factory/kujira17x2v39aut0paj5d6wc5jxvqqxrdhy9kvca4y5xn6vsfpsxkgc6gq7n4tg0/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-ntrn-mnta",
      coinMinimalDenom: "factory/kujira18lhugzap20ndlqr5j2p86yk4pxpe9jjuac05z0ypxuwn3mm5vjhsjh4etr/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-wftm-mnta",
      coinMinimalDenom: "factory/kujira18mveas6xseaqu3fmukwv2ac6mp4hszk08lvyamedytjs0kxm42yqs9v89x/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-stars-mnta",
      coinMinimalDenom: "factory/kujira1av284rnqh6s0l2lwdqgpgz8wuva3wh9lkmlsupjd9escn5v4fels6kwc7v/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-tia-mnta",
      coinMinimalDenom: "factory/kujira1cpdyhrkwdnz38u45el3zq7007at9dm6h05tc36zpxvs6vrdwzrrskt0tgg/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-sol-mnta",
      coinMinimalDenom: "factory/kujira1eqd96322ec258w7k9n9cfqkusrlvzwv38jkph3qs720egdv0epmq70j2zl/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-dym-mnta",
      coinMinimalDenom: "factory/kujira1fg7wmsde7ygw3pm6hqmd29cdvp947anajmunsvk0guvjta3md25qdqk4fw/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-akt-mnta",
      coinMinimalDenom: "factory/kujira1gnftck9586x0nhsqsj99k9zednl6tx4kezu9hpph0u6jtqnafpyqxha3me/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-link-mnta",
      coinMinimalDenom: "factory/kujira1gnvja05kkmpeh9dnxl0c2p4sde7fpsy2r44njzyqgpsf72nqs78q3gzpzc/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-wtao-mnta",
      coinMinimalDenom: "factory/kujira1gz2kvfw7hpds9fvygwkj64znl3a9pw697g77cspcq5y4vj3ru45s7qc0rd/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-mnta-kuji",
      coinMinimalDenom: "factory/kujira1h75predtjdm2e7u8cuvqs3usc6xs2mxlkcr20zsshvw3qap25frsr4z949/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-axl-mnta",
      coinMinimalDenom: "factory/kujira1h929g9e9vxhc5y8v7uexdrncacxdatjupr67velewafwepfyfaaq6s7l3v/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-atom-mnta",
      coinMinimalDenom: "factory/kujira1h9f3k54j060pzlnea8ep8qfymsmwl5yhwc5hqept5p2esqzve7tq2ghnm4/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-arb-mnta",
      coinMinimalDenom: "factory/kujira1kc90tgn4ucvdv4c9xycktanwz2lna0nfel6244ylqjvhaetfntusnmyu3d/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-whale-mnta",
      coinMinimalDenom: "factory/kujira1jsjygyj8hwa4f0p9wwgct4yzmzzexe5x5u6l40l7ty2qzwwwsemqavhk3x/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-scrt-mnta",
      coinMinimalDenom: "factory/kujira1p7w9ncnnme9yzzhrvzv0hnsa5u5ga06v0ckt7lq9yfap04hc5k9sn2vf6w/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-wsteth-mnta",
      coinMinimalDenom: "factory/kujira1qx3hcr297qmgjt5f6u9peldf4phxqufvmew8d3eey3ns29e8qp3snj6jfu/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-wmatic-mnta",
      coinMinimalDenom: "factory/kujira1smfdnww47xav4nn849xphku3gk3xp7a24fk533dce8masnsz4v8quklajx/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-uni-mnta",
      coinMinimalDenom: "factory/kujira1t4mr2xt4ky4mfwcy752chzlquam3hzs44mt8vwyec8mvypmzxu5s90vamt/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-yieldeth-mnta",
      coinMinimalDenom: "factory/kujira1u8dluwa4a83q7anz0cgpmma605r07a06f0789ajcl8l0xjrplqss005cgn/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-wbtc-mnta",
      coinMinimalDenom: "factory/kujira1vj39mdwekxznxxa97fv5gt957cghfdqhwju8fdv5ysu0x6vsyhps4zmqjl/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-paxg-mnta",
      coinMinimalDenom: "factory/kujira1vqdyup9zxxl9gqy5hwh593vvuc84lstldj7qzt7fylf3q3e3uemqlwpg9y/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-wbnb-mnta",
      coinMinimalDenom: "factory/kujira1y24jwsv84lnuv5j78qeqz5ujjpd058qsft7wfc0nk9jvycugm32sqnq53d/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-osmo-mnta",
      coinMinimalDenom: "factory/kujira1ygperwf0dc9ng2jffj0pwnnray3rscn9el6d78qjtt25qwgqukqszmdwtv/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-inj-mnta",
      coinMinimalDenom: "factory/kujira1znx048dcc6arqfw6kpckl0k4ts2h7cdx20nk22wz2cxh5vle3wxqknk238/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-stosmo-osmo",
      coinMinimalDenom: "factory/kujira18sek950cg92gd0kvpj67dfg6p7kee6hzw92etcf2jgufr3mttvaslt5sal/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-wsteth-weth",
      coinMinimalDenom: "factory/kujira1lyyeyuw4qgan6nz45thw2m0nmxa457uz7cp9dqw5d9a0h7ccek7qavkm6g/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-qcmnta-mnta",
      coinMinimalDenom: "factory/kujira1ul00h0a2kgcg9x2yfa86wj9qguhyv7jmpjpw6ztt24j9mn9xjw3slawyc8/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-ampmnta-mnta",
      coinMinimalDenom: "factory/kujira1vj36ntsqd3msc69lxldcv9dd50jngknmael9e07rz4fpn5kyq0jsglvz2m/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-weth-usk",
      coinMinimalDenom: "factory/kujira1n648rfqqvjxm6c7zgfnfqay85rkapgg0z7da9pnmjazz5m5d7l0qxdtq90/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "nami",
      coinMinimalDenom: "factory/kujira13x2l25mpkhwnwcwdzzd34cr8fyht9jlj7xu9g4uffe36g3fmln8qkvm3qn/unami",
      coinDecimals: 6,
      coinGeckoId: "nami-protocol"
    },
    {
      coinDenom: "nausd",
      coinMinimalDenom: "factory/kujira18thffdpuz8tm3mwwun4uhks8a2v7ye0jmw3fllqhklma82lqkpms20gh9c/unausd",
      coinDecimals: 6
    },
    {
      coinDenom: "mctest",
      coinMinimalDenom: "factory/kujira1mn2pgkggquqm2m44zqlaq29jxwtad53qkv4xy4/MCTest",
      coinDecimals: 6
    },
    {
      coinDenom: "auto",
      coinMinimalDenom: "factory/kujira13x2l25mpkhwnwcwdzzd34cr8fyht9jlj7xu9g4uffe36g3fmln8qkvm3qn/uauto",
      coinDecimals: 6
    },
    {
      coinDenom: "qcDYDX",
      coinMinimalDenom: "factory/kujira1seqq2ekz47uqayshqkg5wqx5vcyrmtwcl9vscnwy2gjh7mz5aapsdfxsd5/urcpt",
      coinDecimals: 18
    },
    {
      coinDenom: "rkuji",
      coinMinimalDenom: "factory/kujira1tsekaqv9vmem0zwskmf90gpf0twl6k57e8vdnq/urkuji",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-atom-usk",
      coinMinimalDenom: "factory/kujira1yncutssgh2vj9scaymtteg949hwcft07c6qmgarxnaf04yesq3jsn6g2uv/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-weth-usk",
      coinMinimalDenom: "factory/kujira1xwvvjq5w0887v2vz4e83kcu38s0jq8q8lqa3z5hxm295q7y4uejqp24la7/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-sol-usk",
      coinMinimalDenom: "factory/kujira1vcmh95lje5dln782pxckma65eujs4sv960w22whgsp7a2ajsc6lsvnlhgd/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-weth-usdc",
      coinMinimalDenom: "factory/kujira1n4jfv39hzv2dtshzv6gj4hp8rkdy5rrsr7l84lc3x9cahz4v0umq24q3lu/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-dydx-usk",
      coinMinimalDenom: "factory/kujira1lctu7hy65466fxw3tcqf8w45zwrpwgd9chvjqpgyfgcr73k774nsv4ya6t/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-akt-usdc",
      coinMinimalDenom: "factory/kujira1g5st8p6qdyf23zzerjcxgpr2r7a9wzdyaymu79ngg6ve3m9v3n4sdetv4e/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-wbtc-usk",
      coinMinimalDenom: "factory/kujira1d7jt9zwlnpvf7sskfm57c77pm9mtwczqre75t9k80ees0v523kasss9htj/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-wbtc-wbtc",
      coinMinimalDenom: "factory/kujira1c4e2zk4z0anrufjh64gxtse6e4s5g52fe2ja8ke3r9e0pvpd0z0qws8zsp/ulp",
      coinDecimals: 8
    },
    {
      coinDenom: "lp-inj-usdc",
      coinMinimalDenom: "factory/kujira14jwhlsg3az20f7keav2axxj205fyv5j8mp6rv5svqwwll3ls9slq6zwleg/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-atom-usdc",
      coinMinimalDenom: "factory/kujira13my0qtm2a8jp0wg8uzg49tyn4zcea8scy3dc7ghn8z9eys08yzls49ymdm/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-mnta-usdc",
      coinMinimalDenom: "factory/kujira1742pe93mxm0cwqjxgxh6th9sspdrluqvw9pha9q69eeatue4x5xs0wdq2d/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "lp-mnta-usk",
      coinMinimalDenom: "factory/kujira1xtaadmh06s8u3z5mypp8qayhrnxgga5wr88s7raram4rz8zu37hquf82wk/ulp",
      coinDecimals: 6
    },
    {
      coinDenom: "boon",
      coinMinimalDenom: "factory/kujira1gewwffxhaygxe8tacd3z9h4uyvpd2h7v9qtfmaw8jjhwalxxpd7qlqld4m/boon",
      coinDecimals: 6
    }
  ],
  rest: "https://lcd.kaiyo.kujira.setten.io",
  rpc: "https://rpc.kaiyo.kujira.setten.io",
  bech32Config: {
    bech32PrefixAccAddr: "kujira",
    bech32PrefixAccPub: "kujirapub",
    bech32PrefixValAddr: "kujiravaloper",
    bech32PrefixValPub: "kujiravaloperpub",
    bech32PrefixConsAddr: "kujiravalcons",
    bech32PrefixConsPub: "kujiravalconspub"
  },
  chainName: "kujira",
  feeCurrencies: [
    {
      coinDenom: "kuji",
      coinMinimalDenom: "ukuji",
      coinDecimals: 6,
      coinGeckoId: "kujira",
      gasPriceStep: {
        low: 0.0034,
        average: 0.0051,
        high: 0.00681
      }
    },
    {
      coinDenom: "usk",
      coinMinimalDenom: "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
      coinDecimals: 6,
      coinGeckoId: "usk",
      gasPriceStep: {
        low: 0.01186,
        average: 0.01779,
        high: 0.02372
      }
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0119,
        average: 0.01785,
        high: 0.02379
      }
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.00129,
        average: 0.00193,
        high: 0.00258
      }
    },
    {
      coinDenom: "osmo",
      coinMinimalDenom: "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01795,
        average: 0.02692,
        high: 0.0359
      }
    },
    {
      coinDenom: "cmdx",
      coinMinimalDenom: "ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.65943,
        average: 0.98915,
        high: 1.31887
      }
    },
    {
      coinDenom: "evmos",
      coinMinimalDenom: "ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 160416396197,
        average: 240624594296,
        high: 320832792394
      }
    },
    {
      coinDenom: "juno",
      coinMinimalDenom: "ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.02689,
        average: 0.04034,
        high: 0.05379
      }
    },
    {
      coinDenom: "luna",
      coinMinimalDenom: "ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01495,
        average: 0.02243,
        high: 0.02991
      }
    },
    {
      coinDenom: "scrt",
      coinMinimalDenom: "ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.03139,
        average: 0.04709,
        high: 0.06278
      }
    },
    {
      coinDenom: "stars",
      coinMinimalDenom: "ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.90403,
        average: 1.35605,
        high: 1.80806
      }
    },
    {
      coinDenom: "avax",
      coinMinimalDenom: "ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 559196837,
        average: 838795256,
        high: 1118393675
      }
    },
    {
      coinDenom: "weth",
      coinMinimalDenom: "ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 5772801,
        average: 8659201,
        high: 11545602
      }
    },
    {
      coinDenom: "mnta",
      coinMinimalDenom: "factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta",
      coinDecimals: 6,
      coinGeckoId: "mantadao",
      gasPriceStep: {
        low: 0.01807,
        average: 0.02711,
        high: 0.03615
      }
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01194,
        average: 0.01792,
        high: 0.02389
      }
    },
    {
      coinDenom: "sol",
      coinMinimalDenom: "ibc/E5CA126979E2FFB4C70C072F8094D07ECF27773B37623AD2BF7582AD0726F0F3",
      coinDecimals: 8,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.00019,
        average: 0.00029,
        high: 0.00039
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "kuji",
    coinMinimalDenom: "ukuji",
    coinDecimals: 6,
    coinGeckoId: "kujira"
  },
  bip44: {
    coinType: 118
  }
});
export const kyve = defineChainInfo({
  chainId: "kyve-1",
  currencies: [
    {
      coinDenom: "kyve",
      coinMinimalDenom: "ukyve",
      coinDecimals: 6,
      coinGeckoId: "kyve-network"
    }
  ],
  rest: "https://api-eu-1.kyve.network",
  rpc: "https://rpc-eu-1.kyve.network",
  bech32Config: {
    bech32PrefixAccAddr: "kyve",
    bech32PrefixAccPub: "kyvepub",
    bech32PrefixValAddr: "kyvevaloper",
    bech32PrefixValPub: "kyvevaloperpub",
    bech32PrefixConsAddr: "kyvevalcons",
    bech32PrefixConsPub: "kyvevalconspub"
  },
  chainName: "kyve",
  feeCurrencies: [
    {
      coinDenom: "kyve",
      coinMinimalDenom: "ukyve",
      coinDecimals: 6,
      coinGeckoId: "kyve-network",
      gasPriceStep: {
        low: 0.02,
        average: 0.03,
        high: 0.06
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "kyve",
    coinMinimalDenom: "ukyve",
    coinDecimals: 6,
    coinGeckoId: "kyve-network"
  },
  bip44: {
    coinType: 118
  }
});
export const lambda = defineChainInfo({
  chainId: "lambda_92000-1",
  currencies: [
    {
      coinDenom: "lamb",
      coinMinimalDenom: "ulamb",
      coinDecimals: 18,
      coinGeckoId: "lambda"
    }
  ],
  rest: "https://rest.lambda.im",
  rpc: "https://rpc.lambda.im",
  bech32Config: {
    bech32PrefixAccAddr: "lamb",
    bech32PrefixAccPub: "lambpub",
    bech32PrefixValAddr: "lambvaloper",
    bech32PrefixValPub: "lambvaloperpub",
    bech32PrefixConsAddr: "lambvalcons",
    bech32PrefixConsPub: "lambvalconspub"
  },
  chainName: "lambda",
  feeCurrencies: [
    {
      coinDenom: "lamb",
      coinMinimalDenom: "ulamb",
      coinDecimals: 18,
      coinGeckoId: "lambda",
      gasPriceStep: {
        low: 10000000000,
        average: 25000000000,
        high: 40000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "lamb",
    coinMinimalDenom: "ulamb",
    coinDecimals: 18,
    coinGeckoId: "lambda"
  },
  bip44: {
    coinType: 60
  }
});
export const lava = defineChainInfo({
  chainId: "lava-mainnet-1",
  currencies: [
    {
      coinDenom: "lava",
      coinMinimalDenom: "ulava",
      coinDecimals: 6,
      coinGeckoId: "lava-network"
    }
  ],
  rest: "https://lava-api.finteh.org:443",
  rpc: "https://lava.tendermintrpc.lava.build",
  bech32Config: {
    bech32PrefixAccAddr: "lava@",
    bech32PrefixAccPub: "lava@pub",
    bech32PrefixValAddr: "lava@valoper",
    bech32PrefixValPub: "lava@valoperpub",
    bech32PrefixConsAddr: "lava@valcons",
    bech32PrefixConsPub: "lava@valconspub"
  },
  chainName: "lava",
  feeCurrencies: [
    {
      coinDenom: "lava",
      coinMinimalDenom: "ulava",
      coinDecimals: 6,
      coinGeckoId: "lava-network",
      gasPriceStep: {
        low: 0.00002,
        average: 0.025,
        high: 0.05
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "lava",
    coinMinimalDenom: "ulava",
    coinDecimals: 6,
    coinGeckoId: "lava-network"
  },
  bip44: {
    coinType: 118
  }
});
export const likecoin = defineChainInfo({
  chainId: "likecoin-mainnet-2",
  currencies: [
    {
      coinDenom: "like",
      coinMinimalDenom: "nanolike",
      coinDecimals: 9,
      coinGeckoId: "likecoin"
    }
  ],
  rest: "https://mainnet-node.like.co",
  rpc: "https://mainnet-node.like.co/rpc/",
  bech32Config: {
    bech32PrefixAccAddr: "like",
    bech32PrefixAccPub: "likepub",
    bech32PrefixValAddr: "likevaloper",
    bech32PrefixValPub: "likevaloperpub",
    bech32PrefixConsAddr: "likevalcons",
    bech32PrefixConsPub: "likevalconspub"
  },
  chainName: "likecoin",
  feeCurrencies: [
    {
      coinDenom: "like",
      coinMinimalDenom: "nanolike",
      coinDecimals: 9,
      coinGeckoId: "likecoin",
      gasPriceStep: {
        low: 1000,
        average: 10000,
        high: 1000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "like",
    coinMinimalDenom: "nanolike",
    coinDecimals: 9,
    coinGeckoId: "likecoin"
  },
  bip44: {
    coinType: 118
  }
});
export const logos = defineChainInfo({
  chainId: "logos_7002-1",
  currencies: [
    {
      coinDenom: "LYT",
      coinMinimalDenom: "aLYT",
      coinDecimals: 18
    }
  ],
  rest: "https://logos.provable.dev/rest/",
  rpc: "https://logos-rpc.provable.dev:443/",
  bech32Config: {
    bech32PrefixAccAddr: "logos",
    bech32PrefixAccPub: "logospub",
    bech32PrefixValAddr: "logosvaloper",
    bech32PrefixValPub: "logosvaloperpub",
    bech32PrefixConsAddr: "logosvalcons",
    bech32PrefixConsPub: "logosvalconspub"
  },
  chainName: "logos",
  feeCurrencies: [
    {
      coinDenom: "LYT",
      coinMinimalDenom: "aLYT",
      coinDecimals: 18,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "LYT",
    coinMinimalDenom: "aLYT",
    coinDecimals: 18
  },
  bip44: {
    coinType: 60
  }
});
export const loop = defineChainInfo({
  chainId: "loop-1",
  currencies: [
    {
      coinDenom: "token",
      coinMinimalDenom: "token",
      coinDecimals: 0
    },
    {
      coinDenom: "poa",
      coinMinimalDenom: "upoa",
      coinDecimals: 6
    }
  ],
  rest: "https://api.loop.pfc.zone/",
  rpc: "https://rpc.loop.pfc.zone/",
  bech32Config: {
    bech32PrefixAccAddr: "loop",
    bech32PrefixAccPub: "looppub",
    bech32PrefixValAddr: "loopvaloper",
    bech32PrefixValPub: "loopvaloperpub",
    bech32PrefixConsAddr: "loopvalcons",
    bech32PrefixConsPub: "loopvalconspub"
  },
  chainName: "loop",
  feeCurrencies: [
    {
      coinDenom: "token",
      coinMinimalDenom: "token",
      coinDecimals: 0,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "token",
    coinMinimalDenom: "token",
    coinDecimals: 0
  },
  bip44: {
    coinType: 118
  }
});
export const loyal = defineChainInfo({
  chainId: "loyal-main-02",
  currencies: [
    {
      coinDenom: "lyl",
      coinMinimalDenom: "ulyl",
      coinDecimals: 6
    }
  ],
  rest: "https://lcd-main.joinloyal.io/",
  rpc: "https://rpc-main.joinloyal.io/",
  bech32Config: {
    bech32PrefixAccAddr: "loyal",
    bech32PrefixAccPub: "loyalpub",
    bech32PrefixValAddr: "loyalvaloper",
    bech32PrefixValPub: "loyalvaloperpub",
    bech32PrefixConsAddr: "loyalvalcons",
    bech32PrefixConsPub: "loyalvalconspub"
  },
  chainName: "loyal",
  feeCurrencies: [
    {
      coinDenom: "lyl",
      coinMinimalDenom: "ulyl",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "lyl",
    coinMinimalDenom: "ulyl",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const lumenx = defineChainInfo({
  chainId: "LumenX",
  currencies: [
    {
      coinDenom: "lumen",
      coinMinimalDenom: "ulumen",
      coinDecimals: 6
    }
  ],
  rest: "https://api-lumenx.cryptonet.pl/",
  rpc: "https://rpc-lumenx.cryptonet.pl/",
  bech32Config: {
    bech32PrefixAccAddr: "lumen",
    bech32PrefixAccPub: "lumenpub",
    bech32PrefixValAddr: "lumenvaloper",
    bech32PrefixValPub: "lumenvaloperpub",
    bech32PrefixConsAddr: "lumenvalcons",
    bech32PrefixConsPub: "lumenvalconspub"
  },
  chainName: "lumenx",
  feeCurrencies: [
    {
      coinDenom: "lumen",
      coinMinimalDenom: "ulumen",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "lumen",
    coinMinimalDenom: "ulumen",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const lumnetwork = defineChainInfo({
  chainId: "lum-network-1",
  currencies: [
    {
      coinDenom: "lum",
      coinMinimalDenom: "ulum",
      coinDecimals: 6,
      coinGeckoId: "lum-network"
    }
  ],
  rest: "https://rest.node0.mainnet.lum.network",
  rpc: "https://rpc.node0.mainnet.lum.network",
  bech32Config: {
    bech32PrefixAccAddr: "lum",
    bech32PrefixAccPub: "lumpub",
    bech32PrefixValAddr: "lumvaloper",
    bech32PrefixValPub: "lumvaloperpub",
    bech32PrefixConsAddr: "lumvalcons",
    bech32PrefixConsPub: "lumvalconspub"
  },
  chainName: "lumnetwork",
  feeCurrencies: [
    {
      coinDenom: "lum",
      coinMinimalDenom: "ulum",
      coinDecimals: 6,
      coinGeckoId: "lum-network",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "lum",
    coinMinimalDenom: "ulum",
    coinDecimals: 6,
    coinGeckoId: "lum-network"
  },
  bip44: {
    coinType: 880
  }
});
export const mande = defineChainInfo({
  chainId: "mande_18071918-1",
  currencies: [
    {
      coinDenom: "mand",
      coinMinimalDenom: "amand",
      coinDecimals: 18,
      coinGeckoId: "mande-network"
    }
  ],
  rest: "https://mande-mainnet-rest.public.blastapi.io",
  rpc: "https://mande-mainnet-tendermint.public.blastapi.io",
  bech32Config: {
    bech32PrefixAccAddr: "mande",
    bech32PrefixAccPub: "mandepub",
    bech32PrefixValAddr: "mandevaloper",
    bech32PrefixValPub: "mandevaloperpub",
    bech32PrefixConsAddr: "mandevalcons",
    bech32PrefixConsPub: "mandevalconspub"
  },
  chainName: "mande",
  feeCurrencies: [
    {
      coinDenom: "mand",
      coinMinimalDenom: "amand",
      coinDecimals: 18,
      coinGeckoId: "mande-network",
      gasPriceStep: {
        low: 20000000000,
        average: 20000000000,
        high: 20000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "mand",
    coinMinimalDenom: "amand",
    coinDecimals: 18,
    coinGeckoId: "mande-network"
  },
  bip44: {
    coinType: 60
  }
});
export const mars = defineChainInfo({
  chainId: "mars-1",
  currencies: [
    {
      coinDenom: "mars",
      coinMinimalDenom: "umars",
      coinDecimals: 6
    }
  ],
  rest: "https://rest.marsprotocol.io:443",
  rpc: "https://rpc.marsprotocol.io:443",
  bech32Config: {
    bech32PrefixAccAddr: "mars",
    bech32PrefixAccPub: "marspub",
    bech32PrefixValAddr: "marsvaloper",
    bech32PrefixValPub: "marsvaloperpub",
    bech32PrefixConsAddr: "marsvalcons",
    bech32PrefixConsPub: "marsvalconspub"
  },
  chainName: "mars",
  feeCurrencies: [
    {
      coinDenom: "mars",
      coinMinimalDenom: "umars",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "mars",
    coinMinimalDenom: "umars",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const medasdigital = defineChainInfo({
  chainId: "medasdigital-1",
  currencies: [
    {
      coinDenom: "medas",
      coinMinimalDenom: "umedas",
      coinDecimals: 6
    }
  ],
  rest: "https://lcd.medas-digital.io:1317/",
  rpc: "https://rpc.medas-digital.io:26657/",
  bech32Config: {
    bech32PrefixAccAddr: "medas",
    bech32PrefixAccPub: "medaspub",
    bech32PrefixValAddr: "medasvaloper",
    bech32PrefixValPub: "medasvaloperpub",
    bech32PrefixConsAddr: "medasvalcons",
    bech32PrefixConsPub: "medasvalconspub"
  },
  chainName: "medasdigital",
  feeCurrencies: [
    {
      coinDenom: "medas",
      coinMinimalDenom: "umedas",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.1,
        average: 0.25,
        high: 0.4
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "medas",
    coinMinimalDenom: "umedas",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const meme = defineChainInfo({
  chainId: "meme-1",
  currencies: [
    {
      coinDenom: "meme",
      coinMinimalDenom: "umeme",
      coinDecimals: 6,
      coinGeckoId: "meme-network"
    },
    {
      coinDenom: "planq",
      coinMinimalDenom: "ibc/FACC1CE598366EA01D86CF1CBE05F1A6C7511F673E91DEFF04342ED8DEFE3A60",
      coinDecimals: 18
    }
  ],
  rest: "https://api-meme-1.meme.sx/",
  rpc: "https://rpc-meme-1.meme.sx/",
  bech32Config: {
    bech32PrefixAccAddr: "meme",
    bech32PrefixAccPub: "memepub",
    bech32PrefixValAddr: "memevaloper",
    bech32PrefixValPub: "memevaloperpub",
    bech32PrefixConsAddr: "memevalcons",
    bech32PrefixConsPub: "memevalconspub"
  },
  chainName: "meme",
  feeCurrencies: [
    {
      coinDenom: "meme",
      coinMinimalDenom: "umeme",
      coinDecimals: 6,
      coinGeckoId: "meme-network",
      gasPriceStep: {
        low: 0.025,
        average: 0.035,
        high: 0.045
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "meme",
    coinMinimalDenom: "umeme",
    coinDecimals: 6,
    coinGeckoId: "meme-network"
  },
  bip44: {
    coinType: 118
  }
});
export const migaloo = defineChainInfo({
  chainId: "migaloo-1",
  currencies: [
    {
      coinDenom: "whale",
      coinMinimalDenom: "uwhale",
      coinDecimals: 6,
      coinGeckoId: "white-whale"
    },
    {
      coinDenom: "ampWHALE",
      coinMinimalDenom: "factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE",
      coinDecimals: 6
    },
    {
      coinDenom: "bWHALE",
      coinMinimalDenom: "factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale",
      coinDecimals: 6,
      coinGeckoId: "backbone-labs-staked-whale"
    },
    {
      coinDenom: "fable",
      coinMinimalDenom: "factory/migaloo18a9m9stu3dyvewwcq9qmp85euxqcvln5mefync/fable",
      coinDecimals: 6
    },
    {
      coinDenom: "bluna",
      coinMinimalDenom: "ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708",
      coinDecimals: 6
    },
    {
      coinDenom: "RAC",
      coinMinimalDenom: "factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac",
      coinDecimals: 6
    },
    {
      coinDenom: "ASH",
      coinMinimalDenom: "factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash",
      coinDecimals: 6
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "ibc/86A25A8A327164AE7C68A29B6ED745C7EEDC36E260A6666F33A6407BECEC4737",
      coinDecimals: 6
    },
    {
      coinDenom: "mUSDC",
      coinMinimalDenom: "cw20:migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v",
      coinDecimals: 6
    },
    {
      coinDenom: "GUPPY",
      coinMinimalDenom: "factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy",
      coinDecimals: 6
    },
    {
      coinDenom: "OPHIR",
      coinMinimalDenom: "factory/migaloo1t862qdu9mj5hr3j727247acypym3ej47axu22rrapm4tqlcpuseqltxwq5/ophir",
      coinDecimals: 6
    },
    {
      coinDenom: "SHARK",
      coinMinimalDenom: "factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark",
      coinDecimals: 6
    },
    {
      coinDenom: "lsdSHARK",
      coinMinimalDenom: "factory/migaloo1p3aj9f09d7c4jxhgue0hpdpw370j6gzc59nxxx6l8d0gc9f9rfwsdwetus/lsdSHARK",
      coinDecimals: 6
    },
    {
      coinDenom: "luna",
      coinMinimalDenom: "ibc/4627AD2524E3E0523047E35BB76CC90E37D9D57ACF14F0FCBCEB2480705F3CB8",
      coinDecimals: 6,
      coinGeckoId: "terra-luna-2"
    },
    {
      coinDenom: "Rakoff",
      coinMinimalDenom: "ibc/44C29C91F202E20C8E28DFB1FA89B725C54171CD77B8948836C72E7A97E4A018",
      coinDecimals: 6
    },
    {
      coinDenom: "gash",
      coinMinimalDenom: "factory/migaloo1r9x8fz4alekzr78k42rpmr9unpa7egsldpqeynmwl2nfvzexue9sn8l5rg/gash",
      coinDecimals: 6
    },
    {
      coinDenom: "rstk",
      coinMinimalDenom: "factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk",
      coinDecimals: 6
    },
    {
      coinDenom: "frog",
      coinMinimalDenom: "ibc/B1BD4EF49A2E051EFC85E8C6A932B559CE62F9519E0E83BE29A8F0BDF89BD1D3",
      coinDecimals: 6
    },
    {
      coinDenom: "GRAC",
      coinMinimalDenom: "factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/ugrac",
      coinDecimals: 6
    },
    {
      coinDenom: "wind",
      coinMinimalDenom: "ibc/721B42229246EEDA7A656DB17E494127F91E84AD63E21852737628321892A928",
      coinDecimals: 6
    },
    {
      coinDenom: "shitmos",
      coinMinimalDenom: "ibc/0E1B883A15D5FCA533332CBAB1A672934C3936920399F2A3EB4F438E3EBAD0E9",
      coinDecimals: 6
    },
    {
      coinDenom: "ampGASH",
      coinMinimalDenom: "factory/migaloo1nsskhvvh0msm7d5ke2kfg24a8d4jecsnxd28s27h0uz5kf9ap60shlqmcl/ampGASH",
      coinDecimals: 6
    },
    {
      coinDenom: "SYN",
      coinMinimalDenom: "ibc/33E97105B5C1F48CB7D6400F4673F9B3699AC59EDB621CCCD57D5D480E0C83B6",
      coinDecimals: 6
    }
  ],
  rest: "https://migaloo-api.polkachu.com:443",
  rpc: "https://migaloo-rpc.polkachu.com:443",
  bech32Config: {
    bech32PrefixAccAddr: "migaloo",
    bech32PrefixAccPub: "migaloopub",
    bech32PrefixValAddr: "migaloovaloper",
    bech32PrefixValPub: "migaloovaloperpub",
    bech32PrefixConsAddr: "migaloovalcons",
    bech32PrefixConsPub: "migaloovalconspub"
  },
  chainName: "migaloo",
  feeCurrencies: [
    {
      coinDenom: "whale",
      coinMinimalDenom: "uwhale",
      coinDecimals: 6,
      coinGeckoId: "white-whale",
      gasPriceStep: {
        low: 1,
        average: 2,
        high: 3
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "whale",
    coinMinimalDenom: "uwhale",
    coinDecimals: 6,
    coinGeckoId: "white-whale"
  },
  bip44: {
    coinType: 118
  }
});
export const mtgbp = defineChainInfo({
  chainId: "mtgbp-1",
  currencies: [
    {
      coinDenom: "mtgbp",
      coinMinimalDenom: "mtgbp",
      coinDecimals: 0
    }
  ],
  rest: "https://lcd.mtgbp.com",
  rpc: "https://rcp.mtgbp.com",
  bech32Config: {
    bech32PrefixAccAddr: "mtgbp",
    bech32PrefixAccPub: "mtgbppub",
    bech32PrefixValAddr: "mtgbpvaloper",
    bech32PrefixValPub: "mtgbpvaloperpub",
    bech32PrefixConsAddr: "mtgbpvalcons",
    bech32PrefixConsPub: "mtgbpvalconspub"
  },
  chainName: "mtgbp",
  feeCurrencies: [
    {
      coinDenom: "mtgbp",
      coinMinimalDenom: "mtgbp",
      coinDecimals: 0,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.000001,
        average: 0.000005,
        high: 0.0001
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "mtgbp",
    coinMinimalDenom: "mtgbp",
    coinDecimals: 0
  },
  bip44: {
    coinType: 1179993441
  }
});
export const mun = defineChainInfo({
  chainId: "mun-1",
  currencies: [
    {
      coinDenom: "mun",
      coinMinimalDenom: "umun",
      coinDecimals: 6
    }
  ],
  rest: "https://mainnet1.mun.money",
  rpc: "https://mainnet1rpc.mun.money",
  bech32Config: {
    bech32PrefixAccAddr: "mun",
    bech32PrefixAccPub: "munpub",
    bech32PrefixValAddr: "munvaloper",
    bech32PrefixValPub: "munvaloperpub",
    bech32PrefixConsAddr: "munvalcons",
    bech32PrefixConsPub: "munvalconspub"
  },
  chainName: "mun",
  feeCurrencies: [
    {
      coinDenom: "mun",
      coinMinimalDenom: "umun",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "mun",
    coinMinimalDenom: "umun",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const mythos = defineChainInfo({
  chainId: "mythos_7001-1",
  currencies: [
    {
      coinDenom: "MYT",
      coinMinimalDenom: "aMYT",
      coinDecimals: 18
    }
  ],
  rest: "https://mythos.provable.dev/rest/",
  rpc: "https://mythos-rpc.provable.dev:443/",
  bech32Config: {
    bech32PrefixAccAddr: "mythos",
    bech32PrefixAccPub: "mythospub",
    bech32PrefixValAddr: "mythosvaloper",
    bech32PrefixValPub: "mythosvaloperpub",
    bech32PrefixConsAddr: "mythosvalcons",
    bech32PrefixConsPub: "mythosvalconspub"
  },
  chainName: "mythos",
  feeCurrencies: [
    {
      coinDenom: "MYT",
      coinMinimalDenom: "aMYT",
      coinDecimals: 18,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "MYT",
    coinMinimalDenom: "aMYT",
    coinDecimals: 18
  },
  bip44: {
    coinType: 60
  }
});
export const neutaro = defineChainInfo({
  chainId: "Neutaro-1",
  currencies: [
    {
      coinDenom: "neutaro",
      coinMinimalDenom: "uneutaro",
      coinDecimals: 6,
      coinGeckoId: "neutaro"
    }
  ],
  rest: "https://api2.neutaro.tech:443",
  rpc: "https://rpc2.neutaro.tech:443",
  bech32Config: {
    bech32PrefixAccAddr: "neutaro",
    bech32PrefixAccPub: "neutaropub",
    bech32PrefixValAddr: "neutarovaloper",
    bech32PrefixValPub: "neutarovaloperpub",
    bech32PrefixConsAddr: "neutarovalcons",
    bech32PrefixConsPub: "neutarovalconspub"
  },
  chainName: "neutaro",
  feeCurrencies: [
    {
      coinDenom: "neutaro",
      coinMinimalDenom: "uneutaro",
      coinDecimals: 6,
      coinGeckoId: "neutaro"
    }
  ],
  stakeCurrency: {
    coinDenom: "neutaro",
    coinMinimalDenom: "uneutaro",
    coinDecimals: 6,
    coinGeckoId: "neutaro"
  },
  bip44: {
    coinType: 118
  }
});
export const neutron = defineChainInfo({
  chainId: "neutron-1",
  currencies: [
    {
      coinDenom: "ntrn",
      coinMinimalDenom: "untrn",
      coinDecimals: 6,
      coinGeckoId: "neutron-3"
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
      coinDecimals: 6
    },
    {
      coinDenom: "axlusdc",
      coinMinimalDenom: "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349",
      coinDecimals: 6
    },
    {
      coinDenom: "tia",
      coinMinimalDenom: "ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7",
      coinDecimals: 6
    },
    {
      coinDenom: "ASTROPEPE",
      coinMinimalDenom: "factory/neutron14henrqx9y328fjrdvz6l6d92r0t7g5hk86q5nd/uastropepe",
      coinDecimals: 6
    },
    {
      coinDenom: "wstETH",
      coinMinimalDenom: "factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH",
      coinDecimals: 18
    },
    {
      coinDenom: "sat",
      coinMinimalDenom: "ibc/DDC3C60EE82BF544F1A0C6A983FF500EF1C14DE20071A5E1E7C0FB470E36E920",
      coinDecimals: 6
    },
    {
      coinDenom: "dydx",
      coinMinimalDenom: "ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130",
      coinDecimals: 18
    },
    {
      coinDenom: "newt",
      coinMinimalDenom: "factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt",
      coinDecimals: 6,
      coinGeckoId: "newt"
    },
    {
      coinDenom: "astro",
      coinMinimalDenom: "factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro",
      coinDecimals: 6,
      coinGeckoId: "astroport-fi"
    },
    {
      coinDenom: "xASTRO",
      coinMinimalDenom: "factory/neutron1zlf3hutsa4qnmue53lz2tfxrutp8y2e3rj4nkghg3rupgl4mqy8s5jgxsn/xASTRO",
      coinDecimals: 6
    },
    {
      coinDenom: "astro.cw20",
      coinMinimalDenom: "ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A",
      coinDecimals: 6
    },
    {
      coinDenom: "corgi",
      coinMinimalDenom: "factory/neutron1tklm6cvr2wxg8k65t8gh5ewslnzdfd5fsk0w3f/corgi",
      coinDecimals: 6
    },
    {
      coinDenom: "circus",
      coinMinimalDenom: "factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus",
      coinDecimals: 6
    },
    {
      coinDenom: "jimmy",
      coinMinimalDenom: "factory/neutron108x7vp9zv22d6wxrs9as8dshd3pd5vsga463yd/JIMMY",
      coinDecimals: 6
    },
    {
      coinDenom: "bad",
      coinMinimalDenom: "factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad",
      coinDecimals: 6
    },
    {
      coinDenom: "bitcosmos",
      coinMinimalDenom: "neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj",
      coinDecimals: 6
    },
    {
      coinDenom: "wtf",
      coinMinimalDenom: "neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf",
      coinDecimals: 6
    },
    {
      coinDenom: "nls",
      coinMinimalDenom: "ibc/6C9E6701AC217C0FC7D74B0F7A6265B9B4E3C3CDA6E80AADE5F950A8F52F9972",
      coinDecimals: 6
    },
    {
      coinDenom: "goddard",
      coinMinimalDenom: "factory/neutron1t5qrjtyryh8gzt800qr5vylhh2f8cmx4wmz9mc/ugoddard",
      coinDecimals: 6
    },
    {
      coinDenom: "apollo",
      coinMinimalDenom: "factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO",
      coinDecimals: 6
    },
    {
      coinDenom: "newtroll",
      coinMinimalDenom: "factory/neutron1ume2n42r5j0660gegrr28fzdze7aqf7r5cd9y6/newtroll",
      coinDecimals: 6
    },
    {
      coinDenom: "retro",
      coinMinimalDenom: "factory/neutron1t24nc7whl77relnu3taxyg3p66pjyuk82png2y/uretro",
      coinDecimals: 6
    },
    {
      coinDenom: "goddard",
      coinMinimalDenom: "factory/neutron1yqj9vcc0y73xfxjzegaj4v8q0zefevnlpuh4rj/GODDARD",
      coinDecimals: 6
    },
    {
      coinDenom: "WOSMO",
      coinMinimalDenom: "ibc/7DA39F5140741177846FCF3CFAB14450EE7F57B7794E5A94BEF73825D3741958",
      coinDecimals: 6
    },
    {
      coinDenom: "boy",
      coinMinimalDenom: "neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv",
      coinDecimals: 6
    },
    {
      coinDenom: "BADKID",
      coinMinimalDenom: "ibc/9F8417FBA11E5E01F7F85DDD48C400EB746E95084C11706041663845B4A700A8",
      coinDecimals: 6
    },
    {
      coinDenom: "cartel",
      coinMinimalDenom: "factory/neutron1w0pz4mjw7n96kkragj8etgfgakg5vw9lzg77wq/cartel",
      coinDecimals: 6
    },
    {
      coinDenom: "ATOM1KLFG",
      coinMinimalDenom: "factory/neutron13lkh47msw28yynspc5rnmty3yktk43wc3dsv0l/ATOM1KLFG",
      coinDecimals: 6
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/B559A80D62249C8AA07A380E2A2BEA6E5CA9A6F079C912C3A9E9B494105E4F81",
      coinDecimals: 6,
      coinGeckoId: "usd-coin"
    },
    {
      coinDenom: "WEIRD",
      coinMinimalDenom: "factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/WEIRD",
      coinDecimals: 6
    },
    {
      coinDenom: "takumi",
      coinMinimalDenom: "factory/neutron19tynwawkm2rgefqxy7weupu4hdamyhg890zep2/TAKUMI",
      coinDecimals: 6
    },
    {
      coinDenom: "NBZ",
      coinMinimalDenom: "factory/neutron1a6ydq8urdj0gkvjw9e9e5y9r5ce2qegm9m4xufpt96kcm60kmuass0mqq4/nbz",
      coinDecimals: 6
    },
    {
      coinDenom: "MARS",
      coinMinimalDenom: "factory/neutron1ndu2wvkrxtane8se2tr48gv7nsm46y5gcqjhux/MARS",
      coinDecimals: 6,
      coinGeckoId: "mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3"
    },
    {
      coinDenom: "dATOM",
      coinMinimalDenom: "factory/neutron1k6hr0f83e7un2wjf29cspk7j69jrnskk65k3ek2nj9dztrlzpj6q00rtsa/udatom",
      coinDecimals: 6,
      coinGeckoId: "drop-staked-atom"
    }
  ],
  rest: "https://api.novel.remedy.tm.p2p.org",
  rpc: "https://rpc.novel.remedy.tm.p2p.org",
  bech32Config: {
    bech32PrefixAccAddr: "neutron",
    bech32PrefixAccPub: "neutronpub",
    bech32PrefixValAddr: "neutronvaloper",
    bech32PrefixValPub: "neutronvaloperpub",
    bech32PrefixConsAddr: "neutronvalcons",
    bech32PrefixConsPub: "neutronvalconspub"
  },
  chainName: "neutron",
  feeCurrencies: [
    {
      coinDenom: "ntrn",
      coinMinimalDenom: "untrn",
      coinDecimals: 6,
      coinGeckoId: "neutron-3",
      gasPriceStep: {
        low: 0.0053,
        average: 0.0053,
        high: 0.0053
      }
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0008,
        average: 0.0008,
        high: 0.0008
      }
    },
    {
      coinDenom: "axlusdc",
      coinMinimalDenom: "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.008,
        average: 0.008,
        high: 0.008
      }
    },
    {
      coinDenom: "wstETH",
      coinMinimalDenom: "factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 2903231.6597,
        average: 2903231.6597,
        high: 2903231.6597
      }
    },
    {
      coinDenom: "dydx",
      coinMinimalDenom: "ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 2564102564.1026,
        average: 2564102564.1026,
        high: 2564102564.1026
      }
    },
    {
      coinDenom: "tia",
      coinMinimalDenom: "ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0004,
        average: 0.0004,
        high: 0.0004
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "ntrn",
    coinMinimalDenom: "untrn",
    coinDecimals: 6,
    coinGeckoId: "neutron-3"
  },
  bip44: {
    coinType: 118
  }
});
export const nibiru = defineChainInfo({
  chainId: "cataclysm-1",
  currencies: [
    {
      coinDenom: "attonibi",
      coinMinimalDenom: "unibi",
      coinDecimals: 18,
      coinGeckoId: "nibiru"
    },
    {
      coinDenom: "tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek",
      coinMinimalDenom: "tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek",
      coinDecimals: 0
    },
    {
      coinDenom: "tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate",
      coinMinimalDenom: "tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate",
      coinDecimals: 0
    },
    {
      coinDenom: "tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP",
      coinMinimalDenom: "tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP",
      coinDecimals: 0
    }
  ],
  rest: "https://lcd.nibiru.fi",
  rpc: "https://rpc.nibiru.fi",
  bech32Config: {
    bech32PrefixAccAddr: "nibi",
    bech32PrefixAccPub: "nibipub",
    bech32PrefixValAddr: "nibivaloper",
    bech32PrefixValPub: "nibivaloperpub",
    bech32PrefixConsAddr: "nibivalcons",
    bech32PrefixConsPub: "nibivalconspub"
  },
  chainName: "nibiru",
  feeCurrencies: [
    {
      coinDenom: "attonibi",
      coinMinimalDenom: "unibi",
      coinDecimals: 6,
      coinGeckoId: "nibiru",
      gasPriceStep: {
        low: 0.025,
        average: 0.05,
        high: 0.1
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "attonibi",
    coinMinimalDenom: "unibi",
    coinDecimals: 18,
    coinGeckoId: "nibiru"
  },
  bip44: {
    coinType: 118
  }
});
export const nim = defineChainInfo({
  chainId: "nim_1122-1",
  currencies: [
    {
      coinDenom: "nim",
      coinMinimalDenom: "anim",
      coinDecimals: 18,
      coinGeckoId: "nim-network"
    }
  ],
  rest: "https://nim-mainnet-rest.public.blastapi.io",
  rpc: "https://nim-mainnet-tendermint.public.blastapi.io",
  bech32Config: {
    bech32PrefixAccAddr: "nim",
    bech32PrefixAccPub: "nimpub",
    bech32PrefixValAddr: "nimvaloper",
    bech32PrefixValPub: "nimvaloperpub",
    bech32PrefixConsAddr: "nimvalcons",
    bech32PrefixConsPub: "nimvalconspub"
  },
  chainName: "nim",
  feeCurrencies: [
    {
      coinDenom: "nim",
      coinMinimalDenom: "anim",
      coinDecimals: 18,
      coinGeckoId: "nim-network",
      gasPriceStep: {
        low: 20000000000,
        average: 20000000000,
        high: 20000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "nim",
    coinMinimalDenom: "anim",
    coinDecimals: 18,
    coinGeckoId: "nim-network"
  },
  bip44: {
    coinType: 60
  }
});
export const noble = defineChainInfo({
  chainId: "noble-1",
  currencies: [
    {
      coinDenom: "stake",
      coinMinimalDenom: "ustake",
      coinDecimals: 6
    },
    {
      coinDenom: "frienzies",
      coinMinimalDenom: "ufrienzies",
      coinDecimals: 6
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0",
      coinDecimals: 6
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "uusdc",
      coinDecimals: 6,
      coinGeckoId: "usd-coin"
    },
    {
      coinDenom: "usdy",
      coinMinimalDenom: "ausdy",
      coinDecimals: 18,
      coinGeckoId: "ondo-us-dollar-yield"
    },
    {
      coinDenom: "eure",
      coinMinimalDenom: "ueure",
      coinDecimals: 6
    }
  ],
  rest: "https://noble-api.polkachu.com",
  rpc: "https://noble-rpc.polkachu.com",
  bech32Config: {
    bech32PrefixAccAddr: "noble",
    bech32PrefixAccPub: "noblepub",
    bech32PrefixValAddr: "noblevaloper",
    bech32PrefixValPub: "noblevaloperpub",
    bech32PrefixConsAddr: "noblevalcons",
    bech32PrefixConsPub: "noblevalconspub"
  },
  chainName: "noble",
  feeCurrencies: [
    {
      coinDenom: "usdc",
      coinMinimalDenom: "uusdc",
      coinDecimals: 6,
      coinGeckoId: "usd-coin",
      gasPriceStep: {
        low: 0.1,
        average: 0.1,
        high: 0.2
      }
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.01,
        high: 0.02
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "stake",
    coinMinimalDenom: "ustake",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const nois = defineChainInfo({
  chainId: "nois-1",
  currencies: [
    {
      coinDenom: "nois",
      coinMinimalDenom: "unois",
      coinDecimals: 6
    }
  ],
  rest: "https://m-nois.api.utsa.tech",
  rpc: "https://nois-rpc.nysa.network",
  bech32Config: {
    bech32PrefixAccAddr: "nois",
    bech32PrefixAccPub: "noispub",
    bech32PrefixValAddr: "noisvaloper",
    bech32PrefixValPub: "noisvaloperpub",
    bech32PrefixConsAddr: "noisvalcons",
    bech32PrefixConsPub: "noisvalconspub"
  },
  chainName: "nois",
  feeCurrencies: [
    {
      coinDenom: "nois",
      coinMinimalDenom: "unois",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.05,
        average: 0.05,
        high: 0.1
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "nois",
    coinMinimalDenom: "unois",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const nolus = defineChainInfo({
  chainId: "pirin-1",
  currencies: [
    {
      coinDenom: "nls",
      coinMinimalDenom: "unls",
      coinDecimals: 6,
      coinGeckoId: "nolus"
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/7FBDBEEEBA9C50C4BCDF7BF438EAB99E64360833D240B32655C96E319559E911",
      coinDecimals: 6
    },
    {
      coinDenom: "osmo",
      coinMinimalDenom: "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
      coinDecimals: 6
    },
    {
      coinDenom: "stosmo",
      coinMinimalDenom: "ibc/AF5559D128329B6C753F15481BEC26E533B847A471074703FA4903E7E6F61BA1",
      coinDecimals: 6
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/6CDD4663F2F09CD62285E2D45891FC149A3568E316CE3EBBE201A71A78A69388",
      coinDecimals: 6
    },
    {
      coinDenom: "statom",
      coinMinimalDenom: "ibc/FCFF8B19C61677F3B78E2A5AE3B4A34A8D23858D16905F253B8438B3AFD07FF8",
      coinDecimals: 6
    },
    {
      coinDenom: "weth",
      coinMinimalDenom: "ibc/A7C4A3FB19E88ABE60416125F9189DA680800F4CDD14E3C10C874E022BEFF04C",
      coinDecimals: 18
    },
    {
      coinDenom: "wbtc",
      coinMinimalDenom: "ibc/84E70F4A34FB2DE135FD3A04FDDF53B7DA4206080AA785C8BAB7F8B26299A221",
      coinDecimals: 8
    },
    {
      coinDenom: "akt",
      coinMinimalDenom: "ibc/ADC63C00000CA75F909D2BE3ACB5A9980BED3A73B92746E0FCE6C67414055459",
      coinDecimals: 6
    },
    {
      coinDenom: "axl",
      coinMinimalDenom: "ibc/1B03A71B8E6F6EF424411DC9326A8E0D25D096E4D2616425CFAF2AF06F0FE717",
      coinDecimals: 6
    },
    {
      coinDenom: "juno",
      coinMinimalDenom: "ibc/4F3E83AB35529435E4BFEA001F5D935E7250133347C4E1010A9C77149EF0394C",
      coinDecimals: 6
    },
    {
      coinDenom: "evmos",
      coinMinimalDenom: "ibc/A59A9C955F1AB8B76671B00C1A0482C64A6590352944BB5880E5122358F7E1CE",
      coinDecimals: 18
    },
    {
      coinDenom: "stk/atom",
      coinMinimalDenom: "ibc/DAAD372DB7DD45BBCFA4DDD40CA9793E9D265D1530083AB41A8A0C53C3EBE865",
      coinDecimals: 6
    },
    {
      coinDenom: "scrt",
      coinMinimalDenom: "ibc/EA00FFF0335B07B5CD1530B7EB3D2C710620AE5B168C71AFF7B50532D690E107",
      coinDecimals: 6
    },
    {
      coinDenom: "cro",
      coinMinimalDenom: "ibc/E1BCC0F7B932E654B1A930F72B76C0678D55095387E2A4D8F00E941A8F82EE48",
      coinDecimals: 8
    },
    {
      coinDenom: "stars",
      coinMinimalDenom: "ibc/11E3CF372E065ACB1A39C531A3C7E7E03F60B5D0653AD2139D31128ACD2772B5",
      coinDecimals: 6
    },
    {
      coinDenom: "tia",
      coinMinimalDenom: "ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5",
      coinDecimals: 6
    },
    {
      coinDenom: "strd",
      coinMinimalDenom: "ibc/04CA9067228BB51F1C39A506DA00DF07E1496D8308DD21E8EF66AD6169FA722B",
      coinDecimals: 6
    },
    {
      coinDenom: "cudos",
      coinMinimalDenom: "ibc/BB9810E7FE8836311126F15BE0B20E7463189751840F8C3FEF3AC8F87D8AB7C8",
      coinDecimals: 18
    },
    {
      coinDenom: "ntrn",
      coinMinimalDenom: "ibc/3D6BC6E049CAEB905AC97031A42800588C58FB471EBDC7A3530FFCD0C3DC9E09",
      coinDecimals: 6
    },
    {
      coinDenom: "dydx",
      coinMinimalDenom: "ibc/6DF8CF5C976851D152E2C7270B0AB25C4F9D64C0A46513A68D6CBB2662A98DF4",
      coinDecimals: 18
    },
    {
      coinDenom: "dATOM",
      coinMinimalDenom: "ibc/EB08474FFC49B6BB2F03F7D9B08697138F4DA53347CA1AB718C8BCFBB58C1B2B",
      coinDecimals: 6
    }
  ],
  rest: "https://pirin-cl.nolus.network:1317",
  rpc: "https://pirin-cl.nolus.network:26657",
  bech32Config: {
    bech32PrefixAccAddr: "nolus",
    bech32PrefixAccPub: "noluspub",
    bech32PrefixValAddr: "nolusvaloper",
    bech32PrefixValPub: "nolusvaloperpub",
    bech32PrefixConsAddr: "nolusvalcons",
    bech32PrefixConsPub: "nolusvalconspub"
  },
  chainName: "nolus",
  feeCurrencies: [
    {
      coinDenom: "nls",
      coinMinimalDenom: "unls",
      coinDecimals: 6,
      coinGeckoId: "nolus",
      gasPriceStep: {
        low: 0.025,
        average: 0.025,
        high: 0.05
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "nls",
    coinMinimalDenom: "unls",
    coinDecimals: 6,
    coinGeckoId: "nolus"
  },
  bip44: {
    coinType: 118
  }
});
export const nomic = defineChainInfo({
  chainId: "nomic-stakenet-3",
  currencies: [
    {
      coinDenom: "nom",
      coinMinimalDenom: "unom",
      coinDecimals: 6
    },
    {
      coinDenom: "nbtc",
      coinMinimalDenom: "usat",
      coinDecimals: 14
    }
  ],
  rest: "https://app.nomic.io:8443",
  rpc: "https://stakenet-rpc.nomic.io:2096",
  bech32Config: {
    bech32PrefixAccAddr: "nomic",
    bech32PrefixAccPub: "nomicpub",
    bech32PrefixValAddr: "nomicvaloper",
    bech32PrefixValPub: "nomicvaloperpub",
    bech32PrefixConsAddr: "nomicvalcons",
    bech32PrefixConsPub: "nomicvalconspub"
  },
  chainName: "nomic",
  feeCurrencies: [
    {
      coinDenom: "nom",
      coinMinimalDenom: "unom",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "nom",
    coinMinimalDenom: "unom",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const nyx = defineChainInfo({
  chainId: "nyx",
  currencies: [
    {
      coinDenom: "nyx",
      coinMinimalDenom: "unyx",
      coinDecimals: 6
    },
    {
      coinDenom: "nym",
      coinMinimalDenom: "unym",
      coinDecimals: 6,
      coinGeckoId: "nym"
    }
  ],
  rest: "https://nym-api.polkachu.com/",
  rpc: "https://rpc.nymtech.net/",
  bech32Config: {
    bech32PrefixAccAddr: "n",
    bech32PrefixAccPub: "npub",
    bech32PrefixValAddr: "nvaloper",
    bech32PrefixValPub: "nvaloperpub",
    bech32PrefixConsAddr: "nvalcons",
    bech32PrefixConsPub: "nvalconspub"
  },
  chainName: "nyx",
  feeCurrencies: [
    {
      coinDenom: "nym",
      coinMinimalDenom: "unym",
      coinDecimals: 6,
      coinGeckoId: "nym",
      gasPriceStep: {
        low: 0.025,
        average: 0.025,
        high: 0.04
      }
    },
    {
      coinDenom: "nyx",
      coinMinimalDenom: "unyx",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.025,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "nyx",
    coinMinimalDenom: "unyx",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const odin = defineChainInfo({
  chainId: "odin-mainnet-freya",
  currencies: [
    {
      coinDenom: "odin",
      coinMinimalDenom: "loki",
      coinDecimals: 6,
      coinGeckoId: "odin-protocol"
    },
    {
      coinDenom: "geo",
      coinMinimalDenom: "mGeo",
      coinDecimals: 6
    },
    {
      coinDenom: "doki",
      coinMinimalDenom: "udoki",
      coinDecimals: 6,
      coinGeckoId: "doki"
    },
    {
      coinDenom: "myrk",
      coinMinimalDenom: "umyrk",
      coinDecimals: 6
    },
    {
      coinDenom: "O9W",
      coinMinimalDenom: "mO9W",
      coinDecimals: 6
    }
  ],
  rest: "https://api.odinprotocol.io",
  rpc: "https://rpc.odinprotocol.io",
  bech32Config: {
    bech32PrefixAccAddr: "odin",
    bech32PrefixAccPub: "odinpub",
    bech32PrefixValAddr: "odinvaloper",
    bech32PrefixValPub: "odinvaloperpub",
    bech32PrefixConsAddr: "odinvalcons",
    bech32PrefixConsPub: "odinvalconspub"
  },
  chainName: "odin",
  feeCurrencies: [
    {
      coinDenom: "odin",
      coinMinimalDenom: "loki",
      coinDecimals: 6,
      coinGeckoId: "odin-protocol",
      gasPriceStep: {
        low: 0.025,
        average: 0.05,
        high: 0.06
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "odin",
    coinMinimalDenom: "loki",
    coinDecimals: 6,
    coinGeckoId: "odin-protocol"
  },
  bip44: {
    coinType: 118
  }
});
export const odin1 = defineChainInfo({
  chainId: "odin-mainnet-freya",
  currencies: [
    {
      coinDenom: "odin",
      coinMinimalDenom: "loki",
      coinDecimals: 6,
      coinGeckoId: "odin-protocol"
    },
    {
      coinDenom: "geo",
      coinMinimalDenom: "mGeo",
      coinDecimals: 6
    },
    {
      coinDenom: "O9W",
      coinMinimalDenom: "mO9W",
      coinDecimals: 6
    }
  ],
  rest: "http://34.79.179.216:1317/",
  rpc: "http://34.79.179.216:26657",
  bech32Config: {
    bech32PrefixAccAddr: "odin",
    bech32PrefixAccPub: "odinpub",
    bech32PrefixValAddr: "odinvaloper",
    bech32PrefixValPub: "odinvaloperpub",
    bech32PrefixConsAddr: "odinvalcons",
    bech32PrefixConsPub: "odinvalconspub"
  },
  chainName: "odin",
  feeCurrencies: [
    {
      coinDenom: "odin",
      coinMinimalDenom: "loki",
      coinDecimals: 6,
      coinGeckoId: "odin-protocol",
      gasPriceStep: {
        low: 0.025,
        average: 0.05,
        high: 0.06
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "odin",
    coinMinimalDenom: "loki",
    coinDecimals: 6,
    coinGeckoId: "odin-protocol"
  },
  bip44: {
    coinType: 118
  }
});
export const omniflixhub = defineChainInfo({
  chainId: "omniflixhub-1",
  currencies: [
    {
      coinDenom: "flix",
      coinMinimalDenom: "uflix",
      coinDecimals: 6,
      coinGeckoId: "omniflix-network"
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",
      coinDecimals: 6
    },
    {
      coinDenom: "osmo",
      coinMinimalDenom: "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
      coinDecimals: 6
    },
    {
      coinDenom: "ist",
      coinMinimalDenom: "ibc/43D3010F4CA111744AC8B68E460BC95E565C32928A267FA2B30609C04C10B274",
      coinDecimals: 6
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/AC4C84DD7D3732CFA95A420247FAD5179BE4F42E5635E2BF0A62C67E2E2FA4A9",
      coinDecimals: 6
    },
    {
      coinDenom: "akt",
      coinMinimalDenom: "ibc/6901B45BC2C5418ED8B3C3C9F9A641A3DAF2D234230AFA9DF32D8F9F9434721C",
      coinDecimals: 6
    },
    {
      coinDenom: "baddog",
      coinMinimalDenom: "ibc/9F28238BDB687A86681B30764BA1437E079C3565D04FDD7862055A83F7E5C630",
      coinDecimals: 6
    }
  ],
  rest: "https://api.omniflix.nodestake.top",
  rpc: "https://omniflix-rpc.kingnodes.com",
  bech32Config: {
    bech32PrefixAccAddr: "omniflix",
    bech32PrefixAccPub: "omniflixpub",
    bech32PrefixValAddr: "omniflixvaloper",
    bech32PrefixValPub: "omniflixvaloperpub",
    bech32PrefixConsAddr: "omniflixvalcons",
    bech32PrefixConsPub: "omniflixvalconspub"
  },
  chainName: "omniflixhub",
  feeCurrencies: [
    {
      coinDenom: "flix",
      coinMinimalDenom: "uflix",
      coinDecimals: 6,
      coinGeckoId: "omniflix-network",
      gasPriceStep: {
        low: 0.001,
        average: 0.0025,
        high: 0.025
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "flix",
    coinMinimalDenom: "uflix",
    coinDecimals: 6,
    coinGeckoId: "omniflix-network"
  },
  bip44: {
    coinType: 118
  }
});
export const onex = defineChainInfo({
  chainId: "onex-mainnet-1",
  currencies: [
    {
      coinDenom: "onex",
      coinMinimalDenom: "aonex",
      coinDecimals: 18
    }
  ],
  rest: "https://rest.mainnet.onex.onomy.io",
  rpc: "https://rpc.mainnet.onex.onomy.io",
  bech32Config: {
    bech32PrefixAccAddr: "onomy",
    bech32PrefixAccPub: "onomypub",
    bech32PrefixValAddr: "onomyvaloper",
    bech32PrefixValPub: "onomyvaloperpub",
    bech32PrefixConsAddr: "onomyvalcons",
    bech32PrefixConsPub: "onomyvalconspub"
  },
  chainName: "onex",
  feeCurrencies: [
    {
      coinDenom: "onex",
      coinMinimalDenom: "aonex",
      coinDecimals: 18,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "onex",
    coinMinimalDenom: "aonex",
    coinDecimals: 18
  },
  bip44: {
    coinType: 118
  }
});
export const onomy = defineChainInfo({
  chainId: "onomy-mainnet-1",
  currencies: [
    {
      coinDenom: "nom",
      coinMinimalDenom: "anom",
      coinDecimals: 18,
      coinGeckoId: "onomy-protocol"
    }
  ],
  rest: "https://rest-mainnet.onomy.io",
  rpc: "https://rpc-mainnet.onomy.io",
  bech32Config: {
    bech32PrefixAccAddr: "onomy",
    bech32PrefixAccPub: "onomypub",
    bech32PrefixValAddr: "onomyvaloper",
    bech32PrefixValPub: "onomyvaloperpub",
    bech32PrefixConsAddr: "onomyvalcons",
    bech32PrefixConsPub: "onomyvalconspub"
  },
  chainName: "onomy",
  feeCurrencies: [
    {
      coinDenom: "nom",
      coinMinimalDenom: "anom",
      coinDecimals: 18,
      coinGeckoId: "onomy-protocol"
    }
  ],
  stakeCurrency: {
    coinDenom: "nom",
    coinMinimalDenom: "anom",
    coinDecimals: 18,
    coinGeckoId: "onomy-protocol"
  },
  bip44: {
    coinType: 118
  }
});
export const oraichain = defineChainInfo({
  chainId: "Oraichain",
  currencies: [
    {
      coinDenom: "ORAI",
      coinMinimalDenom: "orai",
      coinDecimals: 6,
      coinGeckoId: "oraichain-token"
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/A2E2EEC9057A4A1C2C0A6A4C78B0239118DF5F278830F50B4A6BDD7A66506B78",
      coinDecimals: 6
    },
    {
      coinDenom: "osmo",
      coinMinimalDenom: "ibc/9C4DCD21B48231D0BC2AC3D1B74A864746B37E4292694C93C617324250D002FC",
      coinDecimals: 6
    },
    {
      coinDenom: "inj",
      coinMinimalDenom: "ibc/49D820DFDE9F885D7081725A58202ABA2F465CAEE4AFBC683DFB79A8E013E83E",
      coinDecimals: 6
    },
    {
      coinDenom: "inj",
      coinMinimalDenom: "cw20:orai19rtmkk6sn4tppvjmp5d5zj6gfsdykrl5rw2euu5gwur3luheuuusesqn49",
      coinDecimals: 6
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "cw20:orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh",
      coinDecimals: 6
    },
    {
      coinDenom: "airi",
      coinMinimalDenom: "cw20:orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg",
      coinDecimals: 6,
      coinGeckoId: "airight"
    },
    {
      coinDenom: "oraix",
      coinMinimalDenom: "cw20:orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge",
      coinDecimals: 6
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "cw20:orai15un8msx3n5zf9ahlxmfeqd2kwa5wm0nrpxer304m9nd5q6qq0g6sku5pdd",
      coinDecimals: 6
    },
    {
      coinDenom: "kwt",
      coinMinimalDenom: "cw20:orai1nd4r053e3kgedgld2ymen8l9yrw8xpjyaal7j5",
      coinDecimals: 6
    },
    {
      coinDenom: "milky",
      coinMinimalDenom: "cw20:orai1gzvndtzceqwfymu2kqhta2jn6gmzxvzqwdgvjw",
      coinDecimals: 6
    },
    {
      coinDenom: "scorai",
      coinMinimalDenom: "cw20:orai1065qe48g7aemju045aeyprflytemx7kecxkf5m7u5h5mphd0qlcs47pclp",
      coinDecimals: 6
    },
    {
      coinDenom: "wtrx",
      coinMinimalDenom: "cw20:orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0",
      coinDecimals: 6
    },
    {
      coinDenom: "scatom",
      coinMinimalDenom: "cw20:orai19q4qak2g3cj2xc2y3060t0quzn3gfhzx08rjlrdd3vqxhjtat0cq668phq",
      coinDecimals: 6
    },
    {
      coinDenom: "xoch",
      coinMinimalDenom: "cw20:orai1lplapmgqnelqn253stz6kmvm3ulgdaytn89a8mz9y85xq8wd684s6xl3lt",
      coinDecimals: 6
    },
    {
      coinDenom: "weth",
      coinMinimalDenom: "cw20:orai1dqa52a7hxxuv8ghe7q5v0s36ra0cthea960q2cukznleqhk0wpnshfegez",
      coinDecimals: 6
    },
    {
      coinDenom: "btc",
      coinMinimalDenom: "cw20:orai10g6frpysmdgw5tdqke47als6f97aqmr8s3cljsvjce4n5enjftcqtamzsd",
      coinDecimals: 6
    },
    {
      coinDenom: "och",
      coinMinimalDenom: "cw20:orai1hn8w33cqvysun2aujk5sv33tku4pgcxhhnsxmvnkfvdxagcx0p8qa4l98q",
      coinDecimals: 6
    },
    {
      coinDenom: "ton",
      coinMinimalDenom: "factory/orai1wuvhex9xqs3r539mvc6mtm7n20fcj3qr2m0y9khx6n5vtlngfzes3k0rq9/ton",
      coinDecimals: 9
    }
  ],
  rest: "http://lcd.orai.io",
  rpc: "https://rpc.orai.io",
  bech32Config: {
    bech32PrefixAccAddr: "orai",
    bech32PrefixAccPub: "oraipub",
    bech32PrefixValAddr: "oraivaloper",
    bech32PrefixValPub: "oraivaloperpub",
    bech32PrefixConsAddr: "oraivalcons",
    bech32PrefixConsPub: "oraivalconspub"
  },
  chainName: "oraichain",
  feeCurrencies: [
    {
      coinDenom: "ORAI",
      coinMinimalDenom: "orai",
      coinDecimals: 6,
      coinGeckoId: "oraichain-token",
      gasPriceStep: {
        low: 0.003,
        average: 0.005,
        high: 0.007
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "ORAI",
    coinMinimalDenom: "orai",
    coinDecimals: 6,
    coinGeckoId: "oraichain-token"
  },
  bip44: {
    coinType: 118
  }
});
export const osmosis = defineChainInfo({
  chainId: "osmosis-1",
  currencies: [
    {
      coinDenom: "osmo",
      coinMinimalDenom: "uosmo",
      coinDecimals: 6,
      coinGeckoId: "osmosis"
    },
    {
      coinDenom: "ion",
      coinMinimalDenom: "uion",
      coinDecimals: 6,
      coinGeckoId: "ion"
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
      coinDecimals: 6
    },
    {
      coinDenom: "weth",
      coinMinimalDenom: "ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5",
      coinDecimals: 18
    },
    {
      coinDenom: "wbtc",
      coinMinimalDenom: "ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F",
      coinDecimals: 8
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4",
      coinDecimals: 6
    },
    {
      coinDenom: "dai",
      coinMinimalDenom: "ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7",
      coinDecimals: 18
    },
    {
      coinDenom: "busd",
      coinMinimalDenom: "ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D",
      coinDecimals: 18
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
      coinDecimals: 6
    },
    {
      coinDenom: "cro",
      coinMinimalDenom: "ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1",
      coinDecimals: 8
    },
    {
      coinDenom: "wbnb",
      coinMinimalDenom: "ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D",
      coinDecimals: 18
    },
    {
      coinDenom: "wmatic",
      coinMinimalDenom: "ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB",
      coinDecimals: 18
    },
    {
      coinDenom: "avax",
      coinMinimalDenom: "ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373",
      coinDecimals: 18
    },
    {
      coinDenom: "luna",
      coinMinimalDenom: "ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0",
      coinDecimals: 6
    },
    {
      coinDenom: "juno",
      coinMinimalDenom: "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
      coinDecimals: 6
    },
    {
      coinDenom: "dot",
      coinMinimalDenom: "ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7",
      coinDecimals: 10
    },
    {
      coinDenom: "evmos",
      coinMinimalDenom: "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A",
      coinDecimals: 18
    },
    {
      coinDenom: "kava",
      coinMinimalDenom: "ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205",
      coinDecimals: 6
    },
    {
      coinDenom: "scrt",
      coinMinimalDenom: "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
      coinDecimals: 6
    },
    {
      coinDenom: "ust",
      coinMinimalDenom: "ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC",
      coinDecimals: 6
    },
    {
      coinDenom: "stars",
      coinMinimalDenom: "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
      coinDecimals: 6
    },
    {
      coinDenom: "huahua",
      coinMinimalDenom: "ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228",
      coinDecimals: 6
    },
    {
      coinDenom: "xprt",
      coinMinimalDenom: "ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293",
      coinDecimals: 6
    },
    {
      coinDenom: "pstake",
      coinMinimalDenom: "ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961",
      coinDecimals: 18
    },
    {
      coinDenom: "akt",
      coinMinimalDenom: "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4",
      coinDecimals: 6
    },
    {
      coinDenom: "regen",
      coinMinimalDenom: "ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076",
      coinDecimals: 6
    },
    {
      coinDenom: "dvpn",
      coinMinimalDenom: "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84",
      coinDecimals: 6
    },
    {
      coinDenom: "iris",
      coinMinimalDenom: "ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0",
      coinDecimals: 6
    },
    {
      coinDenom: "iov",
      coinMinimalDenom: "ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC",
      coinDecimals: 6
    },
    {
      coinDenom: "ngm",
      coinMinimalDenom: "ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59",
      coinDecimals: 6
    },
    {
      coinDenom: "eur",
      coinMinimalDenom: "ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F",
      coinDecimals: 6
    },
    {
      coinDenom: "like",
      coinMinimalDenom: "ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525",
      coinDecimals: 9
    },
    {
      coinDenom: "ixo",
      coinMinimalDenom: "ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B",
      coinDecimals: 6
    },
    {
      coinDenom: "bcna",
      coinMinimalDenom: "ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5",
      coinDecimals: 6
    },
    {
      coinDenom: "btsg",
      coinMinimalDenom: "ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452",
      coinDecimals: 6
    },
    {
      coinDenom: "xki",
      coinMinimalDenom: "ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E",
      coinDecimals: 6
    },
    {
      coinDenom: "med",
      coinMinimalDenom: "ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB",
      coinDecimals: 6
    },
    {
      coinDenom: "ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4",
      coinMinimalDenom: "ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4",
      coinDecimals: 0
    },
    {
      coinDenom: "cmdx",
      coinMinimalDenom: "ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0",
      coinDecimals: 6
    },
    {
      coinDenom: "cheq",
      coinMinimalDenom: "ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA",
      coinDecimals: 9
    },
    {
      coinDenom: "lum",
      coinMinimalDenom: "ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2",
      coinDecimals: 6
    },
    {
      coinDenom: "vdl",
      coinMinimalDenom: "ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD",
      coinDecimals: 6
    },
    {
      coinDenom: "dsm",
      coinMinimalDenom: "ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C",
      coinDecimals: 6
    },
    {
      coinDenom: "dig",
      coinMinimalDenom: "ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D",
      coinDecimals: 6
    },
    {
      coinDenom: "somm",
      coinMinimalDenom: "ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E",
      coinDecimals: 6
    },
    {
      coinDenom: "band",
      coinMinimalDenom: "ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE",
      coinDecimals: 6
    },
    {
      coinDenom: "darc",
      coinMinimalDenom: "ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593",
      coinDecimals: 6
    },
    {
      coinDenom: "umee",
      coinMinimalDenom: "ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C",
      coinDecimals: 6
    },
    {
      coinDenom: "graviton",
      coinMinimalDenom: "ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44",
      coinDecimals: 6
    },
    {
      coinDenom: "dec",
      coinMinimalDenom: "ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84",
      coinDecimals: 6
    },
    {
      coinDenom: "marble",
      coinMinimalDenom: "ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6",
      coinDecimals: 3
    },
    {
      coinDenom: "dswth",
      coinMinimalDenom: "ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3",
      coinDecimals: 8
    },
    {
      coinDenom: "crbrus",
      coinMinimalDenom: "ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7",
      coinDecimals: 6
    },
    {
      coinDenom: "fet",
      coinMinimalDenom: "ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447",
      coinDecimals: 18
    },
    {
      coinDenom: "mntl",
      coinMinimalDenom: "ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC",
      coinDecimals: 6
    },
    {
      coinDenom: "neta",
      coinMinimalDenom: "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
      coinDecimals: 6
    },
    {
      coinDenom: "INJ",
      coinMinimalDenom: "ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273",
      coinDecimals: 18
    },
    {
      coinDenom: "krt",
      coinMinimalDenom: "ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780",
      coinDecimals: 6
    },
    {
      coinDenom: "tick",
      coinMinimalDenom: "ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8",
      coinDecimals: 6
    },
    {
      coinDenom: "ROWAN",
      coinMinimalDenom: "ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB",
      coinDecimals: 18
    },
    {
      coinDenom: "ctk",
      coinMinimalDenom: "ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3",
      coinDecimals: 6
    },
    {
      coinDenom: "hope",
      coinMinimalDenom: "ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B",
      coinDecimals: 6
    },
    {
      coinDenom: "rac",
      coinMinimalDenom: "ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788",
      coinDecimals: 6
    },
    {
      coinDenom: "frax",
      coinMinimalDenom: "ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE",
      coinDecimals: 18
    },
    {
      coinDenom: "gwbtc",
      coinMinimalDenom: "ibc/C9B0D48FD2C5B91135F118FF2484551888966590D7BDC20F6A87308DBA670796",
      coinDecimals: 8
    },
    {
      coinDenom: "gweth",
      coinMinimalDenom: "ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5",
      coinDecimals: 18
    },
    {
      coinDenom: "gusdc",
      coinMinimalDenom: "ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E",
      coinDecimals: 6
    },
    {
      coinDenom: "gdai",
      coinMinimalDenom: "ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5",
      coinDecimals: 18
    },
    {
      coinDenom: "gusdt",
      coinMinimalDenom: "ibc/71B441E27F1BBB44DD0891BCD370C2794D404D60A4FFE5AECCD9B1E28BC89805",
      coinDecimals: 6
    },
    {
      coinDenom: "block",
      coinMinimalDenom: "ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3",
      coinDecimals: 6
    },
    {
      coinDenom: "hash",
      coinMinimalDenom: "ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2",
      coinDecimals: 9
    },
    {
      coinDenom: "glx",
      coinMinimalDenom: "ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2",
      coinDecimals: 6
    },
    {
      coinDenom: "ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB",
      coinMinimalDenom: "ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB",
      coinDecimals: 0
    },
    {
      coinDenom: "raw",
      coinMinimalDenom: "ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC",
      coinDecimals: 6
    },
    {
      coinDenom: "meme",
      coinMinimalDenom: "ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA",
      coinDecimals: 6
    },
    {
      coinDenom: "asvt",
      coinMinimalDenom: "ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7",
      coinDecimals: 6
    },
    {
      coinDenom: "joe",
      coinMinimalDenom: "ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484",
      coinDecimals: 6
    },
    {
      coinDenom: "luna",
      coinMinimalDenom: "ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9",
      coinDecimals: 6
    },
    {
      coinDenom: "atolo",
      coinMinimalDenom: "ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219",
      coinDecimals: 6
    },
    {
      coinDenom: "HARD",
      coinMinimalDenom: "ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC",
      coinDecimals: 6
    },
    {
      coinDenom: "SWP",
      coinMinimalDenom: "ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5",
      coinDecimals: 6
    },
    {
      coinDenom: "link",
      coinMinimalDenom: "ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049",
      coinDecimals: 18
    },
    {
      coinDenom: "l1",
      coinMinimalDenom: "ibc/F16FDC11A7662B86BC0B9CE61871CBACF7C20606F95E86260FD38915184B75B4",
      coinDecimals: 18
    },
    {
      coinDenom: "aave",
      coinMinimalDenom: "ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE",
      coinDecimals: 18
    },
    {
      coinDenom: "ape",
      coinMinimalDenom: "ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4",
      coinDecimals: 18
    },
    {
      coinDenom: "mkr",
      coinMinimalDenom: "ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3",
      coinDecimals: 18
    },
    {
      coinDenom: "rai",
      coinMinimalDenom: "ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E",
      coinDecimals: 18
    },
    {
      coinDenom: "shib",
      coinMinimalDenom: "ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2",
      coinDecimals: 18
    },
    {
      coinDenom: "kuji",
      coinMinimalDenom: "ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE",
      coinDecimals: 6
    },
    {
      coinDenom: "tgd",
      coinMinimalDenom: "ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C",
      coinDecimals: 6
    },
    {
      coinDenom: "echelon",
      coinMinimalDenom: "ibc/47EE224A9B33CF0ABEAC82106E52F0F6E8D8CEC5BA80B9D9A6F55172CBB0177D",
      coinDecimals: 18
    },
    {
      coinDenom: "odin",
      coinMinimalDenom: "ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B",
      coinDecimals: 6
    },
    {
      coinDenom: "geo",
      coinMinimalDenom: "ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A",
      coinDecimals: 6
    },
    {
      coinDenom: "O9W",
      coinMinimalDenom: "ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D",
      coinDecimals: 6
    },
    {
      coinDenom: "lvn",
      coinMinimalDenom: "ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121",
      coinDecimals: 6
    },
    {
      coinDenom: "wglmr",
      coinMinimalDenom: "ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49",
      coinDecimals: 18
    },
    {
      coinDenom: "glto",
      coinMinimalDenom: "ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E",
      coinDecimals: 6
    },
    {
      coinDenom: "gkey",
      coinMinimalDenom: "ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8",
      coinDecimals: 6
    },
    {
      coinDenom: "cre",
      coinMinimalDenom: "ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580",
      coinDecimals: 6
    },
    {
      coinDenom: "lumen",
      coinMinimalDenom: "ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7",
      coinDecimals: 6
    },
    {
      coinDenom: "ORAI",
      coinMinimalDenom: "ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D",
      coinDecimals: 6
    },
    {
      coinDenom: "cudos",
      coinMinimalDenom: "ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B",
      coinDecimals: 18
    },
    {
      coinDenom: "USDX",
      coinMinimalDenom: "ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE",
      coinDecimals: 6
    },
    {
      coinDenom: "bld",
      coinMinimalDenom: "ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604",
      coinDecimals: 6
    },
    {
      coinDenom: "ist",
      coinMinimalDenom: "ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5",
      coinDecimals: 6
    },
    {
      coinDenom: "sejuno",
      coinMinimalDenom: "ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B",
      coinDecimals: 6
    },
    {
      coinDenom: "bjuno",
      coinMinimalDenom: "ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3",
      coinDecimals: 6
    },
    {
      coinDenom: "strd",
      coinMinimalDenom: "ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4",
      coinDecimals: 6
    },
    {
      coinDenom: "statom",
      coinMinimalDenom: "ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901",
      coinDecimals: 6
    },
    {
      coinDenom: "ststars",
      coinMinimalDenom: "ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A",
      coinDecimals: 6
    },
    {
      coinDenom: "solar",
      coinMinimalDenom: "ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C",
      coinDecimals: 6
    },
    {
      coinDenom: "seasy",
      coinMinimalDenom: "ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6",
      coinDecimals: 6
    },
    {
      coinDenom: "axl",
      coinMinimalDenom: "ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E",
      coinDecimals: 6
    },
    {
      coinDenom: "rebus",
      coinMinimalDenom: "ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9",
      coinDecimals: 18
    },
    {
      coinDenom: "tori",
      coinMinimalDenom: "ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC",
      coinDecimals: 6
    },
    {
      coinDenom: "stjuno",
      coinMinimalDenom: "ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE",
      coinDecimals: 6
    },
    {
      coinDenom: "stosmo",
      coinMinimalDenom: "ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC",
      coinDecimals: 6
    },
    {
      coinDenom: "muse",
      coinMinimalDenom: "ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F",
      coinDecimals: 6
    },
    {
      coinDenom: "lamb",
      coinMinimalDenom: "ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB",
      coinDecimals: 18
    },
    {
      coinDenom: "usk",
      coinMinimalDenom: "ibc/44492EAB24B72E3FB59B9FA619A22337FB74F95D8808FE6BC78CC0E6C18DC2EC",
      coinDecimals: 6
    },
    {
      coinDenom: "FUND",
      coinMinimalDenom: "ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC",
      coinDecimals: 9
    },
    {
      coinDenom: "jkl",
      coinMinimalDenom: "ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA",
      coinDecimals: 6
    },
    {
      coinDenom: "alter",
      coinMinimalDenom: "ibc/A6383B6CF5EA23E067666C06BC34E2A96869927BD9744DC0C1643E589C710AA3",
      coinDecimals: 6
    },
    {
      coinDenom: "butt",
      coinMinimalDenom: "ibc/1FBA9E763B8679BEF7BAAAF2D16BCA78C3B297D226C3F31312C769D7B8F992D8",
      coinDecimals: 6
    },
    {
      coinDenom: "shd",
      coinMinimalDenom: "ibc/71055835C7639739EAE03AACD1324FE162DBA41D09F197CB72D966D014225B1C",
      coinDecimals: 8
    },
    {
      coinDenom: "sienna",
      coinMinimalDenom: "ibc/9A8A93D04917A149C8AC7C16D3DA8F470D59E8D867499C4DA97450E1D7363213",
      coinDecimals: 18
    },
    {
      coinDenom: "stkd-scrt",
      coinMinimalDenom: "ibc/D0E5BF2940FB58D9B283A339032DE88111407AAD7D94A7F1F3EB78874F8616D4",
      coinDecimals: 6
    },
    {
      coinDenom: "bze",
      coinMinimalDenom: "ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88",
      coinDecimals: 6
    },
    {
      coinDenom: "fury",
      coinMinimalDenom: "ibc/7CE5F388D661D82A0774E47B5129DA51CC7129BD1A70B5FA6BCEBB5B0A2FAEAF",
      coinDecimals: 6
    },
    {
      coinDenom: "acre",
      coinMinimalDenom: "ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06",
      coinDecimals: 18
    },
    {
      coinDenom: "cmst",
      coinMinimalDenom: "ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E",
      coinDecimals: 6
    },
    {
      coinDenom: "imv",
      coinMinimalDenom: "ibc/92B223EBFA74DB99BEA92B23DEAA6050734FEEAABB84689CB8E1AE8F9C9F9AF4",
      coinDecimals: 18
    },
    {
      coinDenom: "medas",
      coinMinimalDenom: "ibc/01E94A5FF29B8DDEFC86F412CC3927F7330E9B523CC63A6194B1108F5276025C",
      coinDecimals: 6
    },
    {
      coinDenom: "phmn",
      coinMinimalDenom: "ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B",
      coinDecimals: 6
    },
    {
      coinDenom: "amber",
      coinMinimalDenom: "ibc/18A1B70E3205A48DE8590C0D11030E7146CDBF1048789261D53FFFD7527F8B55",
      coinDecimals: 6
    },
    {
      coinDenom: "nom",
      coinMinimalDenom: "ibc/B9606D347599F0F2FDF82BA3EE339000673B7D274EA50F59494DC51EFCD42163",
      coinDecimals: 18
    },
    {
      coinDenom: "stkatom",
      coinMinimalDenom: "ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC",
      coinDecimals: 6
    },
    {
      coinDenom: "ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D",
      coinMinimalDenom: "ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D",
      coinDecimals: 0
    },
    {
      coinDenom: "hopers",
      coinMinimalDenom: "ibc/D3ADAF73F84CDF205BCB72C142FDAEEA2C612AB853CEE6D6C06F184FA38B1099",
      coinDecimals: 6
    },
    {
      coinDenom: "arusd",
      coinMinimalDenom: "ibc/5D270A584B1078FBE07D14570ED5E88EC1FEDA8518B76C322606291E6FD8286F",
      coinDecimals: 18
    },
    {
      coinDenom: "planq",
      coinMinimalDenom: "ibc/B1E0166EA0D759FDF4B207D1F5F12210D8BFE36F2345CEFC76948CE2B36DFBAF",
      coinDecimals: 18
    },
    {
      coinDenom: "ftm",
      coinMinimalDenom: "ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4",
      coinDecimals: 18
    },
    {
      coinDenom: "canto",
      coinMinimalDenom: "ibc/47CAF2DB8C016FAC960F33BC492FD8E454593B65CC59D70FA9D9F30424F9C32F",
      coinDecimals: 18
    },
    {
      coinDenom: "qstars",
      coinMinimalDenom: "ibc/46C83BB054E12E189882B5284542DB605D94C99827E367C9192CF0579CD5BC83",
      coinDecimals: 6
    },
    {
      coinDenom: "wynd",
      coinMinimalDenom: "ibc/2FBAC4BF296D7844796844B35978E5899984BA5A6314B2DD8F83C215550010B3",
      coinDecimals: 6
    },
    {
      coinDenom: "polygon-usdc",
      coinMinimalDenom: "ibc/231FD77ECCB2DB916D314019DA30FE013202833386B1908A191D16989AD80B5A",
      coinDecimals: 6
    },
    {
      coinDenom: "avalanche-usdc",
      coinMinimalDenom: "ibc/F17C9CA112815613C5B6771047A093054F837C3020CBA59DFFD9D780A8B2984C",
      coinDecimals: 6
    },
    {
      coinDenom: "MARS.old",
      coinMinimalDenom: "ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580",
      coinDecimals: 6
    },
    {
      coinDenom: "cnto",
      coinMinimalDenom: "ibc/D38BB3DD46864694F009AF01DA5A815B3A875F8CC52FF5679BFFCC35DC7451D5",
      coinDecimals: 18
    },
    {
      coinDenom: "stluna",
      coinMinimalDenom: "ibc/C491E7582E94AE921F6A029790083CDE1106C28F3F6C4AD7F1340544C13EC372",
      coinDecimals: 6
    },
    {
      coinDenom: "stevmos",
      coinMinimalDenom: "ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01",
      coinDecimals: 18
    },
    {
      coinDenom: "nride",
      coinMinimalDenom: "ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C",
      coinDecimals: 6
    },
    {
      coinDenom: "ebl",
      coinMinimalDenom: "ibc/8BE73A810E22F80E5E850531A688600D63AE7392E7C2770AE758CAA4FD921B7F",
      coinDecimals: 6
    },
    {
      coinDenom: "qatom",
      coinMinimalDenom: "ibc/FA602364BEC305A696CBDF987058E99D8B479F0318E47314C49173E8838C5BAC",
      coinDecimals: 6
    },
    {
      coinDenom: "harbor",
      coinMinimalDenom: "ibc/AD4DEA52408EA07C0C9E19444EC8DA84A274A70AD2687A710EFDDEB28BB2986A",
      coinDecimals: 6
    },
    {
      coinDenom: "qregen",
      coinMinimalDenom: "ibc/79A676508A2ECA1021EDDC7BB9CF70CEEC9514C478DA526A5A8B3E78506C2206",
      coinDecimals: 6
    },
    {
      coinDenom: "fox",
      coinMinimalDenom: "ibc/4F24D904BAB5FFBD3524F2DE3EC3C7A9E687A2408D9A985E57B356D9FA9201C6",
      coinDecimals: 6
    },
    {
      coinDenom: "qck",
      coinMinimalDenom: "ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D",
      coinDecimals: 6
    },
    {
      coinDenom: "ARKH",
      coinMinimalDenom: "ibc/0F91EE8B98AAE3CF393D94CD7F89A10F8D7758C5EC707E721899DFE65C164C28",
      coinDecimals: 6
    },
    {
      coinDenom: "qosmo",
      coinMinimalDenom: "ibc/42D24879D4569CE6477B7E88206ADBFE47C222C6CAD51A54083E4A72594269FC",
      coinDecimals: 6
    },
    {
      coinDenom: "frienzies",
      coinMinimalDenom: "ibc/7FA7EC64490E3BDE5A1A28CBE73CC0AD22522794957BC891C46321E3A6074DB9",
      coinDecimals: 6
    },
    {
      coinDenom: "whale",
      coinMinimalDenom: "ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D",
      coinDecimals: 6
    },
    {
      coinDenom: "grdn",
      coinMinimalDenom: "ibc/BAC9C6998F1F5C316D3353622EAEDAF8BD00FAABEB374FECDF8C9BC475172CFA",
      coinDecimals: 6
    },
    {
      coinDenom: "mnpu",
      coinMinimalDenom: "ibc/DC0D3303BBE739E073224D0314385B88B247F56D71D726A91414CCA244FFFE7E",
      coinDecimals: 6
    },
    {
      coinDenom: "shibac",
      coinMinimalDenom: "ibc/447A0DCE83691056289503DDAB8EB08E52E167A73629F2ACC59F056B92F51CE8",
      coinDecimals: 6
    },
    {
      coinDenom: "sikoba",
      coinMinimalDenom: "ibc/71066B030D8FC6479E638580E1BA9C44925E8C1F6E45036669D22017CFDC8C5E",
      coinDecimals: 6
    },
    {
      coinDenom: "nct",
      coinMinimalDenom: "ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68",
      coinDecimals: 6
    },
    {
      coinDenom: "clst",
      coinMinimalDenom: "ibc/0E4FA664327BD40B32803EE84A77F145834C0281B7F82B65521333B3669FA0BA",
      coinDecimals: 6
    },
    {
      coinDenom: "osdoge",
      coinMinimalDenom: "ibc/8AEEA9B9304392070F72611076C0E328CE3F2DECA1E18557E36F9DB4F09C0156",
      coinDecimals: 6
    },
    {
      coinDenom: "apemos",
      coinMinimalDenom: "ibc/1EB03F13F29FEA73444586FC4E88A8C14ACE9291501E9658E3BEF951EA4AC85D",
      coinDecimals: 6
    },
    {
      coinDenom: "invdrs",
      coinMinimalDenom: "ibc/3DB1721541C94AD19D7735FECED74C227E13F925BDB814392980B40A19C1ED54",
      coinDecimals: 6
    },
    {
      coinDenom: "doga",
      coinMinimalDenom: "ibc/04BE4E9C825ED781F9684A1226114BB49607500CAD855F1E3FEEC18532297250",
      coinDecimals: 6
    },
    {
      coinDenom: "catmos",
      coinMinimalDenom: "ibc/F4A07138CAEF0BFB4889E03C44C57956A48631061F1C8AB80421C1F229C1B835",
      coinDecimals: 6
    },
    {
      coinDenom: "summit",
      coinMinimalDenom: "ibc/56B988C4D934FB7503F5EA9B440C75D489C8AD5D193715B477BEC4F84B8BBA2A",
      coinDecimals: 6
    },
    {
      coinDenom: "flix",
      coinMinimalDenom: "ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F",
      coinDecimals: 6
    },
    {
      coinDenom: "spacer",
      coinMinimalDenom: "ibc/7A496DB7C2277D4B74EC4428DDB5AC8A62816FBD0DEBE1CFE094935D746BE19C",
      coinDecimals: 6
    },
    {
      coinDenom: "light",
      coinMinimalDenom: "ibc/3DC08BDF2689978DBCEE28C7ADC2932AA658B2F64B372760FBC5A0058669AD29",
      coinDecimals: 9
    },
    {
      coinDenom: "silk",
      coinMinimalDenom: "ibc/8A025A1E70101E39DE0C0F153E582A30806D3DA16795F6D868A3AA247D2DEDF7",
      coinDecimals: 6
    },
    {
      coinDenom: "mile",
      coinMinimalDenom: "ibc/912275A63A565BFD80734AEDFFB540132C51E446EAC41483B26EDE8A557C71CF",
      coinDecimals: 6
    },
    {
      coinDenom: "manna",
      coinMinimalDenom: "ibc/980A2748F37C938AD129B92A51E2ABA8CFFC6862ADD61EC1B291125535DBE30B",
      coinDecimals: 6
    },
    {
      coinDenom: "fil",
      coinMinimalDenom: "ibc/18FB5C09D9D2371F659D4846A956FA56225E377EE3C3652A2BF3542BF809159D",
      coinDecimals: 18
    },
    {
      coinDenom: "void",
      coinMinimalDenom: "ibc/593F820ECE676A3E0890C734EC4F3A8DE16EC10A54EEDFA8BDFEB40EEA903960",
      coinDecimals: 6
    },
    {
      coinDenom: "shd",
      coinMinimalDenom: "ibc/0B3D528E74E3DEAADF8A68F393887AC7E06028904D02173561B0D27F6E751D0A",
      coinDecimals: 8
    },
    {
      coinDenom: "bnt",
      coinMinimalDenom: "ibc/63CDD51098FD99E04E5F5610A3882CBE7614C441607BA6FCD7F3A3C1CD5325F8",
      coinDecimals: 6
    },
    {
      coinDenom: "arb",
      coinMinimalDenom: "ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6",
      coinDecimals: 18
    },
    {
      coinDenom: "silica",
      coinMinimalDenom: "ibc/5164ECF584AD7DC27DA9E6A89E75DAB0F7C4FCB0A624B69215B8BC6A2C40CD07",
      coinDecimals: 6
    },
    {
      coinDenom: "pepec",
      coinMinimalDenom: "ibc/C00B17F74C94449A62935B4C886E6F0F643249A270DEF269D53CE6741ECCDB93",
      coinDecimals: 6
    },
    {
      coinDenom: "pepe",
      coinMinimalDenom: "ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B",
      coinDecimals: 18
    },
    {
      coinDenom: "ibcx",
      coinMinimalDenom: "factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx",
      coinDecimals: 6,
      coinGeckoId: "ibc-index"
    },
    {
      coinDenom: "cbeth",
      coinMinimalDenom: "ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A",
      coinDecimals: 18
    },
    {
      coinDenom: "reth",
      coinMinimalDenom: "ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222",
      coinDecimals: 18
    },
    {
      coinDenom: "sfrxeth",
      coinMinimalDenom: "ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46",
      coinDecimals: 18
    },
    {
      coinDenom: "wsteth",
      coinMinimalDenom: "ibc/B2BD584CD2A0A9CE53D4449667E26160C7D44A9C41AF50F602C201E5B3CCA46C",
      coinDecimals: 18
    },
    {
      coinDenom: "LORE",
      coinMinimalDenom: "ibc/B1C1806A540B3E165A2D42222C59946FB85BA325596FC85662D7047649F419F3",
      coinDecimals: 6
    },
    {
      coinDenom: "roar",
      coinMinimalDenom: "ibc/98BCD43F190C6960D0005BC46BB765C827403A361C9C03C2FF694150A30284B0",
      coinDecimals: 6
    },
    {
      coinDenom: "stumee",
      coinMinimalDenom: "ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F",
      coinDecimals: 6
    },
    {
      coinDenom: "stibcx",
      coinMinimalDenom: "factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx",
      coinDecimals: 6
    },
    {
      coinDenom: "nls",
      coinMinimalDenom: "ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782",
      coinDecimals: 6
    },
    {
      coinDenom: "cub",
      coinMinimalDenom: "ibc/6F18EFEBF1688AA77F7EAC17065609494DC1BA12AFC78E9AEC832AF70A11BEF3",
      coinDecimals: 6
    },
    {
      coinDenom: "blue",
      coinMinimalDenom: "ibc/DA961FE314B009C38595FFE3AF41225D8894D663B8C3F6650DCB5B6F8435592E",
      coinDecimals: 6
    },
    {
      coinDenom: "ntrn",
      coinMinimalDenom: "ibc/126DA09104B71B164883842B769C0E9EC1486C0887D27A9999E395C2C8FB5682",
      coinDecimals: 6
    },
    {
      coinDenom: "casa",
      coinMinimalDenom: "ibc/2F5C084037D951B24D100F15CC013A131DF786DCE1B1DBDC48F018A9B9A138DE",
      coinDecimals: 6
    },
    {
      coinDenom: "pica",
      coinMinimalDenom: "ibc/56D7C03B8F6A07AD322EEE1BEF3AE996E09D1C1E34C27CF37E0D4A0AC5972516",
      coinDecimals: 12
    },
    {
      coinDenom: "ksm",
      coinMinimalDenom: "ibc/6727B2F071643B3841BD535ECDD4ED9CAE52ABDD0DCD07C3630811A7A37B215C",
      coinDecimals: 12
    },
    {
      coinDenom: "dot",
      coinMinimalDenom: "ibc/6B2B19D874851F631FF0AF82C38A20D4B82F438C7A22F41EDA33568345397244",
      coinDecimals: 10
    },
    {
      coinDenom: "qsr",
      coinMinimalDenom: "ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477",
      coinDecimals: 6
    },
    {
      coinDenom: "arch",
      coinMinimalDenom: "ibc/23AB778D694C1ECFC59B91D8C399C115CC53B0BD1C61020D8E19519F002BDD85",
      coinDecimals: 18
    },
    {
      coinDenom: "mpwr",
      coinMinimalDenom: "ibc/DD3938D8131F41994C1F01F4EB5233DEE9A0A5B787545B9A07A321925655BF38",
      coinDecimals: 6
    },
    {
      coinDenom: "watr",
      coinMinimalDenom: "ibc/AABCB14ACAFD53A5C455BAC01EA0CA5AE18714895846681A52BFF1E3B960B44E",
      coinDecimals: 6
    },
    {
      coinDenom: "kyve",
      coinMinimalDenom: "ibc/613BF0BF2F2146AE9941E923725745E931676B2C14E9768CD609FA0849B2AE13",
      coinDecimals: 6
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB",
      coinDecimals: 6
    },
    {
      coinDenom: "ampOSMO",
      coinMinimalDenom: "factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO",
      coinDecimals: 6
    },
    {
      coinDenom: "sei",
      coinMinimalDenom: "ibc/71F11BC0AF8E526B80E44172EBA9D3F0A8E03950BB882325435691EBC9450B1D",
      coinDecimals: 6
    },
    {
      coinDenom: "qsomm",
      coinMinimalDenom: "ibc/EAF76AD1EEF7B16D167D87711FB26ABE881AC7D9F7E6D0CF313D5FA530417208",
      coinDecimals: 6
    },
    {
      coinDenom: "pasg",
      coinMinimalDenom: "ibc/208B2F137CDE510B44C41947C045CFDC27F996A9D990EA64460BDD5B3DBEB2ED",
      coinDecimals: 6
    },
    {
      coinDenom: "stsomm",
      coinMinimalDenom: "ibc/5A0060579D24FBE5268BEA74C3281E7FE533D361C41A99307B4998FEC611E46B",
      coinDecimals: 6
    },
    {
      coinDenom: "wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8",
      coinMinimalDenom: "ibc/1E43D59E565D41FB4E54CA639B838FFD5BCFC20003D330A56CB1396231AA1CBA",
      coinDecimals: 8
    },
    {
      coinDenom: "wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5",
      coinMinimalDenom: "ibc/CA3733CB0071F480FAE8EF0D9C3D47A49C6589144620A642BBE0D59A293D110E",
      coinDecimals: 5
    },
    {
      coinDenom: "wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6",
      coinMinimalDenom: "ibc/2108F2D81CBE328F371AD0CEF56691B18A86E08C3651504E42487D9EE92DDE9C",
      coinDecimals: 6
    },
    {
      coinDenom: "wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8",
      coinMinimalDenom: "ibc/B1C287C2701774522570010EEBCD864BCB7AB714711B3AA218699FDD75E832F5",
      coinDecimals: 8
    },
    {
      coinDenom: "wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8",
      coinMinimalDenom: "ibc/A4D176906C1646949574B48C1928D475F2DF56DE0AC04E1C99B08F90BC21ABDE",
      coinDecimals: 8
    },
    {
      coinDenom: "mnta",
      coinMinimalDenom: "ibc/51D893F870B7675E507E91DA8DB0B22EA66333207E4F5C0708757F08EE059B0B",
      coinDecimals: 6
    },
    {
      coinDenom: "dgl",
      coinMinimalDenom: "ibc/D69F6D787EC649F4E998161A9F0646F4C2DCC64748A2AB982F14CAFBA7CC0EC9",
      coinDecimals: 6
    },
    {
      coinDenom: "wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6",
      coinMinimalDenom: "ibc/6B99DB46AA9FF47162148C1726866919E44A6A5E0274B90912FD17E19A337695",
      coinDecimals: 6
    },
    {
      coinDenom: "wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8",
      coinMinimalDenom: "ibc/62F82550D0B96522361C89B0DA1119DE262FBDFB25E5502BC5101B5C0D0DBAAC",
      coinDecimals: 8
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4",
      coinDecimals: 6
    },
    {
      coinDenom: "YieldETH",
      coinMinimalDenom: "ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668",
      coinDecimals: 18
    },
    {
      coinDenom: "xpla",
      coinMinimalDenom: "ibc/95C9B5870F95E21A242E6AF9ADCB1F212EE4A8855087226C36FBE43FC41A77B8",
      coinDecimals: 18
    },
    {
      coinDenom: "oin",
      coinMinimalDenom: "ibc/98B3DBF1FA79C4C14CC5F08F62ACD5498560FCB515F677526FD200D54EA048B6",
      coinDecimals: 6
    },
    {
      coinDenom: "neok",
      coinMinimalDenom: "ibc/DEE262653B9DE39BCEF0493D47E0DFC4FE62F7F046CF38B9FDEFEBE98D149A71",
      coinDecimals: 18
    },
    {
      coinDenom: "rio",
      coinMinimalDenom: "ibc/1CDF9C7D073DD59ED06F15DB08CC0901F2A24759BE70463570E8896F9A444ADF",
      coinDecimals: 18
    },
    {
      coinDenom: "cdt",
      coinMinimalDenom: "factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt",
      coinDecimals: 6,
      coinGeckoId: "collateralized-debt-token"
    },
    {
      coinDenom: "mbrn",
      coinMinimalDenom: "factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn",
      coinDecimals: 6,
      coinGeckoId: "membrane"
    },
    {
      coinDenom: "sge",
      coinMinimalDenom: "ibc/A1830DECC0B742F0B2044FF74BE727B5CF92C9A28A9235C3BACE4D24A23504FA",
      coinDecimals: 6
    },
    {
      coinDenom: "fis",
      coinMinimalDenom: "ibc/01D2F0C4739C871BFBEE7E786709E6904A55559DC1483DD92ED392EF12247862",
      coinDecimals: 6
    },
    {
      coinDenom: "ratom",
      coinMinimalDenom: "ibc/B66CE615C600ED0A8B5AF425ECFE0D57BE2377587F66C45934A76886F34DC9B7",
      coinDecimals: 6
    },
    {
      coinDenom: "strdst",
      coinMinimalDenom: "ibc/CFF40564FDA3E958D9904B8B479124987901168494655D9CC6B7C0EC0416020B",
      coinDecimals: 6
    },
    {
      coinDenom: "DORA",
      coinMinimalDenom: "ibc/672406ADE4EDFD8C5EA7A0D0DD0C37E431DA7BD8393A15CD2CFDE3364917EB2A",
      coinDecimals: 18
    },
    {
      coinDenom: "core",
      coinMinimalDenom: "ibc/F3166F4D31D6BA1EC6C9F5536F5DDDD4CC93DBA430F7419E7CDC41C497944A65",
      coinDecimals: 6
    },
    {
      coinDenom: "tia",
      coinMinimalDenom: "ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877",
      coinDecimals: 6
    },
    {
      coinDenom: "dydx",
      coinMinimalDenom: "ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C",
      coinDecimals: 18
    },
    {
      coinDenom: "WFX",
      coinMinimalDenom: "ibc/2B30802A0B03F91E4E16D6175C9B70F2911377C1CAE9E50FF011C821465463F9",
      coinDecimals: 18
    },
    {
      coinDenom: "nbtc",
      coinMinimalDenom: "ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F",
      coinDecimals: 14
    },
    {
      coinDenom: "nois",
      coinMinimalDenom: "ibc/6928AFA9EA721938FED13B051F9DBF1272B16393D20C49EA5E4901BB76D94A90",
      coinDecimals: 6
    },
    {
      coinDenom: "sqosmo",
      coinMinimalDenom: "factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo",
      coinDecimals: 6
    },
    {
      coinDenom: "nstk",
      coinMinimalDenom: "ibc/F74225B0AFD2F675AF56E9BE3F235486BCDE5C5E09AA88A97AFD2E052ABFE04C",
      coinDecimals: 6
    },
    {
      coinDenom: "BRNCH",
      coinMinimalDenom: "ibc/71DAA4CAFA4FE2F9803ABA0696BA5FC0EFC14305A2EA8B4E01880DB851B1EC02",
      coinDecimals: 6
    },
    {
      coinDenom: "wstETH",
      coinMinimalDenom: "ibc/2F21E6D4271DE3F561F20A02CD541DAF7405B1E9CB3B9B07E3C2AC7D8A4338A5",
      coinDecimals: 18
    },
    {
      coinDenom: "sqatom",
      coinMinimalDenom: "factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom",
      coinDecimals: 6
    },
    {
      coinDenom: "sqbtc",
      coinMinimalDenom: "factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc",
      coinDecimals: 6
    },
    {
      coinDenom: "qwoyn",
      coinMinimalDenom: "ibc/09FAF1E04435E14C68DE7AB0D03C521C92975C792DB12B2EA390BAA2E06B3F3D",
      coinDecimals: 6
    },
    {
      coinDenom: "ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20",
      coinMinimalDenom: "ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20",
      coinDecimals: 0
    },
    {
      coinDenom: "ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761",
      coinMinimalDenom: "ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761",
      coinDecimals: 0
    },
    {
      coinDenom: "volt",
      coinMinimalDenom: "ibc/D3A1900B2B520E45608B5671ADA461E1109628E89B4289099557C6D3996F7DAA",
      coinDecimals: 3
    },
    {
      coinDenom: "ampere",
      coinMinimalDenom: "ibc/020F5162B7BC40656FC5432622647091F00D53E82EE8D21757B43D3282F25424",
      coinDecimals: 3
    },
    {
      coinDenom: "source",
      coinMinimalDenom: "ibc/E7905742CE2EA4EA5D592527DC89220C59B617DE803939FE7293805A64B484D7",
      coinDecimals: 6
    },
    {
      coinDenom: "wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6",
      coinMinimalDenom: "ibc/E42006ED917C769EDE1B474650EEA6BFE3F97958912B9206DD7010A28D01D9D5",
      coinDecimals: 6
    },
    {
      coinDenom: "stkosmo",
      coinMinimalDenom: "ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E",
      coinDecimals: 6
    },
    {
      coinDenom: "lvn",
      coinMinimalDenom: "factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn",
      coinDecimals: 6,
      coinGeckoId: "levana-protocol"
    },
    {
      coinDenom: "puppy",
      coinMinimalDenom: "ibc/46AC07DBFF1352EC94AF5BD4D23740D92D9803A6B41F6E213E77F3A1143FB963",
      coinDecimals: 6
    },
    {
      coinDenom: "newt",
      coinMinimalDenom: "ibc/BF685448E564B5A4AC8F6E0493A0B979D0E0BF5EC11F7E15D25A0A2160C944DD",
      coinDecimals: 6
    },
    {
      coinDenom: "milkTIA",
      coinMinimalDenom: "factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA",
      coinDecimals: 6,
      coinGeckoId: "milkyway-staked-tia"
    },
    {
      coinDenom: "ASH",
      coinMinimalDenom: "ibc/4976049456D261659D0EC499CC9C2391D3C7D1128A0B9FB0BBF2842D1B2BC7BC",
      coinDecimals: 6
    },
    {
      coinDenom: "RAC",
      coinMinimalDenom: "ibc/DDF1CD4CDC14AE2D6A3060193624605FF12DEE71CF1F8C19EEF35E9447653493",
      coinDecimals: 6
    },
    {
      coinDenom: "GUPPY",
      coinMinimalDenom: "ibc/42A9553A7770F3D7B62F3A82AF04E7719B4FD6EAF31BE5645092AAC4A6C2201D",
      coinDecimals: 6
    },
    {
      coinDenom: "ISLM",
      coinMinimalDenom: "ibc/69110FF673D70B39904FF056CFDFD58A90BEC3194303F45C32CB91B8B0A738EA",
      coinDecimals: 18
    },
    {
      coinDenom: "autism",
      coinMinimalDenom: "ibc/9DDF52A334F92BC57A9E0D59DFF9984EAC61D2A14E5162605DF601AA58FDFC6D",
      coinDecimals: 6
    },
    {
      coinDenom: "page",
      coinMinimalDenom: "ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99",
      coinDecimals: 8
    },
    {
      coinDenom: "PURSE",
      coinMinimalDenom: "ibc/6FD2938076A4C1BB3A324A676E76B0150A4443DAE0E002FB62AC0E6B604B1519",
      coinDecimals: 18
    },
    {
      coinDenom: "NINJA",
      coinMinimalDenom: "ibc/183C0BB962D2F57C957E0B134CFA0AC9D6F755C02DE9DC2A59089BA23009DEC3",
      coinDecimals: 6
    },
    {
      coinDenom: "kleo",
      coinMinimalDenom: "ibc/5F5B7DA5ECC80F6C7A8702D525BB0B74279B1F7B8EFAE36E423D68788F7F39FF",
      coinDecimals: 6
    },
    {
      coinDenom: "nyx",
      coinMinimalDenom: "ibc/1A611E8A3E4248106A1A5A80A64BFA812739435E8B9888EB3F652A21F029F317",
      coinDecimals: 6
    },
    {
      coinDenom: "nym",
      coinMinimalDenom: "ibc/37CB3078432510EE57B9AFA8DBE028B33AE3280A144826FEAC5F2334CF2C5539",
      coinDecimals: 6
    },
    {
      coinDenom: "achihuahuawifhat",
      coinMinimalDenom: "ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7",
      coinDecimals: 6
    },
    {
      coinDenom: "circus",
      coinMinimalDenom: "ibc/8C8F6349F656C943543C6B040377BE44123D01F712277815C3C13098BB98818C",
      coinDecimals: 6
    },
    {
      coinDenom: "jape",
      coinMinimalDenom: "ibc/176DD560277BB0BD676260BE02EBAB697725CA85144D8A2BF286C6B5323DB5FE",
      coinDecimals: 6
    },
    {
      coinDenom: "WOOF",
      coinMinimalDenom: "ibc/9B8EC667B6DF55387DC0F3ACC4F187DA6921B0806ED35DE6B04DE96F5AB81F53",
      coinDecimals: 6
    },
    {
      coinDenom: "sneaky",
      coinMinimalDenom: "ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F",
      coinDecimals: 6
    },
    {
      coinDenom: "wbtc",
      coinMinimalDenom: "factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc",
      coinDecimals: 8,
      coinGeckoId: "wrapped-bitcoin"
    },
    {
      coinDenom: "bad",
      coinMinimalDenom: "ibc/442A08C33AE9875DF90792FFA73B5728E1CAECE87AB4F26AE9B422F1E682ED23",
      coinDecimals: 6
    },
    {
      coinDenom: "sgnl",
      coinMinimalDenom: "ibc/4BDADBEDA31899036AB286E9901116496A9D85FB87B35A408C9D67C0DCAC660A",
      coinDecimals: 6
    },
    {
      coinDenom: "WOSMO",
      coinMinimalDenom: "factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO",
      coinDecimals: 6
    },
    {
      coinDenom: "sqtia",
      coinMinimalDenom: "factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia",
      coinDecimals: 6
    },
    {
      coinDenom: "apollo",
      coinMinimalDenom: "ibc/73BB20AF857D1FE6E061D01CA13870872AD0C979497CAF71BEA25B1CBF6879F1",
      coinDecimals: 6
    },
    {
      coinDenom: "stDYDX",
      coinMinimalDenom: "ibc/980E82A9F8E7CA8CD480F4577E73682A6D3855A267D1831485D7EBEF0E7A6C2C",
      coinDecimals: 18
    },
    {
      coinDenom: "stTIA",
      coinMinimalDenom: "ibc/698350B8A61D575025F3ED13E9AC9C0F45C89DEFE92F76D5838F1D3C1A7FF7C9",
      coinDecimals: 6
    },
    {
      coinDenom: "stSAGA",
      coinMinimalDenom: "ibc/2CD9F8161C3FC332E78EF0C25F6E684D09379FB2F56EF9267E7EC139642EC57B",
      coinDecimals: 6
    },
    {
      coinDenom: "stINJ",
      coinMinimalDenom: "ibc/C04DFC9BCD893E57F2BEFE40F63EFD18D2768514DBD5F63ABD2FF7F48FC01D36",
      coinDecimals: 18
    },
    {
      coinDenom: "glto",
      coinMinimalDenom: "ibc/072E5B3D6F278B3E6A9C51D7EAD1A737148609512C5EBE8CBCB5663264A0DDB7",
      coinDecimals: 6
    },
    {
      coinDenom: "dym",
      coinMinimalDenom: "ibc/9A76CDF0CBCEF37923F32518FA15E5DC92B9F56128292BC4D63C4AEA76CBB110",
      coinDecimals: 18
    },
    {
      coinDenom: "RAPTR",
      coinMinimalDenom: "factory/osmo1279xudevmf5cw83vkhglct7jededp86k90k2le/RAPTR",
      coinDecimals: 6
    },
    {
      coinDenom: "astro.cw20",
      coinMinimalDenom: "ibc/C25A2303FE24B922DAFFDCE377AC5A42E5EF746806D32E2ED4B610DE85C203F7",
      coinDecimals: 6
    },
    {
      coinDenom: "BADKID",
      coinMinimalDenom: "factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID",
      coinDecimals: 6
    },
    {
      coinDenom: "wormhole/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3/6",
      coinMinimalDenom: "ibc/F08DE332018E8070CC4C68FE06E04E254F527556A614F5F8F9A68AF38D367E45",
      coinDecimals: 6
    },
    {
      coinDenom: "heart",
      coinMinimalDenom: "ibc/35CECC330D11DD00FACB555D07687631E0BC7D226260CC5F015F6D7980819533",
      coinDecimals: 18
    },
    {
      coinDenom: "berlin",
      coinMinimalDenom: "ibc/2BF9656CAB0384A31167DB9B0254F0FB1CB4346A229BD7E5CBDCBB911C3740F7",
      coinDecimals: 18
    },
    {
      coinDenom: "scr",
      coinMinimalDenom: "ibc/178248C262DE2E141EE6287EE7AB0854F05F25B0A3F40C4B912FA1C7E51F466E",
      coinDecimals: 9
    },
    {
      coinDenom: "c4e",
      coinMinimalDenom: "ibc/62118FB4D5FEDD5D2B18DC93648A745CD5E5B01D420E9B7A5FED5381CB13A7E8",
      coinDecimals: 6
    },
    {
      coinDenom: "bitmos",
      coinMinimalDenom: "ibc/7D389F0ABF1E4D45BE6D7BBE36A2C50EA0559C01E076B02F8E381E685EC1F942",
      coinDecimals: 6
    },
    {
      coinDenom: "srcx",
      coinMinimalDenom: "ibc/C97473CD237EBA2F94FDFA6ABA5EC0E22FA140655D73D2A2754F03A347BBA40B",
      coinDecimals: 9
    },
    {
      coinDenom: "rock",
      coinMinimalDenom: "ibc/0835781EF3F3ADD053874323AB660C75B50B18B16733CAB783CA6BBD78244EDF",
      coinDecimals: 6
    },
    {
      coinDenom: "wormhole/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst/5",
      coinMinimalDenom: "ibc/CDD1E59BD5034C1B2597DD199782204EB397DB93200AA2E99C0AF3A66B2915FA",
      coinDecimals: 5
    },
    {
      coinDenom: "aioz",
      coinMinimalDenom: "ibc/BB0AFE2AFBD6E883690DAE4B9168EAC2B306BCC9C9292DACBB4152BBB08DB25F",
      coinDecimals: 18
    },
    {
      coinDenom: "stDYM",
      coinMinimalDenom: "ibc/D53E785DC9C5C2CA50CADB1EFE4DE5D0C30418BE0E9C6F2AF9F092A247E8BC22",
      coinDecimals: 18
    },
    {
      coinDenom: "doki",
      coinMinimalDenom: "ibc/C12C353A83CD1005FC38943410B894DBEC5F2ABC97FC12908F0FB03B970E8E1B",
      coinDecimals: 6
    },
    {
      coinDenom: "sail",
      coinMinimalDenom: "factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail",
      coinDecimals: 6,
      coinGeckoId: "sail-dao"
    },
    {
      coinDenom: "SHARK",
      coinMinimalDenom: "ibc/64D56DF9EC69BE554F49EBCE0199611062FF1137EF105E2F645C1997344F3834",
      coinDecimals: 6
    },
    {
      coinDenom: "xrp",
      coinMinimalDenom: "ibc/63A7CA0B6838AD8CAD6B5103998FF9B9B6A6F06FBB9638BFF51E63E0142339F3",
      coinDecimals: 6
    },
    {
      coinDenom: "SEIYAN",
      coinMinimalDenom: "ibc/86074B8DF625A75C25D52FA6112E3FD5446BA41FE418880C168CA99D10E22F05",
      coinDecimals: 6
    },
    {
      coinDenom: "nibi",
      coinMinimalDenom: "ibc/4017C65CEA338196ECCEC3FE3FE8258F23D1DE88F1D95750CC912C7A1C1016FF",
      coinDecimals: 6
    },
    {
      coinDenom: "beast",
      coinMinimalDenom: "ibc/B84F8CC583A54DA8173711C0B66B22FDC1954FEB1CA8DBC66C89919DAFE02000",
      coinDecimals: 6
    },
    {
      coinDenom: "cvnt",
      coinMinimalDenom: "ibc/044B7B28AFE93CEC769CF529ADC626DA09EA0EFA3E0E3284D540E9E00E01E24A",
      coinDecimals: 18
    },
    {
      coinDenom: "toro",
      coinMinimalDenom: "factory/osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z/toro",
      coinDecimals: 6
    },
    {
      coinDenom: "sayve",
      coinMinimalDenom: "ibc/06EF575844982382F4D1BC3830D294557A30EDB3CD223153AFC8DFEF06349C56",
      coinDecimals: 6
    },
    {
      coinDenom: "LAB",
      coinMinimalDenom: "factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB",
      coinDecimals: 6,
      coinGeckoId: "mad-scientists"
    },
    {
      coinDenom: "bOSMO",
      coinMinimalDenom: "factory/osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv/boneOsmo",
      coinDecimals: 6
    },
    {
      coinDenom: "PUNDIX",
      coinMinimalDenom: "ibc/46D8D1A6E2A80ECCB7CA6663086A2E749C508B68DA56A077CD26E6F4F9691EEE",
      coinDecimals: 18
    },
    {
      coinDenom: "tnkr",
      coinMinimalDenom: "ibc/3A0A392E610A8D477851ABFEA74F3D828F36C015AB8E93B0FBB7566A6D13C4D6",
      coinDecimals: 12
    },
    {
      coinDenom: "w",
      coinMinimalDenom: "ibc/AC6EE43E608B5A7EEE460C960480BC1C3708010E32B2071C429DA259836E10C3",
      coinDecimals: 6
    },
    {
      coinDenom: "dhp",
      coinMinimalDenom: "ibc/FD506CCA1FC574F2A8175FB574C981E9F6351E194AA48AC219BD67FF934E2F33",
      coinDecimals: 6
    },
    {
      coinDenom: "fury",
      coinMinimalDenom: "ibc/E4C60B9F95BF54CC085A5E39F6057ABD4DF92793D330EB884A36530F7E6804DE",
      coinDecimals: 6
    },
    {
      coinDenom: "saga",
      coinMinimalDenom: "ibc/094FB70C3006906F67F5D674073D2DAFAFB41537E7033098F5C752F211E7B6C2",
      coinDecimals: 6
    },
    {
      coinDenom: "ATOM1KLFG",
      coinMinimalDenom: "ibc/0E77E090EC04C476DE2BC0A7056580AC47660DAEB7B0D4701C085E3A046AC7B7",
      coinDecimals: 6
    },
    {
      coinDenom: "SHIDO",
      coinMinimalDenom: "ibc/62B50BB1DAEAD2A92D6C6ACAC118F4ED8CBE54265DCF5688E8D0A0A978AA46E7",
      coinDecimals: 18
    },
    {
      coinDenom: "cif",
      coinMinimalDenom: "ibc/EFC1776BEFB7842F2DC7BABD9A3050E188145C99007ECC5F3526FED45A68D5F5",
      coinDecimals: 6
    },
    {
      coinDenom: "hava",
      coinMinimalDenom: "ibc/884EBC228DFCE8F1304D917A712AA9611427A6C1ECC3179B2E91D7468FB091A2",
      coinDecimals: 6
    },
    {
      coinDenom: "IBC",
      coinMinimalDenom: "factory/osmo1kqdw6pvn0xww6tyfv2sqvkkencdz0qw406x54r/IBC",
      coinDecimals: 6
    },
    {
      coinDenom: "crowdp",
      coinMinimalDenom: "ibc/B87F0F5255CC658408F167C2F7B987A8D914622E1F73BCC267406360588F2B1E",
      coinDecimals: 18
    },
    {
      coinDenom: "astro",
      coinMinimalDenom: "ibc/B8C608CEE08C4F30A15A7955306F2EDAF4A02BB191CABC4185C1A57FD978DA1B",
      coinDecimals: 6
    },
    {
      coinDenom: "xASTRO",
      coinMinimalDenom: "ibc/2ED09B03AA396BC2F35B741F4CA4A82D33A24A1007BFC1973299842DD626F564",
      coinDecimals: 6
    },
    {
      coinDenom: "gpaxg",
      coinMinimalDenom: "ibc/A5CCD24BA902843B1003A7EEE5F937C632808B9CF4925601241B15C5A0A51A53",
      coinDecimals: 18
    },
    {
      coinDenom: "rstk",
      coinMinimalDenom: "ibc/04FAC73DFF7F1DD59395948F2F043B0BBF978AD4533EE37E811340F501A08FFB",
      coinDecimals: 6
    },
    {
      coinDenom: "BERNESE",
      coinMinimalDenom: "factory/osmo1s6ht8qrm8x0eg8xag5x3ckx9mse9g4se248yss/BERNESE",
      coinDecimals: 6
    },
    {
      coinDenom: "eth",
      coinMinimalDenom: "ibc/A23E590BA7E0D808706FB5085A449B3B9D6864AE4DDE7DAF936243CEBB2A3D43",
      coinDecimals: 18
    },
    {
      coinDenom: "dai",
      coinMinimalDenom: "ibc/37DFAFDA529FF7D513B0DB23E9728DF9BF73122D38D46824C78BB7F91E6A736B",
      coinDecimals: 18
    },
    {
      coinDenom: "fxs",
      coinMinimalDenom: "ibc/5435437A8C9416B650DDA49C338B63CCFC6465123B715F6BAA9B1B2071E27913",
      coinDecimals: 18
    },
    {
      coinDenom: "frax",
      coinMinimalDenom: "ibc/9A8CBC029002DC5170E715F93FBF35011FFC9796371F59B1F3C3094AE1B453A9",
      coinDecimals: 18
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "ibc/078AD6F581E8115CDFBD8FFA29D8C71AFE250CE952AFF80040CBC64868D44AD3",
      coinDecimals: 6
    },
    {
      coinDenom: "sfrax",
      coinMinimalDenom: "ibc/0EFA07F312E05258A56AE1DD600E39B9151CF7A91C8A94EEBCF4F03ECFE5DD98",
      coinDecimals: 18
    },
    {
      coinDenom: "frxeth",
      coinMinimalDenom: "ibc/688E70EF567E5D4BA1CF4C54BAD758C288BC1A6C8B0B12979F911A2AE95E27EC",
      coinDecimals: 18
    },
    {
      coinDenom: "sfrxeth",
      coinMinimalDenom: "ibc/F17CCB4F07948CC2D8B72952C2D0A84F2B763962F698774BB121B872AE4611B5",
      coinDecimals: 18
    },
    {
      coinDenom: "clay",
      coinMinimalDenom: "ibc/7ABF696369EFB3387DF22B6A24204459FE5EFD010220E8E5618DC49DB877047B",
      coinDecimals: 6
    },
    {
      coinDenom: "404dr",
      coinMinimalDenom: "ibc/B797E4F42CD33C50511B341E50C5CC0E8EF0D93B1E1247ABAA071583B8619202",
      coinDecimals: 6
    },
    {
      coinDenom: "wLIBRA",
      coinMinimalDenom: "factory/osmo19hdqma2mj0vnmgcxag6ytswjnr8a3y07q7e70p/wLIBRA",
      coinDecimals: 6
    },
    {
      coinDenom: "nim",
      coinMinimalDenom: "ibc/279D69A6EF8E37456C8D2DC7A7C1C50F7A566EC4758F6DE17472A9FDE36C4426",
      coinDecimals: 18
    },
    {
      coinDenom: "seda",
      coinMinimalDenom: "ibc/956AEF1DA92F70584266E87978C3F30A43B91EE6ABC62F03D097E79F6B99C4D8",
      coinDecimals: 18
    },
    {
      coinDenom: "CAC",
      coinMinimalDenom: "factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/cac",
      coinDecimals: 6
    },
    {
      coinDenom: "WEIRD",
      coinMinimalDenom: "ibc/38ADC6FFDDDB7D70B72AD0322CEA8844CB18FAA0A23400DBA8A99D43E18B3748",
      coinDecimals: 6
    },
    {
      coinDenom: "PBB",
      coinMinimalDenom: "factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/pbb",
      coinDecimals: 6
    },
    {
      coinDenom: "bwh",
      coinMinimalDenom: "factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/bwh",
      coinDecimals: 6
    },
    {
      coinDenom: "ibc/0D62E47FDEBBC199D4E1853C0708F0F9337AC62D95B719585C9700E466060995",
      coinMinimalDenom: "ibc/0D62E47FDEBBC199D4E1853C0708F0F9337AC62D95B719585C9700E466060995",
      coinDecimals: 0
    },
    {
      coinDenom: "SHITMOS",
      coinMinimalDenom: "factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/shitmos",
      coinDecimals: 6
    },
    {
      coinDenom: "qjuno",
      coinMinimalDenom: "ibc/B4E18E61E1505C2F371B621E49B09E983F6A138F251A7B5286A6BDF739FD0D54",
      coinDecimals: 6
    },
    {
      coinDenom: "qsaga",
      coinMinimalDenom: "ibc/F2D400F2728E9DA06EAE2AFAB289931A69EDDA5A661578C66A3177EDFE3C0D13",
      coinDecimals: 6
    },
    {
      coinDenom: "qdydx",
      coinMinimalDenom: "ibc/273C593E51ACE56F1F2BDB3E03A5CB81BB208B894BCAA642676A32C3454E8C27",
      coinDecimals: 18
    },
    {
      coinDenom: "qbld",
      coinMinimalDenom: "ibc/C1C106D915C8E8C59E5DC69BF30FEF64729A6F788060B184C86A315DBB762EF7",
      coinDecimals: 6
    },
    {
      coinDenom: "pepe",
      coinMinimalDenom: "ibc/5B5BFCC8A9F0D554A4245117F7798E85BE25B6C73DBFA2D6F369BD9DD6CACC6D",
      coinDecimals: 18
    },
    {
      coinDenom: "crv",
      coinMinimalDenom: "ibc/080CE38C1E49595F2199E88BE7281F93FAEEF3FE354EECED0640625E8311C9CF",
      coinDecimals: 18
    },
    {
      coinDenom: "ezeth",
      coinMinimalDenom: "ibc/39AAE0F5F918B731BEF1E02E9BAED33C242805F668B0A941AC509FB569FE51CB",
      coinDecimals: 18
    },
    {
      coinDenom: "usde",
      coinMinimalDenom: "ibc/BFFE212A23384C4EB055CF6F95A1F5EC1BE0F9BD286FAA66C3748F0444E67D63",
      coinDecimals: 18
    },
    {
      coinDenom: "ena",
      coinMinimalDenom: "ibc/257FF64F160106F6EE43CEE7C761DA64C1346221895373CC810FFA1BFAC5A7CD",
      coinDecimals: 18
    },
    {
      coinDenom: "eeth",
      coinMinimalDenom: "ibc/8D0FFEA4EDB04E3C1738C9599B66AE49683E0540FC4C1214AC84534C200D818B",
      coinDecimals: 18
    },
    {
      coinDenom: "pxeth",
      coinMinimalDenom: "ibc/D09BB89B2187EF13EF006B44510749B0F02FD0B34F8BB55C70D812A1FF6148C7",
      coinDecimals: 18
    },
    {
      coinDenom: "crvusd",
      coinMinimalDenom: "ibc/63551E7BB24008F0AFC1CB051A423A5104F781F035F8B1A191264B7086A0A0F6",
      coinDecimals: 18
    },
    {
      coinDenom: "WIHA",
      coinMinimalDenom: "factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/wiha",
      coinDecimals: 6
    },
    {
      coinDenom: "CRAZYHORSE",
      coinMinimalDenom: "factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/crazyhorse",
      coinDecimals: 6
    },
    {
      coinDenom: "COCA",
      coinMinimalDenom: "factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/coca",
      coinDecimals: 6
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "ibc/0233A3F2541FD43DBCA569B27AF886E97F5C03FC0305E4A8A3FAC6AC26249C7A",
      coinDecimals: 6
    },
    {
      coinDenom: "edgesol",
      coinMinimalDenom: "ibc/B83F9E20B4A07FA8846880000BD9D8985D89567A090F5E9390C64E81C39B4607",
      coinDecimals: 9
    },
    {
      coinDenom: "lst",
      coinMinimalDenom: "ibc/F618D130A2B8203D169811658BD0361F18DC2453085965FA0E5AEB8018DD54EE",
      coinDecimals: 9
    },
    {
      coinDenom: "jitosol",
      coinMinimalDenom: "ibc/9A83BDF4C8C5FFDDE735533BC8CD4363714A6474AED1C2C492FB003BB77C7982",
      coinDecimals: 9
    },
    {
      coinDenom: "wsol",
      coinMinimalDenom: "ibc/0F9E9277B61A78CB31014D541ACA5BF6AB06DFC4524C4C836490B131DAAECD78",
      coinDecimals: 9
    },
    {
      coinDenom: "allUSDT",
      coinMinimalDenom: "factory/osmo1em6xs47hd82806f5cxgyufguxrrc7l0aqx7nzzptjuqgswczk8csavdxek/alloyed/allUSDT",
      coinDecimals: 6
    },
    {
      coinDenom: "whine",
      coinMinimalDenom: "ibc/A8C568580D613F16F7E9075EA9FAD69FEBE0CC1F4AF46C60255FEC4459C166F1",
      coinDecimals: 6
    },
    {
      coinDenom: "BAG",
      coinMinimalDenom: "factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/bag",
      coinDecimals: 6
    },
    {
      coinDenom: "allBTC",
      coinMinimalDenom: "factory/osmo1z6r6qdknhgsc0zeracktgpcxf43j6sekq07nw8sxduc9lg0qjjlqfu25e3/alloyed/allBTC",
      coinDecimals: 8
    },
    {
      coinDenom: "n43",
      coinMinimalDenom: "ibc/E4FFAACCDB7D55CE2D257DF637C00158CB841F11D0013B2D03E31FF7800A2C58",
      coinDecimals: 6
    },
    {
      coinDenom: "rakoff",
      coinMinimalDenom: "ibc/46579C587A0B8CF8B0A1FF6B0EFA2082F11876578E47FC81A9CAAD31F424AF98",
      coinDecimals: 6
    },
    {
      coinDenom: "arbitrum-weth",
      coinMinimalDenom: "ibc/64E62451C9A5682FF3047429C6E4714A02CDC0C35DE35CAB01E18D1188004CEB",
      coinDecimals: 18
    },
    {
      coinDenom: "base-weth",
      coinMinimalDenom: "ibc/D7D6DEF2A4F7ED0A6F5F0E266C1B2C9726E82F67EBBE49BBB47B3DEC289F8D7B",
      coinDecimals: 18
    },
    {
      coinDenom: "polygon-weth",
      coinMinimalDenom: "ibc/F9EB60AC212DBF05F4C5ED0FDE03BB9F08309B0EE9899A406AD4B904CF84968E",
      coinDecimals: 18
    },
    {
      coinDenom: "stISLM",
      coinMinimalDenom: "ibc/245C3CA604AAB4BB9EEA5E86F23F52D59253D8722C8FC9C4E3E69F77C5CD3D2F",
      coinDecimals: 18
    },
    {
      coinDenom: "mand",
      coinMinimalDenom: "ibc/739D70CB432FE1C6D94AF306B68C14F4CFB0B9EDD1238D3A8718B1B0E84E8547",
      coinDecimals: 18
    },
    {
      coinDenom: "neutaro",
      coinMinimalDenom: "ibc/DAED51CBD967A3BE0C467687970AFD97B202AFE4A1718B36936F49178AFE0133",
      coinDecimals: 6
    },
    {
      coinDenom: "wormhole/AbYYFgqSQEhe7NyXfo6w75GT7fCanVd9wNg4E9Df2puP/6",
      coinMinimalDenom: "ibc/E0D6A7FFAE26FA90C8F1AA3461A5A21E74DB154F183EAE56C96769F48F81FCA2",
      coinDecimals: 6
    },
    {
      coinDenom: "usdy",
      coinMinimalDenom: "ibc/23104D411A6EB6031FA92FB75F227422B84989969E91DCAD56A535DD7FF0A373",
      coinDecimals: 18
    },
    {
      coinDenom: "TURD",
      coinMinimalDenom: "factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/turd",
      coinDecimals: 6
    },
    {
      coinDenom: "fct",
      coinMinimalDenom: "ibc/E43ABCC7E80E99E4E6E1226AE5695DDE0F83CB5C257CD04D47C36B8B90C1C839",
      coinDecimals: 6
    },
    {
      coinDenom: "allETH",
      coinMinimalDenom: "factory/osmo1k6c8jln7ejuqwtqmay3yvzrg3kueaczl96pk067ldg8u835w0yhsw27twm/alloyed/allETH",
      coinDecimals: 18
    },
    {
      coinDenom: "allSOL",
      coinMinimalDenom: "factory/osmo1n3n75av8awcnw4jl62n3l48e6e4sxqmaf97w5ua6ddu4s475q5qq9udvx4/alloyed/allSOL",
      coinDecimals: 9
    },
    {
      coinDenom: "lava",
      coinMinimalDenom: "ibc/1AEF145C549D4F9847C79E49710B198C294C7F4A107F4610DEE8E725FFC4B378",
      coinDecimals: 6
    },
    {
      coinDenom: "penumbra",
      coinMinimalDenom: "ibc/0FA9232B262B89E77D1335D54FB1E1F506A92A7E4B51524B400DC69C68D28372",
      coinDecimals: 6
    },
    {
      coinDenom: "trx",
      coinMinimalDenom: "factory/osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9/TRX.rt",
      coinDecimals: 6
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "factory/osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9/USDT.rt",
      coinDecimals: 6
    },
    {
      coinDenom: "COSMO",
      coinMinimalDenom: "ibc/4925733868E7999F5822C961ADE9470A7FC5FA4A560BAE1DE102783C3F64C201",
      coinDecimals: 6
    },
    {
      coinDenom: "stBAND",
      coinMinimalDenom: "ibc/603140E681973C7A3A33B06B1D377AAD0F6AC376119735CECC04C9184A1AB080",
      coinDecimals: 6
    },
    {
      coinDenom: "COOK",
      coinMinimalDenom: "factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/COOK",
      coinDecimals: 6
    },
    {
      coinDenom: "trx",
      coinMinimalDenom: "factory/osmo14mafhhp337yjj2aujplawz0tks6jd2lel4hkwz4agyzhvvztzaqsqzjq8x/alloyed/allTRX",
      coinDecimals: 6
    },
    {
      coinDenom: "ROUTE",
      coinMinimalDenom: "ibc/3F8F00094F0F79D17750FF69C5F09B078084018570AAF4F1C92C86D3F73E6488",
      coinDecimals: 18
    },
    {
      coinDenom: "op",
      coinMinimalDenom: "factory/osmo1nufyzqlm8qhu2w7lm0l4rrax0ec8rsk69mga4tel8eare7c7ljaqpk2lyg/alloyed/allOP",
      coinDecimals: 12
    },
    {
      coinDenom: "op",
      coinMinimalDenom: "ibc/14A291DD362798D6805B7ABCB8D09AEEE02176108F89FA09AA43EA2EE096A2A9",
      coinDecimals: 18
    },
    {
      coinDenom: "shib",
      coinMinimalDenom: "factory/osmo1f588gk9dazpsueevdl2w6wfkmfmhg5gdvg2uerdlzl0atkasqhsq59qc6a/alloyed/allSHIB",
      coinDecimals: 12
    },
    {
      coinDenom: "arb",
      coinMinimalDenom: "factory/osmo1p7x454ex08s4f9ztmm7wfv7lvtgdkfztj2u7v7fezfcauy85q35qmqrdpk/alloyed/allARB",
      coinDecimals: 12
    },
    {
      coinDenom: "link",
      coinMinimalDenom: "factory/osmo18zdw5yvs6gfp95rp74qqwug9yduw2fyr8kplk2xgs726s9axc5usa2vpgw/alloyed/allLINK",
      coinDecimals: 12
    },
    {
      coinDenom: "pepe",
      coinMinimalDenom: "factory/osmo1nnlxegt0scm9qkzys9c874t0ntapv4epfjy2w49c0xdrp3dr0v4ssmelzx/alloyed/allPEPE",
      coinDecimals: 12
    },
    {
      coinDenom: "dot",
      coinMinimalDenom: "factory/osmo1r53fx9fvcdzncrs7zkn4gw5vfelx5gk8k5wc6wqha2jpkh992rusr5tk02/alloyed/allDOT",
      coinDecimals: 10
    },
    {
      coinDenom: "unicorn",
      coinMinimalDenom: "ibc/C91210281CEB708DC6E41A47FC9EC298F45712273DD58C682BEBAD00DCB59DC2",
      coinDecimals: 6
    },
    {
      coinDenom: "DEEN",
      coinMinimalDenom: "ibc/108604FDBE97DAEF128FD4ECFEB2A8AFC2D04A7162C97EAA2FD5BCB0869D0BBC",
      coinDecimals: 6
    },
    {
      coinDenom: "CosmoUSD",
      coinMinimalDenom: "factory/osmo104jtrwcljnxfljhml8mxrw7qetcsdmqvy3sprw/ucosmousd",
      coinDecimals: 6
    },
    {
      coinDenom: "XTRUMP",
      coinMinimalDenom: "factory/osmo1hg0zf0c9can4tvtulh5gmmxe4jpflre3yewxjl/XTRUMP",
      coinDecimals: 6
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "ibc/2AD3C64D19ADFBB522CD738B58F421102143F827C1CAFF574A8BF0B81017D53D",
      coinDecimals: 6
    },
    {
      coinDenom: "fBAD",
      coinMinimalDenom: "factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fBAD",
      coinDecimals: 9
    },
    {
      coinDenom: "fMAD",
      coinMinimalDenom: "factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fMAD",
      coinDecimals: 9
    },
    {
      coinDenom: "fSLOTH",
      coinMinimalDenom: "factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fSLOTH",
      coinDecimals: 9
    },
    {
      coinDenom: "fNUT",
      coinMinimalDenom: "factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fNUT",
      coinDecimals: 9
    },
    {
      coinDenom: "MARS",
      coinMinimalDenom: "ibc/B67DF59507B3755EEDE0866C449445BD54B4DA82CCEBA89D775E53DC35664255",
      coinDecimals: 6
    },
    {
      coinDenom: "ton",
      coinMinimalDenom: "ibc/905889A7F0B94F1CE1506D9BADF13AE9141E4CBDBCD565E1DFC7AE418B3E3E98",
      coinDecimals: 9
    },
    {
      coinDenom: "ton",
      coinMinimalDenom: "factory/osmo12lnwf54yd30p6amzaged2atln8k0l32n7ncxf04ctg7u7ymnsy7qkqgsw4/alloyed/allTON",
      coinDecimals: 9
    },
    {
      coinDenom: "fury",
      coinMinimalDenom: "ibc/42D0FBF9DDC72D7359D309A93A6DF9F6FDEE3987EA1C5B3CDE95C06FCE183F12",
      coinDecimals: 6
    },
    {
      coinDenom: "PUNDIX",
      coinMinimalDenom: "ibc/2EB516F83C9FF44AB6826F269CA98A5622608C6C955E12112E58F23A324FEE07",
      coinDecimals: 18
    },
    {
      coinDenom: "dhp",
      coinMinimalDenom: "ibc/320F8D6EC17E14436D19C6D844BB9A5AE9B9A209F6D18364A2191FF08E8732A9",
      coinDecimals: 6
    },
    {
      coinDenom: "SHIDO",
      coinMinimalDenom: "ibc/BBE825F7D1673E1EBF05AB02000E23E6077967B79547A3733B60AE4ED62C4D32",
      coinDecimals: 18
    },
    {
      coinDenom: "nstk",
      coinMinimalDenom: "ibc/F74225B0AFD2F675AF56E9BE3F235486BCDE5C5E09AA88A97AFD2E052ABFE04C",
      coinDecimals: 6
    },
    {
      coinDenom: "avalanche-usdc",
      coinMinimalDenom: "ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43",
      coinDecimals: 6
    },
    {
      coinDenom: "nom",
      coinMinimalDenom: "ibc/F49DFB3BC8105C57EE7F17EC2402438825B31212CFDD81681EB87911E934F32C",
      coinDecimals: 6
    },
    {
      coinDenom: "ymos",
      coinMinimalDenom: "factory/osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy/ymos",
      coinDecimals: 6
    },
    {
      coinDenom: "factory/osmo13gu58hzw3e9aqpj25h67m7snwcjuccd7v4p55w/brnz",
      coinMinimalDenom: "factory/osmo13gu58hzw3e9aqpj25h67m7snwcjuccd7v4p55w/brnz",
      coinDecimals: 0
    },
    {
      coinDenom: "ashLAB",
      coinMinimalDenom: "factory/osmo1svj5kd8kzj7xxtrd6ftjk0856ffpyj4egz7f9pd9dge5wr4kwansmefq07/lab.ash",
      coinDecimals: 6
    },
    {
      coinDenom: "grac",
      coinMinimalDenom: "ibc/58E4261D2E21FE3A459C290A9F97F3DCD257B28F48AAE828298B38E048804829",
      coinDecimals: 6
    },
    {
      coinDenom: "loopedUSDCmars",
      coinMinimalDenom: "factory/osmo1vf6e300hv2qe7r5rln8deft45ewgyytjnwfrdfcv5rgzrfy0s6cswjqf9r/mars-usdc-looped",
      coinDecimals: 6
    },
    {
      coinDenom: "BVT0",
      coinMinimalDenom: "factory/osmo1xu0gk9aggv79597xwazyfzaggv2pze9z7cq3p9p72tkkux9a7xaqufa792/BVT",
      coinDecimals: 18
    },
    {
      coinDenom: "BVT1",
      coinMinimalDenom: "factory/osmo16nxtnrnl7lctvnhhpcxqmmpv63n93zgg0ukaveyc0jl4dtad79cs53c3an/BVT",
      coinDecimals: 18
    },
    {
      coinDenom: "AVAIL",
      coinMinimalDenom: "factory/osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9/AVAIL.rt",
      coinDecimals: 18
    },
    {
      coinDenom: "fWIZ",
      coinMinimalDenom: "factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fWIZ",
      coinDecimals: 9
    },
    {
      coinDenom: "fWITCH",
      coinMinimalDenom: "factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fWITCH",
      coinDecimals: 9
    },
    {
      coinDenom: "fCRYPTONIUM",
      coinMinimalDenom: "factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fCRYPTONIUM",
      coinDecimals: 9
    },
    {
      coinDenom: "fGECK",
      coinMinimalDenom: "factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fGECK",
      coinDecimals: 9
    },
    {
      coinDenom: "fATLAS",
      coinMinimalDenom: "factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fATLAS",
      coinDecimals: 9
    },
    {
      coinDenom: "fBULLS",
      coinMinimalDenom: "factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fBULLS",
      coinDecimals: 9
    },
    {
      coinDenom: "rbtc",
      coinMinimalDenom: "factory/osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9/BTC.rt",
      coinDecimals: 18
    },
    {
      coinDenom: "ckBTC",
      coinMinimalDenom: "factory/osmo10c4y9csfs8q7mtvfg4p9gd8d0acx0hpc2mte9xqzthd7rd3348tsfhaesm/sICP-icrc-ckBTC",
      coinDecimals: 8
    }
  ],
  rest: "https://lcd.osmosis.zone/",
  rpc: "https://rpc.osmosis.zone/",
  bech32Config: {
    bech32PrefixAccAddr: "osmo",
    bech32PrefixAccPub: "osmopub",
    bech32PrefixValAddr: "osmovaloper",
    bech32PrefixValPub: "osmovaloperpub",
    bech32PrefixConsAddr: "osmovalcons",
    bech32PrefixConsPub: "osmovalconspub"
  },
  chainName: "osmosis",
  feeCurrencies: [
    {
      coinDenom: "osmo",
      coinMinimalDenom: "uosmo",
      coinDecimals: 6,
      coinGeckoId: "osmosis",
      gasPriceStep: {
        low: 0.0025,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "osmo",
    coinMinimalDenom: "uosmo",
    coinDecimals: 6,
    coinGeckoId: "osmosis"
  },
  bip44: {
    coinType: 118
  }
});
export const panacea = defineChainInfo({
  chainId: "panacea-3",
  currencies: [
    {
      coinDenom: "med",
      coinMinimalDenom: "umed",
      coinDecimals: 6,
      coinGeckoId: "medibloc"
    }
  ],
  rest: "https://api.gopanacea.org",
  rpc: "https://rpc.gopanacea.org",
  bech32Config: {
    bech32PrefixAccAddr: "panacea",
    bech32PrefixAccPub: "panaceapub",
    bech32PrefixValAddr: "panaceavaloper",
    bech32PrefixValPub: "panaceavaloperpub",
    bech32PrefixConsAddr: "panaceavalcons",
    bech32PrefixConsPub: "panaceavalconspub"
  },
  chainName: "panacea",
  feeCurrencies: [
    {
      coinDenom: "med",
      coinMinimalDenom: "umed",
      coinDecimals: 6,
      coinGeckoId: "medibloc",
      gasPriceStep: {
        low: 5,
        average: 7,
        high: 9
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "med",
    coinMinimalDenom: "umed",
    coinDecimals: 6,
    coinGeckoId: "medibloc"
  },
  bip44: {
    coinType: 371
  }
});
export const passage = defineChainInfo({
  chainId: "passage-2",
  currencies: [
    {
      coinDenom: "pasg",
      coinMinimalDenom: "upasg",
      coinDecimals: 6,
      coinGeckoId: "passage"
    }
  ],
  rest: "https://api.passage.vitwit.com",
  rpc: "https://rpc.passage.vitwit.com",
  bech32Config: {
    bech32PrefixAccAddr: "pasg",
    bech32PrefixAccPub: "pasgpub",
    bech32PrefixValAddr: "pasgvaloper",
    bech32PrefixValPub: "pasgvaloperpub",
    bech32PrefixConsAddr: "pasgvalcons",
    bech32PrefixConsPub: "pasgvalconspub"
  },
  chainName: "passage",
  feeCurrencies: [
    {
      coinDenom: "pasg",
      coinMinimalDenom: "upasg",
      coinDecimals: 6,
      coinGeckoId: "passage",
      gasPriceStep: {
        low: 0.001,
        average: 0.0025,
        high: 0.01
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "pasg",
    coinMinimalDenom: "upasg",
    coinDecimals: 6,
    coinGeckoId: "passage"
  },
  bip44: {
    coinType: 118
  }
});
export const persistence = defineChainInfo({
  chainId: "core-1",
  currencies: [
    {
      coinDenom: "xprt",
      coinMinimalDenom: "uxprt",
      coinDecimals: 6,
      coinGeckoId: "persistence"
    },
    {
      coinDenom: "stkatom",
      coinMinimalDenom: "stk/uatom",
      coinDecimals: 6,
      coinGeckoId: "stkatom"
    },
    {
      coinDenom: "pstake",
      coinMinimalDenom: "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
      coinDecimals: 18
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA",
      coinDecimals: 6
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "ibc/C559977F5797BDC1D74C0836A10C379C991D664166CB60D776A83029852431B4",
      coinDecimals: 6
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/B3792E4A62DF4A934EF2DF5968556DB56F5776ED25BDE11188A4F58A7DD406F0",
      coinDecimals: 6
    },
    {
      coinDenom: "dydx",
      coinMinimalDenom: "ibc/23DC3FF0E4CBB53A1915E4C62507CB7796956E84C68CA49707787CB8BDE90A1E",
      coinDecimals: 18
    },
    {
      coinDenom: "stkosmo",
      coinMinimalDenom: "stk/uosmo",
      coinDecimals: 6,
      coinGeckoId: "pstake-staked-osmo"
    },
    {
      coinDenom: "stkdydx",
      coinMinimalDenom: "stk/adydx",
      coinDecimals: 18
    },
    {
      coinDenom: "stkstars",
      coinMinimalDenom: "stk/ustars",
      coinDecimals: 6
    },
    {
      coinDenom: "stars",
      coinMinimalDenom: "ibc/AD8E1D4AC4EA8FC79CC46E33319A3791477D4DEBFC30D5D874074B993422B41B",
      coinDecimals: 6
    },
    {
      coinDenom: "shd",
      coinMinimalDenom: "ibc/5D3B6445EA1D7064C4B1CCB588638589529556E1BCBADF13475021B42EA8C73B",
      coinDecimals: 8
    },
    {
      coinDenom: "stkhuahua",
      coinMinimalDenom: "stk/uhuahua",
      coinDecimals: 6
    },
    {
      coinDenom: "huahua",
      coinMinimalDenom: "ibc/B597D779FCDD9021263C98A48F1AFA9D2BCCCE980F397CDE5681CCEDE7DEE1A4",
      coinDecimals: 6
    },
    {
      coinDenom: "stkxprt",
      coinMinimalDenom: "stk/uxprt",
      coinDecimals: 6
    },
    {
      coinDenom: "wbtc",
      coinMinimalDenom: "ibc/CCA9F9B22D39884C09975D45E1869B73A12B87080EE53CB44905CE2C422CA228",
      coinDecimals: 8
    }
  ],
  rest: "https://rest.core.persistence.one",
  rpc: "https://rpc.core.persistence.one",
  bech32Config: {
    bech32PrefixAccAddr: "persistence",
    bech32PrefixAccPub: "persistencepub",
    bech32PrefixValAddr: "persistencevaloper",
    bech32PrefixValPub: "persistencevaloperpub",
    bech32PrefixConsAddr: "persistencevalcons",
    bech32PrefixConsPub: "persistencevalconspub"
  },
  chainName: "persistence",
  feeCurrencies: [
    {
      coinDenom: "xprt",
      coinMinimalDenom: "uxprt",
      coinDecimals: 6,
      coinGeckoId: "persistence"
    }
  ],
  stakeCurrency: {
    coinDenom: "xprt",
    coinMinimalDenom: "uxprt",
    coinDecimals: 6,
    coinGeckoId: "persistence"
  },
  bip44: {
    coinType: 118
  }
});
export const planq = defineChainInfo({
  chainId: "planq_7070-2",
  currencies: [
    {
      coinDenom: "planq",
      coinMinimalDenom: "aplanq",
      coinDecimals: 18,
      coinGeckoId: "planq"
    },
    {
      coinDenom: "srcx",
      coinMinimalDenom: "erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09",
      coinDecimals: 9
    },
    {
      coinDenom: "meme",
      coinMinimalDenom: "ibc/747FF58D3F211497581252CEBE11D7E785FC1E53AC5C29497A361E3830F1AF4A",
      coinDecimals: 6
    }
  ],
  rest: "https://rest.planq.network",
  rpc: "https://rpc.planq.network",
  bech32Config: {
    bech32PrefixAccAddr: "plq",
    bech32PrefixAccPub: "plqpub",
    bech32PrefixValAddr: "plqvaloper",
    bech32PrefixValPub: "plqvaloperpub",
    bech32PrefixConsAddr: "plqvalcons",
    bech32PrefixConsPub: "plqvalconspub"
  },
  chainName: "planq",
  feeCurrencies: [
    {
      coinDenom: "planq",
      coinMinimalDenom: "aplanq",
      coinDecimals: 18,
      coinGeckoId: "planq",
      gasPriceStep: {
        low: 30000000000,
        average: 35000000000,
        high: 40000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "planq",
    coinMinimalDenom: "aplanq",
    coinDecimals: 18,
    coinGeckoId: "planq"
  },
  bip44: {
    coinType: 60
  }
});
export const point = defineChainInfo({
  chainId: "point_10687-1",
  currencies: [
    {
      coinDenom: "point",
      coinMinimalDenom: "apoint",
      coinDecimals: 18,
      coinGeckoId: "point-network"
    }
  ],
  rest: "https://rpc-mainnet-1.point.space:1317",
  rpc: "https://rpc-mainnet-1.point.space:26657",
  bech32Config: {
    bech32PrefixAccAddr: "point",
    bech32PrefixAccPub: "pointpub",
    bech32PrefixValAddr: "pointvaloper",
    bech32PrefixValPub: "pointvaloperpub",
    bech32PrefixConsAddr: "pointvalcons",
    bech32PrefixConsPub: "pointvalconspub"
  },
  chainName: "point",
  feeCurrencies: [
    {
      coinDenom: "point",
      coinMinimalDenom: "apoint",
      coinDecimals: 18,
      coinGeckoId: "point-network",
      gasPriceStep: {
        low: 5000000000,
        average: 25000000000,
        high: 40000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "point",
    coinMinimalDenom: "apoint",
    coinDecimals: 18,
    coinGeckoId: "point-network"
  },
  bip44: {
    coinType: 60
  }
});
export const provenance = defineChainInfo({
  chainId: "pio-mainnet-1",
  currencies: [
    {
      coinDenom: "hash",
      coinMinimalDenom: "nhash",
      coinDecimals: 9,
      coinGeckoId: "provenance-blockchain"
    }
  ],
  rest: "https://api-provenance.takeshi.team",
  rpc: "https://rpc-provenance.takeshi.team/",
  bech32Config: {
    bech32PrefixAccAddr: "pb",
    bech32PrefixAccPub: "pbpub",
    bech32PrefixValAddr: "pbvaloper",
    bech32PrefixValPub: "pbvaloperpub",
    bech32PrefixConsAddr: "pbvalcons",
    bech32PrefixConsPub: "pbvalconspub"
  },
  chainName: "provenance",
  feeCurrencies: [
    {
      coinDenom: "hash",
      coinMinimalDenom: "nhash",
      coinDecimals: 9,
      coinGeckoId: "provenance-blockchain",
      gasPriceStep: {
        low: 1905,
        average: 2100,
        high: 2500
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "hash",
    coinMinimalDenom: "nhash",
    coinDecimals: 9,
    coinGeckoId: "provenance-blockchain"
  },
  bip44: {
    coinType: 505
  }
});
export const pryzm = defineChainInfo({
  chainId: "pryzm-1",
  currencies: [
    {
      coinDenom: "pryzm",
      coinMinimalDenom: "upryzm",
      coinDecimals: 6
    },
    {
      coinDenom: "auuu",
      coinMinimalDenom: "factory/pryzm1jnhcsa5ddjsjq2t97v6a82z542rduxvtw6wd9h/uauuu",
      coinDecimals: 6
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
      coinDecimals: 6,
      coinGeckoId: "cosmos"
    },
    {
      coinDenom: "INJ",
      coinMinimalDenom: "ibc/DE63D8AC34B752FB7D4CAA7594145EDE1C9FC256AC6D4043D0F12310EB8FC255",
      coinDecimals: 18,
      coinGeckoId: "injective-protocol"
    },
    {
      coinDenom: "osmo",
      coinMinimalDenom: "ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B",
      coinDecimals: 6,
      coinGeckoId: "osmosis"
    },
    {
      coinDenom: "tia",
      coinMinimalDenom: "ibc/BF28D9C17E0306B194D50F51C3B2590BEAD15E04E03ADD34C3A26E62D85C9676",
      coinDecimals: 6,
      coinGeckoId: "celestia"
    },
    {
      coinDenom: "luna",
      coinMinimalDenom: "ibc/B8AF5D92165F35AB31F3FC7C7B444B9D240760FA5D406C49D24862BD0284E395",
      coinDecimals: 6,
      coinGeckoId: "terra-luna-2"
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/BFAAB7870A9AAABF64A7366DAAA0B8E5065EAA1FCE762F45677DC24BE796EF65",
      coinDecimals: 6,
      coinGeckoId: "usd-coin"
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/B9E4FD154C92D3A23BEA029906C4C5FF2FE74CB7E3A058290B77197A263CF88B",
      coinDecimals: 6,
      coinGeckoId: "axlusdc"
    },
    {
      coinDenom: "dydx",
      coinMinimalDenom: "ibc/F8CA5236869F819BC006EEF088E67889A26E4140339757878F0F4E229CDDA858",
      coinDecimals: 18,
      coinGeckoId: "dydx-chain"
    },
    {
      coinDenom: "stTIA",
      coinMinimalDenom: "ibc/FA78980867B7E87F382CDA00275C55DDC248CABC7DEE27AC6868CCF97DD5E02F",
      coinDecimals: 6
    },
    {
      coinDenom: "stDYDX",
      coinMinimalDenom: "ibc/120DC39B61CC121E91525C1D51624E41BBE74C537D7B0BE50BBFF9A00E37B6EE",
      coinDecimals: 18
    },
    {
      coinDenom: "dATOM",
      coinMinimalDenom: "ibc/EA6E1E8BA2EB9F681C4BD12C8C81A46530A62934F2BD561B120A00F46946CE87",
      coinDecimals: 6
    },
    {
      coinDenom: "catom",
      coinMinimalDenom: "c:uatom",
      coinDecimals: 6
    },
    {
      coinDenom: "cINJ",
      coinMinimalDenom: "c:inj",
      coinDecimals: 6
    },
    {
      coinDenom: "cosmo",
      coinMinimalDenom: "c:uosmo",
      coinDecimals: 6
    },
    {
      coinDenom: "cluna",
      coinMinimalDenom: "c:uluna",
      coinDecimals: 6
    },
    {
      coinDenom: "cauuu",
      coinMinimalDenom: "factory/pryzm1qg5ega6dykkxc307y25pecuufrjkxkaggkkxh7nad0vhyhtuhw3sk0s70x/cuauuu",
      coinDecimals: 6
    },
    {
      coinDenom: "pATOM30Sep2024",
      coinMinimalDenom: "p:uatom:30Sep2024",
      coinDecimals: 6
    },
    {
      coinDenom: "pATOM31Dec2024",
      coinMinimalDenom: "p:uatom:31Dec2024",
      coinDecimals: 6
    },
    {
      coinDenom: "pATOM31Dec2025",
      coinMinimalDenom: "p:uatom:31Dec2025",
      coinDecimals: 6
    },
    {
      coinDenom: "pOSMO30Sep2024",
      coinMinimalDenom: "p:uosmo:30Sep2024",
      coinDecimals: 6
    },
    {
      coinDenom: "pOSMO31Dec2024",
      coinMinimalDenom: "p:uosmo:31Dec2024",
      coinDecimals: 6
    },
    {
      coinDenom: "pOSMO31Dec2025",
      coinMinimalDenom: "p:uosmo:31Dec2025",
      coinDecimals: 6
    },
    {
      coinDenom: "pINJ30Sep2024",
      coinMinimalDenom: "p:inj:30Sep2024",
      coinDecimals: 6
    },
    {
      coinDenom: "pINJ31Dec2024",
      coinMinimalDenom: "p:inj:31Dec2024",
      coinDecimals: 6
    },
    {
      coinDenom: "pINJ31Dec2025",
      coinMinimalDenom: "p:inj:31Dec2025",
      coinDecimals: 6
    },
    {
      coinDenom: "pLUNA30Sep2024",
      coinMinimalDenom: "p:uluna:30Sep2024",
      coinDecimals: 6
    },
    {
      coinDenom: "pLUNA31Dec2024",
      coinMinimalDenom: "p:uluna:31Dec2024",
      coinDecimals: 6
    },
    {
      coinDenom: "pLUNA31Dec2025",
      coinMinimalDenom: "p:uluna:31Dec2025",
      coinDecimals: 6
    },
    {
      coinDenom: "pAUUU30Sep2024",
      coinMinimalDenom: "p:uauuu:30Sep2024",
      coinDecimals: 6
    },
    {
      coinDenom: "pAUUU31Dec2024",
      coinMinimalDenom: "p:uauuu:31Dec2024",
      coinDecimals: 6
    },
    {
      coinDenom: "pAUUU31Dec2025",
      coinMinimalDenom: "p:uauuu:31Dec2025",
      coinDecimals: 6
    },
    {
      coinDenom: "pstTIA30Sep2024",
      coinMinimalDenom: "p:stutia:30Sep2024",
      coinDecimals: 6
    },
    {
      coinDenom: "pstTIA31Dec2024",
      coinMinimalDenom: "p:stutia:31Dec2024",
      coinDecimals: 6
    },
    {
      coinDenom: "pstTIA31Dec2025",
      coinMinimalDenom: "p:stutia:31Dec2025",
      coinDecimals: 6
    },
    {
      coinDenom: "pstDYDX30Sep2024",
      coinMinimalDenom: "p:stadydx:30Sep2024",
      coinDecimals: 18
    },
    {
      coinDenom: "pstDYDX31Dec2024",
      coinMinimalDenom: "p:stadydx:31Dec2024",
      coinDecimals: 18
    },
    {
      coinDenom: "pstDYDX31Dec2025",
      coinMinimalDenom: "p:stadydx:31Dec2025",
      coinDecimals: 18
    },
    {
      coinDenom: "pdATOM31Dec2024",
      coinMinimalDenom: "p:udatom:31Dec2024",
      coinDecimals: 6
    },
    {
      coinDenom: "pdATOM30Jun2025",
      coinMinimalDenom: "p:udatom:30Jun2025",
      coinDecimals: 6
    },
    {
      coinDenom: "pdATOM31Dec2025",
      coinMinimalDenom: "p:udatom:31Dec2025",
      coinDecimals: 6
    },
    {
      coinDenom: "yATOM30Sep2024",
      coinMinimalDenom: "y:uatom:30Sep2024",
      coinDecimals: 6
    },
    {
      coinDenom: "yATOM31Dec2024",
      coinMinimalDenom: "y:uatom:31Dec2024",
      coinDecimals: 6
    },
    {
      coinDenom: "yATOM31Dec2025",
      coinMinimalDenom: "y:uatom:31Dec2025",
      coinDecimals: 6
    },
    {
      coinDenom: "yOSMO30Sep2024",
      coinMinimalDenom: "y:uosmo:30Sep2024",
      coinDecimals: 6
    },
    {
      coinDenom: "yOSMO31Dec2024",
      coinMinimalDenom: "y:uosmo:31Dec2024",
      coinDecimals: 6
    },
    {
      coinDenom: "yOSMO31Dec2025",
      coinMinimalDenom: "y:uosmo:31Dec2025",
      coinDecimals: 6
    },
    {
      coinDenom: "yINJ30Sep2024",
      coinMinimalDenom: "y:inj:30Sep2024",
      coinDecimals: 6
    },
    {
      coinDenom: "yINJ31Dec2024",
      coinMinimalDenom: "y:inj:31Dec2024",
      coinDecimals: 6
    },
    {
      coinDenom: "yINJ31Dec2025",
      coinMinimalDenom: "y:inj:31Dec2025",
      coinDecimals: 6
    },
    {
      coinDenom: "yLUNA30Sep2024",
      coinMinimalDenom: "y:uluna:30Sep2024",
      coinDecimals: 6
    },
    {
      coinDenom: "yLUNA31Dec2024",
      coinMinimalDenom: "y:uluna:31Dec2024",
      coinDecimals: 6
    },
    {
      coinDenom: "yLUNA31Dec2025",
      coinMinimalDenom: "y:uluna:31Dec2025",
      coinDecimals: 6
    },
    {
      coinDenom: "yAUUU30Sep2024",
      coinMinimalDenom: "y:uauuu:30Sep2024",
      coinDecimals: 6
    },
    {
      coinDenom: "yAUUU31Dec2024",
      coinMinimalDenom: "y:uauuu:31Dec2024",
      coinDecimals: 6
    },
    {
      coinDenom: "yAUUU31Dec2025",
      coinMinimalDenom: "y:uauuu:31Dec2025",
      coinDecimals: 6
    },
    {
      coinDenom: "ystTIA30Sep2024",
      coinMinimalDenom: "y:stutia:30Sep2024",
      coinDecimals: 6
    },
    {
      coinDenom: "ystTIA31Dec2024",
      coinMinimalDenom: "y:stutia:31Dec2024",
      coinDecimals: 6
    },
    {
      coinDenom: "ystTIA31Dec2025",
      coinMinimalDenom: "y:stutia:31Dec2025",
      coinDecimals: 6
    },
    {
      coinDenom: "ystDYDX30Sep2024",
      coinMinimalDenom: "y:stadydx:30Sep2024",
      coinDecimals: 6
    },
    {
      coinDenom: "ystDYDX31Dec2024",
      coinMinimalDenom: "y:stadydx:31Dec2024",
      coinDecimals: 6
    },
    {
      coinDenom: "ystDYDX31Dec2025",
      coinMinimalDenom: "y:stadydx:31Dec2025",
      coinDecimals: 6
    },
    {
      coinDenom: "ydATOM31Dec2024",
      coinMinimalDenom: "y:udatom:31Dec2024",
      coinDecimals: 6
    },
    {
      coinDenom: "ydATOM30Jun2025",
      coinMinimalDenom: "y:udatom:30Jun2025",
      coinDecimals: 6
    },
    {
      coinDenom: "ydATOM31Dec2025",
      coinMinimalDenom: "y:udatom:31Dec2025",
      coinDecimals: 6
    },
    {
      coinDenom: "lp:6:usdc.axl-usdc",
      coinMinimalDenom: "lp:6:uusdc.axl-uusdc",
      coinDecimals: 6
    },
    {
      coinDenom: "lp:0:atom",
      coinMinimalDenom: "lp:0:uatom",
      coinDecimals: 6
    },
    {
      coinDenom: "lp:2:atomypt-atom",
      coinMinimalDenom: "lp:2:uatomypt-uatom",
      coinDecimals: 6
    },
    {
      coinDenom: "lp:3:atom-usdc",
      coinMinimalDenom: "lp:3:uatom-uusdc",
      coinDecimals: 6
    },
    {
      coinDenom: "lp:1:INJ",
      coinMinimalDenom: "lp:1:inj",
      coinDecimals: 6
    },
    {
      coinDenom: "lp:4:INJypt-INJ",
      coinMinimalDenom: "lp:4:injypt-inj",
      coinDecimals: 6
    },
    {
      coinDenom: "lp:5:INJ-usdc",
      coinMinimalDenom: "lp:5:inj-uusdc",
      coinDecimals: 18
    },
    {
      coinDenom: "lp:8:osmo",
      coinMinimalDenom: "lp:8:uosmo",
      coinDecimals: 6
    },
    {
      coinDenom: "lp:10:osmoypt-osmo",
      coinMinimalDenom: "lp:10:uosmoypt-uosmo",
      coinDecimals: 6
    },
    {
      coinDenom: "lp:11:osmo-usdc",
      coinMinimalDenom: "lp:11:uosmo-uusdc",
      coinDecimals: 6
    },
    {
      coinDenom: "lp:9:luna",
      coinMinimalDenom: "lp:9:uluna",
      coinDecimals: 6
    },
    {
      coinDenom: "lp:12:lunaypt-luna",
      coinMinimalDenom: "lp:12:ulunaypt-uluna",
      coinDecimals: 6
    },
    {
      coinDenom: "lp:13:luna-usdc",
      coinMinimalDenom: "lp:13:uluna-uusdc",
      coinDecimals: 6
    },
    {
      coinDenom: "lp:14:auuu",
      coinMinimalDenom: "lp:14:uauuu",
      coinDecimals: 6
    },
    {
      coinDenom: "lp:17:auuuypt-auuu",
      coinMinimalDenom: "lp:17:uauuuypt-uauuu",
      coinDecimals: 6
    },
    {
      coinDenom: "lp:7:auuu-usdc",
      coinMinimalDenom: "lp:7:uauuu-uusdc",
      coinDecimals: 6
    },
    {
      coinDenom: "lp:15:stdydx",
      coinMinimalDenom: "lp:15:stadydx",
      coinDecimals: 18
    },
    {
      coinDenom: "lp:18:stdydxypt-dydx",
      coinMinimalDenom: "lp:18:stadydxypt-adydx",
      coinDecimals: 18
    },
    {
      coinDenom: "lp:19:dydx-usdc",
      coinMinimalDenom: "lp:19:adydx-uusdc",
      coinDecimals: 18
    },
    {
      coinDenom: "lp:16:sttia",
      coinMinimalDenom: "lp:16:stutia",
      coinDecimals: 6
    },
    {
      coinDenom: "lp:20:sttiaypt-tia",
      coinMinimalDenom: "lp:20:stutiaypt-utia",
      coinDecimals: 6
    },
    {
      coinDenom: "lp:21:tia-usdc",
      coinMinimalDenom: "lp:21:utia-uusdc",
      coinDecimals: 6
    },
    {
      coinDenom: "lp:22:datom",
      coinMinimalDenom: "lp:22:udatom",
      coinDecimals: 6
    },
    {
      coinDenom: "lp:23:datomypt-atom",
      coinMinimalDenom: "lp:23:udatomypt-uatom",
      coinDecimals: 6
    }
  ],
  rest: "https://api.pryzm.zone",
  rpc: "https://rpc.pryzm.zone",
  bech32Config: {
    bech32PrefixAccAddr: "pryzm",
    bech32PrefixAccPub: "pryzmpub",
    bech32PrefixValAddr: "pryzmvaloper",
    bech32PrefixValPub: "pryzmvaloperpub",
    bech32PrefixConsAddr: "pryzmvalcons",
    bech32PrefixConsPub: "pryzmvalconspub"
  },
  chainName: "pryzm",
  feeCurrencies: [
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
      coinDecimals: 6,
      coinGeckoId: "cosmos",
      gasPriceStep: {
        low: 0.0025,
        average: 0.003,
        high: 0.004
      }
    },
    {
      coinDenom: "INJ",
      coinMinimalDenom: "ibc/DE63D8AC34B752FB7D4CAA7594145EDE1C9FC256AC6D4043D0F12310EB8FC255",
      coinDecimals: 18,
      coinGeckoId: "injective-protocol",
      gasPriceStep: {
        low: 500000000,
        average: 600000000,
        high: 700000000
      }
    },
    {
      coinDenom: "osmo",
      coinMinimalDenom: "ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B",
      coinDecimals: 6,
      coinGeckoId: "osmosis",
      gasPriceStep: {
        low: 0.025,
        average: 0.03,
        high: 0.04
      }
    },
    {
      coinDenom: "tia",
      coinMinimalDenom: "ibc/BF28D9C17E0306B194D50F51C3B2590BEAD15E04E03ADD34C3A26E62D85C9676",
      coinDecimals: 6,
      coinGeckoId: "celestia",
      gasPriceStep: {
        low: 0.002,
        average: 0.003,
        high: 0.004
      }
    },
    {
      coinDenom: "luna",
      coinMinimalDenom: "ibc/B8AF5D92165F35AB31F3FC7C7B444B9D240760FA5D406C49D24862BD0284E395",
      coinDecimals: 6,
      coinGeckoId: "terra-luna-2",
      gasPriceStep: {
        low: 0.015,
        average: 0.02,
        high: 0.03
      }
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/BFAAB7870A9AAABF64A7366DAAA0B8E5065EAA1FCE762F45677DC24BE796EF65",
      coinDecimals: 6,
      coinGeckoId: "usd-coin",
      gasPriceStep: {
        low: 0.02,
        average: 0.03,
        high: 0.04
      }
    },
    {
      coinDenom: "auuu",
      coinMinimalDenom: "factory/pryzm1jnhcsa5ddjsjq2t97v6a82z542rduxvtw6wd9h/uauuu",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.015,
        high: 0.02
      }
    },
    {
      coinDenom: "dydx",
      coinMinimalDenom: "ibc/F8CA5236869F819BC006EEF088E67889A26E4140339757878F0F4E229CDDA858",
      coinDecimals: 18,
      coinGeckoId: "dydx-chain",
      gasPriceStep: {
        low: 10000000000,
        average: 12000000000,
        high: 14000000000
      }
    },
    {
      coinDenom: "stTIA",
      coinMinimalDenom: "ibc/FA78980867B7E87F382CDA00275C55DDC248CABC7DEE27AC6868CCF97DD5E02F",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.002,
        average: 0.003,
        high: 0.004
      }
    },
    {
      coinDenom: "stDYDX",
      coinMinimalDenom: "ibc/120DC39B61CC121E91525C1D51624E41BBE74C537D7B0BE50BBFF9A00E37B6EE",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 10000000000,
        average: 12000000000,
        high: 14000000000
      }
    },
    {
      coinDenom: "dATOM",
      coinMinimalDenom: "ibc/EA6E1E8BA2EB9F681C4BD12C8C81A46530A62934F2BD561B120A00F46946CE87",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0025,
        average: 0.003,
        high: 0.004
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "pryzm",
    coinMinimalDenom: "upryzm",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const pundix = defineChainInfo({
  chainId: "PUNDIX",
  currencies: [
    {
      coinDenom: "PUNDIX",
      coinMinimalDenom: "ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78",
      coinDecimals: 18
    },
    {
      coinDenom: "PURSE",
      coinMinimalDenom: "bsc0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C",
      coinDecimals: 18
    }
  ],
  rest: "https://px-rest.pundix.com",
  rpc: "https://px-json.pundix.com",
  bech32Config: {
    bech32PrefixAccAddr: "px",
    bech32PrefixAccPub: "pxpub",
    bech32PrefixValAddr: "pxvaloper",
    bech32PrefixValPub: "pxvaloperpub",
    bech32PrefixConsAddr: "pxvalcons",
    bech32PrefixConsPub: "pxvalconspub"
  },
  chainName: "pundix",
  feeCurrencies: [
    {
      coinDenom: "PUNDIX",
      coinMinimalDenom: "ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 2000000000000,
        average: 2500000000000,
        high: 3000000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "PUNDIX",
    coinMinimalDenom: "ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78",
    coinDecimals: 18
  },
  bip44: {
    coinType: 118
  }
});
export const pylons = defineChainInfo({
  chainId: "pylons-mainnet-1",
  currencies: [
    {
      coinDenom: "rock",
      coinMinimalDenom: "ubedrock",
      coinDecimals: 6
    }
  ],
  rest: "https://rest.nodejumper.io/pylons",
  rpc: "https://rpc.nodejumper.io:443/pylons",
  bech32Config: {
    bech32PrefixAccAddr: "pylo",
    bech32PrefixAccPub: "pylopub",
    bech32PrefixValAddr: "pylovaloper",
    bech32PrefixValPub: "pylovaloperpub",
    bech32PrefixConsAddr: "pylovalcons",
    bech32PrefixConsPub: "pylovalconspub"
  },
  chainName: "pylons",
  feeCurrencies: [
    {
      coinDenom: "rock",
      coinMinimalDenom: "ubedrock",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "rock",
    coinMinimalDenom: "ubedrock",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const qfs = defineChainInfo({
  chainId: "qfs-1",
  currencies: [
    {
      coinDenom: "qfs",
      coinMinimalDenom: "qfs",
      coinDecimals: 0
    }
  ],
  rest: "https://lcd.qfsone.com",
  rpc: "https://rcp.qfsone.com",
  bech32Config: {
    bech32PrefixAccAddr: "qfs",
    bech32PrefixAccPub: "qfspub",
    bech32PrefixValAddr: "qfsvaloper",
    bech32PrefixValPub: "qfsvaloperpub",
    bech32PrefixConsAddr: "qfsvalcons",
    bech32PrefixConsPub: "qfsvalconspub"
  },
  chainName: "qfs",
  feeCurrencies: [
    {
      coinDenom: "qfs",
      coinMinimalDenom: "qfs",
      coinDecimals: 0,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.000001,
        average: 0.000005,
        high: 0.0001
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "qfs",
    coinMinimalDenom: "qfs",
    coinDecimals: 0
  },
  bip44: {
    coinType: 1179993431
  }
});
export const quasar = defineChainInfo({
  chainId: "quasar-1",
  currencies: [
    {
      coinDenom: "qsr",
      coinMinimalDenom: "uqsr",
      coinDecimals: 6,
      coinGeckoId: "quasar-2"
    },
    {
      coinDenom: "osmo",
      coinMinimalDenom: "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
      coinDecimals: 6
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/FA0006F056DB6719B8C16C551FC392B62F5729978FC0B125AC9A432DBB2AA1A5",
      coinDecimals: 6
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/FA7775734CC73176B7425910DE001A1D2AD9B6D9E93129A5D0750EAD13E4E63A",
      coinDecimals: 6
    }
  ],
  rest: "https://rest.lavenderfive.com:443/quasar",
  rpc: "https://rpc.lavenderfive.com:443/quasar",
  bech32Config: {
    bech32PrefixAccAddr: "quasar",
    bech32PrefixAccPub: "quasarpub",
    bech32PrefixValAddr: "quasarvaloper",
    bech32PrefixValPub: "quasarvaloperpub",
    bech32PrefixConsAddr: "quasarvalcons",
    bech32PrefixConsPub: "quasarvalconspub"
  },
  chainName: "quasar",
  feeCurrencies: [
    {
      coinDenom: "qsr",
      coinMinimalDenom: "uqsr",
      coinDecimals: 6,
      coinGeckoId: "quasar-2",
      gasPriceStep: {
        low: 0.1,
        average: 0.25,
        high: 0.3
      }
    },
    {
      coinDenom: "osmo",
      coinMinimalDenom: "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03
      }
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/FA0006F056DB6719B8C16C551FC392B62F5729978FC0B125AC9A432DBB2AA1A5",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03
      }
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/FA7775734CC73176B7425910DE001A1D2AD9B6D9E93129A5D0750EAD13E4E63A",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "qsr",
    coinMinimalDenom: "uqsr",
    coinDecimals: 6,
    coinGeckoId: "quasar-2"
  },
  bip44: {
    coinType: 118
  }
});
export const quicksilver = defineChainInfo({
  chainId: "quicksilver-2",
  currencies: [
    {
      coinDenom: "qck",
      coinMinimalDenom: "uqck",
      coinDecimals: 6,
      coinGeckoId: "quicksilver"
    },
    {
      coinDenom: "qstars",
      coinMinimalDenom: "uqstars",
      coinDecimals: 6
    },
    {
      coinDenom: "qatom",
      coinMinimalDenom: "uqatom",
      coinDecimals: 6
    },
    {
      coinDenom: "qregen",
      coinMinimalDenom: "uqregen",
      coinDecimals: 6
    },
    {
      coinDenom: "qosmo",
      coinMinimalDenom: "uqosmo",
      coinDecimals: 6
    },
    {
      coinDenom: "qsomm",
      coinMinimalDenom: "uqsomm",
      coinDecimals: 6
    },
    {
      coinDenom: "qjuno",
      coinMinimalDenom: "uqjuno",
      coinDecimals: 6
    },
    {
      coinDenom: "qdydx",
      coinMinimalDenom: "aqdydx",
      coinDecimals: 18
    },
    {
      coinDenom: "qsaga",
      coinMinimalDenom: "uqsaga",
      coinDecimals: 6
    },
    {
      coinDenom: "qbld",
      coinMinimalDenom: "uqbld",
      coinDecimals: 6
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/5666A86DCC869C75F69A7938AD6DCFECAC4A09C73522599E7A85B10143E5FBD2",
      coinDecimals: 6
    }
  ],
  rest: "https://api-quicksilver.takeshi.team:443",
  rpc: "https://rpc-quicksilver.takeshi.team:443",
  bech32Config: {
    bech32PrefixAccAddr: "quick",
    bech32PrefixAccPub: "quickpub",
    bech32PrefixValAddr: "quickvaloper",
    bech32PrefixValPub: "quickvaloperpub",
    bech32PrefixConsAddr: "quickvalcons",
    bech32PrefixConsPub: "quickvalconspub"
  },
  chainName: "quicksilver",
  feeCurrencies: [
    {
      coinDenom: "qck",
      coinMinimalDenom: "uqck",
      coinDecimals: 6,
      coinGeckoId: "quicksilver",
      gasPriceStep: {
        low: 0.0001,
        average: 0.0001,
        high: 0.00025
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "qck",
    coinMinimalDenom: "uqck",
    coinDecimals: 6,
    coinGeckoId: "quicksilver"
  },
  bip44: {
    coinType: 118
  }
});
export const qwoyn = defineChainInfo({
  chainId: "qwoyn-1",
  currencies: [
    {
      coinDenom: "qwoyn",
      coinMinimalDenom: "uqwoyn",
      coinDecimals: 6,
      coinGeckoId: "qwoyn"
    }
  ],
  rest: "https://rest-qwoyn.theamsolutions.info:443",
  rpc: "https://rpc.qwoyn.studio:443",
  bech32Config: {
    bech32PrefixAccAddr: "qwoyn",
    bech32PrefixAccPub: "qwoynpub",
    bech32PrefixValAddr: "qwoynvaloper",
    bech32PrefixValPub: "qwoynvaloperpub",
    bech32PrefixConsAddr: "qwoynvalcons",
    bech32PrefixConsPub: "qwoynvalconspub"
  },
  chainName: "qwoyn",
  feeCurrencies: [
    {
      coinDenom: "qwoyn",
      coinMinimalDenom: "uqwoyn",
      coinDecimals: 6,
      coinGeckoId: "qwoyn",
      gasPriceStep: {
        low: 0.03,
        average: 0.05,
        high: 0.075
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "qwoyn",
    coinMinimalDenom: "uqwoyn",
    coinDecimals: 6,
    coinGeckoId: "qwoyn"
  },
  bip44: {
    coinType: 118
  }
});
export const realio = defineChainInfo({
  chainId: "realionetwork_3301-1",
  currencies: [
    {
      coinDenom: "rio",
      coinMinimalDenom: "ario",
      coinDecimals: 18,
      coinGeckoId: "realio-network"
    },
    {
      coinDenom: "rst",
      coinMinimalDenom: "arst",
      coinDecimals: 18
    }
  ],
  rest: "https://realio-api.genznodes.dev",
  rpc: "https://realio-rpc.genznodes.dev",
  bech32Config: {
    bech32PrefixAccAddr: "realio",
    bech32PrefixAccPub: "realiopub",
    bech32PrefixValAddr: "realiovaloper",
    bech32PrefixValPub: "realiovaloperpub",
    bech32PrefixConsAddr: "realiovalcons",
    bech32PrefixConsPub: "realiovalconspub"
  },
  chainName: "realio",
  feeCurrencies: [
    {
      coinDenom: "rio",
      coinMinimalDenom: "ario",
      coinDecimals: 18,
      coinGeckoId: "realio-network",
      gasPriceStep: {
        low: 4000000000,
        average: 5000000000,
        high: 8000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "rio",
    coinMinimalDenom: "ario",
    coinDecimals: 18,
    coinGeckoId: "realio-network"
  },
  bip44: {
    coinType: 60
  }
});
export const rebus = defineChainInfo({
  chainId: "reb_1111-1",
  currencies: [
    {
      coinDenom: "rebus",
      coinMinimalDenom: "arebus",
      coinDecimals: 18,
      coinGeckoId: "rebus"
    }
  ],
  rest: "https://api.rebuschain.com:1317/",
  rpc: "https://api.rebuschain.com:26657/",
  bech32Config: {
    bech32PrefixAccAddr: "rebus",
    bech32PrefixAccPub: "rebuspub",
    bech32PrefixValAddr: "rebusvaloper",
    bech32PrefixValPub: "rebusvaloperpub",
    bech32PrefixConsAddr: "rebusvalcons",
    bech32PrefixConsPub: "rebusvalconspub"
  },
  chainName: "rebus",
  feeCurrencies: [
    {
      coinDenom: "rebus",
      coinMinimalDenom: "arebus",
      coinDecimals: 18,
      coinGeckoId: "rebus",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "rebus",
    coinMinimalDenom: "arebus",
    coinDecimals: 18,
    coinGeckoId: "rebus"
  },
  bip44: {
    coinType: 118
  }
});
export const regen = defineChainInfo({
  chainId: "regen-1",
  currencies: [
    {
      coinDenom: "regen",
      coinMinimalDenom: "uregen",
      coinDecimals: 6,
      coinGeckoId: "regen"
    },
    {
      coinDenom: "nct",
      coinMinimalDenom: "eco.uC.NCT",
      coinDecimals: 6,
      coinGeckoId: "toucan-protocol-nature-carbon-tonne"
    }
  ],
  rest: "http://public-rpc.regen.vitwit.com:1317",
  rpc: "https://rpc-regen.ecostake.com",
  bech32Config: {
    bech32PrefixAccAddr: "regen",
    bech32PrefixAccPub: "regenpub",
    bech32PrefixValAddr: "regenvaloper",
    bech32PrefixValPub: "regenvaloperpub",
    bech32PrefixConsAddr: "regenvalcons",
    bech32PrefixConsPub: "regenvalconspub"
  },
  chainName: "regen",
  feeCurrencies: [
    {
      coinDenom: "regen",
      coinMinimalDenom: "uregen",
      coinDecimals: 6,
      coinGeckoId: "regen",
      gasPriceStep: {
        low: 0.015,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "regen",
    coinMinimalDenom: "uregen",
    coinDecimals: 6,
    coinGeckoId: "regen"
  },
  bip44: {
    coinType: 118
  }
});
export const rizon = defineChainInfo({
  chainId: "titan-1",
  currencies: [
    {
      coinDenom: "atolo",
      coinMinimalDenom: "uatolo",
      coinDecimals: 6,
      coinGeckoId: "rizon"
    }
  ],
  rest: "https://restapi.rizon.world/",
  rpc: "https://rpcapi.rizon.world/",
  bech32Config: {
    bech32PrefixAccAddr: "rizon",
    bech32PrefixAccPub: "rizonpub",
    bech32PrefixValAddr: "rizonvaloper",
    bech32PrefixValPub: "rizonvaloperpub",
    bech32PrefixConsAddr: "rizonvalcons",
    bech32PrefixConsPub: "rizonvalconspub"
  },
  chainName: "rizon",
  feeCurrencies: [
    {
      coinDenom: "atolo",
      coinMinimalDenom: "uatolo",
      coinDecimals: 6,
      coinGeckoId: "rizon",
      gasPriceStep: {
        low: 0.025,
        average: 0.025,
        high: 0.035
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "atolo",
    coinMinimalDenom: "uatolo",
    coinDecimals: 6,
    coinGeckoId: "rizon"
  },
  bip44: {
    coinType: 118
  }
});
export const routerchain = defineChainInfo({
  chainId: "router_9600-1",
  currencies: [
    {
      coinDenom: "ROUTE",
      coinMinimalDenom: "route",
      coinDecimals: 18,
      coinGeckoId: "router-protocol-2"
    }
  ],
  rest: "https://sentry.lcd.routerprotocol.com/",
  rpc: "https://sentry.tm.rpc.routerprotocol.com/",
  bech32Config: {
    bech32PrefixAccAddr: "router",
    bech32PrefixAccPub: "routerpub",
    bech32PrefixValAddr: "routervaloper",
    bech32PrefixValPub: "routervaloperpub",
    bech32PrefixConsAddr: "routervalcons",
    bech32PrefixConsPub: "routervalconspub"
  },
  chainName: "routerchain",
  feeCurrencies: [
    {
      coinDenom: "ROUTE",
      coinMinimalDenom: "route",
      coinDecimals: 18,
      coinGeckoId: "router-protocol-2",
      gasPriceStep: {
        low: 7,
        average: 7,
        high: 10
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "ROUTE",
    coinMinimalDenom: "route",
    coinDecimals: 18,
    coinGeckoId: "router-protocol-2"
  },
  bip44: {
    coinType: 60
  }
});
export const saga = defineChainInfo({
  chainId: "ssc-1",
  currencies: [
    {
      coinDenom: "saga",
      coinMinimalDenom: "usaga",
      coinDecimals: 6,
      coinGeckoId: "saga-2"
    }
  ],
  rest: "https://saga-mainnet-lcd.autostake.com:443",
  rpc: "https://rpc-saga.keplr.app",
  bech32Config: {
    bech32PrefixAccAddr: "saga",
    bech32PrefixAccPub: "sagapub",
    bech32PrefixValAddr: "sagavaloper",
    bech32PrefixValPub: "sagavaloperpub",
    bech32PrefixConsAddr: "sagavalcons",
    bech32PrefixConsPub: "sagavalconspub"
  },
  chainName: "saga",
  feeCurrencies: [
    {
      coinDenom: "saga",
      coinMinimalDenom: "usaga",
      coinDecimals: 6,
      coinGeckoId: "saga-2",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "saga",
    coinMinimalDenom: "usaga",
    coinDecimals: 6,
    coinGeckoId: "saga-2"
  },
  bip44: {
    coinType: 118
  }
});
export const scorum = defineChainInfo({
  chainId: "scorum-1",
  currencies: [
    {
      coinDenom: "scr",
      coinMinimalDenom: "nscr",
      coinDecimals: 9,
      coinGeckoId: "scorum"
    },
    {
      coinDenom: "gas",
      coinMinimalDenom: "gas",
      coinDecimals: 0
    }
  ],
  rest: "https://scorum-blockchain-mainnet-api.scorum.com",
  rpc: "https://scorum-blockchain-mainnet-rpc.scorum.com",
  bech32Config: {
    bech32PrefixAccAddr: "scorum",
    bech32PrefixAccPub: "scorumpub",
    bech32PrefixValAddr: "scorumvaloper",
    bech32PrefixValPub: "scorumvaloperpub",
    bech32PrefixConsAddr: "scorumvalcons",
    bech32PrefixConsPub: "scorumvalconspub"
  },
  chainName: "scorum",
  feeCurrencies: [
    {
      coinDenom: "gas",
      coinMinimalDenom: "gas",
      coinDecimals: 0,
      coinGeckoId: "",
      gasPriceStep: {
        low: 1,
        average: 1,
        high: 1
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "scr",
    coinMinimalDenom: "nscr",
    coinDecimals: 9,
    coinGeckoId: "scorum"
  },
  bip44: {
    coinType: 118
  }
});
export const secretnetwork = defineChainInfo({
  chainId: "secret-4",
  currencies: [
    {
      coinDenom: "scrt",
      coinMinimalDenom: "uscrt",
      coinDecimals: 6,
      coinGeckoId: "secret"
    },
    {
      coinDenom: "sienna",
      coinMinimalDenom: "cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4",
      coinDecimals: 18,
      coinGeckoId: "sienna"
    },
    {
      coinDenom: "shd",
      coinMinimalDenom: "cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d",
      coinDecimals: 8
    },
    {
      coinDenom: "shd",
      coinMinimalDenom: "cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm",
      coinDecimals: 8,
      coinGeckoId: "shade-protocol"
    },
    {
      coinDenom: "silk",
      coinMinimalDenom: "cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd",
      coinDecimals: 6,
      coinGeckoId: "silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2"
    },
    {
      coinDenom: "stkd-scrt",
      coinMinimalDenom: "cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4",
      coinDecimals: 6,
      coinGeckoId: "stkd-scrt"
    },
    {
      coinDenom: "butt",
      coinMinimalDenom: "cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt",
      coinDecimals: 6
    },
    {
      coinDenom: "alter",
      coinMinimalDenom: "cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej",
      coinDecimals: 6,
      coinGeckoId: "alter"
    },
    {
      coinDenom: "amber",
      coinMinimalDenom: "cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852",
      coinDecimals: 6
    },
    {
      coinDenom: "shill",
      coinMinimalDenom: "cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse",
      coinDecimals: 6
    }
  ],
  rest: "https://rest.lavenderfive.com:443/secretnetwork",
  rpc: "https://scrt.public-rpc.com",
  bech32Config: {
    bech32PrefixAccAddr: "secret",
    bech32PrefixAccPub: "secretpub",
    bech32PrefixValAddr: "secretvaloper",
    bech32PrefixValPub: "secretvaloperpub",
    bech32PrefixConsAddr: "secretvalcons",
    bech32PrefixConsPub: "secretvalconspub"
  },
  chainName: "secretnetwork",
  feeCurrencies: [
    {
      coinDenom: "scrt",
      coinMinimalDenom: "uscrt",
      coinDecimals: 6,
      coinGeckoId: "secret",
      gasPriceStep: {
        low: 0.05,
        average: 0.1,
        high: 0.25
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "scrt",
    coinMinimalDenom: "uscrt",
    coinDecimals: 6,
    coinGeckoId: "secret"
  },
  bip44: {
    coinType: 529
  }
});
export const seda = defineChainInfo({
  chainId: "seda-1",
  currencies: [
    {
      coinDenom: "seda",
      coinMinimalDenom: "aseda",
      coinDecimals: 18,
      coinGeckoId: "seda-2"
    }
  ],
  rest: "https://lcd.mainnet.seda.xyz/",
  rpc: "https://rpc.mainnet.seda.xyz/",
  bech32Config: {
    bech32PrefixAccAddr: "seda",
    bech32PrefixAccPub: "sedapub",
    bech32PrefixValAddr: "sedavaloper",
    bech32PrefixValPub: "sedavaloperpub",
    bech32PrefixConsAddr: "sedavalcons",
    bech32PrefixConsPub: "sedavalconspub"
  },
  chainName: "seda",
  feeCurrencies: [
    {
      coinDenom: "seda",
      coinMinimalDenom: "aseda",
      coinDecimals: 18,
      coinGeckoId: "seda-2",
      gasPriceStep: {
        low: 10000000000,
        average: 10000000000,
        high: 14000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "seda",
    coinMinimalDenom: "aseda",
    coinDecimals: 18,
    coinGeckoId: "seda-2"
  },
  bip44: {
    coinType: 118
  }
});
export const sei = defineChainInfo({
  chainId: "pacific-1",
  currencies: [
    {
      coinDenom: "sei",
      coinMinimalDenom: "usei",
      coinDecimals: 6,
      coinGeckoId: "sei-network"
    },
    {
      coinDenom: "oin",
      coinMinimalDenom: "factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN",
      coinDecimals: 6
    },
    {
      coinDenom: "ampSEI",
      coinMinimalDenom: "factory/sei1x2fgaaqecvk8kwuqkjqcj27clw5p5g99uawdzy9sc4rku8avumcq3cky4k/ampSEI",
      coinDecimals: 6
    },
    {
      coinDenom: "popeye",
      coinMinimalDenom: "factory/sei1fl8pg59wfsgw2wp4aruk38zqccfnc2g8ptrm24/popeye",
      coinDecimals: 6
    },
    {
      coinDenom: "sensei",
      coinMinimalDenom: "factory/sei1ta5rkr6y2qlkj7px8w2cvear7m2822q4f4ea0m/sensei",
      coinDecimals: 6
    },
    {
      coinDenom: "WOSMO",
      coinMinimalDenom: "ibc/B023C57727A38A9CF87238F9008477C3761AD4774D528BFA458DD707D90B553A",
      coinDecimals: 6
    },
    {
      coinDenom: "oozaru",
      coinMinimalDenom: "sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda",
      coinDecimals: 6
    },
    {
      coinDenom: "SEIYAN",
      coinMinimalDenom: "cw20:sei1hrndqntlvtmx2kepr0zsfgr7nzjptcc72cr4ppk4yav58vvy7v3s4er8ed",
      coinDecimals: 6
    },
    {
      coinDenom: "astro",
      coinMinimalDenom: "ibc/063F4461F7317CFF10F50AB044E44932D22AAD84FA7107082744946E6DB7B7A8",
      coinDecimals: 6
    }
  ],
  rest: "https://rest.sei-apis.com",
  rpc: "https://rpc.sei-apis.com",
  bech32Config: {
    bech32PrefixAccAddr: "sei",
    bech32PrefixAccPub: "seipub",
    bech32PrefixValAddr: "seivaloper",
    bech32PrefixValPub: "seivaloperpub",
    bech32PrefixConsAddr: "seivalcons",
    bech32PrefixConsPub: "seivalconspub"
  },
  chainName: "sei",
  feeCurrencies: [
    {
      coinDenom: "sei",
      coinMinimalDenom: "usei",
      coinDecimals: 6,
      coinGeckoId: "sei-network",
      gasPriceStep: {
        low: 0.02,
        average: 0.02,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "sei",
    coinMinimalDenom: "usei",
    coinDecimals: 6,
    coinGeckoId: "sei-network"
  },
  bip44: {
    coinType: 118
  }
});
export const self = defineChainInfo({
  chainId: "self-1",
  currencies: [
    {
      coinDenom: "slf",
      coinMinimalDenom: "uslf",
      coinDecimals: 6,
      coinGeckoId: "self-chain"
    }
  ],
  rest: "https://api.selfchain.io",
  rpc: "https://rpc.selfchain.io:26657",
  bech32Config: {
    bech32PrefixAccAddr: "self",
    bech32PrefixAccPub: "selfpub",
    bech32PrefixValAddr: "selfvaloper",
    bech32PrefixValPub: "selfvaloperpub",
    bech32PrefixConsAddr: "selfvalcons",
    bech32PrefixConsPub: "selfvalconspub"
  },
  chainName: "self",
  feeCurrencies: [
    {
      coinDenom: "slf",
      coinMinimalDenom: "uslf",
      coinDecimals: 6,
      coinGeckoId: "self-chain",
      gasPriceStep: {
        low: 0.005,
        average: 0.025,
        high: 0.03
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "slf",
    coinMinimalDenom: "uslf",
    coinDecimals: 6,
    coinGeckoId: "self-chain"
  },
  bip44: {
    coinType: 118
  }
});
export const sentinel = defineChainInfo({
  chainId: "sentinelhub-2",
  currencies: [
    {
      coinDenom: "dvpn",
      coinMinimalDenom: "udvpn",
      coinDecimals: 6,
      coinGeckoId: "sentinel"
    }
  ],
  rest: "https://api-sentinel.busurnode.com",
  rpc: "https://rpc-sentinel.busurnode.com",
  bech32Config: {
    bech32PrefixAccAddr: "sent",
    bech32PrefixAccPub: "sentpub",
    bech32PrefixValAddr: "sentvaloper",
    bech32PrefixValPub: "sentvaloperpub",
    bech32PrefixConsAddr: "sentvalcons",
    bech32PrefixConsPub: "sentvalconspub"
  },
  chainName: "sentinel",
  feeCurrencies: [
    {
      coinDenom: "dvpn",
      coinMinimalDenom: "udvpn",
      coinDecimals: 6,
      coinGeckoId: "sentinel",
      gasPriceStep: {
        low: 0.1,
        average: 0.25,
        high: 0.4
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "dvpn",
    coinMinimalDenom: "udvpn",
    coinDecimals: 6,
    coinGeckoId: "sentinel"
  },
  bip44: {
    coinType: 118
  }
});
export const sge = defineChainInfo({
  chainId: "sgenet-1",
  currencies: [
    {
      coinDenom: "sge",
      coinMinimalDenom: "usge",
      coinDecimals: 6,
      coinGeckoId: "six-sigma"
    }
  ],
  rest: "https://rest.lavenderfive.com:443/sge",
  rpc: "https://rpc.lavenderfive.com:443/sge",
  bech32Config: {
    bech32PrefixAccAddr: "sge",
    bech32PrefixAccPub: "sgepub",
    bech32PrefixValAddr: "sgevaloper",
    bech32PrefixValPub: "sgevaloperpub",
    bech32PrefixConsAddr: "sgevalcons",
    bech32PrefixConsPub: "sgevalconspub"
  },
  chainName: "sge",
  feeCurrencies: [
    {
      coinDenom: "sge",
      coinMinimalDenom: "usge",
      coinDecimals: 6,
      coinGeckoId: "six-sigma",
      gasPriceStep: {
        low: 0.1,
        average: 0.25,
        high: 0.5
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "sge",
    coinMinimalDenom: "usge",
    coinDecimals: 6,
    coinGeckoId: "six-sigma"
  },
  bip44: {
    coinType: 118
  }
});
export const shareledger = defineChainInfo({
  chainId: "ShareRing-VoyagerNet",
  currencies: [
    {
      coinDenom: "shr",
      coinMinimalDenom: "nshr",
      coinDecimals: 9,
      coinGeckoId: "shareledger"
    }
  ],
  rest: "https://lcd.explorer.shareri.ng/",
  rpc: "https://rpc.explorer.shareri.ng",
  bech32Config: {
    bech32PrefixAccAddr: "shareledger",
    bech32PrefixAccPub: "shareledgerpub",
    bech32PrefixValAddr: "shareledgervaloper",
    bech32PrefixValPub: "shareledgervaloperpub",
    bech32PrefixConsAddr: "shareledgervalcons",
    bech32PrefixConsPub: "shareledgervalconspub"
  },
  chainName: "shareledger",
  feeCurrencies: [
    {
      coinDenom: "shr",
      coinMinimalDenom: "nshr",
      coinDecimals: 9,
      coinGeckoId: "shareledger",
      gasPriceStep: {
        low: 2000,
        average: 3000,
        high: 4000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "shr",
    coinMinimalDenom: "nshr",
    coinDecimals: 9,
    coinGeckoId: "shareledger"
  },
  bip44: {
    coinType: 118
  }
});
export const shentu = defineChainInfo({
  chainId: "shentu-2.2",
  currencies: [
    {
      coinDenom: "ctk",
      coinMinimalDenom: "uctk",
      coinDecimals: 6,
      coinGeckoId: "certik"
    }
  ],
  rest: "https://rest.noopsbycertik.com/",
  rpc: "https://shenturpc.noopsbycertik.com/",
  bech32Config: {
    bech32PrefixAccAddr: "shentu",
    bech32PrefixAccPub: "shentupub",
    bech32PrefixValAddr: "shentuvaloper",
    bech32PrefixValPub: "shentuvaloperpub",
    bech32PrefixConsAddr: "shentuvalcons",
    bech32PrefixConsPub: "shentuvalconspub"
  },
  chainName: "shentu",
  feeCurrencies: [
    {
      coinDenom: "ctk",
      coinMinimalDenom: "uctk",
      coinDecimals: 6,
      coinGeckoId: "certik",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "ctk",
    coinMinimalDenom: "uctk",
    coinDecimals: 6,
    coinGeckoId: "certik"
  },
  bip44: {
    coinType: 118
  }
});
export const shido = defineChainInfo({
  chainId: "shido_9008-1",
  currencies: [
    {
      coinDenom: "SHIDO",
      coinMinimalDenom: "shido",
      coinDecimals: 18,
      coinGeckoId: "shido-2"
    }
  ],
  rest: "https://swagger.shidoscan.com",
  rpc: "https://tendermint.shidoscan.com",
  bech32Config: {
    bech32PrefixAccAddr: "shido",
    bech32PrefixAccPub: "shidopub",
    bech32PrefixValAddr: "shidovaloper",
    bech32PrefixValPub: "shidovaloperpub",
    bech32PrefixConsAddr: "shidovalcons",
    bech32PrefixConsPub: "shidovalconspub"
  },
  chainName: "shido",
  feeCurrencies: [
    {
      coinDenom: "SHIDO",
      coinMinimalDenom: "shido",
      coinDecimals: 18,
      coinGeckoId: "shido-2",
      gasPriceStep: {
        low: 20000000000,
        average: 25000000000,
        high: 40000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "SHIDO",
    coinMinimalDenom: "shido",
    coinDecimals: 18,
    coinGeckoId: "shido-2"
  },
  bip44: {
    coinType: 60
  }
});
export const sifchain = defineChainInfo({
  chainId: "sifchain-1",
  currencies: [
    {
      coinDenom: "ROWAN",
      coinMinimalDenom: "rowan",
      coinDecimals: 18,
      coinGeckoId: "sifchain"
    }
  ],
  rest: "https://api-sifchain-ia.cosmosia.notional.ventures/",
  rpc: "https://sifchain-rpc.polkachu.com",
  bech32Config: {
    bech32PrefixAccAddr: "sif",
    bech32PrefixAccPub: "sifpub",
    bech32PrefixValAddr: "sifvaloper",
    bech32PrefixValPub: "sifvaloperpub",
    bech32PrefixConsAddr: "sifvalcons",
    bech32PrefixConsPub: "sifvalconspub"
  },
  chainName: "sifchain",
  feeCurrencies: [
    {
      coinDenom: "ROWAN",
      coinMinimalDenom: "rowan",
      coinDecimals: 18,
      coinGeckoId: "sifchain",
      gasPriceStep: {
        low: 1000000000000,
        average: 1500000000000,
        high: 2000000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "ROWAN",
    coinMinimalDenom: "rowan",
    coinDecimals: 18,
    coinGeckoId: "sifchain"
  },
  bip44: {
    coinType: 118
  }
});
export const six = defineChainInfo({
  chainId: "sixnet",
  currencies: [
    {
      coinDenom: "six",
      coinMinimalDenom: "usix",
      coinDecimals: 6
    }
  ],
  rest: "https://sixnet-api.sixprotocol.net:443",
  rpc: "https://sixnet-rpc.sixprotocol.net:443",
  bech32Config: {
    bech32PrefixAccAddr: "6x",
    bech32PrefixAccPub: "6xpub",
    bech32PrefixValAddr: "6xvaloper",
    bech32PrefixValPub: "6xvaloperpub",
    bech32PrefixConsAddr: "6xvalcons",
    bech32PrefixConsPub: "6xvalconspub"
  },
  chainName: "six",
  feeCurrencies: [
    {
      coinDenom: "six",
      coinMinimalDenom: "usix",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 1.25,
        average: 1.5,
        high: 1.75
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "six",
    coinMinimalDenom: "usix",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const sommelier = defineChainInfo({
  chainId: "sommelier-3",
  currencies: [
    {
      coinDenom: "somm",
      coinMinimalDenom: "usomm",
      coinDecimals: 6,
      coinGeckoId: "sommelier"
    }
  ],
  rest: "https://api-sommelier.pupmos.network",
  rpc: "https://sommelier-rpc.polkachu.com",
  bech32Config: {
    bech32PrefixAccAddr: "somm",
    bech32PrefixAccPub: "sommpub",
    bech32PrefixValAddr: "sommvaloper",
    bech32PrefixValPub: "sommvaloperpub",
    bech32PrefixConsAddr: "sommvalcons",
    bech32PrefixConsPub: "sommvalconspub"
  },
  chainName: "sommelier",
  feeCurrencies: [
    {
      coinDenom: "somm",
      coinMinimalDenom: "usomm",
      coinDecimals: 6,
      coinGeckoId: "sommelier",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "somm",
    coinMinimalDenom: "usomm",
    coinDecimals: 6,
    coinGeckoId: "sommelier"
  },
  bip44: {
    coinType: 118
  }
});
export const source = defineChainInfo({
  chainId: "source-1",
  currencies: [
    {
      coinDenom: "source",
      coinMinimalDenom: "usource",
      coinDecimals: 6,
      coinGeckoId: "source"
    },
    {
      coinDenom: "srcx",
      coinMinimalDenom: "ibc/FC5A7360EEED0713AE3E83E9D55A69AF873056A172AC495890ACE4582FF9685A",
      coinDecimals: 9
    }
  ],
  rest: "https://api.source.nodestake.top",
  rpc: "https://rpc.source.nodestake.top",
  bech32Config: {
    bech32PrefixAccAddr: "source",
    bech32PrefixAccPub: "sourcepub",
    bech32PrefixValAddr: "sourcevaloper",
    bech32PrefixValPub: "sourcevaloperpub",
    bech32PrefixConsAddr: "sourcevalcons",
    bech32PrefixConsPub: "sourcevalconspub"
  },
  chainName: "source",
  feeCurrencies: [
    {
      coinDenom: "source",
      coinMinimalDenom: "usource",
      coinDecimals: 6,
      coinGeckoId: "source",
      gasPriceStep: {
        low: 0.05,
        average: 0.075,
        high: 0.1
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "source",
    coinMinimalDenom: "usource",
    coinDecimals: 6,
    coinGeckoId: "source"
  },
  bip44: {
    coinType: 118
  }
});
export const stafihub = defineChainInfo({
  chainId: "stafihub-1",
  currencies: [
    {
      coinDenom: "fis",
      coinMinimalDenom: "ufis",
      coinDecimals: 6,
      coinGeckoId: "stafi"
    },
    {
      coinDenom: "ratom",
      coinMinimalDenom: "uratom",
      coinDecimals: 6
    },
    {
      coinDenom: "riris",
      coinMinimalDenom: "uriris",
      coinDecimals: 6
    },
    {
      coinDenom: "rhuahua",
      coinMinimalDenom: "urhuahua",
      coinDecimals: 6
    },
    {
      coinDenom: "rswth",
      coinMinimalDenom: "urswth",
      coinDecimals: 8
    }
  ],
  rest: "https://public-rest-rpc1.stafihub.io",
  rpc: "https://public-rpc1.stafihub.io:443",
  bech32Config: {
    bech32PrefixAccAddr: "stafi",
    bech32PrefixAccPub: "stafipub",
    bech32PrefixValAddr: "stafivaloper",
    bech32PrefixValPub: "stafivaloperpub",
    bech32PrefixConsAddr: "stafivalcons",
    bech32PrefixConsPub: "stafivalconspub"
  },
  chainName: "stafihub",
  feeCurrencies: [
    {
      coinDenom: "fis",
      coinMinimalDenom: "ufis",
      coinDecimals: 6,
      coinGeckoId: "stafi"
    }
  ],
  stakeCurrency: {
    coinDenom: "fis",
    coinMinimalDenom: "ufis",
    coinDecimals: 6,
    coinGeckoId: "stafi"
  },
  bip44: {
    coinType: 118
  }
});
export const stargaze = defineChainInfo({
  chainId: "stargaze-1",
  currencies: [
    {
      coinDenom: "stars",
      coinMinimalDenom: "ustars",
      coinDecimals: 6,
      coinGeckoId: "stargaze"
    },
    {
      coinDenom: "strdst",
      coinMinimalDenom: "factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust",
      coinDecimals: 6
    },
    {
      coinDenom: "GAZE",
      coinMinimalDenom: "factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/mGAZE",
      coinDecimals: 6
    },
    {
      coinDenom: "BRNCH",
      coinMinimalDenom: "factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH",
      coinDecimals: 6
    },
    {
      coinDenom: "OHH",
      coinMinimalDenom: "factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uOHH",
      coinDecimals: 6
    },
    {
      coinDenom: "sneaky",
      coinMinimalDenom: "factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky",
      coinDecimals: 6
    },
    {
      coinDenom: "LAB",
      coinMinimalDenom: "ibc/93B1AE0AD5E88242745B245064A2A51DDA1319C18176A966D5F8F9E02ED5373E",
      coinDecimals: 6
    },
    {
      coinDenom: "CDT",
      coinMinimalDenom: "ibc/B0263C28B6F44651F4596413B41FDB749EA010BD1220816DAC0ABF9947C1E806",
      coinDecimals: 6
    },
    {
      coinDenom: "MBRN",
      coinMinimalDenom: "ibc/E94BB144B818CB8061F43E202BEA1E9273B87D6326C8C6F4E6AE71C62FD37854",
      coinDecimals: 6
    },
    {
      coinDenom: "astro",
      coinMinimalDenom: "ibc/C9C8D88917374F27F03CBCEAF4F1B85F45A62F9F2316CBAADAAC5FDB3675DD3F",
      coinDecimals: 6
    },
    {
      coinDenom: "PLEB",
      coinMinimalDenom: "factory/stars1k7qsxdxh8calmt4txk75e6hdntefslegwddqnlwjjqgjkmcfqy0qa97sn8/pleb",
      coinDecimals: 6
    },
    {
      coinDenom: "KINGSHIT",
      coinMinimalDenom: "factory/stars133a6mnkp9d3pkt48y699hy0tvq5xngpz7cwak0qr4suq0cj9zpfslvt0em/kingshit",
      coinDecimals: 6
    },
    {
      coinDenom: "BOTZ",
      coinMinimalDenom: "factory/stars132jrwxjps93usq3ejy7cq6qqc7j3gtx3mu8jhaj5nnk3p0ste2ssqsndvj/botz",
      coinDecimals: 6
    },
    {
      coinDenom: "COCKS",
      coinMinimalDenom: "factory/stars14mfk0sd6rlajkvgpgrvfk9lfhjwmkrzvednekvcn32jzy3drjy5sfem9p7/cocks",
      coinDecimals: 6
    },
    {
      coinDenom: "XTRUMP",
      coinMinimalDenom: "ibc/4982C47384F003FCCB02490F92CE2F23DBEC9A7A0C1F440BDB12D24357E6703D",
      coinDecimals: 6
    },
    {
      coinDenom: "WOLFSHIT",
      coinMinimalDenom: "factory/stars167y92c2fe690l0lrqyk9tahpqvu97au0cmpayh3j9455r2f6f06s78emw4/wolfshit",
      coinDecimals: 6
    },
    {
      coinDenom: "VLT",
      coinMinimalDenom: "factory/stars1t6fyr84hn6lyjdvk3e3c697cptfn5cwat2jxqyzuvuesaypznslshy6x9v/vlt",
      coinDecimals: 6
    }
  ],
  rest: "https://rest.stargaze-apis.com/",
  rpc: "https://rpc.stargaze-apis.com/",
  bech32Config: {
    bech32PrefixAccAddr: "stars",
    bech32PrefixAccPub: "starspub",
    bech32PrefixValAddr: "starsvaloper",
    bech32PrefixValPub: "starsvaloperpub",
    bech32PrefixConsAddr: "starsvalcons",
    bech32PrefixConsPub: "starsvalconspub"
  },
  chainName: "stargaze",
  feeCurrencies: [
    {
      coinDenom: "stars",
      coinMinimalDenom: "ustars",
      coinDecimals: 6,
      coinGeckoId: "stargaze",
      gasPriceStep: {
        low: 1,
        average: 1.1,
        high: 1.2
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "stars",
    coinMinimalDenom: "ustars",
    coinDecimals: 6,
    coinGeckoId: "stargaze"
  },
  bip44: {
    coinType: 118
  }
});
export const starname = defineChainInfo({
  chainId: "iov-mainnet-ibc",
  currencies: [
    {
      coinDenom: "iov",
      coinMinimalDenom: "uiov",
      coinDecimals: 6,
      coinGeckoId: "starname"
    }
  ],
  rest: "https://api-starname-ia.cosmosia.notional.ventures/",
  rpc: "https://rpc-starname-ia.cosmosia.notional.ventures/",
  bech32Config: {
    bech32PrefixAccAddr: "star",
    bech32PrefixAccPub: "starpub",
    bech32PrefixValAddr: "starvaloper",
    bech32PrefixValPub: "starvaloperpub",
    bech32PrefixConsAddr: "starvalcons",
    bech32PrefixConsPub: "starvalconspub"
  },
  chainName: "starname",
  feeCurrencies: [
    {
      coinDenom: "iov",
      coinMinimalDenom: "uiov",
      coinDecimals: 6,
      coinGeckoId: "starname",
      gasPriceStep: {
        low: 1,
        average: 2,
        high: 3
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "iov",
    coinMinimalDenom: "uiov",
    coinDecimals: 6,
    coinGeckoId: "starname"
  },
  bip44: {
    coinType: 234
  }
});
export const stratos = defineChainInfo({
  chainId: "stratos-1",
  currencies: [
    {
      coinDenom: "stos",
      coinMinimalDenom: "wei",
      coinDecimals: 18,
      coinGeckoId: "stratos"
    }
  ],
  rest: "https://rest.thestratos.org",
  rpc: "https://rpc.thestratos.org",
  bech32Config: {
    bech32PrefixAccAddr: "st",
    bech32PrefixAccPub: "stpub",
    bech32PrefixValAddr: "stvaloper",
    bech32PrefixValPub: "stvaloperpub",
    bech32PrefixConsAddr: "stvalcons",
    bech32PrefixConsPub: "stvalconspub"
  },
  chainName: "stratos",
  feeCurrencies: [
    {
      coinDenom: "stos",
      coinMinimalDenom: "wei",
      coinDecimals: 18,
      coinGeckoId: "stratos"
    }
  ],
  stakeCurrency: {
    coinDenom: "stos",
    coinMinimalDenom: "wei",
    coinDecimals: 18,
    coinGeckoId: "stratos"
  },
  bip44: {
    coinType: 606
  }
});
export const stride = defineChainInfo({
  chainId: "stride-1",
  currencies: [
    {
      coinDenom: "strd",
      coinMinimalDenom: "ustrd",
      coinDecimals: 6,
      coinGeckoId: "stride"
    },
    {
      coinDenom: "statom",
      coinMinimalDenom: "stuatom",
      coinDecimals: 6,
      coinGeckoId: "stride-staked-atom"
    },
    {
      coinDenom: "ststars",
      coinMinimalDenom: "stustars",
      coinDecimals: 6,
      coinGeckoId: "stride-staked-stars"
    },
    {
      coinDenom: "stosmo",
      coinMinimalDenom: "stuosmo",
      coinDecimals: 6,
      coinGeckoId: "stride-staked-osmo"
    },
    {
      coinDenom: "stjuno",
      coinMinimalDenom: "stujuno",
      coinDecimals: 6,
      coinGeckoId: "stride-staked-juno"
    },
    {
      coinDenom: "stluna",
      coinMinimalDenom: "stuluna",
      coinDecimals: 6,
      coinGeckoId: "stride-staked-luna"
    },
    {
      coinDenom: "stINJ",
      coinMinimalDenom: "stinj",
      coinDecimals: 18
    },
    {
      coinDenom: "stevmos",
      coinMinimalDenom: "staevmos",
      coinDecimals: 18,
      coinGeckoId: "stride-staked-evmos"
    },
    {
      coinDenom: "stDYDX",
      coinMinimalDenom: "stadydx",
      coinDecimals: 18
    },
    {
      coinDenom: "stTIA",
      coinMinimalDenom: "stutia",
      coinDecimals: 6
    },
    {
      coinDenom: "stDYM",
      coinMinimalDenom: "stadym",
      coinDecimals: 18
    },
    {
      coinDenom: "stumee",
      coinMinimalDenom: "stuumee",
      coinDecimals: 6,
      coinGeckoId: "stride-staked-umee"
    },
    {
      coinDenom: "stcmdx",
      coinMinimalDenom: "stucmdx",
      coinDecimals: 6
    },
    {
      coinDenom: "stsomm",
      coinMinimalDenom: "stusomm",
      coinDecimals: 6,
      coinGeckoId: "stride-staked-sommelier"
    },
    {
      coinDenom: "stSAGA",
      coinMinimalDenom: "stusaga",
      coinDecimals: 6
    },
    {
      coinDenom: "TIA",
      coinMinimalDenom: "ibc/BF3B4F53F3694B66E13C23107C84B6485BD2B96296BB7EC680EA77BBA75B4801",
      coinDecimals: 6
    },
    {
      coinDenom: "stISLM",
      coinMinimalDenom: "staISLM",
      coinDecimals: 18,
      coinGeckoId: "stride-staked-islm"
    },
    {
      coinDenom: "stBAND",
      coinMinimalDenom: "stuband",
      coinDecimals: 6
    }
  ],
  rest: "https://stride-api.polkachu.com/",
  rpc: "https://stride-rpc.polkachu.com/",
  bech32Config: {
    bech32PrefixAccAddr: "stride",
    bech32PrefixAccPub: "stridepub",
    bech32PrefixValAddr: "stridevaloper",
    bech32PrefixValPub: "stridevaloperpub",
    bech32PrefixConsAddr: "stridevalcons",
    bech32PrefixConsPub: "stridevalconspub"
  },
  chainName: "stride",
  feeCurrencies: [
    {
      coinDenom: "strd",
      coinMinimalDenom: "ustrd",
      coinDecimals: 6,
      coinGeckoId: "stride",
      gasPriceStep: {
        low: 0.005,
        average: 0.005,
        high: 0.05
      }
    },
    {
      coinDenom: "statom",
      coinMinimalDenom: "stuatom",
      coinDecimals: 6,
      coinGeckoId: "stride-staked-atom",
      gasPriceStep: {
        low: 0.0001,
        average: 0.0002,
        high: 0.0005
      }
    },
    {
      coinDenom: "stosmo",
      coinMinimalDenom: "stuosmo",
      coinDecimals: 6,
      coinGeckoId: "stride-staked-osmo",
      gasPriceStep: {
        low: 0.001,
        average: 0.002,
        high: 0.004
      }
    },
    {
      coinDenom: "ststars",
      coinMinimalDenom: "stustars",
      coinDecimals: 6,
      coinGeckoId: "stride-staked-stars",
      gasPriceStep: {
        low: 1,
        average: 1.1,
        high: 1.2
      }
    },
    {
      coinDenom: "stjuno",
      coinMinimalDenom: "stujuno",
      coinDecimals: 6,
      coinGeckoId: "stride-staked-juno",
      gasPriceStep: {
        low: 0.075,
        average: 0.1,
        high: 0.125
      }
    },
    {
      coinDenom: "stluna",
      coinMinimalDenom: "stuluna",
      coinDecimals: 6,
      coinGeckoId: "stride-staked-luna",
      gasPriceStep: {
        low: 0.0125,
        average: 0.015,
        high: 0.04
      }
    },
    {
      coinDenom: "stevmos",
      coinMinimalDenom: "staevmos",
      coinDecimals: 18,
      coinGeckoId: "stride-staked-evmos",
      gasPriceStep: {
        low: 20000000000,
        average: 25000000000,
        high: 40000000000
      }
    },
    {
      coinDenom: "stINJ",
      coinMinimalDenom: "stinj",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 500000000,
        average: 700000000,
        high: 900000000
      }
    },
    {
      coinDenom: "stcmdx",
      coinMinimalDenom: "stucmdx",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.02,
        average: 0.025,
        high: 0.04
      }
    },
    {
      coinDenom: "stumee",
      coinMinimalDenom: "stuumee",
      coinDecimals: 6,
      coinGeckoId: "stride-staked-umee",
      gasPriceStep: {
        low: 0.1,
        average: 0.12,
        high: 0.2
      }
    },
    {
      coinDenom: "stTIA",
      coinMinimalDenom: "stutia",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.02,
        high: 0.1
      }
    },
    {
      coinDenom: "stDYDX",
      coinMinimalDenom: "stadydx",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 15000000000,
        average: 15000000000,
        high: 20000000000
      }
    },
    {
      coinDenom: "stDYM",
      coinMinimalDenom: "stadym",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 15000000000,
        average: 15000000000,
        high: 20000000000
      }
    },
    {
      coinDenom: "stSAGA",
      coinMinimalDenom: "stusaga",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.015,
        high: 0.03
      }
    },
    {
      coinDenom: "TIA",
      coinMinimalDenom: "ibc/BF3B4F53F3694B66E13C23107C84B6485BD2B96296BB7EC680EA77BBA75B4801",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.02,
        high: 0.1
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "strd",
    coinMinimalDenom: "ustrd",
    coinDecimals: 6,
    coinGeckoId: "stride"
  },
  bip44: {
    coinType: 118
  }
});
export const synternet = defineChainInfo({
  chainId: "synternet-1",
  currencies: [
    {
      coinDenom: "SYNT",
      coinMinimalDenom: "usynt",
      coinDecimals: 6
    }
  ],
  rest: "https://api.synternet.com/",
  rpc: "https://rpc.synternet.com/",
  bech32Config: {
    bech32PrefixAccAddr: "synt",
    bech32PrefixAccPub: "syntpub",
    bech32PrefixValAddr: "syntvaloper",
    bech32PrefixValPub: "syntvaloperpub",
    bech32PrefixConsAddr: "syntvalcons",
    bech32PrefixConsPub: "syntvalconspub"
  },
  chainName: "synternet",
  feeCurrencies: [
    {
      coinDenom: "SYNT",
      coinMinimalDenom: "usynt",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "SYNT",
    coinMinimalDenom: "usynt",
    coinDecimals: 6
  },
  bip44: {
    coinType: 0
  }
});
export const taketitan = defineChainInfo({
  chainId: "taketitan-12",
  currencies: [
    {
      coinDenom: "ttnc",
      coinMinimalDenom: "ttnc",
      coinDecimals: 0
    }
  ],
  rest: "https://lcdttnc.taketitan.com",
  rpc: "https://rcpttnc.taketitan.com",
  bech32Config: {
    bech32PrefixAccAddr: "taketitan",
    bech32PrefixAccPub: "taketitanpub",
    bech32PrefixValAddr: "taketitanvaloper",
    bech32PrefixValPub: "taketitanvaloperpub",
    bech32PrefixConsAddr: "taketitanvalcons",
    bech32PrefixConsPub: "taketitanvalconspub"
  },
  chainName: "taketitan",
  feeCurrencies: [
    {
      coinDenom: "ttnc",
      coinMinimalDenom: "ttnc",
      coinDecimals: 0,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.000001,
        average: 0.000005,
        high: 0.0001
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "ttnc",
    coinMinimalDenom: "ttnc",
    coinDecimals: 0
  },
  bip44: {
    coinType: 1179993421
  }
});
export const tenet = defineChainInfo({
  chainId: "tenet_1559-1",
  currencies: [
    {
      coinDenom: "tenet",
      coinMinimalDenom: "atenet",
      coinDecimals: 18,
      coinGeckoId: "tenet-1b000f7b-59cb-4e06-89ce-d62b32d362b9"
    }
  ],
  rest: "https://app.rpc.tenet.org",
  rpc: "https://tendermint-1.rpc.tenet.org",
  bech32Config: {
    bech32PrefixAccAddr: "tenet",
    bech32PrefixAccPub: "tenetpub",
    bech32PrefixValAddr: "tenetvaloper",
    bech32PrefixValPub: "tenetvaloperpub",
    bech32PrefixConsAddr: "tenetvalcons",
    bech32PrefixConsPub: "tenetvalconspub"
  },
  chainName: "tenet",
  feeCurrencies: [
    {
      coinDenom: "tenet",
      coinMinimalDenom: "atenet",
      coinDecimals: 18,
      coinGeckoId: "tenet-1b000f7b-59cb-4e06-89ce-d62b32d362b9",
      gasPriceStep: {
        low: 20000000000,
        average: 25000000000,
        high: 40000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "tenet",
    coinMinimalDenom: "atenet",
    coinDecimals: 18,
    coinGeckoId: "tenet-1b000f7b-59cb-4e06-89ce-d62b32d362b9"
  },
  bip44: {
    coinType: 60
  }
});
export const teritori = defineChainInfo({
  chainId: "teritori-1",
  currencies: [
    {
      coinDenom: "tori",
      coinMinimalDenom: "utori",
      coinDecimals: 6,
      coinGeckoId: "teritori"
    },
    {
      coinDenom: "osmo",
      coinMinimalDenom: "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
      coinDecimals: 6,
      coinGeckoId: "osmosis"
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/A670D9568B3E399316EEDE40C1181B7AA4BD0695F0B37513CE9B95B977DFC12E",
      coinDecimals: 6
    },
    {
      coinDenom: "kuji",
      coinMinimalDenom: "ibc/1FECA3491D88F4AD24DE0948ED96718CA6D93F6730CEE7708E621B953594BB5E",
      coinDecimals: 6,
      coinGeckoId: "kujira"
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9",
      coinDecimals: 6
    },
    {
      coinDenom: "scrt",
      coinMinimalDenom: "ibc/F3F6BDEE1A79664B169D742651107BF4E03FA67E931452E27380B75F5917B7E9",
      coinDecimals: 6
    }
  ],
  rest: "https://teritori-api.polkachu.com",
  rpc: "https://teritori-rpc.polkachu.com",
  bech32Config: {
    bech32PrefixAccAddr: "tori",
    bech32PrefixAccPub: "toripub",
    bech32PrefixValAddr: "torivaloper",
    bech32PrefixValPub: "torivaloperpub",
    bech32PrefixConsAddr: "torivalcons",
    bech32PrefixConsPub: "torivalconspub"
  },
  chainName: "teritori",
  feeCurrencies: [
    {
      coinDenom: "tori",
      coinMinimalDenom: "utori",
      coinDecimals: 6,
      coinGeckoId: "teritori"
    }
  ],
  stakeCurrency: {
    coinDenom: "tori",
    coinMinimalDenom: "utori",
    coinDecimals: 6,
    coinGeckoId: "teritori"
  },
  bip44: {
    coinType: 118
  }
});
export const terpnetwork = defineChainInfo({
  chainId: "morocco-1",
  currencies: [
    {
      coinDenom: "terp",
      coinMinimalDenom: "uterp",
      coinDecimals: 6
    },
    {
      coinDenom: "thiol",
      coinMinimalDenom: "uthiol",
      coinDecimals: 6
    }
  ],
  rest: "https://api-terp.zenchainlabs.io:443",
  rpc: "https://rpc-terp.zenchainlabs.io/",
  bech32Config: {
    bech32PrefixAccAddr: "terp",
    bech32PrefixAccPub: "terppub",
    bech32PrefixValAddr: "terpvaloper",
    bech32PrefixValPub: "terpvaloperpub",
    bech32PrefixConsAddr: "terpvalcons",
    bech32PrefixConsPub: "terpvalconspub"
  },
  chainName: "terpnetwork",
  feeCurrencies: [
    {
      coinDenom: "thiol",
      coinMinimalDenom: "uthiol",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "terp",
    coinMinimalDenom: "uterp",
    coinDecimals: 6
  },
  bip44: {
    coinType: 0
  }
});
export const terra = defineChainInfo({
  chainId: "columbus-5",
  currencies: [
    {
      coinDenom: "luna",
      coinMinimalDenom: "uluna",
      coinDecimals: 6,
      coinGeckoId: "terra-luna"
    },
    {
      coinDenom: "ust",
      coinMinimalDenom: "uusd",
      coinDecimals: 6,
      coinGeckoId: "terrausd"
    },
    {
      coinDenom: "krt",
      coinMinimalDenom: "ukrw",
      coinDecimals: 6
    },
    {
      coinDenom: "whale",
      coinMinimalDenom: "cw20:terra1php5m8a6qd68z02t3zpw4jv2pj4vgw4wz0t8mz",
      coinDecimals: 6,
      coinGeckoId: "white-whale"
    },
    {
      coinDenom: "bluna",
      coinMinimalDenom: "cw20:terra1kc87mu460fwkqte29rquh4hc20m54fxwtsx7gp",
      coinDecimals: 6
    },
    {
      coinDenom: "beth",
      coinMinimalDenom: "cw20:terra1dzhzukyezv0etz22ud940z7adyv7xgcjkahuun",
      coinDecimals: 6
    },
    {
      coinDenom: "aust",
      coinMinimalDenom: "cw20:terra1hzh9vpxhsk8253se0vv5jj6etdvxu3nv8z07zu",
      coinDecimals: 6
    },
    {
      coinDenom: "anc",
      coinMinimalDenom: "cw20:terra14z56l0fp2lsf86zy3hty2z47ezkhnthtr9yq76",
      coinDecimals: 6
    },
    {
      coinDenom: "mir",
      coinMinimalDenom: "cw20:terra15gwkyepfc6xgca5t5zefzwy42uts8l2m4g40k6",
      coinDecimals: 6
    },
    {
      coinDenom: "maapl",
      coinMinimalDenom: "cw20:terra1vxtwu4ehgzz77mnfwrntyrmgl64qjs75mpwqaz",
      coinDecimals: 6
    },
    {
      coinDenom: "mabnb",
      coinMinimalDenom: "cw20:terra1g4x2pzmkc9z3mseewxf758rllg08z3797xly0n",
      coinDecimals: 6
    },
    {
      coinDenom: "mamc",
      coinMinimalDenom: "cw20:terra1qelfthdanju7wavc5tq0k5r0rhsyzyyrsn09qy",
      coinDecimals: 6
    },
    {
      coinDenom: "mamd",
      coinMinimalDenom: "cw20:terra18ej5nsuu867fkx4tuy2aglpvqjrkcrjjslap3z",
      coinDecimals: 6
    },
    {
      coinDenom: "mamzn",
      coinMinimalDenom: "cw20:terra165nd2qmrtszehcfrntlplzern7zl4ahtlhd5t2",
      coinDecimals: 6
    },
    {
      coinDenom: "markk",
      coinMinimalDenom: "cw20:terra1qqfx5jph0rsmkur2zgzyqnfucra45rtjae5vh6",
      coinDecimals: 6
    },
    {
      coinDenom: "mbaba",
      coinMinimalDenom: "cw20:terra1w7zgkcyt7y4zpct9dw8mw362ywvdlydnum2awa",
      coinDecimals: 6
    },
    {
      coinDenom: "mbtc",
      coinMinimalDenom: "cw20:terra1rhhvx8nzfrx5fufkuft06q5marfkucdqwq5sjw",
      coinDecimals: 6
    },
    {
      coinDenom: "mcoin",
      coinMinimalDenom: "cw20:terra18wayjpyq28gd970qzgjfmsjj7dmgdk039duhph",
      coinDecimals: 6
    },
    {
      coinDenom: "mdis",
      coinMinimalDenom: "cw20:terra149755r3y0rve30e209awkhn5cxgkn5c8ju9pm5",
      coinDecimals: 6
    },
    {
      coinDenom: "mdot",
      coinMinimalDenom: "cw20:terra19ya4jpvjvvtggepvmmj6ftmwly3p7way0tt08r",
      coinDecimals: 6
    },
    {
      coinDenom: "meth",
      coinMinimalDenom: "cw20:terra1dk3g53js3034x4v5c3vavhj2738une880yu6kx",
      coinDecimals: 6
    },
    {
      coinDenom: "mfb",
      coinMinimalDenom: "cw20:terra1mqsjugsugfprn3cvgxsrr8akkvdxv2pzc74us7",
      coinDecimals: 6
    },
    {
      coinDenom: "mglxy",
      coinMinimalDenom: "cw20:terra1l5lrxtwd98ylfy09fn866au6dp76gu8ywnudls",
      coinDecimals: 6
    },
    {
      coinDenom: "mgme",
      coinMinimalDenom: "cw20:terra1m6j6j9gw728n82k78s0j9kq8l5p6ne0xcc820p",
      coinDecimals: 6
    },
    {
      coinDenom: "mgoogl",
      coinMinimalDenom: "cw20:terra1h8arz2k547uvmpxctuwush3jzc8fun4s96qgwt",
      coinDecimals: 6
    },
    {
      coinDenom: "mgs",
      coinMinimalDenom: "cw20:terra137drsu8gce5thf6jr5mxlfghw36rpljt3zj73v",
      coinDecimals: 6
    },
    {
      coinDenom: "mhood",
      coinMinimalDenom: "cw20:terra18yqdfzfhnguerz9du5mnvxsh5kxlknqhcxzjfr",
      coinDecimals: 6
    },
    {
      coinDenom: "miau",
      coinMinimalDenom: "cw20:terra10h7ry7apm55h4ez502dqdv9gr53juu85nkd4aq",
      coinDecimals: 6
    },
    {
      coinDenom: "miau",
      coinMinimalDenom: "cw20:terra15hp9pr8y4qsvqvxf3m4xeptlk7l8h60634gqec",
      coinDecimals: 6
    },
    {
      coinDenom: "mjnj",
      coinMinimalDenom: "cw20:terra1ptdxmj3xmmljzx02nr4auwfuelmj0cnkh8egs2",
      coinDecimals: 6
    },
    {
      coinDenom: "mko",
      coinMinimalDenom: "cw20:terra1qsnj5gvq8rgs7yws8x5u02gwd5wvtu4tks0hjm",
      coinDecimals: 6
    },
    {
      coinDenom: "mmsft",
      coinMinimalDenom: "cw20:terra1227ppwxxj3jxz8cfgq00jgnxqcny7ryenvkwj6",
      coinDecimals: 6
    },
    {
      coinDenom: "mnflx",
      coinMinimalDenom: "cw20:terra1jsxngqasf2zynj5kyh0tgq9mj3zksa5gk35j4k",
      coinDecimals: 6
    },
    {
      coinDenom: "mnio",
      coinMinimalDenom: "cw20:terra1dj2cj02zak0nvwy3uj9r9dhhxhdwxnw6psse6p",
      coinDecimals: 6
    },
    {
      coinDenom: "mnke",
      coinMinimalDenom: "cw20:terra17ana8hvzea0q7w367dm0dw48sxwql39qekpt7g",
      coinDecimals: 6
    },
    {
      coinDenom: "mnvda",
      coinMinimalDenom: "cw20:terra1drsjzvzej4h4qlehcfwclxg4w5l3h5tuvd3jd8",
      coinDecimals: 6
    },
    {
      coinDenom: "mpypl",
      coinMinimalDenom: "cw20:terra1rh2907984nudl7vh56qjdtvv7947z4dujj92sx",
      coinDecimals: 6
    },
    {
      coinDenom: "mqqq",
      coinMinimalDenom: "cw20:terra1csk6tc7pdmpr782w527hwhez6gfv632tyf72cp",
      coinDecimals: 6
    },
    {
      coinDenom: "msbux",
      coinMinimalDenom: "cw20:terra1246zy658dfgtausf0c4a6ly8sc2e285q4kxqga",
      coinDecimals: 6
    },
    {
      coinDenom: "mslv",
      coinMinimalDenom: "cw20:terra1kscs6uhrqwy6rx5kuw5lwpuqvm3t6j2d6uf2lp",
      coinDecimals: 6
    },
    {
      coinDenom: "mspy",
      coinMinimalDenom: "cw20:terra1aa00lpfexyycedfg5k2p60l9djcmw0ue5l8fhc",
      coinDecimals: 6
    },
    {
      coinDenom: "msq",
      coinMinimalDenom: "cw20:terra1u43zu5amjlsgty5j64445fr9yglhm53m576ugh",
      coinDecimals: 6
    },
    {
      coinDenom: "mtsla",
      coinMinimalDenom: "cw20:terra14y5affaarufk3uscy2vr6pe6w6zqf2wpjzn5sh",
      coinDecimals: 6
    },
    {
      coinDenom: "mtwtr",
      coinMinimalDenom: "cw20:terra1cc3enj9qgchlrj34cnzhwuclc4vl2z3jl7tkqg",
      coinDecimals: 6
    },
    {
      coinDenom: "muso",
      coinMinimalDenom: "cw20:terra1lvmx8fsagy70tv0fhmfzdw9h6s3sy4prz38ugf",
      coinDecimals: 6
    },
    {
      coinDenom: "mvixy",
      coinMinimalDenom: "cw20:terra19cmt6vzvhnnnfsmccaaxzy2uaj06zjktu6yzjx",
      coinDecimals: 6
    },
    {
      coinDenom: "mvixy",
      coinMinimalDenom: "cw20:terra1zp3a6q6q4953cz376906g5qfmxnlg77hx3te45",
      coinDecimals: 6
    },
    {
      coinDenom: "lota",
      coinMinimalDenom: "cw20:terra1ez46kxtulsdv07538fh5ra5xj8l68mu8eg24vr",
      coinDecimals: 6
    },
    {
      coinDenom: "dph",
      coinMinimalDenom: "cw20:terra17jnhankdfl8vyzj6vejt7ag8uz0cjc9crkl2h7",
      coinDecimals: 6
    },
    {
      coinDenom: "mine",
      coinMinimalDenom: "cw20:terra1kcthelkax4j9x8d3ny6sdag0qmxxynl3qtcrpy",
      coinDecimals: 6
    },
    {
      coinDenom: "bpsidp-24m",
      coinMinimalDenom: "cw20:terra1zsaswh926ey8qa5x4vj93kzzlfnef0pstuca0y",
      coinDecimals: 6
    },
    {
      coinDenom: "spec",
      coinMinimalDenom: "cw20:terra1s5eczhe0h0jutf46re52x5z4r03c8hupacxmdr",
      coinDecimals: 6
    },
    {
      coinDenom: "loop",
      coinMinimalDenom: "cw20:terra1nef5jf6c7js9x6gkntlehgywvjlpytm7pcgkn4",
      coinDecimals: 6
    },
    {
      coinDenom: "loopr",
      coinMinimalDenom: "cw20:terra1jx4lmmke2srcvpjeereetc9hgegp4g5j0p9r2q",
      coinDecimals: 6
    },
    {
      coinDenom: "stt",
      coinMinimalDenom: "cw20:terra13xujxcrc9dqft4p9a8ls0w3j0xnzm6y2uvve8n",
      coinDecimals: 6
    },
    {
      coinDenom: "twd",
      coinMinimalDenom: "cw20:terra19djkaepjjswucys4npd5ltaxgsntl7jf0xz7w6",
      coinDecimals: 6
    },
    {
      coinDenom: "xtra",
      coinMinimalDenom: "cw20:terra1kvjscdgwuvwc6uzm4rqfjl6nlmuhj28tequlnc",
      coinDecimals: 6
    },
    {
      coinDenom: "miaw",
      coinMinimalDenom: "cw20:terra1vtr50tw0pgqpes34zqu60n554p9x4950wk8f63",
      coinDecimals: 6
    },
    {
      coinDenom: "psi",
      coinMinimalDenom: "cw20:terra12897djskt9rge8dtmm86w654g7kzckkd698608",
      coinDecimals: 6
    },
    {
      coinDenom: "nluna",
      coinMinimalDenom: "cw20:terra10f2mt82kjnkxqj2gepgwl637u2w4ue2z5nhz5j",
      coinDecimals: 6
    },
    {
      coinDenom: "neth",
      coinMinimalDenom: "cw20:terra178v546c407pdnx5rer3hu8s2c0fc924k74ymnn",
      coinDecimals: 6
    },
    {
      coinDenom: "cnluna",
      coinMinimalDenom: "cw20:terra1u553zk43jd4rwzc53qrdrq4jc2p8rextyq09dj",
      coinDecimals: 6
    },
    {
      coinDenom: "cneth",
      coinMinimalDenom: "cw20:terra1nagqpmyw55yjphea4rhntlfv87ugmeaj8ym756",
      coinDecimals: 6
    },
    {
      coinDenom: "navax",
      coinMinimalDenom: "cw20:terra13k62n0285wj8ug0ngcgpf7dgnkzqeu279tz636",
      coinDecimals: 6
    },
    {
      coinDenom: "natom",
      coinMinimalDenom: "cw20:terra1jtdc6zpf95tvh9peuaxwp3v0yqszcnwl8j5ade",
      coinDecimals: 6
    },
    {
      coinDenom: "vkr",
      coinMinimalDenom: "cw20:terra1dy9kmlm4anr92e42mrkjwzyvfqwz66un00rwr5",
      coinDecimals: 6
    },
    {
      coinDenom: "orion",
      coinMinimalDenom: "cw20:terra1mddcdx0ujx89f38gu7zspk2r2ffdl5enyz2u03",
      coinDecimals: 8
    },
    {
      coinDenom: "tland",
      coinMinimalDenom: "cw20:terra1r5506ckw5tfr3z52jwlek8vg9sn3yflrqrzfsc",
      coinDecimals: 6
    },
    {
      coinDenom: "vust",
      coinMinimalDenom: "cw20:terra1w0p5zre38ecdy3ez8efd5h9fvgum5s206xknrg",
      coinDecimals: 6
    },
    {
      coinDenom: "eth",
      coinMinimalDenom: "cw20:terra14tl83xcwqjy0ken9peu4pjjuu755lrry2uy25r",
      coinDecimals: 8
    },
    {
      coinDenom: "wbtc",
      coinMinimalDenom: "cw20:terra1aa7upykmmqqc63l924l5qfap8mrmx5rfdm0v55",
      coinDecimals: 8
    },
    {
      coinDenom: "sol",
      coinMinimalDenom: "cw20:terra190tqwgqx7s8qrknz6kckct7v607cu068gfujpk",
      coinDecimals: 8
    },
    {
      coinDenom: "maticet",
      coinMinimalDenom: "cw20:terra1dfasranqm4uyaz72r960umxy0w8t6zewqlnkuq",
      coinDecimals: 8
    },
    {
      coinDenom: "bnb",
      coinMinimalDenom: "cw20:terra1cetg5wruw2wsdjp7j46rj44xdel00z006e9yg8",
      coinDecimals: 8
    },
    {
      coinDenom: "cake",
      coinMinimalDenom: "cw20:terra1xvqlpjl2dxyel9qrp6qvtrg04xe3jh9cyxc6av",
      coinDecimals: 8
    },
    {
      coinDenom: "link",
      coinMinimalDenom: "cw20:terra12dfv3f0e6m22z6cnhfn3nxk2en3z3zeqy6ctym",
      coinDecimals: 8
    },
    {
      coinDenom: "sushi",
      coinMinimalDenom: "cw20:terra1csvuzlf92nyemu6tv25h0l79etpe8hz3h5vn4a",
      coinDecimals: 8
    },
    {
      coinDenom: "uni",
      coinMinimalDenom: "cw20:terra1wyxkuy5jq545fn7xfn3enpvs5zg9f9dghf6gxf",
      coinDecimals: 8
    },
    {
      coinDenom: "usdtet",
      coinMinimalDenom: "cw20:terra1ce06wkrdm4vl6t0hvc0g86rsy27pu8yadg3dva",
      coinDecimals: 6
    },
    {
      coinDenom: "usdcet",
      coinMinimalDenom: "cw20:terra1pepwcav40nvj3kh60qqgrk8k07ydmc00xyat06",
      coinDecimals: 6
    },
    {
      coinDenom: "kuji",
      coinMinimalDenom: "cw20:terra1xfsdgcemqwxp4hhnyk4rle6wr22sseq7j07dnn",
      coinDecimals: 6
    },
    {
      coinDenom: "skuji",
      coinMinimalDenom: "cw20:terra188w26t95tf4dz77raftme8p75rggatxjxfeknw",
      coinDecimals: 6
    },
    {
      coinDenom: "wsteth",
      coinMinimalDenom: "cw20:terra133chr09wu8sakfte5v7vd8qzq9vghtkv4tn0ur",
      coinDecimals: 8
    },
    {
      coinDenom: "wstsol",
      coinMinimalDenom: "cw20:terra1t9ul45l7m6jw6sxgvnp8e5hj8xzkjsg82g84ap",
      coinDecimals: 8
    },
    {
      coinDenom: "wsbsol",
      coinMinimalDenom: "cw20:terra1c3xd5s2j3ejx2d94tvcjfkrdeu6rmz48ghzznj",
      coinDecimals: 8
    },
    {
      coinDenom: "ldo",
      coinMinimalDenom: "cw20:terra1jxypgnfa07j6w92wazzyskhreq2ey2a5crgt6z",
      coinDecimals: 8
    },
    {
      coinDenom: "webeth",
      coinMinimalDenom: "cw20:terra1u5szg038ur9kzuular3cae8hq6q5rk5u27tuvz",
      coinDecimals: 8
    },
    {
      coinDenom: "stluna",
      coinMinimalDenom: "cw20:terra1yg3j2s986nyp5z7r2lvt0hx3r0lnd7kwvwwtsc",
      coinDecimals: 6
    },
    {
      coinDenom: "xdefi",
      coinMinimalDenom: "cw20:terra169edevav3pdrtjcx35j6pvzuv54aevewar4nlh",
      coinDecimals: 8
    },
    {
      coinDenom: "btl",
      coinMinimalDenom: "cw20:terra193c42lfwmlkasvcw22l9qqzc5q2dx208tkd7wl",
      coinDecimals: 6
    },
    {
      coinDenom: "lunax",
      coinMinimalDenom: "cw20:terra17y9qkl8dfkeg4py7n0g5407emqnemc3yqk5rup",
      coinDecimals: 6
    },
    {
      coinDenom: "luni",
      coinMinimalDenom: "cw20:terra1m3tdguf59xq3pa2twk5fjte5g6szj5y9x5npy7",
      coinDecimals: 6
    },
    {
      coinDenom: "ply",
      coinMinimalDenom: "cw20:terra13awdgcx40tz5uygkgm79dytez3x87rpg4uhnvu",
      coinDecimals: 6
    },
    {
      coinDenom: "tfloki",
      coinMinimalDenom: "cw20:terra1u2k0nkenw0p25ljsr4ksh7rxm65y466vkdewwj",
      coinDecimals: 6
    },
    {
      coinDenom: "tftic",
      coinMinimalDenom: "cw20:terra1a8k3jyv3wf6k3zngza5h6srrxcckdf7zv90p6u",
      coinDecimals: 6
    },
    {
      coinDenom: "tfticii",
      coinMinimalDenom: "cw20:terra1xt9fgu7965kgvunnjts9zkprd8986kcc444q86",
      coinDecimals: 6
    },
    {
      coinDenom: "tfticiii",
      coinMinimalDenom: "cw20:terra1vte2xv7dr8sfnrnwdf9arcyprqgr0hty5ads28",
      coinDecimals: 6
    },
    {
      coinDenom: "moon",
      coinMinimalDenom: "cw20:terra1hmxxq0y8h79f3228vs0czc4uz5jdgjt0appp26",
      coinDecimals: 6
    },
    {
      coinDenom: "astro",
      coinMinimalDenom: "cw20:terra1xj49zyqrwpv5k928jwfpfy2ha668nwdgkwlrg3",
      coinDecimals: 6
    },
    {
      coinDenom: "xastro.cw20",
      coinMinimalDenom: "cw20:terra14lpnyzc9z4g3ugr4lhm8s4nle0tq8vcltkhzh7",
      coinDecimals: 6
    },
    {
      coinDenom: "halo",
      coinMinimalDenom: "cw20:terra1w8kvd6cqpsthupsk4l0clwnmek4l3zr7c84kwq",
      coinDecimals: 6
    },
    {
      coinDenom: "pug",
      coinMinimalDenom: "cw20:terra1kdfsdm3c4reun9j3m4mk3nmyw4a4ns7mj24q3j",
      coinDecimals: 6
    },
    {
      coinDenom: "orne",
      coinMinimalDenom: "cw20:terra1hnezwjqlhzawcrfysczcxs6xqxu2jawn729kkf",
      coinDecimals: 6
    },
    {
      coinDenom: "tns",
      coinMinimalDenom: "cw20:terra14vz4v8adanzph278xyeggll4tfww7teh0xtw2y",
      coinDecimals: 6
    },
    {
      coinDenom: "xrune",
      coinMinimalDenom: "cw20:terra1td743l5k5cmfy7tqq202g7vkmdvq35q48u2jfm",
      coinDecimals: 6
    },
    {
      coinDenom: "alot",
      coinMinimalDenom: "cw20:terra1366wmr8t8rrkh6mag8fagqxntmf2qe4kyte784",
      coinDecimals: 6
    },
    {
      coinDenom: "sity",
      coinMinimalDenom: "cw20:terra1z09gnzufuflz6ckd9k0u456l9dnpgsynu0yyhe",
      coinDecimals: 6
    },
    {
      coinDenom: "glow",
      coinMinimalDenom: "cw20:terra13zx49nk8wjavedjzu8xkk95r3t0ta43c9ptul7",
      coinDecimals: 6
    },
    {
      coinDenom: "apollo",
      coinMinimalDenom: "cw20:terra100yeqvww74h4yaejj6h733thgcafdaukjtw397",
      coinDecimals: 6
    },
    {
      coinDenom: "abr",
      coinMinimalDenom: "cw20:terra1a7ye2splpfzyenu0yrdu8t83uzgusx2malkc7u",
      coinDecimals: 6
    },
    {
      coinDenom: "whgtps",
      coinMinimalDenom: "cw20:terra1y3d5qexmyac0fg53pfglh2pjk0664ymfvcq9mc",
      coinDecimals: 8
    },
    {
      coinDenom: "prism",
      coinMinimalDenom: "cw20:terra1dh9478k2qvqhqeajhn75a2a7dsnf74y5ukregw",
      coinDecimals: 6
    },
    {
      coinDenom: "sdollar",
      coinMinimalDenom: "cw20:terra1l0y8yg0s86x299nqw0p6fhh7ngex3r4phtjeuq",
      coinDecimals: 2
    },
    {
      coinDenom: "whsail",
      coinMinimalDenom: "cw20:terra1ku5e0dhutxhuxudsmsn5647wwcz6ndr3rsh90k",
      coinDecimals: 6
    },
    {
      coinDenom: "whgsail",
      coinMinimalDenom: "cw20:terra1rl0cpwgtwl4utnaynugevdje37fnmsea7rv4uu",
      coinDecimals: 8
    },
    {
      coinDenom: "xprism",
      coinMinimalDenom: "cw20:terra1042wzrwg2uk6jqxjm34ysqquyr9esdgm5qyswz",
      coinDecimals: 6
    },
    {
      coinDenom: "cde",
      coinMinimalDenom: "cw20:terra13fs83g5atgjwuh7c5ydzh6n7gecel6xyhhy2t5",
      coinDecimals: 9
    },
    {
      coinDenom: "ctx",
      coinMinimalDenom: "cw20:terra1rl20t79ffsrqfa29rke48tj05gj9jxumm92vg8",
      coinDecimals: 6
    },
    {
      coinDenom: "cluna",
      coinMinimalDenom: "cw20:terra13zaagrrrxj47qjwczsczujlvnnntde7fdt0mau",
      coinDecimals: 6
    },
    {
      coinDenom: "pluna",
      coinMinimalDenom: "cw20:terra1tlgelulz9pdkhls6uglfn5lmxarx7f2gxtdzh2",
      coinDecimals: 6
    },
    {
      coinDenom: "yluna",
      coinMinimalDenom: "cw20:terra17wkadg0tah554r35x6wvff0y5s7ve8npcjfuhz",
      coinDecimals: 6
    },
    {
      coinDenom: "atlo",
      coinMinimalDenom: "cw20:terra1cl7whtrqmz5ldr553q69qahck8xvk80fm33qjx",
      coinDecimals: 6
    },
    {
      coinDenom: "local",
      coinMinimalDenom: "cw20:terra1vchw83qt25j89zqwdpmdzj722sqxthnckqzxxp",
      coinDecimals: 6
    },
    {
      coinDenom: "luv",
      coinMinimalDenom: "cw20:terra15k5r9r8dl8r7xlr29pry8a9w7sghehcnv5mgp6",
      coinDecimals: 6
    },
    {
      coinDenom: "robo",
      coinMinimalDenom: "cw20:terra1f62tqesptvmhtzr8sudru00gsdtdz24srgm7wp",
      coinDecimals: 6
    },
    {
      coinDenom: "luart",
      coinMinimalDenom: "cw20:terra1vwz7t30q76s7xx6qgtxdqnu6vpr3ak3vw62ygk",
      coinDecimals: 6
    },
    {
      coinDenom: "mars",
      coinMinimalDenom: "cw20:terra12hgwnpupflfpuual532wgrxu2gjp0tcagzgx4n",
      coinDecimals: 6
    },
    {
      coinDenom: "xmars",
      coinMinimalDenom: "cw20:terra1a04v570f9cxp49mk06vjsm8axsswndpwwt67k4",
      coinDecimals: 6
    },
    {
      coinDenom: "dfiat",
      coinMinimalDenom: "cw20:terra1vpws4hmpmpsqwnz3gljn8zj42rv7rkpc5atgt4",
      coinDecimals: 8
    },
    {
      coinDenom: "ceres",
      coinMinimalDenom: "cw20:terra1hppnw4jppmrzzga4yvd8s87y3dwkhe27xwwl5d",
      coinDecimals: 6
    },
    {
      coinDenom: "wasavax",
      coinMinimalDenom: "cw20:terra1z3e2e4jpk4n0xzzwlkgcfvc95pc5ldq0xcny58",
      coinDecimals: 8
    },
    {
      coinDenom: "mint",
      coinMinimalDenom: "cw20:terra1zd6let0zg0xjn2sestagxv4ax24a4ml6j40qdr",
      coinDecimals: 6
    },
    {
      coinDenom: "sd",
      coinMinimalDenom: "cw20:terra1ustvnmngueq0p4jd7gfnutgvdc6ujpsjhsjd02",
      coinDecimals: 8
    },
    {
      coinDenom: "xsd",
      coinMinimalDenom: "cw20:terra1ln2z938phz0nc2wepxpzfkwp6ezn9yrz9zv9ep",
      coinDecimals: 8
    },
    {
      coinDenom: "paxg",
      coinMinimalDenom: "cw20:terra1uux6gwd6pzr0gfzrru5kne55cxex9d0700c72r",
      coinDecimals: 8
    },
    {
      coinDenom: "whdao",
      coinMinimalDenom: "cw20:terra1efjugpjc50d8sha7lr8s48cr7wmsthz94eevcl",
      coinDecimals: 8
    },
    {
      coinDenom: "link",
      coinMinimalDenom: "cw20:terra1su6g4t4vwx7y0uh3ksancyaurj4l6w9pfs40qt",
      coinDecimals: 18
    },
    {
      coinDenom: "sayve",
      coinMinimalDenom: "cw20:terra14v9wrjs55qsn9lkvylsqela3w2ytwxzkycqzcr",
      coinDecimals: 6
    },
    {
      coinDenom: "guides",
      coinMinimalDenom: "cw20:terra1z55rhw0ut70jxdmpvge98mvj0rkwcz74q77z0u",
      coinDecimals: 6
    },
    {
      coinDenom: "bro",
      coinMinimalDenom: "cw20:terra1mt2ytlrxhvd5c4d4fshxxs3zcus3fkdmuv4mk2",
      coinDecimals: 6
    },
    {
      coinDenom: "bbro",
      coinMinimalDenom: "cw20:terra1qryq5wreecx2wd3cdtzz94syr4z0a92l60asds",
      coinDecimals: 6
    },
    {
      coinDenom: "gtps",
      coinMinimalDenom: "cw20:terra15zvyhmv6gwddht7kt4q6w5nasn4tcpgzcdfmgr",
      coinDecimals: 18
    },
    {
      coinDenom: "gfi",
      coinMinimalDenom: "cw20:terra15pkdjxv2ewjzn9x665y26pfz2h6ymak4d4e8se",
      coinDecimals: 18
    },
    {
      coinDenom: "ulc",
      coinMinimalDenom: "cw20:terra1fyjsxx73jrufw8ufgtuswa773dvdkny92k70wa",
      coinDecimals: 18
    },
    {
      coinDenom: "sst",
      coinMinimalDenom: "cw20:terra1689ys6p6gfu0q6xrjqkzfn80sdyhurjqn0jfdl",
      coinDecimals: 6
    },
    {
      coinDenom: "atlas",
      coinMinimalDenom: "cw20:terra1rg8f993m9834afwazersesgx7jjxv4p87q9wvc",
      coinDecimals: 8
    },
    {
      coinDenom: "audio",
      coinMinimalDenom: "cw20:terra1nc6flp57m5hsr6y5y8aexzszy43ksr0drdr8rp",
      coinDecimals: 8
    },
    {
      coinDenom: "avax",
      coinMinimalDenom: "cw20:terra1hj8de24c3yqvcsv9r8chr03fzwsak3hgd8gv3m",
      coinDecimals: 8
    },
    {
      coinDenom: "bat",
      coinMinimalDenom: "cw20:terra1apxgj5agkkfdm2tprwvykug0qtahxvfmugnhx2",
      coinDecimals: 8
    },
    {
      coinDenom: "busdbs",
      coinMinimalDenom: "cw20:terra1skjr69exm6v8zellgjpaa2emhwutrk5a6dz7dd",
      coinDecimals: 8
    },
    {
      coinDenom: "dai",
      coinMinimalDenom: "cw20:terra1zmclyfepfmqvfqflu8r3lv6f75trmg05z7xq95",
      coinDecimals: 8
    },
    {
      coinDenom: "maticpo",
      coinMinimalDenom: "cw20:terra1dtqlfecglk47yplfrtwjzyagkgcqqngd5lgjp8",
      coinDecimals: 8
    },
    {
      coinDenom: "mimet",
      coinMinimalDenom: "cw20:terra15a9dr3a2a2lj5fclrw35xxg9yuxg0d908wpf2y",
      coinDecimals: 8
    },
    {
      coinDenom: "ray",
      coinMinimalDenom: "cw20:terra1ht5sepn28z999jx33sdduuxm9acthad507jg9q",
      coinDecimals: 6
    },
    {
      coinDenom: "sbr",
      coinMinimalDenom: "cw20:terra17h82zsq6q8x5tsgm5ugcx4gytw3axguvzt4pkc",
      coinDecimals: 6
    },
    {
      coinDenom: "shib",
      coinMinimalDenom: "cw20:terra1huku2lecfjhq9d00k5a8dh73gw7dwe6vvuf2dd",
      coinDecimals: 8
    },
    {
      coinDenom: "srmso",
      coinMinimalDenom: "cw20:terra1dkam9wd5yvaswv4yq3n2aqd4wm5j8n82qc0c7c",
      coinDecimals: 6
    },
    {
      coinDenom: "usdcav",
      coinMinimalDenom: "cw20:terra1pvel56a2hs93yd429pzv9zp5aptcjg5ulhkz7w",
      coinDecimals: 6
    },
    {
      coinDenom: "usdcbs",
      coinMinimalDenom: "cw20:terra1yljlrxvkar0c6ujpvf8g57m5rpcwl7r032zyvu",
      coinDecimals: 8
    },
    {
      coinDenom: "usdcpo",
      coinMinimalDenom: "cw20:terra1kkyyh7vganlpkj0gkc2rfmhy858ma4rtwywe3x",
      coinDecimals: 6
    },
    {
      coinDenom: "usdcso",
      coinMinimalDenom: "cw20:terra1e6mq63y64zcxz8xyu5van4tgkhemj3r86yvgu4",
      coinDecimals: 6
    },
    {
      coinDenom: "usdtav",
      coinMinimalDenom: "cw20:terra1eqvq3thjhye7anv6f6mhxpjhyvww8zjvqcdgjx",
      coinDecimals: 6
    },
    {
      coinDenom: "usdtbs",
      coinMinimalDenom: "cw20:terra1vlqeghv5mt5udh96kt5zxlh2wkh8q4kewkr0dd",
      coinDecimals: 8
    },
    {
      coinDenom: "usdtso",
      coinMinimalDenom: "cw20:terra1hd9n65snaluvf7en0p4hqzse9eqecejz2k8rl5",
      coinDecimals: 6
    },
    {
      coinDenom: "gohm",
      coinMinimalDenom: "cw20:terra1fpfn2kkr8mv390wx4dtpfk3vkjx9ch3thvykl3",
      coinDecimals: 8
    },
    {
      coinDenom: "msol",
      coinMinimalDenom: "cw20:terra1qvlpf2v0zmru3gtex40sqq02wxp39x3cjh359y",
      coinDecimals: 8
    },
    {
      coinDenom: "steth",
      coinMinimalDenom: "cw20:terra1w7ywr6waxtjuvn5svk5wqydqpjj0q9ps7qct4d",
      coinDecimals: 8
    },
    {
      coinDenom: "lct",
      coinMinimalDenom: "cw20:terra1srp2u95kxps35nvan88gn96nfqhukqya2d0ffc",
      coinDecimals: 6
    },
    {
      coinDenom: "batom",
      coinMinimalDenom: "cw20:terra18zqcnl83z98tf6lly37gghm7238k7lh79u4z9a",
      coinDecimals: 6
    },
    {
      coinDenom: "webatom",
      coinMinimalDenom: "cw20:terra128pe5jpempxu0nws5lw28se9zknhsr78626cpn",
      coinDecimals: 6
    },
    {
      coinDenom: "wcoin",
      coinMinimalDenom: "cw20:terra1laczhlpxlgmrwr9un9ds74qxd2fj4754nf82dn",
      coinDecimals: 6
    },
    {
      coinDenom: "lctfancard",
      coinMinimalDenom: "cw20:terra1thhm2u93m2stytzynhsxh5h3jrtg540x4punqy",
      coinDecimals: 6
    },
    {
      coinDenom: "kntc",
      coinMinimalDenom: "cw20:terra1yeyr6taynkwdl85ppaggr3zr8txhf66cny2ang",
      coinDecimals: 6
    },
    {
      coinDenom: "kust",
      coinMinimalDenom: "cw20:terra1g53pyke8jtmt4lwvk4yl0xaqc4u0qlsl8dz3ex",
      coinDecimals: 6
    },
    {
      coinDenom: "steak",
      coinMinimalDenom: "cw20:terra1rl4zyexjphwgx6v3ytyljkkc4mrje2pyznaclv",
      coinDecimals: 6
    },
    {
      coinDenom: "cst",
      coinMinimalDenom: "cw20:terra1jkkt5638cd5pur0u5jnr2juw0v6hz5d6z8xu8m",
      coinDecimals: 6
    },
    {
      coinDenom: "cstfancard",
      coinMinimalDenom: "cw20:terra1kz7qszu7p4dg9lts7m9m7lpuarsnan47jh3fam",
      coinDecimals: 6
    },
    {
      coinDenom: "nwld",
      coinMinimalDenom: "cw20:terra1amz5c45l34n7w8m5a3z7rd7u0k037x4nnsemwj",
      coinDecimals: 9
    },
    {
      coinDenom: "fury",
      coinMinimalDenom: "cw20:terra1cdc6nlsx0l6jmt3nnx7gxjggf902wge3n2z76k",
      coinDecimals: 6
    },
    {
      coinDenom: "rct",
      coinMinimalDenom: "cw20:terra17n223dxpkypc5c48la7aqjvverczg82ga3cr93",
      coinDecimals: 6
    },
    {
      coinDenom: "vitc",
      coinMinimalDenom: "cw20:terra14vw4sfqwe7jw8ppcc7u44vq7hy9qa2nlstnxmu",
      coinDecimals: 6
    },
    {
      coinDenom: "sb",
      coinMinimalDenom: "cw20:terra1948uvsah8aw40dhsa9mhl3htq8lraj0smlh77g",
      coinDecimals: 6
    },
    {
      coinDenom: "toad",
      coinMinimalDenom: "cw20:terra1rz964297kvt86rteajhtp4hsffhcum0ye8eljh",
      coinDecimals: 6
    },
    {
      coinDenom: "orionastro",
      coinMinimalDenom: "cw20:terra1yhlhrea3rgyx2xdnsswsfakn28qa8z7yp5gmhd",
      coinDecimals: 6
    },
    {
      coinDenom: "retro",
      coinMinimalDenom: "cw20:terra1j4hwavavmtsafa6zr0npalfz3tk9gf3p4787mp",
      coinDecimals: 6
    },
    {
      coinDenom: "tnd",
      coinMinimalDenom: "cw20:terra16wggm67a34msdxasg2vergm2pt289y7930wv7d",
      coinDecimals: 6
    },
    {
      coinDenom: "stnd",
      coinMinimalDenom: "cw20:terra1n9k2he20h5vpyn4mgv7pg4pzvw2n3wc4a86v3g",
      coinDecimals: 6
    },
    {
      coinDenom: "nwt",
      coinMinimalDenom: "cw20:terra1ezz5xply2v3xdyv32gy5tcd7zq4k235q4xtzwe",
      coinDecimals: 9
    },
    {
      coinDenom: "aut",
      coinMinimalDenom: "uaud",
      coinDecimals: 6
    },
    {
      coinDenom: "cat",
      coinMinimalDenom: "ucad",
      coinDecimals: 6
    },
    {
      coinDenom: "cht",
      coinMinimalDenom: "uchf",
      coinDecimals: 6
    },
    {
      coinDenom: "cnt",
      coinMinimalDenom: "ucny",
      coinDecimals: 6
    },
    {
      coinDenom: "dkt",
      coinMinimalDenom: "udkk",
      coinDecimals: 6
    },
    {
      coinDenom: "eut",
      coinMinimalDenom: "ueur",
      coinDecimals: 6
    },
    {
      coinDenom: "gbt",
      coinMinimalDenom: "ugbp",
      coinDecimals: 6
    },
    {
      coinDenom: "hkt",
      coinMinimalDenom: "uhkd",
      coinDecimals: 6
    },
    {
      coinDenom: "idt",
      coinMinimalDenom: "uidr",
      coinDecimals: 6
    },
    {
      coinDenom: "int",
      coinMinimalDenom: "uinr",
      coinDecimals: 6
    },
    {
      coinDenom: "jpt",
      coinMinimalDenom: "ujpy",
      coinDecimals: 6
    },
    {
      coinDenom: "mnt",
      coinMinimalDenom: "umnt",
      coinDecimals: 6
    },
    {
      coinDenom: "myt",
      coinMinimalDenom: "umyr",
      coinDecimals: 6
    },
    {
      coinDenom: "not",
      coinMinimalDenom: "unok",
      coinDecimals: 6
    },
    {
      coinDenom: "pht",
      coinMinimalDenom: "uphp",
      coinDecimals: 6
    },
    {
      coinDenom: "sdt",
      coinMinimalDenom: "usdr",
      coinDecimals: 6
    },
    {
      coinDenom: "set",
      coinMinimalDenom: "usek",
      coinDecimals: 6
    },
    {
      coinDenom: "sgt",
      coinMinimalDenom: "usgd",
      coinDecimals: 6
    },
    {
      coinDenom: "tht",
      coinMinimalDenom: "uthb",
      coinDecimals: 6
    },
    {
      coinDenom: "twt",
      coinMinimalDenom: "utwd",
      coinDecimals: 6
    },
    {
      coinDenom: "neb",
      coinMinimalDenom: "cw20:terra1mpq5zkkm39nmjrjg9raknpfrfmcfwv0nh0whvn",
      coinDecimals: 6
    },
    {
      coinDenom: "trit",
      coinMinimalDenom: "cw20:terra1g6fm3yu79gv0rc8067n2nnfpf0vks6n0wpzaf4u7w48tdrmj98zsy7uu00",
      coinDecimals: 6
    },
    {
      coinDenom: "juris",
      coinMinimalDenom: "cw20:terra1vhgq25vwuhdhn9xjll0rhl2s67jzw78a4g2t78y5kz89q9lsdskq2pxcj2",
      coinDecimals: 6
    },
    {
      coinDenom: "tadf",
      coinMinimalDenom: "cw20:terra19gzvkw5hft3ulp8n6ws3p9yradhc802axqal59lzxau6rqxktj9q0dwf9c",
      coinDecimals: 6
    },
    {
      coinDenom: "frog",
      coinMinimalDenom: "cw20:terra1wez9puj43v4s25vrex7cv3ut3w75w4h6j5e537sujyuxj0r5ne2qp9uwl9",
      coinDecimals: 6
    }
  ],
  rest: "https://terra-classic-lcd.publicnode.com",
  rpc: "https://terra-classic-rpc.publicnode.com:443",
  bech32Config: {
    bech32PrefixAccAddr: "terra",
    bech32PrefixAccPub: "terrapub",
    bech32PrefixValAddr: "terravaloper",
    bech32PrefixValPub: "terravaloperpub",
    bech32PrefixConsAddr: "terravalcons",
    bech32PrefixConsPub: "terravalconspub"
  },
  chainName: "terra",
  feeCurrencies: [
    {
      coinDenom: "luna",
      coinMinimalDenom: "uluna",
      coinDecimals: 6,
      coinGeckoId: "terra-luna",
      gasPriceStep: {
        low: 28.325,
        average: 28.325,
        high: 50
      }
    },
    {
      coinDenom: "sdt",
      coinMinimalDenom: "usdr",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.52469,
        average: 0.52469,
        high: 0.52469
      }
    },
    {
      coinDenom: "ust",
      coinMinimalDenom: "uusd",
      coinDecimals: 6,
      coinGeckoId: "terrausd",
      gasPriceStep: {
        low: 0.75,
        average: 0.75,
        high: 0.75
      }
    },
    {
      coinDenom: "krt",
      coinMinimalDenom: "ukrw",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 850,
        average: 850,
        high: 850
      }
    },
    {
      coinDenom: "mnt",
      coinMinimalDenom: "umnt",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 2142.855,
        average: 2142.855,
        high: 2142.855
      }
    },
    {
      coinDenom: "eut",
      coinMinimalDenom: "ueur",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.625,
        average: 0.625,
        high: 0.625
      }
    },
    {
      coinDenom: "cnt",
      coinMinimalDenom: "ucny",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 4.9,
        average: 4.9,
        high: 4.9
      }
    },
    {
      coinDenom: "jpt",
      coinMinimalDenom: "ujpy",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 81.85,
        average: 81.85,
        high: 81.85
      }
    },
    {
      coinDenom: "gbt",
      coinMinimalDenom: "ugbp",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.55,
        average: 0.55,
        high: 0.55
      }
    },
    {
      coinDenom: "int",
      coinMinimalDenom: "uinr",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 54.4,
        average: 54.4,
        high: 54.4
      }
    },
    {
      coinDenom: "cat",
      coinMinimalDenom: "ucad",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.95,
        average: 0.95,
        high: 0.95
      }
    },
    {
      coinDenom: "cht",
      coinMinimalDenom: "uchf",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.7,
        average: 0.7,
        high: 0.7
      }
    },
    {
      coinDenom: "aut",
      coinMinimalDenom: "uaud",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.95,
        average: 0.95,
        high: 0.95
      }
    },
    {
      coinDenom: "sgt",
      coinMinimalDenom: "usgd",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 1,
        average: 1,
        high: 1
      }
    },
    {
      coinDenom: "tht",
      coinMinimalDenom: "uthb",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 23.1,
        average: 23.1,
        high: 23.1
      }
    },
    {
      coinDenom: "set",
      coinMinimalDenom: "usek",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 6.25,
        average: 6.25,
        high: 6.25
      }
    },
    {
      coinDenom: "not",
      coinMinimalDenom: "unok",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 6.25,
        average: 6.25,
        high: 6.25
      }
    },
    {
      coinDenom: "dkt",
      coinMinimalDenom: "udkk",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 4.5,
        average: 4.5,
        high: 4.5
      }
    },
    {
      coinDenom: "idt",
      coinMinimalDenom: "uidr",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 10900,
        average: 10900,
        high: 10900
      }
    },
    {
      coinDenom: "pht",
      coinMinimalDenom: "uphp",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 38,
        average: 38,
        high: 38
      }
    },
    {
      coinDenom: "hkt",
      coinMinimalDenom: "uhkd",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 5.85,
        average: 5.85,
        high: 5.85
      }
    },
    {
      coinDenom: "myt",
      coinMinimalDenom: "umyr",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 3,
        average: 3,
        high: 3
      }
    },
    {
      coinDenom: "twt",
      coinMinimalDenom: "utwd",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 20,
        average: 20,
        high: 20
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "luna",
    coinMinimalDenom: "uluna",
    coinDecimals: 6,
    coinGeckoId: "terra-luna"
  },
  bip44: {
    coinType: 330
  }
});
export const terra2 = defineChainInfo({
  chainId: "phoenix-1",
  currencies: [
    {
      coinDenom: "luna",
      coinMinimalDenom: "uluna",
      coinDecimals: 6,
      coinGeckoId: "terra-luna-2"
    },
    {
      coinDenom: "astro.cw20",
      coinMinimalDenom: "cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26",
      coinDecimals: 6
    },
    {
      coinDenom: "astro",
      coinMinimalDenom: "ibc/8D8A7F7253615E5F76CB6252A1E1BD921D5EDB7BBAAF8913FB1C77FF125D9995",
      coinDecimals: 6
    },
    {
      coinDenom: "cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k",
      coinMinimalDenom: "cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k",
      coinDecimals: 0
    },
    {
      coinDenom: "Reis",
      coinMinimalDenom: "cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8",
      coinDecimals: 6
    },
    {
      coinDenom: "Escudos",
      coinMinimalDenom: "cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg",
      coinDecimals: 6
    },
    {
      coinDenom: "Alem",
      coinMinimalDenom: "cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q",
      coinDecimals: 6
    },
    {
      coinDenom: "AMG",
      coinMinimalDenom: "cw20:terra1en42e2vsvtdsvrcqg5s5e5e4djejjaed6fxmvtpweg3tu33h6k5qkg9c40",
      coinDecimals: 6
    },
    {
      coinDenom: "ARK",
      coinMinimalDenom: "cw20:terra1ysd87nayjuelxj4wvp4wnp9as0mwszzkje6a9z6f3xx2903ghnsq4hm50y",
      coinDecimals: 6
    },
    {
      coinDenom: "DANU",
      coinMinimalDenom: "cw20:terra1vj68f2ntauaj5dfvy5z4tq4we3hsyg363k63js5sae2t7th9aacqan89sr",
      coinDecimals: 6
    },
    {
      coinDenom: "TRS",
      coinMinimalDenom: "cw20:terra1swzpenwh39f8aa7qht34r05f8ew6k2vehvqt2aw4fjy0fgghhheqs9l6h7",
      coinDecimals: 6
    },
    {
      coinDenom: "PLASMA",
      coinMinimalDenom: "cw20:terra1mqs6mdx0ak7qvjzs6efhg65g4j5pzwpdkcgdsv5tpekln3qhggrq3qzvdp",
      coinDecimals: 6
    },
    {
      coinDenom: "DMT",
      coinMinimalDenom: "cw20:terra1xfkkgwxychgrnq0vcp82u32mecrzj8s64s03cxtmf46k6j2n2wssc7rzjf",
      coinDecimals: 6
    },
    {
      coinDenom: "ampluna",
      coinMinimalDenom: "cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct",
      coinDecimals: 6,
      coinGeckoId: "eris-amplified-luna"
    },
    {
      coinDenom: "roar",
      coinMinimalDenom: "cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv",
      coinDecimals: 6,
      coinGeckoId: "lion-dao"
    },
    {
      coinDenom: "gem",
      coinMinimalDenom: "cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv",
      coinDecimals: 6
    },
    {
      coinDenom: "cub",
      coinMinimalDenom: "cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t",
      coinDecimals: 6
    },
    {
      coinDenom: "blue",
      coinMinimalDenom: "cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584",
      coinDecimals: 6
    },
    {
      coinDenom: "xxx",
      coinMinimalDenom: "cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn",
      coinDecimals: 10
    },
    {
      coinDenom: "GUGU",
      coinMinimalDenom: "cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces",
      coinDecimals: 6
    },
    {
      coinDenom: "bLUNA",
      coinMinimalDenom: "cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml",
      coinDecimals: 6,
      coinGeckoId: "backbone-labs-staked-luna"
    },
    {
      coinDenom: "sayve",
      coinMinimalDenom: "cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3",
      coinDecimals: 6
    },
    {
      coinDenom: "ampWHALEt",
      coinMinimalDenom: "factory/terra1j35ta0llaxcf55auv2cjqau5a7aee6g8fz7md7my7005cvh23jfsaw83dy/ampWHALEt",
      coinDecimals: 6
    },
    {
      coinDenom: "boneWHALEt",
      coinMinimalDenom: "factory/terra10j3zrymfrkta2pxe0gklc79gu06tqyuy8c3kh6tqdsrrprsjqkrqzfl4df/boneWHALEt",
      coinDecimals: 6
    },
    {
      coinDenom: "ampROAR",
      coinMinimalDenom: "factory/terra1vklefn7n6cchn0u962w3gaszr4vf52wjvd4y95t2sydwpmpdtszsqvk9wy/ampROAR",
      coinDecimals: 6
    },
    {
      coinDenom: "nico",
      coinMinimalDenom: "cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3",
      coinDecimals: 18
    },
    {
      coinDenom: "seas",
      coinMinimalDenom: "cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala",
      coinDecimals: 6
    },
    {
      coinDenom: "bitz",
      coinMinimalDenom: "cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v",
      coinDecimals: 6
    },
    {
      coinDenom: "factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH",
      coinMinimalDenom: "ibc/A356EC90DC3AE43D485514DA7260EDC7ABB5CFAA0654CE2524C739392975AD3C",
      coinDecimals: 18
    },
    {
      coinDenom: "seul",
      coinMinimalDenom: "cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l",
      coinDecimals: 6
    },
    {
      coinDenom: "xseul",
      coinMinimalDenom: "cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5",
      coinDecimals: 6
    },
    {
      coinDenom: "ito",
      coinMinimalDenom: "cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s",
      coinDecimals: 6
    },
    {
      coinDenom: "ARMANI",
      coinMinimalDenom: "cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8",
      coinDecimals: 6
    },
    {
      coinDenom: "DROGO",
      coinMinimalDenom: "cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun",
      coinDecimals: 6
    },
    {
      coinDenom: "ADO",
      coinMinimalDenom: "cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu",
      coinDecimals: 6
    },
    {
      coinDenom: "WOSMO",
      coinMinimalDenom: "ibc/E18C0D303957867A164DE2863D1C3F83135936E6F17CADF4D241FBC12B0F23B2",
      coinDecimals: 6
    },
    {
      coinDenom: "DNA",
      coinMinimalDenom: "cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h",
      coinDecimals: 6
    },
    {
      coinDenom: "bitmos",
      coinMinimalDenom: "cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq",
      coinDecimals: 6
    },
    {
      coinDenom: "lads",
      coinMinimalDenom: "cw20:terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj",
      coinDecimals: 6
    },
    {
      coinDenom: "rstk",
      coinMinimalDenom: "ibc/F709DF4969CD26174C1A53AA95F3D98BE643C1A52C9981487766F96A1811F6A4",
      coinDecimals: 6
    },
    {
      coinDenom: "CLON",
      coinMinimalDenom: "cw20:terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2",
      coinDecimals: 6
    },
    {
      coinDenom: "MOAR",
      coinMinimalDenom: "factory/terra1dndhtdr2v7ca8rrn67chlqw3cl3xhm3m2uxls62vghcg3fsh5tpss5xmcu/MOAR",
      coinDecimals: 6
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "ibc/9B19062D46CAB50361CE9B0A3E6D0A7A53AC9E7CB361F32A73CC733144A9A9E5",
      coinDecimals: 6
    },
    {
      coinDenom: "atom-luna-lp",
      coinMinimalDenom: "factory/terra1djk2zl83dspt696ex5crhfacu8vm6934576t4zdd2592fzyahr2qma6guq/ULUN-IBC/-LP",
      coinDecimals: 6
    },
    {
      coinDenom: "luna-usdc-lp",
      coinMinimalDenom: "factory/terra12jxfw2vg4cu6mxlgf39dp5ccxtuwm468w8eh9cnh2qsxc9t0sffs7ekhft/ULUN-IBC/-LP",
      coinDecimals: 6
    },
    {
      coinDenom: "luna-usdt-lp",
      coinMinimalDenom: "factory/terra1w9spejtuac5dt0gympq576uhwde39exhh7hdxwl99rjvaphfukkq6y4cv7/ULUN-IBC/-LP",
      coinDecimals: 6
    },
    {
      coinDenom: "ashLUNA",
      coinMinimalDenom: "factory/terra1f5cfm48gcezl3cx25l64ngc4yktnmx7rcpj3kggu6v273742sqqs5yn5ks/luna.ash",
      coinDecimals: 6
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/2C962DAB9F57FE0921435426AE75196009FAA1981BF86991203C8411F8980FDB",
      coinDecimals: 6
    },
    {
      coinDenom: "COSMO",
      coinMinimalDenom: "ibc/4925733868E7999F5822C961ADE9470A7FC5FA4A560BAE1DE102783C3F64C201",
      coinDecimals: 6
    }
  ],
  rest: "https://lcd-terra.wildsage.io",
  rpc: "https://rpc.lavenderfive.com:443/terra2",
  bech32Config: {
    bech32PrefixAccAddr: "terra",
    bech32PrefixAccPub: "terrapub",
    bech32PrefixValAddr: "terravaloper",
    bech32PrefixValPub: "terravaloperpub",
    bech32PrefixConsAddr: "terravalcons",
    bech32PrefixConsPub: "terravalconspub"
  },
  chainName: "terra2",
  feeCurrencies: [
    {
      coinDenom: "luna",
      coinMinimalDenom: "uluna",
      coinDecimals: 6,
      coinGeckoId: "terra-luna-2",
      gasPriceStep: {
        low: 0.015,
        average: 0.015,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "luna",
    coinMinimalDenom: "uluna",
    coinDecimals: 6,
    coinGeckoId: "terra-luna-2"
  },
  bip44: {
    coinType: 330
  }
});
export const tgrade = defineChainInfo({
  chainId: "tgrade-mainnet-1",
  currencies: [
    {
      coinDenom: "tgd",
      coinMinimalDenom: "utgd",
      coinDecimals: 6,
      coinGeckoId: "tgrade"
    }
  ],
  rest: "https://api.mainnet-1.tgrade.confio.run",
  rpc: "https://rpc.mainnet-1.tgrade.confio.run",
  bech32Config: {
    bech32PrefixAccAddr: "tgrade",
    bech32PrefixAccPub: "tgradepub",
    bech32PrefixValAddr: "tgradevaloper",
    bech32PrefixValPub: "tgradevaloperpub",
    bech32PrefixConsAddr: "tgradevalcons",
    bech32PrefixConsPub: "tgradevalconspub"
  },
  chainName: "tgrade",
  feeCurrencies: [
    {
      coinDenom: "tgd",
      coinMinimalDenom: "utgd",
      coinDecimals: 6,
      coinGeckoId: "tgrade",
      gasPriceStep: {
        low: 0.05,
        average: 0.075,
        high: 0.1
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "tgd",
    coinMinimalDenom: "utgd",
    coinDecimals: 6,
    coinGeckoId: "tgrade"
  },
  bip44: {
    coinType: 118
  }
});
export const titan = defineChainInfo({
  chainId: "titan_18888-1",
  currencies: [
    {
      coinDenom: "tkx",
      coinMinimalDenom: "atkx",
      coinDecimals: 18,
      coinGeckoId: "tokenize-xchange"
    }
  ],
  rest: "https://titan-lcd.titanlab.io:443",
  rpc: "https://titan-rpc.titanlab.io:443",
  bech32Config: {
    bech32PrefixAccAddr: "titan",
    bech32PrefixAccPub: "titanpub",
    bech32PrefixValAddr: "titanvaloper",
    bech32PrefixValPub: "titanvaloperpub",
    bech32PrefixConsAddr: "titanvalcons",
    bech32PrefixConsPub: "titanvalconspub"
  },
  chainName: "titan",
  feeCurrencies: [
    {
      coinDenom: "tkx",
      coinMinimalDenom: "atkx",
      coinDecimals: 18,
      coinGeckoId: "tokenize-xchange",
      gasPriceStep: {
        low: 100000000000,
        average: 110000000000,
        high: 200000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "tkx",
    coinMinimalDenom: "atkx",
    coinDecimals: 18,
    coinGeckoId: "tokenize-xchange"
  },
  bip44: {
    coinType: 60
  }
});
export const umee = defineChainInfo({
  chainId: "umee-1",
  currencies: [
    {
      coinDenom: "umee",
      coinMinimalDenom: "uumee",
      coinDecimals: 6,
      coinGeckoId: "umee"
    }
  ],
  rest: "https://api-umee-ia.cosmosia.notional.ventures/",
  rpc: "https://umee-rpc.polkachu.com",
  bech32Config: {
    bech32PrefixAccAddr: "umee",
    bech32PrefixAccPub: "umeepub",
    bech32PrefixValAddr: "umeevaloper",
    bech32PrefixValPub: "umeevaloperpub",
    bech32PrefixConsAddr: "umeevalcons",
    bech32PrefixConsPub: "umeevalconspub"
  },
  chainName: "umee",
  feeCurrencies: [
    {
      coinDenom: "umee",
      coinMinimalDenom: "uumee",
      coinDecimals: 6,
      coinGeckoId: "umee",
      gasPriceStep: {
        low: 0.1,
        average: 0.12,
        high: 0.2
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "umee",
    coinMinimalDenom: "uumee",
    coinDecimals: 6,
    coinGeckoId: "umee"
  },
  bip44: {
    coinType: 118
  }
});
export const unification = defineChainInfo({
  chainId: "FUND-MainNet-2",
  currencies: [
    {
      coinDenom: "FUND",
      coinMinimalDenom: "nund",
      coinDecimals: 9,
      coinGeckoId: "unification"
    }
  ],
  rest: "https://rest.unification.io",
  rpc: "https://rpc.unification.io:443",
  bech32Config: {
    bech32PrefixAccAddr: "und",
    bech32PrefixAccPub: "undpub",
    bech32PrefixValAddr: "undvaloper",
    bech32PrefixValPub: "undvaloperpub",
    bech32PrefixConsAddr: "undvalcons",
    bech32PrefixConsPub: "undvalconspub"
  },
  chainName: "unification",
  feeCurrencies: [
    {
      coinDenom: "FUND",
      coinMinimalDenom: "nund",
      coinDecimals: 9,
      coinGeckoId: "unification",
      gasPriceStep: {
        low: 100,
        average: 200,
        high: 300
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "FUND",
    coinMinimalDenom: "nund",
    coinDecimals: 9,
    coinGeckoId: "unification"
  },
  bip44: {
    coinType: 5555
  }
});
export const ununifi = defineChainInfo({
  chainId: "ununifi-beta-v1",
  currencies: [
    {
      coinDenom: "guu",
      coinMinimalDenom: "uguu",
      coinDecimals: 6
    }
  ],
  rest: "https://a.lcd.ununifi.cauchye.net:1318",
  rpc: "http://a.lcd.ununifi.cauchye.net:26657",
  bech32Config: {
    bech32PrefixAccAddr: "ununifi",
    bech32PrefixAccPub: "ununifipub",
    bech32PrefixValAddr: "ununifivaloper",
    bech32PrefixValPub: "ununifivaloperpub",
    bech32PrefixConsAddr: "ununifivalcons",
    bech32PrefixConsPub: "ununifivalconspub"
  },
  chainName: "ununifi",
  feeCurrencies: [
    {
      coinDenom: "guu",
      coinMinimalDenom: "uguu",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0025,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "guu",
    coinMinimalDenom: "uguu",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const uptick = defineChainInfo({
  chainId: "uptick_117-1",
  currencies: [
    {
      coinDenom: "uptick",
      coinMinimalDenom: "auptick",
      coinDecimals: 18
    }
  ],
  rest: "https://uptick-rest.brocha.in:443",
  rpc: "https://uptick-rpc.brocha.in:443",
  bech32Config: {
    bech32PrefixAccAddr: "uptick",
    bech32PrefixAccPub: "uptickpub",
    bech32PrefixValAddr: "uptickvaloper",
    bech32PrefixValPub: "uptickvaloperpub",
    bech32PrefixConsAddr: "uptickvalcons",
    bech32PrefixConsPub: "uptickvalconspub"
  },
  chainName: "uptick",
  feeCurrencies: [
    {
      coinDenom: "uptick",
      coinMinimalDenom: "auptick",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 13000000000,
        average: 16000000000,
        high: 20000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "uptick",
    coinMinimalDenom: "auptick",
    coinDecimals: 18
  },
  bip44: {
    coinType: 60
  }
});
export const vidulum = defineChainInfo({
  chainId: "vidulum-1",
  currencies: [
    {
      coinDenom: "vdl",
      coinMinimalDenom: "uvdl",
      coinDecimals: 6,
      coinGeckoId: "vidulum"
    }
  ],
  rest: "https://mainnet-lcd.vidulum.app",
  rpc: "https://mainnet-rpc.vidulum.app/",
  bech32Config: {
    bech32PrefixAccAddr: "vdl",
    bech32PrefixAccPub: "vdlpub",
    bech32PrefixValAddr: "vdlvaloper",
    bech32PrefixValPub: "vdlvaloperpub",
    bech32PrefixConsAddr: "vdlvalcons",
    bech32PrefixConsPub: "vdlvalconspub"
  },
  chainName: "vidulum",
  feeCurrencies: [
    {
      coinDenom: "vdl",
      coinMinimalDenom: "uvdl",
      coinDecimals: 6,
      coinGeckoId: "vidulum",
      gasPriceStep: {
        low: 0.002,
        average: 0.005,
        high: 0.007
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "vdl",
    coinMinimalDenom: "uvdl",
    coinDecimals: 6,
    coinGeckoId: "vidulum"
  },
  bip44: {
    coinType: 370
  }
});
export const xpla = defineChainInfo({
  chainId: "dimension_37-1",
  currencies: [
    {
      coinDenom: "xpla",
      coinMinimalDenom: "axpla",
      coinDecimals: 18,
      coinGeckoId: "xpla"
    }
  ],
  rest: "https://dimension-lcd.xpla.io",
  rpc: "https://dimension-rpc.xpla.dev",
  bech32Config: {
    bech32PrefixAccAddr: "xpla",
    bech32PrefixAccPub: "xplapub",
    bech32PrefixValAddr: "xplavaloper",
    bech32PrefixValPub: "xplavaloperpub",
    bech32PrefixConsAddr: "xplavalcons",
    bech32PrefixConsPub: "xplavalconspub"
  },
  chainName: "xpla",
  feeCurrencies: [
    {
      coinDenom: "xpla",
      coinMinimalDenom: "axpla",
      coinDecimals: 18,
      coinGeckoId: "xpla",
      gasPriceStep: {
        low: 850000000000,
        average: 1147500000000,
        high: 1487500000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "xpla",
    coinMinimalDenom: "axpla",
    coinDecimals: 18,
    coinGeckoId: "xpla"
  },
  bip44: {
    coinType: 60
  }
});
export const zetachain = defineChainInfo({
  chainId: "zetachain_7000-1",
  currencies: [
    {
      coinDenom: "zeta",
      coinMinimalDenom: "azeta",
      coinDecimals: 18,
      coinGeckoId: "zetachain"
    }
  ],
  rest: "https://zetachain.blockpi.network/lcd/v1/public",
  rpc: "https://zetachain.blockpi.network/rpc/v1/public",
  bech32Config: {
    bech32PrefixAccAddr: "zeta",
    bech32PrefixAccPub: "zetapub",
    bech32PrefixValAddr: "zetavaloper",
    bech32PrefixValPub: "zetavaloperpub",
    bech32PrefixConsAddr: "zetavalcons",
    bech32PrefixConsPub: "zetavalconspub"
  },
  chainName: "zetachain",
  feeCurrencies: [
    {
      coinDenom: "zeta",
      coinMinimalDenom: "azeta",
      coinDecimals: 18,
      coinGeckoId: "zetachain",
      gasPriceStep: {
        low: 20000000000,
        average: 25000000000,
        high: 40000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "zeta",
    coinMinimalDenom: "azeta",
    coinDecimals: 18,
    coinGeckoId: "zetachain"
  },
  bip44: {
    coinType: 60
  }
});

export const airchainstestnet = defineChainInfo({
  chainId: "junction",
  currencies: [
    {
      coinDenom: "AMF",
      coinMinimalDenom: "amf",
      coinDecimals: 6
    }
  ],
  rest: "https://rest.nodejumper.io/airchainstestnet",
  rpc: "https://junction-rpc.validatorvn.com/",
  bech32Config: {
    bech32PrefixAccAddr: "air",
    bech32PrefixAccPub: "airpub",
    bech32PrefixValAddr: "airvaloper",
    bech32PrefixValPub: "airvaloperpub",
    bech32PrefixConsAddr: "airvalcons",
    bech32PrefixConsPub: "airvalconspub"
  },
  chainName: "airchainstestnet",
  feeCurrencies: [
    {
      coinDenom: "AMF",
      coinMinimalDenom: "amf",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.00025,
        average: 0.005,
        high: 0.01
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "AMF",
    coinMinimalDenom: "amf",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const akashtestnet = defineChainInfo({
  chainId: "sandbox-01",
  currencies: [
    {
      coinDenom: "akt",
      coinMinimalDenom: "uakt",
      coinDecimals: 6
    }
  ],
  rest: "https://api.sandbox-01.aksh.pw:443",
  rpc: "https://rpc.sandbox-01.aksh.pw:443",
  bech32Config: {
    bech32PrefixAccAddr: "akash",
    bech32PrefixAccPub: "akashpub",
    bech32PrefixValAddr: "akashvaloper",
    bech32PrefixValPub: "akashvaloperpub",
    bech32PrefixConsAddr: "akashvalcons",
    bech32PrefixConsPub: "akashvalconspub"
  },
  chainName: "akashtestnet",
  feeCurrencies: [
    {
      coinDenom: "akt",
      coinMinimalDenom: "uakt",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.025,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "akt",
    coinMinimalDenom: "uakt",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const archwaytestnet = defineChainInfo({
  chainId: "constantine-3",
  currencies: [
    {
      coinDenom: "const",
      coinMinimalDenom: "aconst",
      coinDecimals: 18
    },
    {
      coinDenom: "wARCH",
      coinMinimalDenom: "cw20:archway1dz6h2smr432gvzruklk3lps7ak2ca7cngdge4vym93wehkkypwpqgwr2q2",
      coinDecimals: 18
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/34F8D3402273FFA5278AE5757D81CE151ACFD4B19C494C0EE372A7229714824F",
      coinDecimals: 6
    },
    {
      coinDenom: "wUSDC",
      coinMinimalDenom: "cw20:archway172vetupqnkgdc7dp3gwqpvk5ljmgzyj2gs4ag2fdmp0s2rucxxsqh0nqeu",
      coinDecimals: 6
    }
  ],
  rest: "https://api.constantine.archway.io",
  rpc: "https://rpc.constantine.archway.io",
  bech32Config: {
    bech32PrefixAccAddr: "archway",
    bech32PrefixAccPub: "archwaypub",
    bech32PrefixValAddr: "archwayvaloper",
    bech32PrefixValPub: "archwayvaloperpub",
    bech32PrefixConsAddr: "archwayvalcons",
    bech32PrefixConsPub: "archwayvalconspub"
  },
  chainName: "archwaytestnet",
  feeCurrencies: [
    {
      coinDenom: "const",
      coinMinimalDenom: "aconst",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 1000000000000,
        average: 1500000000000,
        high: 2000000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "const",
    coinMinimalDenom: "aconst",
    coinDecimals: 18
  },
  bip44: {
    coinType: 118
  }
});
export const arkeonetworktestnet = defineChainInfo({
  chainId: "arkeo",
  currencies: [
    {
      coinDenom: "arkeo",
      coinMinimalDenom: "uarkeo",
      coinDecimals: 6
    }
  ],
  rest: "https://arkeonetwork-testnet.nodejumper.io:1317",
  rpc: "https://arkeonetwork-testnet.nodejumper.io:26657",
  bech32Config: {
    bech32PrefixAccAddr: "tarkeo",
    bech32PrefixAccPub: "tarkeopub",
    bech32PrefixValAddr: "tarkeovaloper",
    bech32PrefixValPub: "tarkeovaloperpub",
    bech32PrefixConsAddr: "tarkeovalcons",
    bech32PrefixConsPub: "tarkeovalconspub"
  },
  chainName: "arkeonetworktestnet",
  feeCurrencies: [
    {
      coinDenom: "arkeo",
      coinMinimalDenom: "uarkeo",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "arkeo",
    coinMinimalDenom: "uarkeo",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const artelatestnet = defineChainInfo({
  chainId: "artela_11820-1",
  currencies: [
    {
      coinDenom: "art",
      coinMinimalDenom: "uart",
      coinDecimals: 18
    }
  ],
  rest: "https://testnet-rpc1.artela.network",
  rpc: "https://testnet-rpc1.artela.network",
  bech32Config: {
    bech32PrefixAccAddr: "art",
    bech32PrefixAccPub: "artpub",
    bech32PrefixValAddr: "artvaloper",
    bech32PrefixValPub: "artvaloperpub",
    bech32PrefixConsAddr: "artvalcons",
    bech32PrefixConsPub: "artvalconspub"
  },
  chainName: "artelatestnet",
  feeCurrencies: [
    {
      coinDenom: "art",
      coinMinimalDenom: "uart",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 20000000000,
        average: 25000000000,
        high: 40000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "art",
    coinMinimalDenom: "uart",
    coinDecimals: 18
  },
  bip44: {
    coinType: 60
  }
});
export const auratestnet = defineChainInfo({
  chainId: "aura_6321-3",
  currencies: [
    {
      coinDenom: "eaura",
      coinMinimalDenom: "ueaura",
      coinDecimals: 6
    }
  ],
  rest: "https://lcd.euphoria.aura.network/",
  rpc: "https://rpc.euphoria.aura.network/",
  bech32Config: {
    bech32PrefixAccAddr: "aura",
    bech32PrefixAccPub: "aurapub",
    bech32PrefixValAddr: "auravaloper",
    bech32PrefixValPub: "auravaloperpub",
    bech32PrefixConsAddr: "auravalcons",
    bech32PrefixConsPub: "auravalconspub"
  },
  chainName: "auratestnet",
  feeCurrencies: [
    {
      coinDenom: "eaura",
      coinMinimalDenom: "ueaura",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.001,
        average: 0.002,
        high: 0.0025
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "eaura",
    coinMinimalDenom: "ueaura",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const axelartestnet = defineChainInfo({
  chainId: "axelar-testnet-lisbon-3",
  currencies: [
    {
      coinDenom: "axl",
      coinMinimalDenom: "uaxl",
      coinDecimals: 6,
      coinGeckoId: "axelar"
    },
    {
      coinDenom: "ausdc",
      coinMinimalDenom: "uausdc",
      coinDecimals: 6
    },
    {
      coinDenom: "weth",
      coinMinimalDenom: "eth-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "wglmr",
      coinMinimalDenom: "wglmr-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "wmatic",
      coinMinimalDenom: "wmatic-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "wbnb",
      coinMinimalDenom: "wbnb-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "avax",
      coinMinimalDenom: "wavax-wei",
      coinDecimals: 18
    },
    {
      coinDenom: "ftm",
      coinMinimalDenom: "wftm-wei",
      coinDecimals: 18
    }
  ],
  rest: "https://lcd-axelar-testnet.imperator.co:443",
  rpc: "https://rpc-axelar-testnet.imperator.co:443",
  bech32Config: {
    bech32PrefixAccAddr: "axelar",
    bech32PrefixAccPub: "axelarpub",
    bech32PrefixValAddr: "axelarvaloper",
    bech32PrefixValPub: "axelarvaloperpub",
    bech32PrefixConsAddr: "axelarvalcons",
    bech32PrefixConsPub: "axelarvalconspub"
  },
  chainName: "axelartestnet",
  feeCurrencies: [
    {
      coinDenom: "axl",
      coinMinimalDenom: "uaxl",
      coinDecimals: 6,
      coinGeckoId: "axelar",
      gasPriceStep: {
        low: 0.007,
        average: 0.007,
        high: 0.01
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "axl",
    coinMinimalDenom: "uaxl",
    coinDecimals: 6,
    coinGeckoId: "axelar"
  },
  bip44: {
    coinType: 118
  }
});
export const babylontestnet = defineChainInfo({
  chainId: "bbn-test3",
  currencies: [
    {
      coinDenom: "bbn",
      coinMinimalDenom: "ubbn",
      coinDecimals: 6
    }
  ],
  rest: "lcd.testnet3.babylonchain.io:443",
  rpc: "rpc.testnet3.babylonchain.io:443",
  bech32Config: {
    bech32PrefixAccAddr: "bbn",
    bech32PrefixAccPub: "bbnpub",
    bech32PrefixValAddr: "bbnvaloper",
    bech32PrefixValPub: "bbnvaloperpub",
    bech32PrefixConsAddr: "bbnvalcons",
    bech32PrefixConsPub: "bbnvalconspub"
  },
  chainName: "babylontestnet",
  feeCurrencies: [
    {
      coinDenom: "bbn",
      coinMinimalDenom: "ubbn",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "bbn",
    coinMinimalDenom: "ubbn",
    coinDecimals: 6
  },
  bip44: {
    coinType: 0
  }
});
export const babylontestnet1 = defineChainInfo({
  chainId: "bbn-test1",
  currencies: [
    {
      coinDenom: "bbn",
      coinMinimalDenom: "ubbn",
      coinDecimals: 6
    }
  ],
  rest: "rpc.testnet.babylonchain.io:1317",
  rpc: "rpc.testnet.babylonchain.io:26657",
  bech32Config: {
    bech32PrefixAccAddr: "bbn",
    bech32PrefixAccPub: "bbnpub",
    bech32PrefixValAddr: "bbnvaloper",
    bech32PrefixValPub: "bbnvaloperpub",
    bech32PrefixConsAddr: "bbnvalcons",
    bech32PrefixConsPub: "bbnvalconspub"
  },
  chainName: "babylontestnet1",
  feeCurrencies: [
    {
      coinDenom: "bbn",
      coinMinimalDenom: "ubbn",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "bbn",
    coinMinimalDenom: "ubbn",
    coinDecimals: 6
  },
  bip44: {
    coinType: 0
  }
});
export const bitcannadevnet = defineChainInfo({
  chainId: "bitcanna-dev-1",
  currencies: [
    {
      coinDenom: "bcna",
      coinMinimalDenom: "ubcna",
      coinDecimals: 6,
      coinGeckoId: "bitcanna"
    }
  ],
  rest: "https://lcd-testnet.bitcanna.io",
  rpc: "https://rpc-testnet.bitcanna.io",
  bech32Config: {
    bech32PrefixAccAddr: "bcna",
    bech32PrefixAccPub: "bcnapub",
    bech32PrefixValAddr: "bcnavaloper",
    bech32PrefixValPub: "bcnavaloperpub",
    bech32PrefixConsAddr: "bcnavalcons",
    bech32PrefixConsPub: "bcnavalconspub"
  },
  chainName: "bitcannadevnet",
  feeCurrencies: [
    {
      coinDenom: "bcna",
      coinMinimalDenom: "ubcna",
      coinDecimals: 6,
      coinGeckoId: "bitcanna"
    }
  ],
  stakeCurrency: {
    coinDenom: "bcna",
    coinMinimalDenom: "ubcna",
    coinDecimals: 6,
    coinGeckoId: "bitcanna"
  },
  bip44: {
    coinType: 118
  }
});
export const bitcannadevnet2 = defineChainInfo({
  chainId: "bitcanna-dev-6",
  currencies: [
    {
      coinDenom: "bcna",
      coinMinimalDenom: "ubcna",
      coinDecimals: 6,
      coinGeckoId: "bitcanna"
    }
  ],
  rest: "https://lcd-devnet-6.bitcanna.io/",
  rpc: "https://rpc-devnet-6.bitcanna.io/",
  bech32Config: {
    bech32PrefixAccAddr: "bcna",
    bech32PrefixAccPub: "bcnapub",
    bech32PrefixValAddr: "bcnavaloper",
    bech32PrefixValPub: "bcnavaloperpub",
    bech32PrefixConsAddr: "bcnavalcons",
    bech32PrefixConsPub: "bcnavalconspub"
  },
  chainName: "bitcannadevnet2",
  feeCurrencies: [
    {
      coinDenom: "bcna",
      coinMinimalDenom: "ubcna",
      coinDecimals: 6,
      coinGeckoId: "bitcanna"
    }
  ],
  stakeCurrency: {
    coinDenom: "bcna",
    coinMinimalDenom: "ubcna",
    coinDecimals: 6,
    coinGeckoId: "bitcanna"
  },
  bip44: {
    coinType: 118
  }
});
export const cascadiatestnet = defineChainInfo({
  chainId: "cascadia_6102-1",
  currencies: [
    {
      coinDenom: "tCC",
      coinMinimalDenom: "aCC",
      coinDecimals: 18
    }
  ],
  rest: "https://lcd.cascadia.foundation",
  rpc: "https://rpc.cascadia.foundation:443",
  bech32Config: {
    bech32PrefixAccAddr: "cascadia",
    bech32PrefixAccPub: "cascadiapub",
    bech32PrefixValAddr: "cascadiavaloper",
    bech32PrefixValPub: "cascadiavaloperpub",
    bech32PrefixConsAddr: "cascadiavalcons",
    bech32PrefixConsPub: "cascadiavalconspub"
  },
  chainName: "cascadiatestnet",
  feeCurrencies: [
    {
      coinDenom: "tCC",
      coinMinimalDenom: "aCC",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 7,
        average: 10,
        high: 15
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "tCC",
    coinMinimalDenom: "aCC",
    coinDecimals: 18
  },
  bip44: {
    coinType: 60
  }
});
export const celestiatestnet = defineChainInfo({
  chainId: "blockspacerace-0",
  currencies: [
    {
      coinDenom: "tia",
      coinMinimalDenom: "utia",
      coinDecimals: 6
    }
  ],
  rest: "https://celestia-blockspacerace-rest.brocha.in",
  rpc: "https://rpc-blockspacerace.pops.one/",
  bech32Config: {
    bech32PrefixAccAddr: "celestia",
    bech32PrefixAccPub: "celestiapub",
    bech32PrefixValAddr: "celestiavaloper",
    bech32PrefixValPub: "celestiavaloperpub",
    bech32PrefixConsAddr: "celestiavalcons",
    bech32PrefixConsPub: "celestiavalconspub"
  },
  chainName: "celestiatestnet",
  feeCurrencies: [
    {
      coinDenom: "tia",
      coinMinimalDenom: "utia",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "tia",
    coinMinimalDenom: "utia",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const celestiatestnet2 = defineChainInfo({
  chainId: "arabica-11",
  currencies: [
    {
      coinDenom: "tia",
      coinMinimalDenom: "utia",
      coinDecimals: 6
    }
  ],
  rest: "https://api.celestia-arabica-11.com/",
  rpc: "https://validator-1.celestia-arabica-11.com/",
  bech32Config: {
    bech32PrefixAccAddr: "celestia",
    bech32PrefixAccPub: "celestiapub",
    bech32PrefixValAddr: "celestiavaloper",
    bech32PrefixValPub: "celestiavaloperpub",
    bech32PrefixConsAddr: "celestiavalcons",
    bech32PrefixConsPub: "celestiavalconspub"
  },
  chainName: "celestiatestnet2",
  feeCurrencies: [
    {
      coinDenom: "tia",
      coinMinimalDenom: "utia",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.02,
        high: 0.1
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "tia",
    coinMinimalDenom: "utia",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const celestiatestnet3 = defineChainInfo({
  chainId: "mocha-4",
  currencies: [
    {
      coinDenom: "tia",
      coinMinimalDenom: "utia",
      coinDecimals: 6
    }
  ],
  rest: "https://api-mocha.pops.one",
  rpc: "https://rpc-mocha.pops.one",
  bech32Config: {
    bech32PrefixAccAddr: "celestia",
    bech32PrefixAccPub: "celestiapub",
    bech32PrefixValAddr: "celestiavaloper",
    bech32PrefixValPub: "celestiavaloperpub",
    bech32PrefixConsAddr: "celestiavalcons",
    bech32PrefixConsPub: "celestiavalconspub"
  },
  chainName: "celestiatestnet3",
  feeCurrencies: [
    {
      coinDenom: "tia",
      coinMinimalDenom: "utia",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.02,
        high: 0.1
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "tia",
    coinMinimalDenom: "utia",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const chain4energytestnet = defineChainInfo({
  chainId: "babajaga-1",
  currencies: [
    {
      coinDenom: "c4e",
      coinMinimalDenom: "uc4e",
      coinDecimals: 6
    }
  ],
  rest: "https://c4e.api.t.stavr.tech",
  rpc: "https://rpc-testnet.c4e.io",
  bech32Config: {
    bech32PrefixAccAddr: "c4e",
    bech32PrefixAccPub: "c4epub",
    bech32PrefixValAddr: "c4evaloper",
    bech32PrefixValPub: "c4evaloperpub",
    bech32PrefixConsAddr: "c4evalcons",
    bech32PrefixConsPub: "c4evalconspub"
  },
  chainName: "chain4energytestnet",
  feeCurrencies: [
    {
      coinDenom: "c4e",
      coinMinimalDenom: "uc4e",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.02,
        average: 0.03,
        high: 0.06
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "c4e",
    coinMinimalDenom: "uc4e",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const cheqdtestnet = defineChainInfo({
  chainId: "cheqd-testnet-6",
  currencies: [
    {
      coinDenom: "cheq",
      coinMinimalDenom: "ncheq",
      coinDecimals: 9,
      coinGeckoId: "cheqd-network"
    }
  ],
  rest: "https://api.cheqd.network",
  rpc: "https://rpc.cheqd.network",
  bech32Config: {
    bech32PrefixAccAddr: "cheqd",
    bech32PrefixAccPub: "cheqdpub",
    bech32PrefixValAddr: "cheqdvaloper",
    bech32PrefixValPub: "cheqdvaloperpub",
    bech32PrefixConsAddr: "cheqdvalcons",
    bech32PrefixConsPub: "cheqdvalconspub"
  },
  chainName: "cheqdtestnet",
  feeCurrencies: [
    {
      coinDenom: "cheq",
      coinMinimalDenom: "ncheq",
      coinDecimals: 9,
      coinGeckoId: "cheqd-network",
      gasPriceStep: {
        low: 50,
        average: 75,
        high: 100
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "cheq",
    coinMinimalDenom: "ncheq",
    coinDecimals: 9,
    coinGeckoId: "cheqd-network"
  },
  bip44: {
    coinType: 118
  }
});
export const chimbatestnet = defineChainInfo({
  chainId: "chimba-testnet",
  currencies: [
    {
      coinDenom: "chimba",
      coinMinimalDenom: "ucmba",
      coinDecimals: 6
    }
  ],
  rest: "https://testnet.chimba.ooo",
  rpc: "https://rpc.testnet.chimba.ooo",
  bech32Config: {
    bech32PrefixAccAddr: "chimba",
    bech32PrefixAccPub: "chimbapub",
    bech32PrefixValAddr: "chimbavaloper",
    bech32PrefixValPub: "chimbavaloperpub",
    bech32PrefixConsAddr: "chimbavalcons",
    bech32PrefixConsPub: "chimbavalconspub"
  },
  chainName: "chimbatestnet",
  feeCurrencies: [
    {
      coinDenom: "chimba",
      coinMinimalDenom: "ucmba",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 1,
        average: 5,
        high: 10
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "chimba",
    coinMinimalDenom: "ucmba",
    coinDecimals: 6
  },
  bip44: {
    coinType: 0
  }
});
export const composabletestnet = defineChainInfo({
  chainId: "banksy-testnet-3",
  currencies: [
    {
      coinDenom: "pica",
      coinMinimalDenom: "ppica",
      coinDecimals: 12
    }
  ],
  rest: "https://api.composable-t.indonode.net",
  rpc: "https://rpc.composable-t.indonode.net:443",
  bech32Config: {
    bech32PrefixAccAddr: "centauri",
    bech32PrefixAccPub: "centauripub",
    bech32PrefixValAddr: "centaurivaloper",
    bech32PrefixValPub: "centaurivaloperpub",
    bech32PrefixConsAddr: "centaurivalcons",
    bech32PrefixConsPub: "centaurivalconspub"
  },
  chainName: "composabletestnet",
  feeCurrencies: [
    {
      coinDenom: "pica",
      coinMinimalDenom: "ppica",
      coinDecimals: 12,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "pica",
    coinMinimalDenom: "ppica",
    coinDecimals: 12
  },
  bip44: {
    coinType: 118
  }
});
export const coolcattestnet = defineChainInfo({
  chainId: "kitten-04",
  currencies: [
    {
      coinDenom: "ccat",
      coinMinimalDenom: "uccat",
      coinDecimals: 6
    }
  ],
  rest: "https://lcd.coolcat.space",
  rpc: "https://rpc.coolcat.space",
  bech32Config: {
    bech32PrefixAccAddr: "ccat",
    bech32PrefixAccPub: "ccatpub",
    bech32PrefixValAddr: "ccatvaloper",
    bech32PrefixValPub: "ccatvaloperpub",
    bech32PrefixConsAddr: "ccatvalcons",
    bech32PrefixConsPub: "ccatvalconspub"
  },
  chainName: "coolcattestnet",
  feeCurrencies: [
    {
      coinDenom: "ccat",
      coinMinimalDenom: "uccat",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "ccat",
    coinMinimalDenom: "uccat",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const coreumtestnet = defineChainInfo({
  chainId: "coreum-testnet-1",
  currencies: [
    {
      coinDenom: "testcore",
      coinMinimalDenom: "utestcore",
      coinDecimals: 6,
      coinGeckoId: "coreum"
    }
  ],
  rest: "https://full-node.testnet-1.coreum.dev:1317",
  rpc: "https://full-node.testnet-1.coreum.dev:26657",
  bech32Config: {
    bech32PrefixAccAddr: "testcore",
    bech32PrefixAccPub: "testcorepub",
    bech32PrefixValAddr: "testcorevaloper",
    bech32PrefixValPub: "testcorevaloperpub",
    bech32PrefixConsAddr: "testcorevalcons",
    bech32PrefixConsPub: "testcorevalconspub"
  },
  chainName: "coreumtestnet",
  feeCurrencies: [
    {
      coinDenom: "testcore",
      coinMinimalDenom: "utestcore",
      coinDecimals: 6,
      coinGeckoId: "coreum",
      gasPriceStep: {
        low: 0.0625,
        average: 0.0625,
        high: 62.5
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "testcore",
    coinMinimalDenom: "utestcore",
    coinDecimals: 6,
    coinGeckoId: "coreum"
  },
  bip44: {
    coinType: 990
  }
});
export const cosmoshubtestnet = defineChainInfo({
  chainId: "theta-testnet-001",
  currencies: [
    {
      coinDenom: "atom",
      coinMinimalDenom: "uatom",
      coinDecimals: 6
    }
  ],
  rest: "https://rest.sentry-01.theta-testnet.polypore.xyz",
  rpc: "https://rpc.sentry-01.theta-testnet.polypore.xyz",
  bech32Config: {
    bech32PrefixAccAddr: "cosmos",
    bech32PrefixAccPub: "cosmospub",
    bech32PrefixValAddr: "cosmosvaloper",
    bech32PrefixValPub: "cosmosvaloperpub",
    bech32PrefixConsAddr: "cosmosvalcons",
    bech32PrefixConsPub: "cosmosvalconspub"
  },
  chainName: "cosmoshubtestnet",
  feeCurrencies: [
    {
      coinDenom: "atom",
      coinMinimalDenom: "uatom",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "atom",
    coinMinimalDenom: "uatom",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const cosmosicsprovidertestnet = defineChainInfo({
  chainId: "provider",
  currencies: [
    {
      coinDenom: "atom",
      coinMinimalDenom: "uatom",
      coinDecimals: 6
    }
  ],
  rest: "https://rest.provider-sentry-01.rs-testnet.polypore.xyz",
  rpc: "https://rpc.provider-sentry-01.rs-testnet.polypore.xyz",
  bech32Config: {
    bech32PrefixAccAddr: "cosmos",
    bech32PrefixAccPub: "cosmospub",
    bech32PrefixValAddr: "cosmosvaloper",
    bech32PrefixValPub: "cosmosvaloperpub",
    bech32PrefixConsAddr: "cosmosvalcons",
    bech32PrefixConsPub: "cosmosvalconspub"
  },
  chainName: "cosmosicsprovidertestnet",
  feeCurrencies: [
    {
      coinDenom: "atom",
      coinMinimalDenom: "uatom",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "atom",
    coinMinimalDenom: "uatom",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const cosmwasmtestnet = defineChainInfo({
  chainId: "malaga-420",
  currencies: [
    {
      coinDenom: "MLG",
      coinMinimalDenom: "umlg",
      coinDecimals: 6
    },
    {
      coinDenom: "AND",
      coinMinimalDenom: "uand",
      coinDecimals: 6
    }
  ],
  rest: "https://api.malaga-420.cosmwasm.com",
  rpc: "https://rpc.malaga-420.cosmwasm.com:443",
  bech32Config: {
    bech32PrefixAccAddr: "wasm",
    bech32PrefixAccPub: "wasmpub",
    bech32PrefixValAddr: "wasmvaloper",
    bech32PrefixValPub: "wasmvaloperpub",
    bech32PrefixConsAddr: "wasmvalcons",
    bech32PrefixConsPub: "wasmvalconspub"
  },
  chainName: "cosmwasmtestnet",
  feeCurrencies: [
    {
      coinDenom: "MLG",
      coinMinimalDenom: "umlg",
      coinDecimals: 0,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.03,
        average: 0.04,
        high: 0.05
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "MLG",
    coinMinimalDenom: "umlg",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const cosstestnet = defineChainInfo({
  chainId: "coss-testnet-1",
  currencies: [
    {
      coinDenom: "cgas",
      coinMinimalDenom: "ucgas",
      coinDecimals: 6
    }
  ],
  rest: "https://coss-testnet-rest.coss.ink",
  rpc: "https://coss-testnet-rpc.coss.ink",
  bech32Config: {
    bech32PrefixAccAddr: "coss",
    bech32PrefixAccPub: "cosspub",
    bech32PrefixValAddr: "cossvaloper",
    bech32PrefixValPub: "cossvaloperpub",
    bech32PrefixConsAddr: "cossvalcons",
    bech32PrefixConsPub: "cossvalconspub"
  },
  chainName: "cosstestnet",
  feeCurrencies: [
    {
      coinDenom: "cgas",
      coinMinimalDenom: "ucgas",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "cgas",
    coinMinimalDenom: "ucgas",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const deardogetestnet = defineChainInfo({
  chainId: "deardoge-testnet",
  currencies: [
    {
      coinDenom: "dear",
      coinMinimalDenom: "udear",
      coinDecimals: 6
    }
  ],
  rest: "https://testnet-rest.deardoge.org",
  rpc: "https://testnet-rpc.deardoge.org",
  bech32Config: {
    bech32PrefixAccAddr: "deardoge",
    bech32PrefixAccPub: "deardogepub",
    bech32PrefixValAddr: "deardogevaloper",
    bech32PrefixValPub: "deardogevaloperpub",
    bech32PrefixConsAddr: "deardogevalcons",
    bech32PrefixConsPub: "deardogevalconspub"
  },
  chainName: "deardogetestnet",
  feeCurrencies: [
    {
      coinDenom: "dear",
      coinMinimalDenom: "udear",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "dear",
    coinMinimalDenom: "udear",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const desmostestnet = defineChainInfo({
  chainId: "morpheus-apollo-3",
  currencies: [
    {
      coinDenom: "daric",
      coinMinimalDenom: "udaric",
      coinDecimals: 6,
      coinGeckoId: "desmos"
    }
  ],
  rest: "https://lcd.morpheus.desmos.network",
  rpc: "https://rpc.morpheus.desmos.network",
  bech32Config: {
    bech32PrefixAccAddr: "desmos",
    bech32PrefixAccPub: "desmospub",
    bech32PrefixValAddr: "desmosvaloper",
    bech32PrefixValPub: "desmosvaloperpub",
    bech32PrefixConsAddr: "desmosvalcons",
    bech32PrefixConsPub: "desmosvalconspub"
  },
  chainName: "desmostestnet",
  feeCurrencies: [
    {
      coinDenom: "daric",
      coinMinimalDenom: "udaric",
      coinDecimals: 6,
      coinGeckoId: "desmos",
      gasPriceStep: {
        low: 0.01,
        average: 0.03,
        high: 0.05
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "daric",
    coinMinimalDenom: "udaric",
    coinDecimals: 6,
    coinGeckoId: "desmos"
  },
  bip44: {
    coinType: 852
  }
});
export const dhealthtestnet = defineChainInfo({
  chainId: "dhealth-testnet-2",
  currencies: [
    {
      coinDenom: "tdhp",
      coinMinimalDenom: "utdhp",
      coinDecimals: 6
    }
  ],
  rest: "https://lcd-testnet.dhealth.dev",
  rpc: "https://rpc-testnet.dhealth.dev",
  bech32Config: {
    bech32PrefixAccAddr: "tdh02",
    bech32PrefixAccPub: "tdh02pub",
    bech32PrefixValAddr: "tdh02valoper",
    bech32PrefixValPub: "tdh02valoperpub",
    bech32PrefixConsAddr: "tdh02valcons",
    bech32PrefixConsPub: "tdh02valconspub"
  },
  chainName: "dhealthtestnet",
  feeCurrencies: [
    {
      coinDenom: "tdhp",
      coinMinimalDenom: "utdhp",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.025,
        average: 0.03,
        high: 0.035
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "tdhp",
    coinMinimalDenom: "utdhp",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const doravotatestnet = defineChainInfo({
  chainId: "vota-testnet",
  currencies: [
    {
      coinDenom: "DORA",
      coinMinimalDenom: "peaka",
      coinDecimals: 18
    }
  ],
  rest: "https://vota-testnet-rest.dorafactory.org",
  rpc: "https://vota-testnet-rpc.dorafactory.org/",
  bech32Config: {
    bech32PrefixAccAddr: "dora",
    bech32PrefixAccPub: "dorapub",
    bech32PrefixValAddr: "doravaloper",
    bech32PrefixValPub: "doravaloperpub",
    bech32PrefixConsAddr: "doravalcons",
    bech32PrefixConsPub: "doravalconspub"
  },
  chainName: "doravotatestnet",
  feeCurrencies: [
    {
      coinDenom: "DORA",
      coinMinimalDenom: "peaka",
      coinDecimals: 18,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "DORA",
    coinMinimalDenom: "peaka",
    coinDecimals: 18
  },
  bip44: {
    coinType: 118
  }
});
export const doravotatestnet2 = defineChainInfo({
  chainId: "vota-vk",
  currencies: [
    {
      coinDenom: "DORA",
      coinMinimalDenom: "peaka",
      coinDecimals: 18
    }
  ],
  rest: "https://vota-vk-rest.dorafactory.org",
  rpc: "https://vota-vk-rpc.dorafactory.org/",
  bech32Config: {
    bech32PrefixAccAddr: "dora",
    bech32PrefixAccPub: "dorapub",
    bech32PrefixValAddr: "doravaloper",
    bech32PrefixValPub: "doravaloperpub",
    bech32PrefixConsAddr: "doravalcons",
    bech32PrefixConsPub: "doravalconspub"
  },
  chainName: "doravotatestnet2",
  feeCurrencies: [
    {
      coinDenom: "DORA",
      coinMinimalDenom: "peaka",
      coinDecimals: 18,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "DORA",
    coinMinimalDenom: "peaka",
    coinDecimals: 18
  },
  bip44: {
    coinType: 118
  }
});
export const dydxtestnet = defineChainInfo({
  chainId: "dydx-testnet-4",
  currencies: [
    {
      coinDenom: "dv4tnt",
      coinMinimalDenom: "adv4tnt",
      coinDecimals: 18
    }
  ],
  rest: "https://dydx-lcd-testnet.enigma-validator.com",
  rpc: "https://dydx-rpc-testnet.enigma-validator.com",
  bech32Config: {
    bech32PrefixAccAddr: "dydx",
    bech32PrefixAccPub: "dydxpub",
    bech32PrefixValAddr: "dydxvaloper",
    bech32PrefixValPub: "dydxvaloperpub",
    bech32PrefixConsAddr: "dydxvalcons",
    bech32PrefixConsPub: "dydxvalconspub"
  },
  chainName: "dydxtestnet",
  feeCurrencies: [
    {
      coinDenom: "dv4tnt",
      coinMinimalDenom: "adv4tnt",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 12500000000,
        average: 12500000000,
        high: 20000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "dv4tnt",
    coinMinimalDenom: "adv4tnt",
    coinDecimals: 18
  },
  bip44: {
    coinType: 118
  }
});
export const elystestnet = defineChainInfo({
  chainId: "elystestnet-1",
  currencies: [
    {
      coinDenom: "elys",
      coinMinimalDenom: "uelys",
      coinDecimals: 6,
      coinGeckoId: "elys"
    },
    {
      coinDenom: "eden",
      coinMinimalDenom: "ueden",
      coinDecimals: 6
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/2180E84E20F5679FCC760D8C165B60F42065DEF7F46A72B447CFF1B7DC6C0A65",
      coinDecimals: 6
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/E2D2F6ADCC68AA3384B2F5DFACCA437923D137C14E86FB8A10207CF3BED0C8D4",
      coinDecimals: 6
    }
  ],
  rest: "https://api.testnet.elys.network",
  rpc: "https://rpc.testnet.elys.network",
  bech32Config: {
    bech32PrefixAccAddr: "elys",
    bech32PrefixAccPub: "elyspub",
    bech32PrefixValAddr: "elysvaloper",
    bech32PrefixValPub: "elysvaloperpub",
    bech32PrefixConsAddr: "elysvalcons",
    bech32PrefixConsPub: "elysvalconspub"
  },
  chainName: "elystestnet",
  feeCurrencies: [
    {
      coinDenom: "elys",
      coinMinimalDenom: "uelys",
      coinDecimals: 6,
      coinGeckoId: "elys",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03
      }
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/2180E84E20F5679FCC760D8C165B60F42065DEF7F46A72B447CFF1B7DC6C0A65",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03
      }
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/E2D2F6ADCC68AA3384B2F5DFACCA437923D137C14E86FB8A10207CF3BED0C8D4",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "elys",
    coinMinimalDenom: "uelys",
    coinDecimals: 6,
    coinGeckoId: "elys"
  },
  bip44: {
    coinType: 118
  }
});
export const empetestnet = defineChainInfo({
  chainId: "empe-testnet-2",
  currencies: [
    {
      coinDenom: "empe",
      coinMinimalDenom: "uempe",
      coinDecimals: 6
    }
  ],
  rest: "https://lcd-testnet.empe.io/",
  rpc: "https://rpc-testnet.empe.io/",
  bech32Config: {
    bech32PrefixAccAddr: "empe",
    bech32PrefixAccPub: "empepub",
    bech32PrefixValAddr: "empevaloper",
    bech32PrefixValPub: "empevaloperpub",
    bech32PrefixConsAddr: "empevalcons",
    bech32PrefixConsPub: "empevalconspub"
  },
  chainName: "empetestnet",
  feeCurrencies: [
    {
      coinDenom: "empe",
      coinMinimalDenom: "uempe",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "empe",
    coinMinimalDenom: "uempe",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const empowertestnet = defineChainInfo({
  chainId: "circulus-1",
  currencies: [
    {
      coinDenom: "mpwr",
      coinMinimalDenom: "umpwr",
      coinDecimals: 6
    }
  ],
  rest: "https://empower-testnet-api.polkachu.com:443",
  rpc: "https://empower-testnet-rpc.polkachu.com:443",
  bech32Config: {
    bech32PrefixAccAddr: "empower",
    bech32PrefixAccPub: "empowerpub",
    bech32PrefixValAddr: "empowervaloper",
    bech32PrefixValPub: "empowervaloperpub",
    bech32PrefixConsAddr: "empowervalcons",
    bech32PrefixConsPub: "empowervalconspub"
  },
  chainName: "empowertestnet",
  feeCurrencies: [
    {
      coinDenom: "mpwr",
      coinMinimalDenom: "umpwr",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "mpwr",
    coinMinimalDenom: "umpwr",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const entrypointtestnet = defineChainInfo({
  chainId: "entrypoint-pubtest-2",
  currencies: [
    {
      coinDenom: "entry",
      coinMinimalDenom: "uentry",
      coinDecimals: 6
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/8A138BC76D0FB2665F8937EC2BF01B9F6A714F6127221A0E155106A45E09BCC5",
      coinDecimals: 6
    }
  ],
  rest: "https://entry.api.t.stavr.tech",
  rpc: "https://testnet-rpc.entrypoint.zone",
  bech32Config: {
    bech32PrefixAccAddr: "entrypoint",
    bech32PrefixAccPub: "entrypointpub",
    bech32PrefixValAddr: "entrypointvaloper",
    bech32PrefixValPub: "entrypointvaloperpub",
    bech32PrefixConsAddr: "entrypointvalcons",
    bech32PrefixConsPub: "entrypointvalconspub"
  },
  chainName: "entrypointtestnet",
  feeCurrencies: [
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/8A138BC76D0FB2665F8937EC2BF01B9F6A714F6127221A0E155106A45E09BCC5",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.01,
        high: 0.02
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "entry",
    coinMinimalDenom: "uentry",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const evmostestnet = defineChainInfo({
  chainId: "evmos_9000-4",
  currencies: [
    {
      coinDenom: "tevmos",
      coinMinimalDenom: "atevmos",
      coinDecimals: 18
    }
  ],
  rest: "https://evmos.test.api.coldyvalidator.net",
  rpc: "https://evmos.test.rpc.coldyvalidator.net",
  bech32Config: {
    bech32PrefixAccAddr: "evmos",
    bech32PrefixAccPub: "evmospub",
    bech32PrefixValAddr: "evmosvaloper",
    bech32PrefixValPub: "evmosvaloperpub",
    bech32PrefixConsAddr: "evmosvalcons",
    bech32PrefixConsPub: "evmosvalconspub"
  },
  chainName: "evmostestnet",
  feeCurrencies: [
    {
      coinDenom: "tevmos",
      coinMinimalDenom: "atevmos",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 20000000000,
        average: 25000000000,
        high: 40000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "tevmos",
    coinMinimalDenom: "atevmos",
    coinDecimals: 18
  },
  bip44: {
    coinType: 60
  }
});
export const fetchhubtestnet = defineChainInfo({
  chainId: "dorado-1",
  currencies: [
    {
      coinDenom: "testfet",
      coinMinimalDenom: "atestfet",
      coinDecimals: 18,
      coinGeckoId: "fetch-ai"
    }
  ],
  rest: "https://rest-dorado.fetch.ai",
  rpc: "https://rpc-dorado.fetch.ai:443",
  bech32Config: {
    bech32PrefixAccAddr: "fetch",
    bech32PrefixAccPub: "fetchpub",
    bech32PrefixValAddr: "fetchvaloper",
    bech32PrefixValPub: "fetchvaloperpub",
    bech32PrefixConsAddr: "fetchvalcons",
    bech32PrefixConsPub: "fetchvalconspub"
  },
  chainName: "fetchhubtestnet",
  feeCurrencies: [
    {
      coinDenom: "testfet",
      coinMinimalDenom: "atestfet",
      coinDecimals: 18,
      coinGeckoId: "fetch-ai",
      gasPriceStep: {
        low: 0.025,
        average: 0.025,
        high: 0.035
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "testfet",
    coinMinimalDenom: "atestfet",
    coinDecimals: 18,
    coinGeckoId: "fetch-ai"
  },
  bip44: {
    coinType: 118
  }
});
export const fiammatestnet = defineChainInfo({
  chainId: "fiamma-testnet-1",
  currencies: [
    {
      coinDenom: "fia",
      coinMinimalDenom: "ufia",
      coinDecimals: 6
    }
  ],
  rest: "https://testnet-api.fiammachain.io",
  rpc: "https://testnet-rpc.fiammachain.io",
  bech32Config: {
    bech32PrefixAccAddr: "fiamma",
    bech32PrefixAccPub: "fiammapub",
    bech32PrefixValAddr: "fiammavaloper",
    bech32PrefixValPub: "fiammavaloperpub",
    bech32PrefixConsAddr: "fiammavalcons",
    bech32PrefixConsPub: "fiammavalconspub"
  },
  chainName: "fiammatestnet",
  feeCurrencies: [
    {
      coinDenom: "fia",
      coinMinimalDenom: "ufia",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "fia",
    coinMinimalDenom: "ufia",
    coinDecimals: 6
  },
  bip44: {
    coinType: 0
  }
});
export const finschiatestnet = defineChainInfo({
  chainId: "ebony-2",
  currencies: [
    {
      coinDenom: "tfnsa",
      coinMinimalDenom: "tcony",
      coinDecimals: 6
    }
  ],
  rest: "https://ebony-api.finschia.io",
  rpc: "https://ebony-rpc.finschia.io",
  bech32Config: {
    bech32PrefixAccAddr: "tlink",
    bech32PrefixAccPub: "tlinkpub",
    bech32PrefixValAddr: "tlinkvaloper",
    bech32PrefixValPub: "tlinkvaloperpub",
    bech32PrefixConsAddr: "tlinkvalcons",
    bech32PrefixConsPub: "tlinkvalconspub"
  },
  chainName: "finschiatestnet",
  feeCurrencies: [
    {
      coinDenom: "tfnsa",
      coinMinimalDenom: "tcony",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.015,
        average: 0.015,
        high: 0.015
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "tfnsa",
    coinMinimalDenom: "tcony",
    coinDecimals: 6
  },
  bip44: {
    coinType: 438
  }
});
export const galacticatestnet = defineChainInfo({
  chainId: "galactica_9302-1",
  currencies: [
    {
      coinDenom: "gnet",
      coinMinimalDenom: "agnet",
      coinDecimals: 18
    }
  ],
  rest: "https://api.galactica.test.pfc.zone/",
  rpc: "https://rpc.galactica.test.pfc.zone/",
  bech32Config: {
    bech32PrefixAccAddr: "gala",
    bech32PrefixAccPub: "galapub",
    bech32PrefixValAddr: "galavaloper",
    bech32PrefixValPub: "galavaloperpub",
    bech32PrefixConsAddr: "galavalcons",
    bech32PrefixConsPub: "galavalconspub"
  },
  chainName: "galacticatestnet",
  feeCurrencies: [
    {
      coinDenom: "gnet",
      coinMinimalDenom: "agnet",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 10,
        average: 10,
        high: 20
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "gnet",
    coinMinimalDenom: "agnet",
    coinDecimals: 18
  },
  bip44: {
    coinType: 60
  }
});
export const gitopiatestnet = defineChainInfo({
  chainId: "gitopia-janus-testnet-2",
  currencies: [
    {
      coinDenom: "tlore",
      coinMinimalDenom: "utlore",
      coinDecimals: 6
    }
  ],
  rest: "https://gitopia-testnet.nodejumper.io:1317",
  rpc: "https://gitopia-testnet.nodejumper.io",
  bech32Config: {
    bech32PrefixAccAddr: "gitopia",
    bech32PrefixAccPub: "gitopiapub",
    bech32PrefixValAddr: "gitopiavaloper",
    bech32PrefixValPub: "gitopiavaloperpub",
    bech32PrefixConsAddr: "gitopiavalcons",
    bech32PrefixConsPub: "gitopiavalconspub"
  },
  chainName: "gitopiatestnet",
  feeCurrencies: [
    {
      coinDenom: "tlore",
      coinMinimalDenom: "utlore",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "tlore",
    coinMinimalDenom: "utlore",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const hedgetestnet = defineChainInfo({
  chainId: "berberis-1",
  currencies: [
    {
      coinDenom: "hedge",
      coinMinimalDenom: "uhedge",
      coinDecimals: 6
    }
  ],
  rest: "https://lcd-berberis.hedgeblock.io",
  rpc: "https://rpc-berberis.hedgeblock.io",
  bech32Config: {
    bech32PrefixAccAddr: "hedge",
    bech32PrefixAccPub: "hedgepub",
    bech32PrefixValAddr: "hedgevaloper",
    bech32PrefixValPub: "hedgevaloperpub",
    bech32PrefixConsAddr: "hedgevalcons",
    bech32PrefixConsPub: "hedgevalconspub"
  },
  chainName: "hedgetestnet",
  feeCurrencies: [
    {
      coinDenom: "hedge",
      coinMinimalDenom: "uhedge",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "hedge",
    coinMinimalDenom: "uhedge",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const humanstestnet = defineChainInfo({
  chainId: "testnet-1",
  currencies: [
    {
      coinDenom: "heart",
      coinMinimalDenom: "uheart",
      coinDecimals: 6
    }
  ],
  rest: "https://humans-testnet.nodejumper.io:1317",
  rpc: "https://humans-testnet.nodejumper.io",
  bech32Config: {
    bech32PrefixAccAddr: "humans",
    bech32PrefixAccPub: "humanspub",
    bech32PrefixValAddr: "humansvaloper",
    bech32PrefixValPub: "humansvaloperpub",
    bech32PrefixConsAddr: "humansvalcons",
    bech32PrefixConsPub: "humansvalconspub"
  },
  chainName: "humanstestnet",
  feeCurrencies: [
    {
      coinDenom: "heart",
      coinMinimalDenom: "uheart",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "heart",
    coinMinimalDenom: "uheart",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const hypersigntestnet = defineChainInfo({
  chainId: "prajna-1",
  currencies: [
    {
      coinDenom: "hid",
      coinMinimalDenom: "uhid",
      coinDecimals: 6,
      coinGeckoId: "hypersign-identity-token"
    }
  ],
  rest: "https://api.prajna.hypersign.id",
  rpc: "https://rpc.prajna.hypersign.id",
  bech32Config: {
    bech32PrefixAccAddr: "hid",
    bech32PrefixAccPub: "hidpub",
    bech32PrefixValAddr: "hidvaloper",
    bech32PrefixValPub: "hidvaloperpub",
    bech32PrefixConsAddr: "hidvalcons",
    bech32PrefixConsPub: "hidvalconspub"
  },
  chainName: "hypersigntestnet",
  feeCurrencies: [
    {
      coinDenom: "hid",
      coinMinimalDenom: "uhid",
      coinDecimals: 6,
      coinGeckoId: "hypersign-identity-token"
    }
  ],
  stakeCurrency: {
    coinDenom: "hid",
    coinMinimalDenom: "uhid",
    coinDecimals: 6,
    coinGeckoId: "hypersign-identity-token"
  },
  bip44: {
    coinType: 118
  }
});
export const impacthubdevnet = defineChainInfo({
  chainId: "devnet-1",
  currencies: [
    {
      coinDenom: "ixo",
      coinMinimalDenom: "uixo",
      coinDecimals: 6,
      coinGeckoId: "ixo"
    }
  ],
  rest: "https://devnet.ixo.earth/rest/",
  rpc: "https://devnet.ixo.earth/rpc/",
  bech32Config: {
    bech32PrefixAccAddr: "ixo",
    bech32PrefixAccPub: "ixopub",
    bech32PrefixValAddr: "ixovaloper",
    bech32PrefixValPub: "ixovaloperpub",
    bech32PrefixConsAddr: "ixovalcons",
    bech32PrefixConsPub: "ixovalconspub"
  },
  chainName: "impacthubdevnet",
  feeCurrencies: [
    {
      coinDenom: "ixo",
      coinMinimalDenom: "uixo",
      coinDecimals: 6,
      coinGeckoId: "ixo",
      gasPriceStep: {
        low: 0.015,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "ixo",
    coinMinimalDenom: "uixo",
    coinDecimals: 6,
    coinGeckoId: "ixo"
  },
  bip44: {
    coinType: 118
  }
});
export const impacthubtestnet = defineChainInfo({
  chainId: "pandora-8",
  currencies: [
    {
      coinDenom: "ixo",
      coinMinimalDenom: "uixo",
      coinDecimals: 6
    }
  ],
  rest: "https://testnet.ixo.earth/rest/",
  rpc: "https://rpc.testnet.ixo.earth/",
  bech32Config: {
    bech32PrefixAccAddr: "ixo",
    bech32PrefixAccPub: "ixopub",
    bech32PrefixValAddr: "ixovaloper",
    bech32PrefixValPub: "ixovaloperpub",
    bech32PrefixConsAddr: "ixovalcons",
    bech32PrefixConsPub: "ixovalconspub"
  },
  chainName: "impacthubtestnet",
  feeCurrencies: [
    {
      coinDenom: "ixo",
      coinMinimalDenom: "uixo",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.015,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "ixo",
    coinMinimalDenom: "uixo",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const imversedtestnet = defineChainInfo({
  chainId: "imversed-test-1",
  currencies: [
    {
      coinDenom: "imv",
      coinMinimalDenom: "nimv",
      coinDecimals: 6
    },
    {
      coinDenom: "imv",
      coinMinimalDenom: "ibc/C6438A7D613196373D939891C99CA7EEF4F78F4A78DC8590E51E62F8ED16E72B",
      coinDecimals: 6
    }
  ],
  rest: "https://query-endpoint-test.imversed.com/",
  rpc: "https://tx-endpoint-test.imversed.com/",
  bech32Config: {
    bech32PrefixAccAddr: "imv",
    bech32PrefixAccPub: "imvpub",
    bech32PrefixValAddr: "imvvaloper",
    bech32PrefixValPub: "imvvaloperpub",
    bech32PrefixConsAddr: "imvvalcons",
    bech32PrefixConsPub: "imvvalconspub"
  },
  chainName: "imversedtestnet",
  feeCurrencies: [
    {
      coinDenom: "imv",
      coinMinimalDenom: "nimv",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "imv",
    coinMinimalDenom: "nimv",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const injectivetestnet = defineChainInfo({
  chainId: "injective-888",
  currencies: [
    {
      coinDenom: "INJ",
      coinMinimalDenom: "inj",
      coinDecimals: 18,
      coinGeckoId: "injective-protocol"
    }
  ],
  rest: "https://injective-testnet-api.polkachu.com",
  rpc: "https://injective-testnet-rpc.polkachu.com",
  bech32Config: {
    bech32PrefixAccAddr: "inj",
    bech32PrefixAccPub: "injpub",
    bech32PrefixValAddr: "injvaloper",
    bech32PrefixValPub: "injvaloperpub",
    bech32PrefixConsAddr: "injvalcons",
    bech32PrefixConsPub: "injvalconspub"
  },
  chainName: "injectivetestnet",
  feeCurrencies: [
    {
      coinDenom: "INJ",
      coinMinimalDenom: "inj",
      coinDecimals: 18,
      coinGeckoId: "injective-protocol",
      gasPriceStep: {
        low: 500000000,
        average: 700000000,
        high: 900000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "INJ",
    coinMinimalDenom: "inj",
    coinDecimals: 18,
    coinGeckoId: "injective-protocol"
  },
  bip44: {
    coinType: 60
  }
});
export const jackaltestnet = defineChainInfo({
  chainId: "canine-1",
  currencies: [
    {
      coinDenom: "jkl",
      coinMinimalDenom: "ujkl",
      coinDecimals: 6,
      coinGeckoId: "jackal"
    }
  ],
  rest: "https://jkl.api.t.stavr.tech",
  rpc: "http://jkl.rpc.t.stavr.tech:19127",
  bech32Config: {
    bech32PrefixAccAddr: "jkl",
    bech32PrefixAccPub: "jklpub",
    bech32PrefixValAddr: "jklvaloper",
    bech32PrefixValPub: "jklvaloperpub",
    bech32PrefixConsAddr: "jklvalcons",
    bech32PrefixConsPub: "jklvalconspub"
  },
  chainName: "jackaltestnet",
  feeCurrencies: [
    {
      coinDenom: "jkl",
      coinMinimalDenom: "ujkl",
      coinDecimals: 6,
      coinGeckoId: "jackal"
    }
  ],
  stakeCurrency: {
    coinDenom: "jkl",
    coinMinimalDenom: "ujkl",
    coinDecimals: 6,
    coinGeckoId: "jackal"
  },
  bip44: {
    coinType: 118
  }
});
export const jackaltestnet2 = defineChainInfo({
  chainId: "mesomelas-1",
  currencies: [
    {
      coinDenom: "jkl",
      coinMinimalDenom: "ujkl",
      coinDecimals: 6
    }
  ],
  rest: "https://jackal-testnet-v4-rest.brocha.in",
  rpc: "https://jackal-testnet-v4-rpc.brocha.in",
  bech32Config: {
    bech32PrefixAccAddr: "jkl",
    bech32PrefixAccPub: "jklpub",
    bech32PrefixValAddr: "jklvaloper",
    bech32PrefixValPub: "jklvaloperpub",
    bech32PrefixConsAddr: "jklvalcons",
    bech32PrefixConsPub: "jklvalconspub"
  },
  chainName: "jackaltestnet2",
  feeCurrencies: [
    {
      coinDenom: "jkl",
      coinMinimalDenom: "ujkl",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "jkl",
    coinMinimalDenom: "ujkl",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const junotestnet = defineChainInfo({
  chainId: "uni-6",
  currencies: [
    {
      coinDenom: "junox",
      coinMinimalDenom: "ujunox",
      coinDecimals: 6,
      coinGeckoId: "juno-network"
    },
    {
      coinDenom: "nexx",
      coinMinimalDenom: "factory/juno12klaltyqvg2j6v034jwdxrk5n4242ttse4sdpt/NEXX",
      coinDecimals: 6
    },
    {
      coinDenom: "arena",
      coinMinimalDenom: "factory/juno12dgadj3wwv5jn0ec7tw5cgvq526nn4gnt2tujlmd57p2ra6k87esl36r9k/ARENA",
      coinDecimals: 6
    }
  ],
  rest: "https://juno-testnet-api.polkachu.com",
  rpc: "https://juno-testnet-rpc.polkachu.com",
  bech32Config: {
    bech32PrefixAccAddr: "juno",
    bech32PrefixAccPub: "junopub",
    bech32PrefixValAddr: "junovaloper",
    bech32PrefixValPub: "junovaloperpub",
    bech32PrefixConsAddr: "junovalcons",
    bech32PrefixConsPub: "junovalconspub"
  },
  chainName: "junotestnet",
  feeCurrencies: [
    {
      coinDenom: "junox",
      coinMinimalDenom: "ujunox",
      coinDecimals: 6,
      coinGeckoId: "juno-network",
      gasPriceStep: {
        low: 0.003,
        average: 0.0045,
        high: 0.006
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "junox",
    coinMinimalDenom: "ujunox",
    coinDecimals: 6,
    coinGeckoId: "juno-network"
  },
  bip44: {
    coinType: 118
  }
});
export const kichaintestnet = defineChainInfo({
  chainId: "kichain-t-4",
  currencies: [
    {
      coinDenom: "tki",
      coinMinimalDenom: "utki",
      coinDecimals: 6,
      coinGeckoId: "ki"
    }
  ],
  rest: "https://api-challenge.blockchain.ki/",
  rpc: "https://rpc-challenge.blockchain.ki/",
  bech32Config: {
    bech32PrefixAccAddr: "tki",
    bech32PrefixAccPub: "tkipub",
    bech32PrefixValAddr: "tkivaloper",
    bech32PrefixValPub: "tkivaloperpub",
    bech32PrefixConsAddr: "tkivalcons",
    bech32PrefixConsPub: "tkivalconspub"
  },
  chainName: "kichaintestnet",
  feeCurrencies: [
    {
      coinDenom: "tki",
      coinMinimalDenom: "utki",
      coinDecimals: 6,
      coinGeckoId: "ki"
    }
  ],
  stakeCurrency: {
    coinDenom: "tki",
    coinMinimalDenom: "utki",
    coinDecimals: 6,
    coinGeckoId: "ki"
  },
  bip44: {
    coinType: 118
  }
});
export const kimatestnet = defineChainInfo({
  chainId: "kima_testnet",
  currencies: [
    {
      coinDenom: "KIMA",
      coinMinimalDenom: "uKIMA",
      coinDecimals: 6
    }
  ],
  rest: "https://api-testnet.kima.finance",
  rpc: "https://rpc-testnet.kima.finance/",
  bech32Config: {
    bech32PrefixAccAddr: "kima",
    bech32PrefixAccPub: "kimapub",
    bech32PrefixValAddr: "kimavaloper",
    bech32PrefixValPub: "kimavaloperpub",
    bech32PrefixConsAddr: "kimavalcons",
    bech32PrefixConsPub: "kimavalconspub"
  },
  chainName: "kimatestnet",
  feeCurrencies: [
    {
      coinDenom: "KIMA",
      coinMinimalDenom: "uKIMA",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0025,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "KIMA",
    coinMinimalDenom: "uKIMA",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const kujiratestnet = defineChainInfo({
  chainId: "harpoon-4",
  currencies: [
    {
      coinDenom: "kuji",
      coinMinimalDenom: "ukuji",
      coinDecimals: 6
    },
    {
      coinDenom: "fuzn",
      coinMinimalDenom: "factory/kujira16qpvzhmawvsm8mcj4hdvtz25dadatdhhgw79xa/FUZN",
      coinDecimals: 6
    }
  ],
  rest: "https://kujira-testnet-api.polkachu.com/",
  rpc: "https://kujira-testnet-rpc.polkachu.com",
  bech32Config: {
    bech32PrefixAccAddr: "kujira",
    bech32PrefixAccPub: "kujirapub",
    bech32PrefixValAddr: "kujiravaloper",
    bech32PrefixValPub: "kujiravaloperpub",
    bech32PrefixConsAddr: "kujiravalcons",
    bech32PrefixConsPub: "kujiravalconspub"
  },
  chainName: "kujiratestnet",
  feeCurrencies: [
    {
      coinDenom: "kuji",
      coinMinimalDenom: "ukuji",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "kuji",
    coinMinimalDenom: "ukuji",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const kyvedevnet = defineChainInfo({
  chainId: "korellia-2",
  currencies: [
    {
      coinDenom: "kyve",
      coinMinimalDenom: "tkyve",
      coinDecimals: 6
    }
  ],
  rest: "https://api.korellia.kyve.network",
  rpc: "https://rpc.korellia.kyve.network",
  bech32Config: {
    bech32PrefixAccAddr: "kyve",
    bech32PrefixAccPub: "kyvepub",
    bech32PrefixValAddr: "kyvevaloper",
    bech32PrefixValPub: "kyvevaloperpub",
    bech32PrefixConsAddr: "kyvevalcons",
    bech32PrefixConsPub: "kyvevalconspub"
  },
  chainName: "kyvedevnet",
  feeCurrencies: [
    {
      coinDenom: "kyve",
      coinMinimalDenom: "tkyve",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "kyve",
    coinMinimalDenom: "tkyve",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const kyvetestnet = defineChainInfo({
  chainId: "kaon-1",
  currencies: [
    {
      coinDenom: "kyve",
      coinMinimalDenom: "tkyve",
      coinDecimals: 6
    }
  ],
  rest: "https://api-eu-1.kaon.kyve.network",
  rpc: "https://rpc-eu-1.kaon.kyve.network",
  bech32Config: {
    bech32PrefixAccAddr: "kyve",
    bech32PrefixAccPub: "kyvepub",
    bech32PrefixValAddr: "kyvevaloper",
    bech32PrefixValPub: "kyvevaloperpub",
    bech32PrefixConsAddr: "kyvevalcons",
    bech32PrefixConsPub: "kyvevalconspub"
  },
  chainName: "kyvetestnet",
  feeCurrencies: [
    {
      coinDenom: "kyve",
      coinMinimalDenom: "tkyve",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.02,
        average: 0.03,
        high: 0.06
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "kyve",
    coinMinimalDenom: "tkyve",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const lavatestnet = defineChainInfo({
  chainId: "lava-testnet-2",
  currencies: [
    {
      coinDenom: "lava",
      coinMinimalDenom: "ulava",
      coinDecimals: 6
    }
  ],
  rest: "https://lav1.lava.build/",
  rpc: "https://lav1.tendermintrpc.lava.build:443",
  bech32Config: {
    bech32PrefixAccAddr: "lava@",
    bech32PrefixAccPub: "lava@pub",
    bech32PrefixValAddr: "lava@valoper",
    bech32PrefixValPub: "lava@valoperpub",
    bech32PrefixConsAddr: "lava@valcons",
    bech32PrefixConsPub: "lava@valconspub"
  },
  chainName: "lavatestnet",
  feeCurrencies: [
    {
      coinDenom: "lava",
      coinMinimalDenom: "ulava",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.000001,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "lava",
    coinMinimalDenom: "ulava",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const lavatestnet1 = defineChainInfo({
  chainId: "lava-testnet-1",
  currencies: [
    {
      coinDenom: "lava",
      coinMinimalDenom: "ulava",
      coinDecimals: 6
    }
  ],
  rest: "https://public-rpc-testnet2.lavanet.xyz/rest/",
  rpc: "https://public-rpc-testnet2.lavanet.xyz/",
  bech32Config: {
    bech32PrefixAccAddr: "lava@",
    bech32PrefixAccPub: "lava@pub",
    bech32PrefixValAddr: "lava@valoper",
    bech32PrefixValPub: "lava@valoperpub",
    bech32PrefixConsAddr: "lava@valcons",
    bech32PrefixConsPub: "lava@valconspub"
  },
  chainName: "lavatestnet1",
  feeCurrencies: [
    {
      coinDenom: "lava",
      coinMinimalDenom: "ulava",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0025,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "lava",
    coinMinimalDenom: "ulava",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const likecointestnet = defineChainInfo({
  chainId: "likecoin-public-testnet-5",
  currencies: [
    {
      coinDenom: "ekil",
      coinMinimalDenom: "nanoekil",
      coinDecimals: 9
    }
  ],
  rest: "https://node.testnet.like.co/",
  rpc: "https://node.testnet.like.co/rpc/",
  bech32Config: {
    bech32PrefixAccAddr: "like",
    bech32PrefixAccPub: "likepub",
    bech32PrefixValAddr: "likevaloper",
    bech32PrefixValPub: "likevaloperpub",
    bech32PrefixConsAddr: "likevalcons",
    bech32PrefixConsPub: "likevalconspub"
  },
  chainName: "likecointestnet",
  feeCurrencies: [
    {
      coinDenom: "ekil",
      coinMinimalDenom: "nanoekil",
      coinDecimals: 9,
      coinGeckoId: "",
      gasPriceStep: {
        low: 1000,
        average: 10000,
        high: 1000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "ekil",
    coinMinimalDenom: "nanoekil",
    coinDecimals: 9
  },
  bip44: {
    coinType: 118
  }
});
export const lumenxtestnet = defineChainInfo({
  chainId: "lumenx-test",
  currencies: [
    {
      coinDenom: "lumen",
      coinMinimalDenom: "ulumen",
      coinDecimals: 6
    }
  ],
  rest: "https://testnet-api.lumenx.chaintools.tech/",
  rpc: "https://testnet-rpc.lumenx.chaintools.tech/",
  bech32Config: {
    bech32PrefixAccAddr: "lumen",
    bech32PrefixAccPub: "lumenpub",
    bech32PrefixValAddr: "lumenvaloper",
    bech32PrefixValPub: "lumenvaloperpub",
    bech32PrefixConsAddr: "lumenvalcons",
    bech32PrefixConsPub: "lumenvalconspub"
  },
  chainName: "lumenxtestnet",
  feeCurrencies: [
    {
      coinDenom: "lumen",
      coinMinimalDenom: "ulumen",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "lumen",
    coinMinimalDenom: "ulumen",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const manifesttestnet = defineChainInfo({
  chainId: "manifest-ledger-beta",
  currencies: [
    {
      coinDenom: "mfx",
      coinMinimalDenom: "umfx",
      coinDecimals: 6
    },
    {
      coinDenom: "poa",
      coinMinimalDenom: "upoa",
      coinDecimals: 6
    }
  ],
  rest: "https://nodes.chandrastation.com/api/manifest/",
  rpc: "https://nodes.chandrastation.com/rpc/manifest/",
  bech32Config: {
    bech32PrefixAccAddr: "manifest",
    bech32PrefixAccPub: "manifestpub",
    bech32PrefixValAddr: "manifestvaloper",
    bech32PrefixValPub: "manifestvaloperpub",
    bech32PrefixConsAddr: "manifestvalcons",
    bech32PrefixConsPub: "manifestvalconspub"
  },
  chainName: "manifesttestnet",
  feeCurrencies: [
    {
      coinDenom: "mfx",
      coinMinimalDenom: "umfx",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.007,
        high: 0.1
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "mfx",
    coinMinimalDenom: "umfx",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const mantrachaintestnet = defineChainInfo({
  chainId: "mantra-hongbai-1",
  currencies: [
    {
      coinDenom: "om",
      coinMinimalDenom: "uom",
      coinDecimals: 6
    }
  ],
  rest: "https://api.hongbai.mantrachain.io",
  rpc: "https://rpc.hongbai.mantrachain.io",
  bech32Config: {
    bech32PrefixAccAddr: "mantra",
    bech32PrefixAccPub: "mantrapub",
    bech32PrefixValAddr: "mantravaloper",
    bech32PrefixValPub: "mantravaloperpub",
    bech32PrefixConsAddr: "mantravalcons",
    bech32PrefixConsPub: "mantravalconspub"
  },
  chainName: "mantrachaintestnet",
  feeCurrencies: [
    {
      coinDenom: "om",
      coinMinimalDenom: "uom",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.001,
        average: 0.002,
        high: 0.003
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "om",
    coinMinimalDenom: "uom",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const marstestnet = defineChainInfo({
  chainId: "ares-1",
  currencies: [
    {
      coinDenom: "mars",
      coinMinimalDenom: "umars",
      coinDecimals: 6
    }
  ],
  rest: "https://testnet-rest.marsprotocol.io/",
  rpc: "https://testnet-rpc.marsprotocol.io/",
  bech32Config: {
    bech32PrefixAccAddr: "mars",
    bech32PrefixAccPub: "marspub",
    bech32PrefixValAddr: "marsvaloper",
    bech32PrefixValPub: "marsvaloperpub",
    bech32PrefixConsAddr: "marsvalcons",
    bech32PrefixConsPub: "marsvalconspub"
  },
  chainName: "marstestnet",
  feeCurrencies: [
    {
      coinDenom: "mars",
      coinMinimalDenom: "umars",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "mars",
    coinMinimalDenom: "umars",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const migalootestnet = defineChainInfo({
  chainId: "narwhal-2",
  currencies: [
    {
      coinDenom: "whale",
      coinMinimalDenom: "uwhale",
      coinDecimals: 6
    }
  ],
  rest: "https://migaloo-testnet-api.polkachu.com",
  rpc: "https://migaloo-testnet-rpc.polkachu.com",
  bech32Config: {
    bech32PrefixAccAddr: "migaloo",
    bech32PrefixAccPub: "migaloopub",
    bech32PrefixValAddr: "migaloovaloper",
    bech32PrefixValPub: "migaloovaloperpub",
    bech32PrefixConsAddr: "migaloovalcons",
    bech32PrefixConsPub: "migaloovalconspub"
  },
  chainName: "migalootestnet",
  feeCurrencies: [
    {
      coinDenom: "whale",
      coinMinimalDenom: "uwhale",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.25,
        average: 0.5,
        high: 0.75
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "whale",
    coinMinimalDenom: "uwhale",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const neutrontestnet = defineChainInfo({
  chainId: "pion-1",
  currencies: [
    {
      coinDenom: "ntrn",
      coinMinimalDenom: "untrn",
      coinDecimals: 6
    },
    {
      coinDenom: "amATOM",
      coinMinimalDenom: "factory/neutron15lku24mqhvy4v4gryrqs4662n9v9q4ux9tayn89cmdzldjcgawushxvm76/amatom",
      coinDecimals: 6
    }
  ],
  rest: "https://rest-falcron.pion-1.ntrn.tech",
  rpc: "https://rpc-falcron.pion-1.ntrn.tech",
  bech32Config: {
    bech32PrefixAccAddr: "neutron",
    bech32PrefixAccPub: "neutronpub",
    bech32PrefixValAddr: "neutronvaloper",
    bech32PrefixValPub: "neutronvaloperpub",
    bech32PrefixConsAddr: "neutronvalcons",
    bech32PrefixConsPub: "neutronvalconspub"
  },
  chainName: "neutrontestnet",
  feeCurrencies: [
    {
      coinDenom: "ntrn",
      coinMinimalDenom: "untrn",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0053,
        average: 0.0053,
        high: 0.0053
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "ntrn",
    coinMinimalDenom: "untrn",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const nibirudevnet = defineChainInfo({
  chainId: "nibiru-devnet-1",
  currencies: [
    {
      coinDenom: "attonibi",
      coinMinimalDenom: "unibi",
      coinDecimals: 18
    }
  ],
  rest: "https://lcd.devnet-1.nibiru.fi",
  rpc: "https://rpc.devnet-1.nibiru.fi",
  bech32Config: {
    bech32PrefixAccAddr: "nibi",
    bech32PrefixAccPub: "nibipub",
    bech32PrefixValAddr: "nibivaloper",
    bech32PrefixValPub: "nibivaloperpub",
    bech32PrefixConsAddr: "nibivalcons",
    bech32PrefixConsPub: "nibivalconspub"
  },
  chainName: "nibirudevnet",
  feeCurrencies: [
    {
      coinDenom: "attonibi",
      coinMinimalDenom: "unibi",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.025,
        average: 0.05,
        high: 0.1
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "attonibi",
    coinMinimalDenom: "unibi",
    coinDecimals: 18
  },
  bip44: {
    coinType: 118
  }
});
export const nibirudevnet2 = defineChainInfo({
  chainId: "nibiru-devnet-2",
  currencies: [
    {
      coinDenom: "attonibi",
      coinMinimalDenom: "unibi",
      coinDecimals: 18
    }
  ],
  rest: "https://lcd.devnet-2.nibiru.fi",
  rpc: "https://rpc.devnet-2.nibiru.fi",
  bech32Config: {
    bech32PrefixAccAddr: "nibi",
    bech32PrefixAccPub: "nibipub",
    bech32PrefixValAddr: "nibivaloper",
    bech32PrefixValPub: "nibivaloperpub",
    bech32PrefixConsAddr: "nibivalcons",
    bech32PrefixConsPub: "nibivalconspub"
  },
  chainName: "nibirudevnet2",
  feeCurrencies: [
    {
      coinDenom: "attonibi",
      coinMinimalDenom: "unibi",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.025,
        average: 0.05,
        high: 0.1
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "attonibi",
    coinMinimalDenom: "unibi",
    coinDecimals: 18
  },
  bip44: {
    coinType: 118
  }
});
export const nibirudevnet3 = defineChainInfo({
  chainId: "nibiru-devnet-3",
  currencies: [
    {
      coinDenom: "attonibi",
      coinMinimalDenom: "unibi",
      coinDecimals: 18
    }
  ],
  rest: "https://lcd.devnet-3.nibiru.fi",
  rpc: "https://rpc.devnet-3.nibiru.fi",
  bech32Config: {
    bech32PrefixAccAddr: "nibi",
    bech32PrefixAccPub: "nibipub",
    bech32PrefixValAddr: "nibivaloper",
    bech32PrefixValPub: "nibivaloperpub",
    bech32PrefixConsAddr: "nibivalcons",
    bech32PrefixConsPub: "nibivalconspub"
  },
  chainName: "nibirudevnet3",
  feeCurrencies: [
    {
      coinDenom: "attonibi",
      coinMinimalDenom: "unibi",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.025,
        average: 0.05,
        high: 0.1
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "attonibi",
    coinMinimalDenom: "unibi",
    coinDecimals: 18
  },
  bip44: {
    coinType: 118
  }
});
export const nibirudevnet4 = defineChainInfo({
  chainId: "nibiru-devnet-3-evm",
  currencies: [
    {
      coinDenom: "attonibi",
      coinMinimalDenom: "unibi",
      coinDecimals: 18
    },
    {
      coinDenom: "tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek",
      coinMinimalDenom: "tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek",
      coinDecimals: 0
    },
    {
      coinDenom: "tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate",
      coinMinimalDenom: "tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate",
      coinDecimals: 0
    },
    {
      coinDenom: "tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP",
      coinMinimalDenom: "tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP",
      coinDecimals: 0
    },
    {
      coinDenom: "eth",
      coinMinimalDenom: "wei",
      coinDecimals: 18,
      coinGeckoId: "ethereum"
    }
  ],
  rest: "https://evm-lcd.devnet-3.nibiru.fi",
  rpc: "https://evm-rpc.devnet-3.nibiru.fi",
  bech32Config: {
    bech32PrefixAccAddr: "nibi",
    bech32PrefixAccPub: "nibipub",
    bech32PrefixValAddr: "nibivaloper",
    bech32PrefixValPub: "nibivaloperpub",
    bech32PrefixConsAddr: "nibivalcons",
    bech32PrefixConsPub: "nibivalconspub"
  },
  chainName: "nibirudevnet4",
  feeCurrencies: [
    {
      coinDenom: "attonibi",
      coinMinimalDenom: "unibi",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.025,
        average: 0.05,
        high: 0.1
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "attonibi",
    coinMinimalDenom: "unibi",
    coinDecimals: 18
  },
  bip44: {
    coinType: 118
  }
});
export const nibirutestnet = defineChainInfo({
  chainId: "nibiru-testnet-1",
  currencies: [
    {
      coinDenom: "attonibi",
      coinMinimalDenom: "unibi",
      coinDecimals: 18
    }
  ],
  rest: "https://lcd.testnet-1.nibiru.fi",
  rpc: "https://rpc.testnet-1.nibiru.fi",
  bech32Config: {
    bech32PrefixAccAddr: "nibi",
    bech32PrefixAccPub: "nibipub",
    bech32PrefixValAddr: "nibivaloper",
    bech32PrefixValPub: "nibivaloperpub",
    bech32PrefixConsAddr: "nibivalcons",
    bech32PrefixConsPub: "nibivalconspub"
  },
  chainName: "nibirutestnet",
  feeCurrencies: [
    {
      coinDenom: "attonibi",
      coinMinimalDenom: "unibi",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.025,
        average: 0.05,
        high: 0.1
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "attonibi",
    coinMinimalDenom: "unibi",
    coinDecimals: 18
  },
  bip44: {
    coinType: 118
  }
});
export const nibirutestnet2 = defineChainInfo({
  chainId: "nibiru-testnet-2",
  currencies: [
    {
      coinDenom: "attonibi",
      coinMinimalDenom: "unibi",
      coinDecimals: 18
    }
  ],
  rest: "https://lcd.testnet-2.nibiru.fi",
  rpc: "https://rpc.testnet-2.nibiru.fi",
  bech32Config: {
    bech32PrefixAccAddr: "nibi",
    bech32PrefixAccPub: "nibipub",
    bech32PrefixValAddr: "nibivaloper",
    bech32PrefixValPub: "nibivaloperpub",
    bech32PrefixConsAddr: "nibivalcons",
    bech32PrefixConsPub: "nibivalconspub"
  },
  chainName: "nibirutestnet2",
  feeCurrencies: [
    {
      coinDenom: "attonibi",
      coinMinimalDenom: "unibi",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.025,
        average: 0.05,
        high: 0.1
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "attonibi",
    coinMinimalDenom: "unibi",
    coinDecimals: 18
  },
  bip44: {
    coinType: 118
  }
});
export const nilliontestnet = defineChainInfo({
  chainId: "nillion-chain-testnet-1",
  currencies: [
    {
      coinDenom: "nil",
      coinMinimalDenom: "unil",
      coinDecimals: 6
    }
  ],
  rest: "https://nillion-testnet-api.polkachu.com/",
  rpc: "https://nillion-testnet-rpc.polkachu.com/",
  bech32Config: {
    bech32PrefixAccAddr: "nillion",
    bech32PrefixAccPub: "nillionpub",
    bech32PrefixValAddr: "nillionvaloper",
    bech32PrefixValPub: "nillionvaloperpub",
    bech32PrefixConsAddr: "nillionvalcons",
    bech32PrefixConsPub: "nillionvalconspub"
  },
  chainName: "nilliontestnet",
  feeCurrencies: [
    {
      coinDenom: "nil",
      coinMinimalDenom: "unil",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0001,
        average: 0.0001,
        high: 0.00025
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "nil",
    coinMinimalDenom: "unil",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const nobletestnet = defineChainInfo({
  chainId: "grand-1",
  currencies: [
    {
      coinDenom: "stake",
      coinMinimalDenom: "ustake",
      coinDecimals: 6
    },
    {
      coinDenom: "love",
      coinMinimalDenom: "ulove",
      coinDecimals: 6
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "uusdc",
      coinDecimals: 6
    },
    {
      coinDenom: "usdy",
      coinMinimalDenom: "ausdy",
      coinDecimals: 18
    }
  ],
  rest: "https://noble-testnet-api.polkachu.com",
  rpc: "https://noble-testnet-rpc.polkachu.com",
  bech32Config: {
    bech32PrefixAccAddr: "noble",
    bech32PrefixAccPub: "noblepub",
    bech32PrefixValAddr: "noblevaloper",
    bech32PrefixValPub: "noblevaloperpub",
    bech32PrefixConsAddr: "noblevalcons",
    bech32PrefixConsPub: "noblevalconspub"
  },
  chainName: "nobletestnet",
  feeCurrencies: [
    {
      coinDenom: "usdc",
      coinMinimalDenom: "uusdc",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "stake",
    coinMinimalDenom: "ustake",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const noistestnet = defineChainInfo({
  chainId: "nois-testnet-005",
  currencies: [
    {
      coinDenom: "nois",
      coinMinimalDenom: "unois",
      coinDecimals: 6
    }
  ],
  rest: "https://api.nois.mcbnode.online",
  rpc: "https://nois-testnet-rpc.polkachu.com",
  bech32Config: {
    bech32PrefixAccAddr: "nois",
    bech32PrefixAccPub: "noispub",
    bech32PrefixValAddr: "noisvaloper",
    bech32PrefixValPub: "noisvaloperpub",
    bech32PrefixConsAddr: "noisvalcons",
    bech32PrefixConsPub: "noisvalconspub"
  },
  chainName: "noistestnet",
  feeCurrencies: [
    {
      coinDenom: "nois",
      coinMinimalDenom: "unois",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.05,
        average: 0.05,
        high: 0.1
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "nois",
    coinMinimalDenom: "unois",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const nolustestnet = defineChainInfo({
  chainId: "rila-1",
  currencies: [
    {
      coinDenom: "nls",
      coinMinimalDenom: "unls",
      coinDecimals: 6
    }
  ],
  rest: "https://rila-cl.nolus.network:1317",
  rpc: "https://rila-cl.nolus.network:26657",
  bech32Config: {
    bech32PrefixAccAddr: "nolus",
    bech32PrefixAccPub: "noluspub",
    bech32PrefixValAddr: "nolusvaloper",
    bech32PrefixValPub: "nolusvaloperpub",
    bech32PrefixConsAddr: "nolusvalcons",
    bech32PrefixConsPub: "nolusvalconspub"
  },
  chainName: "nolustestnet",
  feeCurrencies: [
    {
      coinDenom: "nls",
      coinMinimalDenom: "unls",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.05
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "nls",
    coinMinimalDenom: "unls",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const nyxtestnet = defineChainInfo({
  chainId: "sandbox",
  currencies: [
    {
      coinDenom: "nyx",
      coinMinimalDenom: "unyx",
      coinDecimals: 6
    },
    {
      coinDenom: "nym",
      coinMinimalDenom: "unym",
      coinDecimals: 6
    }
  ],
  rest: "https://api.sandbox.nymtech.net",
  rpc: "https://rpc.sandbox.nymtech.net",
  bech32Config: {
    bech32PrefixAccAddr: "n",
    bech32PrefixAccPub: "npub",
    bech32PrefixValAddr: "nvaloper",
    bech32PrefixValPub: "nvaloperpub",
    bech32PrefixConsAddr: "nvalcons",
    bech32PrefixConsPub: "nvalconspub"
  },
  chainName: "nyxtestnet",
  feeCurrencies: [
    {
      coinDenom: "nym",
      coinMinimalDenom: "unym",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.025,
        average: 0.025,
        high: 0.04
      }
    },
    {
      coinDenom: "nyx",
      coinMinimalDenom: "unyx",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.025,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "nyx",
    coinMinimalDenom: "unyx",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const okp4testnet = defineChainInfo({
  chainId: "okp4-nemeton-1",
  currencies: [
    {
      coinDenom: "know",
      coinMinimalDenom: "uknow",
      coinDecimals: 6
    }
  ],
  rest: "https://okptest-lcd.quickapi.com",
  rpc: "https://api.testnet.okp4.network/rpc",
  bech32Config: {
    bech32PrefixAccAddr: "okp4",
    bech32PrefixAccPub: "okp4pub",
    bech32PrefixValAddr: "okp4valoper",
    bech32PrefixValPub: "okp4valoperpub",
    bech32PrefixConsAddr: "okp4valcons",
    bech32PrefixConsPub: "okp4valconspub"
  },
  chainName: "okp4testnet",
  feeCurrencies: [
    {
      coinDenom: "know",
      coinMinimalDenom: "uknow",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "know",
    coinMinimalDenom: "uknow",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const osmosistestnet = defineChainInfo({
  chainId: "osmo-test-5",
  currencies: [
    {
      coinDenom: "osmo",
      coinMinimalDenom: "uosmo",
      coinDecimals: 6,
      coinGeckoId: "osmosis"
    },
    {
      coinDenom: "ion",
      coinMinimalDenom: "uion",
      coinDecimals: 6,
      coinGeckoId: "ion"
    },
    {
      coinDenom: "atom",
      coinMinimalDenom: "ibc/9FF2B7A5F55038A7EE61F4FD6749D9A648B48E89830F2682B67B5DC158E2753C",
      coinDecimals: 6
    },
    {
      coinDenom: "ausdc",
      coinMinimalDenom: "ibc/2164BDB48DE5501430E71286448D87C6D2240EC0E078CF113CAB85E21A352BB0",
      coinDecimals: 6
    },
    {
      coinDenom: "weth",
      coinMinimalDenom: "ibc/1F42AC9631DBE03009219ECCFE151786F53A038DE9F7A07C709158514F1D5942",
      coinDecimals: 18
    },
    {
      coinDenom: "junox",
      coinMinimalDenom: "ibc/31D220286E6C224C0F72D890D0EB75A228D388089EF5C4D77212344F9EAF0183",
      coinDecimals: 6
    },
    {
      coinDenom: "mars",
      coinMinimalDenom: "ibc/66A7ADA623D33D0B66C6890FE3E1AF3D638D56CE2B56F8BDA210B2AA62016216",
      coinDecimals: 6
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/DE6792CF9E521F6AD6E9A4BDF6225C9571A3B74ACC0A529F92BC5122A39D2E58",
      coinDecimals: 6
    },
    {
      coinDenom: "akt",
      coinMinimalDenom: "ibc/AD59D59CFB0E628E73C798415F823AB5B6257C2FE4BF67DBB5D6A677B2686E82",
      coinDecimals: 6
    },
    {
      coinDenom: "kyve",
      coinMinimalDenom: "ibc/AB8AF05799E299FB5C5C80781DA35887F53E029745D20E5641233DB4E6B28515",
      coinDecimals: 6
    },
    {
      coinDenom: "qck",
      coinMinimalDenom: "ibc/F37CF69589DE12342758382F8770C0852CD8D2E4519F55166EBDAF472AD667C9",
      coinDecimals: 6
    },
    {
      coinDenom: "c4e",
      coinMinimalDenom: "ibc/E3D323CB6F427C49E56F913C853A416F6B71BAA9B0164625AD0203266F92B3ED",
      coinDecimals: 6
    },
    {
      coinDenom: "xprt",
      coinMinimalDenom: "ibc/754C8533F8A418B03AD5F2C6AA19D4703CF78BBAB9E2E4DDD6212AAC2E502CA6",
      coinDecimals: 6
    },
    {
      coinDenom: "XION",
      coinMinimalDenom: "ibc/3642669AD14386D3E38F43F30CFCA859B3E8A05BF6BD6A23DEBD2115AD1325E9",
      coinDecimals: 6
    },
    {
      coinDenom: "tsaga",
      coinMinimalDenom: "ibc/48384130079A5987378F5776775F8C29A02505273E777BBB99361F2BB5B577C9",
      coinDecimals: 6
    },
    {
      coinDenom: "ixo",
      coinMinimalDenom: "ibc/88C815D69587CF0F05E96E5E2731EA56194D73C9A02A500095294D3A5DE68F16",
      coinDecimals: 6
    },
    {
      coinDenom: "willyz",
      coinMinimalDenom: "factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz",
      coinDecimals: 6
    },
    {
      coinDenom: "amATOM",
      coinMinimalDenom: "ibc/C86B92F7FCFC1993DAC4AB0D78D9BC080300354B823A57F12CD6E2FBB667214E",
      coinDecimals: 6
    },
    {
      coinDenom: "tkx",
      coinMinimalDenom: "ibc/28EEF762052DB8C3D27A7BF625E9F86A1B3B689CC8D80C818CEDF2EB6CBA02A6",
      coinDecimals: 18
    }
  ],
  rest: "https://lcd.osmotest5.osmosis.zone/",
  rpc: "https://rpc.osmotest5.osmosis.zone/",
  bech32Config: {
    bech32PrefixAccAddr: "osmo",
    bech32PrefixAccPub: "osmopub",
    bech32PrefixValAddr: "osmovaloper",
    bech32PrefixValPub: "osmovaloperpub",
    bech32PrefixConsAddr: "osmovalcons",
    bech32PrefixConsPub: "osmovalconspub"
  },
  chainName: "osmosistestnet",
  feeCurrencies: [
    {
      coinDenom: "osmo",
      coinMinimalDenom: "uosmo",
      coinDecimals: 6,
      coinGeckoId: "osmosis",
      gasPriceStep: {
        low: 0.0025,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "osmo",
    coinMinimalDenom: "uosmo",
    coinDecimals: 6,
    coinGeckoId: "osmosis"
  },
  bip44: {
    coinType: 118
  }
});
export const osmosistestnet4 = defineChainInfo({
  chainId: "osmo-test-4",
  currencies: [
    {
      coinDenom: "osmo",
      coinMinimalDenom: "uosmo",
      coinDecimals: 6,
      coinGeckoId: "osmosis"
    },
    {
      coinDenom: "ion",
      coinMinimalDenom: "uion",
      coinDecimals: 6,
      coinGeckoId: "ion"
    }
  ],
  rest: "https://osmosistest-lcd.quickapi.com/",
  rpc: "https://rpc.osmo-test.ccvalidators.com/",
  bech32Config: {
    bech32PrefixAccAddr: "osmo",
    bech32PrefixAccPub: "osmopub",
    bech32PrefixValAddr: "osmovaloper",
    bech32PrefixValPub: "osmovaloperpub",
    bech32PrefixConsAddr: "osmovalcons",
    bech32PrefixConsPub: "osmovalconspub"
  },
  chainName: "osmosistestnet4",
  feeCurrencies: [
    {
      coinDenom: "osmo",
      coinMinimalDenom: "uosmo",
      coinDecimals: 6,
      coinGeckoId: "osmosis"
    }
  ],
  stakeCurrency: {
    coinDenom: "osmo",
    coinMinimalDenom: "uosmo",
    coinDecimals: 6,
    coinGeckoId: "osmosis"
  },
  bip44: {
    coinType: 118
  }
});
export const permtestnet = defineChainInfo({
  chainId: "INVALID-ID-permtestnet-testnet-1",
  currencies: [
    {
      coinDenom: "perm",
      coinMinimalDenom: "uperm",
      coinDecimals: 6
    }
  ],
  rest: "https://rest.3.finance/",
  rpc: "https://rpc.3.finance/",
  bech32Config: {
    bech32PrefixAccAddr: "perm",
    bech32PrefixAccPub: "permpub",
    bech32PrefixValAddr: "permvaloper",
    bech32PrefixValPub: "permvaloperpub",
    bech32PrefixConsAddr: "permvalcons",
    bech32PrefixConsPub: "permvalconspub"
  },
  chainName: "permtestnet",
  feeCurrencies: [
    {
      coinDenom: "perm",
      coinMinimalDenom: "uperm",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0025,
        average: 0.0025,
        high: 0.0024
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "perm",
    coinMinimalDenom: "uperm",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const persistencetestnet = defineChainInfo({
  chainId: "test-core-1",
  currencies: [
    {
      coinDenom: "xprt",
      coinMinimalDenom: "uxprt",
      coinDecimals: 6,
      coinGeckoId: "persistence"
    },
    {
      coinDenom: "stkatom",
      coinMinimalDenom: "stk/uatom",
      coinDecimals: 6
    }
  ],
  rest: "https://rest-testnet-persistence.architectnodes.com/",
  rpc: "https://rpc-testnet-persistence.architectnodes.com/",
  bech32Config: {
    bech32PrefixAccAddr: "persistence",
    bech32PrefixAccPub: "persistencepub",
    bech32PrefixValAddr: "persistencevaloper",
    bech32PrefixValPub: "persistencevaloperpub",
    bech32PrefixConsAddr: "persistencevalcons",
    bech32PrefixConsPub: "persistencevalconspub"
  },
  chainName: "persistencetestnet",
  feeCurrencies: [
    {
      coinDenom: "xprt",
      coinMinimalDenom: "uxprt",
      coinDecimals: 6,
      coinGeckoId: "persistence",
      gasPriceStep: {
        low: 0.05,
        average: 0.125,
        high: 0.2
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "xprt",
    coinMinimalDenom: "uxprt",
    coinDecimals: 6,
    coinGeckoId: "persistence"
  },
  bip44: {
    coinType: 118
  }
});
export const persistencetestnet2 = defineChainInfo({
  chainId: "test-core-2",
  currencies: [
    {
      coinDenom: "xprt",
      coinMinimalDenom: "uxprt",
      coinDecimals: 6,
      coinGeckoId: "persistence"
    },
    {
      coinDenom: "stkatom",
      coinMinimalDenom: "stk/uatom",
      coinDecimals: 6
    },
    {
      coinDenom: "stkosmo",
      coinMinimalDenom: "stk/uosmo",
      coinDecimals: 6
    },
    {
      coinDenom: "stkdv4tnt",
      coinMinimalDenom: "stk/adv4tnt",
      coinDecimals: 18
    }
  ],
  rest: "https://api-persistence-testnet-01.stakeflow.io/",
  rpc: "https://rpc-persistence-testnet-01.stakeflow.io/",
  bech32Config: {
    bech32PrefixAccAddr: "persistence",
    bech32PrefixAccPub: "persistencepub",
    bech32PrefixValAddr: "persistencevaloper",
    bech32PrefixValPub: "persistencevaloperpub",
    bech32PrefixConsAddr: "persistencevalcons",
    bech32PrefixConsPub: "persistencevalconspub"
  },
  chainName: "persistencetestnet2",
  feeCurrencies: [
    {
      coinDenom: "xprt",
      coinMinimalDenom: "uxprt",
      coinDecimals: 6,
      coinGeckoId: "persistence",
      gasPriceStep: {
        low: 0.05,
        average: 0.125,
        high: 0.2
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "xprt",
    coinMinimalDenom: "uxprt",
    coinDecimals: 6,
    coinGeckoId: "persistence"
  },
  bip44: {
    coinType: 118
  }
});
export const planqtestnet = defineChainInfo({
  chainId: "planq_7077-1",
  currencies: [
    {
      coinDenom: "tplanq",
      coinMinimalDenom: "atplanq",
      coinDecimals: 18
    }
  ],
  rest: "https://rest-atlas.planq.network",
  rpc: "https://rpc-atlas.planq.network",
  bech32Config: {
    bech32PrefixAccAddr: "plq",
    bech32PrefixAccPub: "plqpub",
    bech32PrefixValAddr: "plqvaloper",
    bech32PrefixValPub: "plqvaloperpub",
    bech32PrefixConsAddr: "plqvalcons",
    bech32PrefixConsPub: "plqvalconspub"
  },
  chainName: "planqtestnet",
  feeCurrencies: [
    {
      coinDenom: "tplanq",
      coinMinimalDenom: "atplanq",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 30000000000,
        average: 35000000000,
        high: 40000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "tplanq",
    coinMinimalDenom: "atplanq",
    coinDecimals: 18
  },
  bip44: {
    coinType: 60
  }
});
export const pryzmtestnet = defineChainInfo({
  chainId: "indigo-1",
  currencies: [
    {
      coinDenom: "pryzm",
      coinMinimalDenom: "upryzm",
      coinDecimals: 6
    }
  ],
  rest: "https://testnet-api.pryzm.zone",
  rpc: "https://testnet-rpc.pryzm.zone",
  bech32Config: {
    bech32PrefixAccAddr: "pryzm",
    bech32PrefixAccPub: "pryzmpub",
    bech32PrefixValAddr: "pryzmvaloper",
    bech32PrefixValPub: "pryzmvaloperpub",
    bech32PrefixConsAddr: "pryzmvalcons",
    bech32PrefixConsPub: "pryzmvalconspub"
  },
  chainName: "pryzmtestnet",
  feeCurrencies: [
    {
      coinDenom: "pryzm",
      coinMinimalDenom: "upryzm",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.015,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "pryzm",
    coinMinimalDenom: "upryzm",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const quasartestnet = defineChainInfo({
  chainId: "quasar-test-1",
  currencies: [
    {
      coinDenom: "qsr",
      coinMinimalDenom: "uqsr",
      coinDecimals: 6
    },
    {
      coinDenom: "ayy",
      coinMinimalDenom: "uayy",
      coinDecimals: 6
    },
    {
      coinDenom: "oro",
      coinMinimalDenom: "uoro",
      coinDecimals: 6
    }
  ],
  rest: "https://quasar-testnet-api.polkachu.com/",
  rpc: "https://quasar-testnet-rpc.polkachu.com/",
  bech32Config: {
    bech32PrefixAccAddr: "quasar",
    bech32PrefixAccPub: "quasarpub",
    bech32PrefixValAddr: "quasarvaloper",
    bech32PrefixValPub: "quasarvaloperpub",
    bech32PrefixConsAddr: "quasarvalcons",
    bech32PrefixConsPub: "quasarvalconspub"
  },
  chainName: "quasartestnet",
  feeCurrencies: [
    {
      coinDenom: "qsr",
      coinMinimalDenom: "uqsr",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0025,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "qsr",
    coinMinimalDenom: "uqsr",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const quicksilvertestnet = defineChainInfo({
  chainId: "rhye-2",
  currencies: [
    {
      coinDenom: "qck",
      coinMinimalDenom: "uqck",
      coinDecimals: 6,
      coinGeckoId: "quicksilver"
    }
  ],
  rest: "https://quick.api.t.stavr.tech",
  rpc: "http://quick.rpc.t.stavr.tech:20027",
  bech32Config: {
    bech32PrefixAccAddr: "quick",
    bech32PrefixAccPub: "quickpub",
    bech32PrefixValAddr: "quickvaloper",
    bech32PrefixValPub: "quickvaloperpub",
    bech32PrefixConsAddr: "quickvalcons",
    bech32PrefixConsPub: "quickvalconspub"
  },
  chainName: "quicksilvertestnet",
  feeCurrencies: [
    {
      coinDenom: "qck",
      coinMinimalDenom: "uqck",
      coinDecimals: 6,
      coinGeckoId: "quicksilver",
      gasPriceStep: {
        low: 0.0001,
        average: 0.0001,
        high: 0.00025
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "qck",
    coinMinimalDenom: "uqck",
    coinDecimals: 6,
    coinGeckoId: "quicksilver"
  },
  bip44: {
    coinType: 118
  }
});
export const qwoyntestnet = defineChainInfo({
  chainId: "earendel-1",
  currencies: [
    {
      coinDenom: "qwoyn",
      coinMinimalDenom: "uqwoyn",
      coinDecimals: 6
    }
  ],
  rest: "https://testnet-api.qwoyn.studio",
  rpc: "https://testnet-rpc.qwoyn.studio",
  bech32Config: {
    bech32PrefixAccAddr: "qwoyn",
    bech32PrefixAccPub: "qwoynpub",
    bech32PrefixValAddr: "qwoynvaloper",
    bech32PrefixValPub: "qwoynvaloperpub",
    bech32PrefixConsAddr: "qwoynvalcons",
    bech32PrefixConsPub: "qwoynvalconspub"
  },
  chainName: "qwoyntestnet",
  feeCurrencies: [
    {
      coinDenom: "qwoyn",
      coinMinimalDenom: "uqwoyn",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "qwoyn",
    coinMinimalDenom: "uqwoyn",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const sagatestnet = defineChainInfo({
  chainId: "ssc-testnet-1",
  currencies: [
    {
      coinDenom: "tsaga",
      coinMinimalDenom: "utsaga",
      coinDecimals: 6
    }
  ],
  rest: "https://testnet-ssc-lcd.sagarpc.io/",
  rpc: "https://testnet-ssc.sagarpc.io/",
  bech32Config: {
    bech32PrefixAccAddr: "saga",
    bech32PrefixAccPub: "sagapub",
    bech32PrefixValAddr: "sagavaloper",
    bech32PrefixValPub: "sagavaloperpub",
    bech32PrefixConsAddr: "sagavalcons",
    bech32PrefixConsPub: "sagavalconspub"
  },
  chainName: "sagatestnet",
  feeCurrencies: [
    {
      coinDenom: "tsaga",
      coinMinimalDenom: "utsaga",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0025,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "tsaga",
    coinMinimalDenom: "utsaga",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const secretnetworktestnet = defineChainInfo({
  chainId: "pulsar-3",
  currencies: [
    {
      coinDenom: "scrt",
      coinMinimalDenom: "uscrt",
      coinDecimals: 6,
      coinGeckoId: "secret"
    }
  ],
  rest: "https://lcd.testnet.secretsaturn.net",
  rpc: "https://rpc.testnet.secretsaturn.net",
  bech32Config: {
    bech32PrefixAccAddr: "secret",
    bech32PrefixAccPub: "secretpub",
    bech32PrefixValAddr: "secretvaloper",
    bech32PrefixValPub: "secretvaloperpub",
    bech32PrefixConsAddr: "secretvalcons",
    bech32PrefixConsPub: "secretvalconspub"
  },
  chainName: "secretnetworktestnet",
  feeCurrencies: [
    {
      coinDenom: "scrt",
      coinMinimalDenom: "uscrt",
      coinDecimals: 6,
      coinGeckoId: "secret"
    }
  ],
  stakeCurrency: {
    coinDenom: "scrt",
    coinMinimalDenom: "uscrt",
    coinDecimals: 6,
    coinGeckoId: "secret"
  },
  bip44: {
    coinType: 529
  }
});
export const secretnetworktestnet2 = defineChainInfo({
  chainId: "pulsar-2",
  currencies: [
    {
      coinDenom: "scrt",
      coinMinimalDenom: "uscrt",
      coinDecimals: 6
    }
  ],
  rest: "http://testnet.securesecrets.org:1317",
  rpc: "https://rpc.testnet.secretsaturn.net",
  bech32Config: {
    bech32PrefixAccAddr: "secret",
    bech32PrefixAccPub: "secretpub",
    bech32PrefixValAddr: "secretvaloper",
    bech32PrefixValPub: "secretvaloperpub",
    bech32PrefixConsAddr: "secretvalcons",
    bech32PrefixConsPub: "secretvalconspub"
  },
  chainName: "secretnetworktestnet2",
  feeCurrencies: [
    {
      coinDenom: "scrt",
      coinMinimalDenom: "uscrt",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "scrt",
    coinMinimalDenom: "uscrt",
    coinDecimals: 6
  },
  bip44: {
    coinType: 529
  }
});
export const seidevnet3 = defineChainInfo({
  chainId: "sei-devnet-3",
  currencies: [
    {
      coinDenom: "sei",
      coinMinimalDenom: "usei",
      coinDecimals: 6
    }
  ],
  rest: "https://rest.sei-devnet-3.seinetwork.io",
  rpc: "https://rpc.sei-devnet-3.seinetwork.io",
  bech32Config: {
    bech32PrefixAccAddr: "sei",
    bech32PrefixAccPub: "seipub",
    bech32PrefixValAddr: "seivaloper",
    bech32PrefixValPub: "seivaloperpub",
    bech32PrefixConsAddr: "seivalcons",
    bech32PrefixConsPub: "seivalconspub"
  },
  chainName: "seidevnet3",
  feeCurrencies: [
    {
      coinDenom: "sei",
      coinMinimalDenom: "usei",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "sei",
    coinMinimalDenom: "usei",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const seitestnet = defineChainInfo({
  chainId: "atlantic-1",
  currencies: [
    {
      coinDenom: "sei",
      coinMinimalDenom: "usei",
      coinDecimals: 6
    }
  ],
  rest: "https://sei-testnet-rest.brocha.in",
  rpc: "https://sei-testnet-rpc.brocha.in",
  bech32Config: {
    bech32PrefixAccAddr: "sei",
    bech32PrefixAccPub: "seipub",
    bech32PrefixValAddr: "seivaloper",
    bech32PrefixValPub: "seivaloperpub",
    bech32PrefixConsAddr: "seivalcons",
    bech32PrefixConsPub: "seivalconspub"
  },
  chainName: "seitestnet",
  feeCurrencies: [
    {
      coinDenom: "sei",
      coinMinimalDenom: "usei",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "sei",
    coinMinimalDenom: "usei",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const seitestnet2 = defineChainInfo({
  chainId: "atlantic-2",
  currencies: [
    {
      coinDenom: "sei",
      coinMinimalDenom: "usei",
      coinDecimals: 6
    }
  ],
  rest: "https://sei-testnet-2-rest.brocha.in",
  rpc: "https://sei-testnet-2-rpc.brocha.in",
  bech32Config: {
    bech32PrefixAccAddr: "sei",
    bech32PrefixAccPub: "seipub",
    bech32PrefixValAddr: "seivaloper",
    bech32PrefixValPub: "seivaloperpub",
    bech32PrefixConsAddr: "seivalcons",
    bech32PrefixConsPub: "seivalconspub"
  },
  chainName: "seitestnet2",
  feeCurrencies: [
    {
      coinDenom: "sei",
      coinMinimalDenom: "usei",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "sei",
    coinMinimalDenom: "usei",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const selfchaindevnet = defineChainInfo({
  chainId: "self-dev-1",
  currencies: [
    {
      coinDenom: "self",
      coinMinimalDenom: "uself",
      coinDecimals: 6
    }
  ],
  rest: "https://api-devnet.selfchain.xyz/",
  rpc: "https://rpc-devnet.selfchain.xyz",
  bech32Config: {
    bech32PrefixAccAddr: "self",
    bech32PrefixAccPub: "selfpub",
    bech32PrefixValAddr: "selfvaloper",
    bech32PrefixValPub: "selfvaloperpub",
    bech32PrefixConsAddr: "selfvalcons",
    bech32PrefixConsPub: "selfvalconspub"
  },
  chainName: "selfchaindevnet",
  feeCurrencies: [
    {
      coinDenom: "self",
      coinMinimalDenom: "uself",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "self",
    coinMinimalDenom: "uself",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const sgetestnet = defineChainInfo({
  chainId: "sge-network-3",
  currencies: [
    {
      coinDenom: "sge",
      coinMinimalDenom: "usge",
      coinDecimals: 6
    }
  ],
  rest: "https://api.testnet.sgenetwork.io",
  rpc: "https://rpc.testnet.sgenetwork.io",
  bech32Config: {
    bech32PrefixAccAddr: "sge",
    bech32PrefixAccPub: "sgepub",
    bech32PrefixValAddr: "sgevaloper",
    bech32PrefixValPub: "sgevaloperpub",
    bech32PrefixConsAddr: "sgevalcons",
    bech32PrefixConsPub: "sgevalconspub"
  },
  chainName: "sgetestnet",
  feeCurrencies: [
    {
      coinDenom: "sge",
      coinMinimalDenom: "usge",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "sge",
    coinMinimalDenom: "usge",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const sgetestnet4 = defineChainInfo({
  chainId: "sge-network-4",
  currencies: [
    {
      coinDenom: "sge",
      coinMinimalDenom: "usge",
      coinDecimals: 6
    }
  ],
  rest: "https://api.testnet.sgenetwork.io",
  rpc: "https://rpc.testnet.sgenetwork.io",
  bech32Config: {
    bech32PrefixAccAddr: "sge",
    bech32PrefixAccPub: "sgepub",
    bech32PrefixValAddr: "sgevaloper",
    bech32PrefixValPub: "sgevaloperpub",
    bech32PrefixConsAddr: "sgevalcons",
    bech32PrefixConsPub: "sgevalconspub"
  },
  chainName: "sgetestnet4",
  feeCurrencies: [
    {
      coinDenom: "sge",
      coinMinimalDenom: "usge",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "sge",
    coinMinimalDenom: "usge",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const sixtestnet = defineChainInfo({
  chainId: "fivenet",
  currencies: [
    {
      coinDenom: "six",
      coinMinimalDenom: "usix",
      coinDecimals: 6
    }
  ],
  rest: "https://api1.fivenet.sixprotocol.net:443",
  rpc: "https://rpc1.fivenet.sixprotocol.net:443",
  bech32Config: {
    bech32PrefixAccAddr: "6x",
    bech32PrefixAccPub: "6xpub",
    bech32PrefixValAddr: "6xvaloper",
    bech32PrefixValPub: "6xvaloperpub",
    bech32PrefixConsAddr: "6xvalcons",
    bech32PrefixConsPub: "6xvalconspub"
  },
  chainName: "sixtestnet",
  feeCurrencies: [
    {
      coinDenom: "six",
      coinMinimalDenom: "usix",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 1.25,
        average: 1.5,
        high: 1.75
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "six",
    coinMinimalDenom: "usix",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const soarchaintestnet = defineChainInfo({
  chainId: "soarchaintestnet",
  currencies: [
    {
      coinDenom: "tsoar",
      coinMinimalDenom: "utsoar",
      coinDecimals: 6
    }
  ],
  rest: "https://api.testnet.soarchain.com/",
  rpc: "https://rpc1.testnet.soarchain.com",
  bech32Config: {
    bech32PrefixAccAddr: "soar",
    bech32PrefixAccPub: "soarpub",
    bech32PrefixValAddr: "soarvaloper",
    bech32PrefixValPub: "soarvaloperpub",
    bech32PrefixConsAddr: "soarvalcons",
    bech32PrefixConsPub: "soarvalconspub"
  },
  chainName: "soarchaintestnet",
  feeCurrencies: [
    {
      coinDenom: "tsoar",
      coinMinimalDenom: "utsoar",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.02,
        high: 0.1
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "tsoar",
    coinMinimalDenom: "utsoar",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const sourcetestnet = defineChainInfo({
  chainId: "sourcetest-1",
  currencies: [
    {
      coinDenom: "source",
      coinMinimalDenom: "usource",
      coinDecimals: 6
    }
  ],
  rest: "https://source-testnet-api.itrocket.net/",
  rpc: "https://source-testnet-rpc.itrocket.net/",
  bech32Config: {
    bech32PrefixAccAddr: "source",
    bech32PrefixAccPub: "sourcepub",
    bech32PrefixValAddr: "sourcevaloper",
    bech32PrefixValPub: "sourcevaloperpub",
    bech32PrefixConsAddr: "sourcevalcons",
    bech32PrefixConsPub: "sourcevalconspub"
  },
  chainName: "sourcetestnet",
  feeCurrencies: [
    {
      coinDenom: "source",
      coinMinimalDenom: "usource",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.05,
        average: 0.075,
        high: 0.1
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "source",
    coinMinimalDenom: "usource",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const stargazetestnet = defineChainInfo({
  chainId: "elgafar-1",
  currencies: [
    {
      coinDenom: "stars",
      coinMinimalDenom: "ustars",
      coinDecimals: 6,
      coinGeckoId: "stargaze"
    }
  ],
  rest: "https://rest.elgafar-1.stargaze-apis.com",
  rpc: "https://rpc.elgafar-1.stargaze-apis.com",
  bech32Config: {
    bech32PrefixAccAddr: "stars",
    bech32PrefixAccPub: "starspub",
    bech32PrefixValAddr: "starsvaloper",
    bech32PrefixValPub: "starsvaloperpub",
    bech32PrefixConsAddr: "starsvalcons",
    bech32PrefixConsPub: "starsvalconspub"
  },
  chainName: "stargazetestnet",
  feeCurrencies: [
    {
      coinDenom: "stars",
      coinMinimalDenom: "ustars",
      coinDecimals: 6,
      coinGeckoId: "stargaze",
      gasPriceStep: {
        low: 0.03,
        average: 0.04,
        high: 0.05
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "stars",
    coinMinimalDenom: "ustars",
    coinDecimals: 6,
    coinGeckoId: "stargaze"
  },
  bip44: {
    coinType: 118
  }
});
export const statesettestnet = defineChainInfo({
  chainId: "stateset-1-testnet",
  currencies: [
    {
      coinDenom: "state",
      coinMinimalDenom: "ustate",
      coinDecimals: 6
    }
  ],
  rest: "https://rest-api.stateset.zone",
  rpc: "https://rpc.stateset.zone/",
  bech32Config: {
    bech32PrefixAccAddr: "stateset",
    bech32PrefixAccPub: "statesetpub",
    bech32PrefixValAddr: "statesetvaloper",
    bech32PrefixValPub: "statesetvaloperpub",
    bech32PrefixConsAddr: "statesetvalcons",
    bech32PrefixConsPub: "statesetvalconspub"
  },
  chainName: "statesettestnet",
  feeCurrencies: [
    {
      coinDenom: "state",
      coinMinimalDenom: "ustate",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "state",
    coinMinimalDenom: "ustate",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const stridetestnet = defineChainInfo({
  chainId: "stride-internal-1",
  currencies: [
    {
      coinDenom: "strd",
      coinMinimalDenom: "ustrd",
      coinDecimals: 6
    }
  ],
  rest: "https://stride.testnet-1.stridenet.co/api",
  rpc: "https://stride.testnet-1.stridenet.co",
  bech32Config: {
    bech32PrefixAccAddr: "stride",
    bech32PrefixAccPub: "stridepub",
    bech32PrefixValAddr: "stridevaloper",
    bech32PrefixValPub: "stridevaloperpub",
    bech32PrefixConsAddr: "stridevalcons",
    bech32PrefixConsPub: "stridevalconspub"
  },
  chainName: "stridetestnet",
  feeCurrencies: [
    {
      coinDenom: "strd",
      coinMinimalDenom: "ustrd",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "strd",
    coinMinimalDenom: "ustrd",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const sunrisetestnet = defineChainInfo({
  chainId: "sunrise-test-0.1",
  currencies: [
    {
      coinDenom: "vrise",
      coinMinimalDenom: "uvrise",
      coinDecimals: 6
    },
    {
      coinDenom: "rise",
      coinMinimalDenom: "urise",
      coinDecimals: 6
    }
  ],
  rest: "https://a-node.sunrise-test-1.cauchye.net:1318",
  rpc: "https://a-node.sunrise-test-1.cauchye.net/",
  bech32Config: {
    bech32PrefixAccAddr: "sunrise",
    bech32PrefixAccPub: "sunrisepub",
    bech32PrefixValAddr: "sunrisevaloper",
    bech32PrefixValPub: "sunrisevaloperpub",
    bech32PrefixConsAddr: "sunrisevalcons",
    bech32PrefixConsPub: "sunrisevalconspub"
  },
  chainName: "sunrisetestnet",
  feeCurrencies: [
    {
      coinDenom: "rise",
      coinMinimalDenom: "urise",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0025,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "vrise",
    coinMinimalDenom: "uvrise",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const swisstroniktestnet = defineChainInfo({
  chainId: "swisstronik_1291-1",
  currencies: [
    {
      coinDenom: "swtr",
      coinMinimalDenom: "aswtr",
      coinDecimals: 18
    }
  ],
  rest: "https://api.testnet.swisstronik.com",
  rpc: "https://rpc.testnet.swisstronik.com",
  bech32Config: {
    bech32PrefixAccAddr: "swtr",
    bech32PrefixAccPub: "swtrpub",
    bech32PrefixValAddr: "swtrvaloper",
    bech32PrefixValPub: "swtrvaloperpub",
    bech32PrefixConsAddr: "swtrvalcons",
    bech32PrefixConsPub: "swtrvalconspub"
  },
  chainName: "swisstroniktestnet",
  feeCurrencies: [
    {
      coinDenom: "swtr",
      coinMinimalDenom: "aswtr",
      coinDecimals: 18,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "swtr",
    coinMinimalDenom: "aswtr",
    coinDecimals: 18
  },
  bip44: {
    coinType: 60
  }
});
export const symphonytestnet = defineChainInfo({
  chainId: "symphony-testnet-3",
  currencies: [
    {
      coinDenom: "mld",
      coinMinimalDenom: "note",
      coinDecimals: 6
    },
    {
      coinDenom: "husd",
      coinMinimalDenom: "uusd",
      coinDecimals: 6
    },
    {
      coinDenom: "hkhd",
      coinMinimalDenom: "ukhd",
      coinDecimals: 6
    },
    {
      coinDenom: "hvnd",
      coinMinimalDenom: "uvnd",
      coinDecimals: 6
    }
  ],
  rest: "https://symphony.test.api.nodeshub.online/",
  rpc: "https://symphony.test.rpc.nodeshub.online/",
  bech32Config: {
    bech32PrefixAccAddr: "symphony",
    bech32PrefixAccPub: "symphonypub",
    bech32PrefixValAddr: "symphonyvaloper",
    bech32PrefixValPub: "symphonyvaloperpub",
    bech32PrefixConsAddr: "symphonyvalcons",
    bech32PrefixConsPub: "symphonyvalconspub"
  },
  chainName: "symphonytestnet",
  feeCurrencies: [
    {
      coinDenom: "mld",
      coinMinimalDenom: "note",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0025,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "mld",
    coinMinimalDenom: "note",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const synternettestnet = defineChainInfo({
  chainId: "amber-2",
  currencies: [
    {
      coinDenom: "AMBER",
      coinMinimalDenom: "uamber",
      coinDecimals: 6
    }
  ],
  rest: "https://api-testnet.synternet.com/",
  rpc: "https://rpc-testnet.synternet.com/",
  bech32Config: {
    bech32PrefixAccAddr: "amber",
    bech32PrefixAccPub: "amberpub",
    bech32PrefixValAddr: "ambervaloper",
    bech32PrefixValPub: "ambervaloperpub",
    bech32PrefixConsAddr: "ambervalcons",
    bech32PrefixConsPub: "ambervalconspub"
  },
  chainName: "synternettestnet",
  feeCurrencies: [
    {
      coinDenom: "AMBER",
      coinMinimalDenom: "uamber",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "AMBER",
    coinMinimalDenom: "uamber",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const temporaltestnet = defineChainInfo({
  chainId: "temporal-test-2",
  currencies: [
    {
      coinDenom: "tprl",
      coinMinimalDenom: "utprl",
      coinDecimals: 6
    }
  ],
  rest: "https://lcd.yieldmos.com/temporal-test-2",
  rpc: "https://rpc.yieldmos.com/temporal-test-2",
  bech32Config: {
    bech32PrefixAccAddr: "temporal",
    bech32PrefixAccPub: "temporalpub",
    bech32PrefixValAddr: "temporalvaloper",
    bech32PrefixValPub: "temporalvaloperpub",
    bech32PrefixConsAddr: "temporalvalcons",
    bech32PrefixConsPub: "temporalvalconspub"
  },
  chainName: "temporaltestnet",
  feeCurrencies: [
    {
      coinDenom: "tprl",
      coinMinimalDenom: "utprl",
      coinDecimals: 6,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "tprl",
    coinMinimalDenom: "utprl",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const terpnettestnet = defineChainInfo({
  chainId: "90u-4",
  currencies: [
    {
      coinDenom: "terpx",
      coinMinimalDenom: "uterpx",
      coinDecimals: 6
    },
    {
      coinDenom: "thiolx",
      coinMinimalDenom: "uthiolx",
      coinDecimals: 6
    }
  ],
  rest: "https://testnet-api.terp.network:443/",
  rpc: "https://testnet-rpc.terp.network:443/",
  bech32Config: {
    bech32PrefixAccAddr: "terp",
    bech32PrefixAccPub: "terppub",
    bech32PrefixValAddr: "terpvaloper",
    bech32PrefixValPub: "terpvaloperpub",
    bech32PrefixConsAddr: "terpvalcons",
    bech32PrefixConsPub: "terpvalconspub"
  },
  chainName: "terpnettestnet",
  feeCurrencies: [
    {
      coinDenom: "thiolx",
      coinMinimalDenom: "uthiolx",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.75,
        average: 1,
        high: 1.25
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "terpx",
    coinMinimalDenom: "uterpx",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const terpnettestnet2 = defineChainInfo({
  chainId: "90u-2",
  currencies: [
    {
      coinDenom: "terpx",
      coinMinimalDenom: "uterpx",
      coinDecimals: 6
    },
    {
      coinDenom: "thiolx",
      coinMinimalDenom: "uthiolx",
      coinDecimals: 6
    }
  ],
  rest: "https://terp-testnet-api.itrocket.net:443/",
  rpc: "https://terp-testnet-rpc.itrocket.net:443/",
  bech32Config: {
    bech32PrefixAccAddr: "terp",
    bech32PrefixAccPub: "terppub",
    bech32PrefixValAddr: "terpvaloper",
    bech32PrefixValPub: "terpvaloperpub",
    bech32PrefixConsAddr: "terpvalcons",
    bech32PrefixConsPub: "terpvalconspub"
  },
  chainName: "terpnettestnet2",
  feeCurrencies: [
    {
      coinDenom: "thiolx",
      coinMinimalDenom: "uthiolx",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.75,
        average: 1,
        high: 1.25
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "terpx",
    coinMinimalDenom: "uterpx",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const terra2testnet = defineChainInfo({
  chainId: "pisco-1",
  currencies: [
    {
      coinDenom: "luna",
      coinMinimalDenom: "uluna",
      coinDecimals: 6,
      coinGeckoId: "terra-luna-2"
    }
  ],
  rest: "https://pisco-lcd.terra.dev:443",
  rpc: "https://pisco-rpc.terra.dev:443",
  bech32Config: {
    bech32PrefixAccAddr: "terra",
    bech32PrefixAccPub: "terrapub",
    bech32PrefixValAddr: "terravaloper",
    bech32PrefixValPub: "terravaloperpub",
    bech32PrefixConsAddr: "terravalcons",
    bech32PrefixConsPub: "terravalconspub"
  },
  chainName: "terra2testnet",
  feeCurrencies: [
    {
      coinDenom: "luna",
      coinMinimalDenom: "uluna",
      coinDecimals: 6,
      coinGeckoId: "terra-luna-2",
      gasPriceStep: {
        low: 0.0125,
        average: 0.015,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "luna",
    coinMinimalDenom: "uluna",
    coinDecimals: 6,
    coinGeckoId: "terra-luna-2"
  },
  bip44: {
    coinType: 330
  }
});
export const titantestnet = defineChainInfo({
  chainId: "titan_18889-1",
  currencies: [
    {
      coinDenom: "tkx",
      coinMinimalDenom: "atkx",
      coinDecimals: 18
    }
  ],
  rest: "https://titan-testnet-lcd.titanlab.io:443",
  rpc: "https://titan-testnet-rpc.titanlab.io:443",
  bech32Config: {
    bech32PrefixAccAddr: "titan",
    bech32PrefixAccPub: "titanpub",
    bech32PrefixValAddr: "titanvaloper",
    bech32PrefixValPub: "titanvaloperpub",
    bech32PrefixConsAddr: "titanvalcons",
    bech32PrefixConsPub: "titanvalconspub"
  },
  chainName: "titantestnet",
  feeCurrencies: [
    {
      coinDenom: "tkx",
      coinMinimalDenom: "atkx",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 100000000000,
        average: 110000000000,
        high: 200000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "tkx",
    coinMinimalDenom: "atkx",
    coinDecimals: 18
  },
  bip44: {
    coinType: 60
  }
});
export const tucanatestnet = defineChainInfo({
  chainId: "tucana_712-1",
  currencies: [
    {
      coinDenom: "tuc",
      coinMinimalDenom: "atuc",
      coinDecimals: 18
    }
  ],
  rest: "https://lcd.birdee-2.tucana.zone/",
  rpc: "https://rpc.birdee-2.tucana.zone/",
  bech32Config: {
    bech32PrefixAccAddr: "tuc",
    bech32PrefixAccPub: "tucpub",
    bech32PrefixValAddr: "tucvaloper",
    bech32PrefixValPub: "tucvaloperpub",
    bech32PrefixConsAddr: "tucvalcons",
    bech32PrefixConsPub: "tucvalconspub"
  },
  chainName: "tucanatestnet",
  feeCurrencies: [
    {
      coinDenom: "tuc",
      coinMinimalDenom: "atuc",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 10000000000,
        average: 25000000000,
        high: 30000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "tuc",
    coinMinimalDenom: "atuc",
    coinDecimals: 18
  },
  bip44: {
    coinType: 60
  }
});
export const unificationtestnet = defineChainInfo({
  chainId: "FUND-TestNet-2",
  currencies: [
    {
      coinDenom: "FUND",
      coinMinimalDenom: "nund",
      coinDecimals: 9
    }
  ],
  rest: "https://rest-testnet.unification.io",
  rpc: "https://rpc-testnet.unification.io:443",
  bech32Config: {
    bech32PrefixAccAddr: "und",
    bech32PrefixAccPub: "undpub",
    bech32PrefixValAddr: "undvaloper",
    bech32PrefixValPub: "undvaloperpub",
    bech32PrefixConsAddr: "undvalcons",
    bech32PrefixConsPub: "undvalconspub"
  },
  chainName: "unificationtestnet",
  feeCurrencies: [
    {
      coinDenom: "FUND",
      coinMinimalDenom: "nund",
      coinDecimals: 9,
      coinGeckoId: "",
      gasPriceStep: {
        low: 100,
        average: 200,
        high: 300
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "FUND",
    coinMinimalDenom: "nund",
    coinDecimals: 9
  },
  bip44: {
    coinType: 5555
  }
});
export const uniontestnet = defineChainInfo({
  chainId: "union-testnet-8",
  currencies: [
    {
      coinDenom: "uno",
      coinMinimalDenom: "muno",
      coinDecimals: 6
    }
  ],
  rest: "https://rest.testnet-8.union.build",
  rpc: "https://rpc.testnet-8.union.build",
  bech32Config: {
    bech32PrefixAccAddr: "union",
    bech32PrefixAccPub: "unionpub",
    bech32PrefixValAddr: "unionvaloper",
    bech32PrefixValPub: "unionvaloperpub",
    bech32PrefixConsAddr: "unionvalcons",
    bech32PrefixConsPub: "unionvalconspub"
  },
  chainName: "uniontestnet",
  feeCurrencies: [
    {
      coinDenom: "uno",
      coinMinimalDenom: "muno",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0025,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "uno",
    coinMinimalDenom: "muno",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const upticktestnet = defineChainInfo({
  chainId: "uptick_7000-2",
  currencies: [
    {
      coinDenom: "uptick",
      coinMinimalDenom: "auptick",
      coinDecimals: 18
    }
  ],
  rest: "https://uptick-7000-2-rest.staketab.org",
  rpc: "https://uptick-7000-2-rpc.staketab.org:443",
  bech32Config: {
    bech32PrefixAccAddr: "uptick",
    bech32PrefixAccPub: "uptickpub",
    bech32PrefixValAddr: "uptickvaloper",
    bech32PrefixValPub: "uptickvaloperpub",
    bech32PrefixConsAddr: "uptickvalcons",
    bech32PrefixConsPub: "uptickvalconspub"
  },
  chainName: "upticktestnet",
  feeCurrencies: [
    {
      coinDenom: "uptick",
      coinMinimalDenom: "auptick",
      coinDecimals: 18,
      coinGeckoId: ""
    }
  ],
  stakeCurrency: {
    coinDenom: "uptick",
    coinMinimalDenom: "auptick",
    coinDecimals: 18
  },
  bip44: {
    coinType: 60
  }
});
export const vincechaintestnet = defineChainInfo({
  chainId: "vince_1903-1",
  currencies: [
    {
      coinDenom: "vce",
      coinMinimalDenom: "avce",
      coinDecimals: 18
    }
  ],
  rest: "http://lcd-testnet.vincechain.com/:1317/",
  rpc: "http://api-testnet.vincechain.com/:26657/",
  bech32Config: {
    bech32PrefixAccAddr: "vce",
    bech32PrefixAccPub: "vcepub",
    bech32PrefixValAddr: "vcevaloper",
    bech32PrefixValPub: "vcevaloperpub",
    bech32PrefixConsAddr: "vcevalcons",
    bech32PrefixConsPub: "vcevalconspub"
  },
  chainName: "vincechaintestnet",
  feeCurrencies: [
    {
      coinDenom: "vce",
      coinMinimalDenom: "avce",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 10000000000,
        average: 25000000000,
        high: 40000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "vce",
    coinMinimalDenom: "avce",
    coinDecimals: 18
  },
  bip44: {
    coinType: 60
  }
});
export const wardenprotocoltestnet = defineChainInfo({
  chainId: "buenavista-1",
  currencies: [
    {
      coinDenom: "ward",
      coinMinimalDenom: "uward",
      coinDecimals: 6
    }
  ],
  rest: "https://api.buenavista.wardenprotocol.org/",
  rpc: "https://rpc.buenavista.wardenprotocol.org/",
  bech32Config: {
    bech32PrefixAccAddr: "warden",
    bech32PrefixAccPub: "wardenpub",
    bech32PrefixValAddr: "wardenvaloper",
    bech32PrefixValPub: "wardenvaloperpub",
    bech32PrefixConsAddr: "wardenvalcons",
    bech32PrefixConsPub: "wardenvalconspub"
  },
  chainName: "wardenprotocoltestnet",
  feeCurrencies: [
    {
      coinDenom: "ward",
      coinMinimalDenom: "uward",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "ward",
    coinMinimalDenom: "uward",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const wavehashtestnet = defineChainInfo({
  chainId: "INVALID-ID-wavehashtestnet-testnet-1",
  currencies: [
    {
      coinDenom: "wahax",
      coinMinimalDenom: "uwahax",
      coinDecimals: 6
    }
  ],
  rest: "https://lcd.wavehash.online/",
  rpc: "https://rpc.wavehash.online/",
  bech32Config: {
    bech32PrefixAccAddr: "wavehash",
    bech32PrefixAccPub: "wavehashpub",
    bech32PrefixValAddr: "wavehashvaloper",
    bech32PrefixValPub: "wavehashvaloperpub",
    bech32PrefixConsAddr: "wavehashvalcons",
    bech32PrefixConsPub: "wavehashvalconspub"
  },
  chainName: "wavehashtestnet",
  feeCurrencies: [
    {
      coinDenom: "wahax",
      coinMinimalDenom: "uwahax",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.0025,
        average: 0.0025,
        high: 0.0024
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "wahax",
    coinMinimalDenom: "uwahax",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const xiontestnet = defineChainInfo({
  chainId: "xion-testnet-1",
  currencies: [
    {
      coinDenom: "XION",
      coinMinimalDenom: "uxion",
      coinDecimals: 6
    },
    {
      coinDenom: "axl",
      coinMinimalDenom: "ibc/33517D439F5E545A1AAB148FAE43AAE17CF68FFB9BC97AE0048A3E3B64518C58",
      coinDecimals: 6
    },
    {
      coinDenom: "osmo",
      coinMinimalDenom: "ibc/484532EB74866F3FB8A71F909F7B1B470FE2E66313DA0A1F9EE5B7C5C046D195",
      coinDecimals: 6
    },
    {
      coinDenom: "usdc",
      coinMinimalDenom: "ibc/57097251ED81A232CE3C9D899E7C8096D6D87EF84BA203E12E424AA4C9B57A64",
      coinDecimals: 6
    },
    {
      coinDenom: "INJ",
      coinMinimalDenom: "ibc/05314A48723E06A1B1B666066B6BEC89F3708E8854DF2E5E9193387AA9653036",
      coinDecimals: 18
    }
  ],
  rest: "https://testnet-burnt-api.lavenderfive.com",
  rpc: "https://testnet-burnt-rpc.lavenderfive.com",
  bech32Config: {
    bech32PrefixAccAddr: "xion",
    bech32PrefixAccPub: "xionpub",
    bech32PrefixValAddr: "xionvaloper",
    bech32PrefixValPub: "xionvaloperpub",
    bech32PrefixConsAddr: "xionvalcons",
    bech32PrefixConsPub: "xionvalconspub"
  },
  chainName: "xiontestnet",
  feeCurrencies: [
    {
      coinDenom: "XION",
      coinMinimalDenom: "uxion",
      coinDecimals: 6,
      coinGeckoId: "",
      gasPriceStep: {
        low: 0.025,
        average: 0.025,
        high: 0.04
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "XION",
    coinMinimalDenom: "uxion",
    coinDecimals: 6
  },
  bip44: {
    coinType: 118
  }
});
export const zetachaintestnet = defineChainInfo({
  chainId: "athens_7001-1",
  currencies: [
    {
      coinDenom: "tzeta",
      coinMinimalDenom: "azeta",
      coinDecimals: 18
    }
  ],
  rest: "https://zetachain-athens.blockpi.network/lcd/v1/public",
  rpc: "https://zetachain-athens.blockpi.network/rpc/v1/public",
  bech32Config: {
    bech32PrefixAccAddr: "zeta",
    bech32PrefixAccPub: "zetapub",
    bech32PrefixValAddr: "zetavaloper",
    bech32PrefixValPub: "zetavaloperpub",
    bech32PrefixConsAddr: "zetavalcons",
    bech32PrefixConsPub: "zetavalconspub"
  },
  chainName: "zetachaintestnet",
  feeCurrencies: [
    {
      coinDenom: "tzeta",
      coinMinimalDenom: "azeta",
      coinDecimals: 18,
      coinGeckoId: "",
      gasPriceStep: {
        low: 20000000000,
        average: 25000000000,
        high: 40000000000
      }
    }
  ],
  stakeCurrency: {
    coinDenom: "tzeta",
    coinMinimalDenom: "azeta",
    coinDecimals: 18
  },
  bip44: {
    coinType: 60
  }
});


export const mainnetChains = defineChains({
  _8ball: _8ball,
  acrechain: acrechain,
  agoric: agoric,
  aioz: aioz,
  akash: akash,
  akiro: akiro,
  althea: althea,
  andromeda: andromeda,
  andromeda1: andromeda1,
  archway: archway,
  arkh: arkh,
  assetmantle: assetmantle,
  aura: aura,
  aura1: aura1,
  axelar: axelar,
  bandchain: bandchain,
  beezee: beezee,
  bitbadges: bitbadges,
  bitcanna: bitcanna,
  bitsong: bitsong,
  bluzelle: bluzelle,
  bostrom: bostrom,
  canto: canto,
  carbon: carbon,
  celestia: celestia,
  chain4energy: chain4energy,
  cheqd: cheqd,
  chihuahua: chihuahua,
  chimba: chimba,
  chronicnetwork: chronicnetwork,
  cifer: cifer,
  cifer1: cifer1,
  cnhostables: cnhostables,
  comdex: comdex,
  commercionetwork: commercionetwork,
  composable: composable,
  conscious: conscious,
  coreum: coreum,
  cosmoshub: cosmoshub,
  coss: coss,
  crescent: crescent,
  cronos: cronos,
  cryptoorgchain: cryptoorgchain,
  cudos: cudos,
  decentr: decentr,
  desmos: desmos,
  dhealth: dhealth,
  dig: dig,
  doravota: doravota,
  dydx: dydx,
  dymension: dymension,
  dyson: dyson,
  echelon: echelon,
  emoney: emoney,
  empowerchain: empowerchain,
  ethos: ethos,
  evmos: evmos,
  fetchhub: fetchhub,
  finschia: finschia,
  firmachain: firmachain,
  furya: furya,
  fxcore: fxcore,
  gateway: gateway,
  genesisl1: genesisl1,
  gitopia: gitopia,
  govgen: govgen,
  gravitybridge: gravitybridge,
  haqq: haqq,
  heli: heli,
  highbury: highbury,
  humans: humans,
  impacthub: impacthub,
  injective: injective,
  irisnet: irisnet,
  jackal: jackal,
  joltify: joltify,
  juno: juno,
  kava: kava,
  kichain: kichain,
  konstellation: konstellation,
  kujira: kujira,
  kyve: kyve,
  lambda: lambda,
  lava: lava,
  likecoin: likecoin,
  logos: logos,
  loop: loop,
  loyal: loyal,
  lumenx: lumenx,
  lumnetwork: lumnetwork,
  mande: mande,
  mars: mars,
  medasdigital: medasdigital,
  meme: meme,
  migaloo: migaloo,
  mtgbp: mtgbp,
  mun: mun,
  mythos: mythos,
  neutaro: neutaro,
  neutron: neutron,
  nibiru: nibiru,
  nim: nim,
  noble: noble,
  nois: nois,
  nolus: nolus,
  nomic: nomic,
  nyx: nyx,
  odin: odin,
  odin1: odin1,
  omniflixhub: omniflixhub,
  onex: onex,
  onomy: onomy,
  oraichain: oraichain,
  osmosis: osmosis,
  panacea: panacea,
  passage: passage,
  persistence: persistence,
  planq: planq,
  point: point,
  provenance: provenance,
  pryzm: pryzm,
  pundix: pundix,
  pylons: pylons,
  qfs: qfs,
  quasar: quasar,
  quicksilver: quicksilver,
  qwoyn: qwoyn,
  realio: realio,
  rebus: rebus,
  regen: regen,
  rizon: rizon,
  routerchain: routerchain,
  saga: saga,
  scorum: scorum,
  secretnetwork: secretnetwork,
  seda: seda,
  sei: sei,
  self: self,
  sentinel: sentinel,
  sge: sge,
  shareledger: shareledger,
  shentu: shentu,
  shido: shido,
  sifchain: sifchain,
  six: six,
  sommelier: sommelier,
  source: source,
  stafihub: stafihub,
  stargaze: stargaze,
  starname: starname,
  stratos: stratos,
  stride: stride,
  synternet: synternet,
  taketitan: taketitan,
  tenet: tenet,
  teritori: teritori,
  terpnetwork: terpnetwork,
  terra: terra,
  terra2: terra2,
  tgrade: tgrade,
  titan: titan,
  umee: umee,
  unification: unification,
  ununifi: ununifi,
  uptick: uptick,
  vidulum: vidulum,
  xpla: xpla,
  zetachain: zetachain,
});

export const mainnetChainsArray = [
  _8ball,
  acrechain,
  agoric,
  aioz,
  akash,
  akiro,
  althea,
  andromeda,
  andromeda1,
  archway,
  arkh,
  assetmantle,
  aura,
  aura1,
  axelar,
  bandchain,
  beezee,
  bitbadges,
  bitcanna,
  bitsong,
  bluzelle,
  bostrom,
  canto,
  carbon,
  celestia,
  chain4energy,
  cheqd,
  chihuahua,
  chimba,
  chronicnetwork,
  cifer,
  cifer1,
  cnhostables,
  comdex,
  commercionetwork,
  composable,
  conscious,
  coreum,
  cosmoshub,
  coss,
  crescent,
  cronos,
  cryptoorgchain,
  cudos,
  decentr,
  desmos,
  dhealth,
  dig,
  doravota,
  dydx,
  dymension,
  dyson,
  echelon,
  emoney,
  empowerchain,
  ethos,
  evmos,
  fetchhub,
  finschia,
  firmachain,
  furya,
  fxcore,
  gateway,
  genesisl1,
  gitopia,
  govgen,
  gravitybridge,
  haqq,
  heli,
  highbury,
  humans,
  impacthub,
  injective,
  irisnet,
  jackal,
  joltify,
  juno,
  kava,
  kichain,
  konstellation,
  kujira,
  kyve,
  lambda,
  lava,
  likecoin,
  logos,
  loop,
  loyal,
  lumenx,
  lumnetwork,
  mande,
  mars,
  medasdigital,
  meme,
  migaloo,
  mtgbp,
  mun,
  mythos,
  neutaro,
  neutron,
  nibiru,
  nim,
  noble,
  nois,
  nolus,
  nomic,
  nyx,
  odin,
  odin1,
  omniflixhub,
  onex,
  onomy,
  oraichain,
  osmosis,
  panacea,
  passage,
  persistence,
  planq,
  point,
  provenance,
  pryzm,
  pundix,
  pylons,
  qfs,
  quasar,
  quicksilver,
  qwoyn,
  realio,
  rebus,
  regen,
  rizon,
  routerchain,
  saga,
  scorum,
  secretnetwork,
  seda,
  sei,
  self,
  sentinel,
  sge,
  shareledger,
  shentu,
  shido,
  sifchain,
  six,
  sommelier,
  source,
  stafihub,
  stargaze,
  starname,
  stratos,
  stride,
  synternet,
  taketitan,
  tenet,
  teritori,
  terpnetwork,
  terra,
  terra2,
  tgrade,
  titan,
  umee,
  unification,
  ununifi,
  uptick,
  vidulum,
  xpla,
  zetachain,
];

export const testnetChains = defineChains({
  airchainstestnet: airchainstestnet,
  akashtestnet: akashtestnet,
  archwaytestnet: archwaytestnet,
  arkeonetworktestnet: arkeonetworktestnet,
  artelatestnet: artelatestnet,
  auratestnet: auratestnet,
  axelartestnet: axelartestnet,
  babylontestnet: babylontestnet,
  babylontestnet1: babylontestnet1,
  bitcannadevnet: bitcannadevnet,
  bitcannadevnet2: bitcannadevnet2,
  cascadiatestnet: cascadiatestnet,
  celestiatestnet: celestiatestnet,
  celestiatestnet2: celestiatestnet2,
  celestiatestnet3: celestiatestnet3,
  chain4energytestnet: chain4energytestnet,
  cheqdtestnet: cheqdtestnet,
  chimbatestnet: chimbatestnet,
  composabletestnet: composabletestnet,
  coolcattestnet: coolcattestnet,
  coreumtestnet: coreumtestnet,
  cosmoshubtestnet: cosmoshubtestnet,
  cosmosicsprovidertestnet: cosmosicsprovidertestnet,
  cosmwasmtestnet: cosmwasmtestnet,
  cosstestnet: cosstestnet,
  deardogetestnet: deardogetestnet,
  desmostestnet: desmostestnet,
  dhealthtestnet: dhealthtestnet,
  doravotatestnet: doravotatestnet,
  doravotatestnet2: doravotatestnet2,
  dydxtestnet: dydxtestnet,
  elystestnet: elystestnet,
  empetestnet: empetestnet,
  empowertestnet: empowertestnet,
  entrypointtestnet: entrypointtestnet,
  evmostestnet: evmostestnet,
  fetchhubtestnet: fetchhubtestnet,
  fiammatestnet: fiammatestnet,
  finschiatestnet: finschiatestnet,
  galacticatestnet: galacticatestnet,
  gitopiatestnet: gitopiatestnet,
  hedgetestnet: hedgetestnet,
  humanstestnet: humanstestnet,
  hypersigntestnet: hypersigntestnet,
  impacthubdevnet: impacthubdevnet,
  impacthubtestnet: impacthubtestnet,
  imversedtestnet: imversedtestnet,
  injectivetestnet: injectivetestnet,
  jackaltestnet: jackaltestnet,
  jackaltestnet2: jackaltestnet2,
  junotestnet: junotestnet,
  kichaintestnet: kichaintestnet,
  kimatestnet: kimatestnet,
  kujiratestnet: kujiratestnet,
  kyvedevnet: kyvedevnet,
  kyvetestnet: kyvetestnet,
  lavatestnet: lavatestnet,
  lavatestnet1: lavatestnet1,
  likecointestnet: likecointestnet,
  lumenxtestnet: lumenxtestnet,
  manifesttestnet: manifesttestnet,
  mantrachaintestnet: mantrachaintestnet,
  marstestnet: marstestnet,
  migalootestnet: migalootestnet,
  neutrontestnet: neutrontestnet,
  nibirudevnet: nibirudevnet,
  nibirudevnet2: nibirudevnet2,
  nibirudevnet3: nibirudevnet3,
  nibirudevnet4: nibirudevnet4,
  nibirutestnet: nibirutestnet,
  nibirutestnet2: nibirutestnet2,
  nilliontestnet: nilliontestnet,
  nobletestnet: nobletestnet,
  noistestnet: noistestnet,
  nolustestnet: nolustestnet,
  nyxtestnet: nyxtestnet,
  okp4testnet: okp4testnet,
  osmosistestnet: osmosistestnet,
  osmosistestnet4: osmosistestnet4,
  permtestnet: permtestnet,
  persistencetestnet: persistencetestnet,
  persistencetestnet2: persistencetestnet2,
  planqtestnet: planqtestnet,
  pryzmtestnet: pryzmtestnet,
  quasartestnet: quasartestnet,
  quicksilvertestnet: quicksilvertestnet,
  qwoyntestnet: qwoyntestnet,
  sagatestnet: sagatestnet,
  secretnetworktestnet: secretnetworktestnet,
  secretnetworktestnet2: secretnetworktestnet2,
  seidevnet3: seidevnet3,
  seitestnet: seitestnet,
  seitestnet2: seitestnet2,
  selfchaindevnet: selfchaindevnet,
  sgetestnet: sgetestnet,
  sgetestnet4: sgetestnet4,
  sixtestnet: sixtestnet,
  soarchaintestnet: soarchaintestnet,
  sourcetestnet: sourcetestnet,
  stargazetestnet: stargazetestnet,
  statesettestnet: statesettestnet,
  stridetestnet: stridetestnet,
  sunrisetestnet: sunrisetestnet,
  swisstroniktestnet: swisstroniktestnet,
  symphonytestnet: symphonytestnet,
  synternettestnet: synternettestnet,
  temporaltestnet: temporaltestnet,
  terpnettestnet: terpnettestnet,
  terpnettestnet2: terpnettestnet2,
  terra2testnet: terra2testnet,
  titantestnet: titantestnet,
  tucanatestnet: tucanatestnet,
  unificationtestnet: unificationtestnet,
  uniontestnet: uniontestnet,
  upticktestnet: upticktestnet,
  vincechaintestnet: vincechaintestnet,
  wardenprotocoltestnet: wardenprotocoltestnet,
  wavehashtestnet: wavehashtestnet,
  xiontestnet: xiontestnet,
  zetachaintestnet: zetachaintestnet,
});

export const testnetChainsArray = [
  airchainstestnet,
  akashtestnet,
  archwaytestnet,
  arkeonetworktestnet,
  artelatestnet,
  auratestnet,
  axelartestnet,
  babylontestnet,
  babylontestnet1,
  bitcannadevnet,
  bitcannadevnet2,
  cascadiatestnet,
  celestiatestnet,
  celestiatestnet2,
  celestiatestnet3,
  chain4energytestnet,
  cheqdtestnet,
  chimbatestnet,
  composabletestnet,
  coolcattestnet,
  coreumtestnet,
  cosmoshubtestnet,
  cosmosicsprovidertestnet,
  cosmwasmtestnet,
  cosstestnet,
  deardogetestnet,
  desmostestnet,
  dhealthtestnet,
  doravotatestnet,
  doravotatestnet2,
  dydxtestnet,
  elystestnet,
  empetestnet,
  empowertestnet,
  entrypointtestnet,
  evmostestnet,
  fetchhubtestnet,
  fiammatestnet,
  finschiatestnet,
  galacticatestnet,
  gitopiatestnet,
  hedgetestnet,
  humanstestnet,
  hypersigntestnet,
  impacthubdevnet,
  impacthubtestnet,
  imversedtestnet,
  injectivetestnet,
  jackaltestnet,
  jackaltestnet2,
  junotestnet,
  kichaintestnet,
  kimatestnet,
  kujiratestnet,
  kyvedevnet,
  kyvetestnet,
  lavatestnet,
  lavatestnet1,
  likecointestnet,
  lumenxtestnet,
  manifesttestnet,
  mantrachaintestnet,
  marstestnet,
  migalootestnet,
  neutrontestnet,
  nibirudevnet,
  nibirudevnet2,
  nibirudevnet3,
  nibirudevnet4,
  nibirutestnet,
  nibirutestnet2,
  nilliontestnet,
  nobletestnet,
  noistestnet,
  nolustestnet,
  nyxtestnet,
  okp4testnet,
  osmosistestnet,
  osmosistestnet4,
  permtestnet,
  persistencetestnet,
  persistencetestnet2,
  planqtestnet,
  pryzmtestnet,
  quasartestnet,
  quicksilvertestnet,
  qwoyntestnet,
  sagatestnet,
  secretnetworktestnet,
  secretnetworktestnet2,
  seidevnet3,
  seitestnet,
  seitestnet2,
  selfchaindevnet,
  sgetestnet,
  sgetestnet4,
  sixtestnet,
  soarchaintestnet,
  sourcetestnet,
  stargazetestnet,
  statesettestnet,
  stridetestnet,
  sunrisetestnet,
  swisstroniktestnet,
  symphonytestnet,
  synternettestnet,
  temporaltestnet,
  terpnettestnet,
  terpnettestnet2,
  terra2testnet,
  titantestnet,
  tucanatestnet,
  unificationtestnet,
  uniontestnet,
  upticktestnet,
  vincechaintestnet,
  wardenprotocoltestnet,
  wavehashtestnet,
  xiontestnet,
  zetachaintestnet,
];