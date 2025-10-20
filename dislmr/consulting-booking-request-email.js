function generateBookingEmail(subject) {
  const body = `
Thank you for reaching out to the Tech-Insight-Group Consulting Team!

We’re excited to learn more about your needs and explore how we can help you achieve your goals. Please complete the form below with as much detail as possible. One of our consultants will get back to you within 24 hours.

Your responses will help us tailor a solution that fits your vision and timeline.

🔹 Project & Contact Information
  - Company Name:
  - Contact Name:
  - Contact Email:
  - Contact Phone:
  - Preferred Follow-Up Method (Email / Call / Meeting):

🔹 Project Details (high-level only, no sensitive info)
  - Is this a new or existing project?(e.g., New, Existing, Not sure / exploratory):
  - Project Goals or Scope (A brief summary of what you're aiming to achieve.):
  - Preferred Start Date (When would you like to begin?):
  - Estimated Duration (e.g., 2 weeks, 3 months, 2 years, ongoing):
  - Engagement Format (Remote / In-Person / Hybrid):
  - Preferred Technologies (e.g., MS-Fabric, SQL, PyTorch, Power BI, Azure OpenAI):
  - Preferred Platforms (e.g., Microsoft Azure, AWS, Google Cloud):
  - Urgency Level (Low / Medium / High / Critical):
  - Are there any known challenges or roadblocks? (e.g., technical limitations, resource gaps, stakeholder alignment):

🔹 Project Focus: Please select the primary area(s) your project involves.
  ☐ Data (e.g., administration & development, analytics, engineering, warehousing):
  ☐ AI (e.g., machine learning, computer vision, automation, predictive modeling):
  ☐ Generative AI-powered Applications (e.g., intelligent chatbots, content generation tools, code assistants, personalized recommendation engines):
  ☐ Copilot & Copilot Studio (e.g., custom copilots, workflow automation, chat on your data):
  ☐ Visualization (e.g., dashboards, storytelling, reporting):
  ☐ Search Indexing Engine (e.g., semantic search, retrieval systems):
  ☐ Other / Combination (please specify):

Note: All solutions are customized based on the information you provide. While we strive for measurable success, outcomes may vary depending on execution, collaboration, and context.

We look forward to partnering with you!
  `.trim();

  const mailtoLink = `mailto:contact@techinsightgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return mailtoLink;
}
