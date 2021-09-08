import { InjectionKey } from "vue";

export interface YFormContext {
  disabled?: boolean
  statusIcon?: boolean
}

export interface YFormItemContext {
  validateState: string
}

export const yFormKey: InjectionKey<YFormContext> = 'yForm' as any
export const yFormItemKey: InjectionKey<YFormItemContext> = 'yFormItem' as any