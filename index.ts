import { Block } from "./block";
import { Blockchain } from "./blockchain";


const devCoin = new Blockchain();

devCoin.addBlock(new Block(9,{id:11,name : 'hafsa'},new Date(2022,8,7)))


console.log(JSON.stringify(devCoin,null,4));