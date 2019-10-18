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
    Id: string;
    Descripcion: string;
    Monto: number;
    Categoria: string;
    Tipo: string;
    Eliminado: boolean;
    FechaCreacion: string;
    IconoPath: string;
}

