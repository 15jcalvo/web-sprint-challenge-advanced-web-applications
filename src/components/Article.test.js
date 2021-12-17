import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from '@testing-library/react';

import Article from './Article';

const dummyArticle = {
    id: 'aMqwd', //unique article id,
    author: "authorproxy",
    headline: "headlineproxy", //title of article
    createdOn: '2021-08-09T18:02:38-04:00',
    summary: "summary", //short summary statement of article
    body: ""  //paragraph of article text
}
const dummyArticle1 = {
    id: 'aMqwd', //unique article id,
    author: "",
    headline: "headlineproxy", //title of article
    createdOn: '2021-08-09T18:02:38-04:00',
    summary: "summary", //short summary statement of article
    body: ""  //paragraph of article text
}

test('renders component without errors', ()=> {
    render(<Article article={dummyArticle}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={dummyArticle}/>)
    const headline = screen.queryByText(/headlineproxy/i)
    expect(headline).toBeInTheDocument()
    const author = screen.queryByText(/authorproxy/i)
    expect(author).toBeInTheDocument()
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={dummyArticle1}/>)
    const author = screen.queryByText(/Associated Press/i)
    expect(author).toBeInTheDocument()
});

test('executes handleDelete when the delete button is pressed', ()=> {
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.