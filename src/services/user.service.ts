import  firebaseAdmin  from 'firebase-admin';
import { FirebaseConfig } from "../config/firebase";
import { User } from '../models/user';

export class UserService {
	private readonly firebase : firebaseAdmin.app.App;
	
	constructor () {
		this.firebase = FirebaseConfig.getInstance().getFirebaseApp();
	}

	async createUser(data : User): Promise<firebaseAdmin.auth.UserRecord> {
		return this.firebase.auth().createUser(data);
	}

	async getUsers(): Promise<firebaseAdmin.auth.UserRecord[]> {
		const listUsersResult = await this.firebase.auth().listUsers();
		return listUsersResult.users;
	}
	
	async listAllUsers(nextPageToken?: string): Promise<void> {
		try {
			const listUsersResult = await this.firebase.auth().listUsers(1000, nextPageToken);
			listUsersResult.users.forEach((userRecord) => {
				console.log('user', userRecord.toJSON());
			});
			if (listUsersResult.pageToken) {
				await this.listAllUsers(listUsersResult.pageToken);
			}
		} catch (error) {
			console.log('Error listing users:', error);
		}
	}
}