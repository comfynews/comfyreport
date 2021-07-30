import {useEffect, useState} from "react";
import {connectWallet, getCurrentWalletConnected} from "../utils/connect";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Icon} from "@material-ui/core";
import comfy from '../assets/comfy.png'

const useStyles = makeStyles((theme) => ({
    walletButton: {
        background: 'linear-gradient(to right, #202025, #231e24 0%)',
        borderRadius: 15,
        fontFamily: 'ap_display_reg',
        fontWeight: 12,
        marginTop: -4,
        marginLeft: 12,
        marginRight: -12,
        letterSpacing: 1.25,
        '&:hover': {
            backgroundColor: '#89435a',
            opacity: 0.8
        }
    }
}));

const WalletButton = () => {

    const classes = useStyles();
    const [wallet, setWallet] = useState("")
    const [status, setStatus] = useState("")
    const [balance, setBalance] = useState(0)

    const comfyIcon = (
        <Icon style={{margin: '-4px 4px 0 4px'}}>
            <img alt='comfy_mascot' src={comfy} style={{width: 20, height: 20}}/>
        </Icon>
    )

    const handleConnectWallet = async () => {
        const walletResponse = await connectWallet()
        setWallet(walletResponse.address)
        setStatus(walletResponse.status)
    };

    const walletListener = () => {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", async (accounts) => {
                if (accounts.length > 0) {
                    setWallet(accounts[0])
                    setStatus('New Wallet detected')
                    console.log(status)
                } else {
                    setWallet("")
                    setStatus("Connect via MetaMask")
                }
            });
        } else {
            setStatus("Please install MetaMask to continue")
        }
    }

    useEffect( () => {

        async function walletInfo() {
            const {address, status, balance} = await getCurrentWalletConnected();
            setWallet(address)
            setStatus(status)
            setBalance(balance)
        }

        walletInfo().then(() => {
            return null
        })
        walletListener()
    })

    return (
        <div>
            <Button className={classes.walletButton}
                    onClick={handleConnectWallet}
                    startIcon={comfyIcon}>
                {wallet.length > 0 ? (
                    String(wallet).substring(0, 6) +
                    "...") :
                    (<span>Connect</span>
                    )}
            </Button>
            {balance}
        </div>
    )
}

export default WalletButton;
