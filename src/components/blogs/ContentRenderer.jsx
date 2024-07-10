import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';

const ContentRenderer = ({ content }) => {
  return (
    <div>
      {content.map((block, index) => {
        switch (block.nodeType) {
          case 'heading-1':
            return (
              <h1 key={index} className="text-6xl mb-6">
                {block.content.map((textNode, textIndex) => (
                  <span key={textIndex}>{textNode.value}</span>
                ))}
              </h1>
            );
          case 'heading-2':
            return (
              <h1 key={index} className="text-2xl font-normal mb-6">
                {block.content.map((textNode, textIndex) => (
                  <span key={textIndex}>{textNode.value}</span>
                ))}
              </h1>
            );
          case 'paragraph':
            if (
              block.content.length > 0 &&
              block.content[0].marks.length > 0 &&
              block.content[0].marks[0].type === 'code'
            ) {
              return (
                <div key={index} className="mb-4">
                  <CodeBlock
                    text={block.content.map((textNode) => textNode.value)}
                    language="javascript"
                    showLineNumbers
                    theme={dracula}
                    wrapLines
                  />
                </div>
              );
            } else {
              return (
                <p key={index} className="mb-4">
                  {block.content.map((textNode, textIndex) => (
                    <span key={textIndex}>{textNode.value}</span>
                  ))}
                </p>
              );
            }

          case 'embedded-asset-block':
            const asset = block.data.target;
            return (
              <div key={index} className="flex flex-col gap-2 mb-4">
                <img
                  src={`https:${asset.fields.file.url}`}
                  alt={asset.fields.title}
                />

                {asset.fields.description && (
                  <p className="self-center text-white text-sm">
                    {asset.fields.description}
                  </p>
                )}
              </div>
            );

          case 'hyperlink':
            return (
              <span key={index}>
                {block.content.map((textNode, textIndex) => (
                  <span key={textIndex}>
                    <a href={block.data.uri}>{textNode.value}</a>
                  </span>
                ))}
              </span>
            );

          case 'ordered-list':
            return (
              <ol key={index}>
                {block.content.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item.content.map((textNode, textIndex) => (
                      <span key={textIndex}>{textNode.value}</span>
                    ))}
                  </li>
                ))}
              </ol>
            );

          case 'list-item':
            return (
              <ul key={index}>
                {block.content.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item.content.map((textNode, textIndex) => (
                      <span key={textIndex}>{textNode.value}</span>
                    ))}
                  </li>
                ))}
              </ul>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default ContentRenderer;
