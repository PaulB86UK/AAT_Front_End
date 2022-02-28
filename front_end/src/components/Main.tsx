import { useEthers } from "@usedapp/core"
import { Button, makeStyles } from "@material-ui/core"
import helperConfig from "../helper-config.json"
export const Main = () => {
    //Show Tokens values from Wallets
    //Get the address of different tokens
    const { chainId } = useEthers()
    const networkName = chainId ? helperConfig[chainId] : "dev"
    const aatTokenAddress = 
    return (<div>Hi!</div>)
}