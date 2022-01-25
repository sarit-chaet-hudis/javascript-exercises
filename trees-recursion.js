// the functions below describe managing the toggling of
// a nested list example, found here: https://material.angular.io/components/tree/examples

class Item {
  name: String;
  isChecked: String; // true, false, partial
  children: Item[];
  parent: Item;
  trueChildren: Integer;
  falseChildren: Integer;
}

function toggleItem(item: Item) {
  // if item is partial or false, toglle to true
  // if item is true, toggle to false
  if (item.checked === "partial" || item.isChecked === "false") {
    item.isChecked = "true";
  } else {
    item.isChecked = "false";
  }

  // handling children
  if (item.children) {
    // make sure to handle inner children
    alignChildren(item);
  }
  // handling parent
  if (item.parent) {
    // not null
    alignParent(item.parent);
  }
}

function alignChildren(item: Item) {
  // receive item, make sure all children match in isChecked
  // if child has children, call it again
  for (child of item.children) {
    child.isChecked = item.isChecked;
    if (child.children) {
      alignChildren(child);
    }
  }
}

function alignParent(parent: Item) {
  // parent checks all children, if identical => parent
  // else, partial
  const firstChildStatus = parent.children[0].isChecked;
  parent.isChecked = firstChildStatus;
  for (let i = 1; i < parent.children.length - 1; i++) {
    if (parent.children[i].isChecked != firstChildStatus) {
      parent.isChecked = "partial";
      break;
    }
  }

  if (parent.parent) {
    alignParent(parent.parent);
  }
}
