const routes= {
// Paginas
    home: "/Pagina_Web",
    chapter: "/Pagina_Web/chapter",
    chapterId: "/Pagina_Web/chapter/:chapterId",
    login: "/Pagina_Web/login",
    identidy: "/Pagina_Web/valideIdentidy",
    changePassword: "/Pagina_Web/recover",
    contact: "/Pagina_Web/contact",
    events: "/Pagina_Web/events",
    zonaCentro: "/Pagina_Web/zona-centro",
    unRobot: "/Pagina_Web/unRobot",
    test: "/Pagina_Web/test",
    notFound: "*",

// Secciones 
  //  seccionInicio: "#inicio",
    seccionQuienesSomos: "#quienes-somos",
    seccionCapitulos: "#capitulos",
    seccionEquipo: "#equipo",
    seccionEventos: "#eventos",
    seccionComentarios: "#comentarios",

// Rutas Admin
    admin: "/Pagina_Web/dashport",
    adminId: "/Pagina_Web/dashport/:dashportPage",
    adminUser: "/Pagina_Web/dashport/user",
    adminMember: "/Pagina_Web/dashport/member",
    AdminChapter: "/Pagina_Web/dashport/chapter",
    AdminMessage: "/Pagina_Web/dashport/message",
    AdminZonaCentro: "/Pagina_Web/dashport/ZonaCentro"
    // dashportHome: "/DashportHome",
}

export default routes;
