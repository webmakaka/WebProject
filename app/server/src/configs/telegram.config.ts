import { ConfigService } from '@nestjs/config';
import { ITelegramOptions } from 'telegram/telegram.interface';

export const getTelegramConfig = (
  configService: ConfigService,
): ITelegramOptions => {
  const token = configService.get('TELEGRAM_TOKEN');
  if (!token) {
    throw new Error('TELEGRAM_TOKEN не задан!');
  }
  return {
    token,
    chatId: configService.get('CHAT_ID') ?? '',
  };
};
