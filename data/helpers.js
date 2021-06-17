import {database} from './database';

const posts = database.collections.get('posts');

export const observePosts = () => posts.query().observe();
export const savePost = async ({title, body}) => {
  await database.action(async () => {
    await posts.create(entry => {
      entry.title = title;
      entry.body = body;
    });
  });
};
