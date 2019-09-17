function Airport() {
    this.all_planes = [];
}

Airport.prototype.landPlane = function(plane) {
    this.all_planes.push(plane);
    return true;
};

Airport.prototype.takeOffPlane = function() {
    this.all_planes.pop();
};
