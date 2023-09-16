import { useMetaMask } from '~/hooks/useMetaMask'
import { formatChainAsNum } from '~/utils'
import styles from './Display.module.css'
import { Link } from "react-router-dom"

export const Display = () => {

  const { wallet } = useMetaMask()

  return (
    <div className={styles.display}>
      {wallet.accounts.length > 0 &&
        <>
          <div>Wallet Accounts: {wallet.accounts[0]}</div>
          <div>Wallet Balance: {wallet.balance}</div>
          <div>Hex ChainId: {wallet.chainId}</div>
          <div>Numeric ChainId: {formatChainAsNum(wallet.chainId)}</div>
        </>
      }
      <Link to="/test">Go to testpage</Link>
    </div>
  )
}