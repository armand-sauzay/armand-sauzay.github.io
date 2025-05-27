"use client";
import { useState, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: ReactNode;
  [key: string]: any;
}

function CodeBlock({ inline, className, children, ...props }: CodeProps) {
  const [copied, setCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || "");
  const codeString = String(children).replace(/\n$/, "");

  if (inline || !match) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={handleCopy}
        aria-label={copied ? "Copied!" : "Copy code"}
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          zIndex: 10,
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          opacity: 0.7,
          transition: "opacity 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
      >
        {copied ? (
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </button>
      <SyntaxHighlighter style={oneLight} language={match[1]} {...props}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default function MarkdownDisplay({ markdown, markdownUrl }: { markdown: string; markdownUrl: string }) {
  return (
    <article className="prose prose-neutral max-w-2xl mx-auto p-6 prose-pre:border-0">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code: CodeBlock,
          img({ src = "", alt, ...props }) {
            const isRelative = !/^https?:\/+/.test(src);
            const baseUrl = markdownUrl.substring(0, markdownUrl.lastIndexOf("/") + 1);
            const finalSrc = isRelative ? baseUrl + src : src;
            return <img src={finalSrc} alt={alt} {...props} />;
          }
        }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
}