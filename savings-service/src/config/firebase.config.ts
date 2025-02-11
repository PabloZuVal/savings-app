import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import serviceAccount from '../../firebase-credentials.json';

export const initializeFirebase = () => {
  try {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as ServiceAccount),
      });
    }
    return admin.firestore();
  } catch (error) {
    console.error('Error al inicializar Firebase:', error);
    throw error;
  }
};

// import * as admin from 'firebase-admin';
// import { ServiceAccount } from 'firebase-admin';
// import serviceAccount from '../../firebase-credentials.json';

// export const initializeFirebase = () => {
//   try {
//     if (!admin.apps.length) {
//       admin.initializeApp({
//         credential: admin.credential.cert(serviceAccount as ServiceAccount),
//       });
//     }
//     return admin.firestore();
//   } catch (error) {
//     console.error('Error al inicializar Firebase:', error);
//     throw error;
//   }
// };

// import * as admin from 'firebase-admin';

// export const initializeFirebase = () => {
//   // Asumiendo que tienes las credenciales en un archivo JSON
//   const serviceAccount = require('../../firebase-credentials.json');

//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//   });

//   return admin.firestore();
// };
