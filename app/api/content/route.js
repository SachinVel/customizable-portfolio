// app/api/content/route.js (in the App Router) or pages/api/content.js (in Pages Router)
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { watch } from 'fs';

let cachedContent = null;

function loadContent() {
  const filePath = path.join(process.cwd(), 'content.yml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return yaml.load(fileContents);
}

function setupWatcher() {
  const filePath = path.join(process.cwd(), 'content.yml');
  watch(filePath, (eventType) => {
    if (eventType === 'change') {
      cachedContent = loadContent();
    }
  });
}

setupWatcher();
cachedContent = loadContent();

export async function GET() {
  return new Response(JSON.stringify(cachedContent), {
    headers: { 'Content-Type': 'application/json' },
  });
}
