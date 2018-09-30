import mmyStore from "../store/mmyStore";
import inventoryStore from "../store/inventoryStore";

export default function inject(name) {
  return function decorator(Class) {
    return (...args) => {
      let props;
      switch (name) {
        case "mmyStore": {
          const { store } = mmyStore;
          props = [...args, store];
          break;
        }
        case "inventoryStore": {
          const { store } = inventoryStore;
          props = [...args, store];
          break;
        }
        default:
          props = [...args, null];
          break;
      }
      console.log(`Arguments for ${name}: args `, args);
      return new Class(...props);
    };
  };
}
