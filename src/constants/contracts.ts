import { ContractInterface } from "ethers";
import { AbiItem } from "web3-utils";

//Dev
// export const presaleContractAddress = "0x62dc7892a538a2c43acb0224adac0ee280ed1829";
// export const presaleContractAddress = "0x3bb8dbb3bfb5d49c893127e5cc4dc1b323267158";
// export const tetherContractAddress = "0x20aae4cf931dfcbc7222cff7b8851d2437dacd54";
// export const catsContractAddress = "0x236f7964654ef4936972f245a10ee18fec9db919";


//PROD
export const presaleContractAddress = "0x3511d99b34d07a0ee5ebd8ccca32e7a92423df03";
export const tetherContractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
export const catsContractAddress = "0xaa6d4a35b7cde0c21098396146abe403cdf2d0ca";
export const walletAddressAdmin = "0x3511D99B34d07A0Ee5eBD8ccCA32E7a92423Df03";

//Prod
 const presale = [
  {
    "inputs": [],
    "name": "buyWithETH",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "usdtAmount",
        "type": "uint256"
      }
    ],
    "name": "buyWithUSDT",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "claimTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "claimUnrefundedFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "initializePresaleV3",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ReentrancyGuardReentrantCall",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "SafeERC20FailedOperation",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "purchaseId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountRefunded",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "currency",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "RefundClaimed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "purchaseId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountRefunded",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "currency",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "RefundRequested",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "purchaseId",
        "type": "uint256"
      }
    ],
    "name": "requestRefund",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_startTime",
        "type": "uint256"
      }
    ],
    "name": "setPresaleStartTime",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_presaleV2",
        "type": "address"
      }
    ],
    "name": "setPresaleV2",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_priceOracle",
        "type": "address"
      }
    ],
    "name": "setPriceOracle",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_targetAddress",
        "type": "address"
      }
    ],
    "name": "setTargetAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_tokenAddress",
        "type": "address"
      }
    ],
    "name": "setTokenAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_usdtToken",
        "type": "address"
      }
    ],
    "name": "setUSDTToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokensAmount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_saleToken",
        "type": "address"
      }
    ],
    "name": "startClaim",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokensBought",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountPaid",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "paymentMethod",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "stage",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "purchaseCount",
        "type": "uint256"
      }
    ],
    "name": "TokensBought",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "TokensClaimed",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountETH",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountUSDT",
        "type": "uint256"
      }
    ],
    "name": "UnrefundedFundsWithdrawn",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  },
  {
    "inputs": [],
    "name": "claimStart",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "currentPresaleStage",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenAmount",
        "type": "uint256"
      }
    ],
    "name": "getETHAmountForTokenInCurrentPresale",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "ethAmount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getETHLatestPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_ethAmount",
        "type": "uint256"
      }
    ],
    "name": "getTokenAmountForETHInCurrentPresale",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "tokenAmount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_usdAmount",
        "type": "uint256"
      }
    ],
    "name": "getTokenAmountForUSDTInCurrentPresale",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "tokenAmount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_ethAmount",
        "type": "uint256"
      }
    ],
    "name": "getTokenForETH",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "totalTokens",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_usdAmount",
        "type": "uint256"
      }
    ],
    "name": "getTokenForUSDT",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "totalTokens",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenAmount",
        "type": "uint256"
      }
    ],
    "name": "getUSDTAmountForTokenInCurrentPresale",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "usdtAmount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getUSDTBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "hasClaimed",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "initialized",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "inSale",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isPresaleCompleted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isPresaleStarted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isUserExist",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "presaleDetails",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "stage",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalTokens",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "inSale",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalTokenSold",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalUSDAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "priceMultipler",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "priceDivider",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "startTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endTime",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "presaleEndTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "presaleStartTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "presaleV2",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "priceOracle",
    "outputs": [
      {
        "internalType": "contract IAggregator",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "purchaseCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "purchases",
    "outputs": [
      {
        "internalType": "address",
        "name": "buyer",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "paidInEth",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "amountPaid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokensBought",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "refunded",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "RefundedAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "remainingTokens",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "saleToken",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "targetAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalPresaleStages",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalRefundClaimed",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalTokensForPresale",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalTokenSold",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalUSDAfterRefund",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalUSDAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalUsers",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "usdtToken",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "userDeposits",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

//Dev
// const presale = [
//   {
//     "inputs": [],
//     "name": "buyWithETH",
//     "outputs": [],
//     "stateMutability": "payable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "usdtAmount",
//         "type": "uint256"
//       }
//     ],
//     "name": "buyWithUSDT",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "claimTokens",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "claimUnrefundedFunds",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "initializePresaleV3",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "stateMutability": "nonpayable",
//     "type": "constructor"
//   },
//   {
//     "inputs": [],
//     "name": "EnforcedPause",
//     "type": "error"
//   },
//   {
//     "inputs": [],
//     "name": "ExpectedPause",
//     "type": "error"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "owner",
//         "type": "address"
//       }
//     ],
//     "name": "OwnableInvalidOwner",
//     "type": "error"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "account",
//         "type": "address"
//       }
//     ],
//     "name": "OwnableUnauthorizedAccount",
//     "type": "error"
//   },
//   {
//     "inputs": [],
//     "name": "pause",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "ReentrancyGuardReentrantCall",
//     "type": "error"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "token",
//         "type": "address"
//       }
//     ],
//     "name": "SafeERC20FailedOperation",
//     "type": "error"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "previousOwner",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "newOwner",
//         "type": "address"
//       }
//     ],
//     "name": "OwnershipTransferred",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": false,
//         "internalType": "address",
//         "name": "account",
//         "type": "address"
//       }
//     ],
//     "name": "Paused",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "user",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "purchaseId",
//         "type": "uint256"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "amountRefunded",
//         "type": "uint256"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "currency",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "timestamp",
//         "type": "uint256"
//       }
//     ],
//     "name": "RefundClaimed",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "user",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "purchaseId",
//         "type": "uint256"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "amountRefunded",
//         "type": "uint256"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "currency",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "timestamp",
//         "type": "uint256"
//       }
//     ],
//     "name": "RefundRequested",
//     "type": "event"
//   },
//   {
//     "inputs": [],
//     "name": "renounceOwnership",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "purchaseId",
//         "type": "uint256"
//       }
//     ],
//     "name": "requestRefund",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_startTime",
//         "type": "uint256"
//       }
//     ],
//     "name": "setPresaleStartTime",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "_presaleV2",
//         "type": "address"
//       }
//     ],
//     "name": "setPresaleV2",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "_priceOracle",
//         "type": "address"
//       }
//     ],
//     "name": "setPriceOracle",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "_targetAddress",
//         "type": "address"
//       }
//     ],
//     "name": "setTargetAddress",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "_tokenAddress",
//         "type": "address"
//       }
//     ],
//     "name": "setTokenAddress",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "_usdtToken",
//         "type": "address"
//       }
//     ],
//     "name": "setUSDTToken",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "tokensAmount",
//         "type": "uint256"
//       },
//       {
//         "internalType": "address",
//         "name": "_saleToken",
//         "type": "address"
//       }
//     ],
//     "name": "startClaim",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "user",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "tokensBought",
//         "type": "uint256"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "amountPaid",
//         "type": "uint256"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "paymentMethod",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "stage",
//         "type": "uint256"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "timestamp",
//         "type": "uint256"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "purchaseCount",
//         "type": "uint256"
//       }
//     ],
//     "name": "TokensBought",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "user",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "amount",
//         "type": "uint256"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "timestamp",
//         "type": "uint256"
//       }
//     ],
//     "name": "TokensClaimed",
//     "type": "event"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "newOwner",
//         "type": "address"
//       }
//     ],
//     "name": "transferOwnership",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "unpause",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": false,
//         "internalType": "address",
//         "name": "account",
//         "type": "address"
//       }
//     ],
//     "name": "Unpaused",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "amountETH",
//         "type": "uint256"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "amountUSDT",
//         "type": "uint256"
//       }
//     ],
//     "name": "UnrefundedFundsWithdrawn",
//     "type": "event"
//   },
//   {
//     "stateMutability": "payable",
//     "type": "receive"
//   },
//   {
//     "inputs": [],
//     "name": "claimStart",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "currentPresaleStage",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_tokenAmount",
//         "type": "uint256"
//       }
//     ],
//     "name": "getETHAmountForTokenInCurrentPresale",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "ethAmount",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "getETHLatestPrice",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_ethAmount",
//         "type": "uint256"
//       }
//     ],
//     "name": "getTokenAmountForETHInCurrentPresale",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "tokenAmount",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_usdAmount",
//         "type": "uint256"
//       }
//     ],
//     "name": "getTokenAmountForUSDTInCurrentPresale",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "tokenAmount",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_ethAmount",
//         "type": "uint256"
//       }
//     ],
//     "name": "getTokenForETH",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "totalTokens",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_usdAmount",
//         "type": "uint256"
//       }
//     ],
//     "name": "getTokenForUSDT",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "totalTokens",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_tokenAmount",
//         "type": "uint256"
//       }
//     ],
//     "name": "getUSDTAmountForTokenInCurrentPresale",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "usdtAmount",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "getUSDTBalance",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "name": "hasClaimed",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "initialized",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "inSale",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "isPresaleCompleted",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "isPresaleStarted",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "name": "isUserExist",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "owner",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "paused",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "presaleDetails",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "stage",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "totalTokens",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "inSale",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "totalTokenSold",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "totalUSDAmount",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "priceMultipler",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "priceDivider",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "startTime",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "endTime",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "presaleEndTime",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "presaleStartTime",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "presaleV2",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "priceOracle",
//     "outputs": [
//       {
//         "internalType": "contract IAggregator",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "purchaseCount",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "purchases",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "buyer",
//         "type": "address"
//       },
//       {
//         "internalType": "bool",
//         "name": "paidInEth",
//         "type": "bool"
//       },
//       {
//         "internalType": "uint256",
//         "name": "amountPaid",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "tokensBought",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "timestamp",
//         "type": "uint256"
//       },
//       {
//         "internalType": "bool",
//         "name": "refunded",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "RefundedAmount",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "remainingTokens",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "saleToken",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "targetAddress",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "totalPresaleStages",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "totalRefundClaimed",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "totalTokensForPresale",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "totalTokenSold",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "totalUSDAfterRefund",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "totalUSDAmount",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "totalUsers",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "usdtToken",
//     "outputs": [
//       {
//         "internalType": "contract IERC20",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "name": "userDeposits",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   }
// ];



//Prod
const teather = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "_upgradedAddress", type: "address" }],
    name: "deprecate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_spender", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "deprecated",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "_evilUser", type: "address" }],
    name: "addBlackList",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_from", type: "address" },
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "upgradedAddress",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "balances",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "maximumFee",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "_totalSupply",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  { constant: false, inputs: [], name: "unpause", outputs: [], payable: false, stateMutability: "nonpayable", type: "function" },
  {
    constant: true,
    inputs: [{ name: "_maker", type: "address" }],
    name: "getBlackListStatus",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { name: "", type: "address" },
      { name: "", type: "address" },
    ],
    name: "allowed",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "paused",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "who", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  { constant: false, inputs: [], name: "pause", outputs: [], payable: false, stateMutability: "nonpayable", type: "function" },
  {
    constant: true,
    inputs: [],
    name: "getOwner",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "transfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "newBasisPoints", type: "uint256" },
      { name: "newMaxFee", type: "uint256" },
    ],
    name: "setParams",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "amount", type: "uint256" }],
    name: "issue",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "amount", type: "uint256" }],
    name: "redeem",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { name: "_owner", type: "address" },
      { name: "_spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "remaining", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "basisPointsRate",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "isBlackListed",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "_clearedUser", type: "address" }],
    name: "removeBlackList",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MAX_UINT",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "_blackListedUser", type: "address" }],
    name: "destroyBlackFunds",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { name: "_initialSupply", type: "uint256" },
      { name: "_name", type: "string" },
      { name: "_symbol", type: "string" },
      { name: "_decimals", type: "uint256" },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { anonymous: false, inputs: [{ indexed: false, name: "amount", type: "uint256" }], name: "Issue", type: "event" },
  { anonymous: false, inputs: [{ indexed: false, name: "amount", type: "uint256" }], name: "Redeem", type: "event" },
  { anonymous: false, inputs: [{ indexed: false, name: "newAddress", type: "address" }], name: "Deprecate", type: "event" },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "feeBasisPoints", type: "uint256" },
      { indexed: false, name: "maxFee", type: "uint256" },
    ],
    name: "Params",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "_blackListedUser", type: "address" },
      { indexed: false, name: "_balance", type: "uint256" },
    ],
    name: "DestroyedBlackFunds",
    type: "event",
  },
  { anonymous: false, inputs: [{ indexed: false, name: "_user", type: "address" }], name: "AddedBlackList", type: "event" },
  { anonymous: false, inputs: [{ indexed: false, name: "_user", type: "address" }], name: "RemovedBlackList", type: "event" },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "owner", type: "address" },
      { indexed: true, name: "spender", type: "address" },
      { indexed: false, name: "value", type: "uint256" },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "from", type: "address" },
      { indexed: true, name: "to", type: "address" },
      { indexed: false, name: "value", type: "uint256" },
    ],
    name: "Transfer",
    type: "event",
  },
  { anonymous: false, inputs: [], name: "Pause", type: "event" },
  { anonymous: false, inputs: [], name: "Unpause", type: "event" },
];


//Dev
// const teather = [
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "value",
//         "type": "uint256"
//       }
//     ],
//     "name": "approve",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "burn",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "initialSupply",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "constructor"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "allowance",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "needed",
//         "type": "uint256"
//       }
//     ],
//     "name": "ERC20InsufficientAllowance",
//     "type": "error"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "sender",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "balance",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "needed",
//         "type": "uint256"
//       }
//     ],
//     "name": "ERC20InsufficientBalance",
//     "type": "error"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "approver",
//         "type": "address"
//       }
//     ],
//     "name": "ERC20InvalidApprover",
//     "type": "error"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "receiver",
//         "type": "address"
//       }
//     ],
//     "name": "ERC20InvalidReceiver",
//     "type": "error"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "sender",
//         "type": "address"
//       }
//     ],
//     "name": "ERC20InvalidSender",
//     "type": "error"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//       }
//     ],
//     "name": "ERC20InvalidSpender",
//     "type": "error"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "owner",
//         "type": "address"
//       }
//     ],
//     "name": "OwnableInvalidOwner",
//     "type": "error"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "account",
//         "type": "address"
//       }
//     ],
//     "name": "OwnableUnauthorizedAccount",
//     "type": "error"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "owner",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "value",
//         "type": "uint256"
//       }
//     ],
//     "name": "Approval",
//     "type": "event"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "mint",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "previousOwner",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "newOwner",
//         "type": "address"
//       }
//     ],
//     "name": "OwnershipTransferred",
//     "type": "event"
//   },
//   {
//     "inputs": [],
//     "name": "renounceOwnership",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "to",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "value",
//         "type": "uint256"
//       }
//     ],
//     "name": "transfer",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "from",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "to",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "value",
//         "type": "uint256"
//       }
//     ],
//     "name": "Transfer",
//     "type": "event"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "from",
//         "type": "address"
//       },
//       {
//         "internalType": "address",
//         "name": "to",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "value",
//         "type": "uint256"
//       }
//     ],
//     "name": "transferFrom",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "newOwner",
//         "type": "address"
//       }
//     ],
//     "name": "transferOwnership",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "owner",
//         "type": "address"
//       },
//       {
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//       }
//     ],
//     "name": "allowance",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "account",
//         "type": "address"
//       }
//     ],
//     "name": "balanceOf",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "decimals",
//     "outputs": [
//       {
//         "internalType": "uint8",
//         "name": "",
//         "type": "uint8"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "name",
//     "outputs": [
//       {
//         "internalType": "string",
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "owner",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "symbol",
//     "outputs": [
//       {
//         "internalType": "string",
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "totalSupply",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   }
// ];

//Test Cats
const cats = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "disableTrading",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "enableTrading",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "increasedSupply",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "cap",
        "type": "uint256"
      }
    ],
    "name": "ERC20ExceededCap",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "allowance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "needed",
        "type": "uint256"
      }
    ],
    "name": "ERC20InsufficientAllowance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "needed",
        "type": "uint256"
      }
    ],
    "name": "ERC20InsufficientBalance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "approver",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidApprover",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "cap",
        "type": "uint256"
      }
    ],
    "name": "ERC20InvalidCap",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidReceiver",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidSender",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidSpender",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_presaleContract",
        "type": "address"
      }
    ],
    "name": "setPresaleContract",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "cap",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "presaleContract",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tradingEnabled",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];


export const presaleAbi: AbiItem[] = presale as AbiItem[];
export const presaleAbiEthers = presale ;

export const tetherAbi: AbiItem[] = teather as AbiItem[];
export const tetherAbiEthers = teather ;

export const catsAbi: AbiItem[] = cats as AbiItem[];
export const catsAbiEthers = cats ;
