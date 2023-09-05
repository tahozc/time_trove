# Digital Time Capsule Project - V1 Variations

## V1 Variation A: Blockchain-Oriented Time Capsule

**Mission Statement:**  
"A secure digital time capsule leveraging blockchain technology to ensure authenticity and integrity of users' memories."

### Features & Deliverables:
- User registration and authentication.
- Creation and storage of time capsules containing text, images, and videos.
- **Blockchain integration, utilizing Ethereum**:
  - Storing a hash of the capsule's content to verify its integrity.
  - Smart contract to manage the lock and unlock mechanism for each capsule.
- UI/UX improvements, including animations and feedback mechanisms.

### New Technologies to Integrate:
- **Web3.js**: A collection of libraries that allow for interaction with Ethereum blockchain using JavaScript.
- **Solidity**: A high-level language for implementing smart contracts on the Ethereum platform.

## V1 Variation B: Progressive Web App (PWA) Time Capsule

**Mission Statement:**  
"An engaging digital time capsule that offers a seamless, native-like experience across devices, allowing users to relive memories at the touch of an icon."

### Features & Deliverables:
- User registration and authentication.
- Creation and storage of time capsules containing text, images, and videos.
- **Conversion of the React web application to a PWA**:
  - Offline functionality: Users can browse their capsules even without an internet connection.
  - Push notifications: Notify users when a capsule is ready to be unlocked.
  - Installability: Users can add the app to their home screen without going through an app store.
- UI/UX improvements catering to PWA experience.

### New Technologies to Integrate:
- **Service Workers**: Scripts that run in the background, allowing for features like offline support and push notifications.
- **Web App Manifest**: A JSON file that provides metadata for the PWA, enabling user-friendly install prompts and control over how the app appears when launched.
