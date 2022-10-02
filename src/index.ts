import { User } from "./Models/User";
import { UserForm } from "./views/UserForm";

// const root = document.getElementById('root') as HTMLDivElement;


// const user = User.buildUser({ name: "abdou", age: 20 });


// const userForm = new UserForm(
//     root,
//     user
// );

// userForm.render()

const root = document.getElementById('root');


const user = User.buildUser({ name: "abdou", age: 20 });

if(root){
    const userForm = new UserForm(
        root,
        user
    );
    
    userForm.render()
} else {
    throw new Error('Root element not found');
}
