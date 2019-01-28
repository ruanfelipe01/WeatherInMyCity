export class CurrentWeather {
    constructor(public city:string,
                public temperature:number,
                public icon:string,
                public weatherKind:string,
                public tempMin:number,
                public tempMax:number){}
  }
