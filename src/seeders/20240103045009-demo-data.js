'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.demo',
        password: '123456',
        bio: 'I am a test user',
        enabled: true,
      }
    ]);

    await queryInterface.bulkInsert('tasks', [{
      title: 'Task 1',
      description: 'Task 1 description',
      due_at: '2024-01-03 04:50:09',
      status: 'pending',
      user_id: 1,
    },
    {
      title: 'Task 2',
      description: 'Task 2 description',
      due_at: '2024-01-03 04:50:09',
      status: 'pending',
      user_id: 1,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
    await queryInterface.bulkDelete('users', null, {});
  }
};
