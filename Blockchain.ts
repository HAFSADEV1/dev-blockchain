import { Block } from "./block";


export class Blockchain{

    chain : Array<Block>

    constructor(){
        this.chain = [this.initBlock()];
    }

    initBlock(){
        return new Block(1,null,new Date(2022,5,7),'0');
    }

    addBlock(block : Block){
        block.previous = this.chain[this.chain.length -1].hash;
        block.hash =block.generateHash();
        this.chain.push(block);
    }
}