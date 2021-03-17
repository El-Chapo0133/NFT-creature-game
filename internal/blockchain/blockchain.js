

class Block {
    constructor(id, data, timestamp, hash, previousHash) {
        this.id = id;
        this.data = data;
        this.timeStamp = timestamp;
        this.hash = hash;
        this.previousHash = previousHash;
    }
}

class BlockChain {
    constructor() {
        this.chain = [];
    }
}

module.exports = BlockChain;