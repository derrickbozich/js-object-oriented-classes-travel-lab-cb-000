class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year){
    dateYear = new Date(`${year}`);
    gap = parseInt((dateYear - this.startDate)/(365*24*60*60*1000));
    return gap;
  }
}
