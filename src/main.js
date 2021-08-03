const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () =>{
    console.log('服务已启动')
});

app.get('/', (request, response) => {
    response.send('你好');
});

const data = [
    {
        id: 1,
        title: '第一篇',
        content: '第一篇正文'
    },
    {
        id: 2,
        title: '第二篇',
        content: '第二篇正文'
    },
    {
        id: 3,
        title: '第三篇',
        content: '第三篇正文'
    },
];

app.get('/posts', (request, response) => {
    response.send(data);
})

app.get('/posts/:postId', (request, response) => {
    const { postId } = request.params;
    const posts = data.filter(item => item.id == postId);
    response.send(posts[1]);
})