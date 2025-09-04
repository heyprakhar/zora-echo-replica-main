import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// Create nodemailer transporter with Gmail SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Email template for contact form submissions
const createEmailTemplate = (formData) => {
  const { fullName, phone, eventType, eventDate, guestCount, additionalDetails } = formData;
  
  return {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `New Event Inquiry - ${eventType} for ${fullName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #1a1a1a; color: #e5e5e5; padding: 20px; border: 2px solid #d4af37;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #d4af37; font-size: 28px; margin: 0; font-weight: 300;">The Opera House</h1>
          <div style="width: 80px; height: 1px; background-color: #d4af37; margin: 10px auto;"></div>
          <p style="color: #b8b8b8; font-size: 16px; margin: 10px 0;">New Event Inquiry</p>
        </div>

        <div style="background-color: #2a2a2a; padding: 25px; border-left: 4px solid #d4af37; margin-bottom: 20px;">
          <h2 style="color: #d4af37; font-size: 20px; margin: 0 0 15px 0;">Contact Information</h2>
          <table style="width: 100%; color: #e5e5e5;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #d4af37; width: 120px;">Full Name:</td>
              <td style="padding: 8px 0;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #d4af37;">Phone:</td>
              <td style="padding: 8px 0;">${phone}</td>
            </tr>
          </table>
        </div>

        <div style="background-color: #2a2a2a; padding: 25px; border-left: 4px solid #d4af37; margin-bottom: 20px;">
          <h2 style="color: #d4af37; font-size: 20px; margin: 0 0 15px 0;">Event Details</h2>
          <table style="width: 100%; color: #e5e5e5;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #d4af37; width: 120px;">Event Type:</td>
              <td style="padding: 8px 0;">${eventType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #d4af37;">Event Date:</td>
              <td style="padding: 8px 0;">${eventDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #d4af37;">Guest Count:</td>
              <td style="padding: 8px 0;">${guestCount} guests</td>
            </tr>
          </table>
        </div>

        ${additionalDetails ? `
        <div style="background-color: #2a2a2a; padding: 25px; border-left: 4px solid #d4af37; margin-bottom: 20px;">
          <h2 style="color: #d4af37; font-size: 20px; margin: 0 0 15px 0;">Additional Details</h2>
          <p style="color: #e5e5e5; line-height: 1.6; margin: 0;">${additionalDetails}</p>
        </div>
        ` : ''}

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #444;">
          <p style="color: #b8b8b8; font-size: 14px; margin: 0;">
            This inquiry was submitted through The Opera House website contact form.
          </p>
          <p style="color: #b8b8b8; font-size: 14px; margin: 10px 0 0 0;">
            Please respond within 24 hours for the best customer experience.
          </p>
        </div>
      </div>
    `,
    text: `
      NEW EVENT INQUIRY - THE OPERA HOUSE
      
      Contact Information:
      Full Name: ${fullName}
      Phone: ${phone}
      
      Event Details:
      Event Type: ${eventType}
      Event Date: ${eventDate}
      Guest Count: ${guestCount} guests
      
      ${additionalDetails ? `Additional Details:\n${additionalDetails}\n` : ''}
      
      This inquiry was submitted through The Opera House website contact form.
    `
  };
};

// Function to send email
const sendContactEmail = async (formData) => {
  try {
    const transporter = createTransporter();
    
    // Verify transporter configuration
    await transporter.verify();
    console.log('✅ Email transporter ready');
    
    const emailOptions = createEmailTemplate(formData);
    const result = await transporter.sendMail(emailOptions);
    
    console.log('✅ Email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return { success: false, error: error.message };
  }
};

export {
  sendContactEmail,
  createTransporter
};