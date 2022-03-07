export const environment = {
  production: false,
  routes: {
    main: {
      ROUTE_MAIN: 'ads',
      ROUTE_CHOSEN_AD: "chosen_ad",
      ROUTE_MAP: 'map'
    },
    admin: {
      admin: 'admin',
      adminChild: {
        moderation: 'moderation',
        edit: 'edit',
        adminChat: 'admin_chat'
      }
    },
    client: {
      client: 'client',
      clientChild: {
        myAds: 'my_ads',
        create: 'create',
        edit: 'edit',
        chatWithAdmin: 'chat_with_admin',
      }
    }
  }
};

