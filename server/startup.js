Meteor.startup(function() {
   console.log('process.env.NODE_ENV: ' + process.env.NODE_ENV);
   console.log('process.env.MAIL_URL: ' + process.env.MAIL_URL);
   switch (process.env.NODE_ENV) { // Or use Meteor.settings
      case "development":
         console.log('******************************************************************************');
         console.log('**************** Initializing Hinchas Development Environment ****************');

         console.log('******************************************************************************');
         devStartup();
         break;

      case "PROD":
         console.log('******************************************************************************');
         console.log('********************** Initializing Mixpanel Analytics ***********************');
         console.log('******************************************************************************');
         console.log('******************************************************************************');
         console.log('**************** Initializing Hinchas PRODUCTION Environment ****************');
         console.log('******************************************************************************');
         prodStartup();
         break;

      default:
         console.log('******************************************************************************');
         console.log('************ NODE_ENV not set or wrong value. Set to DEV/PROD **************');
         console.log('******************************************************************************');
         break;
   }
});