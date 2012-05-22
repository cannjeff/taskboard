/*
 *	JavaScript for TaskBoard
 */

var taskboard = {};

taskboard.init = function() {
	var d = [{'ticketNumber':'100', 'desc':'Testing something cool', 'estimate':'1', 'status':'toDo'},
			 {'ticketNumber':'101', 'desc':'Make everything better', 'estimate':'2', 'status':'toDo'},
			 {'ticketNumber':'102', 'desc':'Help?', 'estimate':'1', 'status':'inProgress'},
			 {'ticketNumber':'103', 'desc':'This ticket is useless', 'estimate':'13', 'status':'inProgress'},
			 {'ticketNumber':'104', 'desc':'Test the flux capacitor', 'estimate':'1', 'status':'inProgress'},
			 {'ticketNumber':'105', 'desc':'Build a time machine', 'estimate':'5', 'status':'inProgress'},
			 {'ticketNumber':'106', 'desc':'Profit?', 'estimate':'1', 'status':'done'},
			 {'ticketNumber':'107', 'desc':'Be lazy', 'estimate':'2', 'status':'done'},
			 {'ticketNumber':'108', 'desc':'Literally do nothing', 'estimate':'1', 'status':'done'}];

	for (var i=0; i<d.length; i++) {
		taskboard.createTicket(d[i]);
	}

	$('#newTicketPile').hide();

	$('.newTicket').draggable({
		snap: true,
		helper: 'clone'
	});

	$('#toDo').droppable({
		drop: function(event, ui) {
			console.log('Dropped in To Do');
			ui.helper.data('data').status = "toDo";
			/*if (ui.helper.hasClass('doNotClone')) return;
			// Clone the dragging object so that the position works correctly
			if (!ui.helper.hasClass('dropped')) {
	            ui.helper.addClass('dropped');
	            // Clone the dragging object so that the position works correctly
	            var newMod = $(ui.helper).clone();
	            $(this).append(newMod);
	            newMod.draggable({
	            	snap: true
	            });
	            newMod.click(function() {
	            	$(this).css({ 'zIndex': maxZIdx() });
					console.log($(this).css('zIndex'));
	            });
        	}*/
		}
	});
	$('#inProgress').droppable({
		drop: function(event, ui) {
			console.log('Dropped in In Progress');
			ui.helper.data('data').status = "inProgress";
		}
	});
	$('#done').droppable({
		drop: function(event, ui) {
			console.log('Dropped in Done');
			ui.helper.data('data').status = "done";
		}
	});
};

taskboard.createTicket = function(data) {
	var t = $('<div />', {
		id: 'ticket_'+data.ticketNumber,
		html: '<b>Ticket #'+data.ticketNumber+'</b></br>'+data.desc,
		'class': 'newTicket2 doNotClone'
	});
	t.append($('<span />', {
		html: data.estimate,
		css: {position: 'absolute', bottom: '0px', right: '0px', fontWeight: 'bold'}
	}));
	t.draggable({ snap: true });
	t.data('data', data);
	if (data.status != null)
		t.appendTo($('#'+data.status));
	else
		t.appendTo($('#newTicketPile'));
	t.tooltip({
		'text': 'Ticket #'+data.ticketNumber
			+'</br>'+'Status: '+data.status
			+'</br>'+'Estimate: '+data.estimate
			+'</br>'+'More Cool Info: You could put information about the ticket here, or possible just cool facts about cats or something. It\'s really up to you!',
		'textStyling': {
			color: 'white',
			backgroundColor: 'black',
			opacity: '0.5',
			fontSize: '13px',
			padding:  '5px',
			width: '200px',
			wordWrap: 'break-word'
		}
	});
	return t;
};

function maxZIdx() {
	var max=0;
	$('*').each(function(){
		var cur = parseInt($(this).css('zIndex'), 10);
		if (cur > max)
			max = cur;
	});
	return max;
}