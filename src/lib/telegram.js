export async function notifyTelegramBot(userId, workspaceName) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = userId; // The user_id from the OAuth state is the Telegram chat ID

  if (!botToken) {
    console.error("Missing TELEGRAM_BOT_TOKEN environment variable");
    return false;
  }

  try {
    const message =
      `🎉 **Notion Connected Successfully!**\n\n` +
      `✅ Your Notion workspace "${workspaceName}" is now connected to votion.me\n\n` +
      `🎤 You can now send me voice messages and I'll help you manage your Notion workspace!\n\n` +
      `💡 Try saying:\n` +
      `• "Create a page called Meeting Notes"\n` +
      `• "Add buy groceries to my shopping list"\n` +
      `• "Create a table with columns name, age, email"`;

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.status}`);
    }

    console.log(`✅ Telegram notification sent to user ${userId}`);
    return true;
  } catch (error) {
    console.error("Failed to send Telegram notification:", error);
    return false;
  }
}
