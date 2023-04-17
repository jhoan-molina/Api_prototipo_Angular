import * as _ from 'lodash';
import { IEvent } from '../interfaces/ievent.interface';

export class Event implements IEvent{

    constructor (data : any) {
        _.set(this, 'data', data);
    }


    get id(): any {
        return _.get(this, 'data.id');
    }   

    set id(value: string){
        _.set(this, 'data.id', value);
    }

    get title(): any {
        return _.get(this, 'data.title');
    }

    set title(value: string){
        _.set(this, 'data.title', value);
    }

    /*get inicio(): Date {
        const x = "data.inicio";
        return _.get(this, data.inicio);
    }*/

    set start(value: Date){
        _.set(this, 'data.start', value);
    }

    /*get fin(): Date {
        return _.get(this, 'fin');
    }*/

    set end(value: Date){
        _.set(this, 'data.fin', value);
    }

    getData(){
        return _.get(this, 'data');
    }

}