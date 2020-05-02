import React from 'react';

type SentenceProps = {
  content: string;
};

const Sentence = ({ content }: SentenceProps) => (
  <p className="text-gray-700">{content}</p>
);

type SentencesProps = {
  sentences: string[];
  name: string;
};

export default function Sentences({ name, sentences }: SentencesProps) {
  return (
    <div className="pb-4">
      {sentences.map((sentence) => (
        <Sentence key={`${name}-${sentence}`} content={sentence} />
      ))}
    </div>
  );
}
