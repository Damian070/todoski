module.exports = {
  name: 'todo-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/todo/shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
