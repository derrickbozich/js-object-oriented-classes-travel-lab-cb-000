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

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  let eastWest = ['1st Avenue','2nd Avenue', '3rd Avenue',
  'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

  blocksTravelled(){
    let vertical;
    let horizontal;
    if (this.beginningLocation.vertical - this.endingLocation.vertical
  }


}
