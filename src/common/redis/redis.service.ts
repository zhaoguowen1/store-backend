import { ListToTreeOptions } from '../utils/types';

export function listToTree(
  source: any[],
  {
    root = 0,
    pidKey = 'pid',
    idKey = 'id',
    childKey = 'children',
  }: ListToTreeOptions,
) {
  function getNode(id: string | number) {
    const node = [];
    for (let i = 0; i < source.length; i++) {
      if (source[i][pidKey] === id) {
        const children = getNode(source[i][idKey]);
        if (children.length > 0) source[i][childKey] = children;
        node.push(source[i]);
      }
    }
    return node;
  }
  getNode(root);
}
