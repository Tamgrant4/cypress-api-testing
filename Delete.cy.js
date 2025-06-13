describe('DELETE - Remove Booking', () => {
  let token;
  let bookingId;

  before(() => {
    cy.request('POST', 'https://restful-booker.herokuapp.com/auth', {
      username: 'admin',
      password: 'password123'
    }).then((res) => {
      token = res.body.token;

      cy.request('POST', 'https://restful-booker.herokuapp.com/booking', {
        firstname: "ToDelete",
        lastname: "User",
        totalprice: 100,
        depositpaid: true,
        bookingdates: {
          checkin: "2024-07-01",
          checkout: "2024-07-05"
        },
        additionalneeds: "None"
      }).then((res) => {
        bookingId = res.body.bookingid;
      });
    });
  });

  it('should delete the booking', () => {
    cy.request({
      method: 'DELETE',
      url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
      headers: {
        Cookie: `token=${token}`
      }
    }).then((res) => {
      expect(res.status).to.eq(201);
    });
  });
});
