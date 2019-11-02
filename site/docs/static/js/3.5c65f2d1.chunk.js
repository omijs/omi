webpackJsonp([3],{69:function(n,e){n.exports="# omi-router\n\nomi-router \u662f [Omi](https://tencent.github.io/omi/) \u4e13\u5c5e\u7684router\u63d2\u4ef6\uff0c\u6587\u4ef6\u5c3a\u5bf8\u8f7b\u91cf\uff0c\u4f7f\u7528\u7b80\u4fbf\uff0c\u529f\u80fd\u5f3a\u5927\u3002\u7528\u4e8eOmi\u5236\u4f5cWeb\u5355\u9875\u5e94\u7528\u7684\u9996\u9009\u89e3\u51b3\u65b9\u6848\u3002\n\n[\u2192 DEMO](https://tencent.github.io/omi/packages/omi-router/examples/spa/build/)\n\n\u5355\u9875\u7684\u597d\u5904\u4e5f\u662f\u975e\u5e38\u660e\u663e:\n\n* \u65e0\u5237\u65b0\u52a0\u8f7d\u9875\u9762\u5185\u5bb9\n* \u65e0\u5237\u65b0\u524d\u8fdb\u548c\u540e\u9000\u9875\u9762\n* \u8def\u7531\u4e2d\u7684\u67d0\u4e2a\u94fe\u63a5\u7684\u4f20\u64ad\u548c\u5206\u4eab\uff08\u522b\u4eba\u770b\u5230\u7684\u548c\u4f60\u4e00\u6837\u7684\u72b6\u6001\uff09\n* \u8f6c\u573a\u52a8\u753b\uff08a\u6807\u7b7e\u8df3\u8f6c\u4e0d\u4ec5\u8981\u767d\u5c4f\uff0c\u800c\u4e14\u6ca1\u6709\u8f6c\u573a\u52a8\u753b\uff09\n* \u8d44\u6e90\u590d\u7528\uff08\u5355\u9875\u4e2d\u7684\u8bb8\u591a\u8d44\u6e90\u4e00\u5b9a\u662f\u53ef\u4ee5\u5171\u7528\u7684\uff0c\u6700\u5178\u578b\u7684\u6bd4\u5982omi.js\uff0c\u5982\u679c\u4e0d\u662f\u5355\u9875\u7684\u8bdd\uff0c\u4f60\u9700\u8981\u52a0\u8f7d\u591a\u6b21\uff09\n\n\u597d\u4e86\uff0c\u597d\u5904\u8fd9\u4e48\u591a\uff0c\u770b\u770b\u600e\u4e48\u5b89\u88c5\u4f7f\u7528\u5427~~\n\n## \u5b89\u88c5\n\n### NPM\n\n```js\nnpm install omi-router\n```\n\n## \u5f00\u59cb\n\n```js\n//\u4f60\u53ef\u4ee5\u5728\u5168\u5c40\u8bbf\u95ee\u5230 route\nimport 'omi-router'\nimport { define, WeElement, render } from 'omi'\nimport './about'\nimport './home'\nimport './user'\nimport './user-list'\n\ndefine('my-app', class extends WeElement {\n\n  data = { tag: 'my-home' }\n\n  install() {\n\n    route('/', () => {\n      this.data.tag = 'my-home'\n      this.update()\n    })\n\n    route('/about', (evt) => {\n      console.log(evt.query)\n      this.data.tag = 'my-about'\n      this.update()\n    })\n\n    route('/user-list', () => {\n      this.data.tag = 'user-list'\n      this.update()\n    })\n\n    route('/user/:name/category/:category', (evt) => {\n      this.data.tag = 'my-user'\n      this.data.params = evt.params\n      this.update()\n    })\n\n    route('*', function () {\n      console.log('not found')\n    })\n\n    route.before = (evt) => {\n      console.log('before')\n      //prevent route when return false\n      //return false\n    }\n\n    route.after = (evt) => {\n      console.log('after')\n    }\n  }\n\n  onClick = () => {\n    route.to('/user/vorshen/category/html')\n  }\n\n  render(props, data) {\n    return (\n      <div>\n        <ul>\n          <li><a href=\"#/\" >Home</a></li>\n          <li><a href=\"#/about\" >About</a></li>\n          <li><a href=\"#/user-list\" >UserList</a></li>\n          <li><a href=\"#/about?name=dntzhang&age=18\" >About Dntzhang</a></li>\n        </ul>\n        <div id=\"view\">\n          <data.tag params={data.params} />\n        </div>\n        <div><button onClick={this.onClick}>Test route.to</button></div>\n      </div>\n    )\n  }\n})\n\nrender(<my-app />, \"#container\")\n```\n\n## \u52a8\u6001\u5339\u914d\n\n| \u6a21\u5f0f | \u5339\u914d\u8def\u5f84 | route.params |\n|---------|------|--------|\n| /user/:name | /user/dntzhang | `{ name: 'dntzhang' }` |\n| /user/:name/category/:category | /user/dntzhang/category/js | `{ name: 'dntzhang', category: 'js' }` |\n\n\u6ce8\u610f\uff1a \u5982\u679c hash \u4e3a\u7a7a\uff0c\u4f1a\u81ea\u52a8\u88ab\u8bc6\u522b\u4e3a `/`\u3002\n\n## \u53e6\u4e00\u79cd\u643a\u5e26\u67e5\u8be2\u53c2\u6570\u65b9\u6cd5\n\n```html\n<li><a href=\"#/about?name=dntzhang&age=18\" >About</a></li>\n```\n\n```js\nroute('/about', (evt) => {\n  //\u70b9\u51fb\u4e0a\u9762\u7684\u6807\u7b7e\u4f1a\u8f93\u51fa { name: 'dntzhang', age : '18' } \n  console.log(evt.query)\n})\n```\n\n## \u643a\u5e26 JSON Data\n\n```js\nroute.to('/about',(evt) => {\n  //{ a: 1 }\n  console.log(evt.data)\n})\nroute.to('/about', { a: 1 })\n```\n\n### \u5730\u5740\n\n* [\u5728\u7ebf\u6f14\u793a\u5730\u5740](https://tencent.github.io/omi/packages/omi-router/examples/simple/)\n* [\u6e90\u7801\u5730\u5740](https://github.com/Tencent/omi/tree/master/packages/omi-router/examples/simple)\n\n## License\nThis content is released under the [MIT](http://opensource.org/licenses/MIT) License.\n"}});
//# sourceMappingURL=3.5c65f2d1.chunk.js.map