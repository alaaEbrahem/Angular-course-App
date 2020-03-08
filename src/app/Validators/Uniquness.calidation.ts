import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UniquenessValidator {
    static Uniquness(control: AbstractControl): Promise<ValidationErrors> | null {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value == "ahmad") {
                    resolve({ "uniquesss": true })
                }
                else {
                    resolve(null);
                }
            }, 200)
        });
    }
}