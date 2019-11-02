webpackJsonp([52],{126:function(n,s){n.exports="## Drawer\n\n\u5bfc\u822a\u62bd\u5c49\u7528\u4e8e\u7ec4\u7ec7\u5bf9\u5e94\u7528\u7a0b\u5e8f\u7684\u76ee\u6807\u548c\u5176\u4ed6\u529f\u80fd\u7684\u8bbf\u95ee\u3002\n\n## \u4f7f\u7528\n\n```html\n <m-drawer\n  show\n  position=\"left\">\n  <m-list\n    single-selection\n    css=\"ul{\n      width:200px;\n      height:100vh;\n      border: 1px solid rgba(0,0,0,.1);\n      background:#fff;\n    }\"\n    items=\"...\">\n  </m-list>\n</m-drawer>\n```\n\n## Omi \u4e2d\u4f7f\u7528\n\nJSX:\n\n```jsx\n<m-drawer\n  show={this.show}\n  position='left'\n  onClose={this.onClose}>\n  <m-list\n    singleSelection\n    css={`ul{\n      width:200px;\n      height:100vh;\n      border: 1px solid rgba(0,0,0,.1);\n      background:#fff;\n    }`}\n    items={this.items}\n    onItemClick={this.onItemClick}>\n  </m-list>\n</m-drawer>\n```\n\n## API\n\n### Props\n\n```jsx\n{\n  position?: 'left' | 'right' | 'top' | 'bottom',\n  show?: boolean\n}\n```\n"}});
//# sourceMappingURL=52.45ade2f6.chunk.js.map