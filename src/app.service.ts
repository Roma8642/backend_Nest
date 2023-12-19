import {Injectable} from "@nestjs/common";

@Injectable()
export class AppService{

    getUser(){
        return [{name:'Get User'}]
    }
}