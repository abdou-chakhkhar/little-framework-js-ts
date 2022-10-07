import { User, UserProps } from "../Models/User";
import { View } from "./View";



export class UserShow extends View<User, UserProps>{
    template(): string {
        return `
            <div>
                <h1>User Detail</h1>

                    <div>User Name: ${this.model.get('name')}</div>
                    <div>User Name: ${this.model.get('age')}</div>
                
            </div>
        `
    }
}