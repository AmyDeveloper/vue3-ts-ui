import { PropType } from 'vue';
declare type IButton = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default';
declare const _default: import("vue").DefineComponent<{
    name: {
        type: PropType<IButton>;
        default: string;
        validator: (val: string) => boolean;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    disabled: BooleanConstructor;
    loading: BooleanConstructor;
    round: BooleanConstructor;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    name: IButton;
    icon: string;
    disabled: boolean;
    loading: boolean;
    round: boolean;
} & {}>, {
    name: IButton;
    icon: string;
    disabled: boolean;
    loading: boolean;
    round: boolean;
}>;
export default _default;
