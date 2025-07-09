// EmailJS Configuration
// Follow the setup instructions below, then replace the placeholder values

const EMAIL_CONFIG = {
    // Get this from https://dashboard.emailjs.com/admin/account
    PUBLIC_KEY: 'Gn4bT3hnMtZKvhiv-',
    
    // Get this from https://dashboard.emailjs.com/admin
    SERVICE_ID: 'service_kjy8cl3',
    
    // Get this from https://dashboard.emailjs.com/admin/templates
    TEMPLATE_ID: 'template_qxq2y5u'
};

// Update the main script.js file with these values
// Replace 'YOUR_PUBLIC_KEY' with EMAIL_CONFIG.PUBLIC_KEY
// Replace 'YOUR_SERVICE_ID' with EMAIL_CONFIG.SERVICE_ID  
// Replace 'YOUR_TEMPLATE_ID' with EMAIL_CONFIG.TEMPLATE_ID

/*
SETUP INSTRUCTIONS:

1. GO TO EMAILJS.COM
   - Visit https://www.emailjs.com/
   - Click "Sign Up" and create a free account

2. ADD EMAIL SERVICE
   - Go to https://dashboard.emailjs.com/admin
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, Yahoo, etc.)
   - Follow the setup instructions for your email provider
   - Note down the SERVICE_ID (e.g., 'service_abc123')

3. CREATE EMAIL TEMPLATE
   - Go to https://dashboard.emailjs.com/admin/templates
   - Click "Create New Template"
   - Set up your template with these variables:
     * {{from_name}} - sender's name
     * {{from_email}} - sender's email
     * {{message}} - the message content
   
   Example template:
   ---
   Subject: New Contact Form Message from {{from_name}}
   
   You have received a new message from your portfolio contact form:
   
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   
   ---
   
   - Set the "To Email" to: mantomarchi300@outlook.com
   - Note down the TEMPLATE_ID (e.g., 'template_xyz789')

4. GET PUBLIC KEY
   - Go to https://dashboard.emailjs.com/admin/account
   - Copy your Public Key
   - Note down the PUBLIC_KEY (e.g., 'abc123def456')

5. UPDATE YOUR FILES
   - Replace the placeholder values in script.js:
     * Replace 'YOUR_PUBLIC_KEY' with your actual public key
     * Replace 'YOUR_SERVICE_ID' with your actual service ID
     * Replace 'YOUR_TEMPLATE_ID' with your actual template ID

6. TEST THE FORM
   - Open your website and test the contact form
   - Check your email (including spam folder) for the test message

TROUBLESHOOTING:
- Make sure all IDs are correct and in quotes
- Check the browser console for any error messages
- Verify your email service is properly connected in EmailJS dashboard
- EmailJS free plan allows 200 emails per month
*/ 