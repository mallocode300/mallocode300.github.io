# Contact Form Setup Guide

Your contact form is now ready to send emails! Follow these steps to complete the setup.

## 🚀 Quick Setup (5 minutes)

### 1. Create EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up for a free account (200 emails/month included)

### 2. Set up Email Service
- In your EmailJS dashboard, click **"Add New Service"**
- Choose **Gmail** (recommended) or your email provider
- Connect your `mantomarchi300@outlook.com` account
- Copy the **Service ID** (looks like `service_abc123`)

### 3. Create Email Template
- Go to **Templates** → **Create New Template**
- Use this template:

```
Subject: Portfolio Contact: {{from_name}}

New message from your portfolio:

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Sent via Portfolio Contact Form
```

- Set **To Email**: `mantomarchi300@outlook.com`
- Copy the **Template ID** (looks like `template_xyz789`)

### 4. Get Your Public Key
- Go to **Account** tab
- Copy your **Public Key** (looks like `abc123def456`)

### 5. Update Your Code
Open `script.js` and replace these three lines:

```javascript
// Line ~631: Replace this:
emailjs.init('YOUR_PUBLIC_KEY');
// With:
emailjs.init('your_actual_public_key_here');

// Line ~651: Replace this:
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
// With:
emailjs.sendForm('your_service_id', 'your_template_id', form)
```

### 6. Test It!
- Open your website
- Fill out the contact form
- Submit it
- Check your email (including spam folder)

## ✅ What's Included

Your contact form now has:
- ✅ Real email sending to `mantomarchi300@outlook.com`
- ✅ Form validation (required fields, email format)
- ✅ Beautiful success/error notifications
- ✅ Loading states during submission
- ✅ Professional email template

## 🔧 Alternative Options

If you prefer not to use EmailJS, here are other options:

1. **Formspree** - Simple form backend
2. **Netlify Forms** - If hosting on Netlify
3. **Getform.io** - Another form service
4. **Custom backend** - Node.js with Nodemailer

## 📧 EmailJS Template Variables

Your form sends these variables to the email template:
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{message}}` - Their message

## 🎨 Notification Styles

The form shows professional notifications:
- **Green** for success
- **Red** for errors
- **Auto-dismiss** after 5 seconds
- **Modern design** matching your portfolio

## 🆓 Free Tier Limits

EmailJS free plan includes:
- 200 emails per month
- All basic features
- EmailJS branding in emails

Need more? Plans start at $10/month for 1000 emails.

---

**Questions?** Check the browser console for error messages or contact EmailJS support. 