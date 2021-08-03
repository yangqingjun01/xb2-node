const express = require('express');
const app = express();
const port = 3000;

// 使用JSON中间件

app.use(express.json());

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

// 创建内容
app.post('/posts', (request, response) => {
    const { content } = request.body;
    // 设置状态码
    response.status(201);
    console.log(request.headers.xh);

    response.set('xh2', 'xhxh2');
    response.send({
        message: `成功创建了内容：${content}`
    });
});