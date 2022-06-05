// const firebaseConfig = {
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//   privateKey: process.env.FIREBASE_PRIVATE_KEY,
// };

const firebaseConfig = {
  type: "service_account",
  projectId: "slacklogo789",
  private_key_id: "7affe64e5d7d8956ba2bb8efba25c5b558e4fb40",
  privateKey:
    "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCb7A+A6EwOL2qi\nRk1rilZW1dsBs6dJJHZSWOCDAKcuhdbsDYrtZWrCoMlHGjGB8aGfkFgA5ddw7GOr\n1pFyAav/e4dQjkdEg4aEneSMC1AHnYi6hZQEQTODutAvVf4YJT1gTOtJhpVNALC/\nMBkBGAHIIm4nL8HXH1QZRQbnUqCLxGAurJPKRFDa1KRw9e3IPYTo6QQZ6tXzqblu\n2m/YlAJ4IAZsDOnzUEPzYsMQT5HVIDTTQM1GzCO15QK5S5SYDSyfp1zSaJKP0OC1\nKckBE014JL1WCkSwormGYZZxO9xMTAoUCgW7LtAKDDvzIjO/xT3ay/x/3GI6uFnW\nVdJFu6YzAgMBAAECggEADBZWM1eOwdDCMvdBPDN6svucITsknkJx27thGDa+PxiI\nCz+XhATHLHRbdiQdL2YkceK2N8eZlnr01RbqqoxfoYwZdtC4zKJnlLNKyuJ7n0OC\nnHcLfPLzA+TBC9JeQs/sPKFp4gbJXzFNAl0/qvqJ9NJaeLY2kC8xDU5xFRCuOndt\nLOIV1XyLQ85CcQOuNVXZ9K2fDEoieFfvmcC/6dfk4geXJVO9mWd92KQyuwvC4i2S\nUpoW5mM33TNSLspTSxck9pEahpkLUM1WBi5Q93dsHETWBx0KtW90o7Y3htql+oCp\noseqjIOJdGNdgEq9I5T1uo3zwJoL5Z+GdcSIz97uLQKBgQDYJCP3Lo9I/ZCCwYDL\na9GJG5jrkxOu8buVXyhTbooTrwTI0IZyKKPJMz2DtSQrzgsO7mSGo+ROkD26cGDA\nXoQ/JSnLtS4bU1L2TBuGnrjvU/qt/Y6tcMDRtUNZbxLWQQoWqcq4nD2Mlmd7Sy75\nBVeV8YFLehkobPqMIJMqe5OxRQKBgQC4rQYx2ycZIUoqcHC2x78vmaKld/D9HENZ\n3fHEzwcMmCez+Y5u3ZcTrHdpq52VPrbLicmH/eBjOOSCtHi+oy2R9j3r1DYpcZ6A\nMKdOw/ydmKP8WgQgyWkE6G4eHdcMsAwAsgLEju1VsjxG7yMnD3rEOqKhLCtA3++I\ndgtJapTlFwKBgQDNfe7DvvxzRL/z0M0GmcdpN1e4AOkh1qmlZgcM63dTJ37A/aAV\nQRYW4CSH59wv2YEh/PyOFZumJfTKILWbr0DEWCzYg7UGPb4OdGVnI9hnkcwvR3Yy\n55QqzM7vZG7gTI2u5lbaFZFe7FAOJHjQQIf5AtcOT1ND3/iE6SOBrGPKkQKBgQCR\nlsY1c8IFC7t+bZpOXnaYvhP9QutXf3qRVGmPcG7sPN/AANOLD2JU/jg9tC/NQt20\n5HFepoTJdEahzEkMcXQxh+EVE/2G+q2r/a9IZzW1wGo3PXfXqTEDz4FQeNHajMdJ\nnQyVjOAKGTNv8ILT/l4YaOlhCoMm5+PcvsLzI/UyDQKBgQC4k1v1MGE54wtM95jd\nEOOCmODQpxX+P0ZoCBxtIDQMN5ZR5+m7hWj95VSV8rzSWCAzS2nJivkDst0juo4D\nkawd8JP79t6Wp+l5t2/4hswM8eroMFGBRHUVe8VVWgtscNa0CJixmNgTNpAUq0iT\nnnxECpTHhd4pTgxgnKdqLRyH6w==\n-----END PRIVATE KEY-----\n",
  clientEmail: "firebase-adminsdk-cx36e@slacklogo789.iam.gserviceaccount.com",
  client_id: "104416702498290085361",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-cx36e%40slacklogo789.iam.gserviceaccount.com",
};

//.replace(/\\n/g, '\n')
export default firebaseConfig;
