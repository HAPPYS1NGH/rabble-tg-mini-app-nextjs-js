# ETH Telegram Mini App NextJS Starter Kit

## Getting Started

This starter kit helps you create a mini application integrated with Ethereum and Telegram. Follow the steps below to set up and run the project.

## Resources

[Blog on using this Starter Kit](https://medium.com/rabble-labs/deploy-your-first-telegram-mini-app-on-ethereum-8b589f4e6411)

**For Visual Learners**
[![YouTube](http://i.ytimg.com/vi/cFLKu4sl76I/hqdefault.jpg)](https://www.youtube.com/watch?v=cFLKu4sl76I)

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Setup Guide

1. **Clone the repository or click on the "Use this template" button:**

   ```bash
   git clone https://github.com/HAPPYS1NGH/rabble-tg-mini-app-nextjs-js
   ```

2. **Navigate to the project directory:**

   ```bash
   cd rabble-tg-mini-app-nextjs-js
   ```

3. **Create a `.env.local` file in the root directory and copy the contents of `.env.sample`:**

   - Obtain the WalletConnect project ID from [WalletConnect](https://cloud.walletconnect.com/).

   - Make sure to select the App Kit.

   ```env
   NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=<your_wallet_connect_project_id>
   ```

   - According change the other environment details to development or production.

4. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   or using yarn:

   ```bash
   yarn install
   ```

5. **Start the development server:**

   Using npm:

   ```bash
   npm run dev
   ```

   or using yarn:

   ```bash
   yarn dev
   ```

6. **Open your web browser and navigate to `http://localhost:3000` to view the application.**

### Exposing Your Local Server

To test your application within Telegram, you need to expose your local server using a tunneling service like ngrok or localtunnel.

**Start the development server:**

Using npm:

```bash
npm run expose
```

or using yarn:

```bash
yarn expose
```

**Alternatively:**

You can always use ngrok or any proxy service to expose the endpoint.

### Registering Your Bot on Telegram while Development

1. **Open Telegram and search for `BotFather`.**

2. **Register a new bot by using the /newbot command and follow the prompts to choose a name and username.**

3. **While in BotFather, use the /setmenubutton command (It may not autocomplete).**

4. **Click on the bottom right square to choose the bot**
   ![Selecting the Bot](/src/assets/botfather-tut1.png?raw=true)

5. **Paste the URL for your App in which will be LocalTunnel's during development.**

6. **Set the name of the button which will be used to start the mini app.**

7. **Go to the Bot and now you can see a small button next to the chat which will bring up the Mini App.**

8. **Repeat the steps 3-7 when you have the production URL.**

---

### Registering Your Bot on Telegram on Production

0. **Deploy your App on any Platform like Vercel or Netlify**

1. **Open Telegram and search for `BotFather`.**

2. **Register a new bot by using the /newbot command and follow the prompts to choose a name and username.**

3. **While in BotFather, use the /setmenubutton command (It may not autocomplete).**

4. **Click on the bottom right square to choose the bot**
   ![Selecting the Bot](/src/assets/botfather-tut1.png?raw=true)

5. **Paste the Production URL for your App.**

6. **Set the name of the button which will be used to start the mini app.**

7. **Go to the Bot and now you can see a small button next to the chat which will bring up the Mini App.**

8. **Again go to BotFather, use the /setminiapp command (It may not autocomplete) and choose your Bot**

9. **Paste the Production URL for your Mini App.**

10. **Now you are all set for sharing your Mini App.**

## Interacting with Contracts

This starter kit provides hooks from Wagmi v2 for interacting with smart contracts on the Arbitrum network. You can use these hooks to read and write data to contracts.

## Directory Structure

The project follows a standard directory structure for a Next.js application. Here's an overview:

```
.
├── README.md
├── components.json
├── jsconfig.json
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── arbitrum.svg
│   ├── arrow.svg
│   ├── butterfly.svg
│   ├── loader.svg
│   └── rabble.svg
├── src
│   ├── app
│   │   ├── contract
│   │   │   └── page.jsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.jsx
│   │   └── page.jsx
│   ├── assets
│   │   └── Arrow.jsx
│   ├── components
│   │   ├── ErrorBoundary.jsx
│   │   ├── ErrorPage.jsx
│   │   ├── Popup.jsx
│   │   ├── shared
│   │   │   └── Navbar.jsx
│   │   └── ui
│   │       ├── button.jsx
│   │       ├── input.tsx
│   │       └── sonner.tsx
│   ├── constants
│   │   ├── abi.js
│   │   └── index.js
│   ├── containers
│   │   ├── contract
│   │   │   ├── ReadContract.jsx
│   │   │   └── WriteContract.jsx
│   │   └── home
│   │       └── Profile.jsx
│   ├── hooks
│   │   ├── useClientOnce.js
│   │   ├── useDidMount.js
│   │   └── useTelegramMock.js
│   ├── lib
│   │   └── utils.js
│   ├── providers
│   │   ├── Layout.jsx
│   │   ├── TelegramProvider.jsx
│   │   └── Web3Provider.jsx
│   └── utils
│       └── config.js
└── tailwind.config.js
```

## FAQs

### What are Telegram Mini Apps?

Web Apps inside Telegram in the form of a bot.

### What is different in Mini Apps?

Mini Apps offer Telegram-specific UI elements like Main Button, Popups, Telegram Theme Params, and Viewport. They also provide features like Telegram Authentication, Cloud Storage, and more.

### Can you tell what all things I need to do to convert my WebApp to a Mini App?

Your normal website will also work fine in most cases if you do not have in-app links to other domains.

## Support

If you encounter any issues or have questions:

- **Telegram:** [Rabble Mini App Group](https://t.me/+rFqLyk4_W-diZDZl)
- **Twitter:** [@happys1ngh](https://twitter.com/happys1ngh)
- **GitHub Issues:** [ETH Telegram Mini App Starter Kit Issues](https://github.com/HAPPYS1NGH/rabble-tg-mini-app-nextjs-js/issues)
- **Mini Apps Hackathon:** [MAHa](https://0xmaha.com)

BUIDL SHOULD NOT STOP!🏗️
