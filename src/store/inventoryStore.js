class InventoryStore {
  store = {
    a: 11111,
    b: 22222,
    title: "Inventory Store Title"
  };
}

const inventoryStore = new InventoryStore(); // export as singleton
export default inventoryStore;
