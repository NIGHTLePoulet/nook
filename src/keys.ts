import type { Ref, InjectionKey } from 'vue'

export const modalDisplayKey: InjectionKey<Ref<Boolean>> = Symbol('modalDisplay')
