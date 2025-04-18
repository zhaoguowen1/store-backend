import { RedisKeyPrefix } from '../enmus/redis-key.enum';
import { ListToTreeOptions } from './types';

export function getRedisKey(
  moduleKey: RedisKeyPrefix,
  id?: number | string,
): string {
  return `${moduleKey}${id || ''}`;
}

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
