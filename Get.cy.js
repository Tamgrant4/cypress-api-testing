describe('GET - Retrieve Booking', () => {
  it('should get a booking by ID', () => {
    cy.request('GET', 'https://restful-booker.herokuapp.com/booking/1')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('firstname');
        expect(response.body).to.have.property('lastname');
      });
  });
});
