const { dirname, join } = require('path');
const { fileURLToPath } = require('url');
const Blog = require('./blog.js');
const createDb = require('./db.js');

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  const db = createDb(join(__dirname, 'data.sqlite'));
  const blog = new Blog(db);
  await blog.initialize();
  const posts = await blog.getAllPosts();
  if (posts.length === 0) {
    console.log('No post available. Run `node import-posts.js' + ' to load some sample posts');
  }
  for (const post of posts) {
    console.log(post.content);
  }
}

main().catch(console.error);
