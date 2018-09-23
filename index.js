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


  blocksTravelled(){
    let eastWest = ['1st Avenue','2nd Avenue', '3rd Avenue','Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

    let vertical;
    let horizontal;

    let beginningNorthSouth = this.beginningLocation.vertical;
    let endingNorthSouth = this.endingLocation.vertical;

    let beginningEastWest = eastWest.indexOf(this.beginningLocation.horizontal);
    let endingEastWest = eastWest.indexOf(this.endingLocation.horizontal);

    if (endingNorthSouth - beginningNorthSouth > 0){
      vertical = endingNorthSouth - beginningNorthSouth;
    } else {
      vertical = beginningNorthSouth - endingNorthSouth ;
    }

    if (endingEastWest - beginningEastWest > 0){
      horizontal = endingEastWest - beginningEastWest;
    } else {
      horizontal = beginningEastWest - endingEastWest ;
    }

    return vertical + horizontal;

  }

  estimatedTime(peakHours){
    let totalBlocks = this.blocksTravelled();
    let result = peakHours ? totalBlocks / 2 : totalBlocks / 3;
    return result
  }


}
