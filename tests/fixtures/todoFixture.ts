import { test as base, Page } from '@playwright/test';
import { TodoPage } from './pages/todoPage';


export const test = base.extend<{ todoPage: TodoPage }>({
    todoPage: async ({ page }, use) => {
        const todoPage = new TodoPage(page);
        await todoPage.goto(); 
        await use(todoPage);  
    },
});
