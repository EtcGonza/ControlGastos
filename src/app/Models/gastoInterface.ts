import { Moment } from 'moment';

export interface MisGastos {
    Año: number;
    Meses: Mes [];
    GastosAnual: number;
    ActivoAnual: number;
    PasivoAnual: number;
}

export interface Mes {
    NombreMes: string;
    GastosMes: GastoMes;
}

export interface GastoMes {
    GastoTotalMes: number;
    PasivoMes: number;
    ActivoMes: number;
    Gastos: Gasto [];
}

export interface Gasto {
    Descripcion: string;
    Monto: number;
    Categoria: string;
    Tipo: string;
    FechaCreacion: string;
    IconoPath: string;
}

