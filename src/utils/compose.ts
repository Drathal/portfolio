type ArityOneFn = (arg: any) => any
type LastFnReturnType<T extends any[]> = ReturnType<T[0]>

function compose<T extends ArityOneFn[]>(...fns: T) {
  return (...args: any): LastFnReturnType<T> => {
    return fns.reduceRight((arg: any, f: any) => {
      return Array.isArray(arg) ? f(...arg) : f(arg)
    }, args)
  }
}

export default compose
