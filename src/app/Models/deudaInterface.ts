export interface Deuda {
    Tipo: 'Pagar' | 'Cobrar';
    id: string;
    Nombre: string;
    Sexo: 'Hombre' | 'Mujer' | 'Otro';
    Monto: number;
    FechaCreada: string;
    Completada: boolean;
    FechaCompletado: string | boolean;
    AvatarPath: string;
}
