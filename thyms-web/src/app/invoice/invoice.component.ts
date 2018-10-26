import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

/**
 *
 */
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})

export class InvoiceComponent implements OnInit {

  public productos: Producto [] = [
    {
      id: '1',
      idFactura: '1',
      idRack: '1',
      referencia: 'Z1.0',
      descripcion: 'N1 1-0 Negro',
      cantidad: 6,
      enlistado: true
    },
    {
      id: '2',
      idFactura: '1',
      idRack: '1',
      referencia: 'Z3.0',
      descripcion: 'N3 3-0 CASTAÑO OSCURO',
      cantidad: 2,
      enlistado: false
    },
    {
      id: '3',
      idFactura: '1',
      idRack: '1',
      referencia: 'Z1.0',
      descripcion: 'N1 1-0 Negro',
      cantidad: 6,
      enlistado: false
    },
    {
      id: '4',
      idFactura: '1',
      idRack: '1',
      referencia: 'Z3.0',
      descripcion: 'N3 3-0 CASTAÑO OSCURO',
      cantidad: 2,
      enlistado: false
    },
    {
      id: '5',
      idFactura: '1',
      idRack: '1',
      referencia: 'Z1.0',
      descripcion: 'N1 1-0 Negro',
      cantidad: 6,
      enlistado: false
    },
    {
      id: '6',
      idFactura: '1',
      idRack: '1',
      referencia: 'Z3.0',
      descripcion: 'N3 3-0 CASTAÑO OSCURO',
      cantidad: 2,
      enlistado: false
    },
    {
      id: '7',
      idFactura: '1',
      idRack: '1',
      referencia: 'Z1.0',
      descripcion: 'N1 1-0 Negro',
      cantidad: 6,
      enlistado: false
    },
    {
      id: '8',
      idFactura: '1',
      idRack: '1',
      referencia: 'Z3.0',
      descripcion: 'N3 3-0 CASTAÑO OSCURO',
      cantidad: 2,
      enlistado: false
    },
    {
      id: '9',
      idFactura: '1',
      idRack: '1',
      referencia: 'Z1.0',
      descripcion: 'N1 1-0 Negro',
      cantidad: 6,
      enlistado: false
    },
    {
      id: '10',
      idFactura: '1',
      idRack: '1',
      referencia: 'Z3.0',
      descripcion: 'N3 3-0 CASTAÑO OSCURO',
      cantidad: 2,
      enlistado: false
    },
    {
      id: '11',
      idFactura: '1',
      idRack: '1',
      referencia: 'Z1.0',
      descripcion: 'N1 1-0 Negro',
      cantidad: 6,
      enlistado: false
    },
    {
      id: '12',
      idFactura: '1',
      idRack: '1',
      referencia: 'Z3.0',
      descripcion: 'N3 3-0 CASTAÑO OSCURO',
      cantidad: 2,
      enlistado: false
    }
  ];

  displayedColumns: string[] = ['eliminar', 'referencia', 'descripcion', 'cantidad', 'enlistar'];
  dataSource = new MatTableDataSource<Producto>(this.productos);
  selection = new SelectionModel<Producto>(true, []);


  @ViewChild(MatPaginator) paginator: MatPaginator;

  public rackSeleccionado: string;
  public facturaSeleccionada: string;
  public rows: any;
  public racks: any = [
    { id: 'Rack 1'},
    { id: 'Rack 2'},
    { id: 'Rack 3'},
    { id: 'Rack 4'},
    { id: 'Rack 5'},
    { id: 'Rack 6'}
  ];
  public facturas: any = [
    {
      id: 'FA_0235435',
      nombre: 'Factura 1'
    },
    {
      id: 'FA_0235436',
      nombre: 'Factura 2'
    },
    {
      id: 'FA_0235437',
      nombre: 'Factura 3'
    },
    {
      id: 'FA_0235438',
      nombre: 'Factura 4'
    },
    {
      id: 'FA_0235439',
      nombre: 'Factura 5'
    },
    {
      id: 'FA_0235440',
      nombre: 'Factura 6'
    },
    {
      id: 'FA_0235441',
      nombre: 'Factura 7'
    },
    {
      id: 'FA_0235442',
      nombre: 'Factura 8'
    },
    {
      id: 'FA_0235443',
      nombre: 'Factura 9'
    },
    {
      id: 'FA_0235444',
      nombre: 'Factura 10'
    },
    {
      id: 'FA_0235445',
      nombre: 'Factura 11'
    },
    {
      id: 'FA_0235446',
      nombre: 'Factura 12'
    },
    {
      id: 'FA_0235447',
      nombre: 'Factura 13'
    },
    {
      id: 'FA_0235448',
      nombre: 'Factura 14'
    },
    {
      id: 'FA_0235449',
      nombre: 'Factura 15'
    }
  ];
  public totalProductos: any = {
    total: 12,
    thyms: 3,
    leale: 3,
    visalia: 67,
    publicidad: 2
  };
  public selected: any[] = [];

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.rackSeleccionado = this.racks[0].id;
    this.facturaSeleccionada = this.facturas[0].id;
  }

  obtenerFilaSeleccionada(row) {
    console.log(row);
  }

  agregarProducto(producto) {
    console.log('Agregar este producto: ', producto);
    if (producto.enlistado) {
      producto.enlistado = false;
    } else {
      producto.enlistado = true;
    }
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].id === producto.id) {
        this.productos[i] = producto;
      }
    }
  }

  eliminarProducto(producto) {
    console.log('Eliminar este producto: ', producto);
    if (producto.enlistado) {
      producto.enlistado = false;
    } else {
      producto.enlistado = true;
    }
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].id === producto.id) {
        this.productos[i] = producto;
      }
    }
  }

  cambiarRackSeleccionado(rack: string) {
    this.rackSeleccionado = rack;
    console.log('Rack Seleccionado: ', rack);
  }

  cambiarFacturaSeleccionada(factura: string) {
    this.facturaSeleccionada = factura;
    console.log('Fatura Seleccionada: ', factura);
  }

}

export interface Producto {
  id: string;
  idFactura: string;
  idRack: string;
  referencia: string;
  descripcion: string;
  cantidad: number;
  enlistado: boolean;
}
