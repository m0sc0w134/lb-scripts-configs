/// api_version=2
var script = registerScript({
    name: "VanillaFreeze",
    version: "1.0.0",
    authors: ["Ali00035"]
});
var C03 = Java.type("net.minecraft.network.play.client.C03PacketPlayer");
function unMove() {
	mc.gameSettings.keyBindForward.pressed = false;
	mc.gameSettings.keyBindBack.pressed = false;
	mc.gameSettings.keyBindLeft.pressed = false;
	mc.gameSettings.keyBindRight.pressed = false;
	mc.gameSettings.keyBindJump.pressed = false;
	mc.gameSettings.keyBindSprint.pressed = false;
}

script.registerModule({
    name: "VanillaFreeze",
    category: "Movement", 
    description: "Freeze alternative on Vanilla servers (on most anticheats, this might make you flag when you disable the module)"
}, function (module) {
    module.on("packet", function(e) {
        var packet = e.getPacket();
        if (packet instanceof C03) {
            e.cancelEvent();
        }
    });
    module.on("update", function() {
        mc.thePlayer.motionX = 0;
        mc.thePlayer.motionY = 0;
        mc.thePlayer.motionZ = 0;
        unMove();
    });
});
