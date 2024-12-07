import { type Page, type Locator, expect } from "@playwright/test";

export class TodoPage {
    constructor(private page: Page) {
        
    }

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