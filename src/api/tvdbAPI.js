import axios from 'axios';
import { stringifyUrl } from 'query-string'

const mockSeries =  { "data": [
  {
    "aliases": [
      "El último reino"
    ],
    "banner": "/banners/graphical/298566-g.jpg",
    "firstAired": "2015-10-10",
    "id": 298566,
    "image": "/banners/posters/298566-2.jpg",
    "network": "Netflix",
    "overview": "England, 872. A Saxon man, raised by Danes, must choose a side and play his part in the birth of a nation, alongside the man who would become known as King Alfred the Great.",
    "poster": "/banners/posters/298566-2.jpg",
    "seriesName": "The Last Kingdom",
    "slug": "the-last-kingdom",
    "status": "Continuing"
  }
]
}

const baseURL = process.env.REACT_APP_REST_BASE_URL;
const imageBaseURL =  process.env.REACT_APP_IMAGE_BASE_URL;

export const getImageUrl = (url) => `${imageBaseURL}${url}`

const createEndpoint = (path) => { 
  const url = `${baseURL}${path}`; 
  return (query) => stringifyUrl({url, query})
} 

const createRequestConfig = (contentType="application/json") => ({
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_REST_TOKEN}`,
    'Content-Type': contentType
  }
})


const createSearchSeriesEndpoint = createEndpoint('/search/series');

const getAPICall = async (endpoint, requestConfig) => axios.get(endpoint, requestConfig);

export async function getSeries(name='last kingdom') {
  const {data} = await getAPICall(createSearchSeriesEndpoint({name}), createRequestConfig());
  return data?.data || []; 
}