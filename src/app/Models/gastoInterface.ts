export interface Gasto {
    Descripcion: string;
    Monto: number;
    Categoria: string;
    Tipo: 'Pasivo' | 'Activo';
    FechaCreacion: Date;
}
