import { Injectable } from '@angular/core';
import { Vault } from '../models/storage';


@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private VAULT_KEY = '_vault_ayudando_ayudar';
  private storage = localStorage;
  private defaults: Vault = { language: 'en' };
  vault: Vault;

  constructor() {
    // Load when is used first time
    this.load();
  }

  private load() {
    const vault: Vault = this.allVault;
    this.mergeDefaults(vault ? vault : {});
  }

  private mergeDefaults(incomingVault: Partial<Vault>) {
    this.allVault = { ...this.defaults, ...incomingVault };
  }

  merge(incomingVault: any) {
    this.allVault = { ...this.allVault, ...incomingVault };
  }

  clean() {
    this.allVault = this.defaults;
  }

  setValue(KEY: keyof Vault, value: Vault[typeof KEY]) {
    this.allVault = { ...this.allVault, [KEY]: value };
  }

  getValue(KEY: keyof Vault) {
    return this.allVault[KEY];
  }

  get allVault() {
    return JSON.parse(this.storage.getItem(this.VAULT_KEY));
  }

  set allVault(vault: Vault) {
    this.storage.setItem(this.VAULT_KEY, JSON.stringify(vault));
  }
}
