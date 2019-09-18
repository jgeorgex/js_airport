function Airport(capacity = 20) {
    this.all_planes = [];
    this.capacity = capacity;

}


Airport.prototype.landPlane = function(plane) {
  if(this.weather() === false){
    throw "Weather is stormy"
  }
  if(this.full() === true ){
    throw "Airport is full"
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
Airport.prototype.full = function() {
  return (this.all_planes.length === this.capacity)


}
