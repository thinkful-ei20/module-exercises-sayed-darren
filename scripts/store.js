'use strict';
/* global Item */

const store = (function () {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  const findById = function(id) {
    console.log(store.items.find(item => item.id === id));
  };

  const addItem = function(name) {
    try {
      Item.validateName(name);
      let newItem = Item.create(name);
      this.items.push(newItem);
    } catch (error) {
      console.log((`Cannot add item: ${error.message}`));
    }
    
  };

  const findAndToggleChecked = function(id) {
    // const currentItem = this.findById(id);
    for (let i = 0; i < store.items.length; i++) {
      if (store.items[i].id === id) {
        store.items[i].checked = !store.items[i].checked;
      }
    }
  };

  const findAndUpdateName = function(id,newName) {
    try {
      Item.validateName(newName);
      for (let i = 0; i < store.items.length; i++) {
        if (store.items[i].id === id) {
          store.items[i].name = newName;
        }
      }
    } catch (error) {
      console.log(`Cannot update name: ${error.message}`);
    }
  };

  const findAndDelete = function(id) {
    let filtered = this.items.filter(item => item.id !== id);
    this.items = filtered;
  };



  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };
}() );
