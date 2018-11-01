(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{402:function(n,e,l){"use strict";l.r(e);var t=l(3),r=l.n(t),a=l(4),u=l.n(a),o=l(2),i=l.n(o),s=l(5),d=l.n(s),c=function(n){function e(){var n,t,a,o;u()(this,e);for(var s=arguments.length,d=Array(s),c=0;c<s;c++)d[c]=arguments[c];return t=a=i()(this,(n=e.__proto__||r()(e)).call.apply(n,[this].concat(d))),a.document=function(){return{document:l(449),className:"slider-page"}},o=t,i()(a,o)}return d()(e,n),e}(l(414).a);e.default=c},449:function(n,e){n.exports='## 滑动输入条 Slider\n\n\n\n### 基本用法\n```jsx\nimport { Cell, Slider } from \'zarm\';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 0,\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <Cell title="普通">\n          <Slider\n            value={this.state.value}\n            onChange={(value) => {\n              console.log(value);\n            }}\n          />\n        </Cell>\n\n        <Cell title="设置默认值">\n          <Slider defaultValue={20} />\n        </Cell>\n\n        <Cell title="设置上下限">\n          <Slider min={-100} max={100} defaultValue={0} />\n        </Cell>\n\n        <Cell title="设置步长">\n          <Slider step={10} />\n        </Cell>\n\n        <Cell title="禁用状态">\n          <Slider defaultValue={20} disabled />\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| value | number | - | 值 |\n| defaultValue | number | - | 初始值 |\n| min | number | - | 最小值 |\n| max | number | - | 最大值 |\n| step | number | 1 | 步长 |\n| disabled | boolean | false | 是否禁用 |\n| onChange | (value: number) => void | - | 值变化时触发的回调函数 |\n'}}]);