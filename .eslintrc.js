module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    project: ['./tsconfig.json'], // 强制规则需要 tsconfig 支持
  },
  env: {
    node: true,
    es2022: true,
  },
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  extends: [
    'eslint:recommended', // 基础推荐规则
    'plugin:@typescript-eslint/recommended', // TS 推荐规则
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // 需要类型检查的严格规则
    'plugin:import/errors', // import 相关错误检测
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended', // prettier 规则整合，最后一条
  ],
  rules: {
    // Prettier 格式化错误当作错误
    'prettier/prettier': ['error'],

    // Typescript 代码质量严格规则
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true }],

    // 导入排序和规范
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'internal']],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/no-unresolved': 'error',
    'import/no-duplicates': 'error',

    // 语法规范
    'no-console': ['warn', { allow: ['warn', 'error'] }], // 限制 console，允许 warn 和 error
    'no-debugger': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    eqeqeq: ['error', 'always'],

    // 代码风格强化
    curly: ['error', 'all'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'consistent-return': 'error',

    // 限制 any
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: false }],

    // Promise 规范
    'promise/always-return': 'error',
    'promise/catch-or-return': 'error',

    // 其它
    'max-len': ['warn', { code: 100, ignoreComments: true }],
  },
  settings: {
    'import/resolver': {
      typescript: {}, // 使 import 插件识别 tsconfig 路径别名
    },
  },
};
