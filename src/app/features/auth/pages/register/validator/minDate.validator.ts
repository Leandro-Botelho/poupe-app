import { AbstractControl, ValidationErrors } from '@angular/forms';

export function MinDateValidator(minAge: number = 18) {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;

    const inputDate = new Date(value);
    const today = new Date();

    const minDate = new Date(
      today.getFullYear() - minAge,
      today.getMonth(),
      today.getDate()
    );

    if (inputDate > minDate) {
      return {
        underage: {
          requiredAge: minAge,
          actualDate: inputDate,
        },
      };
    }

    return null;
  };
}
