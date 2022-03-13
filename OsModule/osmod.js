const os = require("os");
//it gives you info about your sysytem i.e 64 bit.
console.log(os.arch());
//gives you info about free memory in gb by dividing it.
console.log(os.freemem() / 1024 / 1024 / 1024);
//Gives you info about total memory.
console.log(os.totalmem() / 1024 / 1024 / 1024);

//gives you the name of host
console.log(os.hostname());
//get priority
console.log(os.getPriority());
//platform
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());
