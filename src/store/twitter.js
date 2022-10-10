import { defineStore } from "pinia";
// import Twitter from 'twitter-api-v2'

const url = 'https://api.twitter.com/2/tweets/?q=trend&src=typed_query';
const { VITE_BASE_bearer_token } = import.meta.env;
const options = {
  headers: VITE_BASE_bearer_token
}
fetch(url, options).then(res => res.json()).then(json => console.log(json));

export const useTwitterStore = defineStore("Twitter", () => {

  const twitter = () => {
    
  };

  return {
    twitter
  };
});