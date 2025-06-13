describe('POST - Create Booking', () => {
  it('should create a new booking', () => {
    cy.request('POST', 'https://restful-booker.herokuapp.com/booking', {
      firstname: "John",
      lastname: "Doe",
      totalprice: 123,
      depositpaid: true,
      bookingdates: {
        checkin: "2024-06-01",
        checkout: "2024-06-10"
      },
      additionalneeds: "Breakfast"
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('bookingid');
      expect(response.body.booking).to.have.property('firstname', 'John');
    });
  });
});
