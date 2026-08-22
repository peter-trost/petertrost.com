import { SITE } from '../site';
import { getPosts } from '../posts';

export async function GET() {
  const posts = await getPosts();
  const lines = [
    `# ${SITE.title}`,
    '',
    `> ${SITE.description}`,
    '',
    `Personal blog of ${SITE.author}. Static site; every post is plain HTML with a markdown source.`,
    `RSS: ${SITE.url}/rss.xml`,
    '',
    '## Posts',
    '',
    ...posts.map((p) => `- [${p.data.title}](${SITE.url}/posts/${p.id}/): ${p.data.description}`),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
