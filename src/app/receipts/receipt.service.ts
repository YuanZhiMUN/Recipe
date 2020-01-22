import { Receipt } from './receipt.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../share/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private receipts: Receipt[] = [
        new Receipt('A Test Receipt One', 
                    'This is simply a Test', 
                    'https://www.thecookierookie.com/wp-content/uploads/2019/08/pasta-pomodoro-recipe-3-of-7.jpg.webp', 
                    [
                        new Ingredient('Meat', 1),
                        new Ingredient('Bread', 2)
                    ]),
        new Receipt('A Test Receipt Two', 
                    'This is simply a Test', 
                    'https://www.thecookierookie.com/wp-content/uploads/2019/08/pasta-pomodoro-recipe-3-of-7.jpg.webp', 
                    [ new Ingredient('Bread', 2),
                        new Ingredient("Banana", 1)
                    ]),
        new Receipt('A Test Receipt Three', 
                    'This is simply a Test', 
                    'https://www.thecookierookie.com/wp-content/uploads/2019/08/pasta-pomodoro-recipe-3-of-7.jpg.webp', 
                    [
                        new Ingredient('Bread', 2),
                        new Ingredient("Banana", 1)
                    ])
      ];
    
    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.receipts.slice();
    }

    getRecipe(index: number){
        return this.receipts[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        console.log("?????", ingredients);
        this.slService.addIngredients(ingredients);
    }
}