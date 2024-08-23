// src/services/api.js

import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getBooks = async () => {
  return await axios.get(`${API_URL}/books`);
};

export const getBook = async (isbn) => {
  return await axios.get(`${API_URL}/books/${isbn}`);
};

export const createBook = async (bookData) => {
  return await axios.post(`${API_URL}/books`, bookData);
};

export const updateBook = async (isbn, bookData) => {
  return await axios.patch(`${API_URL}/books/${isbn}`, bookData);
};

export const deleteBook = async (isbn) => {
  return await axios.delete(`${API_URL}/books/${isbn}`);
};

export const getGenres = async () => {
  return await axios.get(`${API_URL}/genres`);
};

export const getAuthors = async () => {
  return await axios.get(`${API_URL}/authors`);
};

export const addUserBook = async (userId, isbn) => {
  return await axios.post(`${API_URL}/users/${userId}/books/${isbn}`);
};

export const removeUserBook = async (userId, isbn) => {
  return await axios.delete(`${API_URL}/users/${userId}/books/${isbn}`);
};

export const addUserAuthor = async (userId, authorId) => {
  return await axios.post(`${API_URL}/users/${userId}/authors/${authorId}`);
};

export const removeUserAuthor = async (userId, authorId) => {
  return await axios.delete(`${API_URL}/users/${userId}/authors/${authorId}`);
};
