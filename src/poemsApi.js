// showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce';

// define the api
const api = create({
  baseURL: 'http://poetrydb.org',
  headers: { Accept: 'application/vnd.github.v3+json' },
});

const naviMonitor = response => console.log(response);
api.addMonitor(naviMonitor);

export const poemsForAuthor = author => api.get(`/author/${author}`).then(res => res.data);

export const linesForPoem = poem => api.get(`/title/${poem}`).then(res => res.data);

export const authors = () => api.get('/author').then(res => res.data);

export const poem = (author, title) =>
  api.get(`/author,title/${author}:abs;${title}:abs`).then(res => res.data[0]);
