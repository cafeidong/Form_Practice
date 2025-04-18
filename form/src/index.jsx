import React from 'react';
import ReactDOM from 'react-dom/client';  // React 18 的写法
import MainPage from './app';  // 导入你的App组件

// 获取根DOM元素
const rootElement = document.getElementById('root');

// 使用 ReactDOM.createRoot 渲染 App 组件
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
