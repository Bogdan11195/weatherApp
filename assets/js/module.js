export const weekDayNames = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П'ятниця",
  "Субота"
];

export const monthNames = [
  "Січ",
  "Лют",
  "Бер",
  "Кві",
  "Тра",
  "Чер",
  "Лип",
  "Сер",
  "Вер",
  "Жов",
  "Лис",
  "Гру"
];

/**
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Date String. formate: "Sunday 10, Jan"
 */
export const getDate = function (dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()];

  return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

export const getTime = function (timeUnix, timezone) {
  // Створюємо об'єкт Date з часу у форматі Unix
  let date = new Date(timeUnix * 1000);
  // Застосовуємо часовий пояс
  date.setHours(date.getHours() + timezone);
  // Отримуємо години та хвилини
  let hours = date.getHours();
  let minutes = date.getMinutes();
  // Додаємо нулі перед однозначними числами
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  // Повертаємо рядок у форматі ЧЧ:ММ
  return hours + ":" + minutes;
};


/**
 * @param {number} mps Метр за секунду
 * @returns {number} Кілометр за годину
 */
export const mps_to_kmh = mps => {
  const mph = mps * 3600;
  return mph / 1000;
}

export const aqiText = {
  1: {
    level: "Добре",
    message: "Якість повітря вважається задовільною, а забруднення повітря становить незначний ризик або взагалі не становить ризику."
  },
  2: {
    level: "Задовільно",
    message: "Якість повітря є прийнятною, проте для деяких забруднювачів може існувати помірне занепокоєння щодо здоров'я дуже невеликої кількості людей, які є надзвичайно чутливими до забруднення повітря."
  },
  3: {
    level: "Помірно",
    message: "Члени чутливих груп можуть відчувати вплив на здоров'я. Широкий загал не має бути під впливом."
  },
  4: {
    level: "Погано",
    message: "Всі можуть почати відчувати вплив на здоров'я; члени чутливих груп можуть відчувати більш серйозний вплив на здоров'я."
  },
  5: {
    level: "Дуже погано",
    message: "Попередження про стан надзвичайної ситуації. Вся населення більш ймовірно буде під впливом."
  }
}