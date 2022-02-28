import { useEthers } from "@usedapp/core"
import { Button, makeStyles } from "@material-ui/core"
import helperConfig from "../helper-config.json"
import networkMapping from "../chain-info/deployments/map.json"
import { constants } from "ethers"
import brownieConfig from "../brownie-config.json"
export const Main = () => {
    //Show Tokens values from Wallets
    //Get the address of different tokens
    const { chainId } = useEthers()
    const networkName = chainId ? helperConfig[chainId] : "dev"
    const aatTokenAddress = chainId ? networkMapping[String(chainId)]["AAToken"][0] : constants.AddressZero
    const wethTokenAddress = chainId ? brownieConfig[networkName]["weth_token"] : constants.AddressZero
    const fauTokenAddress = chainId ? brownieConfig[networkName]["fau_token"] : constants.AddressZero
    return (<div>Aloha, Imma Main!</div>)
}