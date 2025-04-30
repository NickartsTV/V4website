import { createThirdwebClient } from "thirdweb";
import { sepolia,ethereum} from "thirdweb/chains";
export const projectId = "b5957ab28de8415af8b4025ba32366b0";
export const clientId = "086d214092cf8bc5cbe4bc3967d070d1";

export interface wallet {
    connected: boolean;
    wallet: string | undefined;
    activeChain?: number;
} 
export const walletInitialValues = {
    connected: false,
    wallet: ""
}

export const client = createThirdwebClient({
    clientId: clientId, 
  });

//Dev
// export const desiredChain : number = 11155111;
// export const desiredChainName = sepolia;
// export const sepoliaRpc: string = 'https://sepolia.infura.io/v3/d4e07a9d6a764765a457f60df16e1129'

//Prod
export const desiredChain : number = 1;
export const desiredChainName = ethereum;
export const sepoliaRpc: string = 'https://mainnet.infura.io/v3/4271c7378d3d4aba865096f42cea87f6'


export const approveAmt : string = '115792089237316195423570985008687907853269984665640564039457584007913129639935'

export const apiBaseUrl: string = 'https://justcats.tv/api/1.0';

  