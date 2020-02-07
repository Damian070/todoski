module.exports = {
  name: 'todo-feature',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/todo/feature',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
