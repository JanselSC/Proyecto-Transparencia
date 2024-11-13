import React, { useState } from 'react';
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

const SideMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState({
        'porta311': false,
        'baselegal' : false,
        'marcolegal' : false,
        'libreacceso' : false,
        'planestrategico' : false,
        'presupuesto' : false,
        'comprasContrataciones': false,
        'recursosHumanos': false,
        'programasAsistenciales': false,
        'finanzas': false,
        'comisionintegridad' : false,
        'consultapublica' : false,
        'Datosabiertos' : false,
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

    return (
        <div className={`side-menu ${isOpen ? 'open' : ''}`}>
            <div className="side-menu-toggle" onClick={toggleMenu}>
                <span className="hamburger"></span>
            </div>
            <div className="menu-items">
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faHome} className="menu-icon" /> Inicio
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faLandmark} className="menu-icon" /> Portal de Transparencia
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBuilding} className="menu-icon" /> Portal Institucional
                    </li>
                    <li onClick={() => toggleSubmenu('baselegal')} className="submenu-toggle">
    <FontAwesomeIcon icon={faBalanceScale} className="menu-icon" />
    <span className="menu-text">Base Legal de la Institución</span>
    <FontAwesomeIcon icon={submenuOpen.baselegal ? faChevronUp : faChevronDown} className="toggle-icon" />
</li>



                    {submenuOpen.baselegal && (
                        <ul className="submenu-content">
                            <li>Constitución de la República Dominicana</li>
                            <li>Leyes</li>
                            <li>Decretos</li>
                            <li>Resoluciones</li>
                            <li>Otras Normativas</li>
                        </ul>
                    )}

                    <li onClick={() => toggleSubmenu('marcolegal')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faBalanceScale} className="menu-icon" /> Marco Legal del Sistema de Transparencia
                        <FontAwesomeIcon icon={submenuOpen.marcolegal ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>

                    {submenuOpen.marcolegal && (
                        <ul className="submenu-content">
                            <li>Leyes</li>
                            <li>Decretos</li>
                            <li>Resoluciones</li>
                            <li>Normativas</li>
                        </ul>
                    )}

                    <li>
                        <FontAwesomeIcon icon={faUsers} className="menu-icon" /> Estructura Orgánica de la Institución
                    </li>

                    <li onClick={() => toggleSubmenu('libreacceso')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faFileAlt} className="menu-icon" /> Oficina de Libre Acceso a la Información
                        <FontAwesomeIcon icon={submenuOpen.libreacceso ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>

                    {submenuOpen.libreacceso && (
                        <ul className="submenu-content">
                            <li>Derecho de los Ciudadanos de Acceder a la Información Pública</li>
                            <li>Estructura Organizacional de la Oficina de libre Acceso a la Información OAI</li>
                            <li>Manual de Oranización de la OAI</li>
                            <li>Manual de Procedimientos de la OAI</li>
                            <li>Estadísticas y Balances de Gestión de la OAI</li>
                            <li>Responsable de Acceso a la Información RAI</li>
                            <li>Resolución de Información Clasificada</li>
                            <li>Índice de Documentos Disponibles para la Entrega</li>
                            <li>Enlace al Portal Unico de Solicitud de Acceso a la Información Pública</li>
                            <li>Índice de Transparencia Estandarizado</li>
                        </ul>
                    )}


                    <li onClick={() => toggleSubmenu('planestrategico')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faChartLine} className="menu-icon" /> Plan Estratégico Institucional
                        <FontAwesomeIcon icon={submenuOpen.planestrategico? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.planestrategico && (
                        <ul className="submenu-content">
                            <li>Planificación Estratégica Institucional</li>
                            <li>Plan Operativo Anual POA</li>
                            <li>Memorias Institucionales</li>
                        </ul>
                    )}

                    <li>
                        <FontAwesomeIcon icon={faNewspaper} className="menu-icon" /> Publicaciones Oficiales
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faChartBar} className="menu-icon" /> Estadísticas Institucionales
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faInfoCircle} className="menu-icon" /> Información Básica sobre Servicios Públicos
                    </li>

                    <li onClick={() => toggleSubmenu('porta311')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faComments} className="menu-icon" /> Porta 311 sobre Quejas, Reclamaciones, Sugerencias y Denuncias
                        <FontAwesomeIcon icon={submenuOpen.porta311 ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.porta311 && (
                        <ul className="submenu-content">
                            <li>Enlace Directo al Portal 311</li>
                            <li>Estadísticas de las Quejas, Reclamaciones y Sugerencias Recibidas a través del 311</li>
                           </ul>
                    )}
                    <li>
                        <FontAwesomeIcon icon={faHandshake} className="menu-icon" /> Declaración Jurada de Patrimonio
                    </li>

                    <li onClick={() => toggleSubmenu('presupuesto')} className="submenu-toggle" style={{marginLeft:'5px'}}>
                        <FontAwesomeIcon icon={faClipboard} className="menu-icon" style={{marginRight:'20px'}} /> Presupuesto
                        <FontAwesomeIcon icon={submenuOpen.presupuesto ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>

                    {submenuOpen.presupuesto && (
                        <ul className="submenu-content">
                            <li>Presupuesto Aprobado del Año</li>
                            <li>Ejecución de Presupuesto</li>
                           
                        </ul>
                    )}
                    <li onClick={() => toggleSubmenu('recursosHumanos')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faUsers} className="menu-icon" /> Recursos Humanos
                        <FontAwesomeIcon icon={submenuOpen.recursosHumanos ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.recursosHumanos && (
                        <ul className="submenu-content">
                            <li>Nómina de Empleados</li>
                            <li>Jubilaciones, Pensiones y Retiros</li>
                            <li>Enlace al Portal Concursa Administrado por el Ministerio de Administración Pública MAP</li>
                            
                        </ul>
                    )}
                    <li>
                        <FontAwesomeIcon icon={faClipboard} className="menu-icon" style={{marginLeft:'5px'}} /> Programas Asistenciales
                    </li>
                    <li onClick={() => toggleSubmenu('comprasContrataciones')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faShoppingCart} className="menu-icon" /> Compras y Contrataciones Públicas
                        <FontAwesomeIcon icon={submenuOpen.comprasContrataciones ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.comprasContrataciones && (
                        <ul className="submenu-content">
                            <li>Cómo Registrarse como Proveedor del Estado?</li>
                            <li>Plan Anual de Compras y Contrataciones (PACC)</li>
                            <li>Licitaciones Públicas Nacionales e Internacionales</li>
                            <li>Licitaciones Restringidas</li>
                            <li>Sorteos de Obras</li>
                            <li>Comparaciones de Precios</li>
                            <li>Compras Menores</li>
                            <li>Subasta Inversa</li>
                            <li>Relación de Compras por Debajo del Umbral</li>
                            <li>Micro, Pequeñas y Medianas Empresas MiPymes</li>
                            <li>Emergencia Nacional</li>
                            <li>Casos de Urgencias</li>
                            <li>Otros Casos de Excepción</li>
                            <li>Relación de Estado de Cuentas de Suplidores</li>
                            <li>Portal Transaccional</li>

                        </ul>
                    )}
                    <li>
                        <FontAwesomeIcon icon={faProjectDiagram} className="menu-icon" /> Proyectos y Programas
                    </li>
                    <li onClick={() => toggleSubmenu('finanzas')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faMoneyCheckAlt} className="menu-icon" /> Finanzas
                        <FontAwesomeIcon icon={submenuOpen.finanzas ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.finanzas && (
                        <ul className="submenu-content">
                            <li>Estados Financieros</li>
                            <li>Informes Financieros</li>
                            <li>Ingresos y Egresos</li>
                            <li>Informes de Auditorías</li>
                            <li>Activos Fijos</li>
                            <li>Inventario en Almacén</li>
                        </ul>
                    )}


                    <li onClick={() => toggleSubmenu('datosabiertos')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faDatabase} className="menu-icon" /> Datos Abiertos
                        <FontAwesomeIcon icon={submenuOpen.datosabiertos ? faChevronUp : faChevronDown} className="toggle-icon"/>
                    </li>
                    {submenuOpen.datosabiertos && (
                        <ul className="submenu-content">
                            <li>Datos Abiertos</li>
                            <li>Estudiantes Beneficiados con el Programa PAE 2017-2023</li>
                            <li>Beneficiados con Programa de Epidemiología 2017-2023</li>
                            <li>Estudiantes Beneficiados con el Programa de Salud Auditiva 2020-2023</li>
                            <li>Estudiantes Beneficiados con el Programa de Salud Bucal</li>
                            <li>Estudiantes Beneficiados con el Programa de Utilería Escolar 2017-2023</li>
                            <li>Listado de Centros PAE 2017-2023</li>
                        </ul>
                    )}
                    <li onClick={() => toggleSubmenu('comisionintegridad')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faGavel} className="menu-icon" /> Comisión de Integridad Gubernamental y Cumplimiento Normativo (CIGCN)
                        <FontAwesomeIcon icon={submenuOpen.comisionintegridad ? faChevronUp : faChevronDown} className="toggle-icon" />
                    </li>
                    {submenuOpen.comisionintegridad && (
                        <ul className="submenu-content">
                            <li>Listados de Miembros y Medios de Contacto</li>
                            <li>Compromiso Ético </li>
                            <li>Plan de Trabajo, Informe de Logros y Seguimiento al Plan</li>
                            
                        </ul>
                    )}
                    <li onClick={() => toggleSubmenu('consultapublica')} className="submenu-toggle">
                        <FontAwesomeIcon icon={faGlobe} className="menu-icon" /> Consulta Pública
                        <FontAwesomeIcon icon={submenuOpen.consultapublica ? faChevronUp : faChevronDown} className="toggle-icon"/>
                    </li>
                    {submenuOpen.consultapublica && (
                        <ul className="submenu-content">
                            <li>Relación de Consultas Abiertas</li>
                            <li>Relación de Consultas Públicas</li>
                           
                        </ul>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default SideMenu;
