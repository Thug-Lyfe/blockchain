
# blockchain

## Authors
- David Blum
- Marco Blum
- Alexandar Kraunsøe
- Christian Lind
- Kasper Pagh

---

References used to make our blockchain implementation:
https://www.youtube.com/watch?v=_160oMzblY8&feature=youtu.be - this is a video demo explaining how a blockchain works.
https://medium.com/@lhartikk/a-blockchain-in-200-lines-of-code-963cc1cc0e54 - this is a blog about how to write a simple blockhain in less than 200 lines.
https://github.com/lhartikk/naivechain - this is the github repo from the above blog.
https://www.youtube.com/watch?v=zVqczFZr124 - a video guide of how to make a blockchain.
https://www.youtube.com/watch?v=HneatE69814 - part 2 of making a blockchain from the above videolink.
https://github.com/SavjeeTutorials/SavjeeCoin - this is the github repo from the video guide above.
https://www.youtube.com/watch?v=baJYhYsHkLM - this is another video guide.

---

## Documentation
We use two classes one for the blockchain and one for the blocks:


```Javascript
class Blockchain {
    constructor() {
        let firstBlock = new Block(0, "05/12/2017", "first block");
        firstBlock.mineBlock();
        this.chain = [firstBlock];
    }
    getLatestBlock() {
    // this gets the last created block
    }
    addBlock(newBlock) {
    //this adds a block mined with the mineBlock1 function
    }
    addBlock2(newBlock) {
    //this adds a block mined with the mineBlock2 function
    }
    replaceChain(newChain) {
    //this is called if this instance receives a blockchain that is longer than itself
    //it broadcasts to its peers if it does replace the chain.
    }
    isBlockValid(newBlock) {
    //this is run by addBlock and addBlock2 to check if the block has a correct hash.
    };
    isChainValid() {
    //this is run by replaceChain to see if the received Blockchain is a valid Blockchain, so it does not contain bad blocks.
    }
}
```

```Javascript
class Block {
    constructor(index, timestamp, data, previousHash = '', nonce) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data
        this.previousHash = previousHash;
        this.hash = this.calculateHash()
        this.nonce = nonce || 0;
        this.timeUsed = 0;
    }
    calculateHash() {
    //this uses the 'crypto-js' npm package to make a hash from all the block parameters
    }
    mineBlock() {
    //this mines a block squentially
    this.nonce++
    //until it hits the proof of work defined, in this case the hash has to start with fac
    }
    mineBlock2() {
    //this mines a block randomly
    this.nonce = Math.random();
    //until it hits the proof of work defined, in this case the hash has to start with fac
    }
}
```



