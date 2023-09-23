const routes= {
// Paginas
    home: "/Pagina_Web",
    login: "/sign-in",
    identidy: "/valideIdentidy",
    changePassword: "/recover",
    chapter: "/Pagina_Web/chapter",
    chapterId: "/Pagina_Web/chapter/:chapterId",
    login: "/login",
    notFound: "*",

// Secciones 
  //  seccionInicio: "#inicio",
    seccionQuienesSomos: "#quienes-somos",
    seccionCapitulos: "#capitulos",
    seccionEquipo: "#equipo",
    seccionEventos: "#eventos",
    seccionComentarios: "#comentarios",

// Rutas Admin
    admin: "/dashport",
    adminId: "/dashport/:dashportPage",
    adminUser: "/dashport/user",
    adminMember: "/dashport/member",
    AdminChapter: "/dashport/chapter",
    AdminMessage: "/dashport/message"
    // dashportHome: "/DashportHome",
}

export default routes;
