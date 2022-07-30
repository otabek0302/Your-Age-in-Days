//Challange 1: Your Age in Day;
function ageInDays() {
     let birthday = prompt('When you were born... My Friend !')
     let curDays = new Date().getFullYear();
     let ageInDay = (curDays - birthday) * 365;

     let  day = document.createElement('span'),
          hour = document.createElement('span'),
          minute = document.createElement('span'),
          second = document.createElement('span');
          
          day.classList.add('day'),
          hour.classList.add('hour'),
          minute.classList.add('minute'),
          second.classList.add('second');
     
          day.innerText = ` ${ageInDay}`;
          hour.innerText = ` ${new Date().getHours()}`;
          minute.innerText = ` ${new Date().getMinutes()}`;
          second.innerText = ` ${new Date().getSeconds()}`;

     
          document.querySelector('.days').append(day);
          document.querySelector('.hours').append(hour);
          document.querySelector('.minutes').append(minute);
          document.querySelector('.seconds').append(second);
          updateTimer(day, hour, minute, second)
}     

// Таймер

    function updateTimer(days, hours, minutes, seconds) {
          let day = +days.innerHTML;
          let hour = +hours.innerHTML;
          let minute = +minutes.innerHTML;
          let second = +seconds.innerHTML;
          let timer = setInterval(() => {
            seconds.innerHTML = ` ${second} `
            minutes.innerHTML = ` ${minute}`
            hours.innerHTML = ` ${hour}`
            days.innerHTML = ` ${day}`
            second += 1
               if (second === 60) {
                    second = 1
                    minute += 1
                    if (minute === 60) {
                         minute = 1
                         hour += 1
                         if (hour === 24) {
                         hour = 0
                         day += 1
                         if (day === 100000) {
                              clearInterval(timer)
                         }
                         }
                    }
            }
        }, 1000);
    }

