import { User } from './user';

/**
 * Storage interface.
 */
export interface Vault {
    language: 'es' | 'en';
    user?: User;
}