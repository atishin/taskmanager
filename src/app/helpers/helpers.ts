export const Helpers = {
    isFunction(object: any): boolean {
        return object && typeof object === 'function';
    },
    getValue(prop: any, path: string[]) {
        let result = prop;
        for (const key of path) {
            result = result[key];
        }
        return result;
    },
    sort<T>(path: string[]): (a: T, b: T) => number {
        return (a: T, b: T) => {
            const first = Helpers.getValue(a, path);
            const second = Helpers.getValue(b, path);
            if (first > second) {
                return 1;
            } else if (second > first) {
                return -1;
            }
            return 0;
        };
    }
};
