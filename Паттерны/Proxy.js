class СontentPage {
  visitContentPage(page) {
    return page;
  }
  checkButtonExist(button) {
    return button;
  }
}

class ProxyContentPage extends СontentPage {
  visitContentPage(page) {
    if (page === "google.com") {
      console.log("Forbidden");
    } else {
      super.visitContentPage();
      console.log("Page is open!");
    }
  }

  checkButtonExist(button) {
    super.checkButtonExist(button)
      ? console.log("exist")
      : console.log("not exist");
  }
}

const proxyContentPage = new ProxyContentPage();
proxyContentPage.visitContentPage("google.com");
proxyContentPage.visitContentPage("test.com");
proxyContentPage.checkButtonExist("button");
proxyContentPage.checkButtonExist(null);
