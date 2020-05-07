import axios from "axios";
import { stringifyUrl } from "query-string";
import { TOKEN_ID } from "../app/constants";

const baseURL = process.env.REACT_APP_REST_BASE_URL;
const imageBaseURL = process.env.REACT_APP_IMAGE_BASE_URL;

export const getImageUrl = (url) => `${imageBaseURL}${url}`;

const createAuthorizationHeader = () => {
  const token = localStorage.getItem(TOKEN_ID);
  return `Bearer ${token}`;
};

const createEndpoint = (path) => {
  const url = `${baseURL}${path}`;
  return (query) => stringifyUrl({ url, query });
};

const createRequestConfig = (contentType = "application/json") => ({
  headers: {
    Authorization: createAuthorizationHeader(),
    "Content-Type": contentType,
  },
  timeout: 2000
});

const createSearchSeriesEndpoint = createEndpoint("/search/series");
const createLoginEndpoint = createEndpoint("/login");
const createRefreshEndpoint = createEndpoint("/refresh_token");

const postAPICall = async (endpoint, parameters) =>
  axios.post(endpoint, parameters);

const getAPICall = async (endpoint, requestConfig) =>
  axios.get(endpoint, requestConfig);

export async function getSeries(name = "last kingdom") {
  const { data } = await getAPICall(
    createSearchSeriesEndpoint({ name }),
    createRequestConfig()
  );
  return data?.data || [];
}

export async function doLogin({ username, apikey, userkey }) {
  const data = await postAPICall(createLoginEndpoint(), {
    username,
    apikey,
    userkey,
  });
  return data?.data || null;
}

export async function doRefresh({ token }) {
  const data = await getAPICall(createRefreshEndpoint(), createRequestConfig());
  return data?.data || null;
}
