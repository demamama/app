from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes
import json

async def handle_order(update: Update, context: ContextTypes.DEFAULT_TYPE):
    # Декодируем данные, переданные от miniapp
    order_data = json.loads(update.message.web_app_data.data)
    user_id = order_data.get('user_id')
    order_details = order_data.get('order')

    # Отправка подтверждения заказа
    await update.message.reply_text(
        f"Ваш заказ получен:\n{order_details}"
    )

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Добро пожаловать в бот нашего магазина!")

def main():
    # Замените 'YOUR_BOT_TOKEN' на токен вашего бота
    application = Application.builder().token("7675635410:AAGEjYMl7PGeDqEGjkHOfAIRdUszPtSmESU").build()

    # Обрабатываем команду /start
    application.add_handler(CommandHandler("start", start))

    # Обрабатываем данные, полученные из WebApp
    application.add_handler(MessageHandler(filters.StatusUpdate.WEB_APP_DATA, handle_order))

    # Запуск бота
    application.run_polling()

if __name__ == '__main__':
    main()
