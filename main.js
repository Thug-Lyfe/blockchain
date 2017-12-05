const SHA256 = require('crypto-js/sha256')
class Block {
    constructor(index, timestamp, data, previousHash = '', hash) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data
        this.previousHash = previousHash;
        this.hash = this.calculateHash()
        this.nonce = 0;
    }
    calculateHash() {
        return SHA256(this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash+ this.nonce).toString();
    }
    mineBlock(diff){
        while(!this.hash.startsWith("fac")){
            this.nonce++;
            this.hash = this.calculateHash();
            
        }
        console.log("Block mined: "+this.hash);
    }
}



class Blockchain {
    constructor() {
        this.chain = [new Block(0, "05/12/2017", "first block", "0")]
        this.diff = 2;
    }
    getLatestBlock() {
        return this.chain[this.chain.length - 1]
    }
    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.diff);
        this.chain.push(newBlock);
    }
    isChainValid(){
        for (let index = 1; index < this.chain.length; index++) {
            const currentBlock = this.chain[index];
            const previousBlock = this.chain[index-1];


            if(currentBlock.hash !== currentBlock.calculateHash()){
                console.log("1")
                return false
            }
            if(currentBlock.previousHash !== previousBlock.hash){
                console.log("2")
                return false
            }

            
        }
        return true
    }
}

let marcoCoins = new Blockchain();
console.log("mining 1")
marcoCoins.addBlock(new Block(1,"06/12/2017",{coins: 10}))
console.log("mining 2")
marcoCoins.addBlock(new Block(2,"07/12/2017",{coins: 40}))


console.log(JSON.stringify(marcoCoins,null,4));
console.log("valid: %s",marcoCoins.isChainValid());
marcoCoins.chain[1].data = {coins: 50};

console.log("valid: %s",marcoCoins.isChainValid());
