import type { ArchivePost } from "@/components/ArchiveShelf";

const FEED_URL = "https://nongizzharith.substack.com/feed";

// Substack seeds every new publication with this placeholder post. It is not
// a real essay, so it never belongs on the shelf.
const PLACEHOLDER = /\/p\/coming-soon\/?$/;

function field(chunk: string, tag: string) {
  const match = chunk.match(
    new RegExp(`<${tag}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`)
  );
  return match ? match[1].trim() : "";
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
        title: field(chunk, "title"),
        link: field(chunk, "link"),
        date: field(chunk, "pubDate"),
      }))
      .filter((post) => post.title && post.link && !PLACEHOLDER.test(post.link));
  } catch {
    // A feed outage should never take the page down with it.
    return [];
  }
}
