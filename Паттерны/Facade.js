class BedroomSmartHome {
  constructor() {
    this.bedroomMainLight = false;
    this.bedroomSecondLight = false;
    this.bedroomAdditionalLight = false;
  }

  toggleMainLight() {
    this.bedroomMainLight = !this.bedroomMainLight;
  }

  toggleSecondLight() {
    this.bedroomSecondLight = !this.bedroomSecondLight;
  }

  toggleAdditionalLight() {
    this.bedroomAdditionalLight = !this.bedroomAdditionalLight;
  }
}

class KitchenSmartHome {
  constructor() {
    this.kitchenMainLight = false;
    this.kitchenSecondLight = false;
    this.kitchenAdditionalLight = false;
  }

  toggleMainLight() {
    this.kitchenMainLight = !this.kitchenMainLight;
  }

  toggleSecondLight() {
    this.kitchenSecondLight = !this.kitchenSecondLight;
  }

  toggleAdditionalLight() {
    this.kitchenAdditionalLight = !this.kitchenAdditionalLight;
  }
}

class SmartHomeFacade {
  constructor() {
    this.bedroomSmartHome = new BedroomSmartHome();
    this.kitchenSmartHome = new KitchenSmartHome();
  }

  toggleHomeLight() {
    this.bedroomSmartHome.toggleMainLight();
    this.bedroomSmartHome.toggleSecondLight();
    this.bedroomSmartHome.toggleAdditionalLight();
    this.kitchenSmartHome.toggleMainLight();
    this.kitchenSmartHome.toggleSecondLight();
    this.kitchenSmartHome.toggleAdditionalLight();
  }

  lightStatus() {
    console.log(this.bedroomSmartHome.bedroomMainLight);
    console.log(this.bedroomSmartHome.bedroomSecondLight);
    console.log(this.bedroomSmartHome.bedroomAdditionalLight);
    console.log(this.kitchenSmartHome.kitchenMainLight);
    console.log(this.kitchenSmartHome.kitchenSecondLight);
    console.log(this.kitchenSmartHome.kitchenAdditionalLight);
  }
}

const smartHomeFacade = new SmartHomeFacade();
smartHomeFacade.toggleHomeLight();
smartHomeFacade.lightStatus();
smartHomeFacade.toggleHomeLight();
smartHomeFacade.lightStatus();
