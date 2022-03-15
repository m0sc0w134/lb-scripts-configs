var script = registerScript({
    name: "LagDetector",
    version: "1.0",
    authors: ["ys"]
});
var plus;
script.registerModule({
    name: "LagDetector",
    description: "Detect flags",
    category: "Misc",
    settings: {
        TooFarCheck: Setting.boolean({
            name: "TooFarCheck",
            default: true
        }),
        TooFarLengh: Setting.integer({
            name: "TooFarLengh",
            max: 100,
            min: 1,
            default: 8
        }),
        TooFarMessage: Setting.boolean({
            name: "TooFarMessage",
            default: false
        })
    }
}, function (module) {
    module.on("packet", function (event) {
        var packet = event.getPacket();
        if (packet instanceof S08) {
            if (module.settings.TooFarCheck.get()) {
                if (get3DPythagorean(packet.getX() - mc.thePlayer.posX, packet.getY() - mc.thePlayer.posY, packet.getZ() - mc.thePlayer.posZ) >= module.settings.TooFarLengh.get()) {
                    if (module.settings.TooFarMessage.get()) {
                        Chat.print("[ §cDEBUG §r] §bToo far.");
                    }
                } else {
                    Chat.print("[ §cDEBUG §r] §4FLAG.");
                }
            } else {
                Chat.print("[ §cDEBUG §r] §4FLAG.");
            }
        }
    });
});
var S08 = Java.type('net.minecraft.network.play.server.S08PacketPlayerPosLook');

function get3DPythagorean(x, y, z) {
    return Math.sqrt(Math.pow(Math.sqrt(Math.pow(x, 2) + Math.pow(z, 2)), 2) + Math.pow(y, 2));
}
