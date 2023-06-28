import cron from 'node-cron';

cron.schedule('* * * * *', () => {
  // Your cron job logic goes here
  console.log('Cron job running...');
});
