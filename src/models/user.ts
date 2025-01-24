import { Request } from 'express';

export interface User {
	email : string,
	emailVerified : boolean,
	phoneNumber : string,
	password : string,
	displayName : string,
	photoURL : string,
	disabled : boolean
}


export interface TypedRequestBody<T> extends Request {
	body: T;
}