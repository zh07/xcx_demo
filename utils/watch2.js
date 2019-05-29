/**
 * 使用说明
 * 需要页面引用js
 * 例：import watchFunc from "../../utils/watch2.js"
 * 例：this.data = watchFunc.call(this, this.data)
 */

/**
 * 监听（类似vue watch使用方法）
 * @param {Object} obj 监听区域
 */
const watch = function(obj) {
  let _this = this;
  let watch = this.watch

  return new Proxy(obj, {
    get(target, key, receiver) {
      return Reflect.get(target, key, receiver)
    },
 
    set(target, key, value, receiver) {
      target[key] = value
      watch[key] && watch[key].call(_this)
      return Reflect.set(target, key, value, receiver)
    }
  })
}

export default watch