import os
from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update
from telegram.ext import ApplicationBuilder, CommandHandler, MessageHandler, CallbackQueryHandler, filters, ContextTypes

BOT_TOKEN = "8477950978:AAFiL-NqRn9As6tFDdO2AUFwh0ZXUl2ZwlQ"  # Replace with your actual token

# 🔹 START MENU
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("🌐 Open Website", url="https://diplomacampus.vercel.app")],
        [InlineKeyboardButton("📚 Branch Notes", callback_data="branches")]
    ]
    await update.message.reply_text(
        """🎓 *Diploma Campus*

Your complete study hub 🚀

📘 Notes | 📄 PYQs | 🔥 Important | 🧠 Revision

👉 Type keywords:
notes, pyqs, important, revision, syllabus""",
        reply_markup=InlineKeyboardMarkup(keyboard),
        parse_mode="Markdown"
    )

# 🔹 BUTTON MENU
async def button(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    if query.data == "branches":
        keyboard = [
            [InlineKeyboardButton("💻 CSE", url="https://diplomacampus.vercel.app/cse.html")],
            [InlineKeyboardButton("⚙️ Mechanical", url="https://diplomacampus.vercel.app/mech.html")],
            [InlineKeyboardButton("🚙 Automobile", url="https://diplomacampus.vercel.app/auto.html")],
            [InlineKeyboardButton("🏗️ Civil", url="https://diplomacampus.vercel.app/civil.html")],
            [InlineKeyboardButton("⚡ Electrical", url="https://diplomacampus.vercel.app/ee.html")],
            [InlineKeyboardButton("📡 ECE", url="https://diplomacampus.vercel.app/ece.html")],
            [InlineKeyboardButton("🔌 EEE", url="https://diplomacampus.vercel.app/eee.html")],
            [InlineKeyboardButton("🔙 Back", callback_data="back_main")]
        ]
        await query.edit_message_text(
            "📚 *Select Your Branch:*",
            reply_markup=InlineKeyboardMarkup(keyboard),
            parse_mode="Markdown"
        )
    elif query.data == "back_main":
        keyboard = [
            [InlineKeyboardButton("🌐 Open Website", url="https://diplomacampus.vercel.app")],
            [InlineKeyboardButton("📚 Branch Notes", callback_data="branches")]
        ]
        await query.edit_message_text(
            "🎓 *Diploma Campus Menu*",
            reply_markup=InlineKeyboardMarkup(keyboard),
            parse_mode="Markdown"
        )

# 🔹 WELCOME NEW MEMBERS (with name)
async def welcome_new_members(update: Update, context: ContextTypes.DEFAULT_TYPE):
    for new_member in update.message.new_chat_members:
        # Skip if the new member is the bot itself
        if new_member.id == context.bot.id:
            continue
        first_name = new_member.first_name
        username = f"@{new_member.username}" if new_member.username else first_name
        welcome_text = (
            f"🎉 *Welcome to Diploma Campus, {first_name}!* 🎉\n\n"
            f"📚 Get notes, PYQs, syllabus & more.\n"
            f"👉 Type *notes*, *pyqs*, *important*, *revision*, or *syllabus* to get started.\n"
            f"🌐 Or visit our website: https://diplomacampus.vercel.app"
        )
        await update.message.reply_text(welcome_text, parse_mode="Markdown")

# 🔹 AUTO KEYWORD REPLY (case‑insensitive)
async def auto_reply(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not update.message:
        return
    text = update.message.text.lower()

    notes_keywords = ["note", "notes", "study", "material", "pdf", "lecture", "class notes", "handwritten", "ebook", "study notes", "study material", "download notes", "notes pdf", "subject notes", "chapter notes", "bhai notes", "notes chahiye"]
    pyq_keywords = ["pyq", "pyqs", "previous year", "previous questions", "past paper", "old paper", "last year paper", "question paper", "question bank", "model paper", "solved papers", "pyq bhejo"]
    important_keywords = ["important", "imp", "most important", "exam questions", "expected questions", "guess paper", "high weightage", "sure questions", "important batao"]
    revision_keywords = ["micro", "short notes", "revision", "quick", "summary", "revision notes", "last revision", "one shot", "crash course", "fast revision"]
    syllabus_keywords = ["syllabus", "course", "subjects", "curriculum", "subjects list", "topics", "chapters"]

    if any(word in text for word in notes_keywords):
        keyboard = [[InlineKeyboardButton("CSE", url="https://diplomacampus.vercel.app/cse.html")],
                    [InlineKeyboardButton("Mechanical", url="https://diplomacampus.vercel.app/mech.html")],
                    [InlineKeyboardButton("Automobile", url="https://diplomacampus.vercel.app/auto.html")],
                    [InlineKeyboardButton("Civil", url="https://diplomacampus.vercel.app/civil.html")]]
        await update.message.reply_text(
            "📚 *Notes Available*\n\nAccess all branches 👇\n\n🌐 https://diplomacampus.vercel.app",
            reply_markup=InlineKeyboardMarkup(keyboard),
            parse_mode="Markdown"
        )
    elif any(word in text for word in pyq_keywords):
        await update.message.reply_text("📄 *PYQs Available*\n\n🌐 https://diplomacampus.vercel.app", parse_mode="Markdown")
    elif any(word in text for word in important_keywords):
        await update.message.reply_text("🔥 *Important Questions*\n\n🌐 https://diplomacampus.vercel.app", parse_mode="Markdown")
    elif any(word in text for word in revision_keywords):
        await update.message.reply_text("🧠 *Revision Notes*\n\n🌐 https://diplomacampus.vercel.app", parse_mode="Markdown")
    elif any(word in text for word in syllabus_keywords):
        await update.message.reply_text("📘 *Syllabus*\n\n🌐 https://diplomacampus.vercel.app", parse_mode="Markdown")
    else:
        await update.message.reply_text("❗ Try: notes | pyqs | important | revision | syllabus")

# 🔹 RUN BOT
if __name__ == "__main__":
    if not BOT_TOKEN:
        raise ValueError("BOT_TOKEN is not set.")
    app = ApplicationBuilder().token(BOT_TOKEN).build()

    app.add_handler(CommandHandler("start", start))
    app.add_handler(CallbackQueryHandler(button))
    app.add_handler(MessageHandler(filters.StatusUpdate.NEW_CHAT_MEMBERS, welcome_new_members))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, auto_reply))

    print("✅ Bot running...")
    app.run_polling()