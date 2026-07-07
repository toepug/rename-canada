import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function MarkdownContent({ body }: { body: string }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 md:px-8">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mb-1 border-b-4 border-ndrs-accent pb-3 font-heading text-3xl font-bold text-foreground">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mt-8 mb-3 font-heading text-xl font-bold text-foreground">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-6 mb-2 font-heading text-lg font-bold text-foreground">
              {children}
            </h3>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-4 border-l-4 border-yellow-500 bg-yellow-50 px-4 py-3 text-sm">
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="my-4 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-gray-300 bg-ndrs-grey px-3 py-2 text-left font-heading">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-gray-300 px-3 py-2 align-top">
              {children}
            </td>
          ),
          a: ({ href, children }) => (
            <a href={href} className="text-ndrs-link underline">
              {children}
            </a>
          ),
          hr: () => <hr className="my-6 border-gray-200" />,
        }}
      >
        {body}
      </ReactMarkdown>
    </div>
  );
}
