let app = null;
let analytics = null;

if (import.meta.env.PROD) {
	// Import the functions you need from the SDKs you need
	Promise.all([
		import("firebase/app"),
		import("firebase/analytics"),
	]).then(([{ initializeApp }, { getAnalytics }]) => {
		// Your web app's Firebase configuration
		// For Firebase JS SDK v7.20.0 and later, measurementId is optional

		const firebaseConfig = {
			apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
			authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
			projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
			storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
			messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID,
			appId: import.meta.env.VITE_FIREBASE_APP_ID,
			measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
		};

		// Initialize Firebase
		app = initializeApp(firebaseConfig);
		analytics = getAnalytics(app);
	});
}

export { app, analytics };

export default app;