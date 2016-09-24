/*global $*/

$.getScript( "../scenes/node1.js" );
$.getScript( "../node2c1.js" );
$.getScript( "../node2c2.js" );

$.when(
        $.getScript( "../scenes/node1.js" ),
        $.getScript( "../node2c1.js" ),
        $.getScript( "../node2c2.js" ),
        $.Deferred(function( deferred ){
            $( deferred.resolve );
        })
    ).done(function(){
    
        console.log("Scenes Loaded");
    
    });

$.getMultiScripts = function(arr, path) {
    var _arr = $.map(arr, function(scr) {
        return $.getScript( (path||"") + scr );
    });

    _arr.push($.Deferred(function( deferred ){
        $( deferred.resolve );
    }));

    return $.when.apply($, _arr);
}

var script_arr = [
    'node1.js', 
    'node2c1.js', 
    'node2c2.js'
];

$.getMultiScripts(script_arr, '../').done(function() {
    console.log("Scene Scripts Loaded");
});