import { test, expect } from '@playwright/test';

class TodoPage {
    constructor(private page) {}

    async goto() {
        await this.page.goto('https://demo.playwright.dev/todomvc/#/');
    }

    async addTodo(taskName: string) {
        await this.page.getByPlaceholder('What needs to be done?').click();
        await this.page.getByPlaceholder('What needs to be done?').fill(taskName);
        await this.page.getByPlaceholder('What needs to be done?').press('Enter');
    }

    async checkTodo(taskName: string) {
        await expect(this.page.getByText(taskName, { exact: true })).toContainText(taskName);
    }
}

interface Task {
    taskName: string;
    isDone: boolean;
}

const tasks: Task[] = [
    { taskName: 'Test', isDone: false },
    { taskName: 'Test2', isDone: false },
    { taskName: 'Test3', isDone: false },
];

test.describe('Todo Page Tests', () => {
    let todoPage: TodoPage;

    test.beforeEach(async ({ page }) => {
        todoPage = new TodoPage(page);
        await todoPage.goto();
    });

    tasks.forEach((task) => {
        test(`add todo: ${task.taskName}`, async ({ page }) => {
            await todoPage.addTodo(task.taskName);
        });

        test(`add and check todo: ${task.taskName}`, async ({ page }) => {
            await todoPage.addTodo(task.taskName);
            await todoPage.checkTodo(task.taskName);
        });
    });
});