module.exports = {
  name: 'todo-domain',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/todo/domain',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
