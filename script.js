/*
  Md Shahalom personal website settings
  1. Replace the example links below with your real profile links.
  2. Save the file and upload it again to GitHub.
*/
const PROFILE_LINKS = {
  youtube: "https://www.youtube.com/",   // Replace with your YouTube channel URL
  facebook: "https://www.facebook.com/", // Replace with your Facebook profile/page URL
  whatsapp: "https://wa.me/",            // Replace with https://wa.me/8801XXXXXXXXX (country code + number, no + or spaces)
};

document.addEventListener("DOMContentLoaded", () => {
  const languageToggle = document.getElementById("languageToggle");
  let currentLanguage = "bn";

  function setLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;
    document.querySelectorAll("[data-en][data-bn]").forEach((element) => {
      element.textContent = element.dataset[language];
    });
    languageToggle.textContent = language === "bn" ? "EN" : "বাংলা";
    languageToggle.setAttribute(
      "aria-label",
      language === "bn" ? "Switch to English" : "বাংলায় পরিবর্তন করুন"
    );
    document.title = language === "bn"
      ? "Md Shahalom | ব্যক্তিগত ওয়েবসাইট"
      : "Md Shahalom | Personal Website";
  }

  languageToggle.addEventListener("click", () => {
    setLanguage(currentLanguage === "bn" ? "en" : "bn");
  });

  document.querySelectorAll("[data-social]").forEach((link) => {
    const platform = link.dataset.social;
    if (PROFILE_LINKS[platform]) link.href = PROFILE_LINKS[platform];
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  setLanguage("bn");
});
