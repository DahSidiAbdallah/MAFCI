# EmailJS Setup for MAFCI Contact Form

## Overview
The contact form now uses EmailJS to send emails directly from the client-side to info@mafci.mr. This eliminates the need for a backend server to handle email sending.

## Setup Instructions

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Set up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your email provider
5. Note down the **Service ID** (e.g., `service_abc1234`)

### 3. Create Email Template
1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}} <{{from_email}}>
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the MAFCI website contact form.
Reply to: {{reply_to}}
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz5678`)

### 4. Get Public Key
1. Go to "Account" > "General" in your EmailJS dashboard
2. Find your **Public Key** (e.g., `user_abc123xyz`)

### 5. Update Environment Variables
1. Open the `.env` file in the project root
2. Replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 6. Test the Contact Form
1. Build and run the project
2. Fill out the contact form and submit
3. Check that emails are received at info@mafci.mr

## How It Works

When a user submits the contact form:

1. **Form Data Collected**: Name, email, subject, and message
2. **EmailJS Parameters**: The form data is formatted into EmailJS template parameters
3. **Email Sent**: EmailJS sends the email using your configured email service
4. **User Feedback**: Success or error message is shown to the user
5. **Reply-To Set**: The email will have the user's email as the reply-to address

## Key Features

- **Direct Email Delivery**: Emails go directly to info@mafci.mr
- **User Email as Reply-To**: Easy to reply directly to the person who contacted you
- **Form Validation**: Required fields are validated before sending
- **Loading States**: Users see loading feedback while email is being sent
- **Error Handling**: Clear error messages if email fails to send
- **Multi-language Support**: Form works in both French and Arabic

## Security Notes

- EmailJS keys are safe to expose on the client-side
- Rate limiting is handled by EmailJS
- The service is designed for client-side email sending
- No sensitive data is exposed in the frontend code

## Troubleshooting

If emails are not sending:
1. Check that all environment variables are set correctly
2. Verify your EmailJS service is active and properly configured
3. Check the browser console for any error messages
4. Ensure your email service (Gmail, etc.) is properly connected to EmailJS
5. Check EmailJS dashboard for delivery status and error logs
