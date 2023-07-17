class God{
    static create(){
      const Adam = new Man();
      const Eve = new Woman();
      return [Adam, Eve];
    }
  }
  class Human{
    constructor() {}
  }
  class Man extends Human{}
  class Woman extends Human{}