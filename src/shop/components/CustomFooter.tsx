import { CustomLogo } from '@/components/custom/CustomLogo';

export const CustomFooter = () => {
  return (
    <footer className="border-t py-12 px-4 lg:px-8 mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <CustomLogo />

            <p className="text-sm text-muted-foreground">
              Ropa inspirada en el diseño minimalista y la innovación de Tesla.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Productos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Camisetas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Sudaderas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Chaquetas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Accesorios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Ayuda</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Envíos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Guía de Tallas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Sustentabilidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Prensa
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Teslo Style. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
