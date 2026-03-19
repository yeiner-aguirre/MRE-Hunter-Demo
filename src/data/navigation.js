export const navigationGroups = [
  {
    label: 'Trabaja con nosotros',
    to: '/trabaja-con-nosotros',
  },
  {
    label: 'Productos',
    items: [
      {
        label: 'GPS MRE Hunter',
        to: '/productos/gps-mre-hunter',
      },
      {
        label: 'GPS Portátil',
        to: '/productos/gps-portatil',
      },
      {
        label: 'Hunter Cam',
        to: '/productos/hunter-cam',
      },
    ],
  },
  {
    label: 'Pagos',
    items: [
      {
        label: 'Pago mensualidad',
        to: '/pagos/mensualidad',
      },
      {
        label: 'Comprar GPS',
        to: '/pagos/comprar-gps',
      },
    ],
  },
  {
    label: 'Contacto',
    to: '/contacto',
  },
]

export const secondaryActions = [
  {
    label: 'Comprar GPS',
    to: '/pagos/comprar-gps',
    variant: 'secondary',
  },
  {
    label: 'Cotizar ahora',
    to: '/contacto',
    variant: 'primary',
  },
]
