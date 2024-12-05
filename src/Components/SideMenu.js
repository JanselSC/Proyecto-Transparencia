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

                <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}> 

                    <li>
                       
                            <FontAwesomeIcon icon={faHome} className="menu-icon" /> Inicio
                  
                    </li>
                    </Link>

                    <Link to='https://transparencia.gob.do/' target='_blank' style={{textDecoration:'none', color:'white'}}>
                    <li>
                                                <FontAwesomeIcon icon={faLandmark} className="menu-icon" /> Portal Unico de Transparencia
                                           </li>
                    </Link>

                    <Link to='https://inabie.gob.do/'  target='_blank' style={{textDecoration:'none', color:'white'}}>
                    <li>
                    
                        <FontAwesomeIcon icon={faBuilding} className="menu-icon" /> Portal Institucional
                     
                    </li>
                    </Link>
                    {/* Base Legal Submenu */}
                    <li onClick={() => toggleSubmenu('baselegal')} className="submenu-toggle">
                        
                        <FontAwesomeIcon icon={faBalanceScale} className="menu-icon" />
                        Base Legal de la Institución
                        <FontAwesomeIcon icon={submenuOpen.baselegal ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.baselegal && (
                        <ul className="submenu-content">
                               <Link to='/folders/Constitución' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Constitución de la República Dominicana')}>Constitución de la República Dominicana</li>
                            </Link>

                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Leyes')}>Leyes</li>
                            </Link  >

                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Decretos')}>Decretos</li>
                            </Link>

                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Resoluciones')}>Resoluciones</li>
                            </Link>

                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Otras Normativas')}>Otras Normativas</li>
                            </Link>

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
                                <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Leyes')}>Leyes</li>
                            </Link>
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Decretos')}>Decretos</li>
                            </Link>
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Resoluciones')}>Resoluciones</li>
                            </Link>
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Normativas')}>Normativas</li>
                            </Link>
                        </ul>
                    )}

                    <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}>
                    <li>
                        <FontAwesomeIcon icon={faUsers} className="menu-icon" /> Estructura Orgánica de la Institución
                       
                    </li>
                    </Link>

                    {/* Libre Acceso Submenu */}
                    <li onClick={() => toggleSubmenu('libreacceso')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faFileAlt} className="menu-icon" />
                        Oficina de Libre Acceso a la Información
                        <FontAwesomeIcon icon={submenuOpen.libreacceso ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.libreacceso && (
                        <ul className="submenu-content">
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Derecho de los Ciudadanos de Acceder a la Información Pública')}>Derecho de los Ciudadanos de Acceder a la Información Pública</li>
                            </Link>

                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Estructura Organizacional de la Oficina de libre Acceso a la Información OAI')}>Estructura Organizacional de la Oficina de libre Acceso a la Información OAI</li>
                            </Link>

                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Manual de Organización de la OAI')}>Manual de Organización de la OAI</li>
                            </Link>

                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Manual de Procedimientos de la OAI')}>Manual de Procedimientos de la OAI</li>
                            </Link>

                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Estadísticas y Balances de Gestión de la OAI')}>Estadísticas y Balances de Gestión de la OAI</li>
                            </Link>

                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Responsable de Acceso a la Información RAI')}>Responsable de Acceso a la Información RAI</li>
                            </Link>

                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Responsable de Acceso a la Información RAI')}>Resolución de Información Clasificada</li>
                            </Link>

                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Responsable de Acceso a la Información RAI')}>Indice de Documentos Disponibles para la Entrega</li>
                            </Link>

                            <Link to='https://saip.gob.do/apps/sip/?step=one' target='_blank' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Responsable de Acceso a la Información RAI')}>Enlace al Portal Unico de Solicitud de Acceso a la Información Pública SAIP</li>
                            </Link>

                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Responsable de Acceso a la Información RAI')}>Indice de Transparencia Estandarizado</li>
                            </Link>
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
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Planificación Estratégica Institucional')}>Planificación Estratégica Institucional</li>
                            </Link>
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Plan Operativo Anual POA')}>Plan Operativo Anual POA</li>
                            </Link>
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Memorias Institucionales')}>Memorias Institucionales</li>
                            </Link>
                        </ul>
                    )}

                    {/* Other Menu Items */}
                    <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                    <li>
                    
                        <FontAwesomeIcon icon={faNewspaper} className="menu-icon" /> Publicaciones Oficiales
                    </li>
                    </Link>

                    <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                    <li>
                        <FontAwesomeIcon icon={faChartBar} className="menu-icon" /> Estadísticas Institucionales
                    </li>
                   </Link>

                    <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                    <li>
                        <FontAwesomeIcon icon={faInfoCircle} className="menu-icon" /> Información Básica sobre Servicios Públicos
                    </li>
                    </Link>

                    {/* Porta 311 Submenu */}
                    <li onClick={() => toggleSubmenu('porta311')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faComments} className="menu-icon" />
                        Porta 311 sobre Quejas, Reclamaciones, Sugerencias y Denuncias
                        <FontAwesomeIcon icon={submenuOpen.porta311 ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.porta311 && (
                        <ul className="submenu-content">
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Enlace Directo al Portal 311')}>Enlace Directo al Portal 311</li>
                            </Link>

                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Estadísticas de las Quejas, Reclamaciones y Sugerencias Recibidas a través del 311')}>Estadísticas de las Quejas, Reclamaciones y Sugerencias Recibidas a través del 311</li>
                        </Link>
                        </ul>
                    )}

                      <Link to='/folders/1'  target='_blank' style={{textDecoration:'none', color:'white'}}>
                    <li>
                    
                        <FontAwesomeIcon icon={faBuilding} className="menu-icon" /> Declaración Jurada de Patrimonio
                     
                    </li>
                    </Link>

                    {/* Presupuesto Submenu */}
                    <li onClick={() => toggleSubmenu('presupuesto')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faClipboard} className="menu-icon" /> Presupuesto
                        <FontAwesomeIcon icon={submenuOpen.presupuesto ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.presupuesto && (
                        <ul className="submenu-content">
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Presupuesto Aprobado del Año')}>Presupuesto Aprobado del Año</li>
                            </Link>
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Ejecución de Presupuesto')}>Ejecución de Presupuesto</li>
                            </Link>
                        </ul>
                    )}

                    {/* Recursos Humanos Submenu */}
                    <li onClick={() => toggleSubmenu('recursosHumanos')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faUsers} className="menu-icon" /> Recursos Humanos
                        <FontAwesomeIcon icon={submenuOpen.recursosHumanos ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.recursosHumanos && (
                        <ul className="submenu-content">
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Nómina de Empleados')}>Nómina de Empleados</li>
                            </Link>
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Jubilaciones, Pensiones y Retiros')}>Jubilaciones, Pensiones y Retiros</li>
                            </Link>
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Enlace al Portal Concursa Administrado por el Ministerio de Administración Pública MAP')}>Enlace al Portal Concursa Administrado por el Ministerio de Administración Pública MAP</li>
                        </Link>
                        </ul>
                    )}

                    <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                    <li>
                        <FontAwesomeIcon icon={faClipboard} className="menu-icon" /> Programas Asistenciales
                    </li>
                    </Link>
                    {/* Compras y Contrataciones Submenu */}
                    <li onClick={() => toggleSubmenu('comprasContrataciones')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faShoppingCart} className="menu-icon" /> Compras y Contrataciones Públicas
                        <FontAwesomeIcon icon={submenuOpen.comprasContrataciones ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.comprasContrataciones && (
                        <ul className="submenu-content">
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Cómo Registrarse como Proveedor del Estado?')}>Cómo Registrarse como Proveedor del Estado?</li>
                            </Link>

                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Plan Anual de Compras y Contrataciones (PACC)')}>Plan Anual de Compras y Contrataciones (PACC)</li>
                            </Link>

                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Licitaciones Públicas Nacionales e Internacionales')}>Licitaciones Públicas Nacionales e Internacionales</li>
                            </Link>

                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Licitaciones Restringidas')}>Licitaciones Restringidas</li>
                            </Link>

                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Sorteos de Obras')}>Sorteos de Obras</li>
                            </Link>
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Comparaciones de Precios')}>Comparaciones de Precios</li>
                            </Link>
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Compras Menores')}>Compras Menores</li>
                            </Link>
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Subasta Inversa')}>Subasta Inversa</li>
                            </Link>
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Relación de Compras por Debajo del Umbral')}>Relación de Compras por Debajo del Umbral</li>
                            </Link>
                        </ul>
                    )}

                    <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                    <li>
                        <FontAwesomeIcon icon={faProjectDiagram} className="menu-icon" /> Proyectos y Programas
                    </li>
                    </Link>
                    {/* Finanzas Submenu */}
                    <li onClick={() => toggleSubmenu('finanzas')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faMoneyCheckAlt} className="menu-icon" /> Finanzas
                        <FontAwesomeIcon icon={submenuOpen.finanzas ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.finanzas && (
                        <ul className="submenu-content">

                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Estados Financieros')}>Estados Financieros</li>
                            </Link>
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Informes Financieros')}>Informes Financieros</li>
                            </Link>
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Ingresos y Egresos')}>Ingresos y Egresos</li>
                            </Link>
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Informes de Auditorías')}>Informes de Auditorías</li>
                            </Link>
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Activos Fijos')}>Activos Fijos</li>
                            </Link>
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Inventario en Almacén')}>Inventario en Almacén</li>
                            </Link>
                        </ul>
                    )}

                    {/* Datos Abiertos Submenu */}
                    <li onClick={() => toggleSubmenu('datosabiertos')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faDatabase} className="menu-icon" /> Datos Abiertos
                        <FontAwesomeIcon icon={submenuOpen.datosabiertos ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.datosabiertos && (
                        <ul className="submenu-content">
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Datos Abiertos')}>Datos Abiertos</li>
                            </Link>
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Estudiantes Beneficiados con el Programa PAE 2017-2023')}>Estudiantes Beneficiados con el Programa PAE 2017-2023</li>
                           </Link>
                           <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Beneficiados con Programa de Epidemiología 2017-2023')}>Beneficiados con Programa de Epidemiología 2017-2023</li>
                     </Link>
                        </ul>
                    )}

                    {/* Comisión Integridad Submenu */}
                    <li onClick={() => toggleSubmenu('comisionintegridad')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faGavel} className="menu-icon" /> Comisión de Integridad Gubernamental
                        <FontAwesomeIcon icon={submenuOpen.comisionintegridad ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.comisionintegridad && (
                        <ul className="submenu-content">
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Miembros y Medios de Contacto')}>Miembros y Medios de Contacto</li>
                            </Link>
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Compromiso Ético')}>Compromiso Ético</li>
                            </Link>
                        </ul>
                    )}

                    {/* Consulta Pública Submenu */}
                    <li onClick={() => toggleSubmenu('consultapublica')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faGlobe} className="menu-icon" /> Consulta Pública
                        <FontAwesomeIcon icon={submenuOpen.consultapublica ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.consultapublica && (
                        <ul className="submenu-content">
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Relación de Consultas Abiertas')}>Relación de Consultas Abiertas</li>
                            </Link>
                            <Link to='/folders/1' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Relación de Consultas Públicas')}>Relación de Consultas Públicas</li>
                            </Link>
                        </ul>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default SideMenu;
