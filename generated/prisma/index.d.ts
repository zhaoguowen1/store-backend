
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserOnRole
 * 
 */
export type UserOnRole = $Result.DefaultSelection<Prisma.$UserOnRolePayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model RoleOnPermission
 * 
 */
export type RoleOnPermission = $Result.DefaultSelection<Prisma.$RoleOnPermissionPayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model PermissionApi
 * 
 */
export type PermissionApi = $Result.DefaultSelection<Prisma.$PermissionApiPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userOnRole`: Exposes CRUD operations for the **UserOnRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserOnRoles
    * const userOnRoles = await prisma.userOnRole.findMany()
    * ```
    */
  get userOnRole(): Prisma.UserOnRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roleOnPermission`: Exposes CRUD operations for the **RoleOnPermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoleOnPermissions
    * const roleOnPermissions = await prisma.roleOnPermission.findMany()
    * ```
    */
  get roleOnPermission(): Prisma.RoleOnPermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permissionApi`: Exposes CRUD operations for the **PermissionApi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PermissionApis
    * const permissionApis = await prisma.permissionApi.findMany()
    * ```
    */
  get permissionApi(): Prisma.PermissionApiDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserOnRole: 'UserOnRole',
    Role: 'Role',
    RoleOnPermission: 'RoleOnPermission',
    Permission: 'Permission',
    PermissionApi: 'PermissionApi'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userOnRole" | "role" | "roleOnPermission" | "permission" | "permissionApi"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserOnRole: {
        payload: Prisma.$UserOnRolePayload<ExtArgs>
        fields: Prisma.UserOnRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserOnRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserOnRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnRolePayload>
          }
          findFirst: {
            args: Prisma.UserOnRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserOnRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnRolePayload>
          }
          findMany: {
            args: Prisma.UserOnRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnRolePayload>[]
          }
          create: {
            args: Prisma.UserOnRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnRolePayload>
          }
          createMany: {
            args: Prisma.UserOnRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserOnRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnRolePayload>
          }
          update: {
            args: Prisma.UserOnRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnRolePayload>
          }
          deleteMany: {
            args: Prisma.UserOnRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserOnRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserOnRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnRolePayload>
          }
          aggregate: {
            args: Prisma.UserOnRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserOnRole>
          }
          groupBy: {
            args: Prisma.UserOnRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserOnRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserOnRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserOnRoleCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      RoleOnPermission: {
        payload: Prisma.$RoleOnPermissionPayload<ExtArgs>
        fields: Prisma.RoleOnPermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleOnPermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleOnPermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleOnPermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleOnPermissionPayload>
          }
          findFirst: {
            args: Prisma.RoleOnPermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleOnPermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleOnPermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleOnPermissionPayload>
          }
          findMany: {
            args: Prisma.RoleOnPermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleOnPermissionPayload>[]
          }
          create: {
            args: Prisma.RoleOnPermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleOnPermissionPayload>
          }
          createMany: {
            args: Prisma.RoleOnPermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleOnPermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleOnPermissionPayload>
          }
          update: {
            args: Prisma.RoleOnPermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleOnPermissionPayload>
          }
          deleteMany: {
            args: Prisma.RoleOnPermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleOnPermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleOnPermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleOnPermissionPayload>
          }
          aggregate: {
            args: Prisma.RoleOnPermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoleOnPermission>
          }
          groupBy: {
            args: Prisma.RoleOnPermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleOnPermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleOnPermissionCountArgs<ExtArgs>
            result: $Utils.Optional<RoleOnPermissionCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      PermissionApi: {
        payload: Prisma.$PermissionApiPayload<ExtArgs>
        fields: Prisma.PermissionApiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionApiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionApiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionApiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionApiPayload>
          }
          findFirst: {
            args: Prisma.PermissionApiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionApiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionApiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionApiPayload>
          }
          findMany: {
            args: Prisma.PermissionApiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionApiPayload>[]
          }
          create: {
            args: Prisma.PermissionApiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionApiPayload>
          }
          createMany: {
            args: Prisma.PermissionApiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PermissionApiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionApiPayload>
          }
          update: {
            args: Prisma.PermissionApiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionApiPayload>
          }
          deleteMany: {
            args: Prisma.PermissionApiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionApiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PermissionApiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionApiPayload>
          }
          aggregate: {
            args: Prisma.PermissionApiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermissionApi>
          }
          groupBy: {
            args: Prisma.PermissionApiGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionApiGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionApiCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionApiCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userOnRole?: UserOnRoleOmit
    role?: RoleOmit
    roleOnPermission?: RoleOnPermissionOmit
    permission?: PermissionOmit
    permissionApi?: PermissionApiOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    roles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnRoleWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
    permission: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
    permission?: boolean | RoleCountOutputTypeCountPermissionArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnRoleWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountPermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleOnPermissionWhereInput
  }


  /**
   * Count Type PermissionCountOutputType
   */

  export type PermissionCountOutputType = {
    roles: number
    permissionApi: number
  }

  export type PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | PermissionCountOutputTypeCountRolesArgs
    permissionApi?: boolean | PermissionCountOutputTypeCountPermissionApiArgs
  }

  // Custom InputTypes
  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleOnPermissionWhereInput
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountPermissionApiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionApiWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    freezed: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    freezed: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    salt: string | null
    email: string | null
    freezed: number | null
    avatar: string | null
    desc: string | null
    createTime: Date | null
    updateTime: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    salt: string | null
    email: string | null
    freezed: number | null
    avatar: string | null
    desc: string | null
    createTime: Date | null
    updateTime: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    salt: number
    email: number
    freezed: number
    avatar: number
    desc: number
    createTime: number
    updateTime: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    freezed?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    freezed?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    salt?: true
    email?: true
    freezed?: true
    avatar?: true
    desc?: true
    createTime?: true
    updateTime?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    salt?: true
    email?: true
    freezed?: true
    avatar?: true
    desc?: true
    createTime?: true
    updateTime?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    salt?: true
    email?: true
    freezed?: true
    avatar?: true
    desc?: true
    createTime?: true
    updateTime?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    salt: string
    email: string
    freezed: number
    avatar: string
    desc: string
    createTime: Date
    updateTime: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    salt?: boolean
    email?: boolean
    freezed?: boolean
    avatar?: boolean
    desc?: boolean
    createTime?: boolean
    updateTime?: boolean
    roles?: boolean | User$rolesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    salt?: boolean
    email?: boolean
    freezed?: boolean
    avatar?: boolean
    desc?: boolean
    createTime?: boolean
    updateTime?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "salt" | "email" | "freezed" | "avatar" | "desc" | "createTime" | "updateTime", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | User$rolesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      roles: Prisma.$UserOnRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      salt: string
      email: string
      freezed: number
      avatar: string
      desc: string
      createTime: Date
      updateTime: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly salt: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly freezed: FieldRef<"User", 'Int'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly desc: FieldRef<"User", 'String'>
    readonly createTime: FieldRef<"User", 'DateTime'>
    readonly updateTime: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.roles
   */
  export type User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnRole
     */
    select?: UserOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnRole
     */
    omit?: UserOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnRoleInclude<ExtArgs> | null
    where?: UserOnRoleWhereInput
    orderBy?: UserOnRoleOrderByWithRelationInput | UserOnRoleOrderByWithRelationInput[]
    cursor?: UserOnRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOnRoleScalarFieldEnum | UserOnRoleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserOnRole
   */

  export type AggregateUserOnRole = {
    _count: UserOnRoleCountAggregateOutputType | null
    _avg: UserOnRoleAvgAggregateOutputType | null
    _sum: UserOnRoleSumAggregateOutputType | null
    _min: UserOnRoleMinAggregateOutputType | null
    _max: UserOnRoleMaxAggregateOutputType | null
  }

  export type UserOnRoleAvgAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type UserOnRoleSumAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type UserOnRoleMinAggregateOutputType = {
    userId: number | null
    roleId: number | null
    createTime: Date | null
    updateTime: Date | null
  }

  export type UserOnRoleMaxAggregateOutputType = {
    userId: number | null
    roleId: number | null
    createTime: Date | null
    updateTime: Date | null
  }

  export type UserOnRoleCountAggregateOutputType = {
    userId: number
    roleId: number
    createTime: number
    updateTime: number
    _all: number
  }


  export type UserOnRoleAvgAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserOnRoleSumAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserOnRoleMinAggregateInputType = {
    userId?: true
    roleId?: true
    createTime?: true
    updateTime?: true
  }

  export type UserOnRoleMaxAggregateInputType = {
    userId?: true
    roleId?: true
    createTime?: true
    updateTime?: true
  }

  export type UserOnRoleCountAggregateInputType = {
    userId?: true
    roleId?: true
    createTime?: true
    updateTime?: true
    _all?: true
  }

  export type UserOnRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOnRole to aggregate.
     */
    where?: UserOnRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnRoles to fetch.
     */
    orderBy?: UserOnRoleOrderByWithRelationInput | UserOnRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserOnRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserOnRoles
    **/
    _count?: true | UserOnRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserOnRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserOnRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserOnRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserOnRoleMaxAggregateInputType
  }

  export type GetUserOnRoleAggregateType<T extends UserOnRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserOnRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserOnRole[P]>
      : GetScalarType<T[P], AggregateUserOnRole[P]>
  }




  export type UserOnRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnRoleWhereInput
    orderBy?: UserOnRoleOrderByWithAggregationInput | UserOnRoleOrderByWithAggregationInput[]
    by: UserOnRoleScalarFieldEnum[] | UserOnRoleScalarFieldEnum
    having?: UserOnRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserOnRoleCountAggregateInputType | true
    _avg?: UserOnRoleAvgAggregateInputType
    _sum?: UserOnRoleSumAggregateInputType
    _min?: UserOnRoleMinAggregateInputType
    _max?: UserOnRoleMaxAggregateInputType
  }

  export type UserOnRoleGroupByOutputType = {
    userId: number
    roleId: number
    createTime: Date
    updateTime: Date
    _count: UserOnRoleCountAggregateOutputType | null
    _avg: UserOnRoleAvgAggregateOutputType | null
    _sum: UserOnRoleSumAggregateOutputType | null
    _min: UserOnRoleMinAggregateOutputType | null
    _max: UserOnRoleMaxAggregateOutputType | null
  }

  type GetUserOnRoleGroupByPayload<T extends UserOnRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserOnRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserOnRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserOnRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserOnRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserOnRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    createTime?: boolean
    updateTime?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOnRole"]>



  export type UserOnRoleSelectScalar = {
    userId?: boolean
    roleId?: boolean
    createTime?: boolean
    updateTime?: boolean
  }

  export type UserOnRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "roleId" | "createTime" | "updateTime", ExtArgs["result"]["userOnRole"]>
  export type UserOnRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserOnRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserOnRole"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      roleId: number
      createTime: Date
      updateTime: Date
    }, ExtArgs["result"]["userOnRole"]>
    composites: {}
  }

  type UserOnRoleGetPayload<S extends boolean | null | undefined | UserOnRoleDefaultArgs> = $Result.GetResult<Prisma.$UserOnRolePayload, S>

  type UserOnRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserOnRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserOnRoleCountAggregateInputType | true
    }

  export interface UserOnRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserOnRole'], meta: { name: 'UserOnRole' } }
    /**
     * Find zero or one UserOnRole that matches the filter.
     * @param {UserOnRoleFindUniqueArgs} args - Arguments to find a UserOnRole
     * @example
     * // Get one UserOnRole
     * const userOnRole = await prisma.userOnRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserOnRoleFindUniqueArgs>(args: SelectSubset<T, UserOnRoleFindUniqueArgs<ExtArgs>>): Prisma__UserOnRoleClient<$Result.GetResult<Prisma.$UserOnRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserOnRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserOnRoleFindUniqueOrThrowArgs} args - Arguments to find a UserOnRole
     * @example
     * // Get one UserOnRole
     * const userOnRole = await prisma.userOnRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserOnRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserOnRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserOnRoleClient<$Result.GetResult<Prisma.$UserOnRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOnRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnRoleFindFirstArgs} args - Arguments to find a UserOnRole
     * @example
     * // Get one UserOnRole
     * const userOnRole = await prisma.userOnRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserOnRoleFindFirstArgs>(args?: SelectSubset<T, UserOnRoleFindFirstArgs<ExtArgs>>): Prisma__UserOnRoleClient<$Result.GetResult<Prisma.$UserOnRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOnRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnRoleFindFirstOrThrowArgs} args - Arguments to find a UserOnRole
     * @example
     * // Get one UserOnRole
     * const userOnRole = await prisma.userOnRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserOnRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserOnRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserOnRoleClient<$Result.GetResult<Prisma.$UserOnRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserOnRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserOnRoles
     * const userOnRoles = await prisma.userOnRole.findMany()
     * 
     * // Get first 10 UserOnRoles
     * const userOnRoles = await prisma.userOnRole.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userOnRoleWithUserIdOnly = await prisma.userOnRole.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserOnRoleFindManyArgs>(args?: SelectSubset<T, UserOnRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserOnRole.
     * @param {UserOnRoleCreateArgs} args - Arguments to create a UserOnRole.
     * @example
     * // Create one UserOnRole
     * const UserOnRole = await prisma.userOnRole.create({
     *   data: {
     *     // ... data to create a UserOnRole
     *   }
     * })
     * 
     */
    create<T extends UserOnRoleCreateArgs>(args: SelectSubset<T, UserOnRoleCreateArgs<ExtArgs>>): Prisma__UserOnRoleClient<$Result.GetResult<Prisma.$UserOnRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserOnRoles.
     * @param {UserOnRoleCreateManyArgs} args - Arguments to create many UserOnRoles.
     * @example
     * // Create many UserOnRoles
     * const userOnRole = await prisma.userOnRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserOnRoleCreateManyArgs>(args?: SelectSubset<T, UserOnRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserOnRole.
     * @param {UserOnRoleDeleteArgs} args - Arguments to delete one UserOnRole.
     * @example
     * // Delete one UserOnRole
     * const UserOnRole = await prisma.userOnRole.delete({
     *   where: {
     *     // ... filter to delete one UserOnRole
     *   }
     * })
     * 
     */
    delete<T extends UserOnRoleDeleteArgs>(args: SelectSubset<T, UserOnRoleDeleteArgs<ExtArgs>>): Prisma__UserOnRoleClient<$Result.GetResult<Prisma.$UserOnRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserOnRole.
     * @param {UserOnRoleUpdateArgs} args - Arguments to update one UserOnRole.
     * @example
     * // Update one UserOnRole
     * const userOnRole = await prisma.userOnRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserOnRoleUpdateArgs>(args: SelectSubset<T, UserOnRoleUpdateArgs<ExtArgs>>): Prisma__UserOnRoleClient<$Result.GetResult<Prisma.$UserOnRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserOnRoles.
     * @param {UserOnRoleDeleteManyArgs} args - Arguments to filter UserOnRoles to delete.
     * @example
     * // Delete a few UserOnRoles
     * const { count } = await prisma.userOnRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserOnRoleDeleteManyArgs>(args?: SelectSubset<T, UserOnRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOnRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserOnRoles
     * const userOnRole = await prisma.userOnRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserOnRoleUpdateManyArgs>(args: SelectSubset<T, UserOnRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserOnRole.
     * @param {UserOnRoleUpsertArgs} args - Arguments to update or create a UserOnRole.
     * @example
     * // Update or create a UserOnRole
     * const userOnRole = await prisma.userOnRole.upsert({
     *   create: {
     *     // ... data to create a UserOnRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserOnRole we want to update
     *   }
     * })
     */
    upsert<T extends UserOnRoleUpsertArgs>(args: SelectSubset<T, UserOnRoleUpsertArgs<ExtArgs>>): Prisma__UserOnRoleClient<$Result.GetResult<Prisma.$UserOnRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserOnRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnRoleCountArgs} args - Arguments to filter UserOnRoles to count.
     * @example
     * // Count the number of UserOnRoles
     * const count = await prisma.userOnRole.count({
     *   where: {
     *     // ... the filter for the UserOnRoles we want to count
     *   }
     * })
    **/
    count<T extends UserOnRoleCountArgs>(
      args?: Subset<T, UserOnRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserOnRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserOnRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserOnRoleAggregateArgs>(args: Subset<T, UserOnRoleAggregateArgs>): Prisma.PrismaPromise<GetUserOnRoleAggregateType<T>>

    /**
     * Group by UserOnRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserOnRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserOnRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserOnRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserOnRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserOnRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserOnRole model
   */
  readonly fields: UserOnRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserOnRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserOnRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserOnRole model
   */
  interface UserOnRoleFieldRefs {
    readonly userId: FieldRef<"UserOnRole", 'Int'>
    readonly roleId: FieldRef<"UserOnRole", 'Int'>
    readonly createTime: FieldRef<"UserOnRole", 'DateTime'>
    readonly updateTime: FieldRef<"UserOnRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserOnRole findUnique
   */
  export type UserOnRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnRole
     */
    select?: UserOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnRole
     */
    omit?: UserOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserOnRole to fetch.
     */
    where: UserOnRoleWhereUniqueInput
  }

  /**
   * UserOnRole findUniqueOrThrow
   */
  export type UserOnRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnRole
     */
    select?: UserOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnRole
     */
    omit?: UserOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserOnRole to fetch.
     */
    where: UserOnRoleWhereUniqueInput
  }

  /**
   * UserOnRole findFirst
   */
  export type UserOnRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnRole
     */
    select?: UserOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnRole
     */
    omit?: UserOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserOnRole to fetch.
     */
    where?: UserOnRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnRoles to fetch.
     */
    orderBy?: UserOnRoleOrderByWithRelationInput | UserOnRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnRoles.
     */
    cursor?: UserOnRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnRoles.
     */
    distinct?: UserOnRoleScalarFieldEnum | UserOnRoleScalarFieldEnum[]
  }

  /**
   * UserOnRole findFirstOrThrow
   */
  export type UserOnRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnRole
     */
    select?: UserOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnRole
     */
    omit?: UserOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserOnRole to fetch.
     */
    where?: UserOnRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnRoles to fetch.
     */
    orderBy?: UserOnRoleOrderByWithRelationInput | UserOnRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnRoles.
     */
    cursor?: UserOnRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnRoles.
     */
    distinct?: UserOnRoleScalarFieldEnum | UserOnRoleScalarFieldEnum[]
  }

  /**
   * UserOnRole findMany
   */
  export type UserOnRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnRole
     */
    select?: UserOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnRole
     */
    omit?: UserOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserOnRoles to fetch.
     */
    where?: UserOnRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnRoles to fetch.
     */
    orderBy?: UserOnRoleOrderByWithRelationInput | UserOnRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserOnRoles.
     */
    cursor?: UserOnRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnRoles.
     */
    skip?: number
    distinct?: UserOnRoleScalarFieldEnum | UserOnRoleScalarFieldEnum[]
  }

  /**
   * UserOnRole create
   */
  export type UserOnRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnRole
     */
    select?: UserOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnRole
     */
    omit?: UserOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserOnRole.
     */
    data: XOR<UserOnRoleCreateInput, UserOnRoleUncheckedCreateInput>
  }

  /**
   * UserOnRole createMany
   */
  export type UserOnRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserOnRoles.
     */
    data: UserOnRoleCreateManyInput | UserOnRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserOnRole update
   */
  export type UserOnRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnRole
     */
    select?: UserOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnRole
     */
    omit?: UserOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserOnRole.
     */
    data: XOR<UserOnRoleUpdateInput, UserOnRoleUncheckedUpdateInput>
    /**
     * Choose, which UserOnRole to update.
     */
    where: UserOnRoleWhereUniqueInput
  }

  /**
   * UserOnRole updateMany
   */
  export type UserOnRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserOnRoles.
     */
    data: XOR<UserOnRoleUpdateManyMutationInput, UserOnRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserOnRoles to update
     */
    where?: UserOnRoleWhereInput
    /**
     * Limit how many UserOnRoles to update.
     */
    limit?: number
  }

  /**
   * UserOnRole upsert
   */
  export type UserOnRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnRole
     */
    select?: UserOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnRole
     */
    omit?: UserOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserOnRole to update in case it exists.
     */
    where: UserOnRoleWhereUniqueInput
    /**
     * In case the UserOnRole found by the `where` argument doesn't exist, create a new UserOnRole with this data.
     */
    create: XOR<UserOnRoleCreateInput, UserOnRoleUncheckedCreateInput>
    /**
     * In case the UserOnRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserOnRoleUpdateInput, UserOnRoleUncheckedUpdateInput>
  }

  /**
   * UserOnRole delete
   */
  export type UserOnRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnRole
     */
    select?: UserOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnRole
     */
    omit?: UserOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnRoleInclude<ExtArgs> | null
    /**
     * Filter which UserOnRole to delete.
     */
    where: UserOnRoleWhereUniqueInput
  }

  /**
   * UserOnRole deleteMany
   */
  export type UserOnRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOnRoles to delete
     */
    where?: UserOnRoleWhereInput
    /**
     * Limit how many UserOnRoles to delete.
     */
    limit?: number
  }

  /**
   * UserOnRole without action
   */
  export type UserOnRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnRole
     */
    select?: UserOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnRole
     */
    omit?: UserOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnRoleInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    desc: string | null
    createTime: Date | null
    updateTime: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    desc: string | null
    createTime: Date | null
    updateTime: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    desc: number
    createTime: number
    updateTime: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    createTime?: true
    updateTime?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    createTime?: true
    updateTime?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    createTime?: true
    updateTime?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    desc: string
    createTime: Date
    updateTime: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    createTime?: boolean
    updateTime?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    permission?: boolean | Role$permissionArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>



  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    desc?: boolean
    createTime?: boolean
    updateTime?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "desc" | "createTime" | "updateTime", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    permission?: boolean | Role$permissionArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserOnRolePayload<ExtArgs>[]
      permission: Prisma.$RoleOnPermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      desc: string
      createTime: Date
      updateTime: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permission<T extends Role$permissionArgs<ExtArgs> = {}>(args?: Subset<T, Role$permissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleOnPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
    readonly desc: FieldRef<"Role", 'String'>
    readonly createTime: FieldRef<"Role", 'DateTime'>
    readonly updateTime: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnRole
     */
    select?: UserOnRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnRole
     */
    omit?: UserOnRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnRoleInclude<ExtArgs> | null
    where?: UserOnRoleWhereInput
    orderBy?: UserOnRoleOrderByWithRelationInput | UserOnRoleOrderByWithRelationInput[]
    cursor?: UserOnRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOnRoleScalarFieldEnum | UserOnRoleScalarFieldEnum[]
  }

  /**
   * Role.permission
   */
  export type Role$permissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleOnPermission
     */
    select?: RoleOnPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleOnPermission
     */
    omit?: RoleOnPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleOnPermissionInclude<ExtArgs> | null
    where?: RoleOnPermissionWhereInput
    orderBy?: RoleOnPermissionOrderByWithRelationInput | RoleOnPermissionOrderByWithRelationInput[]
    cursor?: RoleOnPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleOnPermissionScalarFieldEnum | RoleOnPermissionScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model RoleOnPermission
   */

  export type AggregateRoleOnPermission = {
    _count: RoleOnPermissionCountAggregateOutputType | null
    _avg: RoleOnPermissionAvgAggregateOutputType | null
    _sum: RoleOnPermissionSumAggregateOutputType | null
    _min: RoleOnPermissionMinAggregateOutputType | null
    _max: RoleOnPermissionMaxAggregateOutputType | null
  }

  export type RoleOnPermissionAvgAggregateOutputType = {
    roleId: number | null
    permissionId: number | null
  }

  export type RoleOnPermissionSumAggregateOutputType = {
    roleId: number | null
    permissionId: number | null
  }

  export type RoleOnPermissionMinAggregateOutputType = {
    roleId: number | null
    permissionId: number | null
  }

  export type RoleOnPermissionMaxAggregateOutputType = {
    roleId: number | null
    permissionId: number | null
  }

  export type RoleOnPermissionCountAggregateOutputType = {
    roleId: number
    permissionId: number
    _all: number
  }


  export type RoleOnPermissionAvgAggregateInputType = {
    roleId?: true
    permissionId?: true
  }

  export type RoleOnPermissionSumAggregateInputType = {
    roleId?: true
    permissionId?: true
  }

  export type RoleOnPermissionMinAggregateInputType = {
    roleId?: true
    permissionId?: true
  }

  export type RoleOnPermissionMaxAggregateInputType = {
    roleId?: true
    permissionId?: true
  }

  export type RoleOnPermissionCountAggregateInputType = {
    roleId?: true
    permissionId?: true
    _all?: true
  }

  export type RoleOnPermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoleOnPermission to aggregate.
     */
    where?: RoleOnPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleOnPermissions to fetch.
     */
    orderBy?: RoleOnPermissionOrderByWithRelationInput | RoleOnPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleOnPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleOnPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleOnPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoleOnPermissions
    **/
    _count?: true | RoleOnPermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleOnPermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleOnPermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleOnPermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleOnPermissionMaxAggregateInputType
  }

  export type GetRoleOnPermissionAggregateType<T extends RoleOnPermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateRoleOnPermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoleOnPermission[P]>
      : GetScalarType<T[P], AggregateRoleOnPermission[P]>
  }




  export type RoleOnPermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleOnPermissionWhereInput
    orderBy?: RoleOnPermissionOrderByWithAggregationInput | RoleOnPermissionOrderByWithAggregationInput[]
    by: RoleOnPermissionScalarFieldEnum[] | RoleOnPermissionScalarFieldEnum
    having?: RoleOnPermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleOnPermissionCountAggregateInputType | true
    _avg?: RoleOnPermissionAvgAggregateInputType
    _sum?: RoleOnPermissionSumAggregateInputType
    _min?: RoleOnPermissionMinAggregateInputType
    _max?: RoleOnPermissionMaxAggregateInputType
  }

  export type RoleOnPermissionGroupByOutputType = {
    roleId: number
    permissionId: number
    _count: RoleOnPermissionCountAggregateOutputType | null
    _avg: RoleOnPermissionAvgAggregateOutputType | null
    _sum: RoleOnPermissionSumAggregateOutputType | null
    _min: RoleOnPermissionMinAggregateOutputType | null
    _max: RoleOnPermissionMaxAggregateOutputType | null
  }

  type GetRoleOnPermissionGroupByPayload<T extends RoleOnPermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleOnPermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleOnPermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleOnPermissionGroupByOutputType[P]>
            : GetScalarType<T[P], RoleOnPermissionGroupByOutputType[P]>
        }
      >
    >


  export type RoleOnPermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    permissionId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roleOnPermission"]>



  export type RoleOnPermissionSelectScalar = {
    roleId?: boolean
    permissionId?: boolean
  }

  export type RoleOnPermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"roleId" | "permissionId", ExtArgs["result"]["roleOnPermission"]>
  export type RoleOnPermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }

  export type $RoleOnPermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoleOnPermission"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      permission: Prisma.$PermissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      roleId: number
      permissionId: number
    }, ExtArgs["result"]["roleOnPermission"]>
    composites: {}
  }

  type RoleOnPermissionGetPayload<S extends boolean | null | undefined | RoleOnPermissionDefaultArgs> = $Result.GetResult<Prisma.$RoleOnPermissionPayload, S>

  type RoleOnPermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleOnPermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleOnPermissionCountAggregateInputType | true
    }

  export interface RoleOnPermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoleOnPermission'], meta: { name: 'RoleOnPermission' } }
    /**
     * Find zero or one RoleOnPermission that matches the filter.
     * @param {RoleOnPermissionFindUniqueArgs} args - Arguments to find a RoleOnPermission
     * @example
     * // Get one RoleOnPermission
     * const roleOnPermission = await prisma.roleOnPermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleOnPermissionFindUniqueArgs>(args: SelectSubset<T, RoleOnPermissionFindUniqueArgs<ExtArgs>>): Prisma__RoleOnPermissionClient<$Result.GetResult<Prisma.$RoleOnPermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoleOnPermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleOnPermissionFindUniqueOrThrowArgs} args - Arguments to find a RoleOnPermission
     * @example
     * // Get one RoleOnPermission
     * const roleOnPermission = await prisma.roleOnPermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleOnPermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleOnPermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleOnPermissionClient<$Result.GetResult<Prisma.$RoleOnPermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoleOnPermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleOnPermissionFindFirstArgs} args - Arguments to find a RoleOnPermission
     * @example
     * // Get one RoleOnPermission
     * const roleOnPermission = await prisma.roleOnPermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleOnPermissionFindFirstArgs>(args?: SelectSubset<T, RoleOnPermissionFindFirstArgs<ExtArgs>>): Prisma__RoleOnPermissionClient<$Result.GetResult<Prisma.$RoleOnPermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoleOnPermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleOnPermissionFindFirstOrThrowArgs} args - Arguments to find a RoleOnPermission
     * @example
     * // Get one RoleOnPermission
     * const roleOnPermission = await prisma.roleOnPermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleOnPermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleOnPermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleOnPermissionClient<$Result.GetResult<Prisma.$RoleOnPermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoleOnPermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleOnPermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoleOnPermissions
     * const roleOnPermissions = await prisma.roleOnPermission.findMany()
     * 
     * // Get first 10 RoleOnPermissions
     * const roleOnPermissions = await prisma.roleOnPermission.findMany({ take: 10 })
     * 
     * // Only select the `roleId`
     * const roleOnPermissionWithRoleIdOnly = await prisma.roleOnPermission.findMany({ select: { roleId: true } })
     * 
     */
    findMany<T extends RoleOnPermissionFindManyArgs>(args?: SelectSubset<T, RoleOnPermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleOnPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoleOnPermission.
     * @param {RoleOnPermissionCreateArgs} args - Arguments to create a RoleOnPermission.
     * @example
     * // Create one RoleOnPermission
     * const RoleOnPermission = await prisma.roleOnPermission.create({
     *   data: {
     *     // ... data to create a RoleOnPermission
     *   }
     * })
     * 
     */
    create<T extends RoleOnPermissionCreateArgs>(args: SelectSubset<T, RoleOnPermissionCreateArgs<ExtArgs>>): Prisma__RoleOnPermissionClient<$Result.GetResult<Prisma.$RoleOnPermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoleOnPermissions.
     * @param {RoleOnPermissionCreateManyArgs} args - Arguments to create many RoleOnPermissions.
     * @example
     * // Create many RoleOnPermissions
     * const roleOnPermission = await prisma.roleOnPermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleOnPermissionCreateManyArgs>(args?: SelectSubset<T, RoleOnPermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoleOnPermission.
     * @param {RoleOnPermissionDeleteArgs} args - Arguments to delete one RoleOnPermission.
     * @example
     * // Delete one RoleOnPermission
     * const RoleOnPermission = await prisma.roleOnPermission.delete({
     *   where: {
     *     // ... filter to delete one RoleOnPermission
     *   }
     * })
     * 
     */
    delete<T extends RoleOnPermissionDeleteArgs>(args: SelectSubset<T, RoleOnPermissionDeleteArgs<ExtArgs>>): Prisma__RoleOnPermissionClient<$Result.GetResult<Prisma.$RoleOnPermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoleOnPermission.
     * @param {RoleOnPermissionUpdateArgs} args - Arguments to update one RoleOnPermission.
     * @example
     * // Update one RoleOnPermission
     * const roleOnPermission = await prisma.roleOnPermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleOnPermissionUpdateArgs>(args: SelectSubset<T, RoleOnPermissionUpdateArgs<ExtArgs>>): Prisma__RoleOnPermissionClient<$Result.GetResult<Prisma.$RoleOnPermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoleOnPermissions.
     * @param {RoleOnPermissionDeleteManyArgs} args - Arguments to filter RoleOnPermissions to delete.
     * @example
     * // Delete a few RoleOnPermissions
     * const { count } = await prisma.roleOnPermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleOnPermissionDeleteManyArgs>(args?: SelectSubset<T, RoleOnPermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoleOnPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleOnPermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoleOnPermissions
     * const roleOnPermission = await prisma.roleOnPermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleOnPermissionUpdateManyArgs>(args: SelectSubset<T, RoleOnPermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoleOnPermission.
     * @param {RoleOnPermissionUpsertArgs} args - Arguments to update or create a RoleOnPermission.
     * @example
     * // Update or create a RoleOnPermission
     * const roleOnPermission = await prisma.roleOnPermission.upsert({
     *   create: {
     *     // ... data to create a RoleOnPermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoleOnPermission we want to update
     *   }
     * })
     */
    upsert<T extends RoleOnPermissionUpsertArgs>(args: SelectSubset<T, RoleOnPermissionUpsertArgs<ExtArgs>>): Prisma__RoleOnPermissionClient<$Result.GetResult<Prisma.$RoleOnPermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoleOnPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleOnPermissionCountArgs} args - Arguments to filter RoleOnPermissions to count.
     * @example
     * // Count the number of RoleOnPermissions
     * const count = await prisma.roleOnPermission.count({
     *   where: {
     *     // ... the filter for the RoleOnPermissions we want to count
     *   }
     * })
    **/
    count<T extends RoleOnPermissionCountArgs>(
      args?: Subset<T, RoleOnPermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleOnPermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoleOnPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleOnPermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleOnPermissionAggregateArgs>(args: Subset<T, RoleOnPermissionAggregateArgs>): Prisma.PrismaPromise<GetRoleOnPermissionAggregateType<T>>

    /**
     * Group by RoleOnPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleOnPermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleOnPermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleOnPermissionGroupByArgs['orderBy'] }
        : { orderBy?: RoleOnPermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleOnPermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleOnPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoleOnPermission model
   */
  readonly fields: RoleOnPermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoleOnPermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleOnPermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    permission<T extends PermissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionDefaultArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoleOnPermission model
   */
  interface RoleOnPermissionFieldRefs {
    readonly roleId: FieldRef<"RoleOnPermission", 'Int'>
    readonly permissionId: FieldRef<"RoleOnPermission", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RoleOnPermission findUnique
   */
  export type RoleOnPermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleOnPermission
     */
    select?: RoleOnPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleOnPermission
     */
    omit?: RoleOnPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleOnPermissionInclude<ExtArgs> | null
    /**
     * Filter, which RoleOnPermission to fetch.
     */
    where: RoleOnPermissionWhereUniqueInput
  }

  /**
   * RoleOnPermission findUniqueOrThrow
   */
  export type RoleOnPermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleOnPermission
     */
    select?: RoleOnPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleOnPermission
     */
    omit?: RoleOnPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleOnPermissionInclude<ExtArgs> | null
    /**
     * Filter, which RoleOnPermission to fetch.
     */
    where: RoleOnPermissionWhereUniqueInput
  }

  /**
   * RoleOnPermission findFirst
   */
  export type RoleOnPermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleOnPermission
     */
    select?: RoleOnPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleOnPermission
     */
    omit?: RoleOnPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleOnPermissionInclude<ExtArgs> | null
    /**
     * Filter, which RoleOnPermission to fetch.
     */
    where?: RoleOnPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleOnPermissions to fetch.
     */
    orderBy?: RoleOnPermissionOrderByWithRelationInput | RoleOnPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoleOnPermissions.
     */
    cursor?: RoleOnPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleOnPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleOnPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoleOnPermissions.
     */
    distinct?: RoleOnPermissionScalarFieldEnum | RoleOnPermissionScalarFieldEnum[]
  }

  /**
   * RoleOnPermission findFirstOrThrow
   */
  export type RoleOnPermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleOnPermission
     */
    select?: RoleOnPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleOnPermission
     */
    omit?: RoleOnPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleOnPermissionInclude<ExtArgs> | null
    /**
     * Filter, which RoleOnPermission to fetch.
     */
    where?: RoleOnPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleOnPermissions to fetch.
     */
    orderBy?: RoleOnPermissionOrderByWithRelationInput | RoleOnPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoleOnPermissions.
     */
    cursor?: RoleOnPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleOnPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleOnPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoleOnPermissions.
     */
    distinct?: RoleOnPermissionScalarFieldEnum | RoleOnPermissionScalarFieldEnum[]
  }

  /**
   * RoleOnPermission findMany
   */
  export type RoleOnPermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleOnPermission
     */
    select?: RoleOnPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleOnPermission
     */
    omit?: RoleOnPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleOnPermissionInclude<ExtArgs> | null
    /**
     * Filter, which RoleOnPermissions to fetch.
     */
    where?: RoleOnPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleOnPermissions to fetch.
     */
    orderBy?: RoleOnPermissionOrderByWithRelationInput | RoleOnPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoleOnPermissions.
     */
    cursor?: RoleOnPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleOnPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleOnPermissions.
     */
    skip?: number
    distinct?: RoleOnPermissionScalarFieldEnum | RoleOnPermissionScalarFieldEnum[]
  }

  /**
   * RoleOnPermission create
   */
  export type RoleOnPermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleOnPermission
     */
    select?: RoleOnPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleOnPermission
     */
    omit?: RoleOnPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleOnPermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a RoleOnPermission.
     */
    data: XOR<RoleOnPermissionCreateInput, RoleOnPermissionUncheckedCreateInput>
  }

  /**
   * RoleOnPermission createMany
   */
  export type RoleOnPermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoleOnPermissions.
     */
    data: RoleOnPermissionCreateManyInput | RoleOnPermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoleOnPermission update
   */
  export type RoleOnPermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleOnPermission
     */
    select?: RoleOnPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleOnPermission
     */
    omit?: RoleOnPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleOnPermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a RoleOnPermission.
     */
    data: XOR<RoleOnPermissionUpdateInput, RoleOnPermissionUncheckedUpdateInput>
    /**
     * Choose, which RoleOnPermission to update.
     */
    where: RoleOnPermissionWhereUniqueInput
  }

  /**
   * RoleOnPermission updateMany
   */
  export type RoleOnPermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoleOnPermissions.
     */
    data: XOR<RoleOnPermissionUpdateManyMutationInput, RoleOnPermissionUncheckedUpdateManyInput>
    /**
     * Filter which RoleOnPermissions to update
     */
    where?: RoleOnPermissionWhereInput
    /**
     * Limit how many RoleOnPermissions to update.
     */
    limit?: number
  }

  /**
   * RoleOnPermission upsert
   */
  export type RoleOnPermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleOnPermission
     */
    select?: RoleOnPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleOnPermission
     */
    omit?: RoleOnPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleOnPermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the RoleOnPermission to update in case it exists.
     */
    where: RoleOnPermissionWhereUniqueInput
    /**
     * In case the RoleOnPermission found by the `where` argument doesn't exist, create a new RoleOnPermission with this data.
     */
    create: XOR<RoleOnPermissionCreateInput, RoleOnPermissionUncheckedCreateInput>
    /**
     * In case the RoleOnPermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleOnPermissionUpdateInput, RoleOnPermissionUncheckedUpdateInput>
  }

  /**
   * RoleOnPermission delete
   */
  export type RoleOnPermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleOnPermission
     */
    select?: RoleOnPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleOnPermission
     */
    omit?: RoleOnPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleOnPermissionInclude<ExtArgs> | null
    /**
     * Filter which RoleOnPermission to delete.
     */
    where: RoleOnPermissionWhereUniqueInput
  }

  /**
   * RoleOnPermission deleteMany
   */
  export type RoleOnPermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoleOnPermissions to delete
     */
    where?: RoleOnPermissionWhereInput
    /**
     * Limit how many RoleOnPermissions to delete.
     */
    limit?: number
  }

  /**
   * RoleOnPermission without action
   */
  export type RoleOnPermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleOnPermission
     */
    select?: RoleOnPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleOnPermission
     */
    omit?: RoleOnPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleOnPermissionInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionAvgAggregateOutputType = {
    id: number | null
    type: number | null
    parentId: number | null
  }

  export type PermissionSumAggregateOutputType = {
    id: number | null
    type: number | null
    parentId: number | null
  }

  export type PermissionMinAggregateOutputType = {
    id: number | null
    title: string | null
    code: string | null
    type: number | null
    parentId: number | null
    createTime: Date | null
    updateTime: Date | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    code: string | null
    type: number | null
    parentId: number | null
    createTime: Date | null
    updateTime: Date | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    title: number
    code: number
    type: number
    parentId: number
    createTime: number
    updateTime: number
    _all: number
  }


  export type PermissionAvgAggregateInputType = {
    id?: true
    type?: true
    parentId?: true
  }

  export type PermissionSumAggregateInputType = {
    id?: true
    type?: true
    parentId?: true
  }

  export type PermissionMinAggregateInputType = {
    id?: true
    title?: true
    code?: true
    type?: true
    parentId?: true
    createTime?: true
    updateTime?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    title?: true
    code?: true
    type?: true
    parentId?: true
    createTime?: true
    updateTime?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    title?: true
    code?: true
    type?: true
    parentId?: true
    createTime?: true
    updateTime?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _avg?: PermissionAvgAggregateInputType
    _sum?: PermissionSumAggregateInputType
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: number
    title: string
    code: string
    type: number
    parentId: number
    createTime: Date
    updateTime: Date
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    code?: boolean
    type?: boolean
    parentId?: boolean
    createTime?: boolean
    updateTime?: boolean
    roles?: boolean | Permission$rolesArgs<ExtArgs>
    permissionApi?: boolean | Permission$permissionApiArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>



  export type PermissionSelectScalar = {
    id?: boolean
    title?: boolean
    code?: boolean
    type?: boolean
    parentId?: boolean
    createTime?: boolean
    updateTime?: boolean
  }

  export type PermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "code" | "type" | "parentId" | "createTime" | "updateTime", ExtArgs["result"]["permission"]>
  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Permission$rolesArgs<ExtArgs>
    permissionApi?: boolean | Permission$permissionApiArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      roles: Prisma.$RoleOnPermissionPayload<ExtArgs>[]
      permissionApi: Prisma.$PermissionApiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      code: string
      type: number
      parentId: number
      createTime: Date
      updateTime: Date
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends Permission$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Permission$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleOnPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permissionApi<T extends Permission$permissionApiArgs<ExtArgs> = {}>(args?: Subset<T, Permission$permissionApiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionApiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permission model
   */
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'Int'>
    readonly title: FieldRef<"Permission", 'String'>
    readonly code: FieldRef<"Permission", 'String'>
    readonly type: FieldRef<"Permission", 'Int'>
    readonly parentId: FieldRef<"Permission", 'Int'>
    readonly createTime: FieldRef<"Permission", 'DateTime'>
    readonly updateTime: FieldRef<"Permission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number
  }

  /**
   * Permission.roles
   */
  export type Permission$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleOnPermission
     */
    select?: RoleOnPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleOnPermission
     */
    omit?: RoleOnPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleOnPermissionInclude<ExtArgs> | null
    where?: RoleOnPermissionWhereInput
    orderBy?: RoleOnPermissionOrderByWithRelationInput | RoleOnPermissionOrderByWithRelationInput[]
    cursor?: RoleOnPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleOnPermissionScalarFieldEnum | RoleOnPermissionScalarFieldEnum[]
  }

  /**
   * Permission.permissionApi
   */
  export type Permission$permissionApiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionApi
     */
    select?: PermissionApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionApi
     */
    omit?: PermissionApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionApiInclude<ExtArgs> | null
    where?: PermissionApiWhereInput
    orderBy?: PermissionApiOrderByWithRelationInput | PermissionApiOrderByWithRelationInput[]
    cursor?: PermissionApiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionApiScalarFieldEnum | PermissionApiScalarFieldEnum[]
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
  }


  /**
   * Model PermissionApi
   */

  export type AggregatePermissionApi = {
    _count: PermissionApiCountAggregateOutputType | null
    _avg: PermissionApiAvgAggregateOutputType | null
    _sum: PermissionApiSumAggregateOutputType | null
    _min: PermissionApiMinAggregateOutputType | null
    _max: PermissionApiMaxAggregateOutputType | null
  }

  export type PermissionApiAvgAggregateOutputType = {
    id: number | null
    permissionId: number | null
  }

  export type PermissionApiSumAggregateOutputType = {
    id: number | null
    permissionId: number | null
  }

  export type PermissionApiMinAggregateOutputType = {
    id: number | null
    apiUrl: string | null
    apiMethod: string | null
    permissionId: number | null
    createTime: Date | null
    updateTime: Date | null
  }

  export type PermissionApiMaxAggregateOutputType = {
    id: number | null
    apiUrl: string | null
    apiMethod: string | null
    permissionId: number | null
    createTime: Date | null
    updateTime: Date | null
  }

  export type PermissionApiCountAggregateOutputType = {
    id: number
    apiUrl: number
    apiMethod: number
    permissionId: number
    createTime: number
    updateTime: number
    _all: number
  }


  export type PermissionApiAvgAggregateInputType = {
    id?: true
    permissionId?: true
  }

  export type PermissionApiSumAggregateInputType = {
    id?: true
    permissionId?: true
  }

  export type PermissionApiMinAggregateInputType = {
    id?: true
    apiUrl?: true
    apiMethod?: true
    permissionId?: true
    createTime?: true
    updateTime?: true
  }

  export type PermissionApiMaxAggregateInputType = {
    id?: true
    apiUrl?: true
    apiMethod?: true
    permissionId?: true
    createTime?: true
    updateTime?: true
  }

  export type PermissionApiCountAggregateInputType = {
    id?: true
    apiUrl?: true
    apiMethod?: true
    permissionId?: true
    createTime?: true
    updateTime?: true
    _all?: true
  }

  export type PermissionApiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermissionApi to aggregate.
     */
    where?: PermissionApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionApis to fetch.
     */
    orderBy?: PermissionApiOrderByWithRelationInput | PermissionApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionApis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionApis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PermissionApis
    **/
    _count?: true | PermissionApiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionApiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionApiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionApiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionApiMaxAggregateInputType
  }

  export type GetPermissionApiAggregateType<T extends PermissionApiAggregateArgs> = {
        [P in keyof T & keyof AggregatePermissionApi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermissionApi[P]>
      : GetScalarType<T[P], AggregatePermissionApi[P]>
  }




  export type PermissionApiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionApiWhereInput
    orderBy?: PermissionApiOrderByWithAggregationInput | PermissionApiOrderByWithAggregationInput[]
    by: PermissionApiScalarFieldEnum[] | PermissionApiScalarFieldEnum
    having?: PermissionApiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionApiCountAggregateInputType | true
    _avg?: PermissionApiAvgAggregateInputType
    _sum?: PermissionApiSumAggregateInputType
    _min?: PermissionApiMinAggregateInputType
    _max?: PermissionApiMaxAggregateInputType
  }

  export type PermissionApiGroupByOutputType = {
    id: number
    apiUrl: string
    apiMethod: string
    permissionId: number
    createTime: Date
    updateTime: Date
    _count: PermissionApiCountAggregateOutputType | null
    _avg: PermissionApiAvgAggregateOutputType | null
    _sum: PermissionApiSumAggregateOutputType | null
    _min: PermissionApiMinAggregateOutputType | null
    _max: PermissionApiMaxAggregateOutputType | null
  }

  type GetPermissionApiGroupByPayload<T extends PermissionApiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionApiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionApiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionApiGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionApiGroupByOutputType[P]>
        }
      >
    >


  export type PermissionApiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiUrl?: boolean
    apiMethod?: boolean
    permissionId?: boolean
    createTime?: boolean
    updateTime?: boolean
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissionApi"]>



  export type PermissionApiSelectScalar = {
    id?: boolean
    apiUrl?: boolean
    apiMethod?: boolean
    permissionId?: boolean
    createTime?: boolean
    updateTime?: boolean
  }

  export type PermissionApiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apiUrl" | "apiMethod" | "permissionId" | "createTime" | "updateTime", ExtArgs["result"]["permissionApi"]>
  export type PermissionApiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }

  export type $PermissionApiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PermissionApi"
    objects: {
      permission: Prisma.$PermissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      apiUrl: string
      apiMethod: string
      permissionId: number
      createTime: Date
      updateTime: Date
    }, ExtArgs["result"]["permissionApi"]>
    composites: {}
  }

  type PermissionApiGetPayload<S extends boolean | null | undefined | PermissionApiDefaultArgs> = $Result.GetResult<Prisma.$PermissionApiPayload, S>

  type PermissionApiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionApiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionApiCountAggregateInputType | true
    }

  export interface PermissionApiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PermissionApi'], meta: { name: 'PermissionApi' } }
    /**
     * Find zero or one PermissionApi that matches the filter.
     * @param {PermissionApiFindUniqueArgs} args - Arguments to find a PermissionApi
     * @example
     * // Get one PermissionApi
     * const permissionApi = await prisma.permissionApi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionApiFindUniqueArgs>(args: SelectSubset<T, PermissionApiFindUniqueArgs<ExtArgs>>): Prisma__PermissionApiClient<$Result.GetResult<Prisma.$PermissionApiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PermissionApi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionApiFindUniqueOrThrowArgs} args - Arguments to find a PermissionApi
     * @example
     * // Get one PermissionApi
     * const permissionApi = await prisma.permissionApi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionApiFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionApiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionApiClient<$Result.GetResult<Prisma.$PermissionApiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PermissionApi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionApiFindFirstArgs} args - Arguments to find a PermissionApi
     * @example
     * // Get one PermissionApi
     * const permissionApi = await prisma.permissionApi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionApiFindFirstArgs>(args?: SelectSubset<T, PermissionApiFindFirstArgs<ExtArgs>>): Prisma__PermissionApiClient<$Result.GetResult<Prisma.$PermissionApiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PermissionApi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionApiFindFirstOrThrowArgs} args - Arguments to find a PermissionApi
     * @example
     * // Get one PermissionApi
     * const permissionApi = await prisma.permissionApi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionApiFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionApiFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionApiClient<$Result.GetResult<Prisma.$PermissionApiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PermissionApis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionApiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PermissionApis
     * const permissionApis = await prisma.permissionApi.findMany()
     * 
     * // Get first 10 PermissionApis
     * const permissionApis = await prisma.permissionApi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionApiWithIdOnly = await prisma.permissionApi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionApiFindManyArgs>(args?: SelectSubset<T, PermissionApiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionApiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PermissionApi.
     * @param {PermissionApiCreateArgs} args - Arguments to create a PermissionApi.
     * @example
     * // Create one PermissionApi
     * const PermissionApi = await prisma.permissionApi.create({
     *   data: {
     *     // ... data to create a PermissionApi
     *   }
     * })
     * 
     */
    create<T extends PermissionApiCreateArgs>(args: SelectSubset<T, PermissionApiCreateArgs<ExtArgs>>): Prisma__PermissionApiClient<$Result.GetResult<Prisma.$PermissionApiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PermissionApis.
     * @param {PermissionApiCreateManyArgs} args - Arguments to create many PermissionApis.
     * @example
     * // Create many PermissionApis
     * const permissionApi = await prisma.permissionApi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionApiCreateManyArgs>(args?: SelectSubset<T, PermissionApiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PermissionApi.
     * @param {PermissionApiDeleteArgs} args - Arguments to delete one PermissionApi.
     * @example
     * // Delete one PermissionApi
     * const PermissionApi = await prisma.permissionApi.delete({
     *   where: {
     *     // ... filter to delete one PermissionApi
     *   }
     * })
     * 
     */
    delete<T extends PermissionApiDeleteArgs>(args: SelectSubset<T, PermissionApiDeleteArgs<ExtArgs>>): Prisma__PermissionApiClient<$Result.GetResult<Prisma.$PermissionApiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PermissionApi.
     * @param {PermissionApiUpdateArgs} args - Arguments to update one PermissionApi.
     * @example
     * // Update one PermissionApi
     * const permissionApi = await prisma.permissionApi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionApiUpdateArgs>(args: SelectSubset<T, PermissionApiUpdateArgs<ExtArgs>>): Prisma__PermissionApiClient<$Result.GetResult<Prisma.$PermissionApiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PermissionApis.
     * @param {PermissionApiDeleteManyArgs} args - Arguments to filter PermissionApis to delete.
     * @example
     * // Delete a few PermissionApis
     * const { count } = await prisma.permissionApi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionApiDeleteManyArgs>(args?: SelectSubset<T, PermissionApiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PermissionApis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionApiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PermissionApis
     * const permissionApi = await prisma.permissionApi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionApiUpdateManyArgs>(args: SelectSubset<T, PermissionApiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PermissionApi.
     * @param {PermissionApiUpsertArgs} args - Arguments to update or create a PermissionApi.
     * @example
     * // Update or create a PermissionApi
     * const permissionApi = await prisma.permissionApi.upsert({
     *   create: {
     *     // ... data to create a PermissionApi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PermissionApi we want to update
     *   }
     * })
     */
    upsert<T extends PermissionApiUpsertArgs>(args: SelectSubset<T, PermissionApiUpsertArgs<ExtArgs>>): Prisma__PermissionApiClient<$Result.GetResult<Prisma.$PermissionApiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PermissionApis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionApiCountArgs} args - Arguments to filter PermissionApis to count.
     * @example
     * // Count the number of PermissionApis
     * const count = await prisma.permissionApi.count({
     *   where: {
     *     // ... the filter for the PermissionApis we want to count
     *   }
     * })
    **/
    count<T extends PermissionApiCountArgs>(
      args?: Subset<T, PermissionApiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionApiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PermissionApi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionApiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionApiAggregateArgs>(args: Subset<T, PermissionApiAggregateArgs>): Prisma.PrismaPromise<GetPermissionApiAggregateType<T>>

    /**
     * Group by PermissionApi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionApiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionApiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionApiGroupByArgs['orderBy'] }
        : { orderBy?: PermissionApiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionApiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionApiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PermissionApi model
   */
  readonly fields: PermissionApiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PermissionApi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionApiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permission<T extends PermissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionDefaultArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PermissionApi model
   */
  interface PermissionApiFieldRefs {
    readonly id: FieldRef<"PermissionApi", 'Int'>
    readonly apiUrl: FieldRef<"PermissionApi", 'String'>
    readonly apiMethod: FieldRef<"PermissionApi", 'String'>
    readonly permissionId: FieldRef<"PermissionApi", 'Int'>
    readonly createTime: FieldRef<"PermissionApi", 'DateTime'>
    readonly updateTime: FieldRef<"PermissionApi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PermissionApi findUnique
   */
  export type PermissionApiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionApi
     */
    select?: PermissionApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionApi
     */
    omit?: PermissionApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionApiInclude<ExtArgs> | null
    /**
     * Filter, which PermissionApi to fetch.
     */
    where: PermissionApiWhereUniqueInput
  }

  /**
   * PermissionApi findUniqueOrThrow
   */
  export type PermissionApiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionApi
     */
    select?: PermissionApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionApi
     */
    omit?: PermissionApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionApiInclude<ExtArgs> | null
    /**
     * Filter, which PermissionApi to fetch.
     */
    where: PermissionApiWhereUniqueInput
  }

  /**
   * PermissionApi findFirst
   */
  export type PermissionApiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionApi
     */
    select?: PermissionApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionApi
     */
    omit?: PermissionApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionApiInclude<ExtArgs> | null
    /**
     * Filter, which PermissionApi to fetch.
     */
    where?: PermissionApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionApis to fetch.
     */
    orderBy?: PermissionApiOrderByWithRelationInput | PermissionApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermissionApis.
     */
    cursor?: PermissionApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionApis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionApis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermissionApis.
     */
    distinct?: PermissionApiScalarFieldEnum | PermissionApiScalarFieldEnum[]
  }

  /**
   * PermissionApi findFirstOrThrow
   */
  export type PermissionApiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionApi
     */
    select?: PermissionApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionApi
     */
    omit?: PermissionApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionApiInclude<ExtArgs> | null
    /**
     * Filter, which PermissionApi to fetch.
     */
    where?: PermissionApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionApis to fetch.
     */
    orderBy?: PermissionApiOrderByWithRelationInput | PermissionApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermissionApis.
     */
    cursor?: PermissionApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionApis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionApis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermissionApis.
     */
    distinct?: PermissionApiScalarFieldEnum | PermissionApiScalarFieldEnum[]
  }

  /**
   * PermissionApi findMany
   */
  export type PermissionApiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionApi
     */
    select?: PermissionApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionApi
     */
    omit?: PermissionApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionApiInclude<ExtArgs> | null
    /**
     * Filter, which PermissionApis to fetch.
     */
    where?: PermissionApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionApis to fetch.
     */
    orderBy?: PermissionApiOrderByWithRelationInput | PermissionApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PermissionApis.
     */
    cursor?: PermissionApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionApis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionApis.
     */
    skip?: number
    distinct?: PermissionApiScalarFieldEnum | PermissionApiScalarFieldEnum[]
  }

  /**
   * PermissionApi create
   */
  export type PermissionApiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionApi
     */
    select?: PermissionApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionApi
     */
    omit?: PermissionApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionApiInclude<ExtArgs> | null
    /**
     * The data needed to create a PermissionApi.
     */
    data: XOR<PermissionApiCreateInput, PermissionApiUncheckedCreateInput>
  }

  /**
   * PermissionApi createMany
   */
  export type PermissionApiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PermissionApis.
     */
    data: PermissionApiCreateManyInput | PermissionApiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PermissionApi update
   */
  export type PermissionApiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionApi
     */
    select?: PermissionApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionApi
     */
    omit?: PermissionApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionApiInclude<ExtArgs> | null
    /**
     * The data needed to update a PermissionApi.
     */
    data: XOR<PermissionApiUpdateInput, PermissionApiUncheckedUpdateInput>
    /**
     * Choose, which PermissionApi to update.
     */
    where: PermissionApiWhereUniqueInput
  }

  /**
   * PermissionApi updateMany
   */
  export type PermissionApiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PermissionApis.
     */
    data: XOR<PermissionApiUpdateManyMutationInput, PermissionApiUncheckedUpdateManyInput>
    /**
     * Filter which PermissionApis to update
     */
    where?: PermissionApiWhereInput
    /**
     * Limit how many PermissionApis to update.
     */
    limit?: number
  }

  /**
   * PermissionApi upsert
   */
  export type PermissionApiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionApi
     */
    select?: PermissionApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionApi
     */
    omit?: PermissionApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionApiInclude<ExtArgs> | null
    /**
     * The filter to search for the PermissionApi to update in case it exists.
     */
    where: PermissionApiWhereUniqueInput
    /**
     * In case the PermissionApi found by the `where` argument doesn't exist, create a new PermissionApi with this data.
     */
    create: XOR<PermissionApiCreateInput, PermissionApiUncheckedCreateInput>
    /**
     * In case the PermissionApi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionApiUpdateInput, PermissionApiUncheckedUpdateInput>
  }

  /**
   * PermissionApi delete
   */
  export type PermissionApiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionApi
     */
    select?: PermissionApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionApi
     */
    omit?: PermissionApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionApiInclude<ExtArgs> | null
    /**
     * Filter which PermissionApi to delete.
     */
    where: PermissionApiWhereUniqueInput
  }

  /**
   * PermissionApi deleteMany
   */
  export type PermissionApiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermissionApis to delete
     */
    where?: PermissionApiWhereInput
    /**
     * Limit how many PermissionApis to delete.
     */
    limit?: number
  }

  /**
   * PermissionApi without action
   */
  export type PermissionApiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionApi
     */
    select?: PermissionApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionApi
     */
    omit?: PermissionApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionApiInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    salt: 'salt',
    email: 'email',
    freezed: 'freezed',
    avatar: 'avatar',
    desc: 'desc',
    createTime: 'createTime',
    updateTime: 'updateTime'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserOnRoleScalarFieldEnum: {
    userId: 'userId',
    roleId: 'roleId',
    createTime: 'createTime',
    updateTime: 'updateTime'
  };

  export type UserOnRoleScalarFieldEnum = (typeof UserOnRoleScalarFieldEnum)[keyof typeof UserOnRoleScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    desc: 'desc',
    createTime: 'createTime',
    updateTime: 'updateTime'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const RoleOnPermissionScalarFieldEnum: {
    roleId: 'roleId',
    permissionId: 'permissionId'
  };

  export type RoleOnPermissionScalarFieldEnum = (typeof RoleOnPermissionScalarFieldEnum)[keyof typeof RoleOnPermissionScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    code: 'code',
    type: 'type',
    parentId: 'parentId',
    createTime: 'createTime',
    updateTime: 'updateTime'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const PermissionApiScalarFieldEnum: {
    id: 'id',
    apiUrl: 'apiUrl',
    apiMethod: 'apiMethod',
    permissionId: 'permissionId',
    createTime: 'createTime',
    updateTime: 'updateTime'
  };

  export type PermissionApiScalarFieldEnum = (typeof PermissionApiScalarFieldEnum)[keyof typeof PermissionApiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password',
    salt: 'salt',
    email: 'email',
    avatar: 'avatar',
    desc: 'desc'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const RoleOrderByRelevanceFieldEnum: {
    name: 'name',
    desc: 'desc'
  };

  export type RoleOrderByRelevanceFieldEnum = (typeof RoleOrderByRelevanceFieldEnum)[keyof typeof RoleOrderByRelevanceFieldEnum]


  export const PermissionOrderByRelevanceFieldEnum: {
    title: 'title',
    code: 'code'
  };

  export type PermissionOrderByRelevanceFieldEnum = (typeof PermissionOrderByRelevanceFieldEnum)[keyof typeof PermissionOrderByRelevanceFieldEnum]


  export const PermissionApiOrderByRelevanceFieldEnum: {
    apiUrl: 'apiUrl',
    apiMethod: 'apiMethod'
  };

  export type PermissionApiOrderByRelevanceFieldEnum = (typeof PermissionApiOrderByRelevanceFieldEnum)[keyof typeof PermissionApiOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    freezed?: IntFilter<"User"> | number
    avatar?: StringFilter<"User"> | string
    desc?: StringFilter<"User"> | string
    createTime?: DateTimeFilter<"User"> | Date | string
    updateTime?: DateTimeFilter<"User"> | Date | string
    roles?: UserOnRoleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    email?: SortOrder
    freezed?: SortOrder
    avatar?: SortOrder
    desc?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
    roles?: UserOnRoleOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    freezed?: IntFilter<"User"> | number
    avatar?: StringFilter<"User"> | string
    desc?: StringFilter<"User"> | string
    createTime?: DateTimeFilter<"User"> | Date | string
    updateTime?: DateTimeFilter<"User"> | Date | string
    roles?: UserOnRoleListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    email?: SortOrder
    freezed?: SortOrder
    avatar?: SortOrder
    desc?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    salt?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    freezed?: IntWithAggregatesFilter<"User"> | number
    avatar?: StringWithAggregatesFilter<"User"> | string
    desc?: StringWithAggregatesFilter<"User"> | string
    createTime?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateTime?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserOnRoleWhereInput = {
    AND?: UserOnRoleWhereInput | UserOnRoleWhereInput[]
    OR?: UserOnRoleWhereInput[]
    NOT?: UserOnRoleWhereInput | UserOnRoleWhereInput[]
    userId?: IntFilter<"UserOnRole"> | number
    roleId?: IntFilter<"UserOnRole"> | number
    createTime?: DateTimeFilter<"UserOnRole"> | Date | string
    updateTime?: DateTimeFilter<"UserOnRole"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type UserOnRoleOrderByWithRelationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
    user?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type UserOnRoleWhereUniqueInput = Prisma.AtLeast<{
    userId_roleId?: UserOnRoleUserIdRoleIdCompoundUniqueInput
    AND?: UserOnRoleWhereInput | UserOnRoleWhereInput[]
    OR?: UserOnRoleWhereInput[]
    NOT?: UserOnRoleWhereInput | UserOnRoleWhereInput[]
    userId?: IntFilter<"UserOnRole"> | number
    roleId?: IntFilter<"UserOnRole"> | number
    createTime?: DateTimeFilter<"UserOnRole"> | Date | string
    updateTime?: DateTimeFilter<"UserOnRole"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "userId_roleId">

  export type UserOnRoleOrderByWithAggregationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
    _count?: UserOnRoleCountOrderByAggregateInput
    _avg?: UserOnRoleAvgOrderByAggregateInput
    _max?: UserOnRoleMaxOrderByAggregateInput
    _min?: UserOnRoleMinOrderByAggregateInput
    _sum?: UserOnRoleSumOrderByAggregateInput
  }

  export type UserOnRoleScalarWhereWithAggregatesInput = {
    AND?: UserOnRoleScalarWhereWithAggregatesInput | UserOnRoleScalarWhereWithAggregatesInput[]
    OR?: UserOnRoleScalarWhereWithAggregatesInput[]
    NOT?: UserOnRoleScalarWhereWithAggregatesInput | UserOnRoleScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UserOnRole"> | number
    roleId?: IntWithAggregatesFilter<"UserOnRole"> | number
    createTime?: DateTimeWithAggregatesFilter<"UserOnRole"> | Date | string
    updateTime?: DateTimeWithAggregatesFilter<"UserOnRole"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    desc?: StringFilter<"Role"> | string
    createTime?: DateTimeFilter<"Role"> | Date | string
    updateTime?: DateTimeFilter<"Role"> | Date | string
    users?: UserOnRoleListRelationFilter
    permission?: RoleOnPermissionListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
    users?: UserOnRoleOrderByRelationAggregateInput
    permission?: RoleOnPermissionOrderByRelationAggregateInput
    _relevance?: RoleOrderByRelevanceInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    desc?: StringFilter<"Role"> | string
    createTime?: DateTimeFilter<"Role"> | Date | string
    updateTime?: DateTimeFilter<"Role"> | Date | string
    users?: UserOnRoleListRelationFilter
    permission?: RoleOnPermissionListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
    desc?: StringWithAggregatesFilter<"Role"> | string
    createTime?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updateTime?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type RoleOnPermissionWhereInput = {
    AND?: RoleOnPermissionWhereInput | RoleOnPermissionWhereInput[]
    OR?: RoleOnPermissionWhereInput[]
    NOT?: RoleOnPermissionWhereInput | RoleOnPermissionWhereInput[]
    roleId?: IntFilter<"RoleOnPermission"> | number
    permissionId?: IntFilter<"RoleOnPermission"> | number
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
  }

  export type RoleOnPermissionOrderByWithRelationInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    role?: RoleOrderByWithRelationInput
    permission?: PermissionOrderByWithRelationInput
  }

  export type RoleOnPermissionWhereUniqueInput = Prisma.AtLeast<{
    roleId_permissionId?: RoleOnPermissionRoleIdPermissionIdCompoundUniqueInput
    AND?: RoleOnPermissionWhereInput | RoleOnPermissionWhereInput[]
    OR?: RoleOnPermissionWhereInput[]
    NOT?: RoleOnPermissionWhereInput | RoleOnPermissionWhereInput[]
    roleId?: IntFilter<"RoleOnPermission"> | number
    permissionId?: IntFilter<"RoleOnPermission"> | number
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
  }, "roleId_permissionId">

  export type RoleOnPermissionOrderByWithAggregationInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    _count?: RoleOnPermissionCountOrderByAggregateInput
    _avg?: RoleOnPermissionAvgOrderByAggregateInput
    _max?: RoleOnPermissionMaxOrderByAggregateInput
    _min?: RoleOnPermissionMinOrderByAggregateInput
    _sum?: RoleOnPermissionSumOrderByAggregateInput
  }

  export type RoleOnPermissionScalarWhereWithAggregatesInput = {
    AND?: RoleOnPermissionScalarWhereWithAggregatesInput | RoleOnPermissionScalarWhereWithAggregatesInput[]
    OR?: RoleOnPermissionScalarWhereWithAggregatesInput[]
    NOT?: RoleOnPermissionScalarWhereWithAggregatesInput | RoleOnPermissionScalarWhereWithAggregatesInput[]
    roleId?: IntWithAggregatesFilter<"RoleOnPermission"> | number
    permissionId?: IntWithAggregatesFilter<"RoleOnPermission"> | number
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: IntFilter<"Permission"> | number
    title?: StringFilter<"Permission"> | string
    code?: StringFilter<"Permission"> | string
    type?: IntFilter<"Permission"> | number
    parentId?: IntFilter<"Permission"> | number
    createTime?: DateTimeFilter<"Permission"> | Date | string
    updateTime?: DateTimeFilter<"Permission"> | Date | string
    roles?: RoleOnPermissionListRelationFilter
    permissionApi?: PermissionApiListRelationFilter
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    code?: SortOrder
    type?: SortOrder
    parentId?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
    roles?: RoleOnPermissionOrderByRelationAggregateInput
    permissionApi?: PermissionApiOrderByRelationAggregateInput
    _relevance?: PermissionOrderByRelevanceInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    title?: StringFilter<"Permission"> | string
    code?: StringFilter<"Permission"> | string
    type?: IntFilter<"Permission"> | number
    parentId?: IntFilter<"Permission"> | number
    createTime?: DateTimeFilter<"Permission"> | Date | string
    updateTime?: DateTimeFilter<"Permission"> | Date | string
    roles?: RoleOnPermissionListRelationFilter
    permissionApi?: PermissionApiListRelationFilter
  }, "id">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    code?: SortOrder
    type?: SortOrder
    parentId?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _avg?: PermissionAvgOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
    _sum?: PermissionSumOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Permission"> | number
    title?: StringWithAggregatesFilter<"Permission"> | string
    code?: StringWithAggregatesFilter<"Permission"> | string
    type?: IntWithAggregatesFilter<"Permission"> | number
    parentId?: IntWithAggregatesFilter<"Permission"> | number
    createTime?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
    updateTime?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
  }

  export type PermissionApiWhereInput = {
    AND?: PermissionApiWhereInput | PermissionApiWhereInput[]
    OR?: PermissionApiWhereInput[]
    NOT?: PermissionApiWhereInput | PermissionApiWhereInput[]
    id?: IntFilter<"PermissionApi"> | number
    apiUrl?: StringFilter<"PermissionApi"> | string
    apiMethod?: StringFilter<"PermissionApi"> | string
    permissionId?: IntFilter<"PermissionApi"> | number
    createTime?: DateTimeFilter<"PermissionApi"> | Date | string
    updateTime?: DateTimeFilter<"PermissionApi"> | Date | string
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
  }

  export type PermissionApiOrderByWithRelationInput = {
    id?: SortOrder
    apiUrl?: SortOrder
    apiMethod?: SortOrder
    permissionId?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
    permission?: PermissionOrderByWithRelationInput
    _relevance?: PermissionApiOrderByRelevanceInput
  }

  export type PermissionApiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PermissionApiWhereInput | PermissionApiWhereInput[]
    OR?: PermissionApiWhereInput[]
    NOT?: PermissionApiWhereInput | PermissionApiWhereInput[]
    apiUrl?: StringFilter<"PermissionApi"> | string
    apiMethod?: StringFilter<"PermissionApi"> | string
    permissionId?: IntFilter<"PermissionApi"> | number
    createTime?: DateTimeFilter<"PermissionApi"> | Date | string
    updateTime?: DateTimeFilter<"PermissionApi"> | Date | string
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
  }, "id">

  export type PermissionApiOrderByWithAggregationInput = {
    id?: SortOrder
    apiUrl?: SortOrder
    apiMethod?: SortOrder
    permissionId?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
    _count?: PermissionApiCountOrderByAggregateInput
    _avg?: PermissionApiAvgOrderByAggregateInput
    _max?: PermissionApiMaxOrderByAggregateInput
    _min?: PermissionApiMinOrderByAggregateInput
    _sum?: PermissionApiSumOrderByAggregateInput
  }

  export type PermissionApiScalarWhereWithAggregatesInput = {
    AND?: PermissionApiScalarWhereWithAggregatesInput | PermissionApiScalarWhereWithAggregatesInput[]
    OR?: PermissionApiScalarWhereWithAggregatesInput[]
    NOT?: PermissionApiScalarWhereWithAggregatesInput | PermissionApiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PermissionApi"> | number
    apiUrl?: StringWithAggregatesFilter<"PermissionApi"> | string
    apiMethod?: StringWithAggregatesFilter<"PermissionApi"> | string
    permissionId?: IntWithAggregatesFilter<"PermissionApi"> | number
    createTime?: DateTimeWithAggregatesFilter<"PermissionApi"> | Date | string
    updateTime?: DateTimeWithAggregatesFilter<"PermissionApi"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    salt: string
    email?: string
    freezed?: number
    avatar?: string
    desc?: string
    createTime?: Date | string
    updateTime?: Date | string
    roles?: UserOnRoleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    salt: string
    email?: string
    freezed?: number
    avatar?: string
    desc?: string
    createTime?: Date | string
    updateTime?: Date | string
    roles?: UserOnRoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    freezed?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserOnRoleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    freezed?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserOnRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    salt: string
    email?: string
    freezed?: number
    avatar?: string
    desc?: string
    createTime?: Date | string
    updateTime?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    freezed?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    freezed?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnRoleCreateInput = {
    createTime?: Date | string
    updateTime?: Date | string
    user: UserCreateNestedOneWithoutRolesInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserOnRoleUncheckedCreateInput = {
    userId: number
    roleId: number
    createTime?: Date | string
    updateTime?: Date | string
  }

  export type UserOnRoleUpdateInput = {
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserOnRoleUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnRoleCreateManyInput = {
    userId: number
    roleId: number
    createTime?: Date | string
    updateTime?: Date | string
  }

  export type UserOnRoleUpdateManyMutationInput = {
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnRoleUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    name: string
    desc?: string
    createTime?: Date | string
    updateTime?: Date | string
    users?: UserOnRoleCreateNestedManyWithoutRoleInput
    permission?: RoleOnPermissionCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    desc?: string
    createTime?: Date | string
    updateTime?: Date | string
    users?: UserOnRoleUncheckedCreateNestedManyWithoutRoleInput
    permission?: RoleOnPermissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserOnRoleUpdateManyWithoutRoleNestedInput
    permission?: RoleOnPermissionUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserOnRoleUncheckedUpdateManyWithoutRoleNestedInput
    permission?: RoleOnPermissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
    desc?: string
    createTime?: Date | string
    updateTime?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleOnPermissionCreateInput = {
    role: RoleCreateNestedOneWithoutPermissionInput
    permission: PermissionCreateNestedOneWithoutRolesInput
  }

  export type RoleOnPermissionUncheckedCreateInput = {
    roleId: number
    permissionId: number
  }

  export type RoleOnPermissionUpdateInput = {
    role?: RoleUpdateOneRequiredWithoutPermissionNestedInput
    permission?: PermissionUpdateOneRequiredWithoutRolesNestedInput
  }

  export type RoleOnPermissionUncheckedUpdateInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type RoleOnPermissionCreateManyInput = {
    roleId: number
    permissionId: number
  }

  export type RoleOnPermissionUpdateManyMutationInput = {

  }

  export type RoleOnPermissionUncheckedUpdateManyInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionCreateInput = {
    title: string
    code: string
    type: number
    parentId: number
    createTime?: Date | string
    updateTime?: Date | string
    roles?: RoleOnPermissionCreateNestedManyWithoutPermissionInput
    permissionApi?: PermissionApiCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: number
    title: string
    code: string
    type: number
    parentId: number
    createTime?: Date | string
    updateTime?: Date | string
    roles?: RoleOnPermissionUncheckedCreateNestedManyWithoutPermissionInput
    permissionApi?: PermissionApiUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleOnPermissionUpdateManyWithoutPermissionNestedInput
    permissionApi?: PermissionApiUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleOnPermissionUncheckedUpdateManyWithoutPermissionNestedInput
    permissionApi?: PermissionApiUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionCreateManyInput = {
    id?: number
    title: string
    code: string
    type: number
    parentId: number
    createTime?: Date | string
    updateTime?: Date | string
  }

  export type PermissionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionApiCreateInput = {
    apiUrl: string
    apiMethod: string
    createTime?: Date | string
    updateTime?: Date | string
    permission: PermissionCreateNestedOneWithoutPermissionApiInput
  }

  export type PermissionApiUncheckedCreateInput = {
    id?: number
    apiUrl: string
    apiMethod: string
    permissionId: number
    createTime?: Date | string
    updateTime?: Date | string
  }

  export type PermissionApiUpdateInput = {
    apiUrl?: StringFieldUpdateOperationsInput | string
    apiMethod?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: PermissionUpdateOneRequiredWithoutPermissionApiNestedInput
  }

  export type PermissionApiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    apiUrl?: StringFieldUpdateOperationsInput | string
    apiMethod?: StringFieldUpdateOperationsInput | string
    permissionId?: IntFieldUpdateOperationsInput | number
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionApiCreateManyInput = {
    id?: number
    apiUrl: string
    apiMethod: string
    permissionId: number
    createTime?: Date | string
    updateTime?: Date | string
  }

  export type PermissionApiUpdateManyMutationInput = {
    apiUrl?: StringFieldUpdateOperationsInput | string
    apiMethod?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionApiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    apiUrl?: StringFieldUpdateOperationsInput | string
    apiMethod?: StringFieldUpdateOperationsInput | string
    permissionId?: IntFieldUpdateOperationsInput | number
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserOnRoleListRelationFilter = {
    every?: UserOnRoleWhereInput
    some?: UserOnRoleWhereInput
    none?: UserOnRoleWhereInput
  }

  export type UserOnRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    email?: SortOrder
    freezed?: SortOrder
    avatar?: SortOrder
    desc?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    freezed?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    email?: SortOrder
    freezed?: SortOrder
    avatar?: SortOrder
    desc?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    email?: SortOrder
    freezed?: SortOrder
    avatar?: SortOrder
    desc?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    freezed?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserOnRoleUserIdRoleIdCompoundUniqueInput = {
    userId: number
    roleId: number
  }

  export type UserOnRoleCountOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
  }

  export type UserOnRoleAvgOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserOnRoleMaxOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
  }

  export type UserOnRoleMinOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
  }

  export type UserOnRoleSumOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type RoleOnPermissionListRelationFilter = {
    every?: RoleOnPermissionWhereInput
    some?: RoleOnPermissionWhereInput
    none?: RoleOnPermissionWhereInput
  }

  export type RoleOnPermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleOrderByRelevanceInput = {
    fields: RoleOrderByRelevanceFieldEnum | RoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermissionScalarRelationFilter = {
    is?: PermissionWhereInput
    isNot?: PermissionWhereInput
  }

  export type RoleOnPermissionRoleIdPermissionIdCompoundUniqueInput = {
    roleId: number
    permissionId: number
  }

  export type RoleOnPermissionCountOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type RoleOnPermissionAvgOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type RoleOnPermissionMaxOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type RoleOnPermissionMinOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type RoleOnPermissionSumOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type PermissionApiListRelationFilter = {
    every?: PermissionApiWhereInput
    some?: PermissionApiWhereInput
    none?: PermissionApiWhereInput
  }

  export type PermissionApiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissionOrderByRelevanceInput = {
    fields: PermissionOrderByRelevanceFieldEnum | PermissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    code?: SortOrder
    type?: SortOrder
    parentId?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
  }

  export type PermissionAvgOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    parentId?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    code?: SortOrder
    type?: SortOrder
    parentId?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    code?: SortOrder
    type?: SortOrder
    parentId?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
  }

  export type PermissionSumOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    parentId?: SortOrder
  }

  export type PermissionApiOrderByRelevanceInput = {
    fields: PermissionApiOrderByRelevanceFieldEnum | PermissionApiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PermissionApiCountOrderByAggregateInput = {
    id?: SortOrder
    apiUrl?: SortOrder
    apiMethod?: SortOrder
    permissionId?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
  }

  export type PermissionApiAvgOrderByAggregateInput = {
    id?: SortOrder
    permissionId?: SortOrder
  }

  export type PermissionApiMaxOrderByAggregateInput = {
    id?: SortOrder
    apiUrl?: SortOrder
    apiMethod?: SortOrder
    permissionId?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
  }

  export type PermissionApiMinOrderByAggregateInput = {
    id?: SortOrder
    apiUrl?: SortOrder
    apiMethod?: SortOrder
    permissionId?: SortOrder
    createTime?: SortOrder
    updateTime?: SortOrder
  }

  export type PermissionApiSumOrderByAggregateInput = {
    id?: SortOrder
    permissionId?: SortOrder
  }

  export type UserOnRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOnRoleCreateWithoutUserInput, UserOnRoleUncheckedCreateWithoutUserInput> | UserOnRoleCreateWithoutUserInput[] | UserOnRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnRoleCreateOrConnectWithoutUserInput | UserOnRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserOnRoleCreateManyUserInputEnvelope
    connect?: UserOnRoleWhereUniqueInput | UserOnRoleWhereUniqueInput[]
  }

  export type UserOnRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOnRoleCreateWithoutUserInput, UserOnRoleUncheckedCreateWithoutUserInput> | UserOnRoleCreateWithoutUserInput[] | UserOnRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnRoleCreateOrConnectWithoutUserInput | UserOnRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserOnRoleCreateManyUserInputEnvelope
    connect?: UserOnRoleWhereUniqueInput | UserOnRoleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserOnRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOnRoleCreateWithoutUserInput, UserOnRoleUncheckedCreateWithoutUserInput> | UserOnRoleCreateWithoutUserInput[] | UserOnRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnRoleCreateOrConnectWithoutUserInput | UserOnRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserOnRoleUpsertWithWhereUniqueWithoutUserInput | UserOnRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOnRoleCreateManyUserInputEnvelope
    set?: UserOnRoleWhereUniqueInput | UserOnRoleWhereUniqueInput[]
    disconnect?: UserOnRoleWhereUniqueInput | UserOnRoleWhereUniqueInput[]
    delete?: UserOnRoleWhereUniqueInput | UserOnRoleWhereUniqueInput[]
    connect?: UserOnRoleWhereUniqueInput | UserOnRoleWhereUniqueInput[]
    update?: UserOnRoleUpdateWithWhereUniqueWithoutUserInput | UserOnRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOnRoleUpdateManyWithWhereWithoutUserInput | UserOnRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOnRoleScalarWhereInput | UserOnRoleScalarWhereInput[]
  }

  export type UserOnRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOnRoleCreateWithoutUserInput, UserOnRoleUncheckedCreateWithoutUserInput> | UserOnRoleCreateWithoutUserInput[] | UserOnRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnRoleCreateOrConnectWithoutUserInput | UserOnRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserOnRoleUpsertWithWhereUniqueWithoutUserInput | UserOnRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOnRoleCreateManyUserInputEnvelope
    set?: UserOnRoleWhereUniqueInput | UserOnRoleWhereUniqueInput[]
    disconnect?: UserOnRoleWhereUniqueInput | UserOnRoleWhereUniqueInput[]
    delete?: UserOnRoleWhereUniqueInput | UserOnRoleWhereUniqueInput[]
    connect?: UserOnRoleWhereUniqueInput | UserOnRoleWhereUniqueInput[]
    update?: UserOnRoleUpdateWithWhereUniqueWithoutUserInput | UserOnRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOnRoleUpdateManyWithWhereWithoutUserInput | UserOnRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOnRoleScalarWhereInput | UserOnRoleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput
    upsert?: UserUpsertWithoutRolesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRolesInput, UserUpdateWithoutRolesInput>, UserUncheckedUpdateWithoutRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type UserOnRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserOnRoleCreateWithoutRoleInput, UserOnRoleUncheckedCreateWithoutRoleInput> | UserOnRoleCreateWithoutRoleInput[] | UserOnRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserOnRoleCreateOrConnectWithoutRoleInput | UserOnRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserOnRoleCreateManyRoleInputEnvelope
    connect?: UserOnRoleWhereUniqueInput | UserOnRoleWhereUniqueInput[]
  }

  export type RoleOnPermissionCreateNestedManyWithoutRoleInput = {
    create?: XOR<RoleOnPermissionCreateWithoutRoleInput, RoleOnPermissionUncheckedCreateWithoutRoleInput> | RoleOnPermissionCreateWithoutRoleInput[] | RoleOnPermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleOnPermissionCreateOrConnectWithoutRoleInput | RoleOnPermissionCreateOrConnectWithoutRoleInput[]
    createMany?: RoleOnPermissionCreateManyRoleInputEnvelope
    connect?: RoleOnPermissionWhereUniqueInput | RoleOnPermissionWhereUniqueInput[]
  }

  export type UserOnRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserOnRoleCreateWithoutRoleInput, UserOnRoleUncheckedCreateWithoutRoleInput> | UserOnRoleCreateWithoutRoleInput[] | UserOnRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserOnRoleCreateOrConnectWithoutRoleInput | UserOnRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserOnRoleCreateManyRoleInputEnvelope
    connect?: UserOnRoleWhereUniqueInput | UserOnRoleWhereUniqueInput[]
  }

  export type RoleOnPermissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<RoleOnPermissionCreateWithoutRoleInput, RoleOnPermissionUncheckedCreateWithoutRoleInput> | RoleOnPermissionCreateWithoutRoleInput[] | RoleOnPermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleOnPermissionCreateOrConnectWithoutRoleInput | RoleOnPermissionCreateOrConnectWithoutRoleInput[]
    createMany?: RoleOnPermissionCreateManyRoleInputEnvelope
    connect?: RoleOnPermissionWhereUniqueInput | RoleOnPermissionWhereUniqueInput[]
  }

  export type UserOnRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserOnRoleCreateWithoutRoleInput, UserOnRoleUncheckedCreateWithoutRoleInput> | UserOnRoleCreateWithoutRoleInput[] | UserOnRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserOnRoleCreateOrConnectWithoutRoleInput | UserOnRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserOnRoleUpsertWithWhereUniqueWithoutRoleInput | UserOnRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserOnRoleCreateManyRoleInputEnvelope
    set?: UserOnRoleWhereUniqueInput | UserOnRoleWhereUniqueInput[]
    disconnect?: UserOnRoleWhereUniqueInput | UserOnRoleWhereUniqueInput[]
    delete?: UserOnRoleWhereUniqueInput | UserOnRoleWhereUniqueInput[]
    connect?: UserOnRoleWhereUniqueInput | UserOnRoleWhereUniqueInput[]
    update?: UserOnRoleUpdateWithWhereUniqueWithoutRoleInput | UserOnRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserOnRoleUpdateManyWithWhereWithoutRoleInput | UserOnRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserOnRoleScalarWhereInput | UserOnRoleScalarWhereInput[]
  }

  export type RoleOnPermissionUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RoleOnPermissionCreateWithoutRoleInput, RoleOnPermissionUncheckedCreateWithoutRoleInput> | RoleOnPermissionCreateWithoutRoleInput[] | RoleOnPermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleOnPermissionCreateOrConnectWithoutRoleInput | RoleOnPermissionCreateOrConnectWithoutRoleInput[]
    upsert?: RoleOnPermissionUpsertWithWhereUniqueWithoutRoleInput | RoleOnPermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RoleOnPermissionCreateManyRoleInputEnvelope
    set?: RoleOnPermissionWhereUniqueInput | RoleOnPermissionWhereUniqueInput[]
    disconnect?: RoleOnPermissionWhereUniqueInput | RoleOnPermissionWhereUniqueInput[]
    delete?: RoleOnPermissionWhereUniqueInput | RoleOnPermissionWhereUniqueInput[]
    connect?: RoleOnPermissionWhereUniqueInput | RoleOnPermissionWhereUniqueInput[]
    update?: RoleOnPermissionUpdateWithWhereUniqueWithoutRoleInput | RoleOnPermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RoleOnPermissionUpdateManyWithWhereWithoutRoleInput | RoleOnPermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RoleOnPermissionScalarWhereInput | RoleOnPermissionScalarWhereInput[]
  }

  export type UserOnRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserOnRoleCreateWithoutRoleInput, UserOnRoleUncheckedCreateWithoutRoleInput> | UserOnRoleCreateWithoutRoleInput[] | UserOnRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserOnRoleCreateOrConnectWithoutRoleInput | UserOnRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserOnRoleUpsertWithWhereUniqueWithoutRoleInput | UserOnRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserOnRoleCreateManyRoleInputEnvelope
    set?: UserOnRoleWhereUniqueInput | UserOnRoleWhereUniqueInput[]
    disconnect?: UserOnRoleWhereUniqueInput | UserOnRoleWhereUniqueInput[]
    delete?: UserOnRoleWhereUniqueInput | UserOnRoleWhereUniqueInput[]
    connect?: UserOnRoleWhereUniqueInput | UserOnRoleWhereUniqueInput[]
    update?: UserOnRoleUpdateWithWhereUniqueWithoutRoleInput | UserOnRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserOnRoleUpdateManyWithWhereWithoutRoleInput | UserOnRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserOnRoleScalarWhereInput | UserOnRoleScalarWhereInput[]
  }

  export type RoleOnPermissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RoleOnPermissionCreateWithoutRoleInput, RoleOnPermissionUncheckedCreateWithoutRoleInput> | RoleOnPermissionCreateWithoutRoleInput[] | RoleOnPermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleOnPermissionCreateOrConnectWithoutRoleInput | RoleOnPermissionCreateOrConnectWithoutRoleInput[]
    upsert?: RoleOnPermissionUpsertWithWhereUniqueWithoutRoleInput | RoleOnPermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RoleOnPermissionCreateManyRoleInputEnvelope
    set?: RoleOnPermissionWhereUniqueInput | RoleOnPermissionWhereUniqueInput[]
    disconnect?: RoleOnPermissionWhereUniqueInput | RoleOnPermissionWhereUniqueInput[]
    delete?: RoleOnPermissionWhereUniqueInput | RoleOnPermissionWhereUniqueInput[]
    connect?: RoleOnPermissionWhereUniqueInput | RoleOnPermissionWhereUniqueInput[]
    update?: RoleOnPermissionUpdateWithWhereUniqueWithoutRoleInput | RoleOnPermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RoleOnPermissionUpdateManyWithWhereWithoutRoleInput | RoleOnPermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RoleOnPermissionScalarWhereInput | RoleOnPermissionScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutPermissionInput = {
    create?: XOR<RoleCreateWithoutPermissionInput, RoleUncheckedCreateWithoutPermissionInput>
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionInput
    connect?: RoleWhereUniqueInput
  }

  export type PermissionCreateNestedOneWithoutRolesInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput
    connect?: PermissionWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutPermissionNestedInput = {
    create?: XOR<RoleCreateWithoutPermissionInput, RoleUncheckedCreateWithoutPermissionInput>
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionInput
    upsert?: RoleUpsertWithoutPermissionInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutPermissionInput, RoleUpdateWithoutPermissionInput>, RoleUncheckedUpdateWithoutPermissionInput>
  }

  export type PermissionUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput
    upsert?: PermissionUpsertWithoutRolesInput
    connect?: PermissionWhereUniqueInput
    update?: XOR<XOR<PermissionUpdateToOneWithWhereWithoutRolesInput, PermissionUpdateWithoutRolesInput>, PermissionUncheckedUpdateWithoutRolesInput>
  }

  export type RoleOnPermissionCreateNestedManyWithoutPermissionInput = {
    create?: XOR<RoleOnPermissionCreateWithoutPermissionInput, RoleOnPermissionUncheckedCreateWithoutPermissionInput> | RoleOnPermissionCreateWithoutPermissionInput[] | RoleOnPermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RoleOnPermissionCreateOrConnectWithoutPermissionInput | RoleOnPermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: RoleOnPermissionCreateManyPermissionInputEnvelope
    connect?: RoleOnPermissionWhereUniqueInput | RoleOnPermissionWhereUniqueInput[]
  }

  export type PermissionApiCreateNestedManyWithoutPermissionInput = {
    create?: XOR<PermissionApiCreateWithoutPermissionInput, PermissionApiUncheckedCreateWithoutPermissionInput> | PermissionApiCreateWithoutPermissionInput[] | PermissionApiUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: PermissionApiCreateOrConnectWithoutPermissionInput | PermissionApiCreateOrConnectWithoutPermissionInput[]
    createMany?: PermissionApiCreateManyPermissionInputEnvelope
    connect?: PermissionApiWhereUniqueInput | PermissionApiWhereUniqueInput[]
  }

  export type RoleOnPermissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<RoleOnPermissionCreateWithoutPermissionInput, RoleOnPermissionUncheckedCreateWithoutPermissionInput> | RoleOnPermissionCreateWithoutPermissionInput[] | RoleOnPermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RoleOnPermissionCreateOrConnectWithoutPermissionInput | RoleOnPermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: RoleOnPermissionCreateManyPermissionInputEnvelope
    connect?: RoleOnPermissionWhereUniqueInput | RoleOnPermissionWhereUniqueInput[]
  }

  export type PermissionApiUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<PermissionApiCreateWithoutPermissionInput, PermissionApiUncheckedCreateWithoutPermissionInput> | PermissionApiCreateWithoutPermissionInput[] | PermissionApiUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: PermissionApiCreateOrConnectWithoutPermissionInput | PermissionApiCreateOrConnectWithoutPermissionInput[]
    createMany?: PermissionApiCreateManyPermissionInputEnvelope
    connect?: PermissionApiWhereUniqueInput | PermissionApiWhereUniqueInput[]
  }

  export type RoleOnPermissionUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<RoleOnPermissionCreateWithoutPermissionInput, RoleOnPermissionUncheckedCreateWithoutPermissionInput> | RoleOnPermissionCreateWithoutPermissionInput[] | RoleOnPermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RoleOnPermissionCreateOrConnectWithoutPermissionInput | RoleOnPermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: RoleOnPermissionUpsertWithWhereUniqueWithoutPermissionInput | RoleOnPermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: RoleOnPermissionCreateManyPermissionInputEnvelope
    set?: RoleOnPermissionWhereUniqueInput | RoleOnPermissionWhereUniqueInput[]
    disconnect?: RoleOnPermissionWhereUniqueInput | RoleOnPermissionWhereUniqueInput[]
    delete?: RoleOnPermissionWhereUniqueInput | RoleOnPermissionWhereUniqueInput[]
    connect?: RoleOnPermissionWhereUniqueInput | RoleOnPermissionWhereUniqueInput[]
    update?: RoleOnPermissionUpdateWithWhereUniqueWithoutPermissionInput | RoleOnPermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: RoleOnPermissionUpdateManyWithWhereWithoutPermissionInput | RoleOnPermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: RoleOnPermissionScalarWhereInput | RoleOnPermissionScalarWhereInput[]
  }

  export type PermissionApiUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<PermissionApiCreateWithoutPermissionInput, PermissionApiUncheckedCreateWithoutPermissionInput> | PermissionApiCreateWithoutPermissionInput[] | PermissionApiUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: PermissionApiCreateOrConnectWithoutPermissionInput | PermissionApiCreateOrConnectWithoutPermissionInput[]
    upsert?: PermissionApiUpsertWithWhereUniqueWithoutPermissionInput | PermissionApiUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: PermissionApiCreateManyPermissionInputEnvelope
    set?: PermissionApiWhereUniqueInput | PermissionApiWhereUniqueInput[]
    disconnect?: PermissionApiWhereUniqueInput | PermissionApiWhereUniqueInput[]
    delete?: PermissionApiWhereUniqueInput | PermissionApiWhereUniqueInput[]
    connect?: PermissionApiWhereUniqueInput | PermissionApiWhereUniqueInput[]
    update?: PermissionApiUpdateWithWhereUniqueWithoutPermissionInput | PermissionApiUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: PermissionApiUpdateManyWithWhereWithoutPermissionInput | PermissionApiUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: PermissionApiScalarWhereInput | PermissionApiScalarWhereInput[]
  }

  export type RoleOnPermissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<RoleOnPermissionCreateWithoutPermissionInput, RoleOnPermissionUncheckedCreateWithoutPermissionInput> | RoleOnPermissionCreateWithoutPermissionInput[] | RoleOnPermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RoleOnPermissionCreateOrConnectWithoutPermissionInput | RoleOnPermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: RoleOnPermissionUpsertWithWhereUniqueWithoutPermissionInput | RoleOnPermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: RoleOnPermissionCreateManyPermissionInputEnvelope
    set?: RoleOnPermissionWhereUniqueInput | RoleOnPermissionWhereUniqueInput[]
    disconnect?: RoleOnPermissionWhereUniqueInput | RoleOnPermissionWhereUniqueInput[]
    delete?: RoleOnPermissionWhereUniqueInput | RoleOnPermissionWhereUniqueInput[]
    connect?: RoleOnPermissionWhereUniqueInput | RoleOnPermissionWhereUniqueInput[]
    update?: RoleOnPermissionUpdateWithWhereUniqueWithoutPermissionInput | RoleOnPermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: RoleOnPermissionUpdateManyWithWhereWithoutPermissionInput | RoleOnPermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: RoleOnPermissionScalarWhereInput | RoleOnPermissionScalarWhereInput[]
  }

  export type PermissionApiUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<PermissionApiCreateWithoutPermissionInput, PermissionApiUncheckedCreateWithoutPermissionInput> | PermissionApiCreateWithoutPermissionInput[] | PermissionApiUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: PermissionApiCreateOrConnectWithoutPermissionInput | PermissionApiCreateOrConnectWithoutPermissionInput[]
    upsert?: PermissionApiUpsertWithWhereUniqueWithoutPermissionInput | PermissionApiUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: PermissionApiCreateManyPermissionInputEnvelope
    set?: PermissionApiWhereUniqueInput | PermissionApiWhereUniqueInput[]
    disconnect?: PermissionApiWhereUniqueInput | PermissionApiWhereUniqueInput[]
    delete?: PermissionApiWhereUniqueInput | PermissionApiWhereUniqueInput[]
    connect?: PermissionApiWhereUniqueInput | PermissionApiWhereUniqueInput[]
    update?: PermissionApiUpdateWithWhereUniqueWithoutPermissionInput | PermissionApiUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: PermissionApiUpdateManyWithWhereWithoutPermissionInput | PermissionApiUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: PermissionApiScalarWhereInput | PermissionApiScalarWhereInput[]
  }

  export type PermissionCreateNestedOneWithoutPermissionApiInput = {
    create?: XOR<PermissionCreateWithoutPermissionApiInput, PermissionUncheckedCreateWithoutPermissionApiInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutPermissionApiInput
    connect?: PermissionWhereUniqueInput
  }

  export type PermissionUpdateOneRequiredWithoutPermissionApiNestedInput = {
    create?: XOR<PermissionCreateWithoutPermissionApiInput, PermissionUncheckedCreateWithoutPermissionApiInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutPermissionApiInput
    upsert?: PermissionUpsertWithoutPermissionApiInput
    connect?: PermissionWhereUniqueInput
    update?: XOR<XOR<PermissionUpdateToOneWithWhereWithoutPermissionApiInput, PermissionUpdateWithoutPermissionApiInput>, PermissionUncheckedUpdateWithoutPermissionApiInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserOnRoleCreateWithoutUserInput = {
    createTime?: Date | string
    updateTime?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserOnRoleUncheckedCreateWithoutUserInput = {
    roleId: number
    createTime?: Date | string
    updateTime?: Date | string
  }

  export type UserOnRoleCreateOrConnectWithoutUserInput = {
    where: UserOnRoleWhereUniqueInput
    create: XOR<UserOnRoleCreateWithoutUserInput, UserOnRoleUncheckedCreateWithoutUserInput>
  }

  export type UserOnRoleCreateManyUserInputEnvelope = {
    data: UserOnRoleCreateManyUserInput | UserOnRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserOnRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserOnRoleWhereUniqueInput
    update: XOR<UserOnRoleUpdateWithoutUserInput, UserOnRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UserOnRoleCreateWithoutUserInput, UserOnRoleUncheckedCreateWithoutUserInput>
  }

  export type UserOnRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserOnRoleWhereUniqueInput
    data: XOR<UserOnRoleUpdateWithoutUserInput, UserOnRoleUncheckedUpdateWithoutUserInput>
  }

  export type UserOnRoleUpdateManyWithWhereWithoutUserInput = {
    where: UserOnRoleScalarWhereInput
    data: XOR<UserOnRoleUpdateManyMutationInput, UserOnRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserOnRoleScalarWhereInput = {
    AND?: UserOnRoleScalarWhereInput | UserOnRoleScalarWhereInput[]
    OR?: UserOnRoleScalarWhereInput[]
    NOT?: UserOnRoleScalarWhereInput | UserOnRoleScalarWhereInput[]
    userId?: IntFilter<"UserOnRole"> | number
    roleId?: IntFilter<"UserOnRole"> | number
    createTime?: DateTimeFilter<"UserOnRole"> | Date | string
    updateTime?: DateTimeFilter<"UserOnRole"> | Date | string
  }

  export type UserCreateWithoutRolesInput = {
    username: string
    password: string
    salt: string
    email?: string
    freezed?: number
    avatar?: string
    desc?: string
    createTime?: Date | string
    updateTime?: Date | string
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: number
    username: string
    password: string
    salt: string
    email?: string
    freezed?: number
    avatar?: string
    desc?: string
    createTime?: Date | string
    updateTime?: Date | string
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
    desc?: string
    createTime?: Date | string
    updateTime?: Date | string
    permission?: RoleOnPermissionCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    desc?: string
    createTime?: Date | string
    updateTime?: Date | string
    permission?: RoleOnPermissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutRolesInput = {
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateWithoutRolesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    freezed?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    freezed?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: RoleOnPermissionUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: RoleOnPermissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type UserOnRoleCreateWithoutRoleInput = {
    createTime?: Date | string
    updateTime?: Date | string
    user: UserCreateNestedOneWithoutRolesInput
  }

  export type UserOnRoleUncheckedCreateWithoutRoleInput = {
    userId: number
    createTime?: Date | string
    updateTime?: Date | string
  }

  export type UserOnRoleCreateOrConnectWithoutRoleInput = {
    where: UserOnRoleWhereUniqueInput
    create: XOR<UserOnRoleCreateWithoutRoleInput, UserOnRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserOnRoleCreateManyRoleInputEnvelope = {
    data: UserOnRoleCreateManyRoleInput | UserOnRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type RoleOnPermissionCreateWithoutRoleInput = {
    permission: PermissionCreateNestedOneWithoutRolesInput
  }

  export type RoleOnPermissionUncheckedCreateWithoutRoleInput = {
    permissionId: number
  }

  export type RoleOnPermissionCreateOrConnectWithoutRoleInput = {
    where: RoleOnPermissionWhereUniqueInput
    create: XOR<RoleOnPermissionCreateWithoutRoleInput, RoleOnPermissionUncheckedCreateWithoutRoleInput>
  }

  export type RoleOnPermissionCreateManyRoleInputEnvelope = {
    data: RoleOnPermissionCreateManyRoleInput | RoleOnPermissionCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserOnRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserOnRoleWhereUniqueInput
    update: XOR<UserOnRoleUpdateWithoutRoleInput, UserOnRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<UserOnRoleCreateWithoutRoleInput, UserOnRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserOnRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserOnRoleWhereUniqueInput
    data: XOR<UserOnRoleUpdateWithoutRoleInput, UserOnRoleUncheckedUpdateWithoutRoleInput>
  }

  export type UserOnRoleUpdateManyWithWhereWithoutRoleInput = {
    where: UserOnRoleScalarWhereInput
    data: XOR<UserOnRoleUpdateManyMutationInput, UserOnRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type RoleOnPermissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: RoleOnPermissionWhereUniqueInput
    update: XOR<RoleOnPermissionUpdateWithoutRoleInput, RoleOnPermissionUncheckedUpdateWithoutRoleInput>
    create: XOR<RoleOnPermissionCreateWithoutRoleInput, RoleOnPermissionUncheckedCreateWithoutRoleInput>
  }

  export type RoleOnPermissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: RoleOnPermissionWhereUniqueInput
    data: XOR<RoleOnPermissionUpdateWithoutRoleInput, RoleOnPermissionUncheckedUpdateWithoutRoleInput>
  }

  export type RoleOnPermissionUpdateManyWithWhereWithoutRoleInput = {
    where: RoleOnPermissionScalarWhereInput
    data: XOR<RoleOnPermissionUpdateManyMutationInput, RoleOnPermissionUncheckedUpdateManyWithoutRoleInput>
  }

  export type RoleOnPermissionScalarWhereInput = {
    AND?: RoleOnPermissionScalarWhereInput | RoleOnPermissionScalarWhereInput[]
    OR?: RoleOnPermissionScalarWhereInput[]
    NOT?: RoleOnPermissionScalarWhereInput | RoleOnPermissionScalarWhereInput[]
    roleId?: IntFilter<"RoleOnPermission"> | number
    permissionId?: IntFilter<"RoleOnPermission"> | number
  }

  export type RoleCreateWithoutPermissionInput = {
    name: string
    desc?: string
    createTime?: Date | string
    updateTime?: Date | string
    users?: UserOnRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutPermissionInput = {
    id?: number
    name: string
    desc?: string
    createTime?: Date | string
    updateTime?: Date | string
    users?: UserOnRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutPermissionInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutPermissionInput, RoleUncheckedCreateWithoutPermissionInput>
  }

  export type PermissionCreateWithoutRolesInput = {
    title: string
    code: string
    type: number
    parentId: number
    createTime?: Date | string
    updateTime?: Date | string
    permissionApi?: PermissionApiCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateWithoutRolesInput = {
    id?: number
    title: string
    code: string
    type: number
    parentId: number
    createTime?: Date | string
    updateTime?: Date | string
    permissionApi?: PermissionApiUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionCreateOrConnectWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
  }

  export type RoleUpsertWithoutPermissionInput = {
    update: XOR<RoleUpdateWithoutPermissionInput, RoleUncheckedUpdateWithoutPermissionInput>
    create: XOR<RoleCreateWithoutPermissionInput, RoleUncheckedCreateWithoutPermissionInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutPermissionInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutPermissionInput, RoleUncheckedUpdateWithoutPermissionInput>
  }

  export type RoleUpdateWithoutPermissionInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserOnRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserOnRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type PermissionUpsertWithoutRolesInput = {
    update: XOR<PermissionUpdateWithoutRolesInput, PermissionUncheckedUpdateWithoutRolesInput>
    create: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
    where?: PermissionWhereInput
  }

  export type PermissionUpdateToOneWithWhereWithoutRolesInput = {
    where?: PermissionWhereInput
    data: XOR<PermissionUpdateWithoutRolesInput, PermissionUncheckedUpdateWithoutRolesInput>
  }

  export type PermissionUpdateWithoutRolesInput = {
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    permissionApi?: PermissionApiUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    permissionApi?: PermissionApiUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type RoleOnPermissionCreateWithoutPermissionInput = {
    role: RoleCreateNestedOneWithoutPermissionInput
  }

  export type RoleOnPermissionUncheckedCreateWithoutPermissionInput = {
    roleId: number
  }

  export type RoleOnPermissionCreateOrConnectWithoutPermissionInput = {
    where: RoleOnPermissionWhereUniqueInput
    create: XOR<RoleOnPermissionCreateWithoutPermissionInput, RoleOnPermissionUncheckedCreateWithoutPermissionInput>
  }

  export type RoleOnPermissionCreateManyPermissionInputEnvelope = {
    data: RoleOnPermissionCreateManyPermissionInput | RoleOnPermissionCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type PermissionApiCreateWithoutPermissionInput = {
    apiUrl: string
    apiMethod: string
    createTime?: Date | string
    updateTime?: Date | string
  }

  export type PermissionApiUncheckedCreateWithoutPermissionInput = {
    id?: number
    apiUrl: string
    apiMethod: string
    createTime?: Date | string
    updateTime?: Date | string
  }

  export type PermissionApiCreateOrConnectWithoutPermissionInput = {
    where: PermissionApiWhereUniqueInput
    create: XOR<PermissionApiCreateWithoutPermissionInput, PermissionApiUncheckedCreateWithoutPermissionInput>
  }

  export type PermissionApiCreateManyPermissionInputEnvelope = {
    data: PermissionApiCreateManyPermissionInput | PermissionApiCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type RoleOnPermissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: RoleOnPermissionWhereUniqueInput
    update: XOR<RoleOnPermissionUpdateWithoutPermissionInput, RoleOnPermissionUncheckedUpdateWithoutPermissionInput>
    create: XOR<RoleOnPermissionCreateWithoutPermissionInput, RoleOnPermissionUncheckedCreateWithoutPermissionInput>
  }

  export type RoleOnPermissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: RoleOnPermissionWhereUniqueInput
    data: XOR<RoleOnPermissionUpdateWithoutPermissionInput, RoleOnPermissionUncheckedUpdateWithoutPermissionInput>
  }

  export type RoleOnPermissionUpdateManyWithWhereWithoutPermissionInput = {
    where: RoleOnPermissionScalarWhereInput
    data: XOR<RoleOnPermissionUpdateManyMutationInput, RoleOnPermissionUncheckedUpdateManyWithoutPermissionInput>
  }

  export type PermissionApiUpsertWithWhereUniqueWithoutPermissionInput = {
    where: PermissionApiWhereUniqueInput
    update: XOR<PermissionApiUpdateWithoutPermissionInput, PermissionApiUncheckedUpdateWithoutPermissionInput>
    create: XOR<PermissionApiCreateWithoutPermissionInput, PermissionApiUncheckedCreateWithoutPermissionInput>
  }

  export type PermissionApiUpdateWithWhereUniqueWithoutPermissionInput = {
    where: PermissionApiWhereUniqueInput
    data: XOR<PermissionApiUpdateWithoutPermissionInput, PermissionApiUncheckedUpdateWithoutPermissionInput>
  }

  export type PermissionApiUpdateManyWithWhereWithoutPermissionInput = {
    where: PermissionApiScalarWhereInput
    data: XOR<PermissionApiUpdateManyMutationInput, PermissionApiUncheckedUpdateManyWithoutPermissionInput>
  }

  export type PermissionApiScalarWhereInput = {
    AND?: PermissionApiScalarWhereInput | PermissionApiScalarWhereInput[]
    OR?: PermissionApiScalarWhereInput[]
    NOT?: PermissionApiScalarWhereInput | PermissionApiScalarWhereInput[]
    id?: IntFilter<"PermissionApi"> | number
    apiUrl?: StringFilter<"PermissionApi"> | string
    apiMethod?: StringFilter<"PermissionApi"> | string
    permissionId?: IntFilter<"PermissionApi"> | number
    createTime?: DateTimeFilter<"PermissionApi"> | Date | string
    updateTime?: DateTimeFilter<"PermissionApi"> | Date | string
  }

  export type PermissionCreateWithoutPermissionApiInput = {
    title: string
    code: string
    type: number
    parentId: number
    createTime?: Date | string
    updateTime?: Date | string
    roles?: RoleOnPermissionCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateWithoutPermissionApiInput = {
    id?: number
    title: string
    code: string
    type: number
    parentId: number
    createTime?: Date | string
    updateTime?: Date | string
    roles?: RoleOnPermissionUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionCreateOrConnectWithoutPermissionApiInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutPermissionApiInput, PermissionUncheckedCreateWithoutPermissionApiInput>
  }

  export type PermissionUpsertWithoutPermissionApiInput = {
    update: XOR<PermissionUpdateWithoutPermissionApiInput, PermissionUncheckedUpdateWithoutPermissionApiInput>
    create: XOR<PermissionCreateWithoutPermissionApiInput, PermissionUncheckedCreateWithoutPermissionApiInput>
    where?: PermissionWhereInput
  }

  export type PermissionUpdateToOneWithWhereWithoutPermissionApiInput = {
    where?: PermissionWhereInput
    data: XOR<PermissionUpdateWithoutPermissionApiInput, PermissionUncheckedUpdateWithoutPermissionApiInput>
  }

  export type PermissionUpdateWithoutPermissionApiInput = {
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleOnPermissionUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateWithoutPermissionApiInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleOnPermissionUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type UserOnRoleCreateManyUserInput = {
    roleId: number
    createTime?: Date | string
    updateTime?: Date | string
  }

  export type UserOnRoleUpdateWithoutUserInput = {
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserOnRoleUncheckedUpdateWithoutUserInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnRoleUncheckedUpdateManyWithoutUserInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnRoleCreateManyRoleInput = {
    userId: number
    createTime?: Date | string
    updateTime?: Date | string
  }

  export type RoleOnPermissionCreateManyRoleInput = {
    permissionId: number
  }

  export type UserOnRoleUpdateWithoutRoleInput = {
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRolesNestedInput
  }

  export type UserOnRoleUncheckedUpdateWithoutRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnRoleUncheckedUpdateManyWithoutRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleOnPermissionUpdateWithoutRoleInput = {
    permission?: PermissionUpdateOneRequiredWithoutRolesNestedInput
  }

  export type RoleOnPermissionUncheckedUpdateWithoutRoleInput = {
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type RoleOnPermissionUncheckedUpdateManyWithoutRoleInput = {
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type RoleOnPermissionCreateManyPermissionInput = {
    roleId: number
  }

  export type PermissionApiCreateManyPermissionInput = {
    id?: number
    apiUrl: string
    apiMethod: string
    createTime?: Date | string
    updateTime?: Date | string
  }

  export type RoleOnPermissionUpdateWithoutPermissionInput = {
    role?: RoleUpdateOneRequiredWithoutPermissionNestedInput
  }

  export type RoleOnPermissionUncheckedUpdateWithoutPermissionInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type RoleOnPermissionUncheckedUpdateManyWithoutPermissionInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionApiUpdateWithoutPermissionInput = {
    apiUrl?: StringFieldUpdateOperationsInput | string
    apiMethod?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionApiUncheckedUpdateWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    apiUrl?: StringFieldUpdateOperationsInput | string
    apiMethod?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionApiUncheckedUpdateManyWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    apiUrl?: StringFieldUpdateOperationsInput | string
    apiMethod?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}