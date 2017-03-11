export interface IOdataModelWrapper<T> {
    '@odata.count': number;
    value: T;
}
