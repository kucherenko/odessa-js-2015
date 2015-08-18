var Cylon = require('cylon');
Cylon.robot({
    connections: {
        edison: { adaptor: 'intel-iot'},
        sphero: {adaptor: 'sphero', port: "/dev/rfcomm0"}
    },
    devices: {
        sphero: { driver: 'sphero', connection: 'sphero' }
    },
    work: function (my) {
        var colors = ["red", "yellow", "green"],
            i = colors.length;
        every((5).second(), function () {
            my.sphero.color(colors[i]);
            i--;
            if (i === 0) {
                i = colors.length;
            }
        });
    }
});
Cylon.start();
