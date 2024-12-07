import { test as base, expect } from '@playwright/test';
import { TodoPage } from './TodoPage';

// Extend basic test by providing a "todoPage" fixture.

const test = base.extend<{ todoPage: TodoPage }>({
    todoPage: async ({ page }, use) => {
      const todoPage = new TodoPage(page);
    //   await todoPage.goto();
      await use(todoPage);
    },
  });
  

interface Task {    
    taskName: string;    
    isDone: boolean;
}

const tasks: Task[] = [    
    { 
        taskName: 'Test', 
        isDone: false 
    },    
    { 
        taskName: 'Test2',
        isDone: false 
    },    
    { 
        taskName: 'Test3', 
        isDone: false 
    },
];



test.describe('Todo Page Tests', () => {    
    // let todoPage: TodoPage; 

    test.beforeEach(async ({ todoPage }) => {     
        await todoPage.goto();    
    });

    test.afterEach(async ({ page })=>{
        await page.close();
    })


    tasks.forEach((task) => {        
        test(`add todo: ${task.taskName}`, 
            async ({ todoPage }) => {            
                await todoPage.addTodo(task.taskName);        
            });        
            
        test(`add and check todo: ${task.taskName}`, 
            async ({ todoPage }) => {            
                await todoPage.addTodo(task.taskName);            
                await todoPage.checkTodo(task.taskName);        
            });    
        });
    });