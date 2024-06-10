import { $PROXY } from "solid-js";
const trueFn = () => true
export function createPropsProxy(props: any, handler: ProxyHandler<any> = {}): any {
  return new Proxy({}, Object.assign({
    get(_, key) {
      if (key === $PROXY) {
        return props
      }

      return props
    },
    has(_, key) {
      if (key === $PROXY) return true;
      return key in props
    },
    set: trueFn,
    deleteProperty: trueFn,
    getOwnPropertyDescriptor(_, key) {
      return {
        configurable: true,
        enumerable: true,
        get() {
          return props[key]
        },
        set: trueFn,
        deleteProperty: trueFn
      }
    },
    ownKeys() {
      return Object.keys(props)
    }
  } as ProxyHandler<any>, handler))
}