/*
 * CodeBlock — Syntax-highlighted code block with copy button
 * Tropical Classroom Theme: dark code block with warm accents
 */
import { useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
import bash from 'highlight.js/lib/languages/bash';
import { Check, Copy } from 'lucide-react';

hljs.registerLanguage('python', python);
hljs.registerLanguage('bash', bash);

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'python' }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="relative group my-4 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a2e] text-xs text-gray-400">
        <span className="font-mono uppercase tracking-wider">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
        >
          {copied ? (
            <>
              <Check size={14} className="text-green-400" />
              <span className="text-green-400">Tersalin!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Salin</span>
            </>
          )}
        </button>
      </div>
      <pre className="!m-0 !rounded-t-none">
        <code ref={codeRef} className={`language-${language} !bg-[#16213e] !text-sm !leading-relaxed`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
