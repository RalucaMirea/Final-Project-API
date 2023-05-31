const { spec, request } = require("pactum");

const baseURL = "https://practice.expandtesting.com/notes/api";

describe("Login for an existing user verification", () => {
  before(() => {
    request.setDefaultTimeout(5000);
    console.log("Starting the execution of the login for an existing user verification:");
  });

  it("2. Login for an existing user verification", async () => {
    const requestBody = {
      name: "Raluca01",
      email: "ralucatest@gmail.com",
      password: "Test1234",
    };
    await spec()
      .post(`${baseURL}/users/login`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("Login successful");
  });
});