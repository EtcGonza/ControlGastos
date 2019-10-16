import { Moment } from 'moment';

export interface Deuda {
    Tipo: 'Pagar' | 'Cobrar';
    id: string;
    Nombre: string;
    Monto: number;
    FechaCreada: string;
    Completada: boolean;
    FechaCompletado: string | boolean;
    AvatarPath: string;
}
