// src/components/AddBook.js

import React, { useState } from 'react';
import { createBook } from '../services/api';

const AddBook = () => {
  const [formData, setFormData] = useState({
    isbn: '',
    title: '',
    author: '',
    amazon_url: '',
    language: '',
    pages: 0,
    publisher: '',
    year: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBook(formData);
    // Optionally, refresh the book list or redirect
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="isbn" value={formData.isbn} onChange={handleChange} placeholder="ISBN" />
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
      <input name="author" value={formData.author} onChange={handleChange} placeholder="Author" />
      <input name="amazon_url" value={formData.amazon_url} onChange={handleChange} placeholder="Amazon URL" />
      <input name="language" value={formData.language} onChange={handleChange} placeholder="Language" />
      <input name="pages" value={formData.pages} onChange={handleChange} placeholder="Pages" />
      <input name="publisher" value={formData.publisher} onChange={handleChange} placeholder="Publisher" />
      <input name="year" value={formData.year} onChange={handleChange} placeholder="Year" />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
