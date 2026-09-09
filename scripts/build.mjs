import { cp, mkdir, rm, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(new URL('site/', root), output, { recursive: true });
await writeFile(new URL('.nojekyll', output), '');
console.log('Site gerado em dist/ com as duas propostas de 2027.');
