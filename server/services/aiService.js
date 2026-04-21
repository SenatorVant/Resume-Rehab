import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function analyzeResume(resume, jobDescription) {
  const completion = await client.chat.completions.create({
    model: "gpt-4.1",
    messages: [
      {
        role: "system",
        content: "You are a professional resume reviewer and career coach."
      },
      {
        role: "user",
        content: `
Analyze the resume against the job description.

Return:
1. Match Score (0-100)
2. Missing Skills
3. Improved Bullet Points
4. General Feedback

Resume:
${resume}

Job Description:
${jobDescription}
        `
      }
    ]
  });

  return completion.choices[0].message.content;
}
