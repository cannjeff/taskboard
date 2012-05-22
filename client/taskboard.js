/*
 *	JavaScript for TaskBoard
 */

var taskboard = {};

taskboard.init = function() {
	var d = [{'ticketNumber':'100', 'title':'Testing something cool', 'estimate':'1', 'status':'toDo', 'desc':'This is a description of a ticket, it can be long or short!'},
			 {'ticketNumber':'101', 'title':'Make everything better', 'estimate':'2', 'status':'toDo', 'desc':'This is a description of a ticket, it can be long or short!'},
			 {'ticketNumber':'102', 'title':'Help?', 'estimate':'1', 'status':'inProgress', 'desc':'This is a description of a ticket, it can be long or short!'},
			 {'ticketNumber':'103', 'title':'This ticket is useless', 'estimate':'13', 'status':'inProgress', 'desc':'This is a description of a ticket, it can be long or short!'},
			 {'ticketNumber':'104', 'title':'Test the flux capacitor', 'estimate':'1', 'status':'inProgress', 'desc':'This is a description of a ticket, it can be long or short!'},
			 {'ticketNumber':'105', 'title':'Build a time machine', 'estimate':'5', 'status':'inProgress', 'desc':'This is a description of a ticket, it can be long or short!'},
			 {'ticketNumber':'106', 'title':'Profit?', 'estimate':'1', 'status':'done', 'desc':'This is a description of a ticket, it can be long or short!'},
			 {'ticketNumber':'107', 'title':'Be lazy', 'estimate':'2', 'status':'done', 'desc':'This is a description of a ticket, it can be long or short!'},
			 {'ticketNumber':'108', 'title':'Literally do nothing', 'estimate':'1', 'status':'done', 'desc':'This is a description of a ticket, it can be long or short!'}];

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
		'class': 'newTicket2 doNotClone'
	});
	t.append($('<div />', { 
		html: 'Ticket #'+data.ticketNumber, 
		css: { fontWeight: 'bold', backgroundColor: 'green', width: '100%' }
	}));
	t.append('</br>'+data.title);
	t.append($('<span />', {
		html: data.estimate,
		css: { position: 'absolute', bottom: '0px', right: '0px', fontWeight: 'bold' }
	}));
	t.draggable({ snap: true });
	t.data('data', data);
	if (data.status != null)
		t.appendTo($('#'+data.status));
	else
		t.appendTo($('#newTicketPile'));
	t.tooltip({
		'text': 'Ticket #'+data.ticketNumber
			+'</br>'+'Title: '+data.title
			+'</br>'+'Status: '+toTitleCase(data.status)
			+'</br>'+'Estimate: '+data.estimate
			+'</br>'+'Description: '+data.desc,
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

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function maxZIdx() {
	var max=0;
	$('*').each(function(){
		var cur = parseInt($(this).css('zIndex'), 10);
		if (cur > max)
			max = cur;
	});
	return max;
}