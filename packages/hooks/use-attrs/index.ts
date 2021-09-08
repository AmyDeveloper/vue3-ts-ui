import { watchEffect } from "@vue/runtime-core"
import { ComponentInternalInstance, getCurrentInstance, reactive, shallowRef } from "vue"
import { entries } from "../../utils/util"

interface Params {
  excludeListeners?: boolean
  excludeKeys?: string[]
}

const DEFAULT_EXCLUDE_KEYS = ['class', 'style']
const LISTER_PREFIX = /^on[A_Z]/

export default (params: Params = {}) => {
  const { excludeListeners = false, excludeKeys = [] } = params
  const instance = getCurrentInstance() as ComponentInternalInstance
  const attrs = shallowRef({})
  const allExcludeKeys = excludeKeys.concat(DEFAULT_EXCLUDE_KEYS)

  instance.attrs = reactive(instance?.attrs || {})

  watchEffect(() => {
    const res = entries(instance.attrs) // [ [key, obj[key]], [key, obj[key]] ]
      .reduce((acm: any, [key, val]) => {
        if (
          !allExcludeKeys.includes(key) &&
          !(excludeListeners && LISTER_PREFIX.test(key))
        ) {
          acm[key] = val
        }
        return acm
      }, {})
    console.log('watchEffect', res)
    attrs.value = res
  })
}