import { Injectable } from "@angular/core";
import { storageKey } from "@core/constants/storagekey.enum";
import { ILocalStorageRepository } from "@domain/storage/localstorage.repository";

@Injectable()
export class LocalStorageService implements ILocalStorageRepository { 
    save(key: storageKey, data: any): void {
        return localStorage.setItem(key, data);
    }

    getValue(key: storageKey): string {
        return localStorage.getItem(key) || '';
    }
}