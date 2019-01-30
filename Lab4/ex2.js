var events = require('events');
var eventEmitter = new events.EventEmitter();

const buff = Buffer.from([0x62,0x75,0x66,0x66,0x65,0x72]);

var convert = function listener(){
        for (var i of buff){
            console.log(i);
        }
}
var done = function listener(){
    console.log("buffer converted");
}


eventEmitter.addListener("convert",convert)
eventEmitter.on("convert",done);
eventEmitter.emit("convert")