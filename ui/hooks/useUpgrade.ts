import Upgrade from '../contracts/upgrade.json'
import { useCall } from "@usedapp/core";
import { utils, BigNumber } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { Falsy } from "@usedapp/core/dist/esm/src/model/types";

export function useUpgrade(upgradeAddress: string): BigNumber | Falsy {
  const upgradeInterface = new utils.Interface(Upgrade.abi);
  const upgradeContract = new Contract(upgradeAddress, upgradeInterface)

  console.log('asdf address:', upgradeAddress)
  console.log('asdf iface:', upgradeInterface)
  console.log('asdf contract:', upgradeContract)
  const { value, error } = useCall(upgradeAddress && {
    contract: upgradeContract,
    method: 'owner',
    args: []
  }) ?? {};
  if(error) {
    console.error('asdf', error)
    return undefined
  }
  console.log('asdf', value)
  return value?.[0]
}