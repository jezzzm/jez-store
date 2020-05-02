import React from 'react';

type SentenceProps = {
  content: string;
};

const Sentence = ({ content }: SentenceProps) => (
  <p className="text-gray-700">{content}</p>
);

type SentencesProps = {
  sentences: string[];
  productName: string;
};

export default function Sentences({ productName, sentences }: SentencesProps) {
  return (
    <div className="pb-4" data-testid="sentences">
      {sentences.map((sentence) => (
        <Sentence key={`${productName}-${sentence}`} content={sentence} />
      ))}
    </div>
  );
}
