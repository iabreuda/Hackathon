function checkboxToString( name, glue ) {
    if ( typeof glue === "undefined" ) {
        glue = ",";
    }
    var arr = [];
    $('input[name="' + name + '"]:checked').each( function ( y,x ) {
     arr.push( $(x).val() ) ;
    });
    return arr.join(glue);
};