document.addEventListener('DOMContentLoaded', function() {
  var Calendar = FullCalendar.Calendar;
  var Draggable = FullCalendar.Draggable;

  var calendarEl = document.getElementById('calendar');
  var datePicker = document.getElementById('date-picker');

  // initialize the calendar
  // -----------------------------------------------------------------

  var calendar = new Calendar(calendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    editable: true,
    droppable: true, // this allows things to be dropped onto the calendar
    drop: function(info) {
      // is the "remove after drop" checkbox checked?
      if (checkbox.checked) {
        // if so, remove the element from the "Draggable Events" list
        info.draggedEl.parentNode.removeChild(info.draggedEl);
      }
    }
  });

  calendar.render();

  // Initialize Flatpickr date picker
  var datepicker = flatpickr(datePicker, {
    dateFormat: 'Y-m-d',
    defaultDate: new Date(),
    onChange: function(selectedDates, dateStr, instance) {
      // Do something with selected date if needed
    }
  });

  // Add Event Button
  document.getElementById('add-event').addEventListener('click', function() {
    var eventTitle = prompt('Enter event title:');
    var eventDate = datePicker.value;
    if (eventTitle && eventDate) {
      calendar.addEvent({ title: eventTitle, start: eventDate, allDay: true, color: '#ff0000' });
    } else {
      alert('Please enter both title and date.');
    }
  });

  // Delete Event Button
  document.getElementById('delete-event').addEventListener('click', function() {
    var eventDate = datePicker.value;
    var events = calendar.getEvents();
    events.forEach(function(event) {
      if (event.start.toISOString().split('T')[0] === eventDate) {
        event.remove();
      }
    });
  });

  // Modify Event Button
  document.getElementById('modify-event').addEventListener('click', function() {
    var eventName = prompt('Enter event name:');
    var eventDate = datePicker.value;
    var events = calendar.getEvents();
    events.forEach(function(event) {
      if (event.start.toISOString().split('T')[0] === eventDate && event.title === eventName) {
        var newTitle = prompt('Enter new title:');
        if (newTitle) {
          event.setProp('title', newTitle);
        }
      }
    });
  });
});
