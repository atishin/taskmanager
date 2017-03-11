import { OdataFilterOperation } from 'odata-context';

export interface IFilterable<T, TONP, TReturn> {
    BeginQuery(predicate: (filterQuery: OdataFilterOperation<T, TONP, TReturn>) => any): any;
}
