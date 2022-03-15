var script = registerScript({
    name: 'HitDelayFix',
    version: '1.0.0',
    authors: ['nvinci']
});
script.registerModule({
    name: 'HitDelayFix',
    category: 'Fun', 
    description: 'HitDelayFix mod port'

}, function (module) {
    module.on('update', function() {
        if(mc.leftClickCounter > 0) mc.leftClickCounter = 0;
    });
});
