import got from "cloudflare-scraper";
//const got = new Gt();
(async () => {
  try {
    const response = await got.get("https://pcpartpicker.com/b/6VPV3C");
    console.log(response.body);
  } catch (error) {
    console.log(error);
  }
})();
