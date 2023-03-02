// 路由处理方式
const generateRouter = (routers: any) => {
    return routers.map((item: any) => {
        if (item.children) {
            item.children = generateRouter(item.children);
        }
        return item;
    });
};

export {
    generateRouter
};
