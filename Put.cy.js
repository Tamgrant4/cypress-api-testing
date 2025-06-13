describe('PUT - Update Booking', () => {
  let token;
  let bookingId;

  before(() => {
    cy.request('POST', 'https://restful-booker.herokuapp.com/auth', {
      username: 'admin',
      password: 'password123'
    }).then((res) => {
      token = res.body.token;

      cy.request('POST', 'https://restful-booker.herokuapp.com/booking', {
        firstname: "Jane",
        lastname: "Smith",
        totalprice: 222,
        depositpaid: true,
        bookingdates: {
          checkin: "2024-06-15",
          checkout: "2024-06-20"
        },
        additionalneeds: "Lunch"
      }).then((res) => {
        bookingId = res.body.bookingid;
      });
    });
  });

  it('should update the booking', () => {
    cy.request({
      method: 'PUT',
      url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
      headers: {
        Cookie: `token=${token}`
      },
      body: {
        firstname: "Updated",
        lastname: "User",
        totalprice: 300,
        depositpaid: false,
        bookingdates: {
          checkin: "2024-06-15",
          checkout: "2024-06-22"
        },
        additionalneeds: "Dinner"
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.firstname).to.eq("Updated");
    });
  });
});
