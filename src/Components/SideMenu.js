import React, { useState, useEffect } from 'react';
import './SideMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faChevronDown, 
    faChevronUp, 
    faHome, 
    faLandmark, 
    faBuilding, 
    faBalanceScale, 
    faUsers, 
    faFileAlt, 
    faChartLine, 
    faNewspaper, 
    faChartBar, 
    faInfoCircle, 
    faComments, 
    faHandshake, 
    faClipboard, 
    faShoppingCart, 
    faProjectDiagram, 
    faMoneyCheckAlt, 
    faDatabase, 
    faGavel, 
    faGlobe 
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const SideMenu = ({ onCategorySelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuData, setMenuData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [submenuOpen, setSubmenuOpen] = useState({
        'porta311': false,
        'baselegal': false,
        'marcolegal': false,
        'libreacceso': false,
        'planestrategico': false,
        'presupuesto': false,
        'comprasContrataciones': false,
        'recursosHumanos': false,
        'programasAsistenciales': false,
        'finanzas': false,
        'comisionintegridad': false,
        'consultapublica': false,
        'datosabiertos': false,
    });

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSubmenu = (menu) => {
        setSubmenuOpen(prevState => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };

    const handleCategoryClick = (category) => {
        if (onCategorySelect) {
            onCategorySelect(category);
        }
    };

    const fetchMenuData = async () => {
        setLoading(true);
        setError(null);
        
        try {
          // Reemplaza con la URL correcta de tu API
          const response = await fetch('http://localhost:82/transparencia/index.php/marco-legal-del-sistema-de-transparencia');
          if (!response.ok) {
            throw new Error('Error al obtener los datos');
          }
          const data = await response.json();
          setMenuData(data);  // Guardamos los datos del menú en el estado
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchMenuData();  // Llamar al API cuando se carga el componente
      }, []);

    return (
        <div className={`side-menu ${isOpen ? 'open' : ''}`}>
            <div className="side-menu-toggle" onClick={toggleMenu}>
                <span className="hamburger"></span>
            </div>
            <div className="menu-items">
                <ul>
                    <li>
                        <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <FontAwesomeIcon icon={faHome} className="menu-icon" /> Inicio
                        </Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faLandmark} className="menu-icon" /> Portal de Transparencia
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBuilding} className="menu-icon" /> Portal Institucional
                    </li>

                    {/* Base Legal Submenu */}
                    <li onClick={() => toggleSubmenu('baselegal')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faBalanceScale} className="menu-icon" />
                        Base Legal de la Institución
                        <FontAwesomeIcon icon={submenuOpen.baselegal ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.baselegal && (
                        <ul className="submenu-content">
                            <li onClick={() => handleCategoryClick('Constitución de la República Dominicana')}>Constitución de la República Dominicana</li>
                            <li onClick={() => handleCategoryClick('Leyes')}>Leyes</li>
                            <li onClick={() => handleCategoryClick('Decretos')}>Decretos</li>
                            <li onClick={() => handleCategoryClick('Resoluciones')}>Resoluciones</li>
                            <li onClick={() => handleCategoryClick('Otras Normativas')}>Otras Normativas</li>
                        </ul>
                    )}

                    {/* Marco Legal Submenu */}
                    <li onClick={() => toggleSubmenu('marcolegal')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faBalanceScale} className="menu-icon" />
                        Marco Legal del Sistema de Transparencia
                        <FontAwesomeIcon icon={submenuOpen.marcolegal ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.marcolegal && (
                        <ul className="submenu-content">
                            <li onClick={() => handleCategoryClick('Leyes')}>Leyes</li>
                            <li onClick={() => handleCategoryClick('Decretos')}>Decretos</li>
                            <li onClick={() => handleCategoryClick('Resoluciones')}>Resoluciones</li>
                            <li onClick={() => handleCategoryClick('Normativas')}>Normativas</li>
                        </ul>
                    )}

                    <li>
                        <FontAwesomeIcon icon={faUsers} className="menu-icon" /> Estructura Orgánica de la Institución
                    </li>

                    {/* Libre Acceso Submenu */}
                    <li onClick={() => toggleSubmenu('libreacceso')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faFileAlt} className="menu-icon" />
                        Oficina de Libre Acceso a la Información
                        <FontAwesomeIcon icon={submenuOpen.libreacceso ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.libreacceso && (
                        <ul className="submenu-content">
                            <li onClick={() => handleCategoryClick('Derecho de los Ciudadanos de Acceder a la Información Pública')}>Derecho de los Ciudadanos de Acceder a la Información Pública</li>
                            <li onClick={() => handleCategoryClick('Estructura Organizacional de la Oficina de libre Acceso a la Información OAI')}>Estructura Organizacional de la Oficina de libre Acceso a la Información OAI</li>
                            <li onClick={() => handleCategoryClick('Manual de Organización de la OAI')}>Manual de Organización de la OAI</li>
                            <li onClick={() => handleCategoryClick('Manual de Procedimientos de la OAI')}>Manual de Procedimientos de la OAI</li>
                            <li onClick={() => handleCategoryClick('Estadísticas y Balances de Gestión de la OAI')}>Estadísticas y Balances de Gestión de la OAI</li>
                            <li onClick={() => handleCategoryClick('Responsable de Acceso a la Información RAI')}>Responsable de Acceso a la Información RAI</li>
                        </ul>
                    )}

                    {/* Plan Estratégico Submenu */}
                    <li onClick={() => toggleSubmenu('planestrategico')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faChartLine} className="menu-icon" />
                        Plan Estratégico Institucional
                        <FontAwesomeIcon icon={submenuOpen.planestrategico ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.planestrategico && (
                        <ul className="submenu-content">
                            <li onClick={() => handleCategoryClick('Planificación Estratégica Institucional')}>Planificación Estratégica Institucional</li>
                            <li onClick={() => handleCategoryClick('Plan Operativo Anual POA')}>Plan Operativo Anual POA</li>
                            <li onClick={() => handleCategoryClick('Memorias Institucionales')}>Memorias Institucionales</li>
                        </ul>
                    )}

                    {/* Other Menu Items */}
                    <li>
                        <FontAwesomeIcon icon={faNewspaper} className="menu-icon" /> Publicaciones Oficiales
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faChartBar} className="menu-icon" /> Estadísticas Institucionales
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faInfoCircle} className="menu-icon" /> Información Básica sobre Servicios Públicos
                    </li>

                    {/* Porta 311 Submenu */}
                    <li onClick={() => toggleSubmenu('porta311')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faComments} className="menu-icon" />
                        Porta 311 sobre Quejas, Reclamaciones, Sugerencias y Denuncias
                        <FontAwesomeIcon icon={submenuOpen.porta311 ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.porta311 && (
                        <ul className="submenu-content">
                            <li onClick={() => handleCategoryClick('Enlace Directo al Portal 311')}>Enlace Directo al Portal 311</li>
                            <li onClick={() => handleCategoryClick('Estadísticas de las Quejas, Reclamaciones y Sugerencias Recibidas a través del 311')}>Estadísticas de las Quejas, Reclamaciones y Sugerencias Recibidas a través del 311</li>
                        </ul>
                    )}

                    {/* Presupuesto Submenu */}
                    <li onClick={() => toggleSubmenu('presupuesto')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faClipboard} className="menu-icon" /> Presupuesto
                        <FontAwesomeIcon icon={submenuOpen.presupuesto ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.presupuesto && (
                        <ul className="submenu-content">
                            <li onClick={() => handleCategoryClick('Presupuesto Aprobado del Año')}>Presupuesto Aprobado del Año</li>
                            <li onClick={() => handleCategoryClick('Ejecución de Presupuesto')}>Ejecución de Presupuesto</li>
                        </ul>
                    )}

                    {/* Recursos Humanos Submenu */}
                    <li onClick={() => toggleSubmenu('recursosHumanos')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faUsers} className="menu-icon" /> Recursos Humanos
                        <FontAwesomeIcon icon={submenuOpen.recursosHumanos ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.recursosHumanos && (
                        <ul className="submenu-content">
                            <li onClick={() => handleCategoryClick('Nómina de Empleados')}>Nómina de Empleados</li>
                            <li onClick={() => handleCategoryClick('Jubilaciones, Pensiones y Retiros')}>Jubilaciones, Pensiones y Retiros</li>
                            <li onClick={() => handleCategoryClick('Enlace al Portal Concursa Administrado por el Ministerio de Administración Pública MAP')}>Enlace al Portal Concursa Administrado por el Ministerio de Administración Pública MAP</li>
                        </ul>
                    )}

                    <li>
                        <FontAwesomeIcon icon={faClipboard} className="menu-icon" /> Programas Asistenciales
                    </li>

                    {/* Compras y Contrataciones Submenu */}
                    <li onClick={() => toggleSubmenu('comprasContrataciones')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faShoppingCart} className="menu-icon" /> Compras y Contrataciones Públicas
                        <FontAwesomeIcon icon={submenuOpen.comprasContrataciones ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.comprasContrataciones && (
                        <ul className="submenu-content">
                            <li onClick={() => handleCategoryClick('Cómo Registrarse como Proveedor del Estado?')}>Cómo Registrarse como Proveedor del Estado?</li>
                            <li onClick={() => handleCategoryClick('Plan Anual de Compras y Contrataciones (PACC)')}>Plan Anual de Compras y Contrataciones (PACC)</li>
                            <li onClick={() => handleCategoryClick('Licitaciones Públicas Nacionales e Internacionales')}>Licitaciones Públicas Nacionales e Internacionales</li>
                            <li onClick={() => handleCategoryClick('Licitaciones Restringidas')}>Licitaciones Restringidas</li>
                            <li onClick={() => handleCategoryClick('Sorteos de Obras')}>Sorteos de Obras</li>
                            <li onClick={() => handleCategoryClick('Comparaciones de Precios')}>Comparaciones de Precios</li>
                            <li onClick={() => handleCategoryClick('Compras Menores')}>Compras Menores</li>
                            <li onClick={() => handleCategoryClick('Subasta Inversa')}>Subasta Inversa</li>
                            <li onClick={() => handleCategoryClick('Relación de Compras por Debajo del Umbral')}>Relación de Compras por Debajo del Umbral</li>
                        </ul>
                    )}

                    <li>
                        <FontAwesomeIcon icon={faProjectDiagram} className="menu-icon" /> Proyectos y Programas
                    </li>

                    {/* Finanzas Submenu */}
                    <li onClick={() => toggleSubmenu('finanzas')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faMoneyCheckAlt} className="menu-icon" /> Finanzas
                        <FontAwesomeIcon icon={submenuOpen.finanzas ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.finanzas && (
                        <ul className="submenu-content">
                            <li onClick={() => handleCategoryClick('Estados Financieros')}>Estados Financieros</li>
                            <li onClick={() => handleCategoryClick('Informes Financieros')}>Informes Financieros</li>
                            <li onClick={() => handleCategoryClick('Ingresos y Egresos')}>Ingresos y Egresos</li>
                            <li onClick={() => handleCategoryClick('Informes de Auditorías')}>Informes de Auditorías</li>
                            <li onClick={() => handleCategoryClick('Activos Fijos')}>Activos Fijos</li>
                            <li onClick={() => handleCategoryClick('Inventario en Almacén')}>Inventario en Almacén</li>
                        </ul>
                    )}

                    {/* Datos Abiertos Submenu */}
                    <li onClick={() => toggleSubmenu('datosabiertos')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faDatabase} className="menu-icon" /> Datos Abiertos
                        <FontAwesomeIcon icon={submenuOpen.datosabiertos ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.datosabiertos && (
                        <ul className="submenu-content">
                            <li onClick={() => handleCategoryClick('Datos Abiertos')}>Datos Abiertos</li>
                            <li onClick={() => handleCategoryClick('Estudiantes Beneficiados con el Programa PAE 2017-2023')}>Estudiantes Beneficiados con el Programa PAE 2017-2023</li>
                            <li onClick={() => handleCategoryClick('Beneficiados con Programa de Epidemiología 2017-2023')}>Beneficiados con Programa de Epidemiología 2017-2023</li>
                        </ul>
                    )}

                    {/* Comisión Integridad Submenu */}
                    <li onClick={() => toggleSubmenu('comisionintegridad')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faGavel} className="menu-icon" /> Comisión de Integridad Gubernamental
                        <FontAwesomeIcon icon={submenuOpen.comisionintegridad ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.comisionintegridad && (
                        <ul className="submenu-content">
                            <li onClick={() => handleCategoryClick('Miembros y Medios de Contacto')}>Miembros y Medios de Contacto</li>
                            <li onClick={() => handleCategoryClick('Compromiso Ético')}>Compromiso Ético</li>
                        </ul>
                    )}

                    {/* Consulta Pública Submenu */}
                    <li onClick={() => toggleSubmenu('consultapublica')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faGlobe} className="menu-icon" /> Consulta Pública
                        <FontAwesomeIcon icon={submenuOpen.consultapublica ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.consultapublica && (
                        <ul className="submenu-content">
                            <li onClick={() => handleCategoryClick('Relación de Consultas Abiertas')}>Relación de Consultas Abiertas</li>
                            <li onClick={() => handleCategoryClick('Relación de Consultas Públicas')}>Relación de Consultas Públicas</li>
                        </ul>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default SideMenu;
