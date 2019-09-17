describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  })

  describe("#landPlane", function() {
    it ("lands a plane", function() {
      expect(airport.landPlane(plane)).toBe(true);
    });
  });

  describe("#takeOffPlane", function() {
    it ("let a plane take off", function() {
      airport.landPlane(plane);
      airport.takeOffPlane();
      expect(airport.all_planes).not.toContain(plane);
    });
  });



});
