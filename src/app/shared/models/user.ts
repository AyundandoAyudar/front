/**
 * User interface.
 * @param userId User Id.
 * @param role User rol.
 * @param name User name.
 */
export interface User {
    userId: string;
    name: string;
    role?: string;
}