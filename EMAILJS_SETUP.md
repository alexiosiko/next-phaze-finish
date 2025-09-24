# EmailJS Setup Instructions

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. Copy your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Consultation Request from {{first_name}} {{last_name}}

From: {{first_name}} {{last_name}}
Email: {{email}}
Phone: {{phone}}
Location: {{location}}

Project Description:
{{project_description}}

How they found us: {{how_found_us}}

---
This message was sent from your Next Phaze Finish website contact form.
```

4. Copy your **Template ID**

## 4. Get Public Key
1. In your EmailJS dashboard, go to "Account"
2. Find your **Public Key**

## 5. Configure Environment Variables
1. Copy `.env.example` to `.env.local`
2. Fill in your EmailJS credentials:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 6. Test the Form
1. Run your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Auto-Reply Setup (Optional)
1. Create a second template for auto-replies
2. Add another `emailjs.sendForm` call in the ContactSection component
3. Use the customer's email as the recipient

## Features Implemented
- ✅ Form validation
- ✅ Loading states with spinner
- ✅ Success/error messages
- ✅ Prevents double submission
- ✅ Mobile responsive design
- ✅ Smooth scrolling navigation