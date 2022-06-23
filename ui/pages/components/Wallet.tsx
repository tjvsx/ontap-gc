import { useEthers } from '@usedapp/core'

export const Wallet = () => {
  const { account, activateBrowserWallet } = useEthers();

  const isConnected = account !== undefined
  return (
    <div>
      {isConnected ? 
        <div>{account}</div> :
        <button onClick={() => activateBrowserWallet()}>Connect</button>
      }
    </div>
  )
}

