"use server";

import fs from "fs/promises";
import path from "path";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function saveContactMessage(data: ContactFormData) {
  try {
    // Only write to messages.json in development (Vercel production has a read-only filesystem)
    if (process.env.NODE_ENV !== "production") {
      const filePath = path.join(process.cwd(), "messages.json");
      let messages: Array<ContactFormData & { timestamp: string }> = [];

      try {
        const fileContent = await fs.readFile(filePath, "utf-8");
        messages = JSON.parse(fileContent);
      } catch (err) {
        // File does not exist or is invalid JSON; start with an empty array
      }

      messages.push({
        ...data,
        timestamp: new Date().toISOString(),
      });

      await fs.writeFile(filePath, JSON.stringify(messages, null, 2), "utf-8");
    } else {
      console.log("Production form submission:", data);
    }
    return { success: true };
  } catch (error) {
    console.error("Error saving local contact message:", error);
    // Return success: true so we do not block the email forwarding step in production
    return { success: true, error: "Failed to save message locally." };
  }
}
