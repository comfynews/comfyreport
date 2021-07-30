import Web3 from "web3";

export const connectWallet = async () => {
    const web3 = new Web3(Web3.givenProvider)

    if (window.ethereum) {
        try {
            return await web3.eth.requestAccounts().then((data) => {
                return {
                    status: 'Connected Account',
                    address: data[0],
                };
            });
        } catch (error) {
            return {
                address: '',
                status: 'Error: ' + error.message,
            }
        }
    } else {
        return {
            address: "",
            status: (
                <span>
                    <a target="_blank" rel='noreferrer' href={`https://metamask.io/download.html`}>
                    Please install Metamask in your browser.
                    </a>
                </span>
            )
        }
    }
}

export const getCurrentWalletConnected = async () => {
    const web3 = new Web3(Web3.givenProvider)

    if (window.ethereum) {
        try {
            const address = await web3.eth.getAccounts();
            if (address.length > 0) {
                return {
                    address: address[0],
                    status: "Connected Wallet",
                    balance: await getComfyBalance(address[0])
                };
            } else {
                return {
                    address: "",
                    status: "Please connect via MetaMask"
                };
            }
        } catch (error) {
            return {
                address: '',
                status: 'Error: ' + error.message,
            };
        }
    } else {
        return {
            address: "",
            status: (
                <span>
                    <a target="_blank" rel='noreferrer' href={`https://metamask.io/download.html`}>
                    Please install Metamask in your browser.
                    </a>
                </span>
            )
        }
    }
}

export const getComfyBalance = async (address) => {
    const web3 = new Web3(Web3.givenProvider)
    const comfyAddress = '0xc737b44cb0aa18815a1f6918eb338dee7e7e6bd7'
    let ABI = [
        {"constant":true,
            "inputs":[{"name":"_owner","type":"address"}],
            "name":"balanceOf",
            "outputs":[{"name":"","type":"uint256"}],
            "payable":false,
            "type":"function"}
    ];
    const comfy = new web3.eth.Contract(ABI, comfyAddress)
    return await comfy.methods.balanceOf(address).call().then((data) => {
        return web3.utils.fromWei(data, 'gwei')
    })
}