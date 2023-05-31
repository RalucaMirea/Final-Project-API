const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");

const baseURL = "https://practice.expandtesting.com/notes/api";

const randomPassword = faker.internet.password();
const randomUsername = faker.internet.displayName({
  firstName: "Raluca",
  lastName: "Mirea",
});
const randomEmail = faker.internet.email();

describe("1. Register user flow verification", () => {
  before(() => {
    request.setDefaultTimeout(5000);
    console.log("Starting the execution of the register user flow:");
  });

  it("Create new user", async () => {
    const requestBody = {
      name: randomUsername,
      email: randomEmail,
      password: randomPassword,
    };

    console.log(randomUsername);
    console.log(randomEmail);
    console.log(randomPassword);

    await spec()
      .post(`${baseURL}/users/register`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectStatus(201)
      .expectResponseTime(3000)
      .expectBodyContains("successfully");
  });

  it("Create new account test", async () => {
    const requestBody = {
      email: "name000003@test.com",
      password: "password1234!",
    };
    await spec()
      .post(`${baseURL}/users/register`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectStatus(400)
      .expectResponseTime(3000)
      .expectBodyContains("User name must be between 4 and 30 characters");
  });
});
