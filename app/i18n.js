import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      language: "EN",
      languageAfterChange: "ქარ",
      aboutUs: "About us",
      aboutUsText:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit officia provident itaque molestias labore eum doloremque veritatis! Excepturi corrupti ullam soluta necessitatibus reprehenderit placeat odit iste! Minima omnis beatae repellendus!",
      getInTouch: "Get in touch",
      location: "Location :",
      address: "0926k 4th block building, king Avenue, New York City.",
      contact: "Contact :",
      phoneNumber: "+121 098 8907 9987",
      emailAddress: "info@example.com",
      quickLinks: "Quick links",
      home: "Home",
      about: "About",
      blog: "Blog",
      help: "Help",
      contactLink: "Contact",
      signUp: "Sign up for your offers",
      signUpText:
        "By subscribing to our mailing list you will always get latest news and updates from us.",
      emailPlaceholder: "Email",
      submitButton: "Submit",

      main: "Home",
      products: "Products",
      profile: "Profile",
      Cart: "My Cart",
      everythingInOneStore: "Everything in one Store",
      somethingNew: "Want to try something new?",
      shopNow: "SHOP NOW",
    },
  },

  ge: {
    translation: {
      language: "GEO",
      languageAfterChange: "EN",
      aboutUs: "ჩვენ შესახებ",
      aboutUsText:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit officia provident itaque molestias labore eum doloremque veritatis! Excepturi corrupti ullam soluta necessitatibus reprehenderit placeat odit iste! Minima omnis beatae repellendus!",
      getInTouch: "კონტაქტი",
      location: "ლოკაცია :",
      address: "0926k მეოთხე ბლოკი, king Avenue, ნიუ-იორკი.",
      contact: "კონტაქტი :",
      phoneNumber: "+121 098 8907 9987",
      emailAddress: "info@example.com",
      quickLinks: "ნავიგაცია",
      home: "მთავარი",
      about: "ჩვენ შესახებ",
      blog: "ბლოგი",
      help: "დახმარება",
      contactLink: "კონტაქტი",
      signUp: "გამოწერა",
      signUpText: "გამოწერის შემდეგ ჩვენგან მიიღებთ აცუილებელ ინფორმაციებს",
      emailPlaceholder: "იმეილი",
      submitButton: "დადასტურება",
      main: "მთავარი",
      products: "პროდუქტები",
      profile: "პროფილი",
      Cart: "ჩემი კალათა",
      everythingInOneStore: "ყველაფერი ერთგან",
      somethingNew: "შეიტანე ცვლილება",
      shopNow: "დაიწყე შოპინგი",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
