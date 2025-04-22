import React from 'react';
import ReactDOM from 'react-dom';  // React 16 的导入方式
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // 将应用挂载到 HTML 中的 root 元素
);
