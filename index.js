class Event {
  constructor(date, title) {
    this.date = date;
    this.title = title;
  }
}
class Calendar {
  constructor() {
    this.events = [];
  }

  addEvent(date, title) {
    const event = new Event(date, title);
    this.events.push(event);

    this.render();
  }

  deleteEvent(index) {
    this.events.slice(index, 1);
    this.render();
  }
  render() {
    const calendarNode = document.querySelector("#calendar");
    calendarNode.innerHTML = ``;
    Date.prototype.daysInMonth = function () {
      return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
    };
    const days = new Date().daysInMonth();

    for (let i = 1; i <= days; i++) {
      calendarNode.innerHTML += `<div class="day">
          <h3 class="day__num">${i}</h3>
          <span class="day__event"></span>
          <button class="day__btn-events">Удалить</button>
          <button class="day__events">Добавить Событие</button>
        </div>`;
    }
    const addEventBtnNone = document.querySelectorAll(".day__events");
    addEventBtnNone.forEach(element, (index) => {
      element.addEventListener("click", (e) => {
        this.addEvent(index);
      });
    });
    const deleteEventBtnNode = document.querySelectorAll(".day__btn-events");
    deleteEventBtnNode.forEach(element, (index) => {
      element.addEventListener("click", (e) => {
        this.deleteEvent(index);
      });
    });
  }
}

const calendar = new Calendar();

calendar.render();
