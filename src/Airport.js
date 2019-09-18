function Airport() {
    this.all_planes = [];
}

Airport.prototype.landPlane = function(plane) {
  if(this.weather() === false){
    throw "Weather is stormy"
  }
    this.all_planes.push(plane);
    return true;
};

Airport.prototype.takeOffPlane = function() {
  if(this.weather() === false){
    throw "Weather is stormy"
  }
    this.all_planes.pop();
};

Airport.prototype.weather = function() {
    number = Math.ceil(Math.random * 10 )
    if (number != 9) {
      return true
    } else {
      return false
    }
}
