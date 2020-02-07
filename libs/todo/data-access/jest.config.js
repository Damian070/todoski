module.exports = {
  name: 'todo-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/todo/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
