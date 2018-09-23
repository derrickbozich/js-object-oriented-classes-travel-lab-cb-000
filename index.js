class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(98,1);
  }
  yearsExperienceFromBeginningOf(year){
    dateYear = new Date(`${year}`)

    return year - this.startDate.getFullYear();
  }
}
