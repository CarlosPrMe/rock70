import { AbstractControl } from '@angular/forms';

export function customValidatorUrl(control: AbstractControl): { [key: string]: any } {
    let regUrl: any = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    if (regUrl.test(control.value) || control.value === '' || control.value === undefined) {
        return null;
    } else {
        return {
            urlCustom: true,
        }
    }
}

export function customValidatorImage(control: AbstractControl): { [key: string]: any } {
    if ((/\.(jpg|jpeg|png|gif)$/i).test(control.value) || control.value === '' || control.value === undefined) {
        return null;
    } else {
        return {
            imageFormat: true,
        }
    }
}