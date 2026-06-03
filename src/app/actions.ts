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
    return { success: true };
  } catch (error) {
    console.error("Error saving local contact message:", error);
    return { success: false, error: "Failed to save message locally." };
  }
}
