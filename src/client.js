import * as contentful from "contentful";

const REACT_APP_ID = process.env.REACT_APP_ID;
const REACT_APP_TOKEN = process.env.REACT_APP_TOKEN;

export const client = contentful.createClient({
  space: REACT_APP_ID,
  accessToken: REACT_APP_TOKEN,
});
