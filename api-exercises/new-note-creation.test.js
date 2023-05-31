const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");

const baseURL = "https://practice.expandtesting.com/notes/api";

describe("New note creation", () => {
  before(() => {
    request.setDefaultTimeout(5000);
    console.log("Starting the execution of the new note creation:");
  });

  it("New note creation including employee's job title, job description, category:", async () => {
    const requestBody = {
      title: faker.person.jobTitle(),
      description: faker.person.jobDescriptor(),
      category: "Work",
    };

    await spec()
      .post(`${baseURL}/notes`)
      .withHeaders(
        "x-auth-token",
        "f7e443aede9549269c0f571eaf8fe4328a2024dfbd3440308c49d69e0f8d5886",
        "Content-Type",
        "application/json"
      )
      .withBody(requestBody)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("Note successfully created");
  });

});