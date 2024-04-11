document.addEventListener('DOMContentLoaded', function() {
  var Calendar = FullCalendar.Calendar;
  var Draggable = FullCalendar.Draggable;
  var calendarEl = document.getElementById('calendar');
  var datePicker = document.getElementById('date-picker');
  var calendar = new Calendar(calendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    editable: true,
    droppable: true,
    drop: function(info) {
      if (checkbox.checked) {
        info.draggedEl.parentNode.removeChild(info.draggedEl);
      }
    }
  });
  calendar.render();
  var datepicker = flatpickr(datePicker, {
    dateFormat: 'Y-m-d',
    defaultDate: new Date(),
    onChange: function(selectedDates, dateStr, instance) {
      //Do something with selected date if needed
    }
  });

  document.getElementById('add-event').addEventListener('click', function() {
    var eventDate = prompt('Enter event date to add (Y-m-d):');
    var eventTitle = prompt('Enter event title:');
    if (eventTitle && eventDate) {
      calendar.addEvent({ title: eventTitle, start: eventDate, allDay: true, color: '#ff0000' });
    } else {
      alert('Please enter both title and date.');
    }
  });
  
  document.getElementById('delete-event').addEventListener('click', function() {
    var eventDate = prompt('Enter event date to delete (Y-m-d):');
    var eventTitle = prompt('Enter event title:');
    var events = calendar.getEvents();
    events.forEach(function(event) {
      var date = event.start;
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();

      if (month < 10) month = '0' + month;
      if (day < 10) day = '0' + day;

      var eventDateStr = year + '-' + month + '-' + day;

      if (eventDateStr === eventDate && event.title === eventTitle) {
        event.remove();
      }
    });
  });

  document.getElementById('modify-event').addEventListener('click', function() {
    var eventDate = prompt('Enter event date to modify (Y-m-d):');
    var eventName = prompt('Enter event name:');
    var events = calendar.getEvents();
    events.forEach(function(event) {
      var date = event.start;
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();

      if (month < 10) month = '0' + month;
      if (day < 10) day = '0' + day;

      var eventDateStr = year + '-' + month + '-' + day;
      if ( event.title === eventName&&eventDateStr === eventDate) {
        var newTitle = prompt('Enter new title:');
        if (newTitle) {
          event.setProp('title', newTitle);
        }
      }
    });
  });

  document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    var darkModeEnabled = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', darkModeEnabled ? 'enabled' : 'disabled');
    this.textContent = darkModeEnabled ? 'Light Mode' : 'Dark Mode';
  });

  var darkMode = localStorage.getItem('darkMode');
  var darkModeToggle = document.getElementById('dark-mode-toggle');
  if (darkMode === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Light Mode';
  } else {
    darkModeToggle.textContent = 'Dark Mode';
  }
});