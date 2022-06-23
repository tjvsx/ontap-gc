import OnTap from '../contracts/ontap.json'
import { useEthers } from "@usedapp/core";
import networkMapping from "../contracts/deployments/map.json";
import { utils, constants } from "ethers";
import { Contract } from "@ethersproject/contracts";


export function useGemContract() {
  const { chainId } = useEthers();
  const { abi } = OnTap;
  const ontapAddress = chainId ? networkMapping[String(chainId)]["OnTap"][0] : constants.AddressZero;
  const ontapInterface = new utils.Interface(abi);
  const ontapContract = new Contract(
    ontapAddress,
    ontapInterface
  )
  
  return ontapContract;
}