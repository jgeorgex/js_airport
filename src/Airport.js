function Airport() {
  this.all_planes = [];
}

Airport.prototype.land_plane = function(plane) {
 this.all_planes.push(plane);
 return true;
};
