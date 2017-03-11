import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { OdataMetadata } from 'odata-context';
import * as $ from 'jquery';
import { IOdataSets } from './../models/core';

@Injectable()
export class OdataService {
    private metadata: OdataMetadata<IOdataSets>;
    private url: string = 'http://tas.ddnsfree.com:40010/odata';

    constructor(private $http: Http) {
        this.metadata = new OdataMetadata<IOdataSets>(this.url, this.$http);
    }

    public async getContext() {
        return await this.metadata.getContext();
    }
}
