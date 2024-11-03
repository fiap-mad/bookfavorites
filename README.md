Projeto feito com [**Expo**](https://expo.dev)

Neste projeto é utilizado o módulo [Firestore](https://firebase.google.com/products/firestore) do [`Firebase`](https://firebase.google.com/)

# Configuração
Na raiz do seu projeto, crie um arquivo `.env` e defina as seguintes variáveis de ambiente:
```env
EXPO_PUBLIC_FIREBASE_API_KEY=<sua configuração do firebase>
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=<sua configuração do firebase>
EXPO_PUBLIC_FIREBASE_PROJECT_ID=<sua configuração do firebase>
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=<sua configuração do firebase>
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<sua configuração do firebase>
EXPO_PUBLIC_FIREBASE_APP_ID=<sua configuração do firebase>
```

# Executando
Primeiramente, instale os pacotes
```bash
npm install
```

Para rodar o projeto
```bash
npm start
```