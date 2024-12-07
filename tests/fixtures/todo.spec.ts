import { test } from './todoFixture';

const tasks = [
    { taskName: 'Test', isDone: false },
    { taskName: 'Test2', isDone: false },
    { taskName: 'Test3', isDone: false },
];

test.describe('Todo Page Tests with Fixture', () => {
    tasks.forEach((task) => {
        test(`add todo: ${task.taskName}`, async ({ todoPage }) => {
            await todoPage.addTodo(task.taskName);
        });

        test(`add and check todo: ${task.taskName}`, async ({ todoPage }) => {
            await todoPage.addTodo(task.taskName);
            await todoPage.checkTodo(task.taskName);
        });
    });
});
