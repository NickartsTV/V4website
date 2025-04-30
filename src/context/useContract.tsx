import { createContext, useContext, useEffect, useMemo, useState } from "react";
// import { useSigner} from "@thirdweb-dev/react";
import { useActiveAccount, useActiveWalletChain } from "thirdweb/react";
import { ethers5Adapter } from "thirdweb/adapters/ethers5";

import { ethers } from "ethers";
import { desiredChain, sepoliaRpc ,client, desiredChainName } from "@/constants/wallet";
import { presaleContractAddress, presaleAbiEthers, presaleAbi, tetherAbi, tetherContractAddress, tetherAbiEthers, catsContractAddress, catsAbiEthers, catsAbi, } from "@/constants/contracts";
import Web3 from "web3";

const ContractsContext = createContext(null)

export const useContract: any = () =>  useContext(ContractsContext)
const ContractsContextProvider = ({children}) => {

   const account = useActiveAccount();           
   const chainId= useActiveWalletChain();     
   const wallet =account?.address;

    const [presaleContractInstanceEthers, setPresaleContractInstanceEthers] = useState<ethers.Contract>(null)
    const [tetherContractInstanceEthers, setTetherContractInstanceEthers] = useState<ethers.Contract>(null)
    const [catsContractInstanceEthers, setCatsContractInstanceEthers] = useState<ethers.Contract>(null)

    const web3Obj = useMemo(() => new Web3(sepoliaRpc) ,[])
    const presaleContractInstance = useMemo(()=>{
        return new web3Obj.eth.Contract(presaleAbi, presaleContractAddress);
    },[web3Obj])

    const tetherContractInstance = useMemo(()=>{
        return new web3Obj.eth.Contract(tetherAbi, tetherContractAddress);
    },[web3Obj])

    const catsContractInstance = useMemo(()=>{
        return new web3Obj.eth.Contract(catsAbi, catsContractAddress);
    },[web3Obj])

    useEffect(() => {
        const setupContracts = async () => {
          if (wallet && chainId?.id === desiredChain && account) {
            try {
              const signer = await ethers5Adapter.signer.toEthers({
                client,
                chain: desiredChainName,
                account,
              });
      
              const presaleContract = new ethers.Contract(presaleContractAddress, presaleAbiEthers, signer);
              setPresaleContractInstanceEthers(presaleContract);
      
              const tetherContract = new ethers.Contract(tetherContractAddress, tetherAbiEthers, signer);
              setTetherContractInstanceEthers(tetherContract);
      
              const catsContract = new ethers.Contract(catsContractAddress, catsAbiEthers, signer);
              setCatsContractInstanceEthers(catsContract);
            } catch (err) {
              console.error("Error setting up contracts", err);
              setPresaleContractInstanceEthers(null);
              setTetherContractInstanceEthers(null);
              setCatsContractInstanceEthers(null);
            }
          } else {
            setPresaleContractInstanceEthers(null);
            setTetherContractInstanceEthers(null);
            setCatsContractInstanceEthers(null);
          }
        };
      
        setupContracts();
      }, [chainId, wallet, account]);
      

    return(
        <ContractsContext.Provider value={{
            presaleContractInstanceEthers,
            tetherContractInstanceEthers,
            catsContractInstanceEthers,
            presaleContractInstance,
            tetherContractInstance, 
            catsContractInstance,
            web3Obj
        }}>
            {children}
        </ContractsContext.Provider>
    )
}
export default ContractsContextProvider;