'use client'
import React, { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import './markdown.css';  // Make sure this is the correct path to your CSS file

function Markdown() {
  const [markdown, setMarkdown] = useState(`# Welcome to my React Markdown Previewer!

    ## This is a sub-heading...
    ### And here's some other cool stuff:
    
    Heres some code, \`<div></div>\`, between 2 backticks.
    
    \`\`\`
    // this is multi-line code:
    
    function anotherExample(firstLine, lastLine) {
      if (firstLine == '\\\`\`\`' && lastLine == '\\\`\`\`') {
        return multiLineCode;
      }
    }
    \`\`\`
    
    You can also make text **bold**.
    
    
    There's also [links](https://www.freecodecamp.org), and
    > Block Quotes!
    
    - And of course there are lists.
      - Some are bulleted.
         - With different indentation levels.
            - That look like this.
    
    
    1. And there are numbered lists too.
    1. Use just 1s if you want!
    1. And last but not least, let's not forget embedded images:
    
    ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`);

  const textareaRef = useRef(null);

  const handlefunc = (e) => {
    setMarkdown(e.target.value);
  };

  const copyText = () => {
    textareaRef.current.select();
    document.execCommand("copy");
  };

  return (
    <div className="container">
      <h1 className="title">Markdown Previewer</h1>
      <div className="content">
        <div className="editor-container">
          <div className="editor-header">
            <p className="editor-title">Editor</p>
            <button className="copy-button" onClick={copyText}>
              Copy Text
            </button>
          </div>
          <textarea
            ref={textareaRef}
            className="editor-textarea"
            rows="20"
            id="editor"
            name="text"
            value={markdown}
            onChange={handlefunc}
          ></textarea>
        </div>
        <div className="preview-container">
          <div className="preview-header">
            <p className="preview-title">Preview</p>
          </div>
          <div className="preview-content" id="preview">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Markdown;
