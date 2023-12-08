export const environment = {
  production: true,
  oauth: {
    clientId: '4650bfe3-9500-4f3f-8179-62fb8095bd17',
    authority: 'https://login.microsoftonline.com/85843054-3e44-4eb7-a1ec-47c09592d9c1/',
    redirectUri: 'http://localhost:4200',
    scopes: ['user.read', 'people.read', 'user.readbasic.all','mail.readwrite']
  }
};
