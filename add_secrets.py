#!/usr/bin/env python3
import requests
import sys
import base64
from nacl import pwhash, secret, utils

def add_github_secrets(token, repo_owner, repo_name):
    """Add repository secrets to GitHub with proper encryption"""
    
    secrets_to_add = {
        "HOSTINGER_SERVER": "145.79.20.190",
        "HOSTINGER_USERNAME": "u599973389.joinalwaysfit.com",
        "HOSTINGER_PASSWORD": "Kamal(@@611@@)",
        "HOSTINGER_SERVER_DIR": "/public_html"
    }
    
    headers = {
        "Authorization": f"token {token}",
        "Accept": "application/vnd.github.v3+json",
        "X-GitHub-Api-Version": "2022-11-28"
    }
    
    base_url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/actions/secrets"
    
    for secret_name, secret_value in secrets_to_add.items():
        # Get the public key
        key_url = f"{base_url}/public-key"
        key_response = requests.get(key_url, headers=headers)
        
        if key_response.status_code != 200:
            print(f"❌ Failed to get public key: {key_response.status_code}")
            print(key_response.text)
            return False
        
        key_data = key_response.json()
        public_key = key_data.get("key")
        key_id = key_data.get("key_id")
        
        # Encrypt the secret using libsodium (nacl)
        try:
            # Decode the public key
            public_key_bytes = base64.b64decode(public_key)
            # Create the box using the public key
            from nacl.public import PublicKey, SealedBox
            public_key_obj = PublicKey(public_key_bytes)
            sealed_box = SealedBox(public_key_obj)
            # Encrypt the secret
            encrypted = sealed_box.encrypt(secret_value.encode())
            # Encode to base64
            encrypted_value = base64.b64encode(encrypted.ciphertext).decode()
        except Exception as e:
            print(f"❌ Encryption failed: {e}")
            return False
        
        # Add the secret
        put_url = f"{base_url}/{secret_name}"
        payload = {
            "encrypted_value": encrypted_value,
            "key_id": key_id
        }
        
        response = requests.put(put_url, json=payload, headers=headers)
        
        if response.status_code in [201, 204]:
            print(f"✅ Added secret: {secret_name}")
        else:
            print(f"❌ Failed to add {secret_name}: {response.status_code}")
            print(response.text)
            return False
    
    return True

if __name__ == "__main__":
    token = input("Enter your GitHub Personal Access Token: ").strip()
    
    if not token:
        print("❌ Token is required")
        sys.exit(1)
    
    print("Adding Hostinger secrets to GitHub...")
    success = add_github_secrets(token, "khalid-akhss19", "alwaysfit")
    
    if success:
        print("\n✅ All 4 secrets added successfully!")
        print("Your repo is now configured for auto-deploy to Hostinger.")
    else:
        print("\n❌ Some secrets failed to add")
        sys.exit(1)
