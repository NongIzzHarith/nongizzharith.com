import type { ArchivePost } from "@/components/ArchiveShelf";

const FEED_URL = "https://nongizzharith.substack.com/feed";

// Substack seeds every new publication with this placeholder post. It is not
// a real essay, so it never belongs on the shelf.
const PLACEHOLDER = /\/p\/coming-soon\/?$/;

const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

function field(chunk: string, tag: string) {
  const match = chunk.match(
    new RegExp(`<${tag}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`)
  );
  return match ? match[1].trim() : "";
}

function stripHtml(value: string) {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function summarise(value: string, limit = 180) {
  const text = stripHtml(value);
  if (text.length <= limit) return text;
  return `${text.slice(0, limit).replace(/\s+\S*$/, "")}...`;
}

// Formatted on the server so both renders emit identical markup.
function formatDate(pubDate: string) {
  const parsed = new Date(pubDate);
  if (Number.isNaN(parsed.getTime())) return "";
  return `${MONTHS[parsed.getUTCMonth()]} ${parsed.getUTCDate()}, ${parsed.getUTCFullYear()}`;
}

export async function getArchivePosts(): Promise<ArchivePost[]> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return [];

    const xml = await res.text();

    return xml
      .split("<item>")
      .slice(1)
      .map((chunk) => ({
        title: stripHtml(field(chunk, "title")),
        link: field(chunk, "link"),
        date: formatDate(field(chunk, "pubDate")),
        summary: summarise(
          field(chunk, "description") || field(chunk, "content:encoded")
        ),
      }))
      .filter((post) => post.title && post.link && !PLACEHOLDER.test(post.link));
  } catch {
    // A feed outage should never take the page down with it.
    return [];
  }
}
