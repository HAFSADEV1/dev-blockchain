import sha256 from "crypto-js/sha256";


export class Block {
    id :number;
    data : any;
    timestamp : any;
    previous : string;
    hash :string;

    constructor(id :number,data :any,timestamp :Date,previous :string = 'init'){
        this.id = id;
        this.data = data;
        this.timestamp = timestamp;
        this.previous = previous;
        this.hash = this.generateHash();
    }

    generateHash(){
       return sha256(this.id + this.timestamp + this.previous + this.data + JSON.stringify(this.data)).toString();
    }
}

