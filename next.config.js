const path = require("path");

module.exports = {
  env: {

    EMAILJS_SERVICE_ID: "service_olqxew8",
    EMAILJS_TEMPLATE_ID: "template_8w1q7wh",
    EMAILJS_PROFILE_ID: "08YjjYgI54gZ_DORo",
    PRISMIC_API_TOKEN:
      "MC5Yek4xa0JJQUFDUUE4b25x.77-9TAPvv73vv73vv71M77-9UHTvv71vdFfvv71C77-9Pe-_ve-_ve-_vXgJLe-_ve-_ve-_vTHvv73vv71vcg",
    PRISMIC_REPOSITORY_NAME: "my-portfolio-official",
    PRISMIC_REPOSITORY_LOCALE: "en-us",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
