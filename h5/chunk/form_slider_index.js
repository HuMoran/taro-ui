(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"124":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),o=function get(e,t,a){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,a)}if("value"in r)return r.value;var n=r.get;return void 0!==n?n.call(a):void 0},n=_interopRequireDefault(a(1)),l=_interopRequireDefault(a(4)),i=a(130),c=a(137),u=_interopRequireDefault(a(132));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}a(542);var s=function(e){function PageSlider(){var e,t,a;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,PageSlider);for(var r=arguments.length,o=Array(r),n=0;n<r;n++)o[n]=arguments[n];return t=a=_possibleConstructorReturn(this,(e=PageSlider.__proto__||Object.getPrototypeOf(PageSlider)).call.apply(e,[this].concat(o))),a.config={"navigationBarTitleText":"Taro UI"},_possibleConstructorReturn(a,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(PageSlider,l.default.Component),r(PageSlider,[{"key":"render","value":function render(){return n.default.createElement(i.View,{"className":"page"},n.default.createElement(u.default,{"title":"Slider 滑动条"}),n.default.createElement(i.View,{"className":"doc-body"},n.default.createElement(i.View,{"className":"panel"},n.default.createElement(i.View,{"className":"panel__title"},"基础用法"),n.default.createElement(i.View,{"className":"panel__content"},n.default.createElement(i.View,{"className":"example-item"},n.default.createElement(i.View,{"className":"example-item__desc"},"step=1"),n.default.createElement(c.AtSlider,{"step":1,"value":50})))),n.default.createElement(i.View,{"className":"panel"},n.default.createElement(i.View,{"className":"panel__title"},"显示当前 Value"),n.default.createElement(i.View,{"className":"panel__content"},n.default.createElement(i.View,{"className":"example-item"},n.default.createElement(i.View,{"className":"example-item__desc"},"step=1"),n.default.createElement(c.AtSlider,{"step":1,"value":50,"showValue":!0})))),n.default.createElement(i.View,{"className":"panel"},n.default.createElement(i.View,{"className":"panel__title"},"设置最大/最小值"),n.default.createElement(i.View,{"className":"panel__content"},n.default.createElement(i.View,{"className":"example-item"},n.default.createElement(i.View,{"className":"example-item__desc"},"step=1, min=50, max=200"),n.default.createElement(c.AtSlider,{"step":1,"value":100,"min":50,"max":200,"showValue":!0})))),n.default.createElement(i.View,{"className":"panel"},n.default.createElement(i.View,{"className":"panel__title"},"自定义样式"),n.default.createElement(i.View,{"className":"panel__content"},n.default.createElement(i.View,{"className":"example-item"},n.default.createElement(i.View,{"className":"example-item__desc"},"step=1, blockSize=24"),n.default.createElement(c.AtSlider,{"step":1,"value":50,"activeColor":"#4285F4","backgroundColor":"#BDBDBD","blockColor":"#4285F4","blockSize":24})))),n.default.createElement(i.View,{"className":"panel"},n.default.createElement(i.View,{"className":"panel__title"},"禁用状态"),n.default.createElement(i.View,{"className":"panel__content"},n.default.createElement(i.View,{"className":"example-item"},n.default.createElement(i.View,{"className":"example-item__desc"},"step=1, blockSize=24"),n.default.createElement(c.AtSlider,{"step":1,"value":50,"showValue":!0,"disabled":!0}))))))}},{"key":"componentDidMount","value":function componentDidMount(){o(PageSlider.prototype.__proto__||Object.getPrototypeOf(PageSlider.prototype),"componentDidMount",this)&&o(PageSlider.prototype.__proto__||Object.getPrototypeOf(PageSlider.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){o(PageSlider.prototype.__proto__||Object.getPrototypeOf(PageSlider.prototype),"componentDidShow",this)&&o(PageSlider.prototype.__proto__||Object.getPrototypeOf(PageSlider.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){o(PageSlider.prototype.__proto__||Object.getPrototypeOf(PageSlider.prototype),"componentDidHide",this)&&o(PageSlider.prototype.__proto__||Object.getPrototypeOf(PageSlider.prototype),"componentDidHide",this).call(this)}}]),PageSlider}();t.default=s},"132":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),o=_interopRequireDefault(a(1)),n=_interopRequireDefault(a(4)),l=_interopRequireDefault(a(131)),i=a(130);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(133);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,n.default.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return o.default.createElement(i.View,{"className":"doc-header"},o.default.createElement(i.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":l.default.string}},"133":function(e,t,a){},"542":function(e,t,a){}}]);