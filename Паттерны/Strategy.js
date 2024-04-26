class DesktopStrategy {
  constructor(page, element) {
    this.page = page;
    this.element = element;
  }
  runTest() {
    console.log("Test desktop");
  }
}

class TabletStrategy {
  constructor(page, element) {
    this.page = page;
    this.element = element;
  }

  runTest() {
    console.log("Test tablet");
  }
}

class MobileStrategy {
  constructor(page, element) {
    this.page = page;
    this.element = element;
  }

  runTest() {
    console.log("Test mobile");
  }
}

class TestStrategyManager {
  constructor(strategy) {
    this.strategy = strategy;
  }

  openPage() {
    console.log(`Open ${this.strategy.page}!`);
  }

  runTest() {
    this.strategy.runTest();
  }

  clickElement() {
    console.log(`Click ${this.strategy.element}!`);
  }
}

const testStrategyManagerMobile = new TestStrategyManager(
  new MobileStrategy("google.com", "<Button>Test</Button>")
);
const testStrategyManagerDesktop = new TestStrategyManager(
  new DesktopStrategy("yandex.ru", "<span>Test</span>")
);

testStrategyManagerMobile.runTest();
testStrategyManagerMobile.openPage();
testStrategyManagerMobile.clickElement();

testStrategyManagerDesktop.runTest();
testStrategyManagerDesktop.openPage();
testStrategyManagerDesktop.clickElement();
