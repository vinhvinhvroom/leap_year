class Year {
  constructor(year){
    this.year = year
  }

  isLeapYear(){
    if (this.year % 4 != 0) {
      return false
    } else if (this.year % 100 != 0){
      return true
    } else if (this.year % 400 != 0){
      return false
    } else {
      return true
    }
  }

  leapYearList(){
    for (let i = this.year; i <= this.year + 100 ; i++){
      if (i % 100 != 0 && i % 4 === 0 || i % 400 === 0){
        console.log(i)
      }
    }
  }
}


console.log(new Year(2000).leapYearList())
