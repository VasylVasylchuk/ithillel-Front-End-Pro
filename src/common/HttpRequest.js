const baseUrl = 'http://localhost:7777/';
const config = {
  cache: "no-cache",
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
};

export default class HttpRequest  { 

  static post (body, url = this.url) {
    return fetch(baseUrl + url,
      {
        ...config,
        method: 'POST',
        body: JSON.stringify(body)
      }
    )
  } 
  
  static get (url) {
    return fetch(baseUrl + url, config);
  }
} 

