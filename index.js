class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year){
    let dateYear = new Date(`${year}`);
    let gap = parseInt((dateYear - this.startDate)/(365*24*60*60*1000));
    return gap;
  }

}
