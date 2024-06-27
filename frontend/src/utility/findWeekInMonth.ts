export default function findWeekInMonth(date:Date){
    // const totalDay = monthDays({month: Number(formattedDate.slice(5,6)), year: Number(formattedDate.slice(0,3))})
    const currentWeekDay = date.getDay()
    let firstWeekDay = currentWeekDay
    let iterateCurrentDay = date.getDate()
    let currentDay = date.getDate()
    let daysInFirstWeek
    while (iterateCurrentDay >1){
        firstWeekDay--
        iterateCurrentDay --
        if(firstWeekDay <0){
            firstWeekDay = 6
        }
    }
    if(firstWeekDay === 0) daysInFirstWeek = 1
    else daysInFirstWeek = 6 - firstWeekDay +2
    console.log("daysinfirstWeek:",daysInFirstWeek)
    if (currentDay <= daysInFirstWeek){
        const currentWeek = 1
        return currentWeek
    }
    else{
        currentDay -= daysInFirstWeek
        let currentWeek = 1
        currentWeek += Math.floor(currentDay/7)+1
        return currentWeek
    }
}
