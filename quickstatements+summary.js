QuickStatements.run = function ( in_background ) {
    var me = this ;
    if ( me.run_state.running ) return ; // Already running
    if ( typeof me.run_state.batch_watcher != 'undefined' ) clearInterval ( me.run_state.batch_watcher ) ;
    me.updateCommandsSummary() ;
    if ( in_background ) {
        me.runInBackground () ;
		// alert ( "Not implemented yet" ) ;
        return ;
    }
    me.run_state = {
        running : true ,
        last_item : '' ,
        commands : { pending:0 , done:0 }
    }
    $('#run_status').text ( '' ) ;
    $('#run_status_wrapper').show() ;
    $.each ( me.data.commands , function ( num , cmd ) {
        var s = cmd.status ;
        if ( typeof s == 'undefined' || s == '' ) s = 'pending' ;
        else {
            if ( s != 'done' ) { // Reset previous errors
                cmd.status = '' ;
                cmd.message = '' ;
				// var tabs = me.getCommandRowTabs ( cmdnum , cmd , dt ) ; // TODO visual update
				// dt.row(cmdnum).data(tabs).draw() ;
            }
        }
        if ( typeof me.run_state.commands[s] == 'undefined' ) me.run_state.commands[s] = 0 ;
        me.run_state.commands[s]++ ;
    } ) ;
    $('#stop_buttons button').prop ( 'disabled' , false ) ;
    $('#run_buttons button').prop ( 'disabled' , true ) ;
    $('#stop_buttons').show() ;
    if ( in_background ) {
		// alert ( "Not implemented yet" ) ;
    } else {
        me.runNextCommand() ;
    }
}

QuickStatements.updateCommandsSummary = function () {
    var me = this ;
    var summary = $('#summary').val();
    $.each( me.data.commands , function ( num, cmd ) {
        cmd.summary = summary;
    } ) ;
}

$('#run').off('click')
$('#run').click ( function () { QuickStatements.run ( false ) ; return false } )

$('#logged_in_actions').prepend($(`
<span id='summary_input'>
<label for='summary'>Edit summary:</label>
<tt>#quickstatements;</tt>
<input type='text' id='summary' placeholder='fixing things' size='75'></input>
</span>
`))
