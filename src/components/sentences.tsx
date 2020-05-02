import React from 'react';

type SentenceProps = {
  content: string;
};

const Sentence = ({ content }: SentenceProps) => (
  <p className="text-gray-700">{content}</p>
);

type SentencesProps = {
  sentences: string[];
  nameId: string;
};

export default function Sentences({ nameId, sentences }: SentencesProps) {
  return (
    <div className="pb-4" data-testid="sentences">
      {sentences.map((sentence) => (
        <Sentence key={`${nameId}-${sentence}`} content={sentence} />
      ))}
    </div>
  );
}
