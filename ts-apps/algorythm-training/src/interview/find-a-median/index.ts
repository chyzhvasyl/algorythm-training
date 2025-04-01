// https://commons.wikimedia.org/wiki/File:Finding_the_median.png#/media/File:Finding_the_median.png

export interface Tree {
  value: number;
  children?: Tree[];
}

export const tree: Tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 4 }, { value: 5 }],
    },
    {
      value: 3,
      children: [{ value: 6 }, { value: 7 }],
    },
  ],
};

function hasListEvenLength(list: number[] = []): boolean  {
  if (!list.length) return true;

  return list.length % 2 === 0;
}

function getMedian(list: number[] = []): number {
  if (list.length === 1) return list[0];
  return hasListEvenLength(list) ? (list[(list.length / 2) - 1] + list[list.length / 2]) / 2 : (list[Math.floor(list.length / 2)]);
}

function flattenTreeValues(prev: number[], current: Tree): number[] {
  if (current.value) {
    prev.push(current.value);
  }

  if (!current.children) {
    return prev;
  } else {
    return current.children.reduce(flattenTreeValues, prev);
  }
}

function getFlattedValues(tree: Tree): number[] {
  if (!tree.children) return [tree.value];

  return tree.children?.reduce(flattenTreeValues, [tree.value]);
}

export function findMedian1(tree: Tree): number {
  const treeValues: number[] = [];

  function setTreeValues(tree: Tree): void {
    if (tree.value) {
      treeValues.push(tree.value);
    }

    if (tree.children?.length) {
      for (let subTree of tree.children) {
        setTreeValues(subTree);
      }
    }
  }

  setTreeValues(tree);

  return getMedian(treeValues);
}

export function findMedian2(tree: Tree): number {
  return getMedian(getFlattedValues(tree));
}