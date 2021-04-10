const config = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-uploaded-data",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://k1cictq7e4.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_yDhkCm6wP",
        APP_CLIENT_ID: "7k0p9k1mhg4k7lm9s5pb8gljj1",
        IDENTITY_POOL_ID: "us-east-1:93fa6c03-c6c0-41f7-9d8b-776e02b3ef94",
    },
};

export default config;