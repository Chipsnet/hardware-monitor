var os = require('os-utils');
var osu = require("node-os-utils");
var cpu = osu.cpu;

var count = cpu.count(); // 8

const usage = () => {
    cpu.usage().then((cpuPercentage) => {
        console.log({
            "CPU Usage": cpuPercentage,
            "RAM Usage": 100 - os.freememPercentage() * 100
        });
    });
};

setInterval(usage, 1000);
