/**
 * 使用说明
 * 需要页面引用js
 * 例：import watchFunc from "../../utils/watch.js"
 * 例：watchFunc.call(this, this.data)
 */

/**
 * 监听（类似vue watch使用方法）
 * @param {Object} obj 监听区域
 */
const watchFunc = function(obj) {
  let objJson = this.watch;

  for (let item in objJson) {
    new Monitor(obj, item, objJson[item], this)
  }
}

const Monitor = (obj, prop, func, _this) => {
  let val = obj[prop];

  Object.defineProperty(obj, prop, {
    configurable: true,
    enumerable: true,
    set: value => {
      val = value;
      func.call(_this);
    },
    get: () => {
      return val;
    }
  })
}

module.exports = watchFunc;