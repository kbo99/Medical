import { Grupo } from './Grupo';

export class Usuario {
    constructor(
        public usuId: number,
        public username: string,
        public password?: string,
        public authorities?: Grupo [ ],
        public perId?: number
        // public accountNonExpired: boolean = true,
       // public accountNonLocked: boolean = true,
        // public credentialsNonExpired: boolean = true,
        // public enabled: boolean = true

    ) {}
}
