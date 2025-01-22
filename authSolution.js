function handleAuth(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      // Successful login
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Incorrect password');
      } else if (errorCode === 'auth/user-not-found') {
        alert('User not found');
      } else {
        alert(`Error: ${errorMessage}`);
      }
    });
}