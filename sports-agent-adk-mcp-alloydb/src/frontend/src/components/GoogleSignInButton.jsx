import React, { useEffect } from "react";

export default function GoogleSignInButton({ onSignIn }) {
  useEffect(() => {
    // Load Google Sign-In script
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.google && window.google.accounts) {
        window.google.accounts.id.initialize({
          client_id: "949438643208-1hudkidv4rl4jhi2m63mlp5radph7kue.apps.googleusercontent.com",
          callback: (response) => {
            // Store the ID token
            onSignIn(response.credential);
          },
        });
        window.google.accounts.id.renderButton(
          document.getElementById("google-signin-btn"),
          { theme: "outline", size: "large" }
        );
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [onSignIn]);

  return <div id="google-signin-btn"></div>;
}