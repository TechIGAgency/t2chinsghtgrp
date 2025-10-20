function generateBookingEmail(subject, price, duration) {
  const body = `
Thank you so much for booking our ${duration} Hands-On Technical Training Delivery. We sincerely appreciate your trust in our services and value the opportunity to support your continued growth and success.

To finalize your booking and ensure a seamless experience, please provide the following details:
- Company Name:
- Number of Attendees:
- Preferred Class Delivery Date:
- Preferred Class Delivery Type: (e.g. Private, Open Enrollment, On-Demand):
- Delivery Format (e.g. Remote / In-Person):
- Location (if In-Person) (e.g. City, State, or specific venue):
- Target Audience Level (e.g. Beginner, Intermediate, Advanced, Mixed):
- Primary Learning Objectives or Outcomes (e.g. for current or future projects, upskilling):
- Any Required Customization? (e.g. tailored labs, industry-specific examples, integration with internal tools):

💰 Pricing: ${price} per attendee for this ${duration} technical training class.

Within the next 24 hours, we’ll follow up to confirm your payment. Once finalized, we’ll promptly share your session logistics, including a detailed agenda, access instructions, and any applicable pre-session materials to help you prepare effectively.
  `.trim();

  const mailtoLink = `mailto:contact@techinsightgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return mailtoLink;
}
