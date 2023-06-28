import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://mail.tribearc.com/api/sms/get_balance.php',
      changeOrigin: true,
    })
  );
}
