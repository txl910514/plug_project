/**
 * Created by root on 27/09/16.
 */
;
var ZERO_FUNC={
  ready_init:function(){
    ZeroClipboard.config( { swfPath: "/ZeroClipboard/swf/ZeroClipboard.swf" } );
    var client=new ZeroClipboard($("#copy-button"));
    client.on( "ready", function( readyEvent ) {
      // alert( "ZeroClipboard SWF is ready!" );

      client.on( 'copy', function(event) {
        event.clipboardData.setData('text/plain', $('#copy_input').val());
      } );
      client.on( "aftercopy", function( event ) {
        // `this` === `client`
        // `event.target` === the element that was clicked
/*        event.target.style.display = "none";*/
        alert("Copied text to clipboard: " + event.data["text/plain"] );
      } );
      client.on( 'error', function(event) {
        // console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
        ZeroClipboard.destroy();
      } );
    } );
  },
};

$(function(){
 ZERO_FUNC.ready_init();
})
;