describe("Airport", function() {



  describe("Land a plane at an Airport", function() {
    it ("lands a plane", function() {
      airport = new Airport();
      var plane = {};
      expect(airport.land_plane(plane)).toBe(true);
    });
  });
});
