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
    store.items.find(item => item.id === id);
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
    const currentItem = this.findById(id);
    currentItem.checked = !currentItem.checked;
  };

  const findAndUpdateName = function(id,newName) {
    try {
      Item.validateName(newName);
      const currentItem = this.items.findById(id);
      currentItem.name = newName;
    } catch (error) {
      console.log('Cannot update name: {error.message}');
    }
  };

  const findAndDelete = function(id) {
    const currentItem = this.items.findById(id);
    return this.items.filter(item => item.id !== currentItem);
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
