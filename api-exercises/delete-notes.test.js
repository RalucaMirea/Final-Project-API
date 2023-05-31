const { spec, request } = require("pactum");

const baseURL = "https://practice.expandtesting.com/notes/api";

const getNotesSchema = require("../data/response/get-notes-response-schema.json");

describe("Delete specific Notes test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
    console.log("Starting the execution of the DELETE NOTE test suite");
  });

  it("delete specific test", async () => {
    await spec()
      .delete(`${baseURL}/notes/6474df0f1a350902114327bf`)
      .withHeaders(
        "x-auth-token",
        "f7e443aede9549269c0f571eaf8fe4328a2024dfbd3440308c49d69e0f8d5886",
        "Content-Type",
        "application/json"
      )
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("Note successfully deleted");
  });
});