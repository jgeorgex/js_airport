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

  it ("stop a plane from landing if weather is stormy", function() {

      spyOn(airport, "weather").and.returnValue(false)
      expect(function(){airport.landPlane()}).toThrow("Weather is stormy")

  })

  describe("#takeOffPlane", function() {
    it ("let a plane take off", function() {
      airport.landPlane(plane);
      airport.takeOffPlane();
      expect(airport.all_planes).not.toContain(plane);
    });
  });

  it ("stop a plane from taking off if weather is stormy", function() {

      spyOn(airport, "weather").and.returnValue(false)
      expect(function(){airport.takeOffPlane()}).toThrow("Weather is stormy")

  })

  describe("#weather", function() {
    it ("Check weather returns is true or false", function() {
      expect(airport.weather()).toEqual(jasmine.any(Boolean));
    })
  })


});
