import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'trim' })
export class TrimPipe implements PipeTransform {
    public transform (value: string) {
        return value ? value.replace(/\s/g,'') : value;
    }
}