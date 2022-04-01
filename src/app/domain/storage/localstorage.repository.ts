import { storageKey } from "@core/constants/storagekey.enum";

export interface ILocalStorageRepository {
    save(key: storageKey, data: any): void;
    getValue(key: storageKey): string;
}