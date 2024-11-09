// app/api/content/route.js (in the App Router) or pages/api/content.js (in Pages Router)
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export async function GET() {
  const filePath = path.join(process.cwd(), 'content.yml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const content = yaml.load(fileContents);

  return new Response(JSON.stringify(content), {
    headers: { 'Content-Type': 'application/json' },
  });
}
