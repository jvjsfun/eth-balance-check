import { ethers } from "ethers";

class UserWallet {
    provider = new ethers.providers.Web3Provider(((window as any).ethereum), 'any')

    handleConnect = async () => {
        await this.provider.send("eth_requestAccounts", []);
        const signer = this.provider.getSigner();
        let address = await signer.getAddress()
        return address
    }

    validateAddress = async (adddres: string) => {
        return await ethers.utils.getAddress(adddres)
    }

    getBalance = async (wallet: string) => {
        let balance: ethers.BigNumberish = await this.provider.getBalance(wallet);
        balance = ethers.utils.formatEther(balance);
        return Number.parseFloat(balance).toFixed(2)
    }

    getWallet = async (wallet: string) => {
        this.validateAddress(wallet).then(async (data) => {
            return data
        }).catch(err => {
            return `Invalid wallet address`
        })
    }

}

export const Wallet = new UserWallet()