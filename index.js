class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year){
    dateYear = new Date(`${year}`);

    return dateYear - this.startDate.getFullYear();
  }
}
