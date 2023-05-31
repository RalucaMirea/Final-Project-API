const { spec, request } = require("pactum");

const baseURL = "https://practice.expandtesting.com/notes/api";

const getNotesSchema = require("../data/response/get-notes-response-schema.json");

describe("Get Notes test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
    console.log("Starting the execution for Get All Notes exercise:");
  });

  it("Get all notes", async () => {
    await spec()
      .get(`${baseURL}/notes`)
      .withHeaders(
        "x-auth-token",
        "f7e443aede9549269c0f571eaf8fe4328a2024dfbd3440308c49d69e0f8d5886",
        "Content-Type",
        "application/json"
      )
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("Notes successfully retrieved")
      .expectJsonSchema(getNotesSchema);
  });
});
