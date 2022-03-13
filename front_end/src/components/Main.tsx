/* eslint-disable spaced-comment */
/// <reference types="react-scripts" />

import { useEthers } from "@usedapp/core"
import { Button, makeStyles } from "@material-ui/core"
import helperConfig from "../helper-config.json"
import networkMapping from "../chain-info/deployments/map.json"
import { constants } from "ethers"
import brownieConfig from "../brownie-config.json"
import aat_logo from "../img/aat.png"
import eth_logo from "../img/eth.png"
import dai_logo from "../img/dai.png"
import { YourWallet } from "./yourWallet/YourWallet"

export type Token = {
    image: string,
    addres: string,
    name: string

}

export const Main = () => {
    //Show Tokens values from Wallets
    //Get the address of different tokens
    const { chainId } = useEthers()
    const networkName = chainId ? helperConfig[chainId] : "dev"
    const aatTokenAddress = chainId ? networkMapping[String(chainId)]["AAToken"][0] : constants.AddressZero
    const wethTokenAddress = chainId ? brownieConfig[networkName]["weth_token"] : constants.AddressZero
    const fauTokenAddress = chainId ? brownieConfig[networkName]["fau_token"] : constants.AddressZero

    const supportedTokens: Array<Token> = [
        {
            image: aat_logo,
            addres: aatTokenAddress,
            name: "AAT"
        },
        {
            image: eth_logo,
            addres: wethTokenAddress,
            name: "ETH"
        },
        {
            image: dai_logo,
            addres: fauTokenAddress,
            name: "DAI"
        }
    ]
    return (<YourWallet supportedTokens={supportedTokens} />)
}