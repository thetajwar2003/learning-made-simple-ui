import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: process.env.NEXT_PUBLIC_REGION,
    userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_APP_CLIENT_ID,
  },
  API: {
    endpoints: [
      {
        name: 'api',
        endpoint: process.env.NEXT_PUBLIC_API_URL,
        region: process.env.NEXT_PUBLIC_REGION,
      },
    ],
  },
});
