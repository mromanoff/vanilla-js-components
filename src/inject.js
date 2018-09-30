const mmyStore = {
  a: 1, b: 2, title: 'MMY Store title',
};

const inventoryStore = {
  a: 10, b: 20, title: 'Inventory Store title',
};


export default function inject(name) {
  return function decorator(Class) {
    return (...args) => {
      let props;
      switch (name) {
        case 'mmyStore':
          props = [...args, mmyStore];
          break;
        case 'inventoryStore':
          props = [...args, inventoryStore];
          break;
        default:
          props = [...args];
        break;
      }
      console.log(`Arguments for ${name}: args `, args);
      //args.push(props);
      return new Class(...props);
    };
  };
}