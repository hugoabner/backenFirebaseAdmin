import firebaseAdmin, { ServiceAccount } from "firebase-admin";
import { environment } from "../environment";

/**@PatrónSingleton */
export class FirebaseConfig {

	private static instance: FirebaseConfig;
	private readonly firebaseApp: firebaseAdmin.app.App;
	
	
	/**@Metodo constructor */
	private constructor() {
	  this.firebaseApp = firebaseAdmin.initializeApp({
		credential: firebaseAdmin.credential.cert(
			environment as ServiceAccount
		),
	  });
	}
	

	/**@Metodo obtenerInstancia */
	public static getInstance(): FirebaseConfig {
	  if (!FirebaseConfig.instance) {
		FirebaseConfig.instance = new FirebaseConfig();
	  }
	  return FirebaseConfig.instance;
	}
	

	/**@Metodo obtener FirebaseApp */
	public getFirebaseApp(): firebaseAdmin.app.App {
	  return this.firebaseApp;
	}
}