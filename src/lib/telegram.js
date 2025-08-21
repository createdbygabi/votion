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
      `✅ Your Notion workspace &ldquo;${workspaceName}&rdquo; is now connected to votion.me\n\n` +
      `🎤 You can now send me voice messages and I&apos;ll help you manage your Notion workspace!\n\n` +
      `💡 Try saying:\n` +
      `• &ldquo;Create a page called Meeting Notes&rdquo;\n` +
      `• &ldquo;Add buy groceries to your shopping list&rdquo;\n` +
      `• &ldquo;Create a table with columns name, age, email&rdquo;`;

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

export async function notifyPaymentSuccess(userId, planType, voiceLimit) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = userId;

  console.log(`🔍 Debug: Attempting to send notification to user ${userId}`);
  console.log(`🔍 Debug: Bot token exists: ${!!botToken}`);
  console.log(`🔍 Debug: Chat ID: ${chatId}`);

  if (!botToken) {
    console.error("Missing TELEGRAM_BOT_TOKEN environment variable");
    return false;
  }

  try {
    const message =
      `🎉 **Plan Upgraded Successfully!**\n\n` +
      `✅ Your plan has been upgraded to **${planType.toUpperCase()}**\n\n` +
      `📊 New limits:\n` +
      `• Voice messages: **${voiceLimit}** per month\n` +
      `• Plan type: **${planType.toUpperCase()}**\n\n` +
      `🚀 You can now use premium features with higher limits!`;

    console.log(`🔍 Debug: Message to send:`, message);

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

    console.log(`🔍 Debug: Telegram API response status: ${response.status}`);
    console.log(`🔍 Debug: Telegram API response ok: ${response.ok}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`🔍 Debug: Telegram API error response:`, errorText);
      throw new Error(`Telegram API error: ${response.status} - ${errorText}`);
    }

    const responseData = await response.json();
    console.log(`🔍 Debug: Telegram API success response:`, responseData);

    console.log(`✅ Payment success notification sent to user ${userId}`);
    return true;
  } catch (error) {
    console.error("Failed to send payment notification:", error);
    return false;
  }
}
