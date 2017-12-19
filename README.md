
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
```Javascript
let generateBlockChain = function (newChain) {
// this is used to make json object received from the peer to peer into a blockchain
}
let initHttpServer = function () {
    app.get('/blocks', function (req, res) {
    //this sends the blockchain from this instance
    });
    app.post('/mineBlock/:type', function (req, res) {
    //this starts the mining process,
    //type is either 1 for sequential mining or eveything else is for random mining
    });
    app.get('/peers', function (req, res) {
    //this returns how many peers that are connected
    });
    app.post('/addPeer', function (req, res) {
    this adds a peer in the form of
    {"peer":"ws://node2:6001"} 
    //this is only in case its on the local network, another peer can also be added.
    });
};

let P2PServer = function () {
//this initializes the peer to beer network
}

let initConnection = function (conn) {
//this initializes a connection
};

let initMessageHandler = function (conn) {
 // this initializes a handler for messages, so it can broadcast, latest block, all blocks or receives blocks
};

let initErrorHandler = function (conn) {
 //this handles peer to peer errors, such as peers closing or returning in error
};

let connectToPeers = function (newPeers) {
   //this connets to peers or returns "connection failed" on error
};
let handleBlockchainResponse = function (message) {
   //this takes a message and makes it into a json array of blocks, and does one of 4 things:
   //1. if the latest block is a valid block it is added to the chain
   //2. if the message only has one block it queuries the peers for their blockchain
   //3. the message has more blocks than this instance, it is then first validated and replaced if the validation is true.
   //4. do nothing
};
let queryChainLengthMsg = function () {
    //queries the latest block
}
let queryAllMsg = function () {
    //queries the entire blockchain
}
let responseChainMsg = function () {
    //this sends the blockchain
}
let responseLatestMsg = function () {
    //this sends the latest block
};
let write = function (ws, message) {
    //this sends the message
}
let broadcast = function (message) {
    //this broadcasts the message to all peers.
}
```isBlockValid(newBlock) {
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



