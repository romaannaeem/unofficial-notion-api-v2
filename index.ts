import Notion from './src/notion';

const options = {
  token_v2: 'YOUR_NOTION_API_KEY',
};

const api = new Notion({
  token: options.token_v2,
  options: {
    pageUrl: '/posts/',
    colors: {
      red: 'tomato',
      blue: 'rgb(100, 149, 237)',
      purple: '#9933cc',
    },
  },
});

// Use the api here

(async () => {
  const pages = await api.getAllHTML();
  console.log(pages[0]);
})();

(async () => {
  const pageIds = await api.getPages();
  console.log(pageIds);
})();
