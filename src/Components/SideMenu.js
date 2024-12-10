import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    faClipboard, 
    faShoppingCart, 
    faProjectDiagram, 
    faMoneyCheckAlt, 
    faDatabase, 
    faGavel, 
    faGlobe 
} from '@fortawesome/free-solid-svg-icons';

import { Link,useNavigate  } from 'react-router-dom';

const SideMenu = ({ onCategorySelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState([]);  // Para guardar las categorías (temas)
    const [documents, setDocuments] = useState([]);    // Para guardar los documentos
    const [currentFolder, setCurrentFolder] = useState(null); // Carpeta seleccionada
    const navigate = useNavigate(); // Inicializamos navigate aquí

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

    useEffect(() => {
        // Cargar categorías desde la API
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://10.100.0.123:5210/Carpetas');  // API para carpetas (temas)
                setCategories(response.data);  // Guardamos las categorías (temas) en el estado
            } catch (error) {
                console.error("Error al cargar las categorías:", error);
            }
        };

        fetchCategories();
    }, []);

    const toggleSubmenu = (categoryId) => {
        setSubmenuOpen(prevState => ({
            ...prevState,
            [categoryId]: !prevState[categoryId]
        }));
    };

    const handleCategoryClick = (categoryName) => {
        // Cuando se hace clic en una categoría, se pasa la categoría seleccionada al componente FolderView
        if (categoryName) {
            onCategorySelect(categoryName);
        }

            navigate(`/folders/${categoryName}`);
        };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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

                <Link to='https://transparencia.gob.do/' target='_blank' style={{ textDecoration: 'none', color: 'white' }}>
                    <li>
                        <FontAwesomeIcon icon={faLandmark} className="menu-icon" /> Portal Unico de Transparencia
                    </li>
                </Link>

                <Link to='https://inabie.gob.do/' target='_blank' style={{ textDecoration: 'none', color: 'white' }}>
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
                        <Link to='/folders' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Constitución de la República Dominicana')}>Constitución de la República Dominicana</li>
                        </Link>

                        <Link to='/folders' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Leyes')}>Leyes</li>
                        </Link>

                        <Link to='/folders' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Decretos')}>Decretos</li>
                        </Link>

                        <Link to='/folders' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Resoluciones')}>Resoluciones</li>
                        </Link>

                        <Link to='/folders' style={{ textDecoration: 'none', color: '#fff' }}>
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
                        <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Leyes')}>Leyes</li>
                        </Link>

                        <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Decretos')}>Decretos</li>
                        </Link>

                        <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Resoluciones')}>Resoluciones</li>
                        </Link>

                        <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Normativas')}>Normativas</li>
                        </Link>
                    </ul>
                )}

                    <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}>
                    <li onClick={() => handleCategoryClick('Estructura organica de la institucion')}>
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
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Derecho de los Ciudadanos de Acceder a la Información Pública')}>Derecho de los Ciudadanos de Acceder a la Información Pública</li>
                            </Link>

                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Estructura Organizacional de la Oficina de libre Acceso a la Información OAI')}>Estructura Organizacional de la Oficina de libre Acceso a la Información OAI</li>
                            </Link>

                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Manual de Organización de la OAI')}>Manual de Organización de la OAI</li>
                            </Link>

                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Manual de Procedimientos de la OAI')}>Manual de Procedimientos de la OAI</li>
                            </Link>

                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Estadísticas y Balances de Gestión de la OAI')}>Estadísticas y Balances de Gestión de la OAI</li>
                            </Link>

                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Responsable de Acceso a la Información RAI')}>Responsable de Acceso a la Información RAI</li>
                            </Link>

                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Resolución de Información Clasificada')}>Resolución de Información Clasificada</li>
                            </Link>

                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Indice de Documentos Disponibles para la Entrega')}>Indice de Documentos Disponibles para la Entrega</li>
                            </Link>

                            <Link to='https://saip.gob.do/apps/sip/?step=one' target='_blank' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li >Enlace al Portal Unico de Solicitud de Acceso a la Información Pública SAIP</li>
                            </Link>

                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Indice de Transparencia Estandarizado')}>Indice de Transparencia Estandarizado</li>
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
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Planificación Estratégica Institucional')}>Planificación Estratégica Institucional</li>
                            </Link>
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Plan Operativo Anual POA')}>Plan Operativo Anual POA</li>
                            </Link>
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}>
                            <li onClick={() => handleCategoryClick('Memorias Institucionales')}>Memorias Institucionales</li>
                            </Link>
                        </ul>
                    )}

                    {/* Other Menu Items */}
                    <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                    <li onClick={() => handleCategoryClick('Publicaciones Oficiales')}>
                    
                        <FontAwesomeIcon icon={faNewspaper} className="menu-icon" /> Publicaciones Oficiales
                    </li>
                    </Link>

                    <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                    <li onClick={() => handleCategoryClick('Estadisticas Institucionales')}>
                        <FontAwesomeIcon icon={faChartBar} className="menu-icon" /> Estadísticas Institucionales
                    </li>
                   </Link>

                    <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                    <li onClick={() => handleCategoryClick('Información Básica sobre Servicios Públicos')}>
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
                            <Link to='https://311.gob.do/' target="_blank" style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li >Enlace Directo al Portal 311</li>
                            </Link>

                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Estadísticas de las Quejas, Reclamaciones y Sugerencias Recibidas a través del 311')}>Estadísticas de las Quejas, Reclamaciones y Sugerencias Recibidas a través del 311</li>
                        </Link>
                        </ul>
                    )}

                      <Link to='/folders/' style={{textDecoration:'none', color:'white'}}>
                    <li onClick={() => handleCategoryClick('Declaración Jurada de Patrimonio')}>
                    
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
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Presupuesto Aprobado del Año')}>Presupuesto Aprobado del Año</li>
                            </Link>
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
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
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Nómina de Empleados')}>Nómina de Empleados</li>
                            </Link>
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Jubilaciones, Pensiones y Retiros')}>Jubilaciones, Pensiones y Retiros</li>
                            </Link>
                            <Link to='https://map.gob.do/Concursa/' target='_blank' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Enlace al Portal Concursa Administrado por el Ministerio de Administración Pública MAP')}>Enlace al Portal Concursa Administrado por el Ministerio de Administración Pública MAP</li>
                        </Link>
                        </ul>
                    )}

                    <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                    <li onClick={() => handleCategoryClick('Programas Asistenciales')}>
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
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Cómo Registrarse como Proveedor del Estado?')}>Cómo Registrarse como Proveedor del Estado?</li>
                            </Link>

                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Plan Anual de Compras y Contrataciones (PACC)')}>Plan Anual de Compras y Contrataciones (PACC)</li>
                            </Link>

                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Licitaciones Públicas Nacionales e Internacionales')}>Licitaciones Públicas Nacionales e Internacionales</li>
                            </Link>

                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Licitaciones Restringidas')}>Licitaciones Restringidas</li>
                            </Link>

                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Sorteos de Obras')}>Sorteos de Obras</li>
                            </Link>
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Comparaciones de Precios')}>Comparaciones de Precios</li>
                            </Link>
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Compras Menores')}>Compras Menores</li>
                            </Link>
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Subasta Inversa')}>Subasta Inversa</li>
                            </Link>
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Relación de Compras por Debajo del Umbral')}>Relación de Compras por Debajo del Umbral</li>
                            </Link>
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Micro, Pequeñas y Medianas Empresas')}>Micro, Pequeñas y Medianas Empresas</li>
                            </Link>
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Emergencia Nacional')}>Emergencia Nacional</li>
                            </Link>
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Casos de Urgencias')}>Casos de Urgencias</li>
                            </Link>
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Otros Casos de Excepcion')}>Otros Casos de Excepción</li>
                            </Link>
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Relación de Estado de Cuenta de Suplidores')}>Relación de Estado de Cuenta de Suplidores</li>
                            </Link>
                            <Link to='https://comunidad.comprasdominicana.gob.do/Public/Tendering/ContractNoticeManagement/Index?currentLanguage=es&Country=DO&Theme=DGCP&Page=Login' target="_blank"style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li >Portal Transaccional</li>
                            </Link>
                        </ul>
                    )}

                    <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                    <li onClick={() => handleCategoryClick('Proyectos y Programas')}>
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

                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Estados Financieros')}>Estados Financieros</li>
                            </Link>
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Informes Financieros')}>Informes Financieros</li>
                            </Link>
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Ingresos y Egresos')}>Ingresos y Egresos</li>
                            </Link>
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Informes de Auditorías')}>Informes de Auditorías</li>
                            </Link>
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Activos Fijos')}>Activos Fijos</li>
                            </Link>
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
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
                            <Link to='https://datos.gob.do/' target='_blank' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li>Datos Abiertos</li>
                            </Link>
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Estudiantes Beneficiados con el Programa PAE 2017-2023')}>Estudiantes Beneficiados con el Programa PAE 2017-2023</li>
                           </Link>
                           <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Beneficiados con Programa de Epidemiología 2017-2023')}>Beneficiados con Programa de Epidemiología 2017-2023</li>
                     </Link>
                     <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Estudiantes Beneficiados con el Programa de Salud Auditiva 2020-2023')}>Estudiantes Beneficiados con el Programa de Salud Auditiva 2020-2023</li>
                     </Link>
                     <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Beneficiados con el Programa de Salud Bucal')}>Beneficiados con el Programa de Salud Bucal</li>
                     </Link>
                     <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Beneficiados con Utileria Escolar 2017-2023')}>Beneficiados con Utileria Escolar 2017-2023</li>
                     </Link>
                     <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Listado de Centros PAE 2017-2023')}>Listado de Centros PAE 2017-2023</li>
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
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Listado de Miembros y Medios de Contacto')}> Listado de Miembros y Medios de Contacto</li>
                            </Link>
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Compromiso Ético')}>Compromiso Ético</li>
                            </Link>
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Plan de Trabajo, Informe de Logros y Seguimiento del Plan')}>Plan de Trabajo, Informe de Logros y Seguimiento del Plan</li>
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
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
                            <li onClick={() => handleCategoryClick('Relación de Consultas Abiertas')}>Relación de Consultas Abiertas</li>
                            </Link>
                            <Link to='/folders/' style={{ textDecoration: 'none', color: '#fff' }}> 
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
