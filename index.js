import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('type markdown here');

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea value={markdown} onChange={handleChange} />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownEditor;

const sentence = "Hello, world!";
const reversedSentence = sentence.split('').reverse().join('');
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
console.log(capitalizedSentence);

const data = [
    { name: 'John' },
    { name: 'Jane' },
    { name: 'Alice' },
    { name: 'Bob' },
];

const names = data.map(item => item.name);
console.log(names);

const nestedData = [
    [
        { name: 'John' },
        { name: 'Jane' },
    ],
    [
        { name: 'Bob' },
    ]
];

const names = nestedData.flatMap(array => array.map(item => item.name));
console.log(names);