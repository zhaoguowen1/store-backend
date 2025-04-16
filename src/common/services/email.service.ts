import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemail from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemail.Transporter;

  constructor(private config: ConfigService) {
    this.transporter = nodemail.createTransport({
      host: config.get<string>('EMAIL_HOST'),
      port: config.get<number>('EMAIL_PORT'),
      secure: config.get<boolean>('EMAIL_SECURE'),
      auth: {
        user: config.get<string>('EMAIL_USER'),
        pass: config.get<string>('EMAIL_PASS'),
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  /**
   * 发送邮件
   *
   * @param email 收件人邮箱
   * @param subject 邮件主题
   * @param html 邮件正文，可选
   * @returns 返回一个 Promise 对象，解析后得到一个包含验证码和邮件信封信息的对象
   * @throws HttpException 当邮件发送失败时，会抛出一个 HttpException 异常
   */
  sendEmail(
    email: string,
    subject: string,
    html?: string,
  ): Promise<Record<string, string>> {
    const code = Math.random().toString().slice(-6);
    const mailOptions = {
      from: this.config.get<string>('EMAIL_USER'),
      to: email,
      text: `用户验证码为：${code}，有效期为5分钟，请及时使用!`,
      subject,
      html,
    };
    return new Promise((resolve, reject) => {
      this.transporter.sendMail(
        mailOptions,
        (error: Error, info: { envelope: Record<string, string[]> }) => {
          if (error) {
            reject(
              new HttpException(
                `发送邮件失败:${error}`,
                HttpStatus.INTERNAL_SERVER_ERROR,
              ),
            );
          } else {
            resolve({
              code,
              ...info.envelope,
            });
          }
        },
      );
    });
  }
}
