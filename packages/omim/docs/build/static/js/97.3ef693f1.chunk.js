webpackJsonp([97],{81:function(n,t){n.exports="## Popover\n\nPopover\u3002\n\n## Usage\n\n```html\n<div style=\"position:relative;left:100px;top:100px;\">\n  <m-button id='myBtn'>top-left</m-button>\n</div>\n<m-popover id=\"myPopover\" target=\"#myBtn\">\n  <div>Test Content</div>\n  <div>Test Content</div>\n  <div>Test Content..</div>\n</m-popover>\n\n<script>\n  var myPopover = document.querySelector('#myPopover')\n  var myBtn = document.querySelector('#myBtn')\n  myBtn.addEventListener('click', function () {\n    myPopover.pureSetAttribute('direction', 'top-left')\n    myPopover.setAttribute('show', '')\n  })\n<\/script>\n```\n\n## API\n\n### Props\n\n```jsx\n{\n  show: boolean;\n  x: number,\n  y: number,\n  direction: string,\n  target: string | HTMLElement \n}\n```\n"}});
//# sourceMappingURL=97.3ef693f1.chunk.js.map