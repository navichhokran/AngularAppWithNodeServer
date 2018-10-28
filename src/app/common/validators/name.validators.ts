import { ValidationErrors, AbstractControl } from "@angular/forms";


export class nameValidators {

    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0){
            return { cannotContainSpace : true};
        }
        return null;
    }
    
    static passwordMatcher(control: AbstractControl) : ValidationErrors | null {
        // if((account.password !== account.confirmPassword){
        //     return { passwordMatcher : true};
        // }
        return null;
    }

    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors|null> | null {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value ==='Navi'){
                    resolve ({shouldBeUnique : true});
                }
                else 
                     resolve(null);
            },2000);
        });
    }
}
